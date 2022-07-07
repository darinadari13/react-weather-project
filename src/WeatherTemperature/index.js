import React from 'react';
import './index.css';
import { FAHRENHEIT_UNIT, CELSIUS_UNIT } from '../consts';
import { convertToFahrenheit } from '../utils';

export default function WeatherTemperature({ unit, celsius, setUnitMetric }) {
  const isCelsius = unit === CELSIUS_UNIT;

  function showFarenheight(event) {
    event.preventDefault();
    setUnitMetric(FAHRENHEIT_UNIT);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnitMetric(CELSIUS_UNIT);
  }
  return (
    <div className='container-temperature'>
      <span className='temperature'>{isCelsius ? Math.round(celsius) : Math.round(convertToFahrenheit(celsius))}</span>
      <span className='unit'>
        {isCelsius ? '°C' : '°F'} |{' '}
        <button className='container-temperature-unit-button' onClick={isCelsius ? showFarenheight : showCelsius}>
          {isCelsius ? '°F' : '°C'}
        </button>
      </span>
    </div>
  );
}
