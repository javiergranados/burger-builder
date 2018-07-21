import React, { Component } from 'react'

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 2,
      salad: 1,
      cheese: 1,
      meat: 1
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>BuildControls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder
