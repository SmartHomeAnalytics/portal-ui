import { call, delay, put } from 'redux-saga/effects'
import { includes } from 'ramda'
import { logout } from '../../actions/auth'

import { NetworkErrorMessage } from '../../../utils/errors'

const RETRY_TIMEOUT = 500
const RETRY_COUNT = 3
const RETRYABLE_HTTP_METHODS = ['GET', 'POST', 'PUT']
const RETRYABLE_MESSAGES = [NetworkErrorMessage]

// eslint-disable-next-line consistent-return
function* requestWithRetries(retryOptions, method, ...params) {
  const { count, timeout, methods, messages } = retryOptions

  for (let i = 0; i <= count; i++) {
    try {
      return yield call(method, ...params)
    } catch (err) {
      if (err.status === 401) {
        yield put(logout())
      }

      const matchesHttpMethod = includes(err.method?.toUpperCase() || '', methods)
      const matchesErrorMessage = includes(err.originalMessage, messages)
      const hasNotExhaustedRetryLimit = i < count

      if (matchesHttpMethod && matchesErrorMessage && hasNotExhaustedRetryLimit) {
        yield delay(timeout)
      } else {
        throw err
      }
    }
  }
}

function handleAPIErrorResponses(error) {
  throw error
}

export default function* requestAPI(method, ...params) {
  const retryOptions = {
    count: RETRY_COUNT,
    timeout: RETRY_TIMEOUT,
    methods: RETRYABLE_HTTP_METHODS,
    messages: RETRYABLE_MESSAGES,
  }

  try {
    return yield requestWithRetries(retryOptions, method, ...params)
  } catch (error) {
    return yield handleAPIErrorResponses(error)
  }
}
