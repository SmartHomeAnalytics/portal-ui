import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { ExpandMore } from '@mui/icons-material'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { isSelectedItem } from './leftMenuUtils'

const useStyles = makeStyles(theme => ({
  item: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(0, 0.5),
    '&:focus, &:hover, &:visited, &:link, &:active': {
      backgroundColor: theme.colors.tableBackground,
      textDecoration: 'none',
    },
    textDecoration: 'none',
  },
  selectedItem: {
    color: '#FAF8F5',
    backgroundColor: `${theme.colors.selectedItem} !important`,
    '&:focus': {
      backgroundColor: `${theme.colors.selectedItem} !important`,
    },
  },
  itemRoot: {
    '&:hover': {
      backgroundColor: theme.colors.listItemHover,
    },
    height: 40,
    borderRadius: 2,
  },
  icon: {
    minWidth: 0,
    color: 'inherit',
    margin: theme.spacing(0.5),
    marginRight: 0,
    textAlign: 'center',
    width: 24,
    position: 'relative',
  },
  listItemText: {
    minWidth: 'auto',
    paddingLeft: 0,
  },
  primaryItemText: {
    paddingLeft: theme.spacing(1),
    fontWeight: 500,
  },
  textOpen: {
    opacity: 1,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  textClose: {
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  noVisibility: {
    visibility: 'hidden',
  },
}), { name: 'SlidingMenuListItem' })

const SlidingMenuListItem = ({
  item = {},
  open,
  onItemSelected,
  onClick,
}) => {
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()
  const selected = isSelectedItem(item, location)

  const iconColor = selected ? 'inherit' : 'secondary'

  return (
    <ListItem
      button
      disableGutters
      className={classes.item}
      classes={{
        disabled: classes.disabledItem,
        root: classes.itemRoot,
        selected: classes.selectedItem,
      }}
      component={item.Component ?? 'div'}
      selected={selected}
      onClick={event => {
        if (onClick) {
          onClick(event)
        }
        if (item.url) {
          navigate(item.url)
        }
        onItemSelected(item)
      }}
    >
      <ListItemIcon className={classes.icon}>
        {item.icon
          ? <item.icon color={iconColor} />
          : <ExpandMore className={classes.noVisibility} />
        }
      </ListItemIcon>
      <ListItemText
        className={classNames(classes.listItemText, {
          [classes.textOpen]: open,
          [classes.textClose]: !open && item.icon,
        })}
        primary={item.text}
        primaryTypographyProps={{
          className: classes.primaryItemText,
          color: iconColor,
        }}
      />
    </ListItem>
  )
}

export default SlidingMenuListItem
