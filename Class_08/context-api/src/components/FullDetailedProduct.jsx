import React, { Component } from 'react';

class FullDetailedProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            product: null
        }
    }

    componentDidMount() {
        const { productId } = this.props.match.params;
        this.fetchProducts(productId);
    }

    fetchProducts = async productId => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await data.json();
        this.setState({
            product
        })
    }
    render() {
        const { product } = this.state;
        return (
            <div>
                {
                    !product
                        ? <div>Loading.....</div>
                        :  <div className="card product-card">
                                <img className="card-img-top" src={ product.image } alt="Product" />
                                <div className="card-body">
                                    <h2 className="card-text">{ product.title }</h2>
                                    <p className="card-text">Price: { product.price }</p>
                                    <p className="card-text">Category: { product.category }</p>
                                    <p className="card-text">Description: { product.description }</p>
                                </div>
                            </div>
                }
            </div>
        );
    }
}

export default FullDetailedProduct;