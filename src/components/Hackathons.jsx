import Window from './Window';
import Bow from './Bow';
import { hackathons } from '../constants/data';
import speakingImg from '../assets/speaking.jpg';

const headerPhoto = (
  <img
    className="hack-header-photo"
    src={speakingImg}
    alt="Nyla presenting at a hackathon"
    loading="lazy"
  />
);

export default function Hackathons() {
  return (
    <Window title="★ HACKATHONS.log" id="hackathons" index={3} headerAside={headerPhoto}>
      <div className="hackathons-list">
        {hackathons.map((h) => (
          <article key={h.event} className="hack-card">
            <div className="hack-header">
              <div className="hack-meta">
                <div className="hack-event">{h.event}</div>
                <div className="hack-place">{h.location} · {h.date}</div>
              </div>
              {h.placement && (
                h.placement === 'FINALIST' ? (
                  <span className="hack-placement-badge hack-placement-badge--finalist">
                    {h.placement}
                  </span>
                ) : (
                  <span className="hack-placement-wrap">
                    <Bow delay="1.5s" />
                    <span className="hack-placement-badge hack-placement-badge--win">
                      {h.placement}
                    </span>
                  </span>
                )
              )}
            </div>

            <div className="hack-row">
              {h.track && <span className="hack-track-pill">{h.track}</span>}
              {h.project && <span className="hack-project">Project · {h.project}</span>}
            </div>

            <p className="hack-desc">{h.description}</p>

            {(h.devpost || h.github || h.live) && (
              <div className="hack-links">
                {h.live && (
                  <a className="hack-link" href={h.live} target="_blank" rel="noreferrer">
                    ↗ Live
                  </a>
                )}
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
        ))}
      </div>
    </Window>
  );
}
