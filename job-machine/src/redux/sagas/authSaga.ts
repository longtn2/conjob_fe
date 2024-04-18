// sagas.js
import { take, call, put } from 'redux-saga/effects';
import { LoginSuccessAction, RegisterSuccessAction } from '../../interfaces';
import { fakeCallApi, fakeCallApiRegister } from '../../helper';
import { SagaIterator } from 'redux-saga';
import {
  loginFail,
  loginSuccess,
  registerFail,
  registerSuccess,
} from '../actions/authAction';

function* loginSaga(action: LoginSuccessAction): SagaIterator {
  try {
    const { email, password } = action.payload;

    const response = yield call(fakeCallApi, { email, password });
    const user = response.data;
    yield put(loginSuccess(user));
  } catch (error: any) {
    yield put(loginFail(error.message));
  }
}

function* registerSaga(action: RegisterSuccessAction): SagaIterator {

  try {
    const { name, email, password } = action.payload;
    const response = yield call(fakeCallApiRegister, {
      name,
      email,
      password,
    });
    const user = response.data;
    yield put(registerSuccess(user));
  } catch (error: any) {
    yield put(registerFail(error.message));
  }
}

function* authSaga(): SagaIterator {
  while (true) {
    const action = yield take(['LOGIN_REQUEST', 'REGISTER_REQUEST']);
    if (action.type === 'LOGIN_REQUEST') {
      yield call(loginSaga, action);
    } else if (action.type === 'REGISTER_REQUEST') {
      yield call(registerSaga, action);
    }
  }
}

export default authSaga;
