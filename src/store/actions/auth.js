import {
  LOGOUT,
  LOGIN_SUCCESS,
} from './types/auth'

export const logout = () => ({ type: LOGOUT })
export const loginSuccess = token => ({ type: LOGIN_SUCCESS, token })
