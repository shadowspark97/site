import React from 'react';
import ResumeSection from '../ResumeSection';
import WorkExperienceItemCard from '../WorkExperienceItemCard';
import './WorkExperienceCard.css';
import workData from '../../data/work';

/*
 * WorkExperienceCard
 * Wraps a list of WorkExperienceItemCard items inside a ResumeSection.
 * Future extension: Accept data via props instead of internal array.
 */
function WorkExperienceCard() {
  const { id, title, items = [] } = workData;
  return (
  <ResumeSection title={title} id={id}>
      <div className="work-exp-list">
        {items.map(exp => (
          <WorkExperienceItemCard key={exp.role + exp.company} {...exp} />
        ))}
      </div>
  </ResumeSection>
  );
}

export default WorkExperienceCard;
