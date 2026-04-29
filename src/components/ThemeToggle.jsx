import { useState, useEffect } from 'react';

const STORAGE_KEY = 'nyla-theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEY) === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('theme-dark', dark);
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(d => !d)}
      aria-label="Toggle theme"
      title={dark ? 'Switch to pastel mode' : 'Switch to dark mode'}
    >
      <span>{dark ? '☀' : '☾'}</span>
      <span style={{ fontSize: '0.85rem', letterSpacing: '1.5px' }}>
        {dark ? 'PASTEL' : 'DARK'}
      </span>
    </button>
  );
}
