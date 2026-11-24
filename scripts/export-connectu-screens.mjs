// Crops the ConnectU screens out of the presentation deck. Put each slide in a
// folder as slide-26.png, slide-34.png, ... at any size (a 2x or 3x export
// keeps the phone screens sharp). Boxes are in 800x450 slide units.
//
//   node scripts/export-connectu-screens.mjs <slides folder>
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2];
if (!src) throw new Error('Pass the folder that holds the slide images.');
const OUT = 'src/pages/case-studies/connectu/images';

// Only screens the page imports are written
const used = fs.readFileSync('src/pages/case-studies/connectu/connectuContent.js', 'utf8');

const row = (top, bottom, ...columns) => columns.map(([l, r]) => [l, top, r, bottom]);

const slides = {
  26: { sketches: [[145.2, 32.8, 416.8, 432.2], [434, 39.4, 771.4, 425.3]] },
  34: { 'mid-login': row(119, 429, [54.3, 194.7], [237.3, 380.2], [421.3, 562.5], [605.3, 745.7]) },
  35: { 'mid-profile': row(119, 436.8, [46.2, 190.9], [234.1, 379], [421.8, 566.6], [609.6, 754.4]) },
  36: { 'mid-community': row(110.6, 432.2, [43.2, 190.1], [212.3, 359.3], [393.6, 540.6], [576.2, 722.6]) },
  49: { login: row(118.2, 420.7, [37.4, 177.8], [188.9, 329.1], [340.2, 480], [641.9, 781.7]) },
  50: { onboarding: row(118.2, 420.7, [41.6, 181.8], [202.1, 342.5], [398.4, 538.8], [559.1, 699.3]) },
  51: { feed: row(117.4, 421.8, [40.4, 180.6], [212.2, 352.3], [383.9, 524.1], [555.7, 695.9]) },
  52: { find: row(118.2, 420.6, [41.6, 181.8], [215.1, 355.6]) },
  53: { clubs: row(117.4, 421.8, [41.6, 181.8], [213.4, 353.6]) },
  54: { messages: row(117.4, 421.8, [41.6, 181.9], [213.6, 353.9]) },
  55: { profiles: row(117.4, 421.8, [41.6, 181.8], [192.9, 333.1], [344.4, 484.6], [495.7, 636.6], [647.7, 788.8]) },
  56: { 'your-profile': row(117.4, 423.4, [41.6, 182.9], [203.1, 344.2], [400.4, 541.4], [561.9, 702.8]) },
  58: { 'club-account': row(117.4, 426.3, [41.6, 183.9], [215.6, 357.8], [389.4, 531.8], [563.2, 705.6]) },
};

fs.mkdirSync(OUT, { recursive: true });
for (const [number, groups] of Object.entries(slides)) {
  const file = path.join(src, `slide-${number}.png`);
  const { width } = await sharp(file).metadata();
  const k = width / 800;
  for (const [name, boxes] of Object.entries(groups)) {
    for (const [i, [l, t, r, b]] of boxes.entries()) {
      const out = `${name}${boxes.length > 1 ? `-${i + 1}` : ''}.webp`;
      if (!used.includes(`./images/${out}`)) continue;
      const wide = name === 'sketches';
      await sharp(file)
        .extract({
          left: Math.round(l * k),
          top: Math.round(t * k),
          width: Math.round((r - l) * k),
          height: Math.round((b - t) * k),
        })
        // one size per set, so screens in a row line up
        .resize(
          wide
            ? { width: 2000, withoutEnlargement: true }
            : { width: 720, height: name.startsWith('mid-') ? 1580 : 1560, fit: 'cover' }
        )
        .webp({ quality: 92 })
        .toFile(path.join(OUT, out));
    }
  }
}
console.log(`Exported ConnectU screens to ${OUT}`);
