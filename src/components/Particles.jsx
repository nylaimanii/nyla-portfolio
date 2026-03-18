import { useMemo } from 'react';
import '../styles/particles.css';
import '../styles/animations.css';

const pixelColors  = ['lime', 'cyan', 'pink', 'yellow'];
const starColors   = ['lime', 'cyan', 'white', 'pink', 'lime', 'cyan', 'white'];
const sparkColors  = ['lime', 'cyan', 'white', 'pink'];

export default function Particles() {
  const stars = useMemo(() =>
    Array.from({ length: 130 }, (_, i) => ({
      id: i,
      top:      `${Math.random() * 100}%`,
      left:     `${Math.random() * 100}%`,
      size:     1 + Math.random() * 2.5,
      duration: `${2 + Math.random() * 5}s`,
      delay:    `${Math.random() * 6}s`,
      color:    `star-${starColors[Math.floor(Math.random() * starColors.length)]}`,
    })), []);

  const sparkles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      top:      `${Math.random() * 90}%`,
      left:     `${Math.random() * 95}%`,
      size:     8 + Math.random() * 14,
      duration: `${3 + Math.random() * 5}s`,
      delay:    `${Math.random() * 8}s`,
      color:    `sparkle-${sparkColors[Math.floor(Math.random() * sparkColors.length)]}`,
    })), []);

  const pixels = useMemo(() =>
    Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left:     `${Math.random() * 100}%`,
      color:    `pixel-${pixelColors[Math.floor(Math.random() * pixelColors.length)]}`,
      duration: `${8 + Math.random() * 14}s`,
      delay:    `${Math.random() * 16}s`,
    })), []);

  return (
    <div className="particles-container">
      {stars.map(s => (
        <div
          key={`star-${s.id}`}
          className={`star ${s.color}`}
          style={{
            top: s.top, left: s.left,
            width: `${s.size}px`, height: `${s.size}px`,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
      {sparkles.map(s => (
        <div
          key={`sparkle-${s.id}`}
          className={`sparkle ${s.color}`}
          style={{
            top: s.top, left: s.left,
            width: `${s.size}px`, height: `${s.size}px`,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
      {pixels.map(p => (
        <div
          key={`pixel-${p.id}`}
          className={`pixel ${p.color}`}
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
