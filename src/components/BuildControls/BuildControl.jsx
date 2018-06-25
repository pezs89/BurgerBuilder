import React from 'react';

const buildControl = (props) => {
    return (
        <div className="builder-controls__container">
            <h3 className="builder-controls__container__label">{props.label.toUpperCase()}</h3>
            <button className="builder-controls__container__button" type="button" onClick={props.removeIngredientFunction}>Less</button>
            <button className="builder-controls__container__button" type="button" onClick={props.addIngredientFunction}>More</button>
        </div>
    )
}

export default buildControl;