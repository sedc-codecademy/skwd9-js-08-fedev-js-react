import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import CartList from '../components/CartList';
import ShopGlobalState from '../Context/ShopGlobalState';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home';
import FullDetailedProduct from '../components/FullDetailedProduct';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './Shop.css'


class Shop extends Component {
    render() {
        return (
            <ShopGlobalState>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/shop/products" exact component= { ProductList } />
                        <Route path="/cart" component={ CartList } />
                        <Route path="/shop/products/:productId" component={ FullDetailedProduct } />
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Router>
            </ShopGlobalState>
        );
    }
}

export default Shop;