import React, {useState} from "react";
import axios from 'axios';
import './Weather.css'


export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: 'Friday 16:25',
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
            <div className='city'>
            <h2>{weatherData.date}</h2>
            <h1>{weatherData.city}</h1>
                <span>Overcast clouds</span>
               <img src={weatherData.iconUrl} alt=''/>
            </div>
               <div className='row'>
                   <div className='col-6'>
                <p >{Math.round(weatherData.temperature)}°C</p>
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Wind: {weatherData.wind} km/h</li>
                        <li>Humidity: {weatherData.humidity} %</li>
                    </ul>
                    </div>
                </div>
           
        </div>
    )
    } else {
    const apiKey = 'e70f9b320d5f26eec768abf6830dd19d';
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...';
       
    
}

}