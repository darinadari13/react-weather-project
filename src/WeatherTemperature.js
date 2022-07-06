import { useState } from "react";
import React  from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');
    function showFarenheight(event) {
        event.preventDefault();
        setUnit('farenheit');
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }
    function fahrenheit() {
        return (props.celsius * 9/5) + 32;
    }

    if (unit === 'celsius') {
      return (
        <div className='container-temperature'>
         <span className='temperature'>{Math.round(props.celsius)}</span>
            <span className='unit'>
                °C |{' '}
                <a href='/' onClick={showFarenheight}>
                  °F 
                </a>
             </span>
        </div>
    );
    } else {
        return (
        <div className='container-temperature'>
         <span className='temperature'>{Math.round(fahrenheit())}</span>
            <span className='unit'>
                <a href='/' onClick={showCelsius}>
                °C
                </a>{' '}
                | °F 
             </span>
        </div> 
        )
    }
   
}