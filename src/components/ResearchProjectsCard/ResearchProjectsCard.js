import React from 'react';
import ResumeSection from '../ResumeSection';
import WorkExperienceItemCard from '../WorkExperienceItemCard';
import './ResearchProjectsCard.css';
import researchData from '../../data/research';

/*
 * ResearchProjectsCard
 * Mirrors WorkExperienceCard but for research/client project style entries.
 */
function ResearchProjectsCard() {
  const { id, title, items = [] } = researchData;
  return (
  <ResumeSection title={title} id={id}>
      <div className="research-projects-list">
        {items.map(item => (
          <WorkExperienceItemCard key={item.role + item.company} {...item} />
        ))}
      </div>
  </ResumeSection>
  );
}

export default ResearchProjectsCard;
