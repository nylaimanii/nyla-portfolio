import Window from './Window';

export default function About() {
  return (
    <Window title="// ABOUT.exe" variant="cyan" id="about" index={0}>
      <div className="about-content">
        <div className="about-text">
          <p className="about-para">
            I'm <span className="highlight-cyan">Nyla Wilson</span>, a Computer Science student and aspiring software engineer based in the <span className="highlight-cyan">NYC Metro Area</span>. I build full-stack applications, AI/ML systems, and computer vision tools — mostly self-directed, mostly shipping real things.
          </p>
          <p className="about-para">
            My work spans <span className="highlight-pink">MERN stack development</span>, <span className="highlight-lime">machine learning pipelines</span>, and <span className="highlight-orange">computer vision games</span>. I care deeply about accessibility, underrepresented communities in tech, and writing code that lasts.
          </p>
          <p className="about-para">
            I'm mentored by my father — a Senior Software Engineer with experience at <span className="highlight-cyan">IBM, Microsoft, and DXE</span> — who's taught me clean architecture, system design, and what it means to write production-quality code before your first internship.
          </p>
          <p className="about-para">
            Currently seeking <span className="highlight-pink">software engineering internships</span> where I can contribute immediately and keep growing fast.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-num">6</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-num stat-pink">2</span>
            <span className="stat-label">Hackathons</span>
          </div>
          <div className="stat-item">
            <span className="stat-num stat-lime">1</span>
            <span className="stat-label">Award</span>
          </div>
          <div className="stat-item">
            <span className="stat-num stat-orange">∞</span>
            <span className="stat-label">Drive</span>
          </div>
        </div>
      </div>
    </Window>
  );
}
