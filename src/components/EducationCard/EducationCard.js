import React from 'react';
import './EducationCard.css';
import DegreeCard from '../DegreeCard';
import ResumeSection from '../ResumeSection';
import educationData from '../../data/education';

function EducationCard() {
  const { id, title, degrees = [] } = educationData;
  return (
  <ResumeSection title={title} id={id}>
      <div className="degree-grid">
        {degrees.map(d => (
          <DegreeCard key={d.title} {...d} />
        ))}
      </div>
  </ResumeSection>
  );
}

export default EducationCard;