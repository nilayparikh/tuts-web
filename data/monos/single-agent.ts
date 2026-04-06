import type { MonoDefinition } from "./types";

export const SINGLE_AGENT_MONO: MonoDefinition = {
  slug: "single-agent",
  title: "The Single Agent Pattern — Deep Dive",
  description:
    "Deep dive into the single agent pattern — the simplest agentic architecture where one LLM instance with registered tools handles the entire workflow.",
  duration: "5 mins",
  videoId: "j98Csy8DbPo",
  series: "AI Agent Design Patterns",
  tags: [
    "Single Agent",
    "Agent Patterns",
    "LLM Agent",
    "Tool Calling",
    "Google ADK",
  ],
  icon: "🤖",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: "https://github.com/nilayparikh/tuts-agentic-ai-examples",
  objectives: [
    "Define the single agent pattern and explain how it differs from multi-agent architectures",
    "Identify when a single agent is the correct architectural choice versus over-engineering",
    "Explain how tool selection and execution order emerge from the LLM's reasoning",
    "Recognize the failure modes: prompt bloat, nondeterministic execution, and weak multi-step control",
    "Evaluate the trade-offs of flexibility versus reliability in production deployments",
  ],
  status: "publish",
};
