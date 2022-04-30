import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'

import NavigationWrapper from './navigation/NavigationWrapper'
// import CurrentUserFetcher from './CurrentUserFetcher'
import { ROUTES } from './navigation/navigation'
import { getIsAuthenticated } from '../../store/reducers/auth'

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: '100vh',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  toolbar: {
    display: 'flex',
    height: theme.constants.toolbarHeight,
  },
}), { name: 'Home' })

const Home = () => {
  const classes = useStyles()

  const isAuthenticated = useSelector(getIsAuthenticated)
  const isLoading = true

  if (!isAuthenticated && !isLoading) {
    return <Navigate replace to="/welcome" />
  }

  return (
    // <CurrentUserFetcher>
    <>
      <NavigationWrapper />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route element={<Navigate replace to="/dashboard" />} path="/" />
          {ROUTES.map(({ path, component: Component }, pathIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={pathIndex}>
              <Route element={<Component />} path={path} />
            </React.Fragment>
          ))}
        </Routes>
      </main>
    </>
    // </CurrentUserFetcher>
  )
}

export default Home
