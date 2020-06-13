import React, {useState} from 'react';

export const ShopContext = React.createContext()

export default props => {
    //const [isAuthenticated, setAuthentication] = useState(false);
    const [userId, setUserId] = useState(null);

    const [shopItems, setShopItems] = useState([]);

    const login = (userId) => {
        //setAuthentication(true);
        setUserId(userId);
    }

    const logout = () => {
        //setAuthentication(false);
        setUserId(null);
    }

    const addToBasket = product => {
        const curOrder = [...shopItems];
        curOrder.push(product);
        setShopItems(curOrder);
    }

    const removeFromBasket = id => {
        const curOrder = [...shopItems];
        const newOrder = curOrder.filter(product => {
            return product.id !== id;
        });

        setShopItems(newOrder);
    }

    const updateItemQuantity = ( id, quantity ) => {
        const curOrder = [...shopItems];
        const newOrder = curOrder.map(product => {
            if ( product.id === id ) {
                return {
                    ...product,
                    quantity: quantity
                }
            } else {
                return {...product}
            }
        });

        setShopItems(newOrder);
    }

    const clearBasket = () => {
        setShopItems([]);
    }
    
  return (
      <ShopContext.Provider value={{
      shopLogin: login, 
      shopLogout: logout, 
      shopAddToBasket: addToBasket, 
      shopRemoveFromBasket: removeFromBasket,
      shopUpdateItemQuantity: updateItemQuantity,
      shopClearBasket: clearBasket,
      shopItems: shopItems,
      userId: userId
      }}>
          {props.children}
      </ShopContext.Provider>
  )
};

