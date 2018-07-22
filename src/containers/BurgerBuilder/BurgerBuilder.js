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

  removeIngredientHandler = type => {
    const ingredientAmountUpdated = {[type]: this.state.ingredients[type] - 1}
    if (ingredientAmountUpdated[type] < 0) {
      return
    }

    const ingredientsUpdated = Object.assign({}, this.state.ingredients, ingredientAmountUpdated)

    this.setState({ingredients: ingredientsUpdated})
  }
git
  render () {
    const disabledInfo = {...this.state.ingredients}
    Object.keys(disabledInfo).forEach(ingredient => { disabledInfo[ingredient] = disabledInfo[ingredient] === 0 })

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
