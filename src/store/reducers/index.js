import { combineReducers } from 'redux'
import * as AuthActions from '../actions/types/auth'

import auth from './auth'
import person from './person'
import tests from './tests'

export const appReducer = combineReducers({
  auth,
  person,
  tests,
})

export default (state, action) => {
  switch (action.type) {
    case AuthActions.LOGOUT:
      return appReducer({}, action)
    default:
      return appReducer(state, action)
  }
}
