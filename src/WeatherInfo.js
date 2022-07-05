import React from 'react';
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props) {
    return (
        <div className='WeatherInfo'>
        <div className='city'>
            <h2>
                <FormattedDate date={props.data.date}/>
            </h2>
            <h1>{props.data.city}</h1>
                <span>Overcast clouds</span>
               <img src={props.data.iconUrl} alt=''/>
            </div>
               <div className='row'>
                   <div className='col-6'>
                <p >{Math.round(props.data.temperature)}°C</p>
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