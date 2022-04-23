import { LOGIN_SUCCESS } from '../actions/types/auth'

export const INITIAL_STATE = {
  token: null,
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.token }

    default:
      return state
  }
}

export default auth
export const getAuth = state => state.auth
export const getAuthToken = state => getAuth(state).token
export const getIsAuthenticated = state => Boolean(getAuthToken(state))
