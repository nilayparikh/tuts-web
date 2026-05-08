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
  getAllBlogSeries,
  getBlogSubcategoryBySlugs,
  getBlogSubcategoryStaticParams,
  getPostsForSubcategory,
} from "@/data/blogs";
import { getVisibleBlogTags } from "@/app/blogs/shared";

type Params = {
  category: string;
  subcategory: string;
};

export function generateStaticParams(): Params[] {
  return getBlogSubcategoryStaticParams();
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
  const { category, subcategory } = await params;
  const summary = getBlogSubcategoryBySlugs(category, subcategory);

  if (!summary) {
    return {};
  }

  return {
    title: summary.title,
    description: summary.description,
    alternates: {
      canonical: summary.href,
    },
    openGraph: {
      title: summary.title,
      description: summary.description,
      type: "website",
      url: summary.href,
      images: [
        {
          url: summary.coverImage,
          alt: summary.coverAlt,
        },
      ],
    },
  };
}

export default async function BlogSubcategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, subcategory } = await params;
  const summary = getBlogSubcategoryBySlugs(category, subcategory);

  if (!summary) {
    notFound();
  }

  const posts = getPostsForSubcategory(summary.category, summary.slug);
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const traits = getAvailableTraits(posts);
  const series = getAllBlogSeries().filter((item) =>
    posts.some((post) => post.series?.slug === item.slug),
  );

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: summary.href }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`${summary.categoryTitle} · ${summary.postCount} post${summary.postCount === 1 ? "" : "s"}`}
        headline={summary.title}
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
          label: `Back to ${summary.categoryTitle}`,
          href: `/blogs/${summary.category}/`,
        }}
        imageUrl={summary.coverImage}
        imageAlt={summary.coverAlt}
        tags={
          Array.from(
            new Set(traits.length > 0 ? traits.slice(0, 5) : [summary.title]),
          )
        }
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
            <a href={`/blogs/${summary.category}/`}>{summary.categoryTitle}</a>
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

      {series.length > 0 ? (
        <>
          <SectionDivider label="Series" />

          <div className="blog-taxonomy-grid blog-taxonomy-grid-secondary">
            {series.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="blog-taxonomy-card-link"
              >
                <article className="blog-taxonomy-card">
                  <span className="blog-taxonomy-eyebrow">Series</span>
                  <h2 className="blog-taxonomy-title">{item.title}</h2>
                  <p className="blog-taxonomy-description">
                    {item.postCount} post{item.postCount === 1 ? "" : "s"} in
                    this editorial thread.
                  </p>
                </article>
              </a>
            ))}
          </div>
        </>
      ) : null}

      <SectionHeading
        eyebrow={summary.eyebrow}
        title={`Posts in ${summary.title}`}
        subtitle="Images stay 2:1. Links stay explicit. The track page stays structurally clean."
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
          No posts are published in this track yet.
        </Paragraph>
      )}

      <ShareButtons
        title={summary.title}
        description={summary.description}
        hashtags={toHashtags([
          summary.categoryTitle,
          summary.title,
          ...traits.slice(0, 2),
        ])}
      />

      <TutorialNav
        prev={{
          label: summary.categoryTitle,
          href: `/blogs/${summary.category}/`,
          description: "Back to the category landing page",
        }}
        next={
          featuredPost
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
