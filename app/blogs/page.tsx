import type { Metadata } from "next";
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
  getAllBlogCategories,
  getAllBlogPosts,
  getAllBlogSeries,
  getAllBlogSubcategories,
  getAllBlogTags,
  getAvailableTraits,
} from "@/data/blogs";
import { getVisibleBlogTags } from "./shared";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Static blog posts on AI systems, agent workflows, and production engineering from LocalM Tuts.",
  alternates: {
    canonical: "/blogs/",
  },
  openGraph: {
    title: "LocalM Tuts Blogs",
    description:
      "Static blog posts on AI systems, agent workflows, and production engineering from LocalM Tuts.",
    type: "website",
    url: "/blogs/",
  },
};

function toHashtags(tags: string[]): string[] {
  return tags.map((tag) => tag.replace(/[^a-zA-Z0-9]/g, "")).filter(Boolean);
}

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const categories = getAllBlogCategories();
  const subcategories = getAllBlogSubcategories();
  const series = getAllBlogSeries();
  const tags = getAllBlogTags();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const spotlightTraits = getAvailableTraits(posts).slice(0, 5);
  const shareTags = toHashtags([
    ...spotlightTraits,
    ...categories.map((category) => category.title),
  ]).slice(0, 6);

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/blogs/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`${posts.length} post${posts.length === 1 ? "" : "s"} · ${categories.length} categor${categories.length === 1 ? "y" : "ies"} · ${subcategories.length} track${subcategories.length === 1 ? "" : "s"}`}
        headline="Static blogs for AI engineers who ship."
        subheading="Editorial posts that publish as static HTML, stay fast to crawl, and sit cleanly inside the same LocalM tutorial framework."
        primaryAction={
          featuredPost
            ? {
                label: "Read the feature",
                href: featuredPost.href,
              }
            : undefined
        }
        secondaryAction={
          categories[0]
            ? {
                label: `Browse ${categories[0].title}`,
                href: categories[0].href,
              }
            : undefined
        }
        tags={Array.from(
          new Set(
            spotlightTraits.length > 0
              ? spotlightTraits
              : categories.map((category) => category.title),
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
          <li aria-current="page">Blogs</li>
        </ol>
      </nav>

      {featuredPost ? (
        <article className="blog-feature-card">
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
              {getVisibleBlogTags(featuredPost, 3).map((tag) => (
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

      <SectionDivider label="Browse" />

      <SectionHeading
        eyebrow="Structure"
        title="Browse the publishing map"
        subtitle="Categories and tracks stay structural. Series and tags stay editorial."
      />

      <div className="blog-taxonomy-grid">
        {categories.map((category) => (
          <a
            key={category.href}
            href={category.href}
            className="blog-taxonomy-card-link"
          >
            <article className="blog-taxonomy-card">
              <span className="blog-taxonomy-eyebrow">{category.eyebrow}</span>
              <h2 className="blog-taxonomy-title">{category.title}</h2>
              <p className="blog-taxonomy-description">
                {category.description}
              </p>
              <div className="blog-taxonomy-footer">
                <span>{category.postCount} posts</span>
                <span>{category.subcategories.length} tracks</span>
              </div>
            </article>
          </a>
        ))}
      </div>

      <div className="blog-taxonomy-grid blog-taxonomy-grid-secondary">
        {subcategories.map((subcategory) => (
          <a
            key={subcategory.href}
            href={subcategory.href}
            className="blog-taxonomy-card-link"
          >
            <article className="blog-taxonomy-card blog-taxonomy-card-track">
              <div className="blog-kicker-row">
                <span className="blog-pill">{subcategory.categoryTitle}</span>
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

      {series.length > 0 ? (
        <>
          <SectionHeading
            eyebrow="Series"
            title="Follow a thread across posts"
            subtitle="Series pages gather related essays without forcing that label into the route structure."
          />

          <div className="blog-section-action-row">
            <a href="/blogs/series/" className="blog-section-link">
              Browse all series
            </a>
          </div>

          <div className="blog-taxonomy-grid blog-taxonomy-grid-secondary">
            {series.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="blog-taxonomy-card-link"
              >
                <article className="blog-taxonomy-card blog-overview-card">
                  <span className="blog-taxonomy-eyebrow">
                    Editorial Series
                  </span>
                  <h2 className="blog-taxonomy-title">{item.title}</h2>
                  <p className="blog-taxonomy-description">
                    {item.postCount} published post
                    {item.postCount === 1 ? "" : "s"} in this series.
                  </p>
                  <div className="blog-taxonomy-footer">
                    <span>{item.postCount} posts</span>
                    {item.latestPost ? (
                      <span>{item.latestPost.displayDate}</span>
                    ) : null}
                  </div>
                </article>
              </a>
            ))}
          </div>
        </>
      ) : null}

      {tags.length > 0 ? (
        <>
          <SectionHeading
            eyebrow="Tags"
            title="Browse by topic"
            subtitle="Tags cut across structure when one concept shows up in multiple posts."
          />

          <div className="blog-section-action-row">
            <a href="/blogs/tags/" className="blog-section-link">
              Browse all tags
            </a>
          </div>

          <div className="blog-taxonomy-grid blog-taxonomy-grid-secondary">
            {tags.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="blog-taxonomy-card-link"
              >
                <article className="blog-taxonomy-card blog-overview-card">
                  <span className="blog-taxonomy-eyebrow">Tag</span>
                  <h2 className="blog-taxonomy-title">{item.title}</h2>
                  <p className="blog-taxonomy-description">
                    {item.postCount} post{item.postCount === 1 ? "" : "s"} use
                    this tag.
                  </p>
                  <div className="blog-taxonomy-footer">
                    <span>{item.postCount} posts</span>
                    {item.latestPost ? (
                      <span>{item.latestPost.displayDate}</span>
                    ) : null}
                  </div>
                </article>
              </a>
            ))}
          </div>
        </>
      ) : null}

      <SectionHeading
        eyebrow="Recent Essays"
        title="Latest posts"
        subtitle="Every card exposes the actual navigation targets instead of making the whole surface one big link."
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
          Add markdown files under <strong>data/blogs</strong> and they will be
          picked up during the static build.
        </Paragraph>
      )}

      <ShareButtons
        url="/blogs/"
        title="LocalM Tuts Blogs"
        description="Static posts on AI systems, agent workflows, and production engineering."
        hashtags={
          shareTags.length > 0
            ? shareTags
            : toHashtags(["AI", "Engineering", "StaticSite"])
        }
      />

      <TutorialNav
        prev={{
          label: "Home",
          href: "/",
          description: "Back to the tutorial index",
        }}
        next={
          featuredPost
            ? {
                label: featuredPost.title,
                href: featuredPost.href,
                description: "Read the featured post",
              }
            : categories[0]
              ? {
                  label: categories[0].title,
                  href: categories[0].href,
                  description: "Browse the first category",
                }
              : undefined
        }
      />
    </TutorialLayout>
  );
}
