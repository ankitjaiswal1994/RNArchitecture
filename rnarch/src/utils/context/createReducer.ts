import { Reducer } from 'react';

import { Action, AnyAction, PayloadAction } from './createAction';

/**
 * An *case reducer* is a reducer function for a speficic action type. Case
 * reducers can be composed to full reducers using `createReducer()`.
 */
export type CaseReducer<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A,
) => S;

/**
 * A mapping from action types to case reducers for `createReducer()`.
 */
export interface CaseReducersMapObject<S = any, A extends Action = AnyAction> {
  [actionType: string]: CaseReducer<S, A>;
}

/**
 * A utility function that allows defining a reducer as a mapping from action
 * type to *case reducer* functions that handle these action types. The
 * reducer's initial state is passed as the first argument.
 *
 * @param actionsMap A mapping from action types to action-type-specific
 *   case redeucers.
 */
export function createReducer<S = any, A extends Action = PayloadAction>(
  actionsMap: CaseReducersMapObject<S, A>,
): Reducer<S, A> {
  return function reducer(state, action): S {
    const caseReducer = actionsMap[action.type];

    return caseReducer ? caseReducer(state, action as A) : state;
  };
}
