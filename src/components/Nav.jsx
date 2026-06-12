import { NavLink } from 'react-router-dom';
import './Nav.css';

const LINKS = [
  { to: '/work', label: 'WORK' },
  { to: '/about', label: 'ABOUT' },
  { to: '/camera', label: 'MY CAMERA' },
];

export default function Nav() {
  return (
    <header className="nav">
      <NavLink to="/work" className="nav__brand" aria-label="Dhikshika Cherivirala">
        <img
          src="/images/about/community-star.png"
          alt=""
          className="nav__logo"
        />
        <span className="nav__handle">@DHIKSHIKAC</span>
      </NavLink>
      <nav className="nav__links" aria-label="Main navigation">
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav__link${isActive ? ' nav__link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
