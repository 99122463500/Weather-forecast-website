import axios from 'axios';

const API_KEY = 'your_openweathermap_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast/daily`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      cnt: 7,
    },
  });
  return response.data;
};

