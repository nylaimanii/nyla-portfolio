import { personalInfo } from '../constants/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-name">
          Nyla <em>Wilson</em>
        </div>
        <div className="footer-made">
          Designed &amp; built by Nyla Wilson · 2026
        </div>
        <div className="footer-links">
          <a href={personalInfo.github}   target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personalInfo.devpost}  target="_blank" rel="noreferrer">Devpost</a>
        </div>
      </div>
    </footer>
  );
}
