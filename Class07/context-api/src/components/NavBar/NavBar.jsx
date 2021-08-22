import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



const NavBar = props => {
    return (
        <nav>
            <div className='logo'>
                LOGO
            </div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop/products">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;