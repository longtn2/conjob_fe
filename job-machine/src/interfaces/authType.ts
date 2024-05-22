import { RoleType } from './interfaces';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthState {
  loading: boolean;
  userName: string | null;
  role: RoleType[] | null;
  token: string | null;
  refreshToken: string | null;
  error: string | null;
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

interface LoginRequestAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginRequest;
}

interface LoginSuccessAction {
  type: typeof LOGIN_FAILED;
  payload: {
    userName: string;
    token: string;
    refreshToken: string;
    role: RoleType[];
  };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILED;
  payload: string;
}
export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
