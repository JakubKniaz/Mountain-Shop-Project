import React from 'react';

const OneProductItem = props => {

    return (
        <div className="main-products col-sm-6 col-md-4">
            <div onClick={ () => props.handleClick(props.item) } className="products-item">
                <a>
                    <div className="image-div">
                        <img src={props.product.image} alt={props.product.name} title={props.product.secondName}/>
                    </div>
                    <div className="products-content">
                        <h2 className="first-title">{props.product.name}</h2>
                        <h3 className="second-title">{props.product.secondName}</h3>
                        <h4 className="index-title">Index: {props.product.index}</h4>
                        <p className="price">Cena: {props.product.price} zł</p>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default OneProductItem;