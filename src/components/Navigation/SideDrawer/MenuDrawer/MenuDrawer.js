import React from 'react'

import classes from './MenuDrawer.css'

const menuDrawer = props => {
  return (
    <div className={classes.menuDrawer} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default menuDrawer
