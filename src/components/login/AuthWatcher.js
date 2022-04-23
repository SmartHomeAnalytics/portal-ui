import { useAuth0 } from '@auth0/auth0-react'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { loginSuccess } from '../../store/actions/auth'
import { getToken } from '../../utils/auth0'
import useLogout from '../../utils/useLogout'

const AuthWatcher = () => {
  const { isAuthenticated, getAccessTokenSilently, logout } = useAuth0()
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    async function checkAuthentication() {
      if (isAuthenticated) {
        const token = await getToken(getAccessTokenSilently)
        dispatch(loginSuccess(token))
      }
    }
    checkAuthentication()
  }, [isAuthenticated])

  useLogout(() => {
    logout()
    // navigate('/welcome', { logout: true })
  })

  return null
}

export default AuthWatcher
