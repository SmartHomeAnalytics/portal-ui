import { put, takeLeading, all } from 'redux-saga/effects'

import { call } from 'ramda'
import * as API from '../../api'
import requestAPI from './utils/requestAPI'
import updateEntities from './utils/updateEntities'

import { FETCH_ME } from '../actions/types/person'
import { fetchMeFailure, fetchMeSuccess } from '../actions/person'

export function* watchFetchMeSaga() {
  try {
    const { entities, result } = yield* requestAPI(API.fetchMe)
    yield call(updateEntities, entities)

    const personId = result?.data
    yield put(fetchMeSuccess(personId))
  } catch (error) {
    yield put(fetchMeFailure(error))
  }
}

function* watchFetchMe() {
  yield takeLeading(FETCH_ME, watchFetchMeSaga)
}

export default function* authSaga() {
  yield all([
    watchFetchMe(),
  ])
}
