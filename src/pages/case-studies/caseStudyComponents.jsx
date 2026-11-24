import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  ImageLoadSequenceProvider,
  SequentialImage,
  useImageLoadSequence,
  useNoteImageTier,
} from '../../components/ImageLoadSequence';
import LazyVideo from '../../components/LazyVideo';
import ImageViewer from './ImageViewer';
import useIsPhone from './useIsPhone';
import useZoomPreload from './useZoomPreload';
import './caseStudyShared.css';

const SITE_NAME = 'Dhikshika Cherivirala';

const CaseStudySectionTierContext = createContext(1);
const CaseStudySectionTierAllocatorContext = createContext(() => 1);
const CaseStudySectionRegistryContext = createContext(() => undefined);

export function sectionIdFromLabel(label) {
  return `cs-${label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;
}

function useAllocateSectionTier() {
  const allocateTier = useContext(CaseStudySectionTierAllocatorContext);
  const tierRef = useRef(null);

  if (tierRef.current === null) {
    tierRef.current = allocateTier();
  }

  return tierRef.current;
}

function useCaseStudySectionTier() {
  return useContext(CaseStudySectionTierContext);
}

function posterFromVideoSrc(src) {
  if (!src) return undefined;
  const file = src.split('/').pop() || '';
  const base = file.replace(/\.(mp4|webm|mov)(\?.*)?$/i, '');
  return base ? `/images/posters/${base}.webp` : undefined;
}

/**
 * Tracks which section the reader is currently in. Scroll-based rather than
 * IntersectionObserver because sections are tall enough that several are
 * on screen at once — we want the last one whose top has passed the header.
 */
function useActiveSection(sections) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!sections.length) return undefined;

    function updateActive() {
      const line = window.innerHeight * 0.3;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = section.id;
        }
      }

      // Pin the last entry once the page bottoms out, otherwise a short final
      // section can never become active.
      const scrollBottom = window.scrollY + window.innerHeight;
      if (scrollBottom >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }

      setActiveId(current);
    }

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sections]);

  return activeId;
}

function useScrollProgress() {
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

/**
 * Intro banner: the project's card poster, inset and rounded. The info card
 * below overlaps its lower edge, so no text sits on the image itself.
 */
export function CaseStudyHero({ cover }) {
  if (!cover) return null;

  return (
    <div className="cs-hero">
      {/* The frame clips the slightly zoomed cover, so edges baked into
          the screenshot stay hidden while the rounded corners and shadow
          stay put. */}
      <div className="cs-hero-frame">
        <SequentialImage
          tier={0}
          src={cover}
          alt=""
          className="cs-hero-cover"
          aria-hidden="true"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}

export function CaseStudySideNav({ sections, activeId }) {
  if (sections.length < 2) return null;

  function jumpTo(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  }

  return (
    <nav className="cs-sidenav" aria-label="Case study sections">
      <p className="cs-sidenav-title">Contents</p>
      <ol className="cs-sidenav-list">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(event) => jumpTo(event, section.id)}
              className={`cs-sidenav-link${
                section.id === activeId ? ' cs-sidenav-link--active' : ''
              }`}
              aria-current={section.id === activeId ? 'true' : undefined}
            >
              <span className="cs-sidenav-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="cs-sidenav-label">{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
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

// Browser tab title, e.g. "Wolters Kluwer | Dhikshika Cherivirala"
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = SITE_NAME;
    };
  }, [title]);
}

export function CaseStudyLayout({
  ariaLabel,
  heroTitle,
  cover,
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
  const rootRef = useRef(null);
  useZoomPreload(rootRef);
  useDocumentTitle(heroTitle);
  const sectionTierRef = useRef(1);
  const allocateSectionTier = useCallback(() => {
    const tier = sectionTierRef.current;
    sectionTierRef.current += 1;
    return tier;
  }, []);

  // Sections self-register so the side nav mirrors whatever each case study
  // actually renders, in render order (the tier doubles as that order).
  const [sections, setSections] = useState([]);
  const registerSection = useCallback((tier, entry) => {
    setSections((prev) =>
      [...prev.filter((item) => item.tier !== tier), { tier, ...entry }].sort(
        (a, b) => a.tier - b.tier,
      ),
    );
    return () =>
      setSections((prev) => prev.filter((item) => item.tier !== tier));
  }, []);

  const activeId = useActiveSection(sections);

  return (
    <ImageLoadSequenceProvider>
      <CaseStudySectionTierAllocatorContext.Provider value={allocateSectionTier}>
        <CaseStudySectionRegistryContext.Provider value={registerSection}>
          <div className="cs" aria-label={ariaLabel} ref={rootRef}>
            <div
              className="cs-scroll-progress"
              style={{ width: `${scrollProgress}%` }}
              aria-hidden="true"
            />

            {/* Before the hero so `.cs-hero + .cs-container` stays adjacent
                (and so the contents list comes first for screen readers).
                It is fixed-positioned, so visual order is unaffected. */}
            <CaseStudySideNav sections={sections} activeId={activeId} />

            <CaseStudyHero cover={cover} />

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
          </div>
        </CaseStudySectionRegistryContext.Provider>
      </CaseStudySectionTierAllocatorContext.Provider>
    </ImageLoadSequenceProvider>
  );
}

export function CaseStudySection({ label, children }) {
  const tier = useAllocateSectionTier();
  useNoteImageTier(tier);
  const registerSection = useContext(CaseStudySectionRegistryContext);
  const id = sectionIdFromLabel(label);

  useEffect(
    () => registerSection(tier, { id, label }),
    [id, label, registerSection, tier],
  );

  return (
    <CaseStudySectionTierContext.Provider value={tier}>
      <section className="cs-section" id={id} aria-labelledby={`${id}-label`}>
        <header className="cs-section-head">
          <span className="cs-section-index" aria-hidden="true">
            {String(tier).padStart(2, '0')}
          </span>
          <p className="cs-section-label" id={`${id}-label`}>
            {label}
          </p>
        </header>
        <div className="cs-section-content">{children}</div>
      </section>
    </CaseStudySectionTierContext.Provider>
  );
}

// `zoomable` turns the figure into a button that opens a full-screen
// zoom-and-pan viewer. `zoomSrc` (optional) is a higher-resolution file
// loaded only when the viewer opens. `label` (optional) adds a short tag
// above the figure, e.g. to tell an early version from the final one;
// `zoomHint` follows it wherever zoom is available. Phones get a plain image.
export function CaseStudyFigure({ label, zoomHint, ...props }) {
  const isPhone = useIsPhone();

  if (!label) return <CaseStudyFigureBody {...props} />;
  return (
    <div className="cs-labeled-figure">
      <p className="cs-figure-label">
        {label}
        {zoomHint && !isPhone && ` · ${zoomHint}`}
      </p>
      <CaseStudyFigureBody {...props} />
    </div>
  );
}

function CaseStudyFigureBody({ src, alt, className = '', zoomable = false, zoomSrc }) {
  const tier = useCaseStudySectionTier();
  const isPhone = useIsPhone();
  const [viewerOpen, setViewerOpen] = useState(false);

  if (!zoomable || isPhone) {
    return (
      <figure className={`cs-figure ${className}`.trim()}>
        <SequentialImage tier={tier} src={src} alt={alt} />
      </figure>
    );
  }

  return (
    <figure className={`cs-figure cs-figure--zoomable ${className}`.trim()}>
      <button
        type="button"
        className="cs-zoom-trigger"
        data-zoom-src={zoomSrc}
        onClick={() => setViewerOpen(true)}
        aria-label={`Open zoomable view: ${alt}`}
      >
        <SequentialImage tier={tier} src={src} alt={alt} />
        <span className="cs-zoom-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5" />
          </svg>
          Zoom
        </span>
      </button>
      {viewerOpen && (
        <ImageViewer
          src={zoomSrc || src}
          alt={alt}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </figure>
  );
}

export function CaseStudyVideo({ src, label, poster }) {
  const tier = useCaseStudySectionTier();
  const { active, markSettled } = useImageLoadSequence(tier);

  return (
    <figure className="cs-figure cs-figure--video">
      <LazyVideo
        src={src}
        poster={poster || posterFromVideoSrc(src)}
        controls
        aria-label={label}
        enabled={active}
        onSettled={markSettled}
      />
    </figure>
  );
}

