import { NEPED_PROJECTS, type NepedProject } from "@/data/neped/nepedProjectsData";
import { BLOG_POSTS, type BlogPostData } from "@/data/shared/blogData";
import { GALLERY_ALBUMS, type GalleryAlbum } from "@/data/shared/galleryData";

/**
 * Simple, zero-dependency YAML Frontmatter & Markdown Parser
 */
function parseMarkdownWithFrontmatter(rawContent: string): {
  frontmatter: Record<string, any>;
  body: string;
} {
  const trimmed = rawContent.trim();
  if (!trimmed.startsWith("---")) {
    return { frontmatter: {}, body: trimmed };
  }

  const endFrontmatterIndex = trimmed.indexOf("\n---", 3);
  if (endFrontmatterIndex === -1) {
    return { frontmatter: {}, body: trimmed };
  }

  const frontmatterBlock = trimmed.slice(3, endFrontmatterIndex).trim();
  const body = trimmed.slice(endFrontmatterIndex + 4).trim();
  const frontmatter: Record<string, any> = {};

  const lines = frontmatterBlock.split("\n");
  let currentList: any[] | null = null;
  let currentObjectList: Record<string, any>[] | null = null;
  let currentObj: Record<string, any> | null = null;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Skip empty lines or pure comments
    if (!line || line.startsWith("#")) continue;

    // Check for nested object list item (e.g. "  - label: ...")
    if (rawLine.startsWith("  - ") || rawLine.startsWith("    - ")) {
      const itemContent = line.slice(2).trim();
      if (itemContent.includes(":")) {
        const [subK, ...subV] = itemContent.split(":");
        const k = subK.trim();
        const v = subV.join(":").trim().replace(/^["']|["']$/g, "");
        if (currentObj && Object.keys(currentObj).length > 0 && currentObjectList) {
          currentObjectList.push(currentObj);
        }
        currentObj = { [k]: v };
        continue;
      }
    }

    // Check for nested object property (e.g. "    value: ...")
    if (currentObj && (rawLine.startsWith("    ") || rawLine.startsWith("      ")) && line.includes(":")) {
      const [subK, ...subV] = line.split(":");
      const k = subK.trim();
      const v = subV.join(":").trim().replace(/^["']|["']$/g, "");
      currentObj[k] = v;
      continue;
    }

    // If we finished a nested object and hit a new top key
    if (currentObj && currentObjectList) {
      currentObjectList.push(currentObj);
      currentObj = null;
    }

    // Check for simple list item (e.g. "- item")
    if (line.startsWith("- ")) {
      const val = line.slice(2).trim().replace(/^["']|["']$/g, "");
      if (currentList) {
        currentList.push(val);
      }
      continue;
    }

    // Standard key: value pair
    if (line.includes(":")) {
      const colonIndex = line.indexOf(":");
      const key = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim();

      if (!val) {
        // List or object incoming
        if (key === "highlights" || key === "photos" || key === "sections") {
          currentObjectList = [];
          frontmatter[key] = currentObjectList;
          currentList = null;
        } else {
          currentList = [];
          frontmatter[key] = currentList;
          currentObjectList = null;
        }
      } else {
        frontmatter[key] = val.replace(/^["']|["']$/g, "");
        currentList = null;
        currentObjectList = null;
      }
    }
  }

  // Push lingering object
  if (currentObj && currentObjectList) {
    currentObjectList.push(currentObj);
  }

  return { frontmatter, body };
}

/**
 * Splits a markdown body into named sections keyed by their "## Heading" text.
 */
function splitBodyIntoSections(body: string): Record<string, string> {
  const sections: Record<string, string> = {};
  let currentHeading: string | null = null;
  let buffer: string[] = [];

  for (const line of body.split("\n")) {
    const headingMatch = line.match(/^##\s+(.*)/);
    if (headingMatch) {
      if (currentHeading) sections[currentHeading] = buffer.join("\n").trim();
      currentHeading = headingMatch[1].trim();
      buffer = [];
    } else if (currentHeading) {
      buffer.push(line);
    }
  }
  if (currentHeading) sections[currentHeading] = buffer.join("\n").trim();

  return sections;
}

/** Finds a section whose heading contains any of the given keywords (case-insensitive). */
export function findSection(sections: Record<string, string>, keywords: string[]): string {
  const key = Object.keys(sections).find((heading) =>
    keywords.some((word) => heading.toLowerCase().includes(word))
  );
  return key ? sections[key] : "";
}

/** Like findSection, but returns the matching heading key itself (or undefined). */
function pickHeadingKey(sections: Record<string, string>, keywords: string[]): string | undefined {
  return Object.keys(sections).find((heading) =>
    keywords.some((word) => heading.toLowerCase().includes(word))
  );
}

/** Pulls a leading "> quote" blockquote line out of a section, returning the quote and the remaining text. */
function extractBlockquote(text: string): { quote?: string; rest: string } {
  const match = text.match(/^>\s*"?(.*?)"?\s*$/m);
  if (!match) return { rest: text };
  return { quote: match[1], rest: (text.slice(0, match.index) + text.slice(match.index! + match[0].length)).trim() };
}

/** Parses a "1. item" or "- item" / "* item" list block into a plain string array. */
function parseListItems(text: string): string[] {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^(\d+\.|[-*])\s*/, "").trim())
    .filter(Boolean);
}

/**
 * Load all project files dynamically from /content/projects/*.md
 */
export function loadAllProjects(): NepedProject[] {
  try {
    const modules = import.meta.glob("/content/projects/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    }) as Record<string, string>;

    const files = Object.values(modules);
    if (files.length === 0) {
      return NEPED_PROJECTS;
    }

    const loadedProjects: NepedProject[] = files.map((content) => {
      const { frontmatter } = parseMarkdownWithFrontmatter(content);

      return {
        id: frontmatter.id || "1",
        slug: frontmatter.slug || `project-${frontmatter.id}`,
        phase: frontmatter.phase || `Project ${frontmatter.id}`,
        name: frontmatter.name || "Untitled Project",
        period: frontmatter.period || "",
        category: frontmatter.category || "Agroforestry",
        fundingAgency: frontmatter.fundingAgency || "",
        heroImage: frontmatter.heroImage || "/forest.webp",
        objective: frontmatter.objective || "",
      };
    });

    return loadedProjects.sort((a, b) => Number(a.id) - Number(b.id));
  } catch (err) {
    console.warn("Using fallback typed projects dataset:", err);
    return NEPED_PROJECTS;
  }
}

/**
 * Load all blog files dynamically from /content/blogs/*.md
 */
export function loadAllBlogs(): BlogPostData[] {
  try {
    const modules = import.meta.glob("/content/blogs/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    }) as Record<string, string>;

    const files = Object.values(modules);
    if (files.length === 0) {
      return BLOG_POSTS;
    }

    const loadedBlogs: BlogPostData[] = files.map((content) => {
      const { frontmatter, body } = parseMarkdownWithFrontmatter(content);
      const sections = splitBodyIntoSections(body);
      const hasHeadings = Object.keys(sections).length > 0;
      const introKey = pickHeadingKey(sections, ["intro"]);
      const takeawaysKey = pickHeadingKey(sections, ["takeaway"]);

      const introText = introKey
        ? sections[introKey]
        : hasHeadings
          ? body.split("\n##")[0].trim()
          : body.split("\n\n")[0] || "";

      const builtSections = Object.keys(sections)
        .filter((heading) => heading !== introKey && heading !== takeawaysKey)
        .map((heading) => {
          const { quote, rest } = extractBlockquote(sections[heading]);
          return {
            heading,
            body: rest.split("\n\n").map((p) => p.trim()).filter(Boolean),
            ...(quote ? { highlightQuote: quote } : {}),
          };
        });

      return {
        id: frontmatter.id || "1",
        slug: frontmatter.slug || `blog-${frontmatter.id}`,
        title: frontmatter.title || "Untitled Article",
        category: frontmatter.category || "Field Reports",
        date: frontmatter.date || "2026",
        readTime: frontmatter.readTime || "5 min read",
        image: frontmatter.image || "/forest.webp",
        summary: frontmatter.summary || body.slice(0, 150) + "...",
        author: {
          name: frontmatter.authorName || "NEPeD Field Cell",
          role: frontmatter.authorRole || "Documentation Division",
        },
        tags: frontmatter.tags || ["NEPeD", "Nagaland"],
        content: {
          intro: introText,
          sections: hasHeadings
            ? builtSections
            : [
                {
                  heading: "Field Dispatch & Analysis",
                  body: body.split("\n\n").slice(1),
                },
              ],
          takeaways: frontmatter.takeaways?.length
            ? frontmatter.takeaways
            : takeawaysKey
              ? parseListItems(sections[takeawaysKey])
              : [
                  "Participatory community engineering.",
                  "Sustainable mountain resource utilization.",
                ],
        },
      };
    });

    return loadedBlogs.sort((a, b) => Number(a.id) - Number(b.id));
  } catch (err) {
    console.warn("Using fallback typed blog dataset:", err);
    return BLOG_POSTS;
  }
}

/**
 * Load all gallery album files dynamically from /content/gallery/*.md
 */
export function loadAllGalleryAlbums(): GalleryAlbum[] {
  try {
    const modules = import.meta.glob("/content/gallery/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    }) as Record<string, string>;

    const files = Object.values(modules);
    if (files.length === 0) {
      return GALLERY_ALBUMS;
    }

    const loadedAlbums: GalleryAlbum[] = files.map((content) => {
      const { frontmatter, body } = parseMarkdownWithFrontmatter(content);
      return {
        id: frontmatter.id || "1",
        slug: frontmatter.slug || `album-${frontmatter.id}`,
        title: frontmatter.title || "Field Exhibit",
        subtitle: frontmatter.subtitle || "",
        eventDate: frontmatter.eventDate || "2026",
        location: frontmatter.location || "Nagaland",
        district: frontmatter.district || "Nagaland",
        category: frontmatter.category || "Field Deployments",
        coverImage: frontmatter.coverImage || "/forest.webp",
        description: frontmatter.description || body,
        historicalContext: frontmatter.historicalContext || body,
        keyHighlights: frontmatter.keyHighlights || [],
        photos: frontmatter.photos || [],
        tags: frontmatter.tags || ["Field Log"],
      };
    });

    return loadedAlbums.sort((a, b) => Number(a.id) - Number(b.id));
  } catch (err) {
    console.warn("Using fallback typed gallery dataset:", err);
    return GALLERY_ALBUMS;
  }
}
