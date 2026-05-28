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
            I&apos;m Nyla Wilson — a 20-year-old Computer Science student at
            Camden County College, building full-stack and AI projects that
            solve real problems. I&apos;m <em className="bio-highlight">self-taught</em>{' '}
            across most of what I know, and I&apos;ve been{' '}
            <em className="bio-highlight">building solo</em> since before I
            ever took a CS class.
          </p>
          <p>
            My dad <em className="bio-highlight">immigrated from Panama</em>{' '}
            and built a career as a senior software engineer at IBM and
            Microsoft. Watching him taught me that this field rewards{' '}
            <em className="bio-highlight">persistence above everything else</em>.
            I&apos;ve tried to carry that with me.
          </p>
          <p>
            I care about building technology that&apos;s accessible and
            useful — especially for people who are usually afterthoughts
            in the design process. I{' '}
            <em className="bio-highlight">show up to hackathons solo</em>,
            I ship things, and I keep going.
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
