import axios from 'axios'
import { path as Rpath } from 'ramda'
import { normalize } from 'normalizr'
import { setTokenCookie } from './cookie'
import ApiError from '../utils/apiError'

export const getAPIPath = path => `http://localhost:8080/${path}`

let TOKEN = ''

export const setToken = accessToken => {
  setTokenCookie(accessToken)
  TOKEN = accessToken
}

export const request = async (path, params = {}, schema) => {
  const requestParameters = { ...params }

  const token = TOKEN
  requestParameters.headers = {
    ...(requestParameters.headers || {}),
    Authorization: `Bearer ${token}`,
  }

  return axios({ ...requestParameters, url: path })
    .then(response => {
      const { data } = response || {}
      return schema ? normalize(data || {}, schema) : data
    })
    .catch(error => {
      const contentType = Rpath(['headers', 'Content-Type'], requestParameters)
      throw new ApiError(
        error,
        contentType === 'multipart/form-data'
          ? 'multipart/form-data'
          : requestParameters.data,
      )
    })
}
