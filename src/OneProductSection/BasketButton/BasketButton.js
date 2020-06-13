import React from 'react';

const BasketButton = (props) => {

    return (
        <button className="basket-btn" onClick={props.onButtonClick}>Do koszyka!</button>
    )
};

export default BasketButton;