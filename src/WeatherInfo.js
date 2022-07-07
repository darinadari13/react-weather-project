import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import './Weather/index.css';

export default function WeatherInfo(props) {
  return (
    <div className='WeatherInfo'>
      <div className='city'>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
        <h1>{props.data.city}</h1>
        <span>Overcast clouds</span>
        <div className='float-left'>
          <WeatherIcon code={props.data.icon} size={70} />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className='col-6'>
          <ul>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
