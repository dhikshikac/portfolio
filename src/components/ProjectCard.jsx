import { Link } from 'react-router-dom';
import { projectHasCaseStudy } from '../data/projects';
import TagPill from './TagPill';
import ViewMoreHint from './ViewMoreHint';
import './ProjectCard.css';

function isVideoThumbnail(src) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
}

export default function ProjectCard({ project }) {
  const showCaseStudy = projectHasCaseStudy(project);
  const showExternalLink = Boolean(project.externalUrl);
  const isClickable = showCaseStudy || showExternalLink;
  const useVideo = isVideoThumbnail(project.thumbnail);
  const cardClassName = `project-card${
    isClickable ? ' project-card--has-case-study' : ''
  }`;

  const card = (
    <article className={cardClassName}>
      <div className="project-card__image-wrap">
        {useVideo ? (
          <video
            src={project.thumbnail}
            className="project-card__image"
            autoPlay
            loop
            muted
            playsInline
            aria-label={`${project.title} project preview`}
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={`${project.title} project thumbnail`}
            className="project-card__image"
          />
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__header">
          <h2 className="project-card__title">{project.title}</h2>
          <div className="project-card__tags">
            {project.tags.map((tag, i) => (
              <TagPill key={tag} index={i}>
                {tag}
              </TagPill>
            ))}
          </div>
        </div>
        <p className="project-card__description">{project.description}</p>
        <dl className="project-card__meta">
          <div className="project-card__meta-row">
            <dt>ROLE</dt>
            <dd>{project.role}</dd>
          </div>
          <div className="project-card__meta-row">
            <dt>TEAM</dt>
            <dd>{project.team}</dd>
          </div>
          <div className="project-card__meta-row">
            <dt>TIMEFRAME</dt>
            <dd>{project.timeframe}</dd>
          </div>
        </dl>
      </div>
    </article>
  );

  return (
    <ViewMoreHint
      label={isClickable ? 'VIEW' : 'COMING SOON'}
      variant={isClickable ? 'default' : 'coming-soon'}
    >
      {showCaseStudy ? (
        <Link to={`/work/${project.slug}`} className="project-card__link">
          {card}
        </Link>
      ) : showExternalLink ? (
        <a
          href={project.externalUrl}
          className="project-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {card}
        </a>
      ) : (
        card
      )}
    </ViewMoreHint>
  );
}
