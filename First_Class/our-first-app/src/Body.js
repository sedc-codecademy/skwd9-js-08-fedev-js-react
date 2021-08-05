import React from 'react';
import oursLogo from './logo.svg';



const Body = () => {
    const products = [ 'IPHONE', 'SAMSUNG', 'ALCATEL'];
    return (
        <div>
            <section>
                <ol>
                    {
                        products.map((product, index) => <li key={ index }>{product}</li>)
                    }
                </ol>
            </section>
            <section>
                <img src={ oursLogo } alt='logo' />
            </section>
        </div>
    )
}

export default Body;