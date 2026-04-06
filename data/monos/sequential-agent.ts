import type { MonoDefinition } from "./types";

export const SEQUENTIAL_AGENT_MONO: MonoDefinition = {
  slug: "sequential-agent",
  title: "The Sequential Agent Pattern — Deep Dive",
  description:
    "Deterministic execution order with shared session state flowing data between specialized sub-agents via output_key and template variables.",
  duration: "5 mins",
  videoId: "XaiCXeeyNzQ",
  series: "AI Agent Design Patterns",
  tags: [
    "Sequential Agent",
    "Agent Patterns",
    "Pipeline",
    "Session State",
    "Google ADK",
  ],
  icon: "🔗",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: "https://github.com/nilayparikh/tuts-agentic-ai-examples",
  objectives: [
    "Define the sequential agent pattern and explain deterministic execution order",
    "Describe how shared session state enables data flow between pipeline stages via output_key",
    "Identify the trade-off between reliability and flexibility that sequential pipelines introduce",
    "Recognize when sequential is the correct choice versus single agent or parallel architecture",
    "Evaluate failure modes: rigidity, inability to skip steps, latency accumulation",
  ],
  status: "publish",
};
