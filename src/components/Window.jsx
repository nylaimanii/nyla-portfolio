import { motion } from 'framer-motion';
import '../styles/windows.css';

const TITLE_OVERRIDES = {
  '♥ ABOUT.exe':      'About',
  '★ EDUCATION.log':  'Education',
  '✦ EXPERIENCE.log': 'Experience',
  '✦ SKILLS.matrix':  'Skills',
  '✦ PROJECTS.dir':   'Projects',
  '★ HACKATHONS.log': 'Hackathons',
  '♥ CONTACT.exe':    'Contact',
  '✦ NYLA_BOT.ai':    'Chat with Nyla Bot',
};

const EYEBROW_OVERRIDES = {
  '♥ ABOUT.exe':      'WHO I AM',
  '★ EDUCATION.log':  'EDUCATION',
  '✦ EXPERIENCE.log': 'EXPERIENCE',
  '✦ SKILLS.matrix':  'TECH STACK',
  '✦ PROJECTS.dir':   'SELECTED WORK',
  '★ HACKATHONS.log': 'COMPETITIONS',
  '♥ CONTACT.exe':    'GET IN TOUCH',
  '✦ NYLA_BOT.ai':    'ASK NYLA BOT',
};

function cleanTitle(raw) {
  if (TITLE_OVERRIDES[raw]) return TITLE_OVERRIDES[raw];
  return raw
    .replace(/^[♥★✦♡✿]\s*/, '')
    .replace(/\.[a-z]+$/i, '')
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function eyebrow(raw, index) {
  const num = String(index + 1).padStart(2, '0');
  const label = EYEBROW_OVERRIDES[raw] || raw.replace(/^[♥★✦♡✿]\s*/, '').replace(/\.[a-z]+$/i, '').toUpperCase();
  return `${num} · ${label}`;
}

export default function Window({ title, fullWidth = false, children, id, index = 0 }) {
  const tone = index % 2 === 0 ? 'section--light' : 'section--tinted';
  void fullWidth;
  return (
    <motion.section
      id={id}
      className={`section ${tone}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="section-inner">
        <div className="section-eyebrow">{eyebrow(title, index)}</div>
        <h2 className="section-title">{cleanTitle(title)}</h2>
        <div className="section-rule" />
        <div className="section-body">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
