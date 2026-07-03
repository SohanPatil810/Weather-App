import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-card glass-border mx-auto mt-8 flex w-[min(1120px,calc(100%-2rem))] flex-col items-center justify-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-8 py-10 text-slate-100 shadow-glass backdrop-blur-xl"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-100 shadow-lg shadow-cyan-500/20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          className="h-14 w-14 rounded-full border-4 border-t-cyan-300/90 border-slate-300/20"
        />
      </div>
      <p className="text-center text-sm uppercase tracking-[0.28em] text-cyan-100/90">Fetching premium weather data</p>
      <p className="max-w-xl text-center text-sm text-slate-200/80">Loading the latest conditions and forecast for your location. Please wait a moment.</p>
    </motion.div>
  );
}
