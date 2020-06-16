import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const UserHistory = () => {
    const userId = useContext(ShopContext).userId;
    const [data, setData] = useState(null);

    useEffect(() => {
        const queryParams = '?orderBy="userId"&equalTo="' + userId + '"';
        const url = 'https://mountain-shop-project.firebaseio.com/orders.json' + queryParams;
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                const fetchOrders = [];
                for (let key in obj) {
                    fetchOrders.push ({
                        ...obj[key],
                        id: key
                    });
                }
                console.log(fetchOrders);
                setData(fetchOrders)
            })
            .catch(error => error)
    }, []);

    if(data === null) {
        return <h1>Wczytywanie...</h1>
    }
    return (
        <section className="history-main">
            <div className="row">
                <div className="col-12">
                    <div className="history-content container">
                        <div className="history-title"><span>T</span>woja <span>H</span>istoria <span>Z</span>akupów</div>
                        <div className="history-info">
                            <ul>
                                {data.map(element => {
                                    return <li key={element.id}>
                                        <h4>Data: {element.date}</h4>
                                        {element.products.map(product => {
                                            return <h4>Produkt: {product.name}</h4>
                                        })}
                                        <h4>Łączna kwota: {element.totalPrice} zł</h4>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default UserHistory;