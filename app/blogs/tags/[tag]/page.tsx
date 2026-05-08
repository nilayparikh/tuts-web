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
  getBlogTagBySlug,
  getBlogTagStaticParams,
  getPostsForTag,
} from "@/data/blogs";
import { getVisibleBlogTags } from "@/app/blogs/shared";

type Params = {
  tag: string;
};

export function generateStaticParams(): Params[] {
  return getBlogTagStaticParams();
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
  const { tag } = await params;
  const summary = getBlogTagBySlug(tag);

  if (!summary) {
    return {};
  }

  return {
    title: `${summary.title} Blogs`,
    description: `${summary.postCount} static post${summary.postCount === 1 ? "" : "s"} tagged ${summary.title}.`,
    alternates: {
      canonical: summary.href,
    },
    openGraph: {
      title: `${summary.title} Blogs`,
      description: `${summary.postCount} static post${summary.postCount === 1 ? "" : "s"} tagged ${summary.title}.`,
      type: "website",
      url: summary.href,
    },
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tag } = await params;
  const summary = getBlogTagBySlug(tag);

  if (!summary) {
    notFound();
  }

  const posts = getPostsForTag(summary.slug);
  const featuredPost = summary.latestPost ?? posts[0];

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: summary.href }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`Tag · ${summary.postCount} post${summary.postCount === 1 ? "" : "s"}`}
        headline={summary.title}
        subheading="Tag pages stay lightweight and editorial. They are not overloaded with structural routing concerns."
        primaryAction={
          featuredPost
            ? {
                label: "Read the latest tagged post",
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
            posts.flatMap((post) => [
              post.categoryTitle,
              post.subcategoryTitle,
            ]),
          ),
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
            <a href="/blogs/tags/">Tags</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li aria-current="page">{summary.title}</li>
        </ol>
      </nav>

      <SectionHeading
        eyebrow="Tagged Posts"
        title={`Posts tagged ${summary.title}`}
        subtitle="Tag chips now link to a real page instead of sitting as dead text."
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
                    {getVisibleBlogTags(post, 2).map((item) => (
                      <a
                        key={item.slug}
                        href={item.href}
                        className="blog-pill blog-pill-ghost blog-pill-link"
                      >
                        {item.label}
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
          No posts are published for this tag yet.
        </Paragraph>
      )}

      <ShareButtons
        title={`${summary.title} Blogs`}
        description={`${summary.postCount} static post${summary.postCount === 1 ? "" : "s"} tagged ${summary.title}.`}
        hashtags={toHashtags([summary.title, "Blogs", "Tag"])}
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
                description: "Read the latest tagged post",
              }
            : undefined
        }
      />
    </TutorialLayout>
  );
}
