import React from 'react'

import classes from './NavigationItems.css'

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItem = () => (
  <ul className={classes.navigationItems}>
    <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Ckeckout</NavigationItem>
  </ul>
)

export default navigationItem
