import React, { Component } from 'react';

class WeatherMessage extends Component {
  static propTypes = {
    location: React.PropTypes.string,
    temp: React.PropTypes.number
  };

  static defaultProps = {
    location: '',
    temp: null
  };

  render() {
    let {location, temp} = this.props;

    return (
      <h3>It's {temp} in {location}</h3>
    );
  }
}

export default WeatherMessage;

// WeatherMessage.propTypes = {
//   name: React.PropTypes.string,
//   message: React.PropTypes.string,
// };
//
// WeatherMessage.defaultProps = {
//   name: 'Den',
//   message: 'Hello'
// };