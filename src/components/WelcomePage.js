import React from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import LoginButton from './login/LoginButton'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.colors.primarySolidBackground,
  },
  aboutUs: {
    marginTop: theme.spacing(16),
    paddingRight: theme.spacing(4),
  },
  aboutUsLabel: {
    textTransform: 'uppercase',
    fontWeight: 200,
    fontSize: '2.0rem',
  },
  aboutUsTitle: {
    fontSize: '4.0rem',
    fontWeight: 200,
    lineHeight: 1,
  },
  aboutUsText: {
    marginTop: theme.spacing(3),
  },
  loginButton: {
    marginTop: theme.spacing(3),
  },
}), { name: 'ChatTable' })

const WelcomePage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={6} />
      <Grid container item className={classes.aboutUs} direction="column" xs={6}>
        <Typography className={classes.aboutUsLabel} variant="h1">About us</Typography>
        <Typography className={classes.aboutUsTitle}>Welcome to Smart Home Analytics</Typography>
        <Typography className={classes.aboutUsText} variant="body2">Smart home analytics is a smart service that
          allows you to configure and manage smart
          home sensors through the control panel. This dashboard includes some charts, graphs, gauges,
          and other monitoring components. If some indicators should not exceed a certain threshold,
          you can set up appropriate alerts - in this case, we will notify you by email or telegram.<br /> <br />

          Don&apos;t lose you chance to make your home even smarter - sign up now!
        </Typography>
        <LoginButton className={classes.loginButton} variant="outlined" />
      </Grid>
    </Grid>
  )
}

export default WelcomePage
