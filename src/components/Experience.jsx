import { motion } from 'framer-motion';
import Window from './Window';
import { experience } from '../constants/data';

function badgeClass(badge = '') {
  return `exp-badge exp-badge--${badge.toLowerCase()}`;
}

export default function Experience() {
  return (
    <Window title="✦ EXPERIENCE.log" id="experience" index={2}>
      <div className="experience-list">
        {experience.map((exp, i) => (
          <motion.article
            key={`${exp.company}-${i}`}
            className="card exp-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
          >
            <div className="exp-header">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
              </div>
              {exp.badge && (
                <span className={badgeClass(exp.badge)}>{exp.badge}</span>
              )}
            </div>
            <div className="exp-meta">
              {exp.date}
              {exp.location && ` · ${exp.location}`}
              {exp.type && ` · ${exp.type}`}
            </div>
            {exp.description && (
              <p className="exp-desc">{exp.description}</p>
            )}
          </motion.article>
        ))}
      </div>
    </Window>
  );
}
