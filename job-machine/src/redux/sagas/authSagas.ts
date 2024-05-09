import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthApi } from '@/api/auth/AuthApi';
import { LOGIN_REQUEST, LoginRequest } from '@/interfaces/authType';
import { loginFailure, loginSuccess } from '../actions/authAction';

function* handleLogin(action: {
  type: typeof LOGIN_REQUEST;
  payload: LoginRequest;
}) {
  if (action.type === LOGIN_REQUEST) {
    try {
      const response = yield call(AuthApi.apiLogin, action.payload);
      const { user_name, role, token, refreshToken } = response.data;
      yield put(loginSuccess(user_name, role, token, refreshToken));
    } catch (error) {
      yield put(loginFailure(error.message));
    }
  }
}

export default function* watchLogin() {
  while (true) {
    yield takeLatest(LOGIN_REQUEST, handleLogin);
  }
}
