import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CountryList from './CountryList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            country: '',
            countries: [],
            people: [{},{},{},{},{},{},{},{},{},{}],
            total: null,
            renderCountryList: true
        }

        // setTimeout(() => {
        //     this.setState({
        //         'countries': ['Albania', 'Turkey']
        //     })
        // }, 6000)
    }

    componentDidMount() {
        this.fetchSwapiPeople();
        // console.log('COMPONENT DID MOUNT')
    }

    fetchSwapiPeople = async () => {
        const response = await fetch('https://swapi.dev/api/people');
        const formatedResponse = await response.json();
        this.setState({
            people: formatedResponse.results,
            total: formatedResponse.count,
            next: formatedResponse.next,
            previous: formatedResponse.previous
        }, () => {
            setTimeout(() => {
                this.setState({
                    people: [...this.state.people, { 'name': 'GOCE KABOV'}]
                })
            }, 5000)
        })
    }

    changeCountryName = event => {
        this.setState({
            country:event.target.value
        })
    }

    addCountryName () {
        const { country, countries } = this.state;
        if (country.length > 0 && !countries.some(currentCountry => currentCountry.toLowerCase() === country.toLocaleLowerCase())) {
            this.setState({
                country: '',
                countries: [...countries, country]
            })
        } else {
            alert('YOU SHOULD INPUT A NOT EXISTING COUNTRY INSIDE THE INPUT FIELD');
        }

    }

    deleteCountry = countryName => {
        this.setState({
            countries: this.state.countries.filter(country => country !== countryName)
        })
    }

    handleCountryList = () => {
        this.setState({
            renderCountryList: !this.state.renderCountryList
        })
    }



    render() {
        return (
            <div>
                <CustomInput
                    countryName={this.state.country}
                    onNameChange={ this.changeCountryName }
                />
                <button onClick={this.addCountryName.bind(this)}>Add Country</button>
                <hr/>
                {
                    this.state.renderCountryList &&
                    <CountryList
                        people={this.state.people}
                        total={this.state.total && this.state.total.toString()}
                        onCountryDelete={ this.deleteCountry }
                    />
                }
                <button
                    onClick={this.handleCountryList}
                >
                    {this.state.renderCountryList ? 'HIDE' : 'SHOW'}
                </button>
                
            </div>
        )
    }
}

export default Home;