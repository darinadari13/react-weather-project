import React from 'react';
import './index.css';

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export default function WeatherTemperature({ unit, celsius, setUnitMetric }) {
  const isCelsius = unit === 'celsius';

  function showFarenheight(event) {
    event.preventDefault();
    setUnitMetric('farenheit');
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnitMetric('celsius');
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
