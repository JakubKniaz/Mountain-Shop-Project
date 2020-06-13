import React, { useState, useEffect } from 'react';

const UserHistory = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = 'https://mountain-shop-project.firebaseio.com/orders.json';
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
                                    return <h4>Produkt: {product.product}</h4>
                                })}
                                <h4>Lączna kwota: {element.totalPrice}</h4>
                                <h4>Twoje id: {element.userId}</h4>
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