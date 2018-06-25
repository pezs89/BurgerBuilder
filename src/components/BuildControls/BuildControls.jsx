import React from 'react';
import BuildControl from './BuildControl';
import { INGREDIENTS } from '../../constants/ingredients';

const buildControls = (props) => {
    const ingredientsWithoutBread = Object.keys(INGREDIENTS).filter(key => INGREDIENTS[key] !== 'bread-top' && INGREDIENTS[key] !== 'bread-bottom')
    return (
        <div className="burger-builder__container builder-controls">
            {Object.values(ingredientsWithoutBread).map(val =>
                <BuildControl key={INGREDIENTS[val]}
                              label={INGREDIENTS[val]}
                              addIngredientFunction={() => props.addIngredient(INGREDIENTS[val])} 
                              removeIngredientFunction={() => props.removeIngredient(INGREDIENTS[val])}/>
            )}
        </div>
    )
}

export default buildControls;