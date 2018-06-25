import React from 'react';
import BuildControl from './BuildControl';
import { INGREDIENTS } from '../../constants/ingredients';

const buildControls = (props) => {
    const ingredientsWithoutBread = Object.keys(INGREDIENTS).filter(key => INGREDIENTS[key] !== 'bread-top' && INGREDIENTS[key] !== 'bread-bottom')
    return (
        <div className="burger-builder__container builder-controls">
            <div className="builder-controls__price">
                <h3 className="builder-controls__price__total-price">
                    Total price: {props.totalPrice} USD
                </h3>
            </div>
            <div className="builder-controls__main">
                {Object.values(ingredientsWithoutBread).map(val =>
                    <BuildControl key={INGREDIENTS[val]}
                        label={INGREDIENTS[val]}
                        addIngredientFunction={() => props.addIngredient(INGREDIENTS[val])}
                        removeIngredientFunction={() => props.removeIngredient(INGREDIENTS[val])} />
                )}
            </div>
            <div className="builder-controls__order">
                 <button type="button" className="builder-controls__button">Order now</button>
            </div>
        </div>
    )
}

export default buildControls;