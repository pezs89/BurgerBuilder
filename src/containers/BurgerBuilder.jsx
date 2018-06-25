import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/BuildControls/BuildControls';
import { INGREDIENT_PRICES } from '../constants/ingredientPrices';

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 1,
                bacon: 2,
                meat: 3,
                cheese: 4
            },
            totalPrice: undefined
        }

        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }

    componentDidMount() {
        const totalPrice = this.getCalCulatedPrice(this.state.ingredients);
        this.setState({
            totalPrice
        })
    }

    addIngredient(type) {
        const ingredients = Object.assign({}, this.state.ingredients);
        ingredients[type]++;
        const totalPrice = this.getCalCulatedPrice(ingredients);
        this.setState({
            ingredients,
            totalPrice
        })
    }

    removeIngredient(type) {
        const ingredients = Object.assign({}, this.state.ingredients);
        ingredients[type]--;
        if (this.hasIngredientsAdded(ingredients[type])) {
            const totalPrice = this.getCalCulatedPrice(ingredients);
            this.setState({
                ingredients,
                totalPrice
            })
        }
    }

    getCalCulatedPrice(ingredients) {
        return Object.keys(INGREDIENT_PRICES).map(key => {
            return INGREDIENT_PRICES[key] * ingredients[key.toLowerCase()];
        }).reduce((price, el) => {
            return price + el;
        }, 0);
    }

    hasIngredientsAdded(ingredients) {
        return ingredients >= 0;
    }

    render() {
        return (
            <div className="burger-builder">
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} totalPrice={this.state.totalPrice} />
            </div>
        )
    }
}

export default BurgerBuilder;