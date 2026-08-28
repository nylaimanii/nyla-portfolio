import Window from './Window';

const STATS = [
  { num: '5',    label: 'Hackathons' },
  { num: '2',    label: 'Internships' },
  { num: '14+',  label: 'Projects Shipped' },
  { num: '2026', label: 'Year Started' },
];

export default function About() {
  return (
    <Window title="♥ ABOUT.exe" id="about" index={0}>
      <div className="about-grid">
        <div className="about-bio">
          <p>
            I&apos;m Nyla, a CS student and builder. I grew up watching my
            dad, who came to this country from Panama, build a career in
            software from the ground up. That stuck with me. I care about
            building things that actually help people, not just cool
            things, things that give people more time, more freedom, more
            access. I don&apos;t think we&apos;ve gotten there yet and I
            want to be part of the generation that does.
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
