# 🌤️ Premium Weather App

A modern, premium weather application built with **React 19**, **Vite**, and the **OpenWeatherMap API**. Featuring a beautiful glassmorphism UI, dynamic weather backgrounds, smooth animations, dark/light mode, geolocation support, and responsive design, this application delivers a polished and intuitive weather experience across all devices.

---

## 🚀 Live Demo

🌐 **Website:** https://weather-app-liart-omega-63.vercel.app/

---

## ✨ Features

* 🌍 Search weather for any city worldwide
* 📍 Automatic weather detection using browser Geolocation API
* 🌡️ Real-time weather information
* 🌤️ Hourly weather forecast
* 📅 5-Day weather forecast
* 🌅 Sunrise & Sunset timings
* 💨 Wind Speed
* 💧 Humidity
* 🌬️ Atmospheric Pressure
* 👀 Visibility
* 🌙 Dark & Light Mode
* 💾 Theme persistence using Local Storage
* 🔍 Search history
* 🎨 Dynamic weather-based backgrounds
* ✨ Glassmorphism user interface
* ⚡ Smooth animations using Framer Motion
* 📱 Fully responsive for Desktop, Tablet, and Mobile
* 🚨 Beautiful error handling for invalid cities and network failures
* ⌛ Loading skeletons for better user experience

---

## 🛠️ Tech Stack

### Frontend

* React 19
* Vite
* JavaScript (ES6+)

### Styling

* Tailwind CSS
* Framer Motion
* React Icons

### API & Utilities

* Axios
* OpenWeatherMap API

### Development Tools

* Git
* GitHub
* npm

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── CurrentWeather.jsx
│   ├── Forecast.jsx
│   ├── HourlyForecast.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── WeatherDetails.jsx
│   ├── ThemeToggle.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   └── ErrorCard.jsx
│
├── hooks/
│   └── useWeather.js
│
├── services/
│   └── weatherApi.js
│
├── utils/
│   ├── formatDate.js
│   ├── formatTime.js
│   └── helpers.js
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SohanPatil810/Premium-Weather-App.git
```

### 2. Navigate to the Project

```bash
cd Premium-Weather-App
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file in the project root.

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

> **Important:** Never commit your `.env` file to GitHub.

### 5. Run the Development Server

```bash
npm run dev
```

The application will start at:

```text
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 API

This project uses the **OpenWeatherMap API** to retrieve weather information.

The API key is securely loaded using Vite environment variables.

```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

---

## 📸 Screenshots

> Add screenshots after uploading them to your repository.

### 🏠 Home Screen

```
screenshots/home.png
```

### 🔍 City Search

```
screenshots/search.png
```

### 🌙 Dark Mode

```
screenshots/dark-mode.png
```

### 📱 Mobile View

```
screenshots/mobile.png
```

---

## 🌟 Future Enhancements

* 🌎 Air Quality Index (AQI)
* ☀️ UV Index
* 🌧️ Weather Alerts
* 🌙 Moon Phase
* 📊 Interactive Weather Charts
* ⭐ Favorite Cities
* 🗺️ Interactive Weather Maps
* 🌍 Multi-language Support
* 🔔 Push Notifications
* 📡 Progressive Web App (PWA)
* 🌐 Offline Support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Sohan Patil**

* GitHub: https://github.com/SohanPatil810

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.

Your support helps the project grow and motivates future improvements.

---

## 💙 Acknowledgements

* React
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* OpenWeatherMap API
* Vercel
