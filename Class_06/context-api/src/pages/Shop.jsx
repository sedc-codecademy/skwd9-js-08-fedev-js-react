import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import CartList from '../components/CartList';
import ShopGlobalState from '../Context/ShopGlobalState';


class Shop extends Component {
    render() {
        return (
            <ShopGlobalState>
                <div>
                    <div className="product-list">
                        <h2>Products:</h2>
                        <ProductList />
                    </div>
                    <div className="cart-list">
                        <h2>Cart:</h2>
                        <CartList />
                    </div>
                </div>
            </ShopGlobalState>
        );
    }
}

export default Shop;