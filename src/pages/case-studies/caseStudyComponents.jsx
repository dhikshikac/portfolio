import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './caseStudyShared.css';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0);
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}

export function CaseStudyBackLink() {
  return (
    <div className="cs-container">
      <Link to="/work" className="cs-back">
        ← BACK TO WORK
      </Link>
    </div>
  );
}

export function CaseStudyHero({ logo, title }) {
  return (
    <div className="cs-hero">
      <img src={logo} alt="" className="cs-hero-logo" aria-hidden="true" />
      <p className="cs-hero-title">{title}</p>
    </div>
  );
}

export function CaseStudyHeader({
  name,
  type,
  paragraphs,
  role,
  team,
  timeline,
  skills,
}) {
  return (
    <header className="cs-header">
      <div className="cs-overview">
        <div>
          <h1 className="cs-overview-name">{name}</h1>
          <p className="cs-overview-type">{type}</p>
        </div>
        <div className="cs-overview-text">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <dl className="cs-meta">
        <div>
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>
        <div className="cs-meta-fields">
          <div>
            <dt>Team</dt>
            <dd>
              {team.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>
              {timeline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt>Skills/Tools</dt>
            <dd>
              {skills.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </dd>
          </div>
        </div>
      </dl>
    </header>
  );
}

export function CaseStudyLayout({
  ariaLabel,
  logo,
  heroTitle,
  overviewName,
  overviewType,
  overviewParagraphs,
  role,
  team,
  timeline,
  skills,
  children,
}) {
  const scrollProgress = useScrollProgress();

  return (
    <div className="cs" aria-label={ariaLabel}>
      <div
        className="cs-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <CaseStudyBackLink />

      <CaseStudyHero logo={logo} title={heroTitle} />

      <article className="cs-container">
        <CaseStudyHeader
          name={overviewName}
          type={overviewType}
          paragraphs={overviewParagraphs}
          role={role}
          team={team}
          timeline={timeline}
          skills={skills}
        />

        <div className="cs-body">{children}</div>
      </article>

      <CaseStudyBackToTop />
    </div>
  );
}

export function CaseStudySection({ label, children }) {
  return (
    <section className="cs-section">
      <p className="cs-section-label">{label}</p>
      <div className="cs-section-content">{children}</div>
    </section>
  );
}

export function CaseStudyFigure({ src, alt, className = '' }) {
  return (
    <figure className={`cs-figure ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export function CaseStudyVideo({ src, label }) {
  return (
    <figure className="cs-figure cs-figure--video">
      <video src={src} autoPlay muted loop playsInline controls aria-label={label} />
    </figure>
  );
}

export function CaseStudyBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      className={`cs-back-to-top${visible ? ' cs-back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      BACK TO TOP ↑
    </button>
  );
}
