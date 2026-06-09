// Extracts the embedded base64 brand assets from the single-file demo HTML
// into public/ image files used by the Next.js app.
//
// Usage: save your updated single-file demo as ODR-Platform-Demo.html in the
// project root, then run:  node scripts/extract-assets.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = join(root, 'ODR-Platform-Demo.html');

if (!existsSync(htmlPath)) {
  console.error('ODR-Platform-Demo.html not found in project root.');
  process.exit(1);
}

const html = readFileSync(htmlPath, 'utf8');

const targets = [
  { const: 'ASSET_MARK', out: 'public/mark.png' },
  { const: 'ASSET_HERO', out: 'public/hero.jpg' },
  { const: 'ASSET_LOGO', out: 'public/logo.png' },
];

let found = 0;
for (const t of targets) {
  const re = new RegExp(t.const + "\\s*=\\s*'data:[^;]+;base64,([A-Za-z0-9+/=]+)'");
  const m = html.match(re);
  if (!m) {
    console.warn(`- ${t.const}: not found (skipped)`);
    continue;
  }
  writeFileSync(join(root, t.out), Buffer.from(m[1], 'base64'));
  console.log(`✓ ${t.const} -> ${t.out} (${Math.round(m[1].length * 0.75 / 1024)} KB)`);
  found++;
}

if (!found) {
  console.error('\nNo ASSET_* constants found. Is this the updated demo file?');
  process.exit(1);
}
console.log(`\nDone. Extracted ${found} asset(s) into public/.`);
