import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HeroSection,
  Paragraph,
  SectionDivider,
  SectionHeading,
  ShareButtons,
  TutorialLayout,
  TutorialNav,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import {
  getAvailableTraits,
  getBlogCategoryBySlug,
  getBlogCategoryStaticParams,
  getPostsForCategory,
} from "@/data/blogs";
import { getVisibleBlogTags } from "@/app/blogs/shared";

type Params = {
  category: string;
};

export function generateStaticParams(): Params[] {
  return getBlogCategoryStaticParams();
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
  const { category } = await params;
  const summary = getBlogCategoryBySlug(category);

  if (!summary) {
    return {};
  }

  return {
    title: `${summary.title} Blogs`,
    description: summary.description,
    alternates: {
      canonical: summary.href,
    },
    openGraph: {
      title: `${summary.title} Blogs`,
      description: summary.description,
      type: "website",
      url: summary.href,
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const summary = getBlogCategoryBySlug(category);

  if (!summary) {
    notFound();
  }

  const posts = getPostsForCategory(summary.slug);
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const traits = getAvailableTraits(posts).slice(0, 5);

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: summary.href }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`${summary.postCount} post${summary.postCount === 1 ? "" : "s"} · ${summary.subcategories.length} track${summary.subcategories.length === 1 ? "" : "s"}`}
        headline={`${summary.title} essays`}
        subheading={summary.description}
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
          new Set(
            traits.length > 0
              ? traits
              : summary.subcategories.map((item) => item.title),
          ),
        )}
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
          <li aria-current="page">{summary.title}</li>
        </ol>
      </nav>

      {featuredPost ? (
        <article className="blog-feature-card blog-feature-card-compact">
          <a
            href={featuredPost.href}
            className="blog-feature-media-link"
            aria-label={`Open ${featuredPost.title}`}
          >
            <div className="blog-feature-media">
              <img
                src={featuredPost.thumbnail}
                alt={featuredPost.thumbnailAlt}
              />
            </div>
          </a>

          <div className="blog-feature-body">
            <div className="blog-kicker-row">
              <a
                href={featuredPost.categoryHref}
                className="blog-pill blog-pill-link"
              >
                {featuredPost.categoryTitle}
              </a>
              <a
                href={featuredPost.subcategoryHref}
                className="blog-pill blog-pill-secondary blog-pill-link"
              >
                {featuredPost.subcategoryTitle}
              </a>
              <span className="blog-feature-meta">
                {featuredPost.displayDate}
              </span>
              <span className="blog-feature-meta">
                {featuredPost.readingTime}
              </span>
            </div>

            <h2 className="blog-feature-title">
              <a href={featuredPost.href} className="blog-title-link">
                {featuredPost.title}
              </a>
            </h2>
            <p className="blog-feature-description">
              {featuredPost.description}
            </p>

            {featuredPost.series ? (
              <div className="blog-series-row">
                <span className="blog-series-label">Series</span>
                <a href={featuredPost.series.href} className="blog-series-link">
                  {featuredPost.series.label}
                </a>
              </div>
            ) : null}

            <div className="blog-tag-row">
              {getVisibleBlogTags(featuredPost, 2).map((tag) => (
                <a
                  key={tag.slug}
                  href={tag.href}
                  className="blog-pill blog-pill-ghost blog-pill-link"
                >
                  {tag.label}
                </a>
              ))}
            </div>

            <a href={featuredPost.href} className="blog-cta-link">
              Read article
            </a>
          </div>
        </article>
      ) : null}

      <SectionDivider label="Tracks" />

      <SectionHeading
        eyebrow={summary.eyebrow}
        title={`Explore ${summary.title} tracks`}
        subtitle="Tracks stay structural. Post cards handle the actual article navigation targets."
      />

      <div className="blog-taxonomy-grid blog-taxonomy-grid-secondary">
        {summary.subcategories.map((subcategory) => (
          <a
            key={subcategory.href}
            href={subcategory.href}
            className="blog-taxonomy-card-link"
          >
            <article className="blog-taxonomy-card blog-taxonomy-card-track">
              <div className="blog-kicker-row">
                <span className="blog-pill">{subcategory.title}</span>
                <span className="blog-pill blog-pill-secondary">
                  {subcategory.postCount} posts
                </span>
              </div>
              <h2 className="blog-taxonomy-title">{subcategory.title}</h2>
              <p className="blog-taxonomy-description">
                {subcategory.description}
              </p>
            </article>
          </a>
        ))}
      </div>

      <SectionHeading
        eyebrow="Published Essays"
        title={`Posts in ${summary.title}`}
        subtitle="Category cards no longer collapse every interaction into one giant anchor."
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

                {post.series ? (
                  <div className="blog-series-row">
                    <span className="blog-series-label">Series</span>
                    <a href={post.series.href} className="blog-series-link">
                      {post.series.label}
                    </a>
                  </div>
                ) : null}

                <div className="blog-card-footer">
                  <div className="blog-tag-row">
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
          No posts are published in this category yet.
        </Paragraph>
      )}

      <ShareButtons
        title={`${summary.title} Blogs`}
        description={summary.description}
        hashtags={toHashtags([summary.title, ...traits.slice(0, 3)])}
      />

      <TutorialNav
        prev={{
          label: "All blogs",
          href: "/blogs/",
          description: "Back to the full blog index",
        }}
        next={
          summary.subcategories[0]
            ? {
                label: summary.subcategories[0].title,
                href: summary.subcategories[0].href,
                description: "Open the first track landing page",
              }
            : featuredPost
              ? {
                  label: featuredPost.title,
                  href: featuredPost.href,
                  description: "Read the latest post",
                }
              : undefined
        }
      />
    </TutorialLayout>
  );
}
