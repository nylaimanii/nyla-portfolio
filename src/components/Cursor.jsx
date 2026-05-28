import { useState, useEffect, useRef, useCallback } from 'react';

const SPARKLE_COLORS = ['#E8A0BF', '#C4728F', '#7B9E87', '#5C7A68'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Cursor() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [active, setActive] = useState(false);
  const [pointer, setPointer] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const sparkleId = useRef(0);
  const lastSparkle = useRef(0);

  const cursorColor = pointer ? '#C4728F' : '#E8A0BF';

  const spawnSparkle = useCallback((x, y) => {
    const now = Date.now();
    if (now - lastSparkle.current < 45) return;
    lastSparkle.current = now;

    const newSparkles = [{
      id: sparkleId.current++,
      x: x + randomBetween(-10, 10),
      y: y + randomBetween(-10, 10),
      size: randomBetween(5, 9),
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      born: now,
    }];

    setSparkles(prev => [...prev.slice(-18), ...newSparkles]);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        setPointer(!!el.closest('a, button, input, textarea, select, [role="button"]'));
      }
      spawnSparkle(e.clientX, e.clientY);
    };
    const onDown = () => setActive(true);
    const onUp   = () => setActive(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [spawnSparkle]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles(prev => prev.filter(s => now - s.born < 600));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {sparkles.map(s => {
        const age = Date.now() - s.born;
        const t = age / 600;
        const opacity = Math.max(0, 1 - t * t);
        const scale = 0.5 + (1 - t) * 0.6;

        return (
          <div
            key={s.id}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 999998,
              transform: `translate(${s.x - s.size / 2}px, ${s.y - s.size / 2}px) scale(${scale})`,
              opacity,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              background: s.color,
              transformOrigin: 'center center',
            }}
          />
        );
      })}

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        pointerEvents: 'none',
        zIndex: 999999,
        willChange: 'transform',
      }}>
        <div style={{
          transform: `translate(-50%, -50%) scale(${active ? 0.78 : 1})`,
          transformOrigin: '50% 50%',
          transition: 'transform 0.12s ease',
          width: pointer ? 28 : 16,
          height: pointer ? 28 : 16,
          borderRadius: '50%',
          border: pointer ? `1.5px solid ${cursorColor}` : 'none',
          background: pointer ? 'transparent' : cursorColor,
          boxShadow: `0 0 0 4px rgba(232,160,191,0.15)`,
        }} />
      </div>
    </>
  );
}
