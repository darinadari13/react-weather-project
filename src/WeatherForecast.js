import React from "react";
import { useState } from "react";
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    return(
       <div className='WeatherForecast'>
            <div className='row'>
                {forecast.map((dailyForecast, index) => {
                    if(index < 6) {
                    return  <div className='col' key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                </div>
                }
            }
        )}
            </div>
        </div>
    );
  } else {
     const apiKey = 'e70f9b320d5f26eec768abf6830dd19d';
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`
    console.log(apiUrl)
    axios.get(apiUrl).then(handleResponse);
    
    return 'Loading...';
  }
    
}