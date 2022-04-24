import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import HomePage from './dashboard/HomePage'
import WelcomePage from './WelcomePage'
import ScrollToTop from './ScrollToTop'
import AuthProvider from './login/AuthProvider'
import AuthWatcher from './login/AuthWatcher'

const useStyles = makeStyles(theme => ({
  page: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}), { name: 'App' })

const App = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop>
            <div className={classes.page}>
              <Routes>
                <Route element={<WelcomePage />} path="welcome" />
                <Route element={<HomePage />} path="/*" />
              </Routes>
            </div>
            <AuthWatcher />
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
