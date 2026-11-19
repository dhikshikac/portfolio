import { useEffect, useState } from 'react';

// Day / night switch.
// - First visit: follows the system light/dark setting (applied before
//   first paint by the inline script in public/index.html).
// - Once the visitor taps the toggle, their choice is saved and wins.
// - The switch cross-fades via the View Transitions API where supported,
//   and is instant otherwise or with reduced motion.
const STORAGE_KEY = 'theme';
// Phone browser bar colour, matched to each theme's nav background
const THEME_COLOR = { day: '#cfe1f3', night: '#0d1b2a' };
const SYSTEM_LIGHT = '(prefers-color-scheme: light)';

function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'day'
    ? 'day'
    : 'night';
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'day') root.setAttribute('data-theme', 'day');
  else root.removeAttribute('data-theme');
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme]);
}

function hasSavedChoice() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  // Until the visitor picks, track the system setting live.
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia(SYSTEM_LIGHT);
    const onChange = (event) => {
      if (hasSavedChoice()) return;
      const next = event.matches ? 'day' : 'night';
      applyTheme(next);
      setTheme(next);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  function toggle() {
    const next = theme === 'day' ? 'night' : 'day';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice just won't persist */
    }

    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const swap = () => {
      applyTheme(next);
      setTheme(next);
    };

    if (document.startViewTransition && !reduceMotion) {
      document.documentElement.classList.add('theme-switching');
      const transition = document.startViewTransition(swap);
      transition.finished.finally(() =>
        document.documentElement.classList.remove('theme-switching')
      );
    } else {
      swap();
    }
  }

  const isDay = theme === 'day';

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      title={isDay ? 'Night mode' : 'Day mode'}
      onClick={toggle}
    >
      {isDay ? (
        // Moon: tap to go back to night
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" />
        </svg>
      ) : (
        // Sun: tap for day
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <g strokeLinecap="round">
            <line x1="12" y1="2.5" x2="12" y2="4.6" />
            <line x1="12" y1="19.4" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="4.6" y2="12" />
            <line x1="19.4" y1="12" x2="21.5" y2="12" />
            <line x1="5.3" y1="5.3" x2="6.8" y2="6.8" />
            <line x1="17.2" y1="17.2" x2="18.7" y2="18.7" />
            <line x1="5.3" y1="18.7" x2="6.8" y2="17.2" />
            <line x1="17.2" y1="6.8" x2="18.7" y2="5.3" />
          </g>
        </svg>
      )}
    </button>
  );
}
