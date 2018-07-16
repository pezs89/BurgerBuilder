import React from 'react';

const orderSummary = (props) => {
  const ingredientsSummary = props.ingredients;
  return (
    <div className="order-summary">
      <h3>Your order</h3>
      <p>Ingredients</p>
      <ul>
        {Object.keys(ingredientsSummary).map(key => {
          return (
            <li key={key}>
              <span className="ingredient-name">{key} :</span>
              {ingredientsSummary[key]}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default orderSummary;