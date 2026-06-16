import { hasCaseStudy } from '../pages/case-studies/caseStudyRoutes';

export const projects = [
  {
    slug: 'wolters-kluwer',
    title: 'Wolters Kluwer',
    tags: ['CONTRACT', 'WEBSITE', 'DESIGN'],
    thumbnail: '/videos/wolters-thumb.mp4',
    description:
      'Designed a GenAI research tool for a global professional information company.',
    role: 'Product Designer',
    team: '2 Project Managers, 6 Product Designers',
    timeframe: '1 Semester, January – May 2026',
    context: 'Design Consulting @ Cornell',
  },
  {
    slug: 'hudson-valley-textile',
    title: 'Hudson Valley Textile',
    tags: ['NON-PROFIT', 'WEBSITE', 'DESIGN'],
    thumbnail: '/videos/hvtp-thumb.mp4',
    description: 'Designed an inventory platform for a sustainable regional wool supply chain npo.',
    role: 'Product Designer',
    team: '1 Product Manager, 1 Technical Lead, 3 Product Designers',
    timeframe: '1 Semester , January – May 2026',
    context: 'Hack 4 Impact @ Cornell',
  },
  {
    slug: 'connectu',
    title: 'ConnectU',
    tags: ['CONCEPT', 'MOBILE APP', 'DESIGN'],
    thumbnail: '/images/work/connectu-thumb.svg',
    description: 'Designed a concept app for Cornell freshmen to discover clubs and communities.',
    role: 'Product Designer',
    team: '2 Designers',
    timeframe: '1 Semester , October – December 2025',
    context: 'Design Consulting @ Cornell',
  },
];

export function projectHasCaseStudy(project) {
  return hasCaseStudy(project.slug);
}
