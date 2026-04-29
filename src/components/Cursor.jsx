import { useState, useEffect, useRef, useCallback } from 'react';

const PASTEL_COLORS = ['#F2C6DE', '#DBCDF0', '#C6DEF1', '#C9E4DE', '#F7D9C4', '#FAEDCB'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Cursor() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [active, setActive] = useState(false);
  const [pointer, setPointer] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const sparkleId = useRef(0);
  const lastSparkle = useRef(0);

  // Sync with theme class
  useEffect(() => {
    const check = () => setIsDark(document.body.classList.contains('theme-dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const palette = isDark
    ? ['#00e5ff', '#ff00cc', '#00ff88', '#ffff00']
    : PASTEL_COLORS;

  const cursorColor = pointer
    ? (isDark ? '#ff00cc' : '#F2C6DE')
    : (isDark ? '#00ff88' : '#DBCDF0');

  const spawnSparkle = useCallback((x, y) => {
    const now = Date.now();
    if (now - lastSparkle.current < 35) return;
    lastSparkle.current = now;

    const count = Math.floor(randomBetween(1, 3));
    const newSparkles = Array.from({ length: count }, () => ({
      id: sparkleId.current++,
      x: x + randomBetween(-12, 12),
      y: y + randomBetween(-12, 12),
      size: randomBetween(7, 14),
      color: palette[Math.floor(Math.random() * palette.length)],
      kind: Math.random() > 0.5 ? 'star' : (Math.random() > 0.5 ? 'heart' : 'sparkle'),
      born: now,
    }));

    setSparkles(prev => [...prev.slice(-24), ...newSparkles]);
  }, [palette]);

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

  // Cull old sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles(prev => prev.filter(s => now - s.born < 700));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sparkle trail */}
      {sparkles.map(s => {
        const age = Date.now() - s.born;
        const t = age / 700;
        const opacity = Math.max(0, 1 - t * t);
        const scale = 0.4 + (1 - t) * 0.7;

        return (
          <div
            key={s.id}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 999998,
              transform: `translate(${s.x - s.size / 2}px, ${s.y - s.size / 2}px) scale(${scale}) rotate(${age * 0.3}deg)`,
              opacity,
              transformOrigin: 'center center',
              fontSize: `${s.size}px`,
              lineHeight: 1,
              color: s.color,
              filter: `drop-shadow(0 0 4px ${s.color})`,
              fontFamily: 'serif',
            }}
          >
            {s.kind === 'heart' ? '♥' : s.kind === 'star' ? '★' : '✦'}
          </div>
        );
      })}

      {/* Main cursor */}
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
          transform: `scale(${active ? 0.78 : 1}) rotate(${pointer ? -10 : 0}deg)`,
          transformOrigin: '50% 50%',
          transition: 'transform 0.1s ease',
        }}>
          {pointer ? (
            <HeartCursor color={cursorColor} />
          ) : (
            <StarCursor color={cursorColor} />
          )}
        </div>
      </div>
    </>
  );
}

function StarCursor({ color }) {
  return (
    <svg
      width="32" height="32"
      viewBox="-2 -2 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', transform: 'translate(-50%, -50%)' }}
    >
      <defs>
        <filter id="cursor-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.2" floodColor={color} floodOpacity="0.95"/>
          <feDropShadow dx="0" dy="0" stdDeviation="1"   floodColor={color} floodOpacity="0.6"/>
        </filter>
      </defs>
      <g filter="url(#cursor-glow)">
        {/* Pixel star */}
        <polygon
          points="10,0 12.5,7 20,7 13.7,11.5 16.2,19 10,14.5 3.8,19 6.3,11.5 0,7 7.5,7"
          fill={color}
          stroke="#fff"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function HeartCursor({ color }) {
  return (
    <svg
      width="32" height="32"
      viewBox="-2 -2 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', transform: 'translate(-50%, -50%)' }}
    >
      <defs>
        <filter id="heart-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor={color} floodOpacity="0.95"/>
          <feDropShadow dx="0" dy="0" stdDeviation="1"   floodColor={color} floodOpacity="0.6"/>
        </filter>
      </defs>
      <g filter="url(#heart-glow)">
        <path
          d="M10 18 C 2 12, 0 8, 2.5 4.5 C 4.5 2, 7.5 2.5, 10 5.5 C 12.5 2.5, 15.5 2, 17.5 4.5 C 20 8, 18 12, 10 18 Z"
          fill={color}
          stroke="#fff"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
