import React from 'react';
import './AboutCard.css';
import ResumeSection from '../ResumeSection';
import aboutData from '../../data/about';

function AboutCard() {
  const { id, title, paragraphs = [] } = aboutData;
  return (
  <ResumeSection title={title} id={id}>
      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
  </ResumeSection>
  );
}

export default AboutCard;
