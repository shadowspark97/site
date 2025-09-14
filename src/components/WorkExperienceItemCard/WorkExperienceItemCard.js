import React from 'react';
import './WorkExperienceItemCard.css';

/*
 * WorkExperienceItemCard
 * Represents a single role/position within a work experience timeline.
 * Props:
 *  - role (string)
 *  - company (string)
 *  - period (string)
 *  - location (string)
 *  - bullets?: string | string[]  (auto-normalized to list)
 *  - tech?: string[] (optional small inline tech stack chips)
 */
function WorkExperienceItemCard({ role, company, period, location, bullets, tech }) {
  // Normalize bullets similar to DegreeCard notes
  let bulletItems = [];
  if (Array.isArray(bullets)) {
    bulletItems = bullets.filter(Boolean);
  } else if (typeof bullets === 'string') {
    const trimmed = bullets.trim();
    if (trimmed.includes('\n') || trimmed.includes('•')) {
      bulletItems = trimmed.split(/\n|•/).map(s => s.trim()).filter(Boolean);
    } else if (trimmed.length) {
      bulletItems = [trimmed];
    }
  }

  return (
    <article className="work-exp-item" aria-label={`${role} at ${company}`}>
      <header className="work-exp-item-header grid-two-line">
        <h3 className="work-exp-item-role">{role}</h3>
        <h3 className="work-exp-item-period" aria-label="Period">{period}</h3>
        <h3 className="work-exp-item-company">{company}</h3>
        <h3 className="work-exp-item-location" aria-label="Location">{location}</h3>
      </header>
      {tech && tech.length > 0 && (
        <ul className="work-exp-item-tech" aria-label="Tech stack">
          {tech.map(t => <li key={t}>{t}</li>)}
        </ul>
      )}
      {bulletItems.length > 0 && (
        <ul className="work-exp-item-bullets" aria-label="Highlights">
          {bulletItems.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </article>
  );
}

export default WorkExperienceItemCard;
