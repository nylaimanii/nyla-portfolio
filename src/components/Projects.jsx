import Window from './Window';
import { projects } from '../constants/data';

export default function Projects() {
  return (
    <Window title="// PROJECTS.dir" variant="cyan" id="projects" index={3} fullWidth>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <span className="project-name">{proj.name}</span>
              <span className={`project-badge ${proj.status === 'COMPLETED' ? 'badge-lime' : 'badge-orange'}`}>
                {proj.status}
              </span>
            </div>
            <p className="project-desc">{proj.description}</p>
            <div className="tag-row">
              {proj.stack.map((s, j) => (
                <span key={j} className="tag tag-cyan">{s}</span>
              ))}
            </div>
            {(proj.github || proj.devpost) && (
              <div className="project-links">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="link-pill link-pill-cyan">
                    ◈ GITHUB
                  </a>
                )}
                {proj.devpost && (
                  <a href={proj.devpost} target="_blank" rel="noreferrer" className="link-pill link-pill-orange">
                    ◈ DEVPOST
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Window>
  );
}
