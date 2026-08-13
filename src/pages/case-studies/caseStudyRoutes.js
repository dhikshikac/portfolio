import { lazy, Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const CASE_STUDY_SLUGS = new Set([
  'wolters-kluwer',
  'hudson-valley-textile',
]);

const caseStudies = {
  'wolters-kluwer': lazy(() => import('./wolters/index')),
  'hudson-valley-textile': lazy(() => import('./hvtp/index')),
};

export function hasCaseStudy(slug) {
  return CASE_STUDY_SLUGS.has(slug);
}

export function CaseStudyRoute() {
  const { slug } = useParams();
  const Component = caseStudies[slug];

  if (!Component) {
    return <Navigate to="/work" replace />;
  }

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
