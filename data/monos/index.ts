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

// ─── Import individual monos ──────────────────────────────────────────────

import { SINGLE_AGENT_MONO } from "./single-agent";
import { SEQUENTIAL_AGENT_MONO } from "./sequential-agent";
import { PARALLEL_AGENT_MONO } from "./parallel-agent";
import { LOOP_AND_CRITIQUE_MONO } from "./loop-and-critique";
import { COORDINATOR_MONO } from "./coordinator";
import { AGENT_AS_TOOL_MONO } from "./agent-as-tool";
import { AGENT_PATTERNS_SERIES_INTRO_MONO } from "./agent-patterns-series-intro";
import { NEED_FOR_AGENT_PATTERNS_MONO } from "./need-for-agent-patterns";
import { WHY_SIX_PATTERNS_MONO } from "./why-six-patterns";

// ─── All monos (display order) ───────────────────────────────────────────

/** All monos (including drafts) — for static generation */
export const ALL_MONOS: MonoDefinition[] = [
  AGENT_PATTERNS_SERIES_INTRO_MONO,
  NEED_FOR_AGENT_PATTERNS_MONO,
  WHY_SIX_PATTERNS_MONO,
  SINGLE_AGENT_MONO,
  SEQUENTIAL_AGENT_MONO,
  PARALLEL_AGENT_MONO,
  LOOP_AND_CRITIQUE_MONO,
  COORDINATOR_MONO,
  AGENT_AS_TOOL_MONO,
];

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
    "Standalone lessons covering the fundamental patterns of agentic AI design. Each mono is a self-contained deep dive into a single pattern with architecture diagrams, code examples, and practical trade-off analysis.",
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
