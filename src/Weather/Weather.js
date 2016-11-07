import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from '../ErrorModal';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
    }
  }

  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
    }
  }

  handleSearch(location) {

    this.setState({
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null
    });

    openWeatherMap.getTemp(location).then(temp => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }, e => {
      console.log(e);
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }

  render() {
    let {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
