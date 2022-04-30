import React, { forwardRef } from 'react'
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import MenuIcon from '@mui/icons-material/Menu'
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
  logo: {
    marginTop: 5,
    marginLeft: theme.spacing(2),
  },
}), { name: 'Header' })

const Header = forwardRef(function Header({
  onSandwichClicked,
}, ref) {
  const classes = useStyles()

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
            <SmartHomeLogoSvg style={{ marginLeft: 16 }} />
          </Grid>
          <LogoutButton />
        </Grid>
      </Toolbar>
    </AppBar>
  )
})

export default Header
