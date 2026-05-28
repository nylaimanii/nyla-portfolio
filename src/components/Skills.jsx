import { useState } from 'react';
import Window from './Window';
import { skills, skillCategories } from '../constants/data';

function levelBar(level) {
  const filled = '●'.repeat(level);
  const empty  = '○'.repeat(5 - level);
  return filled + empty;
}

export default function Skills() {
  const [open, setOpen] = useState(() => {
    const init = {};
    skillCategories.forEach(c => { init[c.key] = true; });
    return init;
  });

  const toggle = (key) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <Window title="✦ SKILLS.matrix" id="skills" index={4}>
      <div className="skills-grid">
        {skillCategories.map(cat => {
          const isOpen = open[cat.key];
          return (
            <div key={cat.key} className="skill-block">
              <div className="skill-header" onClick={() => toggle(cat.key)}>
                <div className="skill-header-left">
                  <span className={`skill-toggle ${isOpen ? 'open' : ''}`}>▶</span>
                  <span className="skill-category-label">{cat.label}</span>
                </div>
                <span className="skill-level-bar" title={`Level ${cat.level} of 5`}>
                  {levelBar(cat.level)}
                </span>
              </div>
              <div className={`skill-tags-wrap ${isOpen ? '' : 'collapsed'}`}>
                <div className="tag-row">
                  {(skills[cat.key] || []).map((skill, i) => (
                    <span key={i} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
}
