import { useAuth0 } from '@auth0/auth0-react'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../store/actions/auth'
import { getToken } from '../../utils/auth0'
import useLogout from '../../utils/useLogout'
import configData from '../../config.json'

const AuthWatcher = () => {
  const { isAuthenticated, getAccessTokenSilently, logout } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
    async function checkAuthentication() {
      if (isAuthenticated) {
        const token = await getToken(() => getAccessTokenSilently({ audience: configData.audience }))
        dispatch(loginSuccess(token))
      }
    }
    checkAuthentication()
  }, [isAuthenticated])

  useLogout(() => {
    logout({ returnTo: `${window.location.origin}/welcome` })
  })

  return null
}

export default AuthWatcher
