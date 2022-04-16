import { put, takeLeading, all } from 'redux-saga/effects'

import { call } from 'ramda'
import * as API from '../../api'
import requestAPI from './utils/requestAPI'
import {
  fetchTestsSuccess,
  fetchTestsFailure,
} from '../actions/tests'
import updateEntities from './utils/updateEntities'

import { FETCH_TESTS } from '../actions/types/tests'

export function* fetchTestsSaga() {
  try {
    const {
      result: { data: list },
      entities,
    } = yield* requestAPI(API.fetchTests)
    yield call(updateEntities, entities)
    yield put(fetchTestsSuccess(list))
  } catch (error) {
    yield put(fetchTestsFailure(error))
  }
}

function* watchFetchTests() {
  yield takeLeading(FETCH_TESTS, fetchTestsSaga)
}

export default function* testsSaga() {
  yield all([
    watchFetchTests(),
  ])
}
