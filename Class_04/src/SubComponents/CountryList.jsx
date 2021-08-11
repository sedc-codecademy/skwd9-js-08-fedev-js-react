import React from 'react';

export default class CountryList extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            'people': null,
            'total': null,
            'next': null,
            'previous': null
        }

        // console.log('C-TOR')
    }
    // DEPRECATED
    componentWillMount() {
        // console.log('COMPONENT WILL MOUNT');
    }
    // DEPRECATED
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
        // console.log('COMPONENT WILL REIEVE PROPS', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.countries.length === 3 ) {
        //     return false;
        // }

        // console.log('SHOULD COMPONENT UPDATE, BY DEFAULT ALWAYS YES')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log('COMPONENT WILL UPDATE');
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('COMPONENT DID UPDATE', prevProps, prevState, this.props)
    }
    // DEPRECATED
    componentWillUnmount() {
        // console.log('COMPONENT WILL DIE :(');
    }
    componentDidMount() {
        this.fetchSwapiPeople();
        // console.log('COMPONENT DID MOUNT')
    }

    fetchSwapiPeople = async () => {
        const response = await fetch('https://swapi.dev/api/people');
        const formatedResponse = await response.json();
        this.setState({
            'people': formatedResponse.results,
            'total': formatedResponse.count,
            'next': formatedResponse.next,
            'previous': formatedResponse.previous
        })
    }

    render () {
        console.log('RENDERINGGG.......')

        return(
            <div>
                <h3>TOTAL: {this.props.total}</h3>
                <ul>
                {
                    this.props.people.map(person => (
                        <li>
                            { person.name }
                        </li>
                    ))
                }
                </ul>
            </div>
            
        )
    }
}

CountryList.defaultProps = {
    people: []
}