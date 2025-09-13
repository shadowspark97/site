import React from 'react';
import AboutCard from '../AboutCard/AboutCard';
import EducationCard from '../EducationCard/EducationCard';
import SkillsCard from '../SkillsCard/SkillsCard';
import WorkExperienceCard from '../WorkExperienceCard/WorkExperienceCard';
import ResearchProjectsCard from '../ResearchProjectsCard/ResearchProjectsCard';
import ContactCard from '../ContactCard';

import './ResumeContainer.css';

/*
 * ResumeContainer
 * Purpose: Central place to arrange resume-style sections (cards) with consistent spacing.
 * Add future cards (SkillsCard, ProjectsCard, etc.) here without touching App.js once integrated.
 */
function ResumeContainer() {
  return (
    <section className="resume-container" aria-label="Resume overview">
      <ContactCard />
      <AboutCard />
      <EducationCard />
      <SkillsCard />
  <WorkExperienceCard />
  <ResearchProjectsCard />
      {/* Future: <SkillsCard /> <ProjectsCard /> <ContactCard /> */}
    </section>
  );
}

export default ResumeContainer;
