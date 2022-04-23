import { setToken } from '../api/utils'

export const getToken = async getAccessTokenSilently => {
  try {
    const token = await getAccessTokenSilently()
    setToken(token)
    return token
  } catch (error) {
    // Error is a signal to show login form
  }
  return ''
}
