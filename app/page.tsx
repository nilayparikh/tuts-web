import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { SITE_TOPIC, ALL_COURSES } from "@/data/courses";
import { CourseGrid } from "./components/CourseGrid";

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
  const totalLessons = ALL_COURSES.reduce((sum, c) => sum + c.parts.length, 0);

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`${ALL_COURSES.length} Course${ALL_COURSES.length > 1 ? "s" : ""} · ${totalLessons} Lessons`}
        headline={`**${SITE_TOPIC.topicName}** Tutorials`}
        subheading={SITE_TOPIC.tagline}
      />

      {/* ── Courses (filterable) ──────────────────────────────────────────── */}
      <CourseGrid courses={ALL_COURSES} topicName={SITE_TOPIC.topicName} />
    </TutorialLayout>
  );
}
