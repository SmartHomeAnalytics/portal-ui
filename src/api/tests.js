import { getAPIPath, request } from './utils'
import * as Schema from './schemas'

export const fetchTests = () => request(
  getAPIPath('v1/test'),
  { method: 'GET' },
  Schema.testList,
)
