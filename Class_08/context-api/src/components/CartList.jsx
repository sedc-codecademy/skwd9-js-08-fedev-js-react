import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ShopContext from '../Context/shopContext';

class CartList extends Component {
    static contextType = ShopContext;
    render() {
        return (
            <>
                <div className="cart-list">
                    <h2>Cart:</h2>
                </div>
                <div className="cart">
                    {
                        this.context.cart.map(product => (
                            <ProductItem product={ product } />
                        ))
                    }
                </div>
            </>
        );
    }
}

export default CartList;