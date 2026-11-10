/**
 * One-time import of the website's current content into Strapi.
 *
 *   CMS_URL=https://cms.example.org CMS_IMPORT_TOKEN=<full-access API token> npm run import-content
 *
 * Copies, exactly as they are on the live site:
 *   - Projects       ← src/data/neped/projectList.ts (Projects table + homepage timeline)
 *   - Gallery albums ← src/data/shared/galleryAlbumsData.ts, uploading each photo from public/
 *
 * Safe to re-run: an entry whose name (project) or slug (album) already exists is skipped.
 * Run it from a machine that has the website repo checked out (it reads files from ../public).
 * Delete the full-access token in Strapi afterwards.
 */
import { openAsBlob } from 'node:fs';
import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PROJECT_LIST } from '../../src/data/neped/projectList.ts';
import { GALLERY_ALBUMS_DATA } from '../../src/data/shared/galleryAlbumsData.ts';

const CMS_URL = (process.env.CMS_URL ?? 'http://localhost:1337').replace(/\/$/, '');
const TOKEN = process.env.CMS_IMPORT_TOKEN;
const WEBSITE_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PUBLIC_DIR = path.join(WEBSITE_DIR, 'public');

if (!TOKEN) {
  console.error('Set CMS_IMPORT_TOKEN to a Full-access API token (Strapi → Settings → API Tokens).');
  process.exit(1);
}

const MIME: Record<string, string> = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
};

async function api<T>(method: string, route: string, body?: unknown): Promise<T> {
  const res = await fetch(`${CMS_URL}/api${route}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${method} ${route} → ${res.status} ${await res.text()}`);
  return (await res.json()) as T;
}

/** True when an entry (draft or published) with this field value already exists. */
async function exists(collection: string, field: string, value: string): Promise<boolean> {
  const q = new URLSearchParams({ [`filters[${field}][$eq]`]: value, status: 'draft', 'pagination[pageSize]': '1' });
  const res = await api<{ data: unknown[] }>('GET', `/${collection}?${q}`);
  return res.data.length > 0;
}

/** Uploads public/<src> to the Media Library and returns the new file id. */
async function upload(src: string, alt: string): Promise<number> {
  const file = path.join(PUBLIC_DIR, src);
  await access(file);
  const ext = path.extname(file).toLowerCase();
  const form = new FormData();
  form.append('files', await openAsBlob(file, { type: MIME[ext] ?? 'application/octet-stream' }), path.basename(file));
  form.append('fileInfo', JSON.stringify({ name: path.basename(file), alternativeText: alt }));

  const res = await fetch(`${CMS_URL}/api/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  });
  if (!res.ok) throw new Error(`upload ${src} → ${res.status} ${await res.text()}`);
  const [uploaded] = (await res.json()) as { id: number }[];
  return uploaded.id;
}

async function importProjects() {
  console.log(`\nProjects (${PROJECT_LIST.length})`);
  for (const [i, p] of PROJECT_LIST.entries()) {
    if (await exists('projects', 'name', p.name)) {
      console.log(`  skip  ${p.name} (already in CMS)`);
      continue;
    }
    await api('POST', '/projects?status=published', {
      data: { name: p.name, focus: p.focus, period: p.period, funder: p.funder, theme: p.theme, order: (i + 1) * 10 },
    });
    console.log(`  added ${p.name}`);
  }
}

async function importGallery() {
  console.log(`\nGallery albums (${GALLERY_ALBUMS_DATA.length})`);
  for (const [i, album] of GALLERY_ALBUMS_DATA.entries()) {
    if (await exists('gallery-albums', 'slug', album.id)) {
      console.log(`  skip  ${album.title} (already in CMS)`);
      continue;
    }
    const photoIds: number[] = [];
    for (const photo of album.photos) {
      photoIds.push(await upload(photo.src, photo.alt));
      process.stdout.write('.');
    }
    await api('POST', '/gallery-albums?status=published', {
      data: { title: album.title, slug: album.id, order: (i + 1) * 10, photos: photoIds },
    });
    console.log(`\n  added ${album.title} (${photoIds.length} photos)`);
  }
}

await importProjects();
await importGallery();
console.log('\nDone. Now delete the full-access import token in Strapi → Settings → API Tokens.');
