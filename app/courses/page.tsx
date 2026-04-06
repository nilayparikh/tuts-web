import type { Metadata } from "next";
import { TutorialLayout, HeroSection } from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { SITE_TOPIC, PUBLISHED_COURSES } from "@/data/courses";
import { CourseGrid } from "@/app/components/CourseGrid";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Courses | ${SITE_TOPIC.topicName} | LocalM\u2122 Tuts`,
  description: SITE_TOPIC.description,
  openGraph: {
    title: `${SITE_TOPIC.topicName} Courses`,
    description: SITE_TOPIC.description,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function CoursesHomePage() {
  const totalLessons = PUBLISHED_COURSES.reduce(
    (sum, c) => sum + c.parts.length,
    0,
  );

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/courses/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="tf-breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li aria-current="page">Courses</li>
        </ol>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`${PUBLISHED_COURSES.length} Course${PUBLISHED_COURSES.length !== 1 ? "s" : ""} · ${totalLessons} Lessons`}
        headline={`**${SITE_TOPIC.topicName}** Courses`}
        subheading={SITE_TOPIC.tagline}
      />

      {/* ── Courses (filterable) ──────────────────────────────────────────── */}
      <CourseGrid
        courses={PUBLISHED_COURSES}
        topicName={SITE_TOPIC.topicName}
      />
    </TutorialLayout>
  );
}
