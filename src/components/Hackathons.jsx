import Window from './Window';
import { hackathons, personalInfo } from '../constants/data';

export default function Hackathons() {
  return (
    <Window title="// HACKATHONS.log" variant="orange" id="hackathons" index={4} fullWidth>
      <div className="hackathons-list">
        {hackathons.map((h, i) => (
          <div key={i} className="hackathon-card">
            <div className="hackathon-header">
              <div className="hackathon-meta">
                <span className="hackathon-event">{h.event}</span>
                <span className="hackathon-location">{h.location} · {h.date}</span>
              </div>
              {h.placement && (
                <span className="hackathon-placement badge-lime">{h.placement}</span>
              )}
            </div>
            <div className="hackathon-track">{h.track}</div>
            <p className="hackathon-desc">{h.description}</p>
            <a
              href={h.devpost}
              target="_blank"
              rel="noreferrer"
              className="link-pill link-pill-orange"
            >
              ◈ VIEW ON DEVPOST
            </a>
          </div>
        ))}
      </div>
    </Window>
  );
}
