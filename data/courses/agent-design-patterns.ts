import type { CourseDefinition } from "./types";
import { AGENT_DESIGN_PATTERNS_TRANSCRIPTS } from "./agent-design-patterns.transcripts";
import { AGENT_DESIGN_PATTERNS_QA } from "./agent-design-patterns.qa";
import { NEED_FOR_AGENT_PATTERNS_MONO } from "../monos/need-for-agent-patterns";
import { WHY_SIX_PATTERNS_MONO } from "../monos/why-six-patterns";
import { SINGLE_AGENT_MONO } from "../monos/single-agent";
import { SEQUENTIAL_AGENT_MONO } from "../monos/sequential-agent";
import { PARALLEL_AGENT_MONO } from "../monos/parallel-agent";
import { COORDINATOR_MONO } from "../monos/coordinator";
import { AGENT_AS_TOOL_MONO } from "../monos/agent-as-tool";
import { LOOP_AND_CRITIQUE_MONO } from "../monos/loop-and-critique";

const AGENT_DESIGN_PATTERN_MONOS = [
  NEED_FOR_AGENT_PATTERNS_MONO,
  WHY_SIX_PATTERNS_MONO,
  SINGLE_AGENT_MONO,
  SEQUENTIAL_AGENT_MONO,
  PARALLEL_AGENT_MONO,
  COORDINATOR_MONO,
  AGENT_AS_TOOL_MONO,
  LOOP_AND_CRITIQUE_MONO,
];

const AGENT_DESIGN_PATTERNS_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono";

function parseDurationMinutes(duration: string): number {
  const match = duration.match(/(\d+)/);
  return match ? Number.parseInt(match[1], 10) : 0;
}

function lessonCodeUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.includes("/agents/mono/agent-design-patterns-1/")
    ? url
    : undefined;
}

export const AGENT_DESIGN_PATTERNS_COURSE: CourseDefinition = {
  slug: "agent-design-patterns",
  title: "AI Agent Design Patterns",
  description:
    "Move from ad-hoc agent sprawl to six reusable control-flow patterns you can explain, review, and scale in production.",
  totalDuration: `${AGENT_DESIGN_PATTERN_MONOS.reduce((sum, mono) => sum + parseDurationMinutes(mono.duration), 0)} mins`,
  tags: [
    "AI Agents",
    "Agent Patterns",
    "Design Patterns",
    "Control Flow",
    "Multi-Agent Systems",
    "Google ADK",
  ],
  icon: "🧩",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: AGENT_DESIGN_PATTERNS_REPO_URL,
  status: "publish",
  parts: AGENT_DESIGN_PATTERN_MONOS.map((mono) => ({
    slug: mono.slug,
    title: mono.title,
    type: "video" as const,
    duration: mono.duration,
    videoId: mono.videoId,
    description: mono.description,
    objectives: mono.objectives,
    codeUrl: lessonCodeUrl(mono.githubUrl),
    transcript: AGENT_DESIGN_PATTERNS_TRANSCRIPTS[mono.slug],
    qa: AGENT_DESIGN_PATTERNS_QA[mono.slug],
    tags: mono.tags,
  })),
};
