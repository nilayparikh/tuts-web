import type { Metadata } from "next";
import {
  HeroSection,
  Paragraph,
  SectionHeading,
  ShareButtons,
  TutorialLayout,
  TutorialNav,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { getAllBlogSeries } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog Series",
  description:
    "Editorial series that group LocalM Tuts blog posts into longer threads.",
  alternates: {
    canonical: "/blogs/series/",
  },
  openGraph: {
    title: "Blog Series",
    description:
      "Editorial series that group LocalM Tuts blog posts into longer threads.",
    type: "website",
    url: "/blogs/series/",
  },
};

function toHashtags(tags: string[]): string[] {
  return tags.map((tag) => tag.replace(/[^a-zA-Z0-9]/g, "")).filter(Boolean);
}

export default function BlogSeriesOverviewPage() {
  const series = getAllBlogSeries();
  const featuredSeries = series[0];

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/blogs/series/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`Series Index · ${series.length} series`}
        headline="Follow the long-form threads behind the blog."
        subheading="Series pages collect connected essays without forcing that structure into the category route."
        primaryAction={
          featuredSeries
            ? {
                label: "Open the latest series",
                href: featuredSeries.href,
              }
            : undefined
        }
        secondaryAction={{
          label: "Back to blogs",
          href: "/blogs/",
        }}
        tags={series.slice(0, 4).map((item) => item.title)}
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
          <li aria-current="page">Series</li>
        </ol>
      </nav>

      <SectionHeading
        eyebrow="Editorial Threads"
        title="All series"
        subtitle="Each series acts like a curated reading path across multiple posts."
      />

      {series.length > 0 ? (
        <div
          className="blog-taxonomy-grid blog-taxonomy-grid-secondary"
          role="list"
        >
          {series.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="blog-taxonomy-card-link"
              role="listitem"
            >
              <article className="blog-taxonomy-card blog-overview-card">
                <span className="blog-taxonomy-eyebrow">Series</span>
                <h2 className="blog-taxonomy-title">{item.title}</h2>
                <p className="blog-taxonomy-description">
                  {item.postCount} published post
                  {item.postCount === 1 ? "" : "s"} in this thread.
                </p>
                <div className="blog-taxonomy-footer">
                  <span>{item.postCount} posts</span>
                  {item.latestPost ? (
                    <span>{item.latestPost.displayDate}</span>
                  ) : null}
                </div>
                {item.latestPost ? (
                  <p className="blog-overview-note">
                    Latest: {item.latestPost.title}
                  </p>
                ) : null}
              </article>
            </a>
          ))}
        </div>
      ) : (
        <Paragraph lead center>
          No series are published yet.
        </Paragraph>
      )}

      <ShareButtons
        title="Blog Series"
        description="Editorial series that group LocalM Tuts blog posts into longer threads."
        hashtags={toHashtags(["Blogs", "Series", "LocalM Tuts"])}
      />

      <TutorialNav
        prev={{
          label: "All blogs",
          href: "/blogs/",
          description: "Back to the main blog index",
        }}
        next={
          featuredSeries
            ? {
                label: featuredSeries.title,
                href: featuredSeries.href,
                description: "Open the latest series",
              }
            : undefined
        }
      />
    </TutorialLayout>
  );
}
