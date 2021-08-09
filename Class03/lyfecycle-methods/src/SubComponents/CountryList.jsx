import React from 'react';

export default class CountryList extends React.Component {
    
    // deleteCountry = (countryName) => {
    //     this.props.onCountryDelete(countryName)
    // }

    render () {
        const { countries } = this.props;
        return(
            <ul>
                {
                    countries.map((country, index) => (
                        <li key={ index }>
                            { country.value }
                            <button onClick={ () => this.props.onCountryDelete(country) }>X</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}