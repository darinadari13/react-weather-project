import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import WeatherForecastDay from '../WeatherForecastDay';
import { OPEN_WEATHER_API_KEY } from '../consts';

export default function WeatherForecast({ coordinates, unit }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);

    const latitude = coordinates.lon;
    const longitude = coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [coordinates]);

  if (!loaded) {
    return 'Loading...';
  }

  return (
    <div className='WeatherForecast'>
      <div className='row'>
        {forecast.map((dailyForecast, index) => {
          if (index < 6) {
            return <div className='col' key={index}>
              <WeatherForecastDay data={dailyForecast} unit={unit} />
            </div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
