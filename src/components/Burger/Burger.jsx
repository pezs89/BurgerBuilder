import React from 'react';
import BurgerIngredients from './BurgerIngredients';
import { INGREDIENTS } from '../../constants/ingredients';

const burger = (props) => {
    const transformIngrediens = (ingredients) => {
        let res = [];
        Object.keys(ingredients).map(ingredientKey => {
            for (let i = 0; i < ingredients[ingredientKey]; i++) {
                res.push(<BurgerIngredients key={ingredientKey + i} type={ingredientKey} />)
            }
        })
        return res;
    }

    return (
        <div className="burger-builder__container">
            <BurgerIngredients type={INGREDIENTS.BREAD_TOP} />
            {props.ingredients ?
                transformIngrediens(props.ingredients)
                :
                null}
            <BurgerIngredients type={INGREDIENTS.BREAD_BOTTOM} />
        </div>
    )
}

export default burger;

