import { combineReducers } from 'redux'
import * as AuthActions from '../actions/types/auth'

import tests from './tests'

export const appReducer = combineReducers({
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
