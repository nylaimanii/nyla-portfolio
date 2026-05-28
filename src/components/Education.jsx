import Window from './Window';
import { education } from '../constants/data';

export default function Education() {
  return (
    <Window title="★ EDUCATION.log" id="education" index={1}>
      <div className="education-list">
        {education.map((edu, i) => (
          <div key={i} className="card edu-card">
            <div className="edu-header">
              <span className="edu-school">{edu.school}</span>
              <span className={`pill ${edu.status === 'In Progress' ? '' : 'pill--green'}`}>
                {edu.status === 'In Progress'
                  ? `In Progress · ${edu.expected}`
                  : `Graduated · ${edu.year}`}
              </span>
            </div>
            <div className="edu-location">{edu.location}</div>
            <div className="edu-degree">{edu.degree}</div>
            {edu.coursework && (
              <>
                <div className="edu-coursework-label">Coursework</div>
                <div className="tag-row">
                  {edu.coursework.map((c, j) => (
                    <span key={j} className="tech-tag">{c}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </Window>
  );
}
