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
import { getAllBlogTags } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog Tags",
  description: "Topic tags for LocalM Tuts blog posts.",
  alternates: {
    canonical: "/blogs/tags/",
  },
  openGraph: {
    title: "Blog Tags",
    description: "Topic tags for LocalM Tuts blog posts.",
    type: "website",
    url: "/blogs/tags/",
  },
};

function toHashtags(tags: string[]): string[] {
  return tags.map((tag) => tag.replace(/[^a-zA-Z0-9]/g, "")).filter(Boolean);
}

export default function BlogTagsOverviewPage() {
  const tags = getAllBlogTags();
  const featuredTag = tags[0];

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/blogs/tags/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      <HeroSection
        eyebrow={`Tag Index · ${tags.length} tags`}
        headline="Browse posts by topic, not just by route."
        subheading="Tag pages stay editorial. They cut across categories and series when a concept shows up in more than one place."
        primaryAction={
          featuredTag
            ? {
                label: "Open the top tag",
                href: featuredTag.href,
              }
            : undefined
        }
        secondaryAction={{
          label: "Back to blogs",
          href: "/blogs/",
        }}
        tags={tags.slice(0, 5).map((item) => item.title)}
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
          <li aria-current="page">Tags</li>
        </ol>
      </nav>

      <SectionHeading
        eyebrow="Topic Map"
        title="All tags"
        subtitle="Use tags to jump across related posts without repeating the category hierarchy."
      />

      {tags.length > 0 ? (
        <div
          className="blog-taxonomy-grid blog-taxonomy-grid-secondary"
          role="list"
        >
          {tags.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="blog-taxonomy-card-link"
              role="listitem"
            >
              <article className="blog-taxonomy-card blog-overview-card">
                <span className="blog-taxonomy-eyebrow">Tag</span>
                <h2 className="blog-taxonomy-title">{item.title}</h2>
                <p className="blog-taxonomy-description">
                  {item.postCount} published post
                  {item.postCount === 1 ? "" : "s"} carry this tag.
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
          No tags are published yet.
        </Paragraph>
      )}

      <ShareButtons
        title="Blog Tags"
        description="Topic tags for LocalM Tuts blog posts."
        hashtags={toHashtags(["Blogs", "Tags", "LocalM Tuts"])}
      />

      <TutorialNav
        prev={{
          label: "All blogs",
          href: "/blogs/",
          description: "Back to the main blog index",
        }}
        next={
          featuredTag
            ? {
                label: featuredTag.title,
                href: featuredTag.href,
                description: "Open the top tag page",
              }
            : undefined
        }
      />
    </TutorialLayout>
  );
}
