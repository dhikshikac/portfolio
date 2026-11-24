import competitorAnalysis from './images/competitor-analysis.webp';
import competitorBreakdown from './images/competitor-breakdown-excerpt.webp';
import wkPages from './images/wk-pages.png';
import wkLofi1 from './images/wk-lofi-1.png';
import wkLofi2 from './images/wk-lofi-2.png';
import wkHifiHome from './images/wk-hifi-home.webp';
import wkHifiPrompting from './images/wk-hifi-prompting.webp';
import wkMidfi1 from './images/wk-midfi-1.png';
import wkMidfi2 from './images/wk-midfi-2.png';
import wkMidfi3 from './images/wk-midfi-3.png';
import wkMidfi4 from './images/wk-midfi-4.png';
import wkLogo from './images/wk-logo.svg';
import wkCreateFilled from './images/wk-create-filled.webp';
import wkCreateShare from './images/wk-create-share.webp';
import wkSearchOutput from './images/wk-search-output.webp';
import wkSourceReply from './images/wk-source-reply.webp';
// Hi-fi filtered-search state, lifted from the prototype walkthrough.
import wkHero from './images/wk-hero.png';

export const images = {
  hero: wkHero,
  competitorAnalysis,
  competitorBreakdown,
  wkPages,
  wkLofi1,
  wkLofi2,
  wkHifiHome,
  wkHifiPrompting,
  wkMidfi1,
  wkMidfi2,
  wkMidfi3,
  wkMidfi4,
  wkCreateFilled,
  wkCreateShare,
  wkSearchOutput,
  wkSourceReply,
  wkLogo,
  finalPrototypeVideo: '/videos/wk-final-prototype.mp4',

  // Full-resolution boards, loaded only when the zoom viewer opens
  zoom: {
    competitorAnalysis: '/images/zoom/wk-competitor-analysis.webp',
    competitorBreakdown: '/images/zoom/wk-competitor-breakdown.webp',
  },
};

export const woltersMeta = {
  title: 'Wolters Kluwer',
  subtitle: 'Web Application',
  overview: [
    'Wolters Kluwer is a global leader in professional information, software, and services, providing trusted tools and insights that help professionals make informed, high-stakes decisions.',
    'Their products are used in 180+ countries, supporting 93% of Fortune 500 companies and serving 2M+ clinicians.',
  ],
  role: 'Product Designer',
  team: ['2 Project Managers', '6 Product Designers'],
  timeline: ['1 Semester', 'January – May 2026'],
  skills: ['Figma', 'UX Research', 'Prototyping'],
};

export const woltersCopy = {
  context: {
    title: 'The Problem',
    paragraphs: [
      'Across Wolters Kluwer, content of many forms is spread across multiple internal systems. This makes it hard to know what exists, where it lives, and who owns it — leaving product teams to rely on informal, time-consuming search methods just to find the resources they need to do their jobs.',
      'We were tasked with exploring how GenAI could help product teams navigate internal content in ways that support faster and more confident product decisions.',
    ],
  },
  finalPrototype: {
    title: 'A GenAI Research Tool',
    videoLabel: 'Wolters Kluwer GenAI research tool prototype walkthrough',
  },
  userResearch: {
    competitors: {
      title: 'Looking into our competitors',
      paragraphs: [
        'To understand what approaches were already working in adjacent spaces, we analyzed 15 products across three categories: direct competitors, regulatory intelligence tools, and AI-powered search tools — including platforms like vLex, Bloomberg Law, Ascent, Perplexity, Microsoft Copilot, and others. For each one, we noted its strengths, weaknesses, unique value, and opportunities.',
      ],
      analysisAlt:
        'Affinity map clustering competitor research findings across prompting, AI summaries, linking sources, and collaboration',
      affinityIntro:
        'We then pulled our findings into an affinity map, grouping them by theme:',
      breakdownLabel: 'One of 15: LexisNexis',
      breakdownZoomHint: 'zoom for all of them',
      breakdownAlt:
        'LexisNexis breakdown: its strengths, weaknesses, unique value proposition, and opportunities.',
      patternsIntro: 'Four patterns stood out as most relevant to our design direction:',
    },
    users: {
      title: 'Looking into our users',
      paragraphs: [
        'We spoke with 2 Wolters Kluwer product owners to understand the current discovery process, learn what WK PMs need when evaluating new opportunities, and identify how GenAI can improve decision making.',
      ],
    },
    userFlow: {
      intro: 'Based on our insights, we defined a high-level user flow:',
      steps: [
        {
          title: 'Prompt',
          body: 'Ask a research question in plain language, scoped to a project.',
        },
        {
          title: 'Source Output',
          body: 'See the internal content the answer draws on, linked so it can be verified.',
        },
        {
          title: 'Synthesis',
          body: 'Pull the findings together into something a PM can make a decision with.',
        },
      ],
      closing:
        'This structure reflects the two core opportunities we identified: improving content discovery and validation at the front end, and supporting synthesis and confident decision-making at the back end.',
    },
  },
  ideation: {
    title: 'Starting the designs',
    intro:
      'Before jumping into wireframes, we mapped out the full scope of the product — identifying which pages were essential, how they connected, and dividing ownership so each designer could go deep on their part of the experience.',
    ownedPagesLabel: 'The pages I owned',
    ownedPages: [
      {
        title: 'Home Page',
        body: 'Where every visit starts, with quick, easy access to anything recently worked on.',
      },
      {
        title: 'Project Creation',
        body: 'The new project branch setting up the context each project is scoped to.',
      },
      {
        title: 'Prompting',
        body: 'Where each new chat starts, scoped to the project’s topic.',
      },
    ],
    sketchesTitle: 'Early sketches',
    pagesAlt:
      'User flow diagram from Home Page through project list, project home, source list, and chat history',
    sketchesIntro:
      "Our initial features didn't include a Home Page and Project Creation, and instead users stepped right into prompting, so my early sketches focused on the prompting page:",
    lofi1Alt:
      'Hand-drawn wireframe sketch of the prompting page with project sidebar and filter chips',
    lofi2Alt:
      'Hand-drawn wireframe sketch of the prompting page with an edit prompt filter panel',
    sketchesCaption:
      'A chat-like prompting page with a project sidebar, a central prompt field with suggested chips, and inline filters for industry, source type, and time range.',
  },
  midFidelity: {
    title: 'Exploring and Refining',
    intro:
      'I began refining the layouts and interaction systems into more structured mid-fidelity designs. This is also when we fleshed out other pages to include, like the Home and Project Onboarding pages.',
    homePage: {
      title: 'Home Page',
      intro:
        'I explored two iterations of the home page. The first dedicated the entire page to accessing past projects, functioning similarly to Notion or Google Drive. The second took a lighter approach, surfacing only the most recently visited projects.',
      outro:
        "We went with the full library view — a recents-only approach would've recreated the same fragmentation problem we set out to solve. A centralized project library gives users one place to orient themselves and jump back into any thread of work without relying on memory.",
      fullAlt: 'Mid-fidelity home page with full project library and all projects table',
      condensedAlt: 'Mid-fidelity home page focused on recently visited projects',
    },
    projectOnboarding: {
      title: 'Project Onboarding',
      paragraphs: [
        'When creating a new project, users provide a project name, description, industry/domain, and jurisdiction. This context is used downstream to scope and filter AI-generated source recommendations, ensuring that the content surfaced is relevant to the specific regulatory or professional domain the PM is working in, rather than returning generic results.',
      ],
      alt: 'Mid-fidelity create a new project form with name and description fields',
    },
    promptingPage: {
      title: 'Prompting Page',
      paragraphs: [
        "Once inside a project, users can ask any research question in natural language. The prompting interface is scoped to the project's topic, with the project name and subject visible as a header, reinforcing the bounded context and giving users the power to keep refining their search with a set of filters.",
      ],
      alt: 'Mid-fidelity Healthcare Compliance prompting page with deep search bar and filter sources panel',
    },
  },
  highFidelity: {
    title: 'Wrapping up the designs',
    intro:
      'Wolters Kluwer gave us detailed critique after every session where we presented, including comments throughout our files. The high-fidelity pass focused on refining spacing, tightening consistency, and making the visual language feel cohesive across all three pages.',
    showcases: [
      {
        title: 'Home Page',
        image: 'wkHifiHome',
        description:
          'I iterated on the format of the Recently Visited row. One early version showed only the last 3 projects. The final version highlights different projects, chats, and sources.',
        alt: 'High-fidelity home page dashboard with recently visited cards and an all projects table',
      },
      {
        title: 'Project Creation',
        images: [
          {
            image: 'wkCreateFilled',
            alt: 'High-fidelity create a new project form filled in for a Healthcare Compliance project in the United States',
          },
          {
            image: 'wkCreateShare',
            alt: 'Share dialog over the project form, with private or public access, a copyable link, and an email invite field',
          },
        ],
        description:
          'The form stays short: a name, a description, an industry, and a jurisdiction. This context is used to scope and filter the sources the AI recommends. A Share option sets private or public access, with sharing by link or email.',
      },
      {
        title: 'Prompting',
        image: 'wkHifiPrompting',
        description:
          'For prompting, I iterated on which filters to offer and how they behave. The final panel narrows sources by type, by a publication date range (before, between, or after a year), and by jurisdiction.',
        alt: 'High-fidelity Healthcare Compliance prompting page with the filter sources panel open and filters applied',
      },
    ],
  },
  whereItLeads: {
    title: 'Where my pages lead',
    paragraphs: [
      'Once a PM asks a question, the search output takes over. A teammate designed this part. Each result is tagged with its type, availability, year, and jurisdiction, links back to the original source, and explains why it matters.',
      'Replying to a result opens a side panel for follow-up questions about that one source.',
    ],
    images: [
      {
        image: 'wkSearchOutput',
        alt: 'Search results for a question about emergency care rulings, each a card with type, availability, source link, and a Why it matters summary',
      },
      {
        image: 'wkSourceReply',
        alt: 'Side panel open on one ruling, answering a follow-up question about the legal claim',
      },
    ],
    credit: 'Search output designed by a teammate.',
  },
  reflection: {
    title: 'Final Thoughts',
    paragraphs: [
      'This project pushed me to think beyond aesthetics and approach every design decision through the lens of research and usability. The competitor analysis was especially impactful because it grounded our process in real-world patterns and user expectations, rather than designing in a vacuum.',
      'If I could revisit one aspect of the project, I would prioritize more direct communication with the client earlier in the process. While our PMs primarily handled those conversations, having additional one-on-one discussions would have helped the design team align more confidently and make decisions with greater clarity.',
      'Our client gave us paragraphs of critique after every session. We also got positive feedback from other consultants in the club when we presented our designs to everyone.',
      'Overall, it was a meaningful and rewarding experience to design solutions aimed at reducing friction for professionals working in high-stakes environments.',
    ],
  },
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
    body: "Product owners described spending significant time hunting across disconnected systems — SharePoint, Confluence, email threads, and shared drives — with no single place to start. Most of the time, they weren't sure what even existed.",
  },
  {
    title: (
      <>
        <strong>People and conversations</strong> are the primary discovery mechanism
      </>
    ),
    body: 'Rather than searching a system, PMs relied on asking the right colleague. This meant the quality of information a PM could access was directly tied to their internal network, creating inconsistency across teams.',
  },
  {
    title: (
      <>
        <strong>Rights</strong> and <strong>sourcing metadata</strong> is inconsistent or not
        standardized
      </>
    ),
    body: 'When content was found, it often lacked clear ownership, usage rights, or context about where it came from — making it difficult to trust or act on without additional verification.',
  },
  {
    title: (
      <>
        No visibility into the <strong>breadth of content available</strong> on a given topic
      </>
    ),
    body: 'PMs had no way to understand what existed in aggregate on any given subject. They might be working with a partial picture without knowing it, leading to decisions made on incomplete information.',
  },
];
