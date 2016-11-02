import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class GreeterForm extends Component {

  onFormSubmit(e) {
    e.preventDefault();

    let formData = {};

    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let message = ReactDOM.findDOMNode(this.refs.message).value.trim();

    if (typeof name === 'string' && name.length > 0) {
      ReactDOM.findDOMNode(this.refs.name).value = '';
      formData.name = name;
    }

    if (typeof message === 'string' && message.length > 0) {
      ReactDOM.findDOMNode(this.refs.message).value = '';
      formData.message = message;
    }

    this.props.onNewFormData(formData);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div>
          <input
            ref="name"
            type="text"/>
        </div>
        <div>
          <textarea
            ref="message"
            id="" cols="30" rows="10"></textarea>
        </div>
        <button>Set state</button>
      </form>
    );
  }
}
