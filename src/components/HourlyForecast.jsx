import { motion } from 'framer-motion';
import { formatTime } from '../utils/formatTime';

export default function HourlyForecast({ forecast }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-card glass-border mx-auto mb-8 w-[min(1120px,calc(100%-2rem)))] rounded-[2.2rem] border border-white/15 bg-white/10 px-6 py-7 shadow-glass backdrop-blur-xl"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Hourly Forecast</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Next 12 hours</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/10 px-4 py-3 text-sm text-slate-200">Scroll to preview hourly changes.</div>
      </div>
      <div className="mt-8 flex gap-4 overflow-x-auto pb-1 pt-3">
        {forecast.hourly.slice(1, 13).map((hour) => (
          <div key={hour.dt} className="min-w-[11rem] rounded-3xl bg-slate-950/10 px-4 py-5 text-center text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{formatTime(hour.dt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
              className="mx-auto h-16 w-16"
            />
            <p className="mt-2 text-2xl font-semibold text-white">{Math.round(hour.temp)}°</p>
            <p className="mt-1 text-sm text-slate-300">{Math.round(hour.pop * 100)}% rain</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
