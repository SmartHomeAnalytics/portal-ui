import { secondLevelMerge } from '../../utils/collections'
import { getErrorMessage } from '../../utils/errors'

import { FETCH_ME, FETCH_ME_FAILURE, FETCH_ME_SUCCESS, UPDATE_PERSONS } from '../actions/types/person'

export const INITIAL_STATE = {
  list: [],
  map: {},
  isLoading: false,
  error: null,
  userId: null,
}

const person = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PERSONS:
      return { ...state, map: secondLevelMerge(state.map, action.persons) }

    case FETCH_ME:
      return { ...state, isLoading: true, userId: null }
    case FETCH_ME_SUCCESS:
      return { ...state, userId: action.userId, isLoading: false }
    case FETCH_ME_FAILURE:
      return { ...state, error: getErrorMessage(action.error), isLoading: false }

    default:
      return state
  }
}

export default person
export const getPerson = state => state.person

export const getPersonList = state => getPerson(state).list
export const getPersonMap = state => getPerson(state).map
export const getPersonIsLoading = state => getPerson(state).isLoading
export const getPersonError = state => getPerson(state).error
export const getCurrentUserId = state => getPerson(state).userId
export const getCurrentUser = state => getPersonMap(state)[getCurrentUserId(state)]
