import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onSearch, onClear }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-card glass-border mx-auto my-4 flex w-[min(1120px,calc(100%-2rem))] items-center justify-between gap-3 rounded-3xl border bg-white/10 px-6 py-4 text-slate-50 shadow-glass backdrop-blur-xl dark:text-slate-100"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Premium Weather</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">Atmos</h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onClear}
          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/15 hover:text-white"
        >
          Reset
        </button>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
