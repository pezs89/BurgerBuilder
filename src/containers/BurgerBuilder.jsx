import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 1,
                bacon: 2,
                meat: 3,
                cheese: 4
            }
        }

        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }

    addIngredient(type) {
        const ingredients = this.state.ingredients;
        ingredients[type]++;
        this.setState({
            ingredients
        })
    }

    removeIngredient(type) {
        const ingredients = this.state.ingredients;
        ingredients[type]--;
        this.setState({
            ingredients
        })
    }

    render() {
        return (
            <div className="burger-builder">
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
            </div>
        )
    }
}

export default BurgerBuilder;