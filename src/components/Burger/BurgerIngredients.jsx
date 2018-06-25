import React from 'react';
import PropTypes from 'prop-types';
import { INGREDIENTS } from '../../constants/ingredients';

class BurgerIngredients extends React.Component {
    render() {
        const { type } = this.props;

        switch (type) {
            case INGREDIENTS.BREAD_TOP:
                return <div className={INGREDIENTS.BREAD_TOP} />
            case INGREDIENTS.BREAD_BOTTOM:
                return <div className={INGREDIENTS.BREAD_BOTTOM} />
            case INGREDIENTS.MEAT:
                return <div className={INGREDIENTS.MEAT} />
            case INGREDIENTS.CHEESE:
                return <div className={INGREDIENTS.CHEESE} />
            case INGREDIENTS.BACON:
                return <div className={INGREDIENTS.BACON} />
            case INGREDIENTS.SALAD:
                return <div className={INGREDIENTS.SALAD} />
            default: 
                return null;
        }
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}



export default BurgerIngredients;