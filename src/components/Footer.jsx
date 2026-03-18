import { personalInfo } from '../constants/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-name">
          <span className="footer-nyla">NYLA WILSON</span>
          <span className="footer-cursor">▮</span>
        </div>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GITHUB</a>
          <span className="footer-sep">//</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <span className="footer-sep">//</span>
          <a href={personalInfo.devpost} target="_blank" rel="noreferrer">DEVPOST</a>
        </div>
        <div className="footer-copy">
          © 2026 NYLA WILSON · BUILT WITH REACT + VITE · NYC METRO
        </div>
      </div>
    </footer>
  );
}
