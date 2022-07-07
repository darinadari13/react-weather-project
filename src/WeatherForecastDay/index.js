import React from 'react';
import WeatherIcon from '../WeatherIcon';
import { SHORT_DAYS, CELSIUS_UNIT } from '../consts';
import { convertToFahrenheit } from '../utils';

export default function WeatherForecastDay({ data, unit }) {
  const isCelsius = unit === CELSIUS_UNIT;

  function maxTemperature() {
    const temperature = isCelsius ? Math.round(data.temp.max) : Math.round(convertToFahrenheit(data.temp.max));
    return `${temperature}°`;
  }
  function minTemperature() {
    const temperature = isCelsius ? Math.round(data.temp.min) : Math.round(convertToFahrenheit(data.temp.min));
    return `${temperature}°`;
  }
  function day() {
    const date = new Date(data.dt * 1000);
    const day = date.getDay();

    return SHORT_DAYS[day];
  }

  return (
    <div>
      <div className='WeatherForecast-day'>{day()}</div>
      <WeatherIcon code={data.weather[0].icon} size={45} />
      <div className='WeatherForecast-temperatures'>
        <span className='WeatherForecast-temperature-max'>{maxTemperature()}</span>
        <span className='WeatherForecast-temperature-min'>{minTemperature()}</span>
      </div>
    </div>
  );
}
