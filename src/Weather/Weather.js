import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {
  state = {
    isLoading: false
  };

  handleSearch(location) {

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(temp => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }, errorMessage => {
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  }

  render() {
    let {location, temp, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
