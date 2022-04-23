import {
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  UPDATE_PERSONS,
} from './types/person'

export const fetchMe = () => ({ type: FETCH_ME })
export const fetchMeSuccess = userId => ({ type: FETCH_ME_SUCCESS, userId })
export const fetchMeFailure = error => ({ type: FETCH_ME_FAILURE, error })

export const updatePersons = persons => ({ type: UPDATE_PERSONS, persons })
