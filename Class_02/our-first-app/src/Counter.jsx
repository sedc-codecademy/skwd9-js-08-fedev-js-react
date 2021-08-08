import React, { Component } from 'react';
import MainHeading from './ReusableComponents/Heading';
import './Counter.css'


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            number: 0,
            isClicked: false
        }

        this.incrementNumber = this.incrementNumber.bind(this);
    }

    incrementNumber() {
        // we can pass a callback function on setState, which will be executed right after the state
        // is going to be updated
        this.setState({
            number: this.state.number === 10 ? this.state.number : this.state.number + 1
        }, () => console.log('State was updated successfully'))

        if (this.state.number < 10) {
            this.setState({
                number: this.state.number + 1
            })
        }
    }

    fetchData = () => {

    }

    decrementNumber = () => {
        this.setState(prevState => ({
            number: prevState.number === 0 ? prevState.number : prevState.number - 1,
            isClicked: !prevState.isClicked
        }))
    }

    render() {
        return (
            <>
                <MainHeading>
                    <h3>THIS IS TITLE FOR COUNTER</h3>
                    <p>This is paragraph for the heading of coutner</p>
                </MainHeading>
                <div className='wrapper'>
                    <div className='buttons'>
                        <button className='increment-btn' onClick={this.incrementNumber}>Increment</button>
                        <button className='decrement-btn' onClick={this.decrementNumber}>Decrement</button>
                    </div>
                    <div className='result'>Result: { this.state.number }</div>
                </div>
            </>
        )
    }
}