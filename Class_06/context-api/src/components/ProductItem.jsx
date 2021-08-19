import React from 'react';
import PropTypes from 'prop-types';
import ShopContext from '../Context/shopContext';

function ProductItem(props) {
    const { product, isDisabled, isAdd } = props;
    return (
        <ShopContext.Consumer>
            {
                (context) => (
                    <div className="card product-card">
                        <img className="card-img-top" src={ product.image } alt="Product" />
                        <div className="card-body">
                            <h4 className="card-text">{ product.title }</h4>
                            <p className="card-text">Price: { product.price }</p>
                            {
                                isAdd
                                    ? <button
                                        disabled={ isDisabled }
                                        className="btn btn-primary"
                                        onClick={ () => context.addProduct(product)}
                                    >
                                        ADD
                                    </button>
                                    : <button 
                                        className="btn btn-danger" 
                                        onClick={ () => context.removeProduct(product.id)} 
                                    > 
                                        REMOVE 
                                    </button>
                            }
                            
                        </div>
                    </div>
                )
            }
            
        </ShopContext.Consumer>
        
    );
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string
    }).isRequired,
    addProduct: PropTypes.func,
    removeProduct: PropTypes.func
}

export default ProductItem;