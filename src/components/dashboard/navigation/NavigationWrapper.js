import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Header from './Header'
import SlidingMenu from './SlidingMenu'

const NavigationWrapper = () => {
  const [leftPanelOpen, setLeftPanelOpen] = useState(false)

  const menuConfig = [
    {
      id: uuid(),
      text: 'Dashboard',
      icon: MenuIcon,
      url: '/dashboard',
    },
    {
      id: uuid(),
      text: 'Settings',
      icon: MenuIcon,
      url: '/settings',
    },
  ]

  return (
    <>
      <Header
        onSandwichClicked={() => setLeftPanelOpen(!leftPanelOpen)}
      />
      <SlidingMenu
        menuConfig={menuConfig}
        open={leftPanelOpen}
        setOpen={setLeftPanelOpen}
      />
    </>
  )
}

export default NavigationWrapper
