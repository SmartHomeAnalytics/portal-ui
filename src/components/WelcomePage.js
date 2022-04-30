import React from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import LoginButton from './login/LoginButton'
import LogoutButton from './login/LogoutButton'
import SmartHomeLogo from './icons/SmartHomeLogo'
import WelcomeImage from './icons/WelcomeImage'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  aboutUs: {
    marginTop: theme.spacing(16),
    padding: theme.spacing(8),
    borderRadius: '25px 0 0 0',
    backgroundColor: theme.colors.darkBackground,
    boxShadow: theme.constants.welcomeCardShadow,
  },
  aboutUsLabel: {
    textTransform: 'uppercase',
    fontWeight: 200,
    fontSize: '1.8rem',
    color: theme.colors.white,
  },
  aboutUsTitle: {
    fontSize: '4.0rem',
    fontWeight: 200,
    lineHeight: 1,
    color: theme.colors.white,
  },
  aboutUsText: {
    marginTop: theme.spacing(3),
    color: theme.colors.white,
  },
  actionButton: {
    marginTop: theme.spacing(6),
  },
  welcomeImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'cover',
  },
}), { name: 'ChatTable' })

const WelcomePage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={6}>
        <WelcomeImage className={classes.welcomeImage} />
      </Grid>
      <Grid container item className={classes.aboutUs} direction="column" justifyContent="space-between" xs={6}>
        <Grid container item direction="column">
          <Typography className={classes.aboutUsLabel} variant="h1">About us</Typography>
          <Typography className={classes.aboutUsTitle}>Welcome to Smart Home Analytics</Typography>
          <Typography className={classes.aboutUsText} variant="body2">Smart home analytics is a smart service that
            allows you to configure and manage smart
            home sensors through the control panel. This dashboard includes some charts, graphs, gauges,
            and other monitoring components. If some indicators should not exceed a certain threshold,
            you can set up appropriate alerts - in this case, we will notify you by email or telegram.<br /> <br />

            Don&apos;t lose you chance to make your home even smarter - sign up now!
          </Typography>
          <LoginButton className={classes.actionButton} color="primaryLight" variant="outlined" />
          <LogoutButton className={classes.actionButton} color="primaryLight" variant="outlined" />
        </Grid>

        <Grid container item justifyContent="center">
          <SmartHomeLogo fill="#ffffff" height={40} width={40} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WelcomePage
