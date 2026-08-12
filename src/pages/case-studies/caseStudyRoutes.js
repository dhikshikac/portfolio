import { Navigate, useParams } from 'react-router-dom';
import HvtpCaseStudy from './hvtp/index';
import WoltersKluwerCaseStudy from './wolters/index';

const caseStudies = {
  'wolters-kluwer': WoltersKluwerCaseStudy,
  'hudson-valley-textile': HvtpCaseStudy,
};

export function hasCaseStudy(slug) {
  return slug in caseStudies;
}

export function CaseStudyRoute() {
  const { slug } = useParams();
  const Component = caseStudies[slug];

  if (!Component) {
    return <Navigate to="/work" replace />;
  }

  return <Component />;
}
