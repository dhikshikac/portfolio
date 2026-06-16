import logo from './images/hvtp-logo.png';

import uxrAffinityTop from './images/hvtp-uxr.png';
import uxrAffinityBottom from './images/hvtp-uxr2.png';

import featurePrioritization from './images/hvtp-features.png';
import informationArchitecture from './images/hvtp-info-arch.jpg';

import lofiGrid from './images/hvtp-lofi-grid.png';
import lofiCards from './images/hvtp-lofi-card.png';

import midfiHorizontalDefault from './images/Horizontal Cards-midfi.png';
import midfiVerticalCards from './images/Vertical Cards-midfi.png';
import midfiFilterOption2 from './images/FiltersOption-midfi.png';

import hifiHorizontal from './images/Horizontal Cards-hifi-Default.png';
import hifiTable from './images/Table View-hifi-Default.png';
import hifiFilter from './images/Horizontal Cards-hifi-Choose Filter.png';

export const hvtpAssets = {
  logo,
  finalVideo: '/videos/hvtp-final.mp4',

  uxrAffinityTop,
  uxrAffinityBottom,

  featurePrioritization,
  informationArchitecture,

  lofiGrid,
  lofiCards,

  midfiHorizontalDefault,
  midfiVerticalCards,
  midfiFilterOption2,

  hifiHorizontal,
  hifiTable,
  hifiFilter,
};

export const hvtpMeta = {
  title: 'Hudson Valley Textile Program',
  shortTitle: 'HVTP',
  subtitle: 'Web Application',
  overview: [
    'Hudson Valley Textile Project (HVTP) is a 501(c)(3) non-profit organization dedicated to creating a sustainable regional fiber supply chain via the Northeast Fiber Exchange (NEFX) project.',
    'NEFX acts as an intermediary, bridging regional wool producers with consumers — everyone from fashion designers to rug merchants — in order to support the development of the regional fiber industry.',
  ],
  role: 'Product Designer',
  team: ['1 Project Manager', '1 Technical Lead', '3 Product Designers', '6 Developers'],
  timeline: ['1 Semester', 'February – May 2026'],
  skills: ['Figma', 'UX Research', 'Prototyping'],
};

export const hvtpCopy = {
  context: {
    title: 'The Problem',
    paragraphs: [
      'HVTP currently tracks inventory using Google Sheets, which means that manual data entry for intake and sales is tedious and error-prone, especially with all the different steps that are present throughout the buying and selling process.',
      'Additionally, internal warehouse data is disconnected from the public-facing information, requiring double the work to keep both up to date.',
      'We are building a custom Internal Inventory Platform. My role this semester was focused on designing the Inventory view — the core interface HVTP staff will use to browse, filter, and manage wool lots.',
    ],
  },
  finalPrototype: {
    title: 'A Custom Inventory Platform',
  },
  userResearch: {
    title: 'Looking into our users',
    paragraphs: [
      'To ground our research in real experience, we conducted interviews across all three sides of the ecosystem — producers, HVTP, and consumers.',
      'Our goal was to understand the current process, uncover pain points, and validate whether our concepts resonated with the people closest to the problem.',
    ],
    painPoints: [
      'HVTP relies on multiple Google Sheets, documents, and notes requiring manual updates at every stage — making data prone to human error, inaccuracies, and redundancy.',
      'A significant gap exists between internal warehouse data and public-facing sales listings, forcing duplicate data entry to keep inventory accurate across both.',
      'HVTP needs to track the full history of a “lot” — source producer, processing stage, and historical pricing — which is difficult to manage across disconnected spreadsheets and documents.',
      'Designers, especially newer ones, prioritize color but struggle to evaluate it from descriptions alone. Beyond aesthetics, they want the story behind the material — which farms, which breeds, and a sense of locality. Physical samples and provenance details are key to bridging that gap.',
      'Pricing changes are largely gut-feel decisions with no transparent criteria or feedback loop. Producers are left in the dark, and HVTP recognizes the need to standardize the process.',
    ],
    similarPlatforms: {
      title: 'Looking into similar platforms',
      paragraphs: [
        'We analyzed inventory management systems and e-commerce platforms to understand existing patterns in stock tracking, product storytelling, and buyer-facing presentation — identifying what works and where gaps remain for a niche, provenance-driven market like HVTP.',
        'We analyzed each platform’s unique value proposition, advantages, and disadvantages to uncover opportunities for HVTP.',
      ],
      takeaways: [
        'None of these tools are built for provenance-driven, story-first inventory — they track what you have, not where it came from or why it matters',
        'No existing platform tracks lot-level history, producer relationships, or material context — this depth of traceability simply isn’t a priority for general inventory tools',
        'Pricing logic and supplier-facing transparency are largely ignored across all platforms reviewed.',
      ],
    },
  },
  ideation: {
    title: 'Brainstorming',
    brainstormingIntro:
      'Before wireframing, we mapped potential features against impact and implementation difficulty to keep our scope focused on what would matter most for HVTP.',
    informationArchitectureIntro:
      'From our prioritized features, we defined the core pages and structure of the product — then mapped them into an information architecture that evolved as we met with our client and flushed out our product.',
    initialDesignsTitle: 'Initial Designs',
    initialDesignsIntro:
      'With our structure in place, I moved into sketching — starting with the core of the product, the inventory layout.',
    initialDesignsOutro:
      'The grid layout displayed lots in a spreadsheet-style table with columns for SKU, breed, color, weight, and status — explored with both a full filter sidebar and inline column controls. The card layout presented each lot as a visual tile with a photo and key metadata, which felt more engaging but raised concerns about scalability at scale.',
  },
  midfi: {
    title: 'Exploring and Refining',
    intro:
      'I began refining the layouts and interaction patterns into mid-fidelity designs. This is also when we worked out what information to include for each lot — and what to emphasize for both producers and consumers.',
    callouts: {
      horizontal:
        'Horizontal cards pair a prominent photo with each lot’s key data, making filters easy to identify at a glance — especially important since the client wanted to start using visual cues like color and texture to manage inventory.',
      vertical:
        'Vertical cards were ruled out because they sacrificed too much space. Additionally, the client wanted the ability to compare photos and information of each lot efficiently, which we decided was better through horizontal style cards.',
      filters:
        'For filters, I explored a collapsible right sidebar versus sticky inline filter chips along the top. I went with inline chips — given limited filter options, a sidebar felt excessive, and pairing left-side navigation with a right-side panel would’ve crowded the screen. Keeping filters persistently visible keeps the interface fast and clean.',
      sort:
        'A sort dropdown and card/table view toggle were placed in the top right, so users can switch modes without losing their current filters.',
    },
  },
  hifi: {
    title: 'Wrapping up the designs',
    intro:
      'For high-fidelity, we aligned with NEFX’s existing brand — Poppins typeface, muted greens, and warm tans — to keep the platform feeling familiar while reinforcing their earthy, agricultural identity. We continued iterating on the filter system through this stage, ultimately landing on a dropdown-based approach after finding that a sidebar panel felt too crowded alongside the existing navigation.',
    subsections: [
      {
        label: 'Horizontal Card Layout',
        image: 'hifiHorizontal',
        description:
          'The main inventory screen lets users browse and manage all active lots at a glance. Key details — SKU, breed, weight, status, and processing stage — are surfaced clearly, while green accents guide attention toward actions and status indicators without cluttering the interface.',
      },
      {
        label: 'List Layout',
        image: 'hifiTable',
        description:
          'The table view mirrors the spreadsheet workflows HVTP already relied on, reducing the learning curve for internal staff. It prioritizes information density and quick scanning — making it easy to compare many lots at once while benefiting from the structure of a dedicated platform.',
      },
      {
        label: 'Filter Style',
        image: 'hifiFilter',
        description:
          'The finalized dropdown filtering lets users filter by breed, color, grade, and status without leaving the inventory page. Compared to earlier sidebar explorations, it’s lighter and faster — and the sort and view toggle controls sit at the top for quick switching between card and table views.',
      },
    ],
  },
  reflection: {
    title: 'Final Thoughts',
    paragraphs: [
      'A major focus was making large collections of lots feel navigable without becoming overwhelming. Through client feedback, design critiques, and developer collaboration, we refined the experience to balance usability, familiarity, and feasibility — and working within real implementation constraints kept us focused on core needs over nice-to-haves.',
    ],
  },
};


