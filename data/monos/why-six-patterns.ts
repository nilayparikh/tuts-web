import type { MonoDefinition } from "./types";

export const WHY_SIX_PATTERNS_MONO: MonoDefinition = {
  slug: "why-six-patterns",
  title: "The Only 6 AI Agent Patterns You'll Ever Need",
  description:
    "Six agent patterns cover every major control-flow choice in production AI systems. This overview shows why a seventh pattern adds nothing.",
  duration: "9 mins",
  videoId: "IOrkQeqvNbk",
  series: "AI Agent Design Patterns",
  tags: [
    "Agent Patterns",
    "Composition",
    "Control Flow",
    "Architecture",
    "Design Patterns",
    "Case Studies",
  ],
  icon: "🧮",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono",
  objectives: [
    "Map each of the six patterns to one of five orthogonal control-flow axes",
    "Explain the Unix analogy: pipes, conditionals, loops, and functions compose to express any workflow",
    "Demonstrate that enterprise workflows (trading, procurement, healthcare) decompose entirely into these six patterns",
    "Prove that a hypothetical seventh pattern either duplicates an axis or is a composition of existing patterns",
    "Use the interactive decision framework to select the right pattern for a given agent task",
  ],
  status: "publish",
};
