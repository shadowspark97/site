import React from 'react';
import './ResumeCard.css';

/*
 * Generic ResumeCard wrapper for consistent layout & styling across resume sections.
 * Props:
 *  - title?: string
 *  - subtitle?: string | ReactNode
 *  - footer?: ReactNode
 *  - as?: element/tag name (defaults to 'section')
 *  - className?: additional class names
 *  - children: main content
 */
function ResumeCard({
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
    <Tag id={id} className={`resume-card ${className}`.trim()}>
      {(title || subtitle) && (
        <header className="resume-card-header">
          {title && <HeadingTag className="resume-card-title">{title}</HeadingTag>}
          {subtitle && <div className="resume-card-subtitle">{subtitle}</div>}
        </header>
      )}
      <div className="resume-card-body">{children}</div>
      {footer && <div className="resume-card-footer">{footer}</div>}
    </Tag>
  );
}

export default ResumeCard;
