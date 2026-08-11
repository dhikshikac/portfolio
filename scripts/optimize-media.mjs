import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import ffmpeg from 'ffmpeg-static';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function optimizePhoto(inputPath, outputPath, maxEdge = 1600) {
  const meta = await sharp(inputPath).metadata();
  let pipeline = sharp(inputPath).rotate();
  const longest = Math.max(meta.width || 0, meta.height || 0);
  if (longest > maxEdge) {
    pipeline = pipeline.resize({
      width: maxEdge,
      height: maxEdge,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  const ext = path.extname(outputPath).toLowerCase();
  if (ext === '.webp') {
    await pipeline.webp({ quality: 80 }).toFile(outputPath);
  } else if (ext === '.png') {
    await pipeline.png({ compressionLevel: 9, quality: 80 }).toFile(outputPath);
  } else {
    await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(outputPath);
  }
}

async function extractPosters() {
  const videosDir = path.join(root, 'public/videos');
  const postersDir = path.join(root, 'public/images/posters');
  fs.mkdirSync(postersDir, { recursive: true });

  const videos = fs.readdirSync(videosDir).filter((f) => /\.mp4$/i.test(f));
  for (const file of videos) {
    const base = file.replace(/\.mp4$/i, '');
    const outJpg = path.join(postersDir, `${base}.jpg`);
    const outWebp = path.join(postersDir, `${base}.webp`);
    const input = path.join(videosDir, file);
    const tmp = path.join(postersDir, `${base}-tmp.jpg`);
    execFileSync(ffmpeg, ['-y', '-i', input, '-frames:v', '1', '-q:v', '2', tmp], {
      stdio: 'ignore',
    });
    await sharp(tmp)
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outJpg);
    await sharp(tmp)
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outWebp);
    fs.unlinkSync(tmp);
    console.log(
      `poster ${base}: jpg=${(fs.statSync(outJpg).size / 1024).toFixed(0)}KB webp=${(fs.statSync(outWebp).size / 1024).toFixed(0)}KB`,
    );
  }
}

async function optimizePublicPhotos() {
  const aboutDir = path.join(root, 'public/images/about');
  const aboutFiles = [
    'aaa.jpeg',
    'about.jpg',
    'cafehopping.jpg',
    'cookies.jpeg',
    'creampuffs.jpeg',
    'dcc.jpeg',
    'drawing.jpeg',
    'h4i.jpeg',
    'matcha.jpg',
    'painting.jpg',
  ];

  const photoJobs = [
    ...aboutFiles.map((f) => ({
      in: path.join(aboutDir, f),
      out: path.join(aboutDir, f.replace(/\.(jpe?g|png)$/i, '.webp')),
    })),
    ...fs
      .readdirSync(path.join(root, 'public/images/camera'))
      .filter((f) => /\.(jpe?g|png)$/i.test(f) && !/frame|star/i.test(f))
      .map((f) => ({
        in: path.join(root, 'public/images/camera', f),
        out: path.join(
          root,
          'public/images/camera',
          f.replace(/\.(jpe?g|png)$/i, '.webp'),
        ),
      })),
    {
      in: path.join(root, 'public/images/thumbnails/verdant-thumb.png'),
      out: path.join(root, 'public/images/thumbnails/verdant-thumb.webp'),
    },
  ];

  for (const job of photoJobs) {
    if (!fs.existsSync(job.in)) continue;
    await optimizePhoto(job.in, job.out);
    const before = fs.statSync(job.in).size;
    const after = fs.statSync(job.out).size;
    console.log(
      `photo ${path.relative(root, job.out)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
    );
  }
}

async function optimizeCaseStudyImages() {
  const dirs = [
    path.join(root, 'src/pages/case-studies/hvtp/images'),
    path.join(root, 'src/pages/case-studies/wolters/images'),
  ];

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!/\.(jpe?g|png)$/i.test(file)) continue;
      const input = path.join(dir, file);
      const before = fs.statSync(input).size;
      const meta = await sharp(input).metadata();
      const longest = Math.max(meta.width || 0, meta.height || 0);
      if (before < 80 * 1024 && longest <= 1600) {
        console.log(`skip small ${path.relative(root, input)}`);
        continue;
      }
      const tmp = `${input}.tmp`;
      let pipeline = sharp(input).rotate();
      if (longest > 1600) {
        pipeline = pipeline.resize({
          width: 1600,
          height: 1600,
          fit: 'inside',
          withoutEnlargement: true,
        });
      }
      if (/\.png$/i.test(file)) {
        await pipeline.png({ compressionLevel: 9, quality: 80 }).toFile(tmp);
      } else {
        await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tmp);
      }
      fs.renameSync(tmp, input);
      const after = fs.statSync(input).size;
      console.log(
        `cs ${path.relative(root, input)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${meta.width}x${meta.height})`,
      );
    }
  }
}

await extractPosters();
await optimizePublicPhotos();
await optimizeCaseStudyImages();
console.log('DONE');
