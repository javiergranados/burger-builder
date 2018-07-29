import React from 'react'

import classes from './Toolbar.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () => (
  <header className={classes.toolbar}>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
)

export default toolbar
