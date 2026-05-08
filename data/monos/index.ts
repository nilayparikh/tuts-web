/**
 * Mono Registry — all standalone lessons on this tutorial site.
 *
 * Structure:
 *   /monos/              → Mono home (lists all monos)
 *   /monos/[mono]/       → Mono lesson page
 *
 * To add a new mono:
 *   1.  Create data/monos/<slug>.ts exporting a MonoDefinition.
 *   2.  Import it here and add to ALL_MONOS.
 */

export type { MonoDefinition, MonoInstructor, MonoTopicConfig } from "./types";

import type { MonoDefinition, MonoTopicConfig } from "./types";

// ─── All monos (display order) ───────────────────────────────────────────

/** All monos (including drafts) — for static generation */
export const ALL_MONOS: MonoDefinition[] = [];

/** Published monos only — for public listings */
export const PUBLISHED_MONOS: MonoDefinition[] = ALL_MONOS.filter(
  (m) => (m.status ?? "publish") === "publish",
);

// ─── Site-level mono topic configuration ──────────────────────────────────

export const MONO_TOPIC: MonoTopicConfig = {
  topicName: "AI Agent Design Patterns",
  tagline:
    "Focused deep dives into individual agent design patterns — one concept, one video, full clarity",
  description:
    "This section is being folded into the new course-based structure. Historical mono routes are no longer published separately.",
  tags: [
    "Agent Patterns",
    "AI Agents",
    "Google ADK",
    "Multi-Agent",
    "Design Patterns",
    "LLM Architecture",
  ],
  monos: PUBLISHED_MONOS,
};

// ─── Mono lookup helpers ──────────────────────────────────────────────────

/** All mono slugs (for generateStaticParams) */
export const ALL_MONO_SLUGS: string[] = ALL_MONOS.map((m) => m.slug);

/** Find a mono by its slug */
export function findMono(slug: string): MonoDefinition | undefined {
  return ALL_MONOS.find((m) => m.slug === slug);
}
