import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { SITE_TOPIC, PUBLISHED_COURSES } from "@/data/courses";
import { MONO_TOPIC, PUBLISHED_MONOS } from "@/data/monos";
import { CourseGrid } from "./components/CourseGrid";
import { MonoGrid } from "./components/MonoGrid";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${SITE_TOPIC.topicName} | LocalM\u2122 Tuts`,
  description: SITE_TOPIC.description,
  openGraph: {
    title: `${SITE_TOPIC.topicName} Tutorials`,
    description: SITE_TOPIC.description,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function TopicHomePage() {
  const totalLessons = PUBLISHED_COURSES.reduce(
    (sum, c) => sum + c.parts.length,
    0,
  );

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`${PUBLISHED_COURSES.length} Course${PUBLISHED_COURSES.length !== 1 ? "s" : ""} · ${PUBLISHED_MONOS.length} Mono${PUBLISHED_MONOS.length !== 1 ? "s" : ""} · ${totalLessons} Lessons`}
        headline={`**${SITE_TOPIC.topicName}** Tutorials`}
        subheading={SITE_TOPIC.tagline}
      />

      {/* ── Courses ───────────────────────────────────────────────────────── */}
      <SectionDivider label="Courses" />
      <CourseGrid
        courses={PUBLISHED_COURSES}
        topicName={SITE_TOPIC.topicName}
      />

      {/* ── Monos ─────────────────────────────────────────────────────────── */}
      <SectionDivider label="Mono Lessons" />
      <MonoGrid monos={PUBLISHED_MONOS} topicName={MONO_TOPIC.topicName} />
    </TutorialLayout>
  );
}
