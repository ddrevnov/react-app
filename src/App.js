import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <h2>App Component</h2>
        <button className="btn btn-success">test</button>
      </div>
    );
  }
}

export default App;
