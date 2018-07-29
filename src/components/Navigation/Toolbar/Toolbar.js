import React from 'react'

import classes from './Toolbar.css'

import Logo from '../../Logo/Logo'

const toolbar = () => {
  return (
    <header className={classes.toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
  )
}

export default toolbar
