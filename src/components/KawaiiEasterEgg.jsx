import { useState, useEffect, useRef, useCallback } from 'react';

const TRIGGER = 'nyla';
const SYMBOLS = ['♥', '✦', '·', '◦'];
const COLORS  = ['#E8A0BF', '#C4728F', '#7B9E87', '#5C7A68'];

export default function KawaiiEasterEgg() {
  const [bursts, setBursts] = useState([]);
  const idRef = useRef(0);
  const bufferRef = useRef('');

  const spawnBurst = useCallback(() => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const burst = Array.from({ length: 28 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 80 + Math.random() * 220;
      return {
        id: idRef.current++,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        color:  COLORS[Math.floor(Math.random() * COLORS.length)],
        startX: cx,
        startY: cy,
        endX:   cx + Math.cos(angle) * radius,
        endY:   cy + Math.sin(angle) * radius - 80,
        size:   1.2 + Math.random() * 1.5,
        delay:  Math.random() * 0.2,
      };
    });

    setBursts(prev => [...prev, ...burst]);
    setTimeout(() => {
      setBursts(prev => prev.filter(p => !burst.includes(p)));
    }, 2200);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const target = e.target;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return;
      if (e.key.length !== 1) return;

      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-TRIGGER.length);
      if (bufferRef.current === TRIGGER) {
        bufferRef.current = '';
        spawnBurst();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [spawnBurst]);

  return (
    <div className="kawaii-burst-container">
      {bursts.map(p => (
        <div
          key={p.id}
          className="kawaii-particle"
          style={{
            left: p.startX,
            top: p.startY,
            color: p.color,
            fontSize: `${p.size}rem`,
            animationDelay: `${p.delay}s`,
            '--end-x': `${p.endX - p.startX}px`,
            '--end-y': `${p.endY - p.startY}px`,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
}
