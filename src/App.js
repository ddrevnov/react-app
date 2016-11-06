import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Nav/>
            <h2>App Component</h2>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
