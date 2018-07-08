import React, { PropTypes } from 'react'

import classes from './BurgerIngredient.css'

const burgerIngredient = props => {
  let ingredient = null

  // switch (props.type) {
  //   case 'BreadBottom':
  //     ingredient = <div className={classes.BreadBottom} />
  //     break
  //   case 'BreadTop':
  //     ingredient = (
  //       <div className={classes.BreadTop}>
  //         <div className='Seeds1' />
  //         <div className='Seeds2' />
  //       </div>
  //     )
  //     break
  //   case 'Meat':
  //     ingredient = <div className={classes.Meat} />
  //     break
  //   case 'Cheese':
  //     ingredient = <div className={classes.Cheese} />
  //     break
  //   case 'Salad':
  //     ingredient = <div className={classes.Salad} />
  //     break
  //   case 'Bacon':
  //     ingredient = <div className={classes.Bacon} />
  //     break
  //   default:
  //     ingredient = null
  //     break
  // }

  if (props.type) {
    if (props.type === 'BreadTop') {
      ingredient = (
        <div className={classes[props.type]}>
          <div className='Seeds1' />
          <div className='Seeds2' />
        </div>
      )
    } else {
      ingredient = <div className={classes[props.type]} />
    }
  }

  return ingredient
}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient
