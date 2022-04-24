import { all, race, take } from 'redux-saga/effects'
import { setToken } from '../../api/utils'
import * as AuthActions from '../actions/types/auth'

import auth from './auth'
import person from './person'
import tests from './tests'

export default function* () {
  while (true) {
    const [cancel] = yield race([
      take(AuthActions.LOGOUT),
      all([
        auth(),
        person(),
        tests(),
      ]),
    ])

    // if cancelled because of LOGOUT action, clear tokens
    if (cancel) {
      setToken()
    }
  }
}
