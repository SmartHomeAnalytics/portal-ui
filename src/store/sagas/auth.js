import { put, takeLeading, all } from 'redux-saga/effects'

import { LOGIN_SUCCESS } from '../actions/types/auth'
import { fetchMe } from '../actions/person'

export function* watchLoginSuccessSaga() {
  yield put(fetchMe())
}

function* watchLoginSuccess() {
  yield takeLeading(LOGIN_SUCCESS, watchLoginSuccessSaga)
}

export default function* authSaga() {
  yield all([
    watchLoginSuccess(),
  ])
}
