import TagPill from './TagPill';
import './ProjectCard.css';

function isVideoThumbnail(src) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
}

export default function ProjectCard({ project }) {
  const useVideo = isVideoThumbnail(project.thumbnail);

  return (
    <article className="project-card">
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
              <TagPill key={tag} variant={i === 1 ? 'gold' : 'default'}>
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
}
