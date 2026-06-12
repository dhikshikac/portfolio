import { useEffect, useMemo, useRef, useState } from 'react';
import WorkHeroSky from '../components/WorkHeroSky';
import ProjectCard from '../components/ProjectCard';
import SocialIcons from '../components/SocialIcons';
import { projects } from '../data/projects';
import './WorkPage.css';

export default function WorkPage() {
  const gridRef = useRef(null);
  const [constellationOpacity, setConstellationOpacity] = useState(1);
  const [leftColumnProjects, rightColumnProjects] = useMemo(() => [
    projects.filter((_, index) => index % 2 === 0),
    projects.filter((_, index) => index % 2 === 1),
  ], []);

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
            <h1 className="work-hero__title">DHIKSHIKA CHERIVIRALA</h1>
            <p className="work-hero__subtitle">
              Designing, developing, and delivering solutions that make an impact.
            </p>
            <p className="work-hero__bio">
              A CS student @ Cornell exploring the intersection of software
              engineering, product design, and social impact. ✦
            </p>
            <SocialIcons />
          </div>
        </section>

        <section ref={gridRef} className="work-grid" aria-label="Projects">
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
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
