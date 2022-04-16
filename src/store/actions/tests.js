import {
  FETCH_TESTS,
  FETCH_TESTS_FAILURE,
  FETCH_TESTS_SUCCESS,
  UPDATE_TESTS,
} from './types/tests'

export const fetchTests = () => ({ type: FETCH_TESTS })
export const fetchTestsFailure = error => ({ type: FETCH_TESTS_FAILURE, error })
export const fetchTestsSuccess = list => ({ type: FETCH_TESTS_SUCCESS, list })

export const updateTests = tests => ({ type: UPDATE_TESTS, tests })
