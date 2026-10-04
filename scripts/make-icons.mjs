// Regenerates public/apple-touch-icon.png and a fallback public/og-image.jpg.
// Replace og-image.jpg with a real 1200x630 photo of the lodge when available.
import sharp from 'sharp';

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" fill="#1f1b14"/><text x="90" y="126" font-family="Georgia, serif" font-size="112" font-weight="700" fill="#c09f2b" text-anchor="middle">B</text></svg>`;
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><radialGradient id="g" cx="85%" cy="0%" r="80%"><stop offset="0" stop-color="#c09f2b" stop-opacity=".45"/><stop offset="1" stop-color="#1f1b14" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#1f1b14"/><rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="300" font-family="Helvetica, Arial, sans-serif" font-size="96" font-weight="800" fill="#fff">Boeketlong Lodge</text>
  <text x="84" y="370" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="#c09f2b" letter-spacing="6">JANE FURSE · SEKHUKHUNE · LIMPOPO</text>
  <text x="84" y="470" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#ffffffcc">Rooms &amp; suites from R750 · Spa · Pool · Conferences</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 85 }).toFile('public/og-image.jpg');
console.log('icons written');
