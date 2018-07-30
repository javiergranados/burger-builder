import React from 'react'

import classes from './SideDrawer.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = props => {
  let sideDrawerClasses = [classes.sideDrawer, classes.close]
  if (props.open) {
    sideDrawerClasses = [classes.sideDrawer, classes.open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer
