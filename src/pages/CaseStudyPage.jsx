import { Link, useParams, Navigate } from 'react-router-dom';
import TagPill from '../components/TagPill';
import CaseStudyContent from '../components/CaseStudyContent';
import { CaseStudyBackToTop } from './case-studies/caseStudyComponents';
import { getProjectBySlug } from '../data/projects';
import './CaseStudyPage.css';
import './case-studies/caseStudyShared.css';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project?.hasCaseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <article className="case-study-page">
      <Link to="/work" className="case-study-page__back">
        ← BACK TO WORK
      </Link>

      <header className="case-study-page__header">
        <div className="case-study-page__title-row">
          <h1 className="case-study-page__title">{project.title}</h1>
          <div className="case-study-page__tags">
            {project.tags.map((tag, i) => (
              <TagPill key={tag} index={i}>
                {tag}
              </TagPill>
            ))}
          </div>
        </div>

        <dl className="case-study-page__meta">
          <div>
            <dt>ROLE</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>TEAM</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>TIMEFRAME</dt>
            <dd>{project.timeframe}</dd>
          </div>
          <div>
            <dt>CONTEXT</dt>
            <dd>{project.context}</dd>
          </div>
        </dl>
        <hr className="case-study-page__divider" />
      </header>

      <CaseStudyContent sections={project.sections ?? []} />

      <CaseStudyBackToTop />
    </article>
  );
}
