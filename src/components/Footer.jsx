import { personalInfo } from '../constants/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-name">
          <span className="footer-nyla">NYLA WILSON</span>
          <span className="footer-cursor">▮</span>
        </div>
        <div className="footer-made">
          made with <span className="heart">♥</span> by nyla wilson // 2026
        </div>
        <div className="footer-links">
          <a href={personalInfo.github}   target="_blank" rel="noreferrer">GITHUB</a>
          <span className="footer-sep">//</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <span className="footer-sep">//</span>
          <a href={personalInfo.devpost}  target="_blank" rel="noreferrer">DEVPOST</a>
        </div>
      </div>
    </footer>
  );
}
