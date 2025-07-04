import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-lg border border-gray-300 dark:border-gray-700 text-cyan-400 text-2xl hover:scale-110 transition-transform"
      onClick={() => setDark(d => !d)}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
} 