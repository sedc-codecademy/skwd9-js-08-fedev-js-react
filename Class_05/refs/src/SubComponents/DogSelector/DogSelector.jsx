import React from 'react';
import './DogSelector.css';

const dogs = {
    beagle: 'Beagle',
    husky: 'Husky',
    chow: 'Chow',
    dingo: 'Dingo',
    doberman: 'Doberman',
    maltese: 'Maltese'
}


export class DogSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            test: 'TEST'
        }
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        //this.inputRef.current.focus();
        
        // NEVER DO THIS
        // this.inputRef.current.value = 'ZDRAVO'
    }

    render() {
        return (
            <>
              <input type="text" ref={ this.inputRef }/>
              <select
                name="dog-select"
                className="dog-selector"
                onChange={this.props.onDogChange}
                disabled={ this.props.disable }
               >
                {
                    Object.keys(dogs).map(dogRace =>
                        <option value={ dogRace } key={ dogRace }> { dogs[dogRace] } </option>
                    )
                }
              </select>
            </>
        )
    }
}

export default DogSelector;
