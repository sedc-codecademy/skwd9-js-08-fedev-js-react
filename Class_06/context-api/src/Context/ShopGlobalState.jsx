import React, { Component } from 'react';
import ShopContext from '../Context/shopContext';

class ShopGlobalState extends Component {
    constructor(props) {
        super(props);
        this.state= {
            products: [],
            cart: []
        }
    }
    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json();
        this.setState({
            products
        })
    }

    addProduct = product => {
        this.setState(prevState => ({
            cart: [...prevState.cart, product]
        }))

        // this.setState({
        //     cart: [...this.state.cart, product]
        // })
    }

    removeProduct = productId => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(product => product.id !== productId)
        }))
    }
    render() {
        return <div>
            <ShopContext.Provider value={ {
                products: this.state.products,
                cart: this.state.cart,
                addProduct: this.addProduct,
                removeProduct: this.removeProduct
            } }>
                { this.props.children }
            </ShopContext.Provider>
        </div>
    }
}

export default ShopGlobalState;