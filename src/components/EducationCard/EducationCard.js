import React from 'react';
import './EducationCard.css';
import DegreeCard from '../DegreeCard';
import ResumeCard from '../ResumeCard';
import educationData from '../../data/education';

function EducationCard() {
  const { id, title, degrees = [] } = educationData;
  return (
    <ResumeCard title={title} id={id}>
      <div className="degree-grid">
        {degrees.map(d => (
          <DegreeCard key={d.title} {...d} />
        ))}
      </div>
    </ResumeCard>
  );
}

export default EducationCard;