import React, { Component } from 'react';
import './App.css';
import {Greeter} from './Greeter/Greeter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeter/>
      </div>
    );
  }
}

export default App;
