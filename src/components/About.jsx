import Window from './Window';
import { stats } from '../constants/data';

export default function About() {
  return (
    <Window title="♥ ABOUT.exe" variant="cyan" id="about" index={0}>
      <div className="about-content">
        <div className="about-text">
          <p className="about-para">
            I'm <span className="highlight-cyan">Nyla Wilson</span>, a first-year Computer Science student at <span className="highlight-pink">Camden County College</span> with a genuine passion for building software that makes a real difference. I love the process of taking an idea and turning it into something people can actually use — and I am always looking for opportunities to grow, contribute, and learn from talented engineers.
          </p>
          <p className="about-para">
            Over the past year I have developed a strong foundation across the full stack — <span className="highlight-lavender">Python, JavaScript, TypeScript, React, Next.js, SvelteKit, Node.js, and FastAPI</span> — alongside hands-on experience working with AI tools like <span className="highlight-pink">Groq (LLaMA 3.3), Google Gemini, and K2 Think V2</span>. I have also built and trained convolutional neural networks for real-time inference, and I am actively learning <span className="highlight-orange">Rust and Go</span>.
          </p>
          <p className="about-para">
            One of my proudest moments this year was building <span className="highlight-cyan">RIPPLE</span> solo at <span className="highlight-pink">YHack (Yale University, Spring 2026)</span> — an AI-powered interactive history experience. I had 24 hours, no team, and a tech stack I was still learning parts of. I ended up receiving a summer internship offer from <span className="highlight-lavender">Actual Foods</span> and a deployment offer from <span className="highlight-lavender">K2 Think V2</span> at the event itself.
          </p>
          <p className="about-para">
            I am mentored throughout my life by my father, a senior software engineer with experience at <span className="highlight-cyan">IBM, Microsoft, DXC, Lockheed Martin, Avanade, Argano</span> and more. His guidance has shaped how I think about writing clean, maintainable code and approaching engineering problems with care.
          </p>
          <p className="about-para">
            I care deeply about building technology that is <span className="highlight-pink">accessible</span>, <span className="highlight-lavender">impactful</span>, and <span className="highlight-cyan">human-centered</span>.
          </p>
        </div>
        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className={`stat-item stat-${s.accent}-bg`}>
              <span className={`stat-num stat-${s.accent}`}>{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
