import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import HourlyForecast from './components/HourlyForecast';
import WeatherDetails from './components/WeatherDetails';
import Loader from './components/Loader';
import ErrorCard from './components/ErrorCard';
import Footer from './components/Footer';
import { useSearchHistory, useWeather } from './hooks/useWeather';
import { weatherBackgrounds } from './utils/helpers';

const stateMap = {
  default: 'bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_22%),_radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_24%),_rgba(2,6,23,1)]',
  sunny: 'bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.24),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(253,224,71,0.18),_transparent_26%),_bg-gradient-to-b_from-sky-500_to-indigo-950]',
  cloudy: 'bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.24),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(100,116,139,0.18),_transparent_26%),_bg-gradient-to-b_from-slate-950_to-slate-900]',
  rain: 'bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(15,118,211,0.2),_transparent_26%),_bg-gradient-to-b_from-slate-950_to-slate-900]',
  thunderstorm: 'bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.22),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.18),_transparent_26%),_bg-gradient-to-b_from-slate-950_to-slate-900]',
  snow: 'bg-[radial-gradient(circle_at_top_left,_rgba(224,242,254,0.24),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(226,232,240,0.18),_transparent_26%),_bg-gradient-to-b_from-slate-100_to-slate-300]',
  fog: 'bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.24),_transparent_28%),_radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.18),_transparent_26%),_bg-gradient-to-b_from-slate-900_to-slate-800]'
};

function App() {
  const { history, addHistory } = useSearchHistory();
  const { weather, forecast, loading, error, loadWeather, background, tip } = useWeather();
  const [selectedBackground, setSelectedBackground] = useState('default');

  useEffect(() => {
    setSelectedBackground(background || 'default');
  }, [background]);

  const handleSearch = (city) => {
    if (!city?.trim()) return;
    addHistory(city);
    loadWeather(city);
  };

  const handleClear = () => {
    window.location.reload();
  };

  return (
    <div className={`min-h-screen overflow-hidden px-0 py-6 ${stateMap[selectedBackground] || stateMap.default}`}>
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-4 px-4 pb-8">
        <Navbar onClear={handleClear} />
        <main className="relative flex-1">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ opacity: [0.12, 0.24, 0.12] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
            />
            <motion.div
              animate={{ x: [-20, 20, -20], y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-10 top-52 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            />
          </div>
          <SearchBar searchHistory={history} onSearch={handleSearch} onSelectHistory={handleSearch} />
          <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-6">
            <div className="glass-card glass-border rounded-[2.5rem] border border-white/15 bg-white/10 px-8 py-7 text-slate-100 shadow-glass backdrop-blur-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-sm uppercase tracking-[0.28em] text-cyan-200/80"
              >
                Weather Tip
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
                className="mt-3 text-3xl font-semibold leading-tight text-white"
              >
                {tip}
              </motion.h2>
            </div>
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Loader />
                </motion.div>
              ) : error ? (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ErrorCard message={error} />
                </motion.div>
              ) : weather && forecast ? (
                <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <CurrentWeather weather={weather} />
                  <HourlyForecast forecast={forecast} />
                  <Forecast forecast={forecast} />
                  <WeatherDetails weather={weather} forecast={forecast} />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
