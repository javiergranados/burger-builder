import React from 'react'

import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Bacon', type: 'bacon'},
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = props => (
  <div className={classes.buildControls}>
    <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.type}
        label={ctrl.label}
        addIngredient={() => props.addIngredient(ctrl.type)}
        removeIngredient={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button
      className={classes.orderButton}
      disabled={!props.purchasable}
      onClick={props.showOrder}>ORDER NOW</button>
  </div>
)

export default buildControls
