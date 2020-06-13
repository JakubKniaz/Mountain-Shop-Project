
import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context';

const CartProduct = (props) => {
    const removeFromBasket = useContext(ShopContext).shopRemoveFromBasket
    const updateItemQuantity = useContext(ShopContext).shopUpdateItemQuantity

    const onRemoveItem = index => {
        removeFromBasket(index);
    }

    const onQuantityChange = (id, event) => {
        updateItemQuantity(id,event.target.value)
    }

    return (
        <div className="summary-cart">
            <div className="image-basket"><img src={props.product.image} alt={props.product.secondName} title={props.product.name}/>
            </div>
            <div className="basket-info">
                <h2 className="prod-generaly-title">{props.product.name}</h2>
                <h3 className="product-title">{props.product.secondName}</h3>
                <h4 className="product-index">Index: {props.product.index}</h4>
            </div>
            <div className="product-cost">{props.product.price} zł</div>
            <div className="size-div">Rozmiar: {props.product.size}</div>
            <input id="number-input" type="number" min="1" value={props.product.quantity} onChange={onQuantityChange.bind(null, props.product.id)} />
            <div className="trash-content">
                <button onClick={onRemoveItem.bind(null,props.product.id)} className="trash-btn"><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>

    )
};

export default CartProduct;