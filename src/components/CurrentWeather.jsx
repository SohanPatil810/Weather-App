import { motion } from 'framer-motion';
import { FiDroplet, FiWind, FiArrowUpRight, FiSunrise, FiSunset, FiMapPin } from 'react-icons/fi';
import { formatTime } from '../utils/formatTime';

export default function CurrentWeather({ weather }) {
  const { main, weather: condition, wind, sys, visibility, name, sys: { country } } = weather;
  const icon = condition[0]?.icon;
  const description = condition[0]?.description;

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card glass-border mx-auto mb-6 w-[min(1120px,calc(100%-2rem)))] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-glass backdrop-blur-xl"
    >
      <div className="relative overflow-hidden px-8 py-10 sm:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-sky-400/0 to-transparent" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 text-slate-100">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              <FiMapPin className="h-4 w-4" />
              <span>{name}, {country}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">{Math.round(main.temp)}°</div>
              <div>
                <div className="text-lg font-semibold capitalize text-slate-100/90">{description}</div>
                <div className="mt-2 text-sm text-slate-200/80">Feels like {Math.round(main.feels_like)}°</div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/10 px-4 py-4 text-sm text-slate-100 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300/80">Humidity</p>
                <p className="mt-2 text-xl font-semibold">{main.humidity}%</p>
              </div>
              <div className="rounded-3xl bg-slate-950/10 px-4 py-4 text-sm text-slate-100 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300/80">Pressure</p>
                <p className="mt-2 text-xl font-semibold">{main.pressure} hPa</p>
              </div>
              <div className="rounded-3xl bg-slate-950/10 px-4 py-4 text-sm text-slate-100 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300/80">Visibility</p>
                <p className="mt-2 text-xl font-semibold">{visibility / 1000} km</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-[2rem] bg-white/5 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8">
            <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-[2rem] bg-slate-950/20 text-slate-100 shadow-inner shadow-slate-950/30">
              <img
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                alt={description}
                className="h-40 w-40 object-contain"
              />
              <div className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200 shadow-lg shadow-slate-900/20">
                <FiArrowUpRight className="h-3.5 w-3.5" />
                Current
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white/5 px-5 py-5 text-sm text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-slate-300">
              <FiWind className="h-5 w-5" />
              Wind
            </div>
            <div className="mt-3 text-xl font-semibold">{wind.speed} m/s</div>
            <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{Math.round(wind.deg)}° {formatTime(sys.sunrise) ? '' : ''}</div>
          </div>
          <div className="rounded-3xl bg-white/5 px-5 py-5 text-sm text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-slate-300">
              <FiSunrise className="h-5 w-5" />
              Sunrise
            </div>
            <div className="mt-3 text-xl font-semibold">{formatTime(sys.sunrise)}</div>
          </div>
          <div className="rounded-3xl bg-white/5 px-5 py-5 text-sm text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-slate-300">
              <FiSunset className="h-5 w-5" />
              Sunset
            </div>
            <div className="mt-3 text-xl font-semibold">{formatTime(sys.sunset)}</div>
          </div>
          <div className="rounded-3xl bg-white/5 px-5 py-5 text-sm text-slate-100 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-slate-300">
              <FiDroplet className="h-5 w-5" />
              Feels
            </div>
            <div className="mt-3 text-xl font-semibold">{Math.round(main.feels_like)}°</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
