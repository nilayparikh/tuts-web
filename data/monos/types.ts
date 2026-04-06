/**
 * Shared types for the mono (standalone lesson) data architecture.
 *
 * Each mono lives in its own file under data/monos/<slug>.ts
 * and is registered in data/monos/index.ts.
 */

import type { ContentStatus } from "../courses/types";
export type { ContentStatus };

// ─── Mono definition ──────────────────────────────────────────────────────

export interface MonoDefinition {
  /** URL-safe slug — becomes the route, e.g. "single-agent" → /monos/single-agent/ */
  slug: string;
  /** Display title */
  title: string;
  /** Short description for cards and SEO */
  description: string;
  /** Human-readable duration */
  duration: string;
  /** YouTube video ID */
  videoId: string;
  /** SEO / filter tags */
  tags: string[];
  /** Emoji or icon for cards */
  icon?: string;
  /** Difficulty level */
  difficulty?: "beginner" | "moderate" | "expert";
  /** Instructor */
  instructor?: MonoInstructor;
  /** GitHub repository URL */
  githubUrl?: string;
  /** Series name (for grouping) */
  series?: string;
  /** Learning objectives */
  objectives?: string[];
  /** Publish status — defaults to "publish" when omitted */
  status?: ContentStatus;
}

export interface MonoInstructor {
  name: string;
  imageSrc: string;
  role: string;
}

// ─── Site-level mono topic config ─────────────────────────────────────────

export interface MonoTopicConfig {
  /** Section name, e.g. "Mono Lessons" */
  topicName: string;
  /** Short tagline for the mono home hero */
  tagline: string;
  /** Extended description */
  description: string;
  /** SEO tags */
  tags: string[];
  /** All monos on this site, in display order */
  monos: MonoDefinition[];
}
