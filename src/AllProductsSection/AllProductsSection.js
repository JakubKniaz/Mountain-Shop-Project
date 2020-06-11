import React, {useState, useEffect} from 'react';
import OneProductItem from "./OneProductItem/OneProductItem";

// const products = [
//     {
//         name: "Damska koszulka outdoorowa",
//         secondName: "Brubeck Outdoor Wool Pro T-Shirt",
//         index: 31111,
//         price: 179,
//         type: "koszulka",
//         image: "https://8a.pl/media/catalog/product/cache/0ca9578c19e44dcc902a2893c0d300b8/k/o/koszulka-damska-brubeck-outdoor-wool-pro-t-shirt-black-1589436994.jpg"
//     },
//     {
//         name: "Damska koszulka biegowa",
//         secondName: "Brubeck Running Air Pro T-Shirt",
//         index: 31112,
//         price: 140,
//         type: "koszulka",
//         image: "https://8a.pl/media/catalog/product/cache/0ca9578c19e44dcc902a2893c0d300b8/k/o/koszulka-biegowa-damska-brubeck-running-air-pro-t-shirt-black-1589436831.jpg"
//     },
//     {
//         name: "Koszulka długi rękaw",
//         secondName: "Brubeck Active Wool L/S Shirt",
//         index: 31113,
//         price: 170,
//         type: "koszulka",
//         image: "https://8a.pl/media/catalog/product/cache/0ca9578c19e44dcc902a2893c0d300b8/d/a/damska-bluzka-brubeck-active-wool-l-s-shirt-emerald-green.jpg"
//     },
//     {
//         name: "Damska koszulka outdoorowa",
//         secondName: "Columbia Trinity Trail 2.0 Graphic S/S",
//         index: 31114,
//         price: 130,
//         type: "koszulka",
//         image: "https://8a.pl/media/catalog/product/cache/0ca9578c19e44dcc902a2893c0d300b8/d/a/damska-koszulka-columbia-trinity-trail-2-0-graphic-s-s-shirt-siberia.jpg"
//     },
//     {
//         name: "Damska koszulka outdoorowa",
//         secondName: "Columbia Titan Ultra S/S Shirt",
//         index: 31115,
//         price: 115,
//         type: "koszulka",
//         image: "https://8a.pl/media/catalog/product/cache/0ca9578c19e44dcc902a2893c0d300b8/k/o/koszulka-columbia-titan-ultra-s-s-shirt-lady-melonade-nocturnal_2.jpg"
//     },
//     {
//         name: "Koszulka długi rękaw",
//         secondName: "Columbia Midweight Stretch L/S Top",
//         index: 31116,
//         price: 160,
//         type: "koszulka",
//         image: "https://8a.pl/media/catalog/product/cache/0ca9578c19e44dcc902a2893c0d300b8/b/l/bluza-columbia-midweight-stretch-l-s-top-lady-eve-faded-sky_6.jpg"
//     }
// ];

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
                console.log(fetchProducts);
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
            <div className="main-title">{props.match.params.type}</div>
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