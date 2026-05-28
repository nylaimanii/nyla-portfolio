import Window from './Window';
import { hackathons } from '../constants/data';

const META = {
  'YHack Spring 2026 — Yale University': {
    featured: true,
    badge: { text: 'SOLO WIN → 2 INTERNSHIP OFFERS', tone: 'win' },
    note: 'Solo performance led directly to internship offers at Origin Foundation and Actual Foods, New York City — Summer 2026',
  },
  'Hoya Hacks 2026 — Georgetown University': {
    badge: { text: '2nd Place', tone: 'second' },
  },
  'HackHERS 2026 — Rutgers University': {
    badge: { text: '24-HR Build', tone: 'build' },
  },
};

export default function Hackathons() {
  return (
    <Window title="★ HACKATHONS.log" id="hackathons" index={2}>
      <div className="hackathons-list">
        {hackathons.map((h) => {
          const meta = META[h.event] || {};
          const cardClass = `hack-card ${meta.featured ? 'hack-card--featured' : ''}`;
          return (
            <article key={h.event} className={cardClass}>
              <div className="hack-header">
                <div className="hack-meta">
                  <div className="hack-event">{h.event}</div>
                  <div className="hack-place">{h.location} · {h.date}</div>
                </div>
                {meta.badge && (
                  <span className={`hack-placement-badge hack-placement-badge--${meta.badge.tone}`}>
                    {meta.badge.text}
                  </span>
                )}
              </div>

              <div className="hack-row">
                {h.track && <span className="hack-track-pill">{h.track}</span>}
                {h.project && <span className="hack-project">Project · {h.project}</span>}
              </div>

              <p className="hack-desc">{h.description}</p>

              {meta.note && (
                <div className="hack-note">{meta.note}</div>
              )}

              {(h.devpost || h.github) && (
                <div className="hack-links">
                  {h.devpost && (
                    <a className="hack-link" href={h.devpost} target="_blank" rel="noreferrer">
                      ↗ Devpost
                    </a>
                  )}
                  {h.github && (
                    <a className="hack-link" href={h.github} target="_blank" rel="noreferrer">
                      ↗ GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Window>
  );
}
