import type { MonoDefinition } from "./types";

export const WHY_SIX_PATTERNS_MONO: MonoDefinition = {
  slug: "why-six-patterns",
  title: "Why Six Agent Patterns Are All You Need",
  description:
    "Six composable patterns cover five orthogonal control-flow axes — execution order, concurrency, iteration, delegation, and complexity. Adding a seventh would duplicate an existing axis or be a composition of two.",
  duration: "5 mins",
  videoId: "",
  series: "AI Agent Design Patterns",
  tags: [
    "Agent Patterns",
    "Composition",
    "Control Flow",
    "Architecture",
    "Design Patterns",
  ],
  icon: "🧮",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: "https://github.com/nilayparikh/tuts-agentic-ai-examples",
  objectives: [
    "Map each of the six patterns to one of five orthogonal control-flow axes",
    "Explain the Unix analogy: pipes, conditionals, loops, and functions compose to express any workflow",
    "Demonstrate that enterprise workflows (trading, procurement, healthcare) decompose entirely into these six patterns",
    "Prove that a hypothetical seventh pattern either duplicates an axis or is a composition of existing patterns",
    "Use the interactive decision framework to select the right pattern for a given agent task",
  ],
  status: "draft",
};
