import React from 'react'

import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Bacon', type: 'bacon'},
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const buildControls = props => {
  return (
    <div className={classes.buildControls}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.type}
          label={ctrl.label}
          addIngredient={() => props.addIngredient(ctrl.type)}
          removeIngredient={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}
    </div>
  )
}

export default buildControls
