// Runs after `react-scripts build`. LinkedIn, Slack and other link previews
// don't run JavaScript, so each case study gets its own copy of index.html with
// its own title, description and image. The app itself loads the same either way.
//
// Preview images must be absolute URLs: the domain comes from SITE_URL, or from
// Vercel's VERCEL_PROJECT_PRODUCTION_URL during a deploy.
import fs from 'node:fs';
import path from 'node:path';

const BUILD = 'build';
const NAME = 'Dhikshika Cherivirala';

const pages = [
  {
    route: '',
    title: NAME,
    description: 'Portfolio showcasing design and development work.',
  },
  {
    route: 'work/hudson-valley-textile',
    title: `Hudson Valley Textile Project | ${NAME}`,
    description:
      'Designed an inventory platform for a sustainable regional wool supply chain nonprofit.',
    image: '/images/share/hudson-valley-textile.jpg',
  },
  {
    route: 'work/wolters-kluwer',
    title: `Wolters Kluwer | ${NAME}`,
    description:
      'Designed a GenAI research tool for a global professional information company.',
    image: '/images/share/wolters-kluwer.jpg',
  },
  {
    route: 'work/connectu',
    title: `ConnectU | ${NAME}`,
    description:
      'Designed a concept app for Cornell freshmen to discover clubs and communities.',
    image: '/images/share/connectu.jpg',
  },
];

const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || '';
const site = host && (host.startsWith('http') ? host : `https://${host}`).replace(/\/$/, '');
if (!site) {
  console.warn('Share previews: no SITE_URL, so preview images use relative links.');
}

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

for (const page of pages) {
  const tags = [
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', NAME],
    ['property', 'og:title', page.title],
    ['property', 'og:description', page.description],
    site && ['property', 'og:url', `${site}/${page.route}`],
    page.image && ['property', 'og:image', `${site}${page.image}`],
    page.image && ['property', 'og:image:width', '1200'],
    page.image && ['property', 'og:image:height', '630'],
    ['name', 'twitter:card', page.image ? 'summary_large_image' : 'summary'],
  ]
    .filter(Boolean)
    .map(([key, name, value]) => `<meta ${key}="${name}" content="${escape(value)}"/>`)
    .join('');

  const html = template
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(
      /<title>[^<]*<\/title>/,
      () =>
        `<title>${escape(page.title)}</title>` +
        `<meta name="description" content="${escape(page.description)}"/>${tags}`,
    );

  const out = path.join(BUILD, page.route, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

console.log(`Share previews: ${pages.length} pages${site ? ` for ${site}` : ''}`);
