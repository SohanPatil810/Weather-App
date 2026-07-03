import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const THEME_KEY = 'weather-theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) || 'dark';
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem(THEME_KEY, next);
    document.body.classList.toggle('light', next === 'light');
    setTheme(next);
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -1 }}
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/15 hover:text-white"
    >
      {theme === 'dark' ? <FiSun className="mr-2 h-5 w-5" /> : <FiMoon className="mr-2 h-5 w-5" />}
      {theme === 'dark' ? 'Light' : 'Dark'}
    </motion.button>
  );
}
