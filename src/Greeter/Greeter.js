import React, { Component } from 'react';

import {GreeterMessage} from './GreeterMessage';
import {GreeterForm} from './GreeterForm';

export class Greeter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      message: this.props.message
    };
  }

  handleNewData(formData) {
    this.setState(formData);
  }

  render() {
    let name = this.state.name;
    let message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewFormData={this.handleNewData.bind(this)}/>
      </div>
    );
  }
}

Greeter.propTypes = {
  name: React.PropTypes.string,
  message: React.PropTypes.string,
};

Greeter.defaultProps = {
  name: 'Den',
  message: 'Hello'
};
