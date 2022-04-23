import { getAPIPath, request } from './utils'
import * as Schema from './schemas'

export const fetchMe = () => request(
  getAPIPath('v1/person/me'),
  { method: 'GET' },
  Schema.personResponse,
)
