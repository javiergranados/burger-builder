import React from 'react'

import classes from './Toolbar.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuDrawer from '../SideDrawer/MenuDrawer/MenuDrawer'

const toolbar = props => (
  <header className={classes.toolbar}>
    {/* <div className={[classes.menu, classes.mobileOnly].join(' ')} onClick={props.showMenu}>MENU</div> */}
    <MenuDrawer clicked={props.showMenu} />
    <div className={classes.logo}><Logo /></div>
    <nav className={classes.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
