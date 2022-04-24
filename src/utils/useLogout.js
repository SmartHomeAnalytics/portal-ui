import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { getIsAuthenticated } from '../store/reducers/auth'

const useLogout = callback => {
  const isAuthenticated = useSelector(getIsAuthenticated)
  const [wasAuthenticated, setWasAuthenticated] = useState(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      setWasAuthenticated(true)
    }

    if (!isAuthenticated && wasAuthenticated) {
      callback()
    }
  }, [isAuthenticated])
}

export default useLogout
