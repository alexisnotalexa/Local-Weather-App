import React, { Component } from 'react';
import './styles.css';

import SearchBar from '../SearchBar';
import ThreeDay from '../ThreeDay';
import Weather from '../Weather';

class WeatherAppComponent extends Component {
  render() {
    return (
      <div className="weather-container">
        <SearchBar />
        <Weather />
        <ThreeDay />
      </div>
    );
  }
}

export default WeatherAppComponent;