import React from 'react';

const buildControl = (props) => {
  return (
    <div className="control-container">
      <h3 className="control-container__label">{props.label.toUpperCase()}</h3>
      <button className="control-container__button" disabled={props.isDisabled} type="button" onClick={props.removeIngredientFunction}>Less</button>
      <button className="control-container__button" type="button" onClick={props.addIngredientFunction}>More</button>
    </div>
  )
}

export default buildControl;