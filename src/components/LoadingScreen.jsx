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
      <div className="loading-text">
        LOADING NYLA.EXE <span className="heart">♥</span>
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
      <div className="loading-stars">
        <span>✦</span>
        <span>★</span>
        <span>♥</span>
      </div>
    </div>
  );
}
