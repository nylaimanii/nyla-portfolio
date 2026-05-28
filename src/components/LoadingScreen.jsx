import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2400);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div className="loading-screen">
      <div className="loading-text">Nyla <em>Wilson</em></div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
      <div className="loading-sub">Portfolio · 2026</div>
    </div>
  );
}
