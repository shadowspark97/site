import React from 'react';
import './AboutCard.css';
import ResumeCard from '../ResumeCard';
import aboutData from '../../data/about';

function AboutCard() {
  const { id, title, paragraphs = [] } = aboutData;
  return (
    <ResumeCard title={title} id={id}>
      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </ResumeCard>
  );
}

export default AboutCard;
