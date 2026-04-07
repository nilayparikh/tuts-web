import type { MonoDefinition } from "./types";

export const NEED_FOR_AGENT_PATTERNS_MONO: MonoDefinition = {
  slug: "need-for-agent-patterns",
  title: 'Your AI "Tech Debt" is Exploding. Here\'s Why.',
  description:
    "Production AI agents need standard patterns. Without them, teams run into tech debt, cascading failures, and agent sprawl fast.",
  duration: "6 mins",
  videoId: "V74YBIFpM6U",
  series: "AI Agent Design Patterns",
  tags: [
    "Agent Patterns",
    "Standardization",
    "Tech Debt",
    "AI Governance",
    "Production AI",
  ],
  icon: "⚠️",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono",
  objectives: [
    "Explain why architectural standardisation is essential for production agentic AI systems",
    "Identify the three critical risks of ad-hoc agent design: monolith trap, cascading failures, and agent sprawl",
    "Quantify the cost of AI tech debt — 50–80% rewrite rates, 20–40% maintenance overhead, and regulatory exposure under the EU AI Act",
    "Describe how standardised patterns provide predictability, interoperability, and scalability",
    "Reference industry findings from Squirro (Dec 2025), Mario Thomas (Aug 2025), LowTouch.ai (April 2025), and Medium (Dec 2025)",
  ],
  status: "publish",
};
