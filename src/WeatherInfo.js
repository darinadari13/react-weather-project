import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import './Weather/index.css';

export default function WeatherInfo({ data, unit, setUnitMetric }) {
  return (
    <div className='WeatherInfo'>
      <div className='city'>
        <h2>
          <FormattedDate date={data.date} />
        </h2>
        <h1>{data.city}</h1>
        <span>Overcast clouds</span>
        <div className='float-left'>
          <WeatherIcon code={data.icon} size={70} />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <WeatherTemperature celsius={data.temperature} unit={unit} setUnitMetric={setUnitMetric} />
        </div>
        <div className='col-6'>
          <ul>
            <li>Wind: {data.wind} km/h</li>
            <li>Humidity: {data.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
