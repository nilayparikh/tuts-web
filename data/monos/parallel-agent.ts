import type { MonoDefinition } from "./types";

export const PARALLEL_AGENT_MONO: MonoDefinition = {
  slug: "parallel-agent",
  title: "The Parallel Agent Pattern — Deep Dive",
  description:
    "Concurrent execution for independent subtasks using fan-out/fan-in architecture. Covers parallel dispatch, session state collection, and sequential aggregation.",
  duration: "5 mins",
  videoId: "trrAd7zXVqI",
  series: "AI Agent Design Patterns",
  tags: [
    "Parallel Agent",
    "Agent Patterns",
    "Fan-Out",
    "Aggregation",
    "Google ADK",
  ],
  icon: "⚡",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono/agent-design-patterns-1/03-parallel-agents",
  objectives: [
    "Define the parallel agent pattern and explain how concurrent execution reduces latency",
    "Describe the fan-out/fan-in architecture: parallel dispatch followed by sequential aggregation",
    "Explain how sub-agents write to shared session state independently",
    "Identify when parallel execution is the correct choice versus sequential or single agent",
    "Evaluate trade-offs: latency versus cost, aggregation complexity, branch independence",
  ],
  status: "publish",
};
