// Regenerates the favicon, Apple touch icon and social sharing image from the
// logo and the hero photo. Run with `node scripts/make-icons.mjs`.
import sharp from 'sharp';

const ink = '#1f1b14';
const crest = 'src/assets/brand/crest.png';
const logo = 'src/assets/brand/logo.png';

async function icon(size, file) {
  const inner = Math.round(size * 0.78);
  const mark = await sharp(crest).resize({ width: inner, height: inner, fit: 'inside' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: ink } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(file);
}
await icon(64, 'public/favicon.png');
await icon(180, 'public/apple-touch-icon.png');

// 1200x630 sharing image: hero photo, darkened on the left, with the logo.
const shade = Buffer.from(
  `<svg width="1200" height="630"><defs><linearGradient id="g"><stop offset="0" stop-color="${ink}" stop-opacity=".92"/><stop offset=".55" stop-color="${ink}" stop-opacity=".55"/><stop offset="1" stop-color="${ink}" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`,
);
const mark = await sharp(logo).resize({ height: 400 }).toBuffer();
await sharp('src/assets/photos/hero.jpg')
  .resize(1200, 630, { fit: 'cover' })
  .composite([{ input: shade }, { input: mark, left: 90, top: 115 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-image.jpg');

console.log('icons written');
