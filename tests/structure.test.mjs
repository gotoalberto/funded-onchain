// Structural contract for the built single-file site.
// Every stage screen is built, links resolve, mockbars and indexes are in place, copy follows the product rules.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from '../build.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { stages, indexKeys } = JSON.parse(readFileSync(join(root, 'src/stages.json'), 'utf8'));
const titles = JSON.parse(readFileSync(join(root, 'src/titles.json'), 'utf8'));
const html = build();
const pages = JSON.parse(/<script id="pages" type="application\/json">(.*?)<\/script>/s.exec(html)[1]);
const screenKeys = stages.flatMap(s => s.screens.map(c => c.key));

function htmlFiles(dir) {
  return readdirSync(dir).flatMap(n => {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return p.endsWith('.html') ? [p] : [];
  });
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '\u2014', ndash: '\u2013', rsaquo: '\u203a', lsaquo: '\u2039', middot: '\u00b7', hellip: '\u2026' };
function visibleText(body) {
  return body
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&([a-z]+);/gi, (all, n) => ENTITIES[n.toLowerCase()] ?? all);
}

test('every source page is listed in src/titles.json and every listed page has a source', () => {
  const dir = join(root, 'src/pages');
  const files = htmlFiles(dir).map(f => relative(dir, f).replace(/\.html$/, '')).sort();
  assert.deepEqual(files, Object.keys(titles).sort());
});

test('every stage screen is built', () => {
  assert.deepEqual(screenKeys.filter(k => !(k in pages)), []);
  assert.deepEqual(indexKeys.filter(k => !(k in pages)), []);
  assert.ok('index' in pages, 'top index');
});

test('every #/ link resolves to a page', () => {
  const broken = [];
  for (const [key, p] of Object.entries(pages)) {
    for (const m of p.body.matchAll(/href="#\/([^"]*)"/g)) {
      if (!(decodeURIComponent(m[1]) in pages)) broken.push(`${key} -> #/${m[1]}`);
    }
  }
  assert.deepEqual(broken, []);
});

test('every screen has exactly one mockbar, index pages have none', () => {
  const wrong = [];
  for (const [key, p] of Object.entries(pages)) {
    const n = p.body.match(/<nav class="mockbar"/g)?.length ?? 0;
    const want = screenKeys.includes(key) ? 1 : 0;
    if (n !== want) wrong.push(`${key}: ${n} mockbars`);
  }
  assert.deepEqual(wrong, []);
});

test('the top index links all eight stage indexes', () => {
  assert.equal(indexKeys.length, 8);
  const body = pages.index.body;
  assert.deepEqual(indexKeys.filter(k => !body.includes(`href="#/${k}"`)), []);
});

test('every page is titled', () => {
  assert.deepEqual(Object.entries(pages).filter(([, p]) => !p.title.trim()).map(([k]) => k), []);
});

test('visible copy follows the product rules', () => {
  const banned = [
    [/\u2014/, 'em dash'], [/\u2013/, 'en dash'], [/bitso/i, 'Bitso'], [/hyperliquid/i, 'Hyperliquid'],
    [/explorer/i, 'explorer'], [/epoch/i, 'epoch'], [/\bseasons?\b/i, 'season'], [/claim/i, 'claim'],
    [/liquidation/i, 'liquidation'], [/\bthe bar\b/i, 'the bar'], [/pilot/i, 'pilot'],
    [/can[\u2019']t request/i, "can't request"], [/seat #/i, 'seat number'], [/time weighted/i, 'time weighted'], [/percentile/i, 'percentile'],
  ];
  const shell = visibleText(readFileSync(join(root, 'src/template.html'), 'utf8').replace('__PAGES__', ''));
  const hits = [];
  for (const [key, text] of [['template', shell], ...Object.entries(pages).map(([k, p]) => [k, `${p.title}\n${visibleText(p.body)}`])]) {
    for (const [re, name] of banned) {
      const m = re.exec(text);
      if (m) hits.push(`${key}: ${name} in "${text.slice(Math.max(0, m.index - 30), m.index + 30).replace(/\s+/g, ' ')}"`);
    }
  }
  assert.deepEqual(hits, []);
});
