// Structural contract for the built mockups in dist/.
// Every screen in the manifest exists, links resolve, copy follows the product rules.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const manifest = JSON.parse(readFileSync(join(root, 'src/manifest.json'), 'utf8'));
const screens = manifest.flows.flatMap(f => f.screens.map(s => ({ flow: f, screen: s, path: join(dist, f.id, `${s.id}.html`) })));
const flowDir = f => join(dist, f.id);

function htmlFiles(dir) {
  return readdirSync(dir).flatMap(n => {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return p.endsWith('.html') ? [p] : [];
  });
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ');
}

test('every manifest screen is built', () => {
  const missing = screens.filter(s => !existsSync(s.path)).map(s => `${s.flow.id}/${s.screen.id}`);
  assert.deepEqual(missing, []);
});

test('the top hub links every flow', () => {
  const hub = readFileSync(join(dist, 'index.html'), 'utf8');
  const missing = manifest.flows.filter(f => !hub.includes(`href="${f.id}/index.html"`)).map(f => f.id);
  assert.deepEqual(missing, []);
});

test('each flow is an independent project: own index, own kit, every screen listed', () => {
  const problems = [];
  for (const f of manifest.flows) {
    const dir = flowDir(f);
    if (!existsSync(join(dir, 'index.html'))) { problems.push(`${f.id}: no index.html`); continue; }
    if (!existsSync(join(dir, 'kit/funded.css'))) problems.push(`${f.id}: no kit copy`);
    const idx = readFileSync(join(dir, 'index.html'), 'utf8');
    for (const s of f.screens) if (!idx.includes(`href="${s.id}.html"`)) problems.push(`${f.id}: index misses ${s.id}`);
  }
  assert.deepEqual(problems, []);
});

test('no link inside a flow leaves its folder', () => {
  const leaks = [];
  for (const f of manifest.flows) {
    for (const file of htmlFiles(flowDir(f))) {
      const html = readFileSync(file, 'utf8');
      for (const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
        const ref = m[1];
        if (/^(https?:|mailto:|data:)/.test(ref)) continue;
        const target = resolve(dirname(file), ref);
        if (!target.startsWith(flowDir(f) + '/')) leaks.push(`${file.replace(dist, '')} -> ${ref}`);
      }
    }
  }
  assert.deepEqual(leaks, []);
});

test('pages are English, titled and use the shared kit', () => {
  for (const file of htmlFiles(dist)) {
    const html = readFileSync(file, 'utf8');
    assert.match(html, /<html lang="en"/, `${file} lang`);
    assert.match(html, /<title>[^<]+<\/title>/, `${file} title`);
    assert.match(html, /kit\/funded\.css"/, `${file} kit css`);
  }
});

test('every local link and asset resolves', () => {
  const broken = [];
  for (const file of htmlFiles(dist)) {
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/(?:href|src)="([^"#]+)(#[^"]*)?"/g)) {
      const ref = m[1];
      if (/^(https?:|mailto:|data:)/.test(ref)) continue;
      if (!existsSync(join(dirname(file), ref))) broken.push(`${file.replace(dist, '')} -> ${ref}`);
    }
  }
  assert.deepEqual(broken, []);
});

test('every content screen links to another screen of its flow', () => {
  const deadEnds = screens.filter(s => {
    const html = readFileSync(s.path, 'utf8');
    const main = html.split('<main')[1] || '';
    return !/href="[^"#]+\.html"/.test(main);
  }).map(s => `${s.flow.id}/${s.screen.id}`);
  assert.deepEqual(deadEnds, []);
});

test('no em or en dashes in visible copy', () => {
  const offenders = htmlFiles(dist).filter(f => /[–—]/.test(visibleText(readFileSync(f, 'utf8'))));
  assert.deepEqual(offenders, []);
});

test('no third party funding vocabulary survives', () => {
  const words = /\b(funder|funders|subscribe|redeem|pool share|fund page)\b/i;
  const offenders = htmlFiles(dist).filter(f => words.test(visibleText(readFileSync(f, 'utf8'))));
  assert.deepEqual(offenders, []);
});

test('no KYC step anywhere', () => {
  const offenders = htmlFiles(dist).filter(f => /\b(KYC|identity verification|verify your identity|passport)\b/i.test(visibleText(readFileSync(f, 'utf8'))));
  assert.deepEqual(offenders, []);
});
