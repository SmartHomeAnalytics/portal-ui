import jwtDecode from 'jwt-decode'
import moment from 'moment'

const COOKIE_TTL = 60 * 60 * 24 * 7

const parseToken = token => {
  try {
    return jwtDecode(token)
  } catch (error) {
    return null
  }
}

export const setTokenCookie = token => {
  const expirationUnixTimestamp = token
    ? parseToken(token)?.exp
    : undefined

  const cookieTtl = expirationUnixTimestamp
    ? Math.max(expirationUnixTimestamp - moment().unix(), 0)
    : COOKIE_TTL

  document.cookie = `JWT=${token}; path=/; max-age=${cookieTtl}`
}
