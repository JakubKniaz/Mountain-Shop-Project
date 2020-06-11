import React, {useEffect, useState} from 'react';


const OneProductSection = props => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log(props.history)
        const url = "https://mountain-shop-project.firebaseio.com/products/" + props.match.params.index + ".json";
        fetch(url)
            .then(responsive => responsive.json())
            .then(obj => {
                setProduct(obj)
            })
    }, []);
    if(product === null) {
        return <h1>Wczytywanie...</h1>
    }

    const onReturn = () => {
        props.history.goBack();
    };

    return (
        <section className="one-product-main">
            <div className="product container">

                <div className="image-content"><img src={product.image} alt={product.name} title={product.secondName}/>
                </div>
                <div className="product-info">
                    <div>
                        <button className="back-arrow" onClick={onReturn}><i className="fas fa-arrow-circle-left"></i>Powrót</button>
                        <h2 className="prod-generaly-title">{product.name}</h2>
                        <h3 className="product-title">{product.secondName}</h3>
                        <h4 className="product-index">Index: {product.index}</h4>
                        <h4>Opis: </h4>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur
                            tortor ligula, id aliquam turpis porta finibus. Integer id dui arcu. Ut ac est sit amet leo
                            ultricies posuere. Etiam libero sapien, aliquam id nunc id, pharetra lobortis felis. Aenean luctus
                            mattis quam, at bibendum nibh pulvinar ut. In id ex hendrerit arcu condimentum tincidunt. Donec quis
                            pharetra purus. In id eros metus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OneProductSection;