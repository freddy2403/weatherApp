import React, { useState } from 'react';
import './App.css';
// Importing Components
import Weather from './components/Weather';
import Form from './components/Form';
import Location from './components/Location';

function App() {

  const [query, setQuery] = useState('');
  const [temperatures, setTemperatures] = useState({
    weather: {}
  });

  const icon_link = `http://openweathermap.org/img/w/${temperatures.weather[0].icon}.png`;

  return (
    <div className="app">
      <header>
        <h1>The Weather App</h1>
      </header>
      <Form
        query={query}
        setQuery={setQuery}
        temperatures={temperatures}
        setTemperatures={setTemperatures}
      />
      {(typeof temperatures.main != "undefined" ? (
        <div className="container">
          <Location
            temperatures={temperatures}
          />
          <div className="temperatures">
            <img src={icon_link} alt="" />
            <Weather
              cur={temperatures.main.temp}
              min={temperatures.main.temp_min}
              max={temperatures.main.temp_max}
            />
          </div>
        </div>
        ) : (
        <Location temperatures={temperatures} />
        )
      )}
    </div>
  );
}

export default App;
