import React, { Component } from 'react';

import withLoading from '../hocs/withLoading';

const ProductDetails = props => {
    const { product, isLoading } = props;
    console.log(product, isLoading)
    return (
        <div className="card product-card">
            <img className="card-img-top" src={ product.image } alt="Product" />
            <div className="card-body">
                <h2 className="card-text">{ product.title }</h2>
                <p className="card-text">Price: { product.price }</p>
                <p className="card-text">Category: { product.category }</p>
                <p className="card-text">Description: { product.description }</p>
            </div>
        </div>
    )
}

const ProductDetailsWithLoading = withLoading(ProductDetails);

class FullDetailedProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            isFetching: false,
            product: {}
        }
    }

    componentDidMount() {
        const { productId } = this.props.match.params;
        this.fetchProducts(productId);
    }

    fetchProducts = async productId => {
        this.setState({
            isFetching: true
        });
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await data.json();
        this.setState({
            product,
            isFetching: false
        })
    }
    render() {
        const { product, isFetching } = this.state;
        return (
            <div>
               <ProductDetailsWithLoading product={product} isLoading={ isFetching } />
            </div>
        );
    }
}

export default FullDetailedProduct;