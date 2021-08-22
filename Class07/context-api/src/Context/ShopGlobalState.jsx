import React, { useState, useEffect } from 'react';
import ShopContext from '../Context/shopContext';

const ShopGlobalState = props => {
    const [products, updateProducts] = useState([]);
    const [cart, updateCart ] = useState([]);

    useEffect(() => {
        //COMPONENT DID MOUNT
        getProducts();
        const interval = setInterval(() => {
            getProducts();
        }, 6000)
        return () => {
            console.log("COMPONENT WILL UNMOUNT")
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        // COMPONENT DID UPDATE
        alert("Cart was updated!")
    }, [cart])

    const getProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json();
        console.log(products)
        updateProducts(products)
    }

    const addProduct = product => {
        updateCart([...cart, product])
    }

    const removeProduct = productId => {
        const filteredProducts = cart.filter(product => product.id !== productId)
        updateCart(filteredProducts);
    }
        return <div>
            <ShopContext.Provider value={ {
                products: products,
                cart: cart,
                addProduct: addProduct,
                removeProduct: removeProduct
            } }>
                { props.children }
            </ShopContext.Provider>
        </div>
}

export default ShopGlobalState;