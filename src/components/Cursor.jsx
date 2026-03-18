import { useState, useEffect, useRef, useCallback } from 'react';

const COLORS = ['#00e5ff', '#ff00cc', '#00ff88', '#ffff00', '#ff6600', '#39ff14'];

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

  const glowColor = pointer ? '#ff00cc' : '#00ff88';

  const spawnSparkle = useCallback((x, y) => {
    const now = Date.now();
    if (now - lastSparkle.current < 35) return;
    lastSparkle.current = now;

    const id = sparkleId.current++;
    const count = Math.floor(randomBetween(1, 3));
    const newSparkles = Array.from({ length: count }, () => ({
      id: sparkleId.current++,
      x: x + randomBetween(-12, 12),
      y: y + randomBetween(-12, 12),
      size: randomBetween(6, 13),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      star: Math.random() > 0.4,
      born: now,
    }));

    setSparkles(prev => [...prev.slice(-24), ...newSparkles]);
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

  // Cull old sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles(prev => prev.filter(s => now - s.born < 650));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sparkle trail */}
      {sparkles.map(s => {
        const age = Date.now() - s.born;
        const t = age / 650;
        const opacity = Math.max(0, 1 - t * t);
        const scale = 0.4 + (1 - t) * 0.6;

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
              transformOrigin: 'center center',
            }}
          >
            {s.star ? (
              <svg
                width={s.size}
                height={s.size}
                viewBox="0 0 10 10"
                style={{ imageRendering: 'pixelated', filter: `drop-shadow(0 0 3px ${s.color})` }}
              >
                <polygon
                  points="5,0 6.2,3.8 10,3.8 7,6.2 8.2,10 5,7.6 1.8,10 3,6.2 0,3.8 3.8,3.8"
                  fill={s.color}
                />
              </svg>
            ) : (
              /* 4-pointed sparkle cross */
              <svg
                width={s.size}
                height={s.size}
                viewBox="0 0 10 10"
                style={{ imageRendering: 'pixelated', filter: `drop-shadow(0 0 3px ${s.color})` }}
              >
                <polygon
                  points="5,0 6,4 10,5 6,6 5,10 4,6 0,5 4,4"
                  fill={s.color}
                />
              </svg>
            )}
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
          transform: `scale(${active ? 0.82 : 1})`,
          transformOrigin: '0 0',
          transition: 'transform 0.08s ease',
        }}>
          {pointer ? (
            <HandCursor glow={glowColor} />
          ) : (
            <ArrowCursor glow={glowColor} />
          )}
        </div>
      </div>
    </>
  );
}

function ArrowCursor({ glow }) {
  return (
    <svg
      width="36" height="44"
      viewBox="0 0 18 22"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ display: 'block' }}
    >
      <defs>
        <filter id="arrow-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor={glow} floodOpacity="0.95"/>
          <feDropShadow dx="0" dy="0" stdDeviation="1"   floodColor={glow} floodOpacity="0.6"/>
        </filter>
      </defs>
      <g filter="url(#arrow-glow)">
        {/* Col 0 spine */}
        <rect x="0" y="0"  width="2" height="2" fill="black"/>
        <rect x="0" y="2"  width="2" height="2" fill="black"/>
        <rect x="0" y="4"  width="2" height="2" fill="black"/>
        <rect x="0" y="6"  width="2" height="2" fill="black"/>
        <rect x="0" y="8"  width="2" height="2" fill="black"/>
        <rect x="0" y="10" width="2" height="2" fill="black"/>
        <rect x="0" y="12" width="2" height="2" fill="black"/>
        <rect x="0" y="14" width="2" height="2" fill="black"/>
        <rect x="0" y="16" width="2" height="2" fill="black"/>
        {/* Diagonal right edge */}
        <rect x="2"  y="2"  width="2" height="2" fill="black"/>
        <rect x="4"  y="4"  width="2" height="2" fill="black"/>
        <rect x="6"  y="6"  width="2" height="2" fill="black"/>
        <rect x="8"  y="8"  width="2" height="2" fill="black"/>
        <rect x="10" y="10" width="2" height="2" fill="black"/>
        <rect x="12" y="12" width="2" height="2" fill="black"/>
        {/* Bottom horizontal bar */}
        <rect x="2" y="12"  width="12" height="2" fill="black"/>
        {/* Tail */}
        <rect x="6" y="14"  width="2" height="2" fill="black"/>
        <rect x="6" y="16"  width="2" height="2" fill="black"/>
        <rect x="6" y="18"  width="2" height="2" fill="black"/>
        <rect x="8" y="20"  width="2" height="2" fill="black"/>
        <rect x="10" y="20" width="2" height="2" fill="black"/>
        <rect x="8" y="18"  width="2" height="2" fill="black"/>
        <rect x="8" y="16"  width="2" height="2" fill="black"/>
        {/* White interior fill */}
        <rect x="2"  y="4"  width="2" height="2" fill="white"/>
        <rect x="2"  y="6"  width="2" height="2" fill="white"/>
        <rect x="2"  y="8"  width="2" height="2" fill="white"/>
        <rect x="2"  y="10" width="2" height="2" fill="white"/>
        <rect x="4"  y="6"  width="2" height="2" fill="white"/>
        <rect x="4"  y="8"  width="2" height="2" fill="white"/>
        <rect x="4"  y="10" width="2" height="2" fill="white"/>
        <rect x="4"  y="12" width="2" height="2" fill="white"/>
        <rect x="6"  y="8"  width="2" height="2" fill="white"/>
        <rect x="6"  y="10" width="2" height="2" fill="white"/>
        <rect x="6"  y="12" width="2" height="2" fill="white"/>
        <rect x="8"  y="10" width="2" height="2" fill="white"/>
        <rect x="8"  y="12" width="2" height="2" fill="white"/>
        <rect x="10" y="12" width="2" height="2" fill="white"/>
        <rect x="6"  y="16" width="2" height="2" fill="white"/>
        <rect x="6"  y="18" width="2" height="2" fill="white"/>
        <rect x="8"  y="18" width="2" height="2" fill="white"/>
      </g>
    </svg>
  );
}

function HandCursor({ glow }) {
  return (
    <svg
      width="36" height="44"
      viewBox="0 0 18 22"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      style={{ display: 'block' }}
    >
      <defs>
        <filter id="hand-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor={glow} floodOpacity="0.95"/>
          <feDropShadow dx="0" dy="0" stdDeviation="1"   floodColor={glow} floodOpacity="0.6"/>
        </filter>
      </defs>
      <g filter="url(#hand-glow)">
        {/* Index finger */}
        <rect x="6" y="0"  width="2" height="2" fill="black"/>
        <rect x="6" y="2"  width="2" height="2" fill="black"/>
        <rect x="6" y="4"  width="2" height="2" fill="black"/>
        <rect x="6" y="6"  width="2" height="2" fill="black"/>
        <rect x="6" y="8"  width="2" height="2" fill="black"/>
        <rect x="7" y="1"  width="1" height="8" fill="white"/>
        {/* Middle finger */}
        <rect x="9"  y="2"  width="2" height="8" fill="black"/>
        <rect x="10" y="3"  width="1" height="6" fill="white"/>
        {/* Ring finger */}
        <rect x="12" y="4"  width="2" height="6" fill="black"/>
        <rect x="13" y="5"  width="1" height="4" fill="white"/>
        {/* Pinky */}
        <rect x="15" y="6"  width="2" height="4" fill="black"/>
        <rect x="16" y="7"  width="1" height="2" fill="white"/>
        {/* Thumb */}
        <rect x="0" y="10"  width="4" height="6" fill="black"/>
        <rect x="1" y="11"  width="2" height="4" fill="white"/>
        {/* Palm */}
        <rect x="4" y="8"   width="14" height="10" fill="black"/>
        <rect x="5" y="9"   width="12" height="8"  fill="white"/>
        {/* Wrist */}
        <rect x="5"  y="18" width="10" height="2" fill="black"/>
        <rect x="6"  y="18" width="8"  height="1" fill="white"/>
        <rect x="5"  y="20" width="10" height="2" fill="black"/>
        <rect x="6"  y="20" width="8"  height="1" fill="white"/>
      </g>
    </svg>
  );
}
