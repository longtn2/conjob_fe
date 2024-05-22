import { all } from 'redux-saga/effects';
import watchLogin from '@/redux/sagas/authSagas';

export default function* rootSaga() {
  yield all([watchLogin()]);
}