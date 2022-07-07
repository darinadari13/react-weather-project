import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import WeatherInfo from '../WeatherInfo';
import WeatherForecast from '../WeatherForecast';
import PropTypes from 'prop-types';

const apiKey = 'e70f9b320d5f26eec768abf6830dd19d';

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  const [unit, setUnit] = useState('celsius');

  function setUnitMetric(metric) {
    setUnit(metric);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  useEffect(search, []);

  if (!weatherData.ready) {
    return 'Loading...';
  }

  return (
    <div className='Weather'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-6'>
            <input
              type='search'
              placeholder='Enter a city'
              className='form-control'
              onChange={handleCityChange}
            />
          </div>
          <div className='col-6'>
            <input type='submit'
              value='Search' />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} unit={unit} setUnitMetric={setUnitMetric} />
      <WeatherForecast coordinates={weatherData.coordinates} unit={unit} />
    </div>
  );
}

Weather.propTypes = {
  defaultCity: PropTypes.string
};
