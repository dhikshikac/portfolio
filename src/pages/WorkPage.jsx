import { useEffect, useMemo, useRef, useState } from 'react';
import WorkHeroSky from '../components/WorkHeroSky';
import ProjectCard from '../components/ProjectCard';
import SocialIcons from '../components/SocialIcons';
import {
  filterProjectsByType,
  pinnedProjects,
  projects,
  unpinnedProjects,
} from '../data/projects';
import './WorkPage.css';

const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'Design' },
  { id: 'dev', label: 'Dev' },
];

export default function WorkPage() {
  const gridRef = useRef(null);
  const [constellationOpacity, setConstellationOpacity] = useState(1);
  const [filter, setFilter] = useState('all');

  // Unfiltered, the grid skips the two pinned above it so nothing repeats.
  // Under a tag the pinned section is hidden, so they rejoin the grid —
  // otherwise "Design" would silently omit two of the design projects.
  const filteredProjects = useMemo(
    () =>
      filterProjectsByType(filter === 'all' ? unpinnedProjects : projects, filter),
    [filter],
  );

  const [leftColumnProjects, rightColumnProjects] = useMemo(() => [
    filteredProjects.filter((_, index) => index % 2 === 0),
    filteredProjects.filter((_, index) => index % 2 === 1),
  ], [filteredProjects]);

  useEffect(() => {
    const updateConstellationOpacity = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const { top } = grid.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const fadeStart = viewportHeight * 0.62;
      const fadeEnd = viewportHeight * 0.35;

      if (top >= fadeStart) {
        setConstellationOpacity(1);
      } else if (top <= fadeEnd) {
        setConstellationOpacity(0);
      } else {
        setConstellationOpacity((top - fadeEnd) / (fadeStart - fadeEnd));
      }
    };

    updateConstellationOpacity();
    window.addEventListener('scroll', updateConstellationOpacity, { passive: true });
    window.addEventListener('resize', updateConstellationOpacity);

    return () => {
      window.removeEventListener('scroll', updateConstellationOpacity);
      window.removeEventListener('resize', updateConstellationOpacity);
    };
  }, []);

  return (
    <div className="work-page">
      <div className="work-page__sky" aria-hidden="true">
        <WorkHeroSky constellationOpacity={constellationOpacity} />
      </div>

      <div className="work-page__content">
        <section className="work-hero">
          <div className="work-hero__text">
            <p className="work-hero__kicker">CS @ CORNELL UNIVERSITY</p>
            {/* Inline span so the hit area hugs each line of text rather than
                reserving the full block rectangle, which would cover the
                constellations sitting to the right of the shorter lines. */}
            <h1 className="work-hero__title">
              <span>
                Designing, developing, and delivering solutions that make an{' '}
                <em>impact.</em>
              </span>
            </h1>
            {/* Inline under the tagline, each drifting on its own cycle. */}
            <div className="work-hero__social">
              <SocialIcons />
            </div>
          </div>
        </section>

        <section ref={gridRef} className="work-grid" aria-label="Projects">
          <div className="work-filter" role="tablist" aria-label="Filter projects">
            {PROJECT_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                className={`work-filter__option${
                  filter === id ? ' work-filter__option--active' : ''
                }`}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Only shown unfiltered — under a tag the grid should be exactly
              the projects matching it, with nothing pinned above. */}
          {filter === 'all' && (
            <section className="work-pinned" aria-label="Pinned case studies">
              <div className="work-pinned__header">
                <h2 className="work-pinned__title">
                  <span className="work-pinned__star" aria-hidden="true">
                    ✦
                  </span>
                  Pinned
                </h2>
              </div>
              <div className="work-pinned__grid">
                {pinnedProjects.map((project) => (
                  <div key={project.slug} className="work-pinned__item">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="work-grid__columns">
            <div className="work-grid__column">
              {leftColumnProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="work-grid__column">
              {rightColumnProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
          <div className="work-grid__stack">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
