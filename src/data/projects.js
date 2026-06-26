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
    thumbnail: '/videos/connectU-thumb.mp4',
    description: 'Designed a concept app for Cornell freshmen to discover clubs and communities.',
    role: 'Product Designer',
    team: '2 Designers',
    timeframe: '1 Semester , October – December 2025',
    context: 'Design Consulting @ Cornell',
  },
  {
    slug: 'verdant',
    title: 'Verdant',
    tags: ['CONCEPT', 'MOBILE APP', 'DESIGN/DEV'],
    thumbnail: '/images/thumbnails/verdant-thumb.png',
    description: 'Designed and developed a user-centered iOS sustainability app in Swift from concept to deployment.',
    role: 'Designer, Developer',
    team: '2 Designers, 1 Developer',
    timeframe: '5 Days , June 2024',
    context: 'Kode With Klossy App Development Bootcamp',
    externalUrl: 'https://github.com/dhikshikac/Verdant',
  },
];

export function projectHasCaseStudy(project) {
  return hasCaseStudy(project.slug);
}
