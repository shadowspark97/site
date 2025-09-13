import React, { useState } from 'react';
import ResumeCard from '../ResumeCard';
import './ContactCard.css';
import contactData from '../../data/contact';

/*
 * ContactCard
 * Displays primary contact information.
 * Header text required by user: "Spencer Weinstein - Full Stack Developer"
 */
function ContactCard() {
  const { phone, email, title = 'Contact', id = 'contact', image, imageAlt } = contactData;
  const [copied, setCopied] = useState(null); // 'phone' | 'email' | null

  function copyValue(label, value) {
    const toCopy = value;
    // Prefer async clipboard API
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(toCopy).then(() => handleCopied(label)).catch(() => fallbackCopy(toCopy, label));
    } else {
      fallbackCopy(toCopy, label);
    }
  }

  function fallbackCopy(text, label) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      handleCopied(label);
    } catch (e) {
      // Silently ignore; could add toast/error
    }
  }

  function handleCopied(label) {
    setCopied(label);
    window.clearTimeout(handleCopied._t);
    handleCopied._t = window.setTimeout(() => setCopied(null), 1800);
  }

  return (
  <ResumeCard title={title} id={id} headingLevel={2}>
      <div className="contact-card-body" aria-label="Contact information">
        <div className={`contact-profile${image ? ' has-avatar' : ''}`}>
          {image && (
            <figure className="contact-avatar">
              <img src={process.env.PUBLIC_URL + '/Spencer.jpg'} alt={imageAlt || title} loading="lazy" />
            </figure>
          )}
          <ul className="contact-list" role="list">
          <li className="contact-item" role="listitem">
            <span className="contact-label" aria-label="Phone number label">Phone</span>
            <a className="contact-value" href={`tel:${phone.replace(/[^\d+]/g,'')}`} aria-label="Phone number link">{phone}</a>
            <div className="contact-actions">
              <button
                type="button"
                className={`copy-btn${copied === 'phone' ? ' copied' : ''}`}
                onClick={() => copyValue('phone', phone)}
                aria-label="Copy phone number"
              >
                {copied === 'phone' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </li>
          <li className="contact-item" role="listitem">
            <span className="contact-label" aria-label="Email address label">Email</span>
            <a className="contact-value" href={`mailto:${email}`} aria-label="Email link">{email}</a>
            <div className="contact-actions">
              <button
                type="button"
                className={`copy-btn${copied === 'email' ? ' copied' : ''}`}
                onClick={() => copyValue('email', email)}
                aria-label="Copy email address"
              >
                {copied === 'email' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </ResumeCard>
  );
}

export default ContactCard;
