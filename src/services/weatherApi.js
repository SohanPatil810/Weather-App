import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

export async function fetchCurrentWeather(city, units = 'metric') {
  const response = await client.get('/weather', {
    params: {
      q: city,
      appid: API_KEY,
      units
    }
  });
  return response.data;
}

export async function fetchWeatherByCoords(lat, lon, units = 'metric') {
  const response = await client.get('/weather', {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units
    }
  });
  return response.data;
}

export async function fetchHourlyForecast(lat, lon, units = 'metric') {
  const response = await client.get('/forecast', {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units
    }
  });

  const list = response.data.list || [];
  const hourly = list.slice(0, 12);

  const dailyMap = list.reduce((acc, item) => {
    const dateKey = new Date(item.dt * 1000).toISOString().split('T')[0];
    if (!acc[dateKey]) {
      acc[dateKey] = {
        dt: item.dt,
        temp: {
          min: item.main.temp_min,
          max: item.main.temp_max,
          day: item.main.temp
        },
        feels_like: {
          day: item.main.feels_like
        },
        weather: item.weather,
        pop: item.pop
      };
    } else {
      acc[dateKey].temp.min = Math.min(acc[dateKey].temp.min, item.main.temp_min);
      acc[dateKey].temp.max = Math.max(acc[dateKey].temp.max, item.main.temp_max);
      if (item.dt % 86400 === 43200) {
        acc[dateKey].weather = item.weather;
        acc[dateKey].feels_like.day = item.main.feels_like;
      }
    }
    return acc;
  }, {});

  const daily = Object.values(dailyMap).slice(0, 6);

  return {
    list,
    hourly,
    daily,
    current: {
      uvi: null
    }
  };
}
