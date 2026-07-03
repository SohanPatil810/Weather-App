# 🌤️ Premium Weather App — Modern Weather Application

A beautifully designed, feature-rich weather application built with **React**, **Vite**, and the **OpenWeatherMap API**. Weatherly delivers real-time weather updates, hourly and 5-day forecasts, dynamic backgrounds, and a premium glassmorphism-inspired user interface.

## ✨ Features

* 🌍 Search weather for any city worldwide
* 📍 Automatic weather detection using browser geolocation
* 🌡️ Real-time weather information
* 🌤️ Hourly weather forecast
* 📅 5-Day weather forecast
* 🌅 Sunrise and sunset timings
* 💨 Wind speed and direction
* 💧 Humidity, pressure, and visibility
* 🌈 Dynamic backgrounds based on weather conditions
* 🌙 Dark & Light mode with theme persistence
* 🔍 Search history saved using Local Storage
* ⚡ Smooth animations powered by Framer Motion
* 📱 Fully responsive design for desktop, tablet, and mobile
* 🚨 Graceful error handling for invalid cities, network failures, and API issues
* 🦴 Loading skeletons for an improved user experience

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* JavaScript (ES6+)

### UI & Styling

* Tailwind CSS
* Framer Motion
* React Icons

### API & Utilities

* Axios
* OpenWeatherMap API

### Development Tools

* Git & GitHub
* npm

---

## 📂 Project Structure

```text
src/
│── assets/
│── components/
│   ├── CurrentWeather.jsx
│   ├── Forecast.jsx
│   ├── HourlyForecast.jsx
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── ThemeToggle.jsx
│   ├── WeatherCard.jsx
│   ├── WeatherDetails.jsx
│   ├── Loader.jsx
│   ├── ErrorCard.jsx
│   └── Footer.jsx
│
│── hooks/
│   └── useWeather.js
│
│── services/
│   └── weatherApi.js
│
│── utils/
│   ├── formatDate.js
│   ├── formatTime.js
│   └── helpers.js
│
│── styles/
│── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

> **Important:** Never commit your `.env` file to GitHub.

---

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📦 Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 API

This project uses the **OpenWeatherMap API** to fetch real-time weather data.

The API key is securely loaded using Vite environment variables.

```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

---

## 🌟 Future Improvements

* 🌍 Air Quality Index (AQI)
* ☀️ UV Index
* 🌧️ Weather Alerts
* 🌙 Moon Phase
* 📊 Interactive Weather Charts
* ⭐ Favorite Cities
* 🗺️ Interactive Weather Maps
* 🌐 Multi-language Support
* 🔔 Push Notifications
* 📡 Offline Support with Service Workers

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sohan Patil**

* GitHub: https://github.com/SohanPatil810

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.
