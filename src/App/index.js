import React from 'react';
import './index.css';

import Weather from '../Weather';

export default function App() {
  return <div className='App'>
    <div className='container'>
      <Weather defaultCity='Kyiv' />
      <footer>
        This project was coded by Daryna Petrychenko and is{' '}
        <a href='https://github.com/darinadari13/react-weather-project'
          target='_blank' rel='noreferrer'>open-sourced on GitHub</a>
      </footer>
    </div>
  </div>;
}
