import { Action } from 'redux';
import { FormLoginType, FormRegisterType } from './interfaces';
import { GetProp, UploadProps } from 'antd';
export interface User {
  email: string;
  password: string;
}

export interface registerUser {
  username: string;
  email: string;
  password: string;
}
export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
  LOGOUT = 'LOGOUT',
}
export interface LoginRequestAction
  extends Action<AuthActionTypes.LOGIN_REQUEST> {
  payload: FormLoginType;
  [key: string]: any;
}

export interface LoginSuccessAction
  extends Action<AuthActionTypes.LOGIN_SUCCESS> {
  payload: FormRegisterType;
}

export interface LoginFailureAction
  extends Action<AuthActionTypes.LOGIN_FAILURE> {
  payload: string;
}
export interface RegisterRequestAction
  extends Action<AuthActionTypes.REGISTER_REQUEST> {
  payload: FormRegisterType;
  [key: string]: any;
}

export interface RegisterSuccessAction
  extends Action<AuthActionTypes.REGISTER_SUCCESS> {
  payload: FormRegisterType;
}

export interface RegisterFailureAction
  extends Action<AuthActionTypes.REGISTER_FAILURE> {
  payload: string;
}

export interface LogoutAction extends Action<AuthActionTypes.LOGOUT> {}

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | LogoutAction;

export interface AuthState {
  user: User | registerUser | null;
  error: string | null;
  isLoggedIn: boolean;
}

export type FormData = FormLoginType | FormRegisterType;

export interface axiosApi {
  status: number;
  message: string;
  user: FormRegisterType;
}


export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];