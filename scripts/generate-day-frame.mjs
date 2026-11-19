// Builds the day-mode copy of the About page frame.
//
// about-frame.png paints the "Get in touch" card navy with a dark star on
// it. Day mode needs the same artwork with a pale-blue card and a gold
// star, and everything else (pink photo frame, purple string) untouched.
//
// Each pixel is treated as a blend of the four source colours. We solve
// for those blend weights, then rebuild the pixel from the new colours, so
// anti-aliased edges (string over card, rounded corners) stay smooth.
//
// Usage: node scripts/generate-day-frame.mjs
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'public/images/about/about-frame.png');
const OUT = path.join(root, 'public/images/about/about-frame-day.png');

// Source colour -> day colour
const PALETTE = [
  { from: [38, 64, 105], to: [219, 230, 242] }, // navy card -> pale sky blue
  { from: [13, 27, 46], to: [217, 165, 79] }, // dark star -> gold
  { from: [123, 94, 167], to: [123, 94, 167] }, // purple string (kept)
  { from: [192, 108, 132], to: [192, 108, 132] }, // pink frame (kept)
];
// Only rewrite pixels that are at least this much card or star
const TOUCH_THRESHOLD = 0.02;

function invert4(m) {
  // Gauss-Jordan inverse of a 4x4 matrix (rows of numbers)
  const n = 4;
  const a = m.map((row, i) => [...row, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  for (let c = 0; c < n; c += 1) {
    let pivot = c;
    for (let r = c + 1; r < n; r += 1) {
      if (Math.abs(a[r][c]) > Math.abs(a[pivot][c])) pivot = r;
    }
    [a[c], a[pivot]] = [a[pivot], a[c]];
    const div = a[c][c];
    for (let k = 0; k < 2 * n; k += 1) a[c][k] /= div;
    for (let r = 0; r < n; r += 1) {
      if (r === c) continue;
      const f = a[r][c];
      for (let k = 0; k < 2 * n; k += 1) a[r][k] -= f * a[c][k];
    }
  }
  return a.map((row) => row.slice(n));
}

// Columns are palette colours, last row forces the weights to sum to 1
const A = [0, 1, 2].map((ch) => PALETTE.map((p) => p.from[ch]));
A.push([1, 1, 1, 1]);
const Ainv = invert4(A);

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += info.channels) {
  if (data[i + 3] === 0) continue;
  const v = [data[i], data[i + 1], data[i + 2], 1];
  let w = Ainv.map((row) => row.reduce((sum, x, k) => sum + x * v[k], 0));
  w = w.map((x) => Math.max(0, x));
  const total = w.reduce((s, x) => s + x, 0) || 1;
  w = w.map((x) => x / total);
  if (w[0] + w[1] <= TOUCH_THRESHOLD) continue;
  for (let ch = 0; ch < 3; ch += 1) {
    const value = PALETTE.reduce((sum, p, k) => sum + p.to[ch] * w[k], 0);
    data[i + ch] = Math.max(0, Math.min(255, Math.round(value)));
  }
}

await sharp(data, { raw: info }).png({ compressionLevel: 9 }).toFile(OUT);
console.log(`Wrote ${path.relative(root, OUT)}`);
