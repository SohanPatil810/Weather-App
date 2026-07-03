import { motion } from 'framer-motion';
import { FiCompass, FiCloud, FiStar } from 'react-icons/fi';
import { getCompassDirection } from '../utils/helpers';

export default function WeatherDetails({ weather, forecast }) {
  const wind = weather.wind;
  const uv = forecast.current.uvi ? Math.round(forecast.current.uvi) : null;
  const aqi = uv ? Math.round((uv / 11) * 100) : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="glass-card glass-border mx-auto mb-8 w-[min(1120px,calc(100%-2rem)))] rounded-[2rem] border border-white/15 bg-white/10 px-6 py-7 shadow-glass backdrop-blur-xl"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 rounded-3xl bg-slate-950/10 px-5 py-6 text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Air quality</p>
          <h3 className="text-2xl font-semibold">{aqi}</h3>
          <p className="text-sm text-slate-300">AQI is estimated from UV and may vary locally.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-3xl bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.28em] text-cyan-100/80">
            <FiStar /> Good
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          <div className="rounded-3xl bg-slate-950/10 px-5 py-6 text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-slate-300">
              <FiCompass className="h-5 w-5" />
              Wind direction
            </div>
            <div className="mt-3 text-2xl font-semibold">{getCompassDirection(wind.deg)}</div>
            <p className="mt-2 text-sm text-slate-300">Speed {wind.speed} m/s</p>
          </div>
          <div className="rounded-3xl bg-slate-950/10 px-5 py-6 text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-slate-300">
              <FiCloud className="h-5 w-5" />
              UV index
            </div>
            <div className="mt-3 text-2xl font-semibold">{uv ?? '--'}</div>
            <p className="mt-2 text-sm text-slate-300">{uv ? 'High sun exposure. Use sunscreen outdoors.' : 'UV data is not available for this forecast.'}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
