import competitorAnalysis from './images/competitor-analysis.png';
import wkPages from './images/wk-pages.png';
import wkLofi1 from './images/wk-lofi-1.png';
import wkLofi2 from './images/wk-lofi-2.png';
import wkHifi1 from './images/wk-hifi-1.png';
import wkHifi2 from './images/wk-hifi-2.png';
import wkHifi3 from './images/wk-hifi-3.png';
import wkMidfi3 from './images/wk-midfi-3.png';
import wkFlow from './images/wk.png';
import wkLogo from './images/wk-logo.svg';
import finalPrototypeVideo from './images/wk-final-prototype.mp4';

export const images = {
  competitorAnalysis,
  wkPages,
  wkLofi1,
  wkLofi2,
  wkHifi1,
  wkHifi2,
  wkHifi3,
  wkMidfi3,
  wkFlow,
  wkLogo,
  finalPrototypeVideo,
};

export const woltersMeta = {
  title: 'Wolters Kluwer',
  subtitle: 'Web Application',
  tags: ['CONTRACT', 'WEBSITE', 'DESIGN'],
  overview: [
    'Wolters Kluwer is a global leader in professional information, software, and services, providing trusted tools and insights that help professionals make informed, high-stakes decisions.',
    'Their products are used in 180+ countries, supporting 93% of Fortune 500 companies and serving 2M+ clinicians.',
  ],
  role: 'Product Designer',
  team: ['2 Project Managers', '6 Product Designers'],
  timeline: ['1 Semester', 'January – May 2026'],
  skills: ['Figma', 'UX Research', 'Prototyping'],
};

export const competitorPatterns = [
  {
    text: (
      <>
        Natural language search <strong>improves accessibility</strong> for non-technical users
      </>
    ),
  },
  {
    text: (
      <>
        Linking AI outputs to sources <strong>builds trust</strong> and enables human verification
      </>
    ),
  },
  {
    text: (
      <>
        Automated summarization helps users <strong>quickly extract</strong> key insights
      </>
    ),
  },
  {
    text: (
      <>
        Clear structuring, categories, tagging, relationships, <strong>improves digestibility.</strong>
      </>
    ),
  },
];

export const userInsights = [
  {
    title: (
      <>
        Content is <strong>hard to find</strong> internally and <strong>lacks centralization</strong>
      </>
    ),
    body: 'Teams hunt across SharePoint, Confluence, and other siloed systems without a single source of truth for what exists or where it lives.',
  },
  {
    title: 'People and conversations are the primary discovery mechanism',
    body: 'Rather than relying on structured search, product teams turn to colleagues who may have encountered relevant content before.',
  },
  {
    title: (
      <>
        Rights and <strong>sourcing metadata</strong> is inconsistent or not standardized
      </>
    ),
    body: 'Without clear ownership or usage rights, teams hesitate to reuse content even when they find it.',
  },
  {
    title: (
      <>
        No visibility into the <strong>breadth of content available</strong> on a given topic
      </>
    ),
    body: 'Users work with a partial picture of information, unaware of related resources that could inform their decisions.',
  },
];
