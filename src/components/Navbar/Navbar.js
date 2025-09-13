import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const sectionIds = ['contact','about','education','skills','experience','research-projects'];
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const options = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-container">

        <ul className="navbar-nav">
          {sectionIds.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                aria-current={active === id ? 'true' : undefined}
              >
                {id === 'research-projects' ? 'Research' : id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
