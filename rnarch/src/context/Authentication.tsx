/* eslint-disable no-console */
import { useCallback, useReducer } from 'react';
import {
  createContainer,
  createReducer,
  createAsyncActions,
  createAction,
} from 'utils/context';
import i18n from 'i18n-js';

export type AuthState = {
  language: string;
};
const initialState: AuthState = {
  language: 'en',
};
const actions = {
  login: createAsyncActions('LOGIN'),
  changeLanguage: createAction('CHANGE_LANGUAGE'),
};

const authReducer = createReducer<AuthState>({
  [`${actions.login.loading}`]: state => ({
    ...state,
    loginLoading: true,
  }),
  [`${actions.login.success}`]: (state, { payload }) => ({
    ...state,
    loginLoading: false,
    user: payload?.user,
    isLoggedIn: true,
  }),
  [`${actions.login.failure}`]: state => ({
    ...state,
    loginLoading: false,
  }),
  [`${actions.changeLanguage}`]: (state, { payload }) => ({
    ...state,
    language: payload,
  }),
});

export const {
  useContext: useAuth,
  Context: AuthContext,
  Provider: AuthProvider,
  TestProvider: TestAuthProvider,
} = createContainer(() => {
  const [{ language, ...state }, dispatch] = useReducer(
    authReducer,
    initialState,
  );

  const changeLanguage = useCallback(async () => {
    dispatch(actions.changeLanguage('fr'));
    i18n.reset();
  }, []);

  return {
    state: {
      ...state,
      language,
    },
    actions: {
      changeLanguage,
    },
  };
});

export default useAuth;
