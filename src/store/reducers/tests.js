import * as R from 'ramda'

import { getErrorMessage } from '../../utils/errors'
import {
  FETCH_TESTS,
  FETCH_TESTS_FAILURE,
  FETCH_TESTS_SUCCESS,
  UPDATE_TESTS,
} from '../actions/types/tests'

import { secondLevelMerge } from '../../utils/collections'

export const INITIAL_STATE = {
  list: [],
  map: {},
  isLoading: false,
  error: null,
}

const tests = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TESTS_FAILURE:
      return { ...state, error: getErrorMessage(action.error), isLoading: false }
    case FETCH_TESTS_SUCCESS:
      return { ...state, list: R.uniq(action.list), isLoading: false }
    case FETCH_TESTS:
      return { ...state, isLoading: true, list: [] }
    case UPDATE_TESTS:
      return { ...state, map: secondLevelMerge(state.map, action.tests) }

    default:
      return state
  }
}

export default tests
export const getTests = state => state.tests
export const getTestsList = state => getTests(state).list
export const getTestsMap = state => getTests(state).map
export const getMultipleTests = R.curry((ids, state) => R.props(ids, getTestsMap(state)))
export const getTestsIsLoading = state => getTests(state).isLoading
export const getTestsError = state => getTests(state).error
