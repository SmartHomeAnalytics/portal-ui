import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/auth'

const LoginButton = props => {
  const { isAuthenticated } = useAuth0()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    isAuthenticated && (
      <Button onClick={handleLogout} {...props}>
        Log out
      </Button>
    )
  )
}

export default LoginButton
