import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='breadTop' />
      <BurgerIngredient type='salad' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='breadBottom' />
    </div>
  )
}

export default burger
