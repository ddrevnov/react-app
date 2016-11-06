import React, { Component } from 'react';

class WeatherForm extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value.trim();

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div className="form-group">
          <input
            ref="location"
            type="text"
            className="form-control"
            placeholder="" />
        </div>
        <button type="submit" className="btn btn-default">Get Weather</button>
      </form>
    );
  }
}

export default WeatherForm;
