import { cache } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogAuthor = {
  name: string;
  href?: string;
  avatarUrl?: string;
  role?: string;
};

export type BlogLinkedTaxonomy = {
  label: string;
  slug: string;
  href: string;
};

type BlogFrontmatterAuthor = Partial<BlogAuthor>;

type BlogFrontmatter = {
  title?: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  series?: string;
  tags?: string[];
  traits?: string[];
  thumbnail?: string;
  thumbnailAlt?: string;
  ogImage?: string;
  authors?: BlogFrontmatterAuthor[];
  authorName?: string;
  authorUrl?: string;
  authorAvatarUrl?: string;
  relatedPosts?: string[];
  featured?: boolean;
};

type BlogCategoryDefinition = {
  title: string;
  description: string;
  eyebrow: string;
};

type BlogSubcategoryDefinition = {
  title: string;
  description: string;
  eyebrow: string;
  coverImage?: string;
  coverAlt?: string;
};

export type BlogCategoryStaticParams = {
  category: string;
};

export type BlogSubcategoryStaticParams = {
  category: string;
  subcategory: string;
};

export type BlogPostStaticParams = {
  category: string;
  subcategory: string;
  slug: string;
};

export type BlogSeriesStaticParams = {
  series: string;
};

export type BlogTagStaticParams = {
  tag: string;
};

export type BlogPost = {
  title: string;
  description: string;
  category: string;
  categoryTitle: string;
  categoryHref: string;
  subcategory: string;
  subcategoryTitle: string;
  subcategoryHref: string;
  slug: string;
  href: string;
  segments: [string, string, string];
  markdown: string;
  sourceRelativePath: string;
  publishedAt: string;
  updatedAt?: string;
  displayDate: string;
  readingTime: string;
  series?: BlogLinkedTaxonomy;
  tags: string[];
  tagLinks: BlogLinkedTaxonomy[];
  traits: string[];
  thumbnail: string;
  thumbnailAlt: string;
  ogImage: string;
  authors: BlogAuthor[];
  primaryAuthor: BlogAuthor;
  relatedPosts: string[];
  featured: boolean;
};

export type BlogSubcategorySummary = {
  category: string;
  categoryTitle: string;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  href: string;
  postCount: number;
  latestPost?: BlogPost;
  coverImage: string;
  coverAlt: string;
  traits: string[];
};

export type BlogCategorySummary = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  href: string;
  postCount: number;
  latestPost?: BlogPost;
  traits: string[];
  subcategories: BlogSubcategorySummary[];
};

export type BlogSeriesSummary = {
  slug: string;
  title: string;
  href: string;
  postCount: number;
  latestPost?: BlogPost;
};

export type BlogTagSummary = {
  slug: string;
  title: string;
  href: string;
  postCount: number;
  latestPost?: BlogPost;
};

const BLOGS_ROOT = path.join(process.cwd(), "data", "blogs");
const PUBLIC_ROOT = path.join(process.cwd(), "public");

const DEFAULT_AUTHOR: BlogAuthor = {
  name: "Nilay Parikh",
  href: "https://www.linkedin.com/in/niparikh",
  avatarUrl: "/brand/nilay_parikh.jpeg",
};

const CATEGORY_DEFINITIONS: Record<string, BlogCategoryDefinition> = {
  ai: {
    title: "AI",
    description:
      "Static essays on AI systems, agent workflows, and the engineering choices that make those systems trustworthy enough to ship.",
    eyebrow: "Artificial Intelligence",
  },
};

const SUBCATEGORY_DEFINITIONS: Record<string, BlogSubcategoryDefinition> = {
  "ai/agentic-data-engineering": {
    title: "Agentic Data Engineering",
    description:
      "Essays about bounded mutation loops, CleanLoop, and the control surfaces that turn self-improving data systems into auditable engineering systems.",
    eyebrow: "AI Systems · Data Workflows",
    coverImage: "/blogs/ai/agentic-data-engineering/cover.png",
    coverAlt: "Cover image for the Agentic Data Engineering writing track.",
  },
};

const UPPERCASE_LABELS = new Set(["ai", "api", "ml", "llm", "llms"]);

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function readRootCategories(): string[] {
  if (!fs.existsSync(BLOGS_ROOT)) return [];

  return fs
    .readdirSync(BLOGS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
}

function formatTaxonomyLabel(value: string): string {
  return value
    .split("-")
    .map((part) => {
      if (UPPERCASE_LABELS.has(part)) {
        return part.toUpperCase();
      }

      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    })
    .join(" ");
}

function humanizeSlug(value: string): string {
  return formatTaxonomyLabel(value);
}

function createTaxonomySlug(value: string): string {
  const normalized = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();

  return normalized || "item";
}

function buildCategoryHref(category: string): string {
  return `/blogs/${category}/`;
}

function buildSubcategoryHref(category: string, subcategory: string): string {
  return `/blogs/${category}/${subcategory}/`;
}

function buildSeriesLink(label: string): BlogLinkedTaxonomy {
  const slug = createTaxonomySlug(label);
  return {
    label,
    slug,
    href: `/blogs/series/${slug}/`,
  };
}

function buildTagLink(label: string): BlogLinkedTaxonomy {
  const slug = createTaxonomySlug(label);
  return {
    label,
    slug,
    href: `/blogs/tags/${slug}/`,
  };
}

function stripInlineMarkdown(value: string): string {
  return value
    .replace(/!\[[^\]]*\]\(([^)]+)\)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*_~>#]/g, "")
    .replace(/\|/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function removeLeadingHeading(markdown: string): string {
  const trimmed = markdown.trimStart();
  if (!trimmed.startsWith("# ")) return markdown.trim();

  const [, ...rest] = trimmed.split(/\r?\n/);
  return rest.join("\n").trimStart();
}

function extractTitle(markdown: string, fallbackSlug: string): string {
  const headingMatch = markdown.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return stripInlineMarkdown(headingMatch[1]);
  }

  return humanizeSlug(fallbackSlug);
}

function extractDescription(markdown: string, fallbackTitle: string): string {
  const codeStripped = markdown.replace(/```[\s\S]*?```/g, "").trim();
  const sections = codeStripped.split(/\r?\n\r?\n/);

  for (const section of sections) {
    const normalized = section.trim();
    if (!normalized) continue;
    if (normalized.startsWith("#")) continue;
    if (normalized.startsWith("---")) continue;
    if (normalized.startsWith("|")) continue;
    if (normalized.startsWith("- ")) continue;
    if (/^\d+\.\s/.test(normalized)) continue;

    const plainText = stripInlineMarkdown(normalized);
    if (plainText.length > 40) {
      return plainText;
    }
  }

  return `Read ${fallbackTitle} on LocalM Tuts.`;
}

function countWords(markdown: string): number {
  const plain = stripInlineMarkdown(markdown.replace(/```[\s\S]*?```/g, " "));
  if (!plain) return 0;
  return plain.split(/\s+/).filter(Boolean).length;
}

function formatReadingTime(markdown: string): string {
  const words = countWords(markdown);
  const minutes = Math.max(1, Math.ceil(words / 225));
  return `${minutes} min read`;
}

function normalizeDate(value: string | undefined): string | undefined {
  if (!value) return undefined;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

function dedupe(values: Array<string | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values) {
    if (!value) continue;
    const normalized = value.trim();
    if (!normalized) continue;
    if (seen.has(normalized)) continue;

    seen.add(normalized);
    result.push(normalized);
  }

  return result;
}

function dedupeTaxonomies(values: BlogLinkedTaxonomy[]): BlogLinkedTaxonomy[] {
  const seen = new Set<string>();
  const result: BlogLinkedTaxonomy[] = [];

  for (const value of values) {
    if (seen.has(value.slug)) continue;
    seen.add(value.slug);
    result.push(value);
  }

  return result;
}

function normalizeStringArray(values: unknown): string[] {
  if (!Array.isArray(values)) return [];

  return dedupe(
    values.map((value) => (typeof value === "string" ? value : undefined)),
  );
}

function resolveCategoryDefinition(category: string): BlogCategoryDefinition {
  return (
    CATEGORY_DEFINITIONS[category] ?? {
      title: formatTaxonomyLabel(category),
      description: `Published writing for the ${formatTaxonomyLabel(category)} category.`,
      eyebrow: "Published Essays",
    }
  );
}

function resolveSubcategoryDefinition(
  category: string,
  subcategory: string,
): BlogSubcategoryDefinition {
  return (
    SUBCATEGORY_DEFINITIONS[`${category}/${subcategory}`] ?? {
      title: formatTaxonomyLabel(subcategory),
      description: `Published writing for ${formatTaxonomyLabel(subcategory)} under ${formatTaxonomyLabel(category)}.`,
      eyebrow: `${formatTaxonomyLabel(category)} · Writing Track`,
    }
  );
}

function getFallbackThumbnail(category: string, subcategory: string): string {
  const candidateSegments = ["blogs", category, subcategory, "cover.png"];
  const diskPath = path.join(PUBLIC_ROOT, ...candidateSegments);
  if (fs.existsSync(diskPath)) {
    return `/${candidateSegments.join("/")}`;
  }

  return "/brand/og-image-template-1200x630.png";
}

function parseAuthors(frontmatter: BlogFrontmatter): BlogAuthor[] {
  const authorsFromArray = Array.isArray(frontmatter.authors)
    ? frontmatter.authors
        .map((author) => {
          if (!author || typeof author.name !== "string") return undefined;

          return {
            name: author.name.trim(),
            href: typeof author.href === "string" ? author.href : undefined,
            avatarUrl:
              typeof author.avatarUrl === "string"
                ? author.avatarUrl
                : undefined,
            role: typeof author.role === "string" ? author.role : undefined,
          } satisfies BlogAuthor;
        })
        .filter((author): author is NonNullable<typeof author> =>
          Boolean(author?.name),
        )
    : [];

  if (authorsFromArray.length > 0) {
    return authorsFromArray;
  }

  if (frontmatter.authorName) {
    return [
      {
        name: frontmatter.authorName,
        href: frontmatter.authorUrl,
        avatarUrl: frontmatter.authorAvatarUrl,
      },
    ];
  }

  return [DEFAULT_AUTHOR];
}

function sortPosts(posts: BlogPost[]): BlogPost[] {
  return posts.toSorted((left, right) => {
    const byDate = right.publishedAt.localeCompare(left.publishedAt);
    if (byDate !== 0) return byDate;

    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    return left.href.localeCompare(right.href);
  });
}

function readMarkdownFile(
  filePath: string,
  category: string,
  subcategory: string,
): BlogPost {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContents);
  const frontmatter = parsed.data as BlogFrontmatter;
  const slug = path.basename(filePath, path.extname(filePath));
  const sourceRelativePath = `${category}/${subcategory}/${slug}.md`;
  const stat = fs.statSync(filePath);
  const categoryMeta = resolveCategoryDefinition(category);
  const subcategoryMeta = resolveSubcategoryDefinition(category, subcategory);
  const title = frontmatter.title ?? extractTitle(parsed.content, slug);
  const body = removeLeadingHeading(parsed.content);
  const description =
    frontmatter.description ?? extractDescription(body, title);
  const publishedAt =
    normalizeDate(frontmatter.publishedAt) ??
    normalizeDate(stat.mtime.toISOString()) ??
    new Date().toISOString();
  const updatedAt = normalizeDate(frontmatter.updatedAt);
  const rawSeries = frontmatter.series?.trim();
  const series = rawSeries ? buildSeriesLink(rawSeries) : undefined;
  const tags = normalizeStringArray(frontmatter.tags);
  const tagLinks = dedupeTaxonomies(tags.map((tag) => buildTagLink(tag)));
  const traits = normalizeStringArray(frontmatter.traits);
  const authors = parseAuthors(frontmatter);
  const thumbnail =
    frontmatter.thumbnail ??
    subcategoryMeta.coverImage ??
    getFallbackThumbnail(category, subcategory);
  const thumbnailAlt =
    frontmatter.thumbnailAlt ??
    subcategoryMeta.coverAlt ??
    `${title} cover art for LocalM Tuts.`;
  const categoryHref = buildCategoryHref(category);
  const subcategoryHref = buildSubcategoryHref(category, subcategory);

  return {
    title,
    description,
    category,
    categoryTitle: categoryMeta.title,
    categoryHref,
    subcategory,
    subcategoryTitle: subcategoryMeta.title,
    subcategoryHref,
    slug,
    href: `${subcategoryHref}${slug}/`,
    segments: [category, subcategory, slug],
    markdown: body,
    sourceRelativePath,
    publishedAt,
    updatedAt,
    displayDate: formatDate.format(new Date(publishedAt)),
    readingTime: formatReadingTime(body),
    series,
    tags,
    tagLinks,
    traits,
    thumbnail,
    thumbnailAlt,
    ogImage: frontmatter.ogImage ?? thumbnail,
    authors,
    primaryAuthor: authors[0],
    relatedPosts: normalizeStringArray(frontmatter.relatedPosts),
    featured: Boolean(frontmatter.featured),
  };
}

function readCategoryPosts(category: string): BlogPost[] {
  const categoryPath = path.join(BLOGS_ROOT, category);
  if (!fs.existsSync(categoryPath)) return [];

  const posts: BlogPost[] = [];
  const entries = fs
    .readdirSync(categoryPath, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    const entryPath = path.join(categoryPath, entry.name);

    if (entry.isFile() && entry.name.endsWith(".md")) {
      throw new Error(
        `Blog posts must live under category/subcategory folders. Unexpected file: ${path.join(category, entry.name)}`,
      );
    }

    if (!entry.isDirectory()) {
      continue;
    }

    const subcategory = entry.name;
    const subcategoryEntries = fs
      .readdirSync(entryPath, { withFileTypes: true })
      .sort((left, right) => left.name.localeCompare(right.name));

    for (const subcategoryEntry of subcategoryEntries) {
      if (subcategoryEntry.isDirectory()) {
        throw new Error(
          `Only category and subcategory folders are supported in data/blogs. Unexpected nested folder: ${path.join(category, subcategory, subcategoryEntry.name)}`,
        );
      }

      if (!subcategoryEntry.name.endsWith(".md")) {
        continue;
      }

      posts.push(
        readMarkdownFile(
          path.join(entryPath, subcategoryEntry.name),
          category,
          subcategory,
        ),
      );
    }
  }

  return posts;
}

export const getAllBlogPosts = cache((): BlogPost[] => {
  const posts = readRootCategories().flatMap((category) =>
    readCategoryPosts(category),
  );

  return sortPosts(posts);
});

export const getAllBlogSubcategories = cache((): BlogSubcategorySummary[] => {
  const posts = getAllBlogPosts();
  const grouped = new Map<string, BlogSubcategorySummary>();

  for (const post of posts) {
    const key = `${post.category}/${post.subcategory}`;
    const existing = grouped.get(key);
    if (existing) {
      existing.postCount += 1;
      existing.traits = dedupe([...existing.traits, ...post.traits]);
      if (!existing.latestPost) {
        existing.latestPost = post;
      }
      continue;
    }

    const definition = resolveSubcategoryDefinition(
      post.category,
      post.subcategory,
    );
    grouped.set(key, {
      category: post.category,
      categoryTitle: post.categoryTitle,
      slug: post.subcategory,
      title: definition.title,
      description: definition.description,
      eyebrow: definition.eyebrow,
      href: post.subcategoryHref,
      postCount: 1,
      latestPost: post,
      coverImage:
        definition.coverImage ??
        getFallbackThumbnail(post.category, post.subcategory),
      coverAlt:
        definition.coverAlt ?? `${definition.title} cover art for LocalM Tuts.`,
      traits: [...post.traits],
    });
  }

  return Array.from(grouped.values()).toSorted((left, right) => {
    const leftDate = left.latestPost?.publishedAt ?? "";
    const rightDate = right.latestPost?.publishedAt ?? "";
    const byDate = rightDate.localeCompare(leftDate);
    if (byDate !== 0) return byDate;
    return left.href.localeCompare(right.href);
  });
});

export const getAllBlogCategories = cache((): BlogCategorySummary[] => {
  const subcategories = getAllBlogSubcategories();
  const grouped = new Map<string, BlogCategorySummary>();

  for (const subcategory of subcategories) {
    const existing = grouped.get(subcategory.category);
    if (existing) {
      existing.postCount += subcategory.postCount;
      existing.subcategories.push(subcategory);
      existing.traits = dedupe([...existing.traits, ...subcategory.traits]);

      const existingDate = existing.latestPost?.publishedAt ?? "";
      const candidateDate = subcategory.latestPost?.publishedAt ?? "";
      if (candidateDate > existingDate) {
        existing.latestPost = subcategory.latestPost;
      }
      continue;
    }

    const definition = resolveCategoryDefinition(subcategory.category);
    grouped.set(subcategory.category, {
      slug: subcategory.category,
      title: definition.title,
      description: definition.description,
      eyebrow: definition.eyebrow,
      href: buildCategoryHref(subcategory.category),
      postCount: subcategory.postCount,
      latestPost: subcategory.latestPost,
      traits: [...subcategory.traits],
      subcategories: [subcategory],
    });
  }

  return Array.from(grouped.values()).toSorted((left, right) => {
    const leftDate = left.latestPost?.publishedAt ?? "";
    const rightDate = right.latestPost?.publishedAt ?? "";
    const byDate = rightDate.localeCompare(leftDate);
    if (byDate !== 0) return byDate;
    return left.href.localeCompare(right.href);
  });
});

export const getAllBlogSeries = cache((): BlogSeriesSummary[] => {
  const grouped = new Map<string, BlogSeriesSummary>();

  for (const post of getAllBlogPosts()) {
    if (!post.series) continue;

    const existing = grouped.get(post.series.slug);
    if (existing) {
      existing.postCount += 1;
      if ((post.publishedAt ?? "") > (existing.latestPost?.publishedAt ?? "")) {
        existing.latestPost = post;
      }
      continue;
    }

    grouped.set(post.series.slug, {
      slug: post.series.slug,
      title: post.series.label,
      href: post.series.href,
      postCount: 1,
      latestPost: post,
    });
  }

  return Array.from(grouped.values()).toSorted((left, right) => {
    const leftDate = left.latestPost?.publishedAt ?? "";
    const rightDate = right.latestPost?.publishedAt ?? "";
    const byDate = rightDate.localeCompare(leftDate);
    if (byDate !== 0) return byDate;
    return left.title.localeCompare(right.title);
  });
});

export const getAllBlogTags = cache((): BlogTagSummary[] => {
  const grouped = new Map<string, BlogTagSummary>();

  for (const post of getAllBlogPosts()) {
    for (const tag of post.tagLinks) {
      const existing = grouped.get(tag.slug);
      if (existing) {
        existing.postCount += 1;
        if (
          (post.publishedAt ?? "") > (existing.latestPost?.publishedAt ?? "")
        ) {
          existing.latestPost = post;
        }
        continue;
      }

      grouped.set(tag.slug, {
        slug: tag.slug,
        title: tag.label,
        href: tag.href,
        postCount: 1,
        latestPost: post,
      });
    }
  }

  return Array.from(grouped.values()).toSorted((left, right) => {
    const leftDate = left.latestPost?.publishedAt ?? "";
    const rightDate = right.latestPost?.publishedAt ?? "";
    const byDate = rightDate.localeCompare(leftDate);
    if (byDate !== 0) return byDate;
    return left.title.localeCompare(right.title);
  });
});

export function getBlogCategoryBySlug(
  category: string,
): BlogCategorySummary | undefined {
  const normalized = category.toLowerCase();
  return getAllBlogCategories().find((item) => item.slug === normalized);
}

export function getBlogSubcategoryBySlugs(
  category: string,
  subcategory: string,
): BlogSubcategorySummary | undefined {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubcategory = subcategory.toLowerCase();

  return getAllBlogSubcategories().find(
    (item) =>
      item.category === normalizedCategory &&
      item.slug === normalizedSubcategory,
  );
}

export function getBlogSeriesBySlug(
  series: string,
): BlogSeriesSummary | undefined {
  const normalized = createTaxonomySlug(series);
  return getAllBlogSeries().find((item) => item.slug === normalized);
}

export function getBlogTagBySlug(tag: string): BlogTagSummary | undefined {
  const normalized = createTaxonomySlug(tag);
  return getAllBlogTags().find((item) => item.slug === normalized);
}

export function getPostsForCategory(category: string): BlogPost[] {
  const normalized = category.toLowerCase();
  return getAllBlogPosts().filter((post) => post.category === normalized);
}

export function getPostsForSubcategory(
  category: string,
  subcategory: string,
): BlogPost[] {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubcategory = subcategory.toLowerCase();

  return getAllBlogPosts().filter(
    (post) =>
      post.category === normalizedCategory &&
      post.subcategory === normalizedSubcategory,
  );
}

export function getPostsForSeries(series: string): BlogPost[] {
  const normalized = createTaxonomySlug(series);
  return getAllBlogPosts().filter((post) => post.series?.slug === normalized);
}

export function getPostsForTag(tag: string): BlogPost[] {
  const normalized = createTaxonomySlug(tag);
  return getAllBlogPosts().filter((post) =>
    post.tagLinks.some((item) => item.slug === normalized),
  );
}

export function getAvailableTraits(posts: BlogPost[]): string[] {
  return dedupe(posts.flatMap((post) => post.traits));
}

export function getBlogCategoryStaticParams(): BlogCategoryStaticParams[] {
  return getAllBlogCategories().map((category) => ({
    category: category.slug,
  }));
}

export function getBlogSubcategoryStaticParams(): BlogSubcategoryStaticParams[] {
  return getAllBlogSubcategories().map((subcategory) => ({
    category: subcategory.category,
    subcategory: subcategory.slug,
  }));
}

export function getBlogPostStaticParams(): BlogPostStaticParams[] {
  return getAllBlogPosts().map((post) => ({
    category: post.category,
    subcategory: post.subcategory,
    slug: post.slug,
  }));
}

export function getBlogSeriesStaticParams(): BlogSeriesStaticParams[] {
  return getAllBlogSeries().map((series) => ({
    series: series.slug,
  }));
}

export function getBlogTagStaticParams(): BlogTagStaticParams[] {
  return getAllBlogTags().map((tag) => ({
    tag: tag.slug,
  }));
}

export function getBlogPostBySlugs(
  category: string,
  subcategory: string,
  slug: string,
): BlogPost | undefined {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubcategory = subcategory.toLowerCase();
  const normalizedSlug = slug.toLowerCase();

  return getAllBlogPosts().find(
    (post) =>
      post.category === normalizedCategory &&
      post.subcategory === normalizedSubcategory &&
      post.slug === normalizedSlug,
  );
}

export function getAdjacentBlogPosts(currentPost: BlogPost): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const posts = getPostsForSubcategory(
    currentPost.category,
    currentPost.subcategory,
  );
  const currentIndex = posts.findIndex(
    (post) => post.href === currentPost.href,
  );

  if (currentIndex === -1) {
    return {};
  }

  return {
    prev: posts[currentIndex + 1],
    next: posts[currentIndex - 1],
  };
}

function resolveBlogReference(
  reference: string,
  currentPost?: BlogPost,
): BlogPost | undefined {
  const normalizedReference = reference.trim().replace(/\.md$/i, "");

  if (!normalizedReference) {
    return undefined;
  }

  const directMatch = getAllBlogPosts().find(
    (post) => post.segments.join("/") === normalizedReference,
  );
  if (directMatch) {
    return directMatch;
  }

  if (currentPost) {
    const localMatch = getPostsForSubcategory(
      currentPost.category,
      currentPost.subcategory,
    ).find((post) => post.slug === normalizedReference);
    if (localMatch) {
      return localMatch;
    }
  }

  return getAllBlogPosts().find((post) => post.slug === normalizedReference);
}

export function resolveBlogPostReferences(
  references: string[],
  currentPost?: BlogPost,
): BlogPost[] {
  const resolved = references
    .map((reference) => resolveBlogReference(reference, currentPost))
    .filter((post): post is BlogPost => Boolean(post));

  const deduped = new Map<string, BlogPost>();
  for (const post of resolved) {
    if (currentPost && post.href === currentPost.href) continue;
    deduped.set(post.href, post);
  }

  return Array.from(deduped.values());
}

export function getRecommendedBlogPosts(
  currentPost: BlogPost,
  maxPosts = 3,
): BlogPost[] {
  if (currentPost.relatedPosts.length > 0) {
    return resolveBlogPostReferences(
      currentPost.relatedPosts,
      currentPost,
    ).slice(0, maxPosts);
  }

  const candidates = getAllBlogPosts()
    .filter((candidate) => candidate.href !== currentPost.href)
    .map((candidate) => {
      const sharedTraits = candidate.traits.filter((trait) =>
        currentPost.traits.includes(trait),
      ).length;
      const sharedTags = candidate.tagLinks.filter((tag) =>
        currentPost.tagLinks.some((currentTag) => currentTag.slug === tag.slug),
      ).length;
      const sameSeries =
        candidate.series?.slug !== undefined &&
        candidate.series.slug === currentPost.series?.slug;
      const sameSubcategory =
        candidate.category === currentPost.category &&
        candidate.subcategory === currentPost.subcategory;
      const sameCategory = candidate.category === currentPost.category;
      const score =
        (sameSeries ? 12 : 0) +
        sharedTraits * 6 +
        sharedTags * 4 +
        (sameSubcategory ? 5 : 0) +
        (sameCategory ? 2 : 0) +
        (candidate.featured ? 1 : 0);

      return { candidate, score };
    })
    .filter((entry) => entry.score > 0)
    .toSorted((left, right) => {
      const byScore = right.score - left.score;
      if (byScore !== 0) return byScore;
      return right.candidate.publishedAt.localeCompare(
        left.candidate.publishedAt,
      );
    });

  return candidates.slice(0, maxPosts).map((entry) => entry.candidate);
}
