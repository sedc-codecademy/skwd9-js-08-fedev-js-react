import './App.css';
import React from 'react';
import DogSelector from './SubComponents/DogSelector/DogSelector'
import DogList from './SubComponents/DogList/DogList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dogs: [],
      dogSearchText: 'beagle'
      // disableDogSelector: false
    }

    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.getDogsInterval = setInterval(this.getDogs, 1000);
    //this is not how we do things
    //this.myRef.current.inputRef.current.select();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.dogs.length === 9) {
      // this.setState({
      //   disableDogSelector: false
      // })
      clearInterval(this.getDogsInterval)
    }
    if(prevState.dogSearchText !== this.state.dogSearchText) {
      this.getDogsInterval = setInterval(this.getDogs, 1000);
    }
  }

  getDogs = async () => {
    const data = await fetch(`https://dog.ceo/api/breed/${ this.state.dogSearchText }/images/random`);
    const dog = await data.json();
    this.setState({
      // disableDogSelector: true,
      dogs: [...this.state.dogs, dog.message]
    })
  }

  onDogChange = event => {
    this.setState({
      dogSearchText: event.target.value,
      dogs: []
    }, () => {
      if (this.getDogsInterval) {
        clearInterval(this.getDogsInterval);
      }
    })
  }
  render() {
    return (
      <div className="App">
        <div className='searchWrapper'>
          
          <span className='searchText'>
              SEARCH:
          </span>
          <DogSelector onDogChange={ this.onDogChange } ref={ this.myRef } />
        </div>
        <div>
          <DogList dogs={this.state.dogs} />
        </div>
      </div>
    );
  }
  
}

export default App;
