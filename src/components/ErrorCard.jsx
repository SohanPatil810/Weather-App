import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';

export default function ErrorCard({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="glass-card glass-border mx-auto mt-8 w-[min(1120px,calc(100%-2rem))] rounded-[2rem] border border-rose-400/15 bg-rose-500/10 px-8 py-10 text-rose-100 shadow-glass backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-500/15 text-rose-300 shadow-lg shadow-rose-500/10">
          <FiAlertTriangle className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-rose-200/80">Weather Error</p>
          <h2 className="mt-2 text-2xl font-semibold">Something went wrong</h2>
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-rose-100/90">{message || 'Unable to load weather conditions. Please try again with a different city or refresh the page.'}</p>
    </motion.div>
  );
}
