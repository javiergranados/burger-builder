import React from 'react'
import Proptypes from 'prop-types'

import classes from './BurgerIngredient.css'

const burgerIngredient = props => {
  let ingredient = null

  if (props.type) {
    if (props.type === 'breadTop') {
      ingredient = (
        <div className={classes[props.type]}>
          <div className={classes.seeds1} />
          <div className={classes.seeds2} />
        </div>
      )
    } else {
      ingredient = <div className={classes[props.type]} />
    }
  }

  return ingredient
}

burgerIngredient.propTypes = {
  type: Proptypes.string.isRequired
}

export default burgerIngredient
