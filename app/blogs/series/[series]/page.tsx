import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HeroSection,
  Paragraph,
  SectionHeading,
  ShareButtons,
  TutorialLayout,
  TutorialNav,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import {
  getBlogSeriesBySlug,
  getBlogSeriesStaticParams,
  getPostsForSeries,
} from "@/data/blogs";
import { getVisibleBlogTags } from "@/app/blogs/shared";

type Params = {
  series: string;
};

export function generateStaticParams(): Params[] {
  return getBlogSeriesStaticParams();
}

export const dynamicParams = false;

function toHashtags(tags: string[]): string[] {
  return tags.map((tag) => tag.replace(/[^a-zA-Z0-9]/g, "")).filter(Boolean);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { series } = await params;
  const summary = getBlogSeriesBySlug(series);

  if (!summary) {
    return {};
  }

  return {
    title: summary.title,
    description: `${summary.postCount} static post${summary.postCount === 1 ? "" : "s"} in the ${summary.title} series.`,
    alternates: {
      canonical: summary.href,
    },
    openGraph: {
      title: summary.title,
      description: `${summary.postCount} static post${summary.postCount === 1 ? "" : "s"} in the ${summary.title} series.`,
      type: "website",
      url: summary.href,
    },
  };
}

export default async function BlogSeriesPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { series } = await params;
  const summary = getBlogSeriesBySlug(series);

  if (!summary) {
    notFound();
  }

  const posts = getPostsForSeries(summary.slug);
  const featuredPost = summary.latestPost ?? posts[0];

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: summary.href }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`Series · ${summary.postCount} post${summary.postCount === 1 ? "" : "s"}`}
        headline={summary.title}
        subheading="A connected editorial thread across multiple static posts, without forcing series into the core route hierarchy."
        primaryAction={
          featuredPost
            ? {
                label: "Read the latest post",
                href: featuredPost.href,
              }
            : undefined
        }
        secondaryAction={{
          label: "All blogs",
          href: "/blogs/",
        }}
        tags={Array.from(
          new Set(posts.map((post) => post.subcategoryTitle)),
        ).slice(0, 4)}
      />

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
            <a href="/blogs/series/">Series</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li aria-current="page">{summary.title}</li>
        </ol>
      </nav>

      <SectionHeading
        eyebrow="Series Posts"
        title={`Posts in ${summary.title}`}
        subtitle="Series labels are linkable on every card and on every article page."
      />

      {posts.length > 0 ? (
        <div className="blog-card-grid" role="list">
          {posts.map((post) => (
            <article key={post.href} className="blog-card" role="listitem">
              <a
                href={post.href}
                className="blog-card-media-link"
                aria-label={`Open ${post.title}`}
              >
                <div className="blog-card-media">
                  <img
                    src={post.thumbnail}
                    alt={post.thumbnailAlt}
                    className="blog-card-image"
                  />
                </div>
              </a>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <a
                    href={post.categoryHref}
                    className="blog-pill blog-pill-link"
                  >
                    {post.categoryTitle}
                  </a>
                  <a
                    href={post.subcategoryHref}
                    className="blog-pill blog-pill-secondary blog-pill-link"
                  >
                    {post.subcategoryTitle}
                  </a>
                </div>

                <div className="blog-meta-facts">
                  <span>{post.displayDate}</span>
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="blog-card-title">
                  <a href={post.href} className="blog-title-link">
                    {post.title}
                  </a>
                </h2>
                <p className="blog-card-description">{post.description}</p>

                <div className="blog-card-footer">
                  <div className="blog-tag-row">
                    <a
                      href={summary.href}
                      className="blog-pill blog-pill-ghost blog-pill-link"
                    >
                      {summary.title}
                    </a>
                    {getVisibleBlogTags(post, 2).map((tag) => (
                      <a
                        key={tag.slug}
                        href={tag.href}
                        className="blog-pill blog-pill-ghost blog-pill-link"
                      >
                        {tag.label}
                      </a>
                    ))}
                  </div>

                  <a href={post.href} className="blog-cta-link">
                    Read article
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <Paragraph lead center>
          No posts are published in this series yet.
        </Paragraph>
      )}

      <ShareButtons
        title={summary.title}
        description={`${summary.postCount} static post${summary.postCount === 1 ? "" : "s"} in the ${summary.title} series.`}
        hashtags={toHashtags([summary.title, "Blogs", "Series"])}
      />

      <TutorialNav
        prev={{
          label: "All blogs",
          href: "/blogs/",
          description: "Back to the full blog index",
        }}
        next={
          featuredPost
            ? {
                label: featuredPost.title,
                href: featuredPost.href,
                description: "Read the latest post in the series",
              }
            : undefined
        }
      />
    </TutorialLayout>
  );
}
