import React, {useEffect, useState, useContext} from 'react';
import QuantityForm from './QuantityForm/QuantityForm';
import BasketButton from './BasketButton/BasketButton';
import ShoeSizeForm from './ShoesSizeForm/ShoesSizeForm';
import ClothesSizeForm from './ClothesSizeForm/ClothesSizeForm';
import { ShopContext } from '../context/shop-context'


const OneProductSection = props => {
    const addToBasket = useContext(ShopContext).shopAddToBasket;
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
    // const [shoeSize, setShoeSize] = useState(38);


    useEffect(() => {
        const url = "https://mountain-shop-project.firebaseio.com/products/" + props.match.params.index + ".json";
        fetch(url)
            .then(responsive => responsive.json())
            .then(obj => {
                setProduct(obj);

                let pattern = /shoes/;
                if (pattern.test(obj.type)) {
                    setSize(38);
                }

            })
    }, [props.match.params.index]);

    if(product === null) {
        return <h1>Wczytywanie...</h1>
    }

    const onReturn = () => {
        props.history.goBack();
    };

    const onBtnClick = event => {
        const cartItem = {
            size: size,
            quantity: quantity,
            id: props.match.params.index,
            ...product
        };

        console.log(cartItem);
        addToBasket(cartItem);
    };

    const onSizeChange = event => {
        setSize(event.target.value);
    };

    const onQuantityChange = event => {
        setQuantity(event.target.value);
    };
    let selector = <ClothesSizeForm onSelectionChange={onSizeChange} value={size}/>;

    let pattern = /shoes/;
    let secondPattern = /gadgets/;
    if (pattern.test(product.type)) {
        selector = <ShoeSizeForm onSelectionChange={onSizeChange} value={size}/>;
    } else if (secondPattern.test(product.type)) {
        selector = null
    }

    return (
        <section className="one-product-main">
            <div className="product container">

                <div className="image-content"><img src={product.image} alt={product.name} title={product.secondName}/>
                </div>
                <div className="product-info">
                    <div>
                        <button className="back-arrow" onClick={onReturn}><i className="fas fa-arrow-circle-left"></i> Powrót</button>
                        <h2 className="prod-generaly-title">{product.name}</h2>
                        <h3 className="product-title">{product.secondName}</h3>
                        <h4 className="product-index">Index: {product.index}</h4>
                        <h4>Opis: </h4>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur
                            tortor ligula, id aliquam turpis porta finibus. Integer id dui arcu. Ut ac est sit amet leo
                            ultricies posuere. Etiam libero sapien, aliquam id nunc id, pharetra lobortis felis. Aenean luctus
                            mattis quam, at bibendum nibh pulvinar ut. In id ex hendrerit arcu condimentum tincidunt. Donec quis
                            pharetra purus. In id eros metus.</p>
                        <div className="product-form">
                            {selector}
                            <QuantityForm onSelectionChange={onQuantityChange}/>
                            <BasketButton onButtonClick={onBtnClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OneProductSection;