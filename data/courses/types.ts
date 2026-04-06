/**
 * Shared types for the multi-course data architecture.
 *
 * Each course lives in its own file under data/courses/<slug>.ts
 * and is registered in data/courses/index.ts.
 */

import type { CoursePart, PartType } from "@localm/tutorial-framework";

// Re-export PartType for convenience
export type { PartType };

// ─── Extended part metadata ────────────────────────────────────────────────

export interface PartQA {
  question: string;
  answer: string;
}

export interface PartQuizQuestion {
  id: string;
  question: string;
  options: Array<{ id: string; text: string }>;
  correctOptionId: string;
  explanation?: string;
}

// ─── Data-driven lesson content ────────────────────────────────────────────

export interface PartMermaidDiagram {
  /** Mermaid chart definition string */
  chart: string;
  /** Caption text below diagram */
  caption?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Optional min-height for readability (e.g. "20rem", "400px") */
  minHeight?: string;
}

export interface PartPollBlock {
  question: string;
  options: Array<{ id: string; text: string }>;
  simulatedVotes?: Record<string, number>;
}

export interface PartCodePreviewSegment {
  code: string;
  language: string;
  filename?: string;
  explanation?: string;
}

export interface PartTranscriptEntry {
  time: number;
  speaker: string;
  text: string;
}

export interface PartInfoBox {
  title: string;
  content: string;
}

export interface PartNoteBox {
  title: string;
  content: string;
}

export interface PartStepGuide {
  title: string;
  steps: Array<{
    title: string;
    description?: string;
    code?: string;
    codeLanguage?: string;
    note?: string;
  }>;
}

// ─── Example Run & Assessment (AI-assisted coding results) ─────────────

export type AssessmentRating = "pass" | "partial" | "fail";

export interface AssessmentDimension {
  /** Dimension name, e.g. "Context Utilization" */
  name: string;
  /** Short abbreviation, e.g. "CU" */
  abbr: string;
  /** Rating for this dimension */
  rating: AssessmentRating;
  /** One-line summary */
  summary: string;
  /** Detailed metrics key-value pairs */
  metrics?: Array<{ label: string; value: string }>;
  /** Evidence text (markdown-friendly) */
  evidence?: string;
}

export interface PartExampleAssessment {
  /** AI model used, e.g. "gpt-5.4" */
  model: string;
  /** Session duration, e.g. "2m 30s" */
  duration: string;
  /** Assessment date ISO, e.g. "2026-03-14" */
  date: string;
  /** Overall verdict */
  verdict: AssessmentRating;
  /** The prompt text that was tested */
  promptUnderTest?: string;
  /** Seven assessment dimensions */
  dimensions: AssessmentDimension[];
}

export interface RunToolCall {
  /** Tool name, e.g. "view", "rg", "glob", "apply_patch" */
  tool: string;
  /** Target path or query */
  target: string;
  /** Outcome description */
  outcome: string;
  /** Whether the call succeeded */
  success: boolean;
}

export interface RunContextStage {
  /** Stage name, e.g. "Discovery" */
  name: string;
  /** Time range, e.g. "0s–17s" */
  timeRange?: string;
  /** What context was loaded */
  contextLoaded: string;
  /** Purpose of this phase */
  purpose: string;
}

export interface RunDecision {
  /** What the AI decided */
  decision: string;
  /** Why — discovery result, prompt constraint, etc. */
  basis: string;
  /** Constraint source: "prompt" | "skill" | "inferred" | "implicit" */
  constraintType?: string;
  /** Whether validated */
  validated: boolean;
}

export interface PartExampleRun {
  /** Session ID (UUID) */
  sessionId?: string;
  /** AI model used */
  model: string;
  /** Session duration, e.g. "2m 30s" */
  duration: string;
  /** Mermaid flowchart of the thinking trajectory */
  trajectoryChart?: string;
  /** Context stages */
  stages?: RunContextStage[];
  /** Complete tool call timeline */
  toolCalls?: RunToolCall[];
  /** Assumptions and decisions */
  decisions?: RunDecision[];
  /** Key session metadata key-value pairs */
  metadata?: Array<{ label: string; value: string }>;
}

export interface CoursePartMeta extends CoursePart {
  /** YouTube video ID (type "video" | "video-code") */
  videoId?: string;
  /** Part description for the lesson hero */
  description?: string;
  /** Learning objectives */
  objectives?: string[];
  /** Q&A pairs shown after video */
  qa?: PartQA[];
  /** Quiz questions (type "quiz") */
  quizQuestions?: PartQuizQuestion[];
  /** GitHub code URL */
  codeUrl?: string;
  /** Reading / resource URL */
  readingUrl?: string;
  /** Google Colab notebook URL (type "video-code" | "code") */
  colabUrl?: string;
  /** GitHub notebook URL for static preview (e.g. https://github.com/owner/repo/blob/main/path.ipynb) */
  notebookUrl?: string;
  /** Tags for SEO */
  tags?: string[];

  // ─── Data-driven content (rendered by page.tsx without slug gates) ─────

  /** InfoBox callouts (rendered in order before main content) */
  infoBoxes?: PartInfoBox[];
  /** NoteBox callouts */
  noteBoxes?: PartNoteBox[];
  /** Mermaid diagrams (rendered in order) */
  diagrams?: PartMermaidDiagram[];
  /** Interactive poll */
  poll?: PartPollBlock;
  /** Code preview segments (code walkthrough) */
  codePreview?: {
    title?: string;
    description?: string;
    segments: PartCodePreviewSegment[];
  };
  /** Video transcript entries */
  transcript?: PartTranscriptEntry[];
  /** Step-by-step guides (beyond auto-generated clone/install) */
  stepGuides?: PartStepGuide[];
  /** Example assessment results (AI-assisted coding evaluation) */
  exampleAssessment?: PartExampleAssessment;
  /** Direct link to the source ASSESSMENT.md artifact */
  exampleAssessmentUrl?: string;
  /** Example run analysis (AI session trajectory) */
  exampleRun?: PartExampleRun;
  /** Direct link to the source RUN.md artifact */
  exampleRunUrl?: string;
}

// ─── Rich overview content (optional per-course) ──────────────────────────

export interface CourseOverview {
  /** Custom hero subheading (overrides course.description in hero) */
  heroSubheading?: string;
  /** "What You'll Learn" concept cards */
  learnItems?: Array<{ icon: string; title: string; description: string }>;
  /** About section paragraphs (may contain basic HTML tags) */
  aboutParagraphs?: string[];
  /** Accordion detail items ("In detail, you'll…") */
  detailItems?: Array<{ title: string; description: string }>;
  /** Prerequisites DescriptionBox */
  prerequisites?: {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
  };
  /** Audience / "Who Should Join?" cards */
  audienceCards?: Array<{ icon: string; title: string; description: string }>;
}

// ─── Instructor ───────────────────────────────────────────────────────────

export interface CourseInstructor {
  /** Instructor full name */
  name: string;
  /** Avatar / photo path */
  imageSrc: string;
  /** Role / title */
  role: string;
}

// ─── Course definition ────────────────────────────────────────────────────

export interface CourseDefinition {
  /** URL-safe slug — becomes the route prefix, e.g. "a2a" → /a2a/ */
  slug: string;
  /** Display title */
  title: string;
  /** Short description for cards and SEO */
  description: string;
  /** Human-readable total duration */
  totalDuration: string;
  /** SEO / filter tags */
  tags: string[];
  /** GitHub repository URL */
  githubUrl?: string;
  /** Emoji or icon for course cards */
  icon?: string;
  /** Difficulty level */
  difficulty?: "beginner" | "moderate" | "expert";
  /** Course instructor */
  instructor?: CourseInstructor;
  /** Ordered parts (lessons) */
  parts: CoursePartMeta[];
  /** Rich overview content for the course page */
  overview?: CourseOverview;
}

// ─── Site-level topic definition ──────────────────────────────────────────

export interface SiteTopicConfig {
  /** Site topic name, e.g. "Agentic AI" */
  topicName: string;
  /** Short tagline for the home page hero */
  tagline: string;
  /** Extended description */
  description: string;
  /** SEO tags */
  tags: string[];
  /** All courses on this site, in display order */
  courses: CourseDefinition[];
}
