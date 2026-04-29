import Window from './Window';
import { education } from '../constants/data';

export default function Education() {
  return (
    <Window title="★ EDUCATION.log" variant="pink" id="education" index={1}>
      <div className="education-list">
        {education.map((edu, i) => (
          <div key={i} className="edu-item">
            <div className="edu-header">
              <span className="edu-school">{edu.school}</span>
              <span className={`badge ${edu.status === 'In Progress' ? 'badge-orange' : 'badge-lime'}`}>
                {edu.status === 'In Progress' ? `IN PROGRESS · ${edu.expected}` : `GRADUATED · ${edu.year}`}
              </span>
            </div>
            <div className="edu-location">{edu.location}</div>
            <div className="edu-degree">{edu.degree}</div>
            {edu.coursework && (
              <div className="edu-coursework">
                <span className="coursework-label">♥ COURSEWORK:</span>
                <div className="tag-row">
                  {edu.coursework.map((c, j) => (
                    <span key={j} className="tag tag-pink tag-interactive">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Window>
  );
}
