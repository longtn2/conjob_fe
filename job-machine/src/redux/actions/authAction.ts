// src/redux/actions/authAction.ts
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: { email: string; password: string };
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    userName: string;
    role: string;
    token: string;
    refreshToken: string;
  };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: { error: string };
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

export const loginRequest = (values: {
  email: string;
  password: string;
}): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: values
});

export const loginSuccess = (
  userName: string,
  role: string,
  token: string,
  refreshToken: string
): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { userName, role, token, refreshToken }
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: { error }
});
