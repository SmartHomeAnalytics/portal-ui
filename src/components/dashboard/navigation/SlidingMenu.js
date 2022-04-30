import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import {
  Grid,
  Drawer,
  List,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import SlidingMenuListItem from './SlidingMenuListItem'

const useStyles = makeStyles(theme => ({
  paper: {
    top: theme.mixins.toolbar.minHeight,
    overflowX: 'hidden',
    bottom: 0,
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      top: 0,
      borderRight: 'none',
    },
    borderRight: `1px solid ${theme.colors.divider}`,
    scrollbarWidth: 'none', // firefox
    '&::-webkit-scrollbar': { // webkit
      display: 'none',
    },
  },
  drawer: {
    width: theme.constants.leftMenuExpandedWidth,
    flexShrink: 0,
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: theme.constants.leftMenuExpandedWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
    [theme.breakpoints.up('md')]: {
      width: theme.constants.leftMenuWidth,
    },
  },
  listContainer: {
    flex: 1,
  },
  mainListContainer: {
    minWidth: '100%',
    flexGrow: 1,
    maxHeight: 1000,
    overflow: 'hidden',
    transition: theme.transitions.create(['max-width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  middleListContainer: {
    flex: 1,
  },
  list: {
    width: '100%',
  },
}), { name: 'SlidingMenu' })

const SlidingMenu = ({
  open,
  setOpen: onOpenChange,
  menuConfig,
}) => {
  const classes = useStyles()

  const [closeTimeout, setCloseTimeout] = useState('')
  const [openTimeout, setOpenTimeout] = useState('')

  const handleOpenChange = newOpen => {
    onOpenChange(newOpen)
  }

  const clearCloseTimeout = () => {
    clearTimeout(closeTimeout)
  }

  const clearOpenTimeout = () => {
    clearTimeout(openTimeout)
  }

  const clearTimeouts = () => {
    clearCloseTimeout()
    clearOpenTimeout()
  }

  useEffect(() =>
    // unmount
    clearTimeouts,
  )

  const handleInnerElementsResize = () => {
    // NOTE: hack for resizing canvas elements
    const MENU_ANIMATION_DURATION = 200

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, MENU_ANIMATION_DURATION)
  }

  const changeOpen = isOpen => {
    clearOpenTimeout()
    clearCloseTimeout()
    handleOpenChange(isOpen)
    handleInnerElementsResize()
  }

  const startCloseTimeout = () => {
    clearCloseTimeout()
    setCloseTimeout(setTimeout(changeOpen, 5000, false))
  }

  const startOpenTimeout = () => {
    clearOpenTimeout()
    setOpenTimeout(setTimeout(changeOpen, 600, true))
  }

  const onMenuMouseEnter = () => {
    clearCloseTimeout()
    startOpenTimeout()
  }

  const onMenuMouseLeave = () => {
    clearOpenTimeout()
    startCloseTimeout()
  }

  return (
    <Drawer
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classNames(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
      variant="permanent"
      onClick={e => e.stopPropagation()}
      onMouseEnter={onMenuMouseEnter}
      onMouseLeave={onMenuMouseLeave}
    >
      <Grid container item className={classes.listContainer} direction="column">
        <Grid container item className={classes.middleListContainer} wrap="nowrap">
          <Grid
            container
            item
            className={classNames(classes.mainListContainer)}
          >
            <List className={classes.list}>
              {menuConfig.map(item => (
                <SlidingMenuListItem
                  item={item}
                  key={item.id}
                  open={open}
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default SlidingMenu
