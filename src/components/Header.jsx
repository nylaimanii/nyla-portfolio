import { useState, useEffect } from 'react';
import Particles from './Particles';
import { personalInfo, badges } from '../constants/data';
import '../styles/animations.css';

const bootText = 'INITIALIZING PORTFOLIO_v2026.exe...';

export default function Header() {
  const [displayed, setDisplayed] = useState('');
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootText.length) {
        setDisplayed(bootText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootDone(true), 400);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <Particles />
      <div className="header-content">
        <div className="boot-text">
          <span>{displayed}</span>
          {!bootDone && <span className="boot-cursor">_</span>}
        </div>
        {bootDone && (
          <div className="header-main">
            <div className="glitch-wrapper">
              <h1 className="glitch-name" data-text="NYLA WILSON">
                NYLA WILSON
              </h1>
            </div>
            <p className="header-subtitle">{personalInfo.title}</p>
            <div className="status-bar">
              <span className="status-dot" />
              <span>ONLINE</span>
              <span className="status-sep">//</span>
              <span>{personalInfo.location}</span>
              <span className="status-sep">//</span>
              <span>{personalInfo.status}</span>
            </div>

            <div className="badges-row">
              {badges.map((b, i) => (
                <span key={i} className={`pixel-badge badge-${b.color}`}>
                  <span className="badge-icon">{b.icon}</span>
                  <span>{b.name}</span>
                  <span className="badge-tooltip">{b.name}</span>
                </span>
              ))}
            </div>

            <nav className="header-nav">
              {['about','education','experience','skills','projects','hackathons','contact','chatbot'].map(id => (
                <button key={id} className="nav-btn" onClick={() => scrollTo(id)}>
                  {id.toUpperCase()}
                </button>
              ))}
            </nav>
            <div className="header-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="link-pill">
                ◈ GITHUB
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="link-pill link-pill-pink">
                ◈ LINKEDIN
              </a>
              <a href={personalInfo.devpost} target="_blank" rel="noreferrer" className="link-pill link-pill-lime">
                ◈ DEVPOST
              </a>
            </div>
            <p className="header-hint">try typing my name ✦</p>
          </div>
        )}
      </div>
    </header>
  );
}
