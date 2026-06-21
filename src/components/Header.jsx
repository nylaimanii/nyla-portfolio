import { motion } from 'framer-motion';
import { personalInfo } from '../constants/data';
import heroImg from '../assets/hero.png';
import Bow from './Bow';

const NAV_ITEMS = [
  { id: 'about',      label: 'ABOUT' },
  { id: 'skills',     label: 'SKILLS' },
  { id: 'projects',   label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'hackathons', label: 'HACKATHONS' },
  { id: 'contact',    label: 'CONTACT' },
  { id: 'chatbot',    label: 'CHAT' },
];

const HERO_BADGES = ['AI & Full-Stack', 'Hackathon Winner', 'Open to Work'];

const FADE_LEFT = {
  hidden: { opacity: 0, x: -24 },
  show:   (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.55, ease: 'easeOut' } }),
};

const FADE_RIGHT = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.6, ease: 'easeOut' } },
};

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="top-nav">
        <div className="top-nav-inner">
          <a
            href="#top"
            className="nav-brand"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Nyla <em>Wilson</em>
          </a>
          <div className="nav-links">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                type="button"
                className="nav-link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <header className="header" id="top">
        <div className="hero">
          <div className="hero-left">
            <motion.div
              className="hero-eyebrow"
              custom={0}
              variants={FADE_LEFT}
              initial="hidden"
              animate="show"
            >
              PORTFOLIO — 2026
            </motion.div>

            <motion.h1
              className="hero-name"
              custom={1}
              variants={FADE_LEFT}
              initial="hidden"
              animate="show"
            >
              Nyla <em>Wilson</em>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              custom={2}
              variants={FADE_LEFT}
              initial="hidden"
              animate="show"
            >
              CS Student &amp; Software Engineer — NYC Metro
            </motion.p>

            <motion.div
              className="hero-rule"
              custom={3}
              variants={FADE_LEFT}
              initial="hidden"
              animate="show"
            />

            <motion.div
              className="hero-badges"
              custom={4}
              variants={FADE_LEFT}
              initial="hidden"
              animate="show"
            >
              {HERO_BADGES.map(b => (
                <span key={b} className="pill">{b}</span>
              ))}
            </motion.div>

            <motion.div
              className="hero-socials"
              custom={5}
              variants={FADE_LEFT}
              initial="hidden"
              animate="show"
            >
              <a href={personalInfo.github}   target="_blank" rel="noreferrer">GitHub</a>
              <span className="hero-socials-sep">·</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="hero-socials-sep">·</span>
              <a href={personalInfo.devpost}  target="_blank" rel="noreferrer">Devpost</a>
            </motion.div>
          </div>

          <motion.div
            className="hero-right"
            variants={FADE_RIGHT}
            initial="hidden"
            animate="show"
          >
            <div className="hero-photo-wrap">
              <img
                src={heroImg}
                alt="Nyla Wilson"
                className="hero-photo"
              />
              <span className="hero-photo-bow">
                <Bow delay="0.5s" />
              </span>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}
