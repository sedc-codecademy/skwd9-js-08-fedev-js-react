import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ShopContext from '../Context/shopContext'

class ProductList extends Component {
    static contextType = ShopContext;
    render() {
        console.log(this.context)
        return (
            <>
                <div className="product-list">
                    <h2>Products:</h2>
                </div>
                <div className="products">
                    {
                        this.context.products.map(product => {
                            const productDisabled = this.context.cart.some(item => item.id === product.id)
                            return <ProductItem
                                product={ product }
                                isDisabled={ productDisabled }
                                isAdd={ true }
                            />
                        })
                    }
                </div>
                <div>
                    Total: { this.context.cart.reduce((total, curr) => total + curr.price, 0)}
                </div>
            </>
        );
    }
}

export default ProductList;