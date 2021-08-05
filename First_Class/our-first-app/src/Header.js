import React from 'react';



const Header = () => {
    return(
        <nav className='header'>
            <ul>
                <li key='home'>Home</li>
                <li key='about'>About Us</li>
                <li key='contact'>Contact</li>
            </ul>
        </nav>
    )
}

export default Header;