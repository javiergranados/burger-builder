import React, { Component } from 'react'

import classes from './Layout.css'

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  openSideDrawerHandler = () => {
    this.setState({showSideDrawer: true})
  }

  closeSideDrawerHandler = () => {
    this.setState({showSideDrawer: false})
  }

  render () {
    return (
      <Aux>
        <Toolbar showMenu={this.openSideDrawerHandler} />
        <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
