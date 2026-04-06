import type { MonoDefinition } from "./types";

export const AGENT_AS_TOOL_MONO: MonoDefinition = {
  slug: "agent-as-tool",
  title: "Stop Delegating, Start Controlling: The Agent-as-Tool Pattern",
  description:
    "Wrapping specialist agents as callable functions that a primary agent invokes on demand. Unlike coordinator-style delegation, the primary agent retains full control.",
  duration: "5 mins",
  videoId: "fG-0_nCm3K8",
  series: "AI Agent Design Patterns",
  tags: [
    "Agent-as-Tool",
    "AgentTool",
    "Composition",
    "Google ADK",
    "Multi-Agent",
  ],
  icon: "🔧",
  difficulty: "moderate",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono/agent-design-patterns-2/05-agent-as-tool",
  objectives: [
    "Describe how agent-as-tool composition lets a primary agent call specialists as stateless functions",
    "Implement an agent-as-tool system using ADK's AgentTool wrapper",
    "Compare agent-as-tool and coordinator patterns to choose the right control model",
    "Identify failure modes unique to tool-wrapped agents and strategies to mitigate them",
  ],
  status: "publish",
};
