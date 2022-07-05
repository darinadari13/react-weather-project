import React, {useState} from "react";
import axios from 'axios';
import './Weather.css'
import FormattedDate from "./FormattedDate";
import WeatherInfo from './WeatherInfo'

export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            city: response.data.name,
            iconUrl: 'https://openweathermap.org/img/wn/04d@2x.png',
        })
    }
    if (weatherData.ready) {
        return (
        <div className='Weather'>
            <form>
                <div className='row'>
                    <div className='col-6'>
                        <input 
                        type='search'
                        placeholder='Enter a city'
                        className='form-control'
                        />
                    </div>
                    <div className='col-6'>
                        <input type='submit'
                        value='Search'/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
        </div>
    )
    } else {
    const apiKey = 'e70f9b320d5f26eec768abf6830dd19d';
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...';
       
    
}

}