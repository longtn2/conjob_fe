// src/redux/reducers/authReducer.ts
import {
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/authAction';

interface AuthState {
  userName: string | null;
  role: string | null;
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userName: '',
  role: '',
  token: '',
  refreshToken: '',
  loading: false,
  error: ''
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userName: action.payload.userName,
        role: action.payload.role,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default authReducer;
