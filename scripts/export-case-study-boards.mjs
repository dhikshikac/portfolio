// Crops the full-resolution Figma board exports into the case study images.
// Each board gets a page-sized `display` image (bundled with the page) and a
// large `zoom` image (public/, fetched only when the zoom viewer opens).
// Crop boxes are fractions of the source so re-exports at any scale still work.
//
// Figma names every export after its section ("HVTP UXR.png", "Untitled.png"),
// so rename each one to the `file` listed below and pass the folder they're in.
//
//   node scripts/export-case-study-boards.mjs <sources folder> [name filter]
import sharp from 'sharp';
import path from 'node:path';

sharp.cache(false);
const src = process.argv[2];
if (!src) throw new Error('Pass the folder that holds the Figma exports.');
const CS = 'src/pages/case-studies';
const ZOOM = 'public/images/zoom';

const boards = [
  // Interview notes, with the color legend on the left
  { file: 'hvtp-insights.png', box: [30 / 2000, 86 / 393, 1876 / 2000, 350 / 393],
    display: `${CS}/hvtp/images/hvtp-insights.webp`, zoom: `${ZOOM}/hvtp-insights.webp`, zw: 12000 },
  // Starts a little high so the Zoom badge doesn't cover the notes at top right
  { file: 'hvtp-affinity.png', box: [32 / 2000, 92 / 1502, 1775 / 2000, 1455 / 1502],
    display: `${CS}/hvtp/images/hvtp-affinity.webp`, zoom: `${ZOOM}/hvtp-affinity.webp`, zw: 8000 },
  // Comp analysis: one table per image, the loose screenshots left out
  { file: 'hvtp-competitors.png', box: [94 / 1800, 156 / 1629, 848 / 1800, 766 / 1629],
    display: `${CS}/hvtp/images/hvtp-comp-inventory.webp`, zoom: `${ZOOM}/hvtp-comp-inventory.webp`, zw: 8000 },
  { file: 'hvtp-competitors.png', box: [94 / 1800, 926 / 1629, 848 / 1800, 1536 / 1629],
    display: `${CS}/hvtp/images/hvtp-comp-ecommerce.webp`, zoom: `${ZOOM}/hvtp-comp-ecommerce.webp`, zw: 8000 },
  { file: 'hvtp-info-arch-early.png', box: [6 / 2000, 12 / 1401, 1988 / 2000, 1388 / 1401],
    display: `${CS}/hvtp/images/hvtp-info-arch-early.webp`, zoom: `${ZOOM}/hvtp-info-arch-early.webp`, zw: 6000 },
  { file: 'hvtp-features.png', box: [1005 / 1600, 205 / 1015, 1485 / 1600, 562 / 1015],
    display: `${CS}/hvtp/images/hvtp-features.webp`, zoom: `${ZOOM}/hvtp-features.webp`, zw: 5000 },
  { file: 'hvtp-info-arch-final.png', box: [0, 0, 1, 1],
    display: `${CS}/hvtp/images/hvtp-info-arch-final.webp`, zoom: `${ZOOM}/hvtp-info-arch-final.webp`, zw: 6000 },
  { file: 'wk-affinity.png', box: [105 / 1600, 75 / 1201, 1515 / 1600, 1175 / 1201],
    display: `${CS}/wolters/images/competitor-analysis.webp`, zoom: `${ZOOM}/wk-competitor-analysis.webp`, zw: 8000 },
  { file: 'wk-competitor-table.png', box: [0, 0, 1, 1],
    display: null, zoom: `${ZOOM}/wk-competitor-breakdown.webp`, zw: 16000 },
  // One product's panel (LexisNexis), readable at page size
  { file: 'wk-competitor-table.png', box: [1050 / 32768, 760 / 14103, 10030 / 32768, 2790 / 14103],
    display: `${CS}/wolters/images/competitor-breakdown-excerpt.webp` },
];

const only = process.argv[3];
for (const b of boards) {
  if (only && !(b.display || b.zoom).includes(only)) continue;
  const input = path.join(src, b.file);
  const { width, height } = await sharp(input, { limitInputPixels: false }).metadata();
  const [x0, y0, x1, y1] = b.box;
  const region = {
    left: Math.round(x0 * width), top: Math.round(y0 * height),
    width: Math.round((x1 - x0) * width), height: Math.round((y1 - y0) * height),
  };
  const base = () => sharp(input, { limitInputPixels: false }).extract(region).flatten({ background: '#ffffff' });
  if (b.display) {
    await base().resize({ width: 2000 }).webp({ quality: 86 }).toFile(b.display);
  }
  if (b.zoom) {
    await base().resize({ width: Math.min(b.zw, region.width) }).webp({ quality: 82 }).toFile(b.zoom);
  }
  console.log(b.display || '', b.zoom || '');
}
