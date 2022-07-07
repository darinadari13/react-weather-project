import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { WEATHER_CODE_TO_TEXT } from '../consts';

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon={WEATHER_CODE_TO_TEXT[props.code]}
      color='#155263'
      size={props.size}
      animate={true}
    />
  );
}
