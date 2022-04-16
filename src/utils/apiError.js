import { BaseError } from 'make-error'
import * as R from 'ramda'

export default class ApiError extends BaseError {
  constructor(cause, payload) {
    const { config = {}, response = {}, message } = cause || {}
    const { url = 'unknown url', method, params } = config
    const { status, data } = response

    const extendedMessage =
      status
        ? `${method} ${url} results with ${status}`
        : navigator.onLine
          ? `${method} ${url} results with ${message}`
          : `User tried to access ${method} ${url} while being offline`

    const name = `ApiError: ${extendedMessage}`

    super(data?.description || '')
    this.response = R.omit(['request'], response)
    this.arguments = params
    this.responseBody = data
    this.status = status
    this.originalMessage = message
    this.method = method
    this.payload = payload
    this.url = url
    this.name = name
  }
}
