import { all, race, take } from 'redux-saga/effects'
import { setToken } from '../../api/utils'
import * as AuthActions from '../actions/types/auth'

import tests from './tests'

export default function* () {
  while (true) {
    const [cancel] = yield race([
      take(AuthActions.LOGOUT),
      all([
        tests(),
      ]),
    ])

    // if cancelled because of LOGOUT action, clear tokens
    if (cancel) {
      setToken()
    }
  }
}
