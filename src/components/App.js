import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import HomePage from './dashboard/HomePage'
import Auth from './login/Auth'
import RegistrationForm from './login/RegistrationForm'
import ScrollToTop from './ScrollToTop'

const useStyles = makeStyles(theme => ({
  page: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}), { name: 'App' })

const App = () => {
  const classes = useStyles()

  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop>
          <div className={classes.page}>
            <Routes>
              <Route element={<Auth />} path="auth/*" />
              <Route element={<RegistrationForm />} path="register/*" />
              <Route element={<HomePage />} path="/*" />
            </Routes>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
