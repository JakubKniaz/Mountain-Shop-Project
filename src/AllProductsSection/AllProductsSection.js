import React, {useState, useEffect} from 'react';
import OneProductItem from "./OneProductItem/OneProductItem";

const AllProductsSection = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const queryParams = '?orderBy="type"&equalTo="' + props.match.params.type + '"';
        const url = "https://mountain-shop-project.firebaseio.com/products.json" + queryParams;
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                const fetchProducts = [];
                for (let key in obj) {
                    fetchProducts.push ({
                        ...obj[key],
                        id: key
                    });
                }
                setProducts(fetchProducts)
            })
    }, [props.match.params.type]);
    if(products === null) {
        return <h1>Wczytywanie...</h1>
    }

    const onHandleClick = ( index ) => {
        props.history.push({pathname: "/one-product/" + index});
    };

    return (
        <section className="section-products container">
            <div className="main-title">{props.location.state.title}</div>
            <div className="row">

                {products.map((product)=> {
                    return (
                        <OneProductItem key={product.id} product={product} handleClick={onHandleClick} item={product.id}/>
                    )

                })}
            </div>
        </section>

    );
};


export default AllProductsSection;