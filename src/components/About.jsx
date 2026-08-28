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
            I&apos;m Nyla. CS student, builder, figuring it out as I go.
          </p>
          <p>
            My family came from Panama and that shaped everything about
            how I work. You just do it.
          </p>
          <p>
            I care a lot about building things that actually help people.
            Not just cool things. Things that give people more time, more
            freedom, more access. I don&apos;t think we&apos;ve gotten
            there yet and I want to be part of the generation that does.
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
