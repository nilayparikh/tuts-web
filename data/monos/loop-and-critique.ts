import type { MonoDefinition } from "./types";

export const LOOP_AND_CRITIQUE_MONO: MonoDefinition = {
  slug: "loop-and-critique",
  title: "Stop Shipping AI Hallucinations: The Loop & Critique Pattern",
  description:
    "Quality-control layer for agent workflows: a generator produces output, a critic checks hard constraints, loop retries until result passes or safety cap is hit.",
  duration: "7 mins",
  videoId: "SSJ_c77bJSY",
  series: "AI Agent Design Patterns",
  tags: [
    "Loop & Critique",
    "AI Hallucinations",
    "LLM Reliability",
    "Quality Gate",
    "Google ADK",
    "LoopAgent",
  ],
  icon: "🔄",
  difficulty: "moderate",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/agents/mono/agent-design-patterns-2/06-loop-and-critique",
  objectives: [
    "Explain the loop & critique pattern and identify when iterative refinement is necessary",
    "Implement a generator-critic feedback loop using Google ADK's LoopAgent",
    "Design robust exit conditions using escalation and max_iterations",
    "Evaluate the cost-quality trade-off of iterative agent refinement",
  ],
  status: "publish",
};
