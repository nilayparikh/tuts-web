import type { PartQA } from "./types";

export const AGENT_DESIGN_PATTERNS_QA: Record<string, PartQA[]> = {
  "need-for-agent-patterns": [
    {
      "question": "My team is small — do we really need patterns for just a few agents?",
      "answer": "Yes. The monolith trap and cascading failures hit small teams too. Small teams benefit more from patterns because they don't have the headcount to babysit ad-hoc systems. Start with patterns on day one and you skip the rewrite."
    },
    {
      "question": "Doesn't standardisation just add overhead?",
      "answer": "These patterns are small building blocks, not heavy frameworks. The real overhead is ad-hoc logic — engineers spend 20–40% of their time fixing brittle code instead of building features. Patterns remove that waste."
    },
    {
      "question": "How do standard patterns help with the EU AI Act?",
      "answer": "The EU AI Act needs audit trails for high-risk AI. Standard patterns give you deterministic flow (Sequential), bounded loops (Loop & Critique), and clear boundaries (Coordinator, Agent-as-Tool). That makes it easy to log why an agent made each decision — something ad-hoc systems can't do reliably."
    }
  ],
  "why-six-patterns": [
    {
      "question": "Why not just use a single powerful agent for everything?",
      "answer": "Single agents hit three walls as complexity grows: prompt bloat, nondeterministic execution, and weak multi-step control. The other five patterns exist specifically to address these limitations while keeping each component simple."
    },
    {
      "question": "Can I combine more than two patterns in one system?",
      "answer": "Absolutely. The trading, e-commerce, and healthcare examples all combine multiple patterns. Coordinator routes to specialists. Specialists use Sequential pipelines. Some stages run Parallel branches. A Loop & Critique validates output. Agent-as-Tool wraps controlled service calls. Single Agent remains the atomic building block."
    },
    {
      "question": "How do I test whether a proposed seventh pattern is really new?",
      "answer": "Apply the seventh-pattern test. Ask whether it introduces a genuinely new control-flow axis, or whether it decomposes into ordering, concurrency, iteration, routing, call-return, or atomic work. In practice, proposals like map-reduce, retry, hierarchical multi-agent, and supervisor-worker all collapse into compositions of the existing six."
    },
    {
      "question": "Do these patterns only apply to Google ADK?",
      "answer": "No. ADK gives us concrete names, but the patterns are framework-agnostic. LangGraph, CrewAI, AutoGen, Semantic Kernel, and custom orchestrators all implement the same control-flow primitives under different APIs."
    }
  ],
  "single-agent": [
    {
      "question": "How does a single agent decide which tool to call?",
      "answer": "The LLM uses the tool names, descriptions (from docstrings or description fields), and parameter schemas together with its instruction prompt to decide which tool to call. This decision is part of the model's reasoning — there is no explicit routing code."
    },
    {
      "question": "Is a single agent the same as a chatbot?",
      "answer": "No. A chatbot generates text from conversation history. A single agent can also invoke tools — search APIs, databases, calculators, file operations — and use tool results in its reasoning. The tool-calling capability is what makes it an agent rather than a chatbot."
    },
    {
      "question": "When should I NOT use a single agent?",
      "answer": "When execution order matters (use sequential), when independent subtasks should run concurrently for speed (use parallel), when the instruction prompt has grown too large to be reliable, or when failures need to be traceable to a specific pipeline stage."
    }
  ],
  "sequential-agent": [
    {
      "question": "How do sequential agents share data between steps?",
      "answer": "Through shared session state. Each sub-agent writes its output using an output_key parameter. The next sub-agent reads that value via template variables (curly braces) in its instruction prompt. This acts as short-term memory within the pipeline."
    },
    {
      "question": "Can a sequential pipeline skip a step conditionally?",
      "answer": "Not natively. The SequentialAgent always runs all sub-agents in order. To add conditional logic, you need a coordinator agent or custom orchestrator that evaluates a condition and routes to different sub-agents based on the result."
    },
    {
      "question": "What happens if a sub-agent fails mid-pipeline?",
      "answer": "Subsequent stages receive incomplete or missing data from session state. The pipeline does not automatically retry or skip. You need explicit error handling — either in the sub-agent's instruction or through framework callbacks — to handle failures gracefully."
    }
  ],
  "parallel-agent": [
    {
      "question": "Can parallel sub-agents communicate with each other during execution?",
      "answer": "No. Sub-agents within a ParallelAgent run independently in their own execution branches. There is no automatic sharing of state or data during execution. If you need inter-branch communication, restructure: make the dependent part sequential, then parallelize the truly independent work."
    },
    {
      "question": "What happens if one parallel branch fails?",
      "answer": "The other branches still complete successfully. However, the aggregator will receive incomplete data for the failed branch. You need explicit handling: skip the missing data with a disclaimer, retry the failed branch, or report partial results."
    },
    {
      "question": "Why wrap ParallelAgent inside a SequentialAgent?",
      "answer": "To guarantee the aggregation step (synthesizer) runs only after all parallel branches have completed. Without the sequential wrapper, there is no guarantee that results are available when the synthesizer tries to read them. The wrapper enforces: parallel first, then aggregate."
    }
  ],
  "coordinator": [
    {
      "question": "How does the coordinator know which specialist to route to?",
      "answer": "The coordinator's LLM reads the description field of each sub-agent and matches it against the user's request. ADK automatically generates a transfer_to_agent function that the LLM can call with the target agent's name. Clear, specific descriptions are essential for accurate routing."
    },
    {
      "question": "What happens if the coordinator routes to the wrong specialist?",
      "answer": "The specialist processes the request in its own domain and returns an answer that may not match the user's intent. To debug: check if specialist descriptions overlap, verify the coordinator's instruction mentions all agents, and inspect the LLM trace to see which transfer_to_agent call was generated."
    },
    {
      "question": "Can the coordinator route to multiple specialists for one request?",
      "answer": "In ADK's default behavior, a coordinator transfers to one specialist per turn. For multi-domain requests, you can either design a specialist that is itself a SequentialAgent or ParallelAgent (hierarchical composition), or use the agent-as-tool pattern where the primary agent calls multiple tools in sequence."
    }
  ],
  "agent-as-tool": [
    {
      "question": "When should I use agent-as-tool instead of coordinator?",
      "answer": "Use agent-as-tool when the primary agent needs to combine results from multiple specialists into a single response — for example, gathering food, transport, and attractions to build a trip plan. The coordinator pattern is better when each specialist can independently handle a complete request. The deciding factor is whether the primary agent needs to stay in control after dispatch."
    },
    {
      "question": "Does AgentTool preserve the specialist's conversation history?",
      "answer": "No. Each AgentTool invocation is stateless — it is a fresh call with no memory of previous invocations. The specialist receives the input, processes it, and returns the result. The primary agent's own session state is preserved across turns, but the specialist does not retain state between calls."
    },
    {
      "question": "Can I mix AgentTool with regular tools on the same agent?",
      "answer": "Yes. AgentTool is just another tool entry in the agent's tools list. You can combine AgentTool-wrapped specialists with regular functions, google_search, or any other ADK tool. The LLM decides which tool to call based on the request."
    }
  ],
  "loop-and-critique": [
    {
      "question": "How does the loop know when to stop?",
      "answer": "Two mechanisms: (1) the critic agent calls exit_loop which sets escalate=True, signaling the LoopAgent to terminate, or (2) the LoopAgent hits its max_iterations ceiling. The first is quality-driven exit; the second is a safety bound to prevent runaway cost."
    },
    {
      "question": "Does the generator see feedback from previous iterations?",
      "answer": "Yes. The critic writes feedback to session state via output_key. The generator reads that feedback through template variables like {critique_feedback?} in its instruction. The ? suffix avoids errors on the first iteration when no feedback exists yet."
    },
    {
      "question": "Is loop & critique the same as retry logic?",
      "answer": "No. Retry logic repeats the same call hoping for a different result. Loop & critique provides directed feedback — each iteration receives specific information about what failed and what to fix. It is a directed search, not random retry."
    }
  ],
};
