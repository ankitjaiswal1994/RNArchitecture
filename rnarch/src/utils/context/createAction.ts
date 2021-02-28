/**
 * An *action* is a plain object that represents an intention to change the
 * state.
 *
 * @template T the type of the action's `type` tag.
 */
export interface Action<T = any> {
  type: T;
}

/**
 * An Action type which accepts any other properties.
 */
export interface AnyAction extends Action {
  [extraProps: string]: any;
}

/**
 * An action with a string type and an associated payload. This is the
 * type of action returned by `createAction()` action creators.
 *
 * @template P The type of the action's payload.
 * @template T the type used for the action type.
 */
export interface PayloadAction<P = any, T extends string = string>
  extends Action<T> {
  payload?: P;
}

/**
 * Extracts the action type definition from a `PayloadAction` or `PayloadActionCreator`.
 *
 * @template A The action to extract the type definition from
 */
export type ExtractAction<A> = A extends
  | PayloadActionCreator<infer P, infer T>
  | PayloadAction<infer P, infer T>
  ? PayloadAction<P, T>
  : A extends Action
  ? A
  : never;

/**
 * An action creator that produces actions with a `payload` attribute.
 */
export interface PayloadActionCreator<P = any, T extends string = string> {
  (): Action<T>;
  (payload: P): PayloadAction<P, T>;
  type: T;
}

/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overriden so that it returns the action type,
 * allowing it to be used in reducer logic that is looking for that action type.
 *
 * @param type The action type to use for created actions.
 */
export function createAction<P = any, T extends string = string>(
  type: T,
): PayloadActionCreator<P, T> {
  function actionCreator(): Action<T>;
  function actionCreator(payload: P): PayloadAction<P, T>;
  function actionCreator(payload?: P): Action<T> | PayloadAction<P, T> {
    return { type, payload };
  }

  actionCreator.toString = (): T => `${type}` as T;

  actionCreator.type = type;

  return actionCreator;
}

/**
 * Returns the action type of the actions created by the passed
 * `createAction()`-generated action creator (arbitrary action creators
 * are not supported).
 *
 * @param action The action creator whose action type to get.
 * @returns The action type used by the action creator.
 */
export function getType<T extends string>(
  actionCreator: PayloadActionCreator<any, T>,
): T {
  return `${actionCreator}` as T;
}

export function createAsyncActions<PayloadType = any>(name: string) {
  const loading = createAction<PayloadType>(`${name}_LOADING`);
  const success = createAction<PayloadType>(`${name}_SUCCESS`);
  const failure = createAction<PayloadType>(`${name}_FAILURE`);

  type AsyncActionType = typeof loading;

  type AsyncActionProperties = {
    loading: AsyncActionType;
    success: AsyncActionType;
    failure: AsyncActionType;
  };

  const actions: AsyncActionType[] & Partial<AsyncActionProperties> = [
    loading,
    success,
    failure,
  ];

  actions.loading = loading;
  actions.success = success;
  actions.failure = failure;

  return actions as AsyncActionType[] & AsyncActionProperties;
}
