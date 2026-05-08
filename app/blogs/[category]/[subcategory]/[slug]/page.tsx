import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import {
  CodeBlock,
  CodePreview,
  DangerBox,
  InfoBox,
  NoteBox,
  ShareButtons,
  SuccessBox,
  TipBox,
  TutorialLayout,
  TutorialNav,
  WarningBox,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import {
  getAdjacentBlogPosts,
  getBlogPostBySlugs,
  getBlogPostStaticParams,
  getRecommendedBlogPosts,
  resolveBlogPostReferences,
  type BlogPost,
} from "@/data/blogs";
import { getVisibleBlogTags } from "@/app/blogs/shared";

type Params = {
  category: string;
  subcategory: string;
  slug: string;
};

type CodePreviewSegmentRecord = {
  code: string;
  explanation: string;
  language?: string;
  filename?: string;
};

export function generateStaticParams(): Params[] {
  return getBlogPostStaticParams();
}

export const dynamicParams = false;

function toHashtags(tags: string[]): string[] {
  return tags.map((tag) => tag.replace(/[^a-zA-Z0-9]/g, "")).filter(Boolean);
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function resolveContentHref(post: BlogPost, href?: string): string | undefined {
  if (!href) return undefined;
  if (href.startsWith("#") || href.startsWith("/")) return href;
  if (/^[a-z]+:/i.test(href)) return href;

  const [pathname, hash] = href.split("#");
  if (!pathname.endsWith(".md")) {
    return href;
  }

  const currentDir = path.posix.dirname(post.sourceRelativePath);
  const resolvedMarkdownPath = path.posix.normalize(
    path.posix.join(currentDir, pathname),
  );
  const postPath = resolvedMarkdownPath.replace(/\.md$/i, "");

  return `/blogs/${postPath}/${hash ? `#${hash}` : ""}`.replace(/\/+#/, "#");
}

function extractNodeText(node: any): string {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  if (!Array.isArray(node.children)) return "";

  return node.children.map((child: any) => extractNodeText(child)).join("");
}

function parseCodeFilename(meta?: string): string | undefined {
  if (!meta) return undefined;

  const keyedMatch = meta.match(
    /(?:file|filename|title)=['"]?([^'"\s]+)['"]?/i,
  );
  if (keyedMatch) {
    return keyedMatch[1];
  }

  const token = meta.split(/\s+/).find((part) => part.includes("."));
  return token;
}

function parseDirectiveRefs(value: unknown): string[] {
  if (typeof value !== "string") return [];
  return value
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCodePreviewSegments(value: unknown): CodePreviewSegmentRecord[] {
  if (typeof value !== "string") return [];

  try {
    const parsed = JSON.parse(value) as CodePreviewSegmentRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function remarkBlogDirectives() {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (
        node.type !== "containerDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "textDirective"
      ) {
        return;
      }

      const attributes = node.attributes ?? {};
      const data = node.data || (node.data = {});
      const title =
        typeof attributes.title === "string"
          ? attributes.title
          : typeof node.label === "string"
            ? node.label
            : undefined;

      if (
        ["info", "note", "tip", "success", "warning", "danger"].includes(
          node.name,
        )
      ) {
        data.hName = "blog-callout";
        data.hProperties = {
          variant: node.name,
          title,
        };
        return;
      }

      if (node.name === "related-posts") {
        data.hName = "blog-related-posts";
        data.hProperties = {
          title,
          refs: typeof attributes.refs === "string" ? attributes.refs : "",
        };
        node.children = [];
        return;
      }

      if (node.name === "code-preview" && Array.isArray(node.children)) {
        const segments: CodePreviewSegmentRecord[] = [];

        for (let index = 0; index < node.children.length; index += 1) {
          const child = node.children[index];
          if (child.type !== "code") {
            continue;
          }

          let explanation = "Code excerpt.";
          const nextNode = node.children[index + 1];
          if (nextNode && nextNode.type === "paragraph") {
            explanation = extractNodeText(nextNode).trim() || explanation;
            index += 1;
          }

          segments.push({
            code: child.value,
            explanation,
            language: child.lang ?? undefined,
            filename: parseCodeFilename(child.meta),
          });
        }

        data.hName = "blog-code-preview";
        data.hProperties = {
          title,
          description:
            typeof attributes.description === "string"
              ? attributes.description
              : undefined,
          segments: JSON.stringify(segments),
        };
        node.children = [];
      }
    });
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, subcategory, slug } = await params;
  const post = getBlogPostBySlugs(category, subcategory, slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [
      ...post.tags,
      ...post.traits,
      ...(post.series ? [post.series.label] : []),
    ],
    alternates: {
      canonical: post.href,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.href,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: post.authors.map((author) => author.name),
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
          alt: post.thumbnailAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, subcategory, slug } = await params;
  const post = getBlogPostBySlugs(category, subcategory, slug);

  if (!post) {
    notFound();
  }

  const adjacent = getAdjacentBlogPosts(post);
  const fallbackRelatedPosts = getRecommendedBlogPosts(post, 3);

  const markdownComponents = {
    a({ href, children }: AnchorHTMLAttributes<HTMLAnchorElement>) {
      const resolvedHref = resolveContentHref(post, href) ?? "#";

      return (
        <a
          href={resolvedHref}
          target={isExternalHref(resolvedHref) ? "_blank" : undefined}
          rel={isExternalHref(resolvedHref) ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
    code({ children, className }: any) {
      const code = String(children).replace(/\n$/, "");
      const languageMatch = /language-([\w-]+)/.exec(className ?? "");

      if (!languageMatch) {
        return <code className="blog-inline-code">{children}</code>;
      }

      return (
        <CodeBlock
          code={code}
          language={languageMatch[1]}
          showLineNumbers={code.includes("\n")}
        />
      );
    },
    img(props: ImgHTMLAttributes<HTMLImageElement>) {
      if (!props.src) return null;
      return (
        <img
          src={props.src}
          alt={props.alt ?? ""}
          className="blog-content-image"
        />
      );
    },
    table({ children }: any) {
      return (
        <div className="blog-table-wrap">
          <table>{children}</table>
        </div>
      );
    },
    "blog-callout"({ children, variant, title }: any) {
      const content = children as ReactNode;

      switch (variant) {
        case "note":
          return <NoteBox title={title}>{content}</NoteBox>;
        case "tip":
          return <TipBox title={title}>{content}</TipBox>;
        case "success":
          return <SuccessBox title={title}>{content}</SuccessBox>;
        case "warning":
          return <WarningBox title={title}>{content}</WarningBox>;
        case "danger":
          return <DangerBox title={title}>{content}</DangerBox>;
        default:
          return <InfoBox title={title}>{content}</InfoBox>;
      }
    },
    "blog-code-preview"({ title, description, segments }: any) {
      const parsedSegments = parseCodePreviewSegments(segments);
      if (parsedSegments.length === 0) {
        return null;
      }

      return (
        <div className="blog-rich-block">
          <CodePreview
            title={title}
            description={description}
            segments={parsedSegments}
          />
        </div>
      );
    },
    "blog-related-posts"({ title, refs }: any) {
      const references = parseDirectiveRefs(refs);
      const relatedPosts =
        references.length > 0
          ? resolveBlogPostReferences(references, post)
          : fallbackRelatedPosts;

      if (relatedPosts.length === 0) {
        return null;
      }

      return (
        <section className="blog-related-block">
          <header className="blog-related-header">
            <p className="blog-related-eyebrow">Related posts</p>
            <h2>{title ?? "Keep reading"}</h2>
          </header>

          <div className="blog-related-grid">
            {relatedPosts.map((relatedPost) => (
              <a
                key={relatedPost.href}
                href={relatedPost.href}
                className="blog-related-card"
              >
                <span className="blog-pill">
                  {relatedPost.subcategoryTitle}
                </span>
                <strong>{relatedPost.title}</strong>
                <span>{relatedPost.displayDate}</span>
              </a>
            ))}
          </div>
        </section>
      );
    },
  } as Components;

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: post.href }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <section className="blog-article-hero">
        <div className="blog-kicker-row">
          <a href={post.categoryHref} className="blog-pill blog-pill-link">
            {post.categoryTitle}
          </a>
          <a
            href={post.subcategoryHref}
            className="blog-pill blog-pill-secondary blog-pill-link"
          >
            {post.subcategoryTitle}
          </a>
          <span className="blog-feature-meta">
            Published {post.displayDate}
          </span>
          <span className="blog-feature-meta">{post.readingTime}</span>
        </div>

        <h1 className="blog-article-title">{post.title}</h1>
        <p className="blog-article-description">{post.description}</p>

        <div className="blog-article-actions">
          <a
            href={`/blogs/${post.category}/${post.subcategory}/`}
            className="blog-cta-link"
          >
            Back to {post.subcategoryTitle}
          </a>
          <a
            href="/blogs/"
            className="blog-pill blog-pill-ghost blog-pill-link"
          >
            All blogs
          </a>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="tf-breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li>
            <a href="/blogs/">Blogs</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li>
            <a href={`/blogs/${post.category}/`}>{post.categoryTitle}</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li>
            <a href={`/blogs/${post.category}/${post.subcategory}/`}>
              {post.subcategoryTitle}
            </a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>

      <section className="blog-context-shell" aria-label="Article taxonomy">
        <div className="blog-link-cluster">
          <a href={post.categoryHref} className="blog-pill blog-pill-link">
            {post.categoryTitle}
          </a>
          <a
            href={post.subcategoryHref}
            className="blog-pill blog-pill-secondary blog-pill-link"
          >
            {post.subcategoryTitle}
          </a>
          {post.series ? (
            <div className="blog-series-row blog-series-row-inline">
              <span className="blog-series-label">Series</span>
              <a href={post.series.href} className="blog-series-link">
                {post.series.label}
              </a>
            </div>
          ) : null}
          {getVisibleBlogTags(post, 6).map((tag) => (
            <a
              key={tag.slug}
              href={tag.href}
              className="blog-pill blog-pill-ghost blog-pill-link"
            >
              {tag.label}
            </a>
          ))}
        </div>

        <div className="blog-meta-facts">
          <span className="blog-feature-meta">
            Published {post.displayDate}
          </span>
          <span className="blog-feature-meta">{post.readingTime}</span>
        </div>
      </section>

      <figure className="blog-banner">
        <img src={post.thumbnail} alt={post.thumbnailAlt} />
      </figure>

      <section className="blog-meta-strip" aria-label="Article details">
        <div className="blog-meta-authors">
          {post.authors.map((author) => (
            <span key={author.name} className="blog-author-chip">
              {author.avatarUrl && (
                <img
                  src={author.avatarUrl}
                  alt={author.name}
                  className="blog-author-avatar"
                />
              )}

              {author.href ? (
                <a
                  href={author.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-author-link"
                >
                  {author.name}
                </a>
              ) : (
                <span className="blog-author-link">{author.name}</span>
              )}
            </span>
          ))}
        </div>

        <div className="blog-meta-facts">
          <span>Published {post.displayDate}</span>
          <span>{post.readingTime}</span>
        </div>
      </section>

      <article className="blog-prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkDirective, remarkBlogDirectives]}
          components={markdownComponents}
        >
          {post.markdown}
        </ReactMarkdown>
      </article>

      <ShareButtons
        title={post.title}
        description={post.description}
        hashtags={toHashtags([
          ...post.tags,
          ...post.traits,
          ...(post.series ? [post.series.label] : []),
        ])}
      />

      <TutorialNav
        prev={
          adjacent.prev
            ? {
                label: adjacent.prev.title,
                href: adjacent.prev.href,
                description: adjacent.prev.displayDate,
              }
            : {
                label: post.subcategoryTitle,
                href: `/blogs/${post.category}/${post.subcategory}/`,
                description: "Back to the track landing page",
              }
        }
        next={
          adjacent.next
            ? {
                label: adjacent.next.title,
                href: adjacent.next.href,
                description: adjacent.next.displayDate,
              }
            : undefined
        }
      />
    </TutorialLayout>
  );
}
