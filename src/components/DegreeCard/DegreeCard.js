import React from 'react';
import './DegreeCard.css';

/*
 Resume‑like DegreeCard layout semantics:
  <article>
    header: left block (degree + institution), right block (years)
    meta line: location (muted)
    notes: bullet list or paragraph (supports string or array)
 */
function DegreeCard({ title, institution, years, location, notes }) {
  // Normalize notes: accept string, array of strings, or falsy
  let normalizedNotes = [];
  if (Array.isArray(notes)) {
    normalizedNotes = notes.filter(Boolean);
  } else if (typeof notes === 'string') {
    const trimmed = notes.trim();
    if (trimmed.includes('\n') || trimmed.includes('•')) {
      // Split on newline or bullet char for quick list formatting
      normalizedNotes = trimmed
        .split(/\n|•/)
        .map(s => s.trim())
        .filter(Boolean);
    } else if (trimmed.length) {
      normalizedNotes = [trimmed];
    }
  }

  return (
    <article className="degree-card" aria-label={`${title} at ${institution}`}>
      <header className="degree-card-header grid-two-line">
        <h3 className="degree-card-title">{title}</h3>
        <h3 className="degree-card-years" aria-label="Years attended">{years}</h3>
        <h3 className="degree-card-institution">{institution}</h3>
        <h3 className="degree-card-location-line" aria-label="Location">{location}</h3>
      </header>
      {normalizedNotes.length > 0 && (
        normalizedNotes.length > 1 ? (
          <ul className="degree-card-notes" aria-label="Highlights">
            {normalizedNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        ) : (
          <p className="degree-card-notes single-note">{normalizedNotes[0]}</p>
        )
      )}
    </article>
  );
}

export default DegreeCard;