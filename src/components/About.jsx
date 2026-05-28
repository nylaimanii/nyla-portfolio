import Window from './Window';

const STATS = [
  { num: '10+', label: 'Projects Shipped' },
  { num: '3',   label: 'Hackathons Competed' },
];

export default function About() {
  return (
    <Window title="♥ ABOUT.exe" id="about" index={0}>
      <div className="about-grid">
        <div className="about-bio">
          <p>
            I&apos;m Nyla Wilson — a 20-year-old CS student at Camden
            County College and a{' '}
            <em className="bio-highlight">self-taught</em> full-stack and
            AI developer. I&apos;ve been building real projects since
            before I ever stepped into a classroom for it.
          </p>
          <p>
            I work across the full stack — React, Next.js, SvelteKit,
            Python, TypeScript — and I&apos;m genuinely interested in AI,
            not just as a buzzword but as something I{' '}
            <em className="bio-highlight">actually build with</em>. LLM
            APIs, simulations, computer vision, data pipelines. I pick up
            whatever the project needs.
          </p>
          <p>
            I come from an immigrant family — my dad came from Panama and
            built a career in enterprise software. That work ethic is in
            everything I do. I{' '}
            <em className="bio-highlight">show up to hackathons solo</em>,{' '}
            <em className="bio-highlight">I ship</em>, and I don&apos;t
            stop until it works.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
