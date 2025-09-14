import React from 'react';
import './ResumeSection.css';

/*
 * Generic ResumeSection wrapper (renamed from ResumeCard) for consistent layout & styling across resume sections.
 * Props:
 *  - title?: string
 *  - subtitle?: string | ReactNode
 *  - footer?: ReactNode
 *  - as?: element/tag name (defaults to 'section')
 *  - className?: additional class names
 *  - children: main content
 */
function ResumeSection({
  title,
  subtitle,
  footer,
  as: Tag = 'section',
  className = '',
  children,
  headingLevel = 2,
  id
}) {
  const HeadingTag = `h${headingLevel}`; // expects 2-6 ideally

  return (
    <Tag id={id} className={`resume-section ${className}`.trim()}>
      {(title || subtitle) && (
        <header className="resume-section-header">
          {title && <HeadingTag className="resume-section-title">{title}</HeadingTag>}
          {subtitle && <div className="resume-section-subtitle">{subtitle}</div>}
        </header>
      )}
      <div className="resume-section-body">{children}</div>
      {footer && <div className="resume-section-footer">{footer}</div>}
    </Tag>
  );
}

export default ResumeSection;
