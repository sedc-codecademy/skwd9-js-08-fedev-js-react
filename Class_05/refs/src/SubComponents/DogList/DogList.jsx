import React, { Component } from 'react';
import './DogList.css'


class DogList extends Component {

    render() {
        return (
            <div className="dog-list">
                {
                    this.props.dogs.map(dog =>(
                        <img src={ dog } alt='dog' key={ dog } className='dog-image' />
                    ))
                }
            </div>
        );
    }
}

export default DogList;