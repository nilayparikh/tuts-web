/**
 * Course Registry — all courses on this tutorial site.
 *
 * Structure:
 *   /                       → Topic home (lists all courses)
 *   /[course]/              → Course overview page
 *   /[course]/[part]/       → Lesson page
 *
 * To add a new course:
 *   1.  Create data/courses/<slug>.ts exporting a CourseDefinition.
 *   2.  Import it here and add to ALL_COURSES.
 *   3.  Create any course-specific content in app/[course]/[part]/page.tsx
 *       (the generic renderer handles all standard types automatically).
 */

export type {
  CourseDefinition,
  CourseInstructor,
  CoursePartMeta,
  CourseOverview,
  PartQA,
  PartQuizQuestion,
  SiteTopicConfig,
  ContentStatus,
} from "./types";

import type {
  CourseDefinition,
  CoursePartMeta,
  SiteTopicConfig,
} from "./types";

// ─── Import individual courses ────────────────────────────────────────────

import { A2A_COURSE } from "./a2a";
import { CTX_SDLC_COURSE } from "./ctx-sdlc";
import { SELF_IMPROVING_AGENTS_COURSE } from "./self-improving-agents";

// ─── All courses (display order) ──────────────────────────────────────────

/** All courses (including drafts) — for static generation */
export const ALL_COURSES: CourseDefinition[] = [
  A2A_COURSE,
  CTX_SDLC_COURSE,
  SELF_IMPROVING_AGENTS_COURSE,
];

/** Published courses only — for public listings */
export const PUBLISHED_COURSES: CourseDefinition[] = ALL_COURSES.filter(
  (c) => (c.status ?? "publish") === "publish",
);

// ─── Site-level topic configuration ───────────────────────────────────────

export const SITE_TOPIC: SiteTopicConfig = {
  topicName: "AI Engineering",
  tagline:
    "Hands-on courses on agent systems, context engineering, and AI-assisted software delivery",
  description:
    "Deep-dive tutorials on modern AI engineering, from multi-agent protocols to context engineering for GitHub Copilot. Learn how to build, orchestrate, and operationalize practical AI workflows with real project structures and delivery patterns.",
  tags: [
    "AI Engineering",
    "Agentic AI",
    "Context Engineering",
    "GitHub Copilot",
    "MCP",
    "Multi-Agent Systems",
  ],
  courses: PUBLISHED_COURSES,
};

// ─── Course lookup helpers ────────────────────────────────────────────────

/** All course slugs (for generateStaticParams) */
export const ALL_COURSE_SLUGS: string[] = ALL_COURSES.map((c) => c.slug);

/** Find a course by its slug */
export function findCourse(courseSlug: string): CourseDefinition | undefined {
  return ALL_COURSES.find((c) => c.slug === courseSlug);
}

/** Find a part within a specific course */
export function findCoursePart(
  courseSlug: string,
  partSlug: string,
): CoursePartMeta | undefined {
  const course = findCourse(courseSlug);
  return course?.parts.find((p) => p.slug === partSlug);
}

/** Get adjacent parts for navigation within a course */
export function getAdjacentParts(
  courseSlug: string,
  partSlug: string,
): { prev: CoursePartMeta | null; next: CoursePartMeta | null } {
  const course = findCourse(courseSlug);
  if (!course) return { prev: null, next: null };
  const idx = course.parts.findIndex((p) => p.slug === partSlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? course.parts[idx - 1] : null,
    next: idx < course.parts.length - 1 ? course.parts[idx + 1] : null,
  };
}

/** Generate all {course, part} param combos for generateStaticParams */
export function allCoursePartParams(): Array<{
  course: string;
  part: string;
}> {
  return ALL_COURSES.flatMap((c) =>
    c.parts.map((p) => ({ course: c.slug, part: p.slug })),
  );
}
