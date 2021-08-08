import './App.css';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Counter from './Counter'
import MainHeading from './ReusableComponents/Heading'
import Calculator from './ReusableComponents/Calculator'

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainHeading title='THIS IS APP"S TITTLE'>
        <h1> THIS IS HEADING FOR APP JS</h1>
      </MainHeading>
      <Counter />
      <Calculator />
    </React.Fragment>
  );
}

export default App;
