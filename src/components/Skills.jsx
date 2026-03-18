import Window from './Window';
import { skills } from '../constants/data';

const categories = [
  { key: 'languages', label: 'LANGUAGES', tagClass: 'tag-cyan' },
  { key: 'stack', label: 'STACK', tagClass: 'tag-pink' },
  { key: 'aiml', label: 'AI / ML', tagClass: 'tag-lime' },
  { key: 'vision', label: 'VISION & OTHER', tagClass: 'tag-orange' },
];

export default function Skills() {
  return (
    <Window title="// SKILLS.matrix" variant="lime" id="skills" index={2} fullWidth>
      <div className="skills-grid">
        {categories.map(cat => (
          <div key={cat.key} className="skill-row">
            <div className="skill-category-label">{cat.label}</div>
            <div className="tag-row">
              {skills[cat.key].map((skill, i) => (
                <span key={i} className={`tag ${cat.tagClass} tag-interactive`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}
