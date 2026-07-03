import { motion } from 'framer-motion';
import { formatDate } from '../utils/formatDate';

export default function Forecast({ forecast }) {
  const nextDays = forecast.daily.slice(1, 6);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-card glass-border mx-auto mb-8 w-[min(1120px,calc(100%-2rem)))] rounded-[2.2rem] border border-white/15 bg-white/10 px-6 py-7 shadow-glass backdrop-blur-xl"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">5-Day Forecast</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Upcoming vibes</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/10 px-4 py-3 text-sm text-slate-200">Stay ready with the next few days’ weather.</div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {nextDays.map((day) => (
          <div key={day.dt} className="rounded-3xl bg-slate-950/10 px-5 py-6 text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{formatDate(day.dt)}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-3xl font-semibold text-white">{Math.round(day.temp.day)}°</p>
                <p className="mt-1 text-sm text-slate-300">Feels {Math.round(day.feels_like.day)}°</p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="h-20 w-20"
              />
            </div>
            <p className="mt-3 text-sm text-slate-300">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
