import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Window from './Window';
import { projects, projectFilters } from '../constants/data';

function statusClass(status = '') {
  if (status.toLowerCase().includes('winner')) return 'project-status project-status--winner';
  if (status.toLowerCase().includes('progress')) return 'project-status project-status--progress';
  return 'project-status project-status--live';
}

function statusLabel(status = '') {
  if (status.toLowerCase().includes('winner')) return 'WINNER';
  if (status.toLowerCase().includes('progress')) return 'IN PROGRESS';
  return 'LIVE';
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <Window title="✦ PROJECTS.dir" id="projects" index={4}>
      <div className="project-filters">
        {projectFilters.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((proj) => (
            <motion.div
              key={proj.name}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="project-header">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="project-name">{proj.name}</div>
                  {proj.tagline && <div className="project-tagline">{proj.tagline}</div>}
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

              {(proj.live || proj.github || proj.devpost) && (
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
                  {proj.devpost && (
                    <a className="project-link project-link--muted" href={proj.devpost} target="_blank" rel="noreferrer">
                      ↗ Devpost
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Window>
  );
}
