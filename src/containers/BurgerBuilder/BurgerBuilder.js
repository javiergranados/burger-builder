import React, { Component } from 'react'

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      cheese: 0,
      meat: 1
    }
  }

  addIngredientHandler = type => {
    const ingredientAmountUpdated = {[type]: this.state.ingredients[type] + 1}
    const ingredientsUpdated = Object.assign({}, this.state.ingredients, ingredientAmountUpdated)

    this.setState({ingredients: ingredientsUpdated})
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
