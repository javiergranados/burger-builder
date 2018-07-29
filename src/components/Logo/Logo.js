import React from 'react'

import classes from './Logo.css'

import burgerLogo from '../../assets/images/burger-logo.png'

const logo = () => {
  return (
    <div className={classes.logo}>
      <img src={burgerLogo} alt='MyBurgerLogo' />
    </div>
  )
}

export default logo
