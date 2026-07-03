import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

export default function SearchBar({ searchHistory, onSearch, onSelectHistory }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="glass-card glass-border mx-auto mb-6 w-[min(1120px,calc(100%-2rem)))] rounded-[2rem] border bg-white/10 px-6 py-5 shadow-glass backdrop-blur-xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="flex-1">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/80">
            <FiSearch className="h-4 w-4" />
            Search City
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a city name, then press enter"
            className="w-full rounded-3xl border border-white/15 bg-slate-950/70 px-4 py-4 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-cyan-300/80 focus:ring-2 focus:ring-cyan-300/20 sm:px-5"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
        >
          Search
        </button>
      </form>
      {searchHistory.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {searchHistory.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => onSelectHistory(city)}
              className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
