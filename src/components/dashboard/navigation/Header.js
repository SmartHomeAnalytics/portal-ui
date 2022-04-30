import React, { forwardRef } from 'react'
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/styles'
import SmartHomeLogoSvg from '../../icons/SmartHomeLogo'
import LogoutButton from '../../login/LogoutButton'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 999999,
    boxShadow: '0 1px 3px 0 rgba(229, 229, 229, 1)',
    [theme.breakpoints.up('md')]: {
      left: 0,
      top: 0,
      position: 'fixed',
    },
  },
  toolbar: {
    height: theme.constants.toolbarHeight,
  },
  toolbarGutters: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  logoName: {
    fontSize: '1.8rem',
    color: theme.colors.primary,
    margin: theme.spacing(0.5, 0, 0, 1),
  },
}), { name: 'Header' })

const Header = forwardRef(function Header({
  onSandwichClicked,
}, ref) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <AppBar
      className={classes.appBar}
      color="inherit"
      position="relative"
      ref={ref}
    >
      <Toolbar classes={{ regular: classes.toolbar, gutters: classes.toolbarGutters }}>
        <Grid container alignItems="center" wrap="nowrap">
          <Grid container item xs alignItems="center">
            <IconButton aria-label="Open menu" size="large" onClick={onSandwichClicked}>
              <MenuIcon />
            </IconButton>
            <SmartHomeLogoSvg fill={theme.colors.primary} style={{ marginLeft: 32 }} />
            <Typography className={classes.logoName}>Smart Home Analytics</Typography>
          </Grid>
          <LogoutButton />
        </Grid>
      </Toolbar>
    </AppBar>
  )
})

export default Header
