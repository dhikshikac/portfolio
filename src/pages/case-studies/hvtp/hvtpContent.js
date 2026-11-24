import logo from './images/hvtp-logo.png';

import uxrInsights from './images/hvtp-insights.webp';
import uxrAffinityMap from './images/hvtp-affinity.webp';

import compInventory from './images/hvtp-comp-inventory.webp';
import compEcommerce from './images/hvtp-comp-ecommerce.webp';

import featurePrioritization from './images/hvtp-features.webp';
import informationArchitectureEarly from './images/hvtp-info-arch-early.webp';
import informationArchitecture from './images/hvtp-info-arch-final.webp';

import filtersOneOpen from './images/hvtp-filters-one-open.png';
import filtersSearch from './images/hvtp-filters-search.png';

import lofiGrid from './images/hvtp-lofi-grid.png';
import lofiCards from './images/hvtp-lofi-card.png';

import midfiHorizontalDefault from './images/Horizontal Cards-midfi.png';
import midfiVerticalCards from './images/Vertical Cards-midfi.png';
import midfiFilterOption2 from './images/FiltersOption-midfi.png';
import midfiTable from './images/hvtp-midfi-table.png';
import midfiFilterDropdown from './images/hvtp-midfi-filter-dropdown.png';

import hifiHorizontal from './images/Horizontal Cards-hifi-Default.png';
import hifiTable from './images/Table View-hifi-Default.png';
import hifiFilter from './images/Horizontal Cards-hifi-Choose Filter.png';
import hifiFiltered from './images/hvtp-hifi-filtered.png';
import lotDetails from './images/hvtp-lot-details.webp';

export const hvtpAssets = {
  logo,
  finalVideo: '/videos/hvtp-final.mp4',

  uxrInsights,
  uxrAffinityMap,

  compInventory,
  compEcommerce,

  featurePrioritization,
  informationArchitectureEarly,
  informationArchitecture,

  // Full-resolution boards, loaded only when the zoom viewer opens
  zoom: {
    uxrInsights: '/images/zoom/hvtp-insights.webp',
    uxrAffinityMap: '/images/zoom/hvtp-affinity.webp',
    compInventory: '/images/zoom/hvtp-comp-inventory.webp',
    compEcommerce: '/images/zoom/hvtp-comp-ecommerce.webp',
    featurePrioritization: '/images/zoom/hvtp-features.webp',
    informationArchitectureEarly: '/images/zoom/hvtp-info-arch-early.webp',
    informationArchitecture: '/images/zoom/hvtp-info-arch-final.webp',
  },

  filtersOneOpen,
  filtersSearch,

  lofiGrid,
  lofiCards,

  midfiHorizontalDefault,
  midfiVerticalCards,
  midfiFilterOption2,
  midfiTable,
  midfiFilterDropdown,

  hifiHorizontal,
  hifiTable,
  hifiFilter,
  hifiFiltered,
  lotDetails,
};

export const hvtpMeta = {
  title: 'Hudson Valley Textile Project',
  shortTitle: 'HVTP',
  subtitle: 'Web Application',
  overview: [
    'Hudson Valley Textile Project (HVTP) is a 501(c)(3) non-profit organization dedicated to creating a sustainable regional fiber supply chain via the Northeast Fiber Exchange (NEFX) project.',
    'NEFX acts as an intermediary, bridging regional wool producers with consumers — everyone from fashion designers to rug merchants — in order to support the development of the regional fiber industry.',
  ],
  role: 'Product Designer',
  team: ['1 PM', '1 Technical Lead', '3 Designers', '6 Developers'],
  timeline: ['1 Semester', 'January – May 2026'],
  skills: ['Figma', 'UX Research', 'Prototyping'],
};

export const hvtpCopy = {
  context: {
    title: 'The Problem',
    paragraphs: [
      'HVTP tracked inventory using Google Sheets, which meant that manual data entry for intake and sales was tedious and error-prone, especially with all the different steps present throughout the buying and selling process.',
      'Additionally, internal warehouse data was disconnected from the public-facing information, requiring double the work to keep both up to date.',
      'Our team built a custom internal inventory platform. I owned the design of the Inventory view — the core interface HVTP staff use to browse, filter, and manage wool lots — and worked alongside the other two designers on research, feature prioritization, and information architecture.',
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
    affinityIntro:
      'We then grouped our interview notes into an affinity map and turned the themes into How Might We questions. Because of time constraints, we had to focus on HVTP’s internal inventory management:',
    painPointsLabel: 'Three themes we focused on:',
    painPoints: [
      {
        title: 'Scattered data',
        body: 'HVTP relied on multiple Google Sheets, documents, and notes with manual updates at every stage, making data prone to human error and redundancy.',
      },
      {
        title: 'Double entry',
        body: 'A significant gap between warehouse data and public listings forced duplicate data entry to keep both accurate.',
      },
      {
        title: 'Lot history',
        body: 'HVTP needed to track a “lot” by source producer, processing stage, and historical pricing, which was difficult across disconnected files.',
      },
    ],
    similarPlatforms: {
      title: 'Looking into similar platforms',
      paragraphs: [
        'We analyzed four inventory management systems and four e-commerce sites to understand existing patterns in stock tracking, product storytelling, and buyer-facing presentation. We compared each one’s unique value proposition, advantages, and disadvantages to identify what works and where gaps remain for a niche, provenance-driven market like HVTP.',
      ],
      boards: [
        {
          image: 'compInventory',
          label: 'Inventory management systems',
          alt: 'Comparison table of Zoho, QuickBooks, Sortly, and Fishbowl by unique value proposition, advantages, and disadvantages',
        },
        {
          image: 'compEcommerce',
          label: 'E-commerce sites',
          alt: 'Comparison table of Jaded London, Michaels, Ecological Textiles, and Owala by unique value proposition, advantages, and disadvantages',
        },
      ],
      takeawaysIntro: 'Three gaps stood out:',
      takeaways: [
        <>
          None of these platforms are built for <strong>provenance-driven, story-first</strong>{' '}
          inventory — they track what you have, not where it came from or why it matters.
        </>,
        <>
          No existing platform tracks <strong>lot-level history</strong> or producer
          relationships — this depth of traceability simply isn’t a
          priority for general inventory tools.
        </>,
        <>
          <strong>Pricing logic</strong> and supplier-facing{' '}
          <strong>transparency</strong> are largely ignored across all platforms reviewed.
        </>,
      ],
    },
  },
  ideation: {
    title: 'Brainstorming',
    brainstormingIntro:
      'Before wireframing, we mapped potential features against impact and implementation difficulty to keep our scope focused on what would matter most for HVTP.',
    informationArchitectureIntro:
      'From our prioritized features, we defined the core pages and structure of the product, then mapped them into an information architecture that evolved as we met with our client.',
    informationArchitectureOutro:
      'The early version split the product by device. The final version is organized around the dashboard, inventory, and transactions, with all three leading to a single Lot Details page, and each page marked for mobile, desktop, or both.',
    initialDesignsTitle: 'Initial Designs',
    initialDesignsIntro:
      'With our structure in place, I moved into sketching — starting with the core of the product, the inventory layout.',
    initialDesignsOutro:
      'The grid layout displayed lots in a spreadsheet-style table with columns for SKU, breed, color, weight, and status — explored with both a full filter sidebar and inline column controls. The card layout presented each lot as a visual tile with a photo and key metadata, which felt more engaging but raised concerns about how well it would scale to large inventories.',
  },
  midfi: {
    title: 'Exploring and Refining',
    intro:
      'I began refining the layouts and interaction patterns into mid-fidelity designs. This is also when we worked out what information to include for each lot — and what to emphasize for HVTP staff.',
    callouts: {
      cards:
        'We chose horizontal cards because they pair a prominent photo with each lot’s key data, making filters easy to identify at a glance. This was especially important since the client wanted to start using visual cues like color and texture to manage inventory, and to compare the photos and information of each lot efficiently. Vertical cards were ruled out because they sacrificed too much space.',
      table:
        'Alongside the cards, I designed a table view that lists each lot by SKU, grade, breed, color, status, and quantity, with a Columns control next to the filters.',
      filters:
        'For filters, I explored a collapsible right sidebar versus filters along the top of the page. The product already had a left-side navigation, and both client feedback and design critiques pushed back on adding a second sidebar, so filters moved to the top, where they stay visible without crowding the screen.',
      filtersShift:
        'I worked on both styles at the same time while iterating. When we originally spoke to the client, it didn’t seem like many filtering options were needed, so one version gave grade, color, state, and status their own filters. After discussing different use cases in more depth, we discovered the client would need more, which is why we moved forward with a single Filters button and a dropdown.',
      sort:
        'A sort dropdown sits on the left, with the card/table view toggle in the top right, so users can switch modes without losing their current filters.',
    },
  },
  hifi: {
    title: 'Wrapping up the designs',
    intro:
      'For high-fidelity, we aligned with NEFX’s existing brand — Poppins typeface, muted greens, and warm tans — to keep the platform feeling familiar while reinforcing their earthy, agricultural identity. I carried the single Filters button into this stage, where it opens a dropdown panel of collapsible groups and selected options appear as inline filter chips.',
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
        images: [
          { image: 'hifiFilter', alt: 'Hi-fi: filter panel open with the grade options showing' },
          { image: 'hifiFiltered', alt: 'Hi-fi: inventory with grade and color filters applied as chips' },
        ],
        description:
          'One dropdown panel lets staff filter by breed, color, grade, and status without leaving the inventory page, and each selection appears as an inline chip that can be removed. Sorting sits right beside it, with the card and table toggle just above.',
      },
    ],
  },
  themesAnswered: {
    title: 'Back to the three themes',
    themes: [
      {
        title: 'Scattered data',
        body: 'The Inventory view replaced separate sheets with one place to search and filter, and staff can see all the info about a lot in one place.',
      },
      {
        title: 'Double entry',
        body: 'Publishing a lot puts it on the public site, so staff don’t have to enter it twice.',
      },
      {
        title: 'Lot history',
        body: 'Edit Lot opens the lot’s own page, where its information and sales history live together.',
      },
    ],
    imageAlt:
      'Edit Lot page with lot information and sales history tabs, a published status, photos, and actions to record a sale, download a label, or delete the lot',
    credit: 'Edit Lot page designed by my teammates.',
  },
  testing: {
    title: 'Testing with HVTP staff',
    paragraphs: [
      'We tested in two rounds. The first was planned: HVTP staff worked through scenarios over Zoom, and we asked them to narrate what they were looking at, what they expected to happen, and anything that felt confusing or frustrating. The second was less official, with our client playing around with the version our developers had built in code.',
      'The scenarios covered tasks like adding a new lot, updating it with photos, placing it on hold, and recording a sale. The filtering one used a Figma prototype of my designs:',
    ],
    task: 'You are looking for an old lot with premium long grade and white color. How would you go about finding this lot?',
    findingsIntro:
      'Across the whole product, a lot of the comments focused on the mobile designs and adding more functionality to them. For my part, most were about the filters, and they came down to two questions:',
    findings: [
      {
        title: 'Which filters are necessary?',
        body: 'Staff commented on which filter options they needed. The final panel covers status, wool type, breed, grade, color, publication status, state, and farm, each in its own collapsible group.',
        image: 'filtersOneOpen',
        label: 'All filters',
        alt: 'Final filter panel with its eight groups, grade expanded to show four checkboxes',
      },
      {
        title: 'What if there are too many options?',
        body: 'Some filters had too many options to select from, so we cut them down by using search bars instead. Breed, state, and farm use search bars, while shorter lists like status, grade, and color use checkboxes.',
        image: 'filtersSearch',
        label: 'Checkboxes vs. search bars',
        alt: 'Final filter panel with a search bar for breed and checkboxes for grade, color, and publication status',
      },
    ],
  },
  reflection: {
    title: 'Final Thoughts',
    paragraphs: [
      'A major focus was making large collections of lots feel navigable without becoming overwhelming. Through client feedback, design critiques, and developer collaboration, we refined the experience to balance usability, familiarity, and feasibility. We were on a tight timeline, so we limited stretch goals like the farmer-facing features. The platform shipped, and HVTP staff have been using it since May 2026.',
      'This was my first major project where I owned my own designs, and I learned that applying a design process is very different from reading or hearing about it. I learned a lot about collaborating with other designers and turning real client feedback into working designs. I also learned how important the research is, and how its insights help the final design.',
      'I do wish I had been more organized throughout. I didn’t have enough annotations or explanations for the developers, which made handoff a little complicated.',
    ],
  },
};


