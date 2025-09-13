import React from 'react';
import ResumeCard from '../ResumeCard';
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
    <ResumeCard title={title} id={id}>
      <div className="research-projects-list">
        {items.map(item => (
          <WorkExperienceItemCard key={item.role + item.company} {...item} />
        ))}
      </div>
    </ResumeCard>
  );
}

export default ResearchProjectsCard;
