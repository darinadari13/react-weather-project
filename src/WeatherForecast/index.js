import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import WeatherForecastDay from '../WeatherForecastDay';

const apiKey = 'e70f9b320d5f26eec768abf6830dd19d';

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
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

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
