import React from 'react'
// import { parse } from 'query-string'
import { Route, Routes } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// import ForgotPasswordComponent from './ForgotPasswordComponent'
// import LockScreenComponent from './LockScreenComponent'
import LoginForm from './LoginForm'
// import ResetPasswordComponent from './ResetPasswordComponent'
// import useReloadRedirect from '../../utils/useReloadRedirect'
// import { getIsAuthenticated } from '../../store/reducers/auth'

const Auth = () =>
// const authenticated = useSelector(getIsAuthenticated)
// const location = useLocation()
// const { search } = location
// const reloadRedirect = useReloadRedirect()

// const { redirectTo = '/' } = parse(search)

// useEffect(() => {
//   if (authenticated) {
//     reloadRedirect(redirectTo)
//   }
// }, [authenticated])

  (
    <Routes>
      <Route element={<LoginForm />} path="/login" />
    </Routes>
  )

export default Auth
