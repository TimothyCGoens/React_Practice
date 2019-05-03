import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator'

class App extends Component {
  render() {
    return(
      <div>
        <h1>Hello</h1>
        <Calculator/>
      </div>
    )
  }
}

export default App;
