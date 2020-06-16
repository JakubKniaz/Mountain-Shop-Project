import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import CartProduct from './CartProduct';

const SummaryCart = (props) => {
    const shopItems = useContext(ShopContext).shopItems;
    const clearBasket = useContext(ShopContext).shopClearBasket;
    const userId = useContext(ShopContext).userId;

    const calculateTotalPrice = (items) => {

        const sum = items
            .map(item => {
                return item.price * item.quantity;
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        return sum;
    };

    const onOrderButtonClick = () => {
        if (userId) {
            const items = shopItems.map (item => {
                return {
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    size: item.size}
            });

            const data = {
                totalPrice: totalPrice,
                date: new Date(),
                userId: userId,
                products: items
            };

            const url = 'https://mountain-shop-project.firebaseio.com/orders.json';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(responseData => responseData.json())
                .then(response => {
                    clearBasket();
                    props.history.replace("/");
                })
                .catch( err => {
                    console.log(err.message);
                })
        } else {
            props.history.push("/login");
        }

    };

    const returnToShop = () => {
        props.history.go(-2)
    };

    const totalPrice = calculateTotalPrice(shopItems);
    return (
        <section>
            <div className="container basket-main">
                <div className="summary-cart-description"><span>K</span>oszyk - <span>P</span>odsumowanie <span>Z</span>akupów</div>
                <div><button onClick={returnToShop} className="continue-btn"><i className="fas fa-arrow-circle-left"></i> Kontynuuj zakupy!</button></div>
                { !shopItems.length ? <h4 className="empty-text">Twój koszyk jest pusty!</h4> : null}
                { shopItems.map( (prd,index) => <CartProduct key={index} product={prd} />) }
                <div className="total-price-content">
                    <div className="price-description">Do zapłaty:</div>
                    <div className="total-price">{totalPrice} zł</div>
                </div>
                <div className="payment">
                    { totalPrice > 0 ? <button className="payment-btn" onClick={onOrderButtonClick}>Zapłać</button> : null}
                </div>
            </div>
        </section>
    )
};

export default SummaryCart;