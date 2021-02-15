import React from 'react';
/**
 * Composes React elements and components into a single React component.
 * Props passed to the composed component get passed down to each of the
 * components within the composition.
 *
 * This is useful for making code with a high amount of nested components cleaner
 * Example: React context providers
 *
 * @export
 * @param {(...Array<
 *     | React.ReactElement<any>
 *     | React.ComponentType<any>
 *     | React.ExoticComponent<any>
 *   >)} components
 * @returns {React.ComponentType<any>}
 */
export function composeComponents(
  ...components: Array<
    | React.ReactElement<any>
    | React.ComponentType<any>
    | React.ExoticComponent<any>
  >
): React.ComponentType<any> {
  return (props: any) =>
    components.reduceRight(
      (composed: any, Component) =>
        // Function component
        typeof Component === 'function' ||
        // React internal components like Fragment, Suspense, etc. are symbols
        typeof Component === 'symbol' ||
        // Class component
        Component instanceof React.Component
          ? React.createElement(
              Component as React.ComponentType<any>,
              // React.Fragment doesn't accept any props other than children
              // Other React internal components should be instantiated as elements
              typeof Component === 'symbol' ? undefined : props,
              composed,
            )
          : // React element
            React.cloneElement(Component, {
              ...props,
              children: composed,
            }),
      React.createElement(React.Fragment, undefined, props.children),
    ) as any;
}

composeComponents.displayName = 'ComposedComponents';

interface IComposedProps {
  components: Array<React.ReactElement<any> | React.ComponentType<any>>;
  [key: string]: any;
}

export const Composed: React.SFC<IComposedProps> = ({
  components,
  ...props
}) => {
  const Component = composeComponents(...components);

  return <Component {...props} />;
};

Composed.displayName = 'Composed';
