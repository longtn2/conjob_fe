import { START_LOADING } from './../constants/constants';
import { Action } from 'redux';
import { FormLoginType, FormRegisterType } from './interfaces';
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

interface ReduxAction<T> {
  type: string;
  payload?: T;
}

export enum LoadingType {
  START_LOADING = 'START_LOADING',
  FETCH_LOADING = 'FETCH_LOADING',
  FETCH_ERROR = 'FETCH_ERROR',
}

export interface startLoading extends ReduxAction<void> {
  type: LoadingType.START_LOADING;
}

export interface endLoading extends ReduxAction<void> {
  type: LoadingType.FETCH_LOADING;
}

export interface errorLoading extends ReduxAction<void> {
  type: LoadingType.FETCH_ERROR;
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
