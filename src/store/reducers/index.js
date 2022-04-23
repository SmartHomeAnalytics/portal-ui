import { combineReducers } from 'redux'
import * as AuthActions from '../actions/types/auth'

import tests from './tests'
import auth from './auth'

export const appReducer = combineReducers({
  tests,
  auth,
})

export default (state, action) => {
  switch (action.type) {
    case AuthActions.LOGOUT:
      return appReducer({}, action)
    default:
      return appReducer(state, action)
  }
}
