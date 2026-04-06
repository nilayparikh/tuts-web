import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  TutorialLayout,
  LessonHeader,
  YouTubeEmbed,
  Paragraph,
  LessonObjectives,
  LessonSocialBar,
  TutorialNav,
  GitHubRepoCard,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import { ALL_MONO_SLUGS, findMono, PUBLISHED_MONOS } from "@/data/monos";

// ─── Types ────────────────────────────────────────────────────────────────

type Params = { mono: string };

// ─── Static params ────────────────────────────────────────────────────────

export function generateStaticParams(): Array<Params> {
  return ALL_MONO_SLUGS.map((slug) => ({ mono: slug }));
}

export const dynamicParams = false;

// ─── Dynamic metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { mono: slug } = await params;
  const mono = findMono(slug);
  if (!mono) return {};

  return {
    title: `${mono.title} | LocalM\u2122 Tuts`,
    description: mono.description,
    openGraph: {
      title: mono.title,
      description: mono.description,
      type: "article",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function MonoLessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { mono: slug } = await params;
  const mono = findMono(slug);
  if (!mono) notFound();

  // Find prev/next in published monos for navigation
  const pubIdx = PUBLISHED_MONOS.findIndex((m) => m.slug === slug);
  const prev = pubIdx > 0 ? PUBLISHED_MONOS[pubIdx - 1] : null;
  const next =
    pubIdx >= 0 && pubIdx < PUBLISHED_MONOS.length - 1
      ? PUBLISHED_MONOS[pubIdx + 1]
      : null;

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: `/monos/${slug}/` }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--tf-space-6)",
          width: "100%",
        }}
      >
        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="tf-breadcrumb">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true" className="tf-breadcrumb-sep">
              /
            </li>
            <li>
              <a href="/monos/">Monos</a>
            </li>
            <li aria-hidden="true" className="tf-breadcrumb-sep">
              /
            </li>
            <li aria-current="page">{mono.title}</li>
          </ol>
        </nav>

        {/* ── Header + social bar ─────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--tf-space-3)",
          }}
        >
          <LessonHeader
            part={{
              slug: mono.slug,
              title: mono.title,
              type: "video",
              duration: mono.duration,
            }}
            type="video"
            duration={mono.duration}
            title={mono.title}
          />
          <LessonSocialBar
            instructorName="Nilay Parikh"
            instructorImageSrc="/brand/nilay_parikh.jpeg"
            twitterUrl={BRAND.socials.twitter}
            twitterHandle={BRAND.socials.twitterHandle}
            linkedinNewsletterUrl={BRAND.socials.linkedinNewsletter}
            youtubeSubscribeUrl={BRAND.socials.youtube}
            shareTitle={mono.title}
            shareDescription={mono.description}
            shareHashtags={mono.tags}
          />
        </div>

        {/* ── Description ──────────────────────────────────────────── */}
        <Paragraph>{mono.description}</Paragraph>

        {/* ── Video ────────────────────────────────────────────────── */}
        <YouTubeEmbed
          videoId={mono.videoId}
          title={mono.title}
          showShare
          shareHashtags={mono.tags}
        />

        {/* ── Learning Objectives ──────────────────────────────────── */}
        {mono.objectives && mono.objectives.length > 0 && (
          <LessonObjectives objectives={mono.objectives} />
        )}

        {/* ── GitHub Link ──────────────────────────────────────────── */}
        {mono.githubUrl && (
          <GitHubRepoCard
            url={mono.githubUrl}
            description="View the example code for this lesson on GitHub"
          />
        )}

        {/* ── Navigation ───────────────────────────────────────────── */}
        <TutorialNav
          prev={
            prev
              ? {
                  label: prev.title,
                  href: `/monos/${prev.slug}/`,
                  description: prev.duration,
                }
              : {
                  label: "All Monos",
                  href: "/monos/",
                  description: "Browse all mono lessons",
                }
          }
          next={
            next
              ? {
                  label: next.title,
                  href: `/monos/${next.slug}/`,
                  description: next.duration,
                }
              : undefined
          }
        />
      </div>
    </TutorialLayout>
  );
}
