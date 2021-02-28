import React from 'react';
import { DeepPartial } from 'typings/utils';

type ProviderProps = {
  children?: React.ReactNode;
};

type TestProviderProps<P> = ProviderProps & {
  overrides?: DeepPartial<P>;
};

/**
 * A utility to create a Context "container".
 *
 * The container automatically creates a React Context, and a custom provider
 * for the Context that determines its value from React Hook passed to it.
 *
 * @param useValue React hook that manages context value
 * @param createMemoInputs Only re-render when the values specified change
 */
export function createContainer<P, V>(
  useValue: (props: P & { stateOverrides?: any }) => V,
  createMemoInputs?: (value: V) => any[],
) {
  const Context = React.createContext({} as V);

  const Provider: React.FC<ProviderProps & P> = props => {
    const value = useValue(props);

    const memoizedValue = createMemoInputs
      ? // createMemoInputs won't change between renders, so this is okay
        // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
        React.useMemo(() => value, createMemoInputs(value))
      : value;

    const { children } = props;

    return (
      <Context.Provider value={memoizedValue}>{children}</Context.Provider>
    );
  };

  const useContext = () => React.useContext(Context);

  const exports = {
    useContext,
    Context,
    Provider,
    TestProvider: Provider as React.FC<TestProviderProps<P> & P>,
  };

  // TestProvider needs to be reworked entirely.
  // Avoid using there where possible
  if (process.env.NODE_ENV === 'test') {
    const TestProvider: React.FC<TestProviderProps<P> & P> = props => {
      const { children, overrides = {} } = props;

      const value = useValue({
        ...props,
        stateOverrides: (overrides as any).state,
      });

      const memoizedValue = createMemoInputs
        ? // createMemoInputs won't change between renders, so this is okay
          // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
          React.useMemo(() => value, createMemoInputs(value))
        : value;

      const testValue = Object.entries(overrides).reduce<any>((tv, [k, v]) => {
        tv[k] = { ...tv[k], ...(v as any) };

        return tv;
      }, memoizedValue);

      return <Context.Provider value={testValue}>{children}</Context.Provider>;
    };

    exports.TestProvider = TestProvider;
  }

  return exports;
}
