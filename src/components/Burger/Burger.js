import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='BreadTop' />
      <BurgerIngredient type='Salad' />
      <BurgerIngredient type='Cheese' />
      <BurgerIngredient type='Meat' />
      <BurgerIngredient type='BreadBottom' />
    </div>
  )
}

export default burger
