import { motion } from 'framer-motion';
import Window from './Window';
import Bow from './Bow';
import { projects } from '../constants/data';

function statusClass(status = '') {
  const s = status.toLowerCase();
  if (s.includes('winner')) return 'project-status project-status--winner';
  if (s.includes('progress')) return 'project-status project-status--progress';
  return 'project-status project-status--live';
}

function statusLabel(status = '') {
  const s = status.toLowerCase();
  if (s.includes('winner')) return 'WINNER';
  if (s.includes('progress')) return 'IN PROGRESS';
  return 'LIVE';
}

export default function Projects() {
  return (
    <Window
      title="✦ PROJECTS.dir"
      id="projects"
      index={3}
      titleAdornment={<Bow delay="0s" className="section-title-bow" />}
    >
      <motion.div className="projects-grid" layout>
        {projects.map((proj) => (
          <motion.div
            key={proj.name}
            className="project-card"
            layout
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="project-header">
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="project-name">{proj.name}</div>
                {proj.subtitle && <div className="project-tagline">{proj.subtitle}</div>}
              </div>
              <span className={statusClass(proj.status)}>
                {statusLabel(proj.status)}
              </span>
            </div>

            <p className="project-desc">{proj.description}</p>

            {proj.stack && (
              <div className="tag-row">
                {proj.stack.map((s, j) => (
                  <span key={j} className="tech-tag">{s}</span>
                ))}
              </div>
            )}

            {(proj.live || proj.github) && (
              <div className="project-links">
                {proj.live && (
                  <a className="project-link" href={proj.live} target="_blank" rel="noreferrer">
                    ↗ View Live
                  </a>
                )}
                {proj.github && (
                  <a className="project-link project-link--muted" href={proj.github} target="_blank" rel="noreferrer">
                    ↗ GitHub
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Window>
  );
}
