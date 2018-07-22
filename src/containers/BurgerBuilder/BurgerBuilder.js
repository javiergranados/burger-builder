import React, { Component } from 'react'

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES = {
  bacon: 0.7,
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseState = ingredients => {
    const ingredientsAmount = Object.keys(ingredients).map(ingKey => ingredients[ingKey])
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    this.setState({purchasable: ingredientsAmount > 0})
  }

  addIngredientHandler = type => {
    const ingredientAmountUpdated = {[type]: this.state.ingredients[type] + 1}

    const ingredientsUpdated = Object.assign({}, this.state.ingredients, ingredientAmountUpdated)
    const priceUpdated = this.state.totalPrice + INGREDIENTS_PRICES[type]

    this.setState({
      ingredients: ingredientsUpdated,
      totalPrice: priceUpdated
    })

    this.updatePurchaseState(ingredientsUpdated)
  }

  removeIngredientHandler = type => {
    const ingredientAmountUpdated = {[type]: this.state.ingredients[type] - 1}
    if (ingredientAmountUpdated[type] < 0) {
      return
    }

    const ingredientsUpdated = Object.assign({}, this.state.ingredients, ingredientAmountUpdated)
    const priceUpdated = this.state.totalPrice - INGREDIENTS_PRICES[type]

    this.setState({
      ingredients: ingredientsUpdated,
      totalPrice: priceUpdated
    })

    this.updatePurchaseState(ingredientsUpdated)
  }

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
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
