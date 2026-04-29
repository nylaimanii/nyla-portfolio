import { useEffect, useState } from 'react';

const COLORS = ['#F2C6DE', '#DBCDF0', '#C6DEF1', '#C9E4DE', '#F7D9C4', '#FAEDCB'];

export default function Confetti({ trigger, onDone }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!trigger) return;
    const arr = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.5 ? '50%' : '2px',
    }));
    setPieces(arr);
    const t = setTimeout(() => {
      setPieces([]);
      onDone?.();
    }, 2200);
    return () => clearTimeout(t);
  }, [trigger, onDone]);

  if (pieces.length === 0) return null;

  return (
    <div className="confetti-container">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            top: '0%',
            background: p.color,
            borderRadius: p.shape,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
