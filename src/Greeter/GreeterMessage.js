import React, { Component } from 'react';

export class GreeterMessage extends Component {
  render() {
    let name = this.props.name;
    let message = this.props.message;
    return (
      <div>
        <h1>Some {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
}
