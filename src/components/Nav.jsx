import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Nav.css';

const RESUME_URL =
  'https://drive.google.com/file/d/1yJ01fCLhWqDKexab-v_iCCJAPCl25mcr/view';

const LINKS = [
  { to: '/work', label: 'WORK' },
  { to: '/about', label: 'ABOUT' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`nav${menuOpen ? ' nav--open' : ''}`}>
      <NavLink to="/work" className="nav__brand" aria-label="Dhikshika Cherivirala">
        <img
          src="/images/about/community-star.png"
          alt=""
          className="nav__logo"
        />
        <span className="nav__handle">@DHIKSHIKAC</span>
      </NavLink>

      <button
        type="button"
        className="nav__toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav__toggle-bar" aria-hidden="true" />
        <span className="nav__toggle-bar" aria-hidden="true" />
        <span className="nav__toggle-bar" aria-hidden="true" />
      </button>

      <div
        className="nav__menu"
        id="main-nav"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className="nav__links"
          aria-label="Main navigation"
          onClick={(event) => event.stopPropagation()}
        >
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={RESUME_URL}
            className="nav__link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            RESUME
          </a>
        </nav>
      </div>

      <ThemeToggle />
    </header>
  );
}
