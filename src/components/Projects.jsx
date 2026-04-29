import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Window from './Window';
import { projects, projectFilters } from '../constants/data';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <Window title="✦ PROJECTS.dir" variant="cyan" id="projects" index={4} fullWidth>
      <div className="project-filters">
        {projectFilters.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label} ✦
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
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28 }}
            >
              <div className="project-header">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="project-name">{proj.name}</div>
                  {proj.tagline && <div className="project-tagline">{proj.tagline}</div>}
                </div>
                <span className={`project-badge ${proj.status?.includes('Winner') ? 'badge-pink' : (proj.status === 'COMPLETED' ? 'badge-lime' : 'badge-orange')}`}>
                  {proj.status?.includes('Winner') ? 'WINNER ★' : proj.status}
                </span>
              </div>
              <p className="project-desc">{proj.description}</p>
              <div className="tag-row">
                {proj.stack.map((s, j) => (
                  <span key={j} className="tag tag-cyan tag-interactive">{s}</span>
                ))}
              </div>
              {(proj.github || proj.devpost || proj.live) && (
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
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="link-pill link-pill-pink">
                      ◈ LIVE
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
