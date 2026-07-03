import { useEffect, useMemo, useState } from 'react';
import { fetchCurrentWeather, fetchHourlyForecast, fetchWeatherByCoords } from '../services/weatherApi';
import { weatherBackgrounds, weatherTips } from '../utils/helpers';

const DEFAULT_CITY = 'San Francisco';
const STORAGE_KEY = 'weather-search-history';
const THEME_KEY = 'weather-theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem(THEME_KEY);
    return stored || 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}

export function useSearchHistory() {
  const [history, setHistory] = useState(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addHistory = (city) => {
    const normalized = city.trim();
    if (!normalized) return;
    setHistory((prev) => [normalized, ...prev.filter((item) => item.toLowerCase() !== normalized.toLowerCase())].slice(0, 6));
  };

  return { history, addHistory };
}

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationAllowed, setLocationAllowed] = useState(null);

  const loadWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const current = await fetchCurrentWeather(city);
      const hourly = await fetchHourlyForecast(current.coord.lat, current.coord.lon);
      setWeather(current);
      setForecast(hourly);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Unable to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  const loadWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const current = await fetchWeatherByCoords(lat, lon);
      const hourly = await fetchHourlyForecast(lat, lon);
      setWeather(current);
      setForecast(hourly);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Unable to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const attemptLocation = () => {
      if (!navigator.geolocation) {
        setLocationAllowed(false);
        loadWeather(DEFAULT_CITY);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationAllowed(true);
          loadWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setLocationAllowed(false);
          loadWeather(DEFAULT_CITY);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 600000 }
      );
    };

    attemptLocation();
  }, []);

  const background = useMemo(() => {
    if (!weather) return 'default';
    return weatherBackgrounds[weather.weather[0].main] || 'default';
  }, [weather]);

  const tip = useMemo(() => {
    if (!weather) return 'Search for a city or allow location access to begin.';
    return weatherTips[weather.weather[0].main] || 'Weather is looking good — enjoy the day.';
  }, [weather]);

  return {
    weather,
    forecast,
    loading,
    error,
    locationAllowed,
    loadWeather,
    loadWeatherByCoords,
    background,
    tip
  };
}
