import React from 'react';
import ResumeSection from '../ResumeSection';
import './SkillsCard.css';
import skillsData from '../../data/skills';

/*
 * SkillsCard
 * Renders categorized or flat list of skills as interactive pill tags.
 * Props:
 *  - skills?: string[] (if omitted, uses default set)
 *  - title?: string (defaults to 'Skills')
 * Future extension: accept categories { heading, items[] }
 */
function SkillsCard({ skills, title }) {
  const { id, title: dataTitle, skills: dataSkills } = skillsData;
  const effectiveTitle = title || dataTitle;
  const list = (skills && skills.length ? skills : dataSkills).slice();

  return (
  <ResumeSection title={effectiveTitle} id={id}>
      <ul className="skills-list" aria-label="Skill set">
        {list.map(skill => (
          <li key={skill} className="skill-item">
            <button
              type="button"
              className="skill-pill"
              aria-label={skill}
              onClick={() => {}}
            >
              <span className="skill-pill-label">{skill}</span>
            </button>
          </li>
        ))}
      </ul>
  </ResumeSection>
  );
}

export default SkillsCard;
