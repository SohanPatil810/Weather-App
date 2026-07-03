export const weatherBackgrounds = {
  Clear: 'sunny',
  Clouds: 'cloudy',
  Rain: 'rain',
  Drizzle: 'rain',
  Thunderstorm: 'thunderstorm',
  Snow: 'snow',
  Mist: 'fog',
  Smoke: 'fog',
  Haze: 'fog',
  Dust: 'fog',
  Fog: 'fog',
  Sand: 'fog',
  Ash: 'fog',
  Squall: 'rain',
  Tornado: 'thunderstorm'
};

export const weatherTips = {
  Clear: 'A perfect day to get outside. Don’t forget your sunglasses.',
  Clouds: 'A soft sky overhead — keep a light layer handy.',
  Rain: 'Rainy day ahead. Carry an umbrella and stay dry.',
  Drizzle: 'A few drops are expected. Pack a compact rain jacket.',
  Thunderstorm: 'Keep indoors if possible and avoid open spaces.',
  Snow: 'Winter weather is coming. Dress warmly and move safely.',
  Mist: 'Visibility may be low. Drive carefully and keep lights on.',
  Fog: 'Morning fog is likely. Give yourself extra commute time.'
};

export function getCompassDirection(degrees) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
