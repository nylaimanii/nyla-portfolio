import Window from './Window';
import { hackathons } from '../constants/data';

export default function Hackathons() {
  return (
    <Window title="★ HACKATHONS.log" variant="orange" id="hackathons" index={5} fullWidth>
      <div className="hackathons-list">
        {hackathons.map((h, i) => (
          <div key={i} className="hackathon-card">
            <div className="hackathon-header">
              <div className="hackathon-meta">
                <span className="hackathon-event">{h.event}</span>
                <span className="hackathon-location">{h.location} · {h.date}</span>
              </div>
              {h.placement && (
                <span className="hackathon-placement">{h.placement}</span>
              )}
            </div>
            <div className="hackathon-track">{h.track}</div>
            {h.project && (
              <div className="hackathon-project">♥ PROJECT: {h.project}</div>
            )}
            <p className="hackathon-desc">{h.description}</p>
            <div className="project-links">
              {h.devpost && (
                <a href={h.devpost} target="_blank" rel="noreferrer" className="link-pill link-pill-orange">
                  ◈ DEVPOST
                </a>
              )}
              {h.github && (
                <a href={h.github} target="_blank" rel="noreferrer" className="link-pill link-pill-cyan">
                  ◈ GITHUB
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}
