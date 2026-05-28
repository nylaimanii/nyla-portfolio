import Window from './Window';
import { experience } from '../constants/data';

export default function Experience() {
  return (
    <Window title="✦ EXPERIENCE.log" id="experience" index={2}>
      <div className="experience-list">
        {experience.map((exp, i) => (
          <div key={i} className="card exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
              </div>
              <span className="exp-type">{exp.type}</span>
            </div>
            <div className="exp-meta">{exp.location} · {exp.date}</div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Window>
  );
}
