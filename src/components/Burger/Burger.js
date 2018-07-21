import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(key => Array(props.ingredients[key]).fill(key).map((ingredient, i) => <BurgerIngredient key={`${ingredient}_${i}`} type={ingredient} />))
    .reduce((arr, el) => arr.concat(el), [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>No ingredients added yet!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='breadTop' />
      {transformedIngredients}
      <BurgerIngredient type='breadBottom' />
    </div>
  )
}

export default burger
