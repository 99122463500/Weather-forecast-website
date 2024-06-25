// src/App.js
import React, { useState } from 'react';
import WeatherInput from './components/WeatherInput';
import CurrentWeather from './components/CurrentWeather';
import { getCurrentWeather, getForecast } from './weatherService';
import WeatherChart from './components/WeatherChart';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (city) => {
    const weatherData = await getCurrentWeather(city);
    setCurrentWeather(weatherData);
    const forecastData = await getForecast(city);
    setForecast(forecastData);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherInput onSearch={handleSearch} />
      <CurrentWeather weather={currentWeather} />
      <WeatherChart forecast={forecast} />
    </div>
  );
};

export default App;

