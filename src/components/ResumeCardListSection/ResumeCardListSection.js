import React from 'react';
import ResumeSection from '../ResumeSection';
import './ResumeCardListSection.css';

/*
 * ResumeCardListSection
 * A generalized component for displaying lists of resume items (education, experience, research, etc.)
 * Uses a standardized data structure to eliminate redundancy across different card types.
 */

const ResumeCardListSection = ({ 
  sectionData,
  className = '',
  showTags = true,
  showLocation = true,
  showDescription = true,
  headingLevel = 2
}) => {
  const { id, title, items } = sectionData;

  return (
    <ResumeSection title={title} id={id} headingLevel={headingLevel}>
      <div className={`resume-card-list-section ${className}`}>
        <div className="cards-container">
          {items.map((item) => (
            <ResumeCard 
              key={item.id}
              data={item}
              showTags={showTags}
              showLocation={showLocation}
              showDescription={showDescription}
            />
          ))}
        </div>
      </div>
    </ResumeSection>
  );
};

const ResumeCard = ({ 
  data, 
  showTags = true, 
  showLocation = true, 
  showDescription = true 
}) => {
  const {
    title,
    subtitle,
    dateRange,
    location,
    description,
    tags,
    links,
    achievements,
    type
  } = data;

  return (
    <div className={`resume-card ${type ? `resume-card--${type}` : ''}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
      </div>

      <div className="card-meta">
        {dateRange && <span className="date-range">{dateRange}</span>}
        {showLocation && location && <span className="location">{location}</span>}
      </div>

      {showDescription && description && (
        <p className="card-description">{description}</p>
      )}

      {achievements && achievements.length > 0 && (
        <ul className="achievements-list">
          {achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      )}

      {links && links.length > 0 && (
        <div className="card-links">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              className="card-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${link.label} for ${title}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {showTags && tags && tags.length > 0 && (
        <div className="card-tags" role="list" aria-label="Skills and technologies">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag-pill" role="listitem">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeCardListSection;