import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  KeyPoint,
  ShareButtons,
  LessonList,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { COURSE } from "@/data/course";
import { CourseStatsBar } from "./components/CourseStatsBar";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${COURSE.title} | LocalM Tutorials`,
  description: COURSE.description,
  openGraph: {
    title: COURSE.title,
    description: COURSE.description,
    type: "article",
    publishedTime: "2025-02-25",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function CourseOverviewPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Full Course · ${COURSE.parts.length} Lessons · ${COURSE.totalDuration}`}
        headline={`**${COURSE.title.split(":")[0]}**: ${COURSE.title.split(":").slice(1).join(":").trim()}`}
        subheading={COURSE.description}
        primaryAction={{
          label: "Start first lesson →",
          href: `/${COURSE.parts[0].slug}/`,
        }}
        secondaryAction={{
          label: "Source code",
          href: COURSE.githubUrl ?? "#",
        }}
        tags={COURSE.tags}
      />

      {/* ── Course Curriculum ─────────────────────────────────────────────── */}
      <SectionDivider label="Course Curriculum" />

      <SectionHeading
        title={`${COURSE.parts.length} lessons, zero fluff`}
        subtitle="Each lesson is focused and builds on the previous one — from first principles to production-ready multi-agent systems."
      />

      <LessonList parts={COURSE.parts} basePath="" />

      {/* ── Prerequisites ─────────────────────────────────────────────────── */}
      <SectionDivider label="Prerequisites" />

      <KeyPoint variant="info" title="What you need before starting">
        Basic Python (3.11+), familiarity with REST APIs, and a Google Cloud
        account with Vertex AI enabled. No prior agent framework experience
        required.
      </KeyPoint>

      {/* ── Course Stats ──────────────────────────────────────────────────── */}
      <SectionDivider />
      <CourseStatsBar course={COURSE} />

      {/* ── Share ─────────────────────────────────────────────────────────── */}
      <SectionDivider variant="gradient" />

      <ShareButtons
        title={`${COURSE.title} — Full Course`}
        description={COURSE.description}
        hashtags={["A2A", "AIAgents", "MultiAgent", "python"]}
        platforms={["twitter", "linkedin", "email"]}
      />
    </TutorialLayout>
  );
}
