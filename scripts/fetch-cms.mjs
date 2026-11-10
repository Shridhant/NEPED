/**
 * Runs before every website build (see "build" in package.json).
 *
 * With CMS_URL and CMS_TOKEN set (Vercel → Project → Settings → Environment Variables):
 *   pulls published content from Strapi into src/generated/cms/*.json and downloads its
 *   images into public/cms-media/, so the built site never loads anything from the CMS server.
 *   Any failure stops the build, and Vercel keeps the previous deployment live.
 *
 * Without CMS_URL (e.g. local development): does nothing, and the site uses the data files in src/data.
 */
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const CMS_URL = process.env.CMS_URL?.replace(/\/$/, "");
const CMS_TOKEN = process.env.CMS_TOKEN;
const OUT_DIR = "src/generated/cms";
const MEDIA_DIR = "public/cms-media";

if (!CMS_URL) {
  console.log("[cms] CMS_URL not set: building with the content in src/data.");
  process.exit(0);
}
if (!CMS_TOKEN) {
  console.error("[cms] CMS_URL is set but CMS_TOKEN is missing.");
  process.exit(1);
}

/** Every published entry of a collection, following pagination. */
async function getAll(collection, query = {}) {
  const items = [];
  for (let page = 1; ; page++) {
    const params = new URLSearchParams({ ...query, populate: "*", "pagination[page]": String(page), "pagination[pageSize]": "100" });
    const res = await fetch(`${CMS_URL}/api/${collection}?${params}`, {
      headers: { Authorization: `Bearer ${CMS_TOKEN}` },
    });
    if (!res.ok) throw new Error(`GET ${collection} → ${res.status} ${await res.text()}`);
    const { data, meta } = await res.json();
    items.push(...data);
    if (page >= meta.pagination.pageCount) return items;
  }
}

const keptMedia = new Set();

/** Downloads an image (its 1600 px copy when Strapi made one) and returns its site path. */
async function media(file) {
  if (!file) return "";
  const version = file.formats?.xlarge ?? file;
  const name = `${version.hash}${version.ext}`;
  keptMedia.add(name);
  const dest = path.join(MEDIA_DIR, name);
  if (!existsSync(dest)) {
    const url = version.url.startsWith("http") ? version.url : `${CMS_URL}${version.url}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`download ${url} → ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  }
  return `/cms-media/${name}`;
}

/** "2026-07-28" → "July 28, 2026" */
function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const paragraphs = (text) => (text ?? "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

async function projects() {
  const rows = await getAll("projects", { "sort[0]": "order:asc", "sort[1]": "id:asc" });
  return rows.map((p) => ({
    name: p.name,
    focus: p.focus ?? "",
    period: p.period,
    funder: p.funder,
    theme: p.theme,
  }));
}

async function galleryAlbums() {
  const rows = await getAll("gallery-albums", { "sort[0]": "order:asc", "sort[1]": "id:asc" });
  const albums = [];
  for (const a of rows) {
    const photos = [];
    for (const f of a.photos ?? []) {
      photos.push({ id: String(f.id), src: await media(f), alt: f.alternativeText ?? "" });
    }
    albums.push({ id: a.slug, title: a.title, photos });
  }
  return albums;
}

async function blogs() {
  const rows = await getAll("blogs", { "sort[0]": "date:desc", "sort[1]": "id:desc" });
  const posts = [];
  for (const b of rows) {
    posts.push({
      id: String(b.id),
      slug: b.slug,
      title: b.title,
      category: b.category,
      date: formatDate(b.date),
      readTime: b.readTime ?? "",
      image: await media(b.coverImage),
      summary: b.summary,
      author: { name: b.authorName ?? "", role: b.authorRole ?? "" },
      tags: (b.tags ?? []).map((t) => t.text),
      content: {
        intro: b.intro ?? "",
        sections: (b.sections ?? []).map((s) => ({
          heading: s.heading,
          body: paragraphs(s.body),
          ...(s.highlightQuote ? { highlightQuote: s.highlightQuote } : {}),
        })),
        takeaways: (b.takeaways ?? []).map((t) => t.text),
      },
    });
  }
  return posts;
}

try {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(MEDIA_DIR, { recursive: true });

  const content = {
    projects: await projects(),
    galleryAlbums: await galleryAlbums(),
    blogs: await blogs(),
  };
  for (const [name, data] of Object.entries(content)) {
    await writeFile(path.join(OUT_DIR, `${name}.json`), JSON.stringify(data, null, 2));
  }

  // Remove images no longer used by any published entry
  for (const name of await readdir(MEDIA_DIR)) {
    if (!keptMedia.has(name)) await rm(path.join(MEDIA_DIR, name));
  }

  console.log(
    `[cms] ${content.projects.length} projects, ${content.galleryAlbums.length} albums, ` +
      `${content.blogs.length} blogs, ${keptMedia.size} images`,
  );
} catch (err) {
  console.error("[cms] Could not load content from the CMS:", err.message);
  process.exit(1);
}
