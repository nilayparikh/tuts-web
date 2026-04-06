import type { MonoDefinition } from "./types";

export const COORDINATOR_MONO: MonoDefinition = {
  slug: "coordinator",
  title: "Stop Hardcoding Your Agents: Master the Coordinator Pattern",
  description:
    "LLM-driven agent to dynamically route requests to specialist sub-agents at runtime using ADK's transfer_to_agent mechanism.",
  duration: "6 mins",
  videoId: "N05AycfgBPc",
  series: "AI Agent Design Patterns",
  tags: [
    "Coordinator",
    "Dynamic Routing",
    "Transfer to Agent",
    "Google ADK",
    "Multi-Agent",
  ],
  icon: "🎯",
  difficulty: "moderate",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono/agent-design-patterns-2/04-coordinator",
  objectives: [
    "Describe how the coordinator pattern enables dynamic task routing via LLM-driven delegation",
    "Implement a coordinator with specialist sub-agents using ADK's transfer_to_agent mechanism",
    "Design agent descriptions that enable accurate LLM-driven routing decisions",
    "Evaluate coordinator routing overhead and debug misrouting failures",
  ],
  status: "publish",
};
