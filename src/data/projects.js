const woltersSections = [
  {
    id: 'problem',
    label: 'PROBLEM',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: [
          'Wolters Kluwer is a global leader in professional information, software solutions, and services for healthcare, tax, accounting, and legal professionals. They wanted to create a GenAI research tool that would allow users to search through their vast database of legal and regulatory information.',
          'The existing tool suffered from navigation difficulties and a lack of cohesive visual identity. Users struggled to find relevant documents quickly, and the interface felt cluttered and inconsistent across different sections of the application.',
        ],
      },
      {
        type: 'image',
        src: '/images/case-studies/wolters-kluwer/problem.svg',
        alt: 'Healthcare Compliance dashboard showing search results table',
      },
    ],
  },
  {
    id: 'first-prototype',
    label: 'FIRST PROTOTYPE',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: [
          'The first prototype was focused on the search experience. We wanted to make sure that users could easily find what they were looking for, with clear filtering options and an intuitive document viewing flow.',
          'Our initial work centered on feature organization and hierarchy, mapping out user flows on a collaborative whiteboard before moving into wireframes.',
        ],
      },
      {
        type: 'image',
        src: '/images/case-studies/wolters-kluwer/prototype-board.svg',
        alt: 'FigJam whiteboard with sticky notes and user flow diagrams',
      },
      {
        type: 'feature-cards',
        cards: [
          {
            title: 'Search results',
            description: 'Table format with highlighted info to surface the most relevant documents at a glance.',
          },
          {
            title: 'Filtering',
            description: 'Criteria like date, jurisdiction, and document type to narrow results efficiently.',
          },
          {
            title: 'Document view',
            description: 'Opens in a new tab for easy reading without losing search context.',
          },
          {
            title: 'AI Summary',
            description: 'Generated summary to help users understand content quickly.',
          },
        ],
      },
      {
        type: 'design-goals',
        title: 'DESIGN GOALS',
        goals: [
          { num: 1, title: 'Simplify navigation', text: 'Reduce cognitive load with a clear, consistent information hierarchy.' },
          { num: 2, title: 'Improve efficiency', text: 'Help users find and act on information faster through smart defaults.' },
          { num: 3, title: 'Enhance clarity', text: 'Make complex legal data scannable with thoughtful typography and spacing.' },
          { num: 4, title: 'Ensure consistency', text: 'Unify the visual language across all tool sections and states.' },
        ],
        colors: ['#3B82F6', '#22C55E', '#F5C842', '#EF4444'],
      },
    ],
  },
  {
    id: 'key-sections',
    label: 'KEY SECTIONS',
    accent: 'yellow',
    content: [
      {
        type: 'text',
        paragraphs: [
          'We focused on three key sections of the tool: the search results page, the document view, and the AI summary. Each section went through iterative refinement from low to high fidelity.',
        ],
      },
      {
        type: 'subsection',
        label: 'INFORMATION ARCHITECTURE',
        accent: 'yellow',
        paragraphs: [
          'We restructured the site map to better reflect user mental models, grouping related features and reducing the number of top-level navigation items.',
        ],
        images: [
          { src: '/images/case-studies/wolters-kluwer/sitemap.svg', alt: 'Hierarchical sitemap diagram' },
        ],
      },
      {
        type: 'subsection',
        label: 'LOW-FIDELITY WIREFRAMES',
        accent: 'yellow',
        paragraphs: [
          'Rapid iteration on paper and digital sketches allowed us to test layout ideas quickly and gather stakeholder feedback early.',
        ],
        images: [
          { src: '/images/case-studies/wolters-kluwer/low-fi-1.svg', alt: 'Low-fidelity wireframe sketch one' },
          { src: '/images/case-studies/wolters-kluwer/low-fi-2.svg', alt: 'Low-fidelity wireframe sketch two' },
        ],
      },
      {
        type: 'subsection',
        label: 'MID-FIDELITY WIREFRAMES',
        accent: 'yellow',
        paragraphs: [
          'Mid-fidelity wireframes defined visual hierarchy and interaction patterns before committing to color and branding.',
        ],
        images: [
          { src: '/images/case-studies/wolters-kluwer/mid-fi-1.svg', alt: 'Mid-fidelity search results wireframe' },
          { src: '/images/case-studies/wolters-kluwer/mid-fi-2.svg', alt: 'Mid-fidelity document view wireframe' },
        ],
      },
      {
        type: 'subsection',
        label: 'HIGH-FIDELITY WIREFRAMES',
        accent: 'yellow',
        paragraphs: [
          'High-fidelity wireframes incorporated brand identity and refined micro-interactions for key user flows.',
        ],
        images: [
          { src: '/images/case-studies/wolters-kluwer/hi-fi-login.svg', alt: 'High-fidelity sign in page' },
        ],
      },
      {
        type: 'subsection',
        label: 'FINAL DESIGN',
        accent: 'pink',
        paragraphs: [
          'The final design delivers a clean, professional aesthetic with improved navigation and an integrated AI assistant panel for contextual help.',
        ],
        images: [
          { src: '/images/case-studies/wolters-kluwer/final-1.svg', alt: 'Final dashboard with search results' },
          { src: '/images/case-studies/wolters-kluwer/final-2.svg', alt: 'Create account modal' },
          { src: '/images/case-studies/wolters-kluwer/final-3.svg', alt: 'AI assistant panel with document view' },
        ],
      },
    ],
  },
  {
    id: 'visuals',
    label: 'VISUALS',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: [
          'The visual design was focused on creating a clean and professional look that would be easy to navigate and use. We balanced Wolters Kluwer brand guidelines with modern UI patterns.',
        ],
      },
      {
        type: 'image-row',
        images: [
          { src: '/images/case-studies/wolters-kluwer/visual-1.svg', alt: 'Search results page final design' },
          { src: '/images/case-studies/wolters-kluwer/visual-2.svg', alt: 'Document view final design' },
        ],
      },
      {
        type: 'image',
        src: '/images/case-studies/wolters-kluwer/visual-3.svg',
        alt: 'Split-screen view with document and AI assistant',
      },
    ],
  },
  {
    id: 'final-thoughts',
    label: 'FINAL THOUGHTS',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: [
          'This project was a great opportunity to work on a real-world problem at the intersection of AI and professional services. I learned a lot about the design process and how to work effectively in a cross-functional team.',
          'User research was the foundation of every design decision — from restructuring the information architecture to refining the AI summary feature. Listening to how legal professionals actually search for information shaped our entire approach.',
          'Thank you for reading!',
        ],
      },
      {
        type: 'image-stack',
        images: [
          { src: '/images/case-studies/wolters-kluwer/thoughts-1.svg', alt: 'Data table interface' },
          { src: '/images/case-studies/wolters-kluwer/thoughts-2.svg', alt: 'Settings modal window' },
          { src: '/images/case-studies/wolters-kluwer/thoughts-3.svg', alt: 'AI settings panel detail' },
        ],
      },
    ],
  },
];

const placeholderSections = [
  {
    id: 'problem',
    label: 'PROBLEM',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: [
          'Placeholder problem statement for this project. Content coming soon.',
          'This section will describe the core challenge, user needs, and project context.',
        ],
      },
      {
        type: 'image',
        src: '/images/placeholder-ui.svg',
        alt: 'Placeholder project screenshot',
      },
    ],
  },
  {
    id: 'first-prototype',
    label: 'FIRST PROTOTYPE',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: ['Placeholder content for the first prototype phase.'],
      },
      {
        type: 'image',
        src: '/images/placeholder-board.svg',
        alt: 'Placeholder brainstorming board',
      },
    ],
  },
  {
    id: 'key-sections',
    label: 'KEY SECTIONS',
    accent: 'yellow',
    content: [
      {
        type: 'text',
        paragraphs: ['Placeholder content for key design sections.'],
      },
      {
        type: 'image-row',
        images: [
          { src: '/images/placeholder-wireframe.svg', alt: 'Placeholder wireframe one' },
          { src: '/images/placeholder-wireframe.svg', alt: 'Placeholder wireframe two' },
        ],
      },
    ],
  },
  {
    id: 'visuals',
    label: 'VISUALS',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: ['Placeholder content for final visual designs.'],
      },
      {
        type: 'image',
        src: '/images/placeholder-ui.svg',
        alt: 'Placeholder final design',
      },
    ],
  },
  {
    id: 'final-thoughts',
    label: 'FINAL THOUGHTS',
    accent: 'pink',
    content: [
      {
        type: 'text',
        paragraphs: [
          'Placeholder reflections on this project. Full case study coming soon.',
          'Thank you for reading!',
        ],
      },
    ],
  },
];

export const projects = [
  {
    slug: 'wolters-kluwer',
    title: 'Wolters Kluwer',
    tags: ['CONTRACT', 'WEBSITE'],
    thumbnail: '/videos/wolters-thumb.mp4',
    description:
      'Designed a GenAI research tool for a global professional information company.',
    role: 'Product Designer',
    team: '2 Project Managers, 6 Product Designers',
    timeframe: '1 Semester, January – May 2026',
    context: 'Design Consulting @ Cornell',
    sections: woltersSections,
  },
  {
    slug: 'hudson-valley-textile',
    title: 'Hudson Valley Textile',
    tags: ['UX'],
    thumbnail: '/videos/hvtp-thumb.mp4',
    description: 'UX research and interface design for a regional textile company.',
    role: 'UX Designer',
    team: '1 Product Manager, 2 Designers',
    timeframe: '1 Semester',
    context: 'Design Consulting @ Cornell',
    sections: placeholderSections,
  },
  {
    slug: 'connectu',
    title: 'ConnectU',
    tags: ['PRODUCT'],
    thumbnail: '/images/work/connectu-thumb.svg',
    description: 'Product design for a campus networking platform.',
    role: 'Product Designer',
    team: '3 Engineers, 2 Designers',
    timeframe: 'Ongoing',
    context: 'Hack 4 Impact @ Cornell',
    sections: placeholderSections,
  },
  {
    slug: 'reach',
    title: 'REACH Tutor Dashboard',
    tags: ['DASHBOARD'],
    thumbnail: '/images/work/reach-thumb.svg',
    description: 'Dashboard design for tutoring session management and analytics.',
    role: 'Product Designer',
    team: '2 Engineers, 1 Designer',
    timeframe: '1 Semester',
    context: 'REACH Program',
    sections: placeholderSections,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
