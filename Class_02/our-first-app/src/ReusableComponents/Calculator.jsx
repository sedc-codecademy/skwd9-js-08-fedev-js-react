import React from 'react';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstNumber: '',
            secondNumber: '',
            result: null
        }
    }

    changeFirstNumber = event => {
        this.setState({
            firstNumber: parseInt(event.target.value)
        })
    }

    changeSecondNumber = e => {
        this.setState({
            secondNumber: parseInt(e.target.value)
        })
    }

    performOperation = operator => {
        if (operator === '+') {
            this.setState({
                result: this.state.firstNumber + this.state.secondNumber,
                firstNumber: '',
                secondNumber: ''
            })
        } else {
            this.setState({
                result: this.state.firstNumber - this.state.secondNumber,
                firstNumber: '',
                secondNumber: ''
            })
        }
    } 



    render() {
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.firstNumber} onChange={this.changeFirstNumber} type='number' />
                    <input value={this.state.secondNumber} onChange={this.changeSecondNumber} type='number' />
                    <button onClick={ () => this.performOperation('+') }>+</button>
                    <button onClick={ () => this.performOperation('-') }>-</button>
                </div>
                <div>
                    {this.state.result}
                </div>
            </React.Fragment>
        )
    }
}

export default Calculator;