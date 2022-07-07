import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  return (
    <div>
      <div className='WeatherForecast-day'>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className='WeatherForecast-temperatures'>
        <span className='WeatherForecast-temperature-max'>{maxTemperature()}</span>
        <span className='WeatherForecast-temperature-min'>{minTemperature()}</span>
      </div>
    </div>
  );
}
