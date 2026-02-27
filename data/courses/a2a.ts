/**
 * Course: A2A — The Agent2Agent Protocol
 *
 * Slug: "a2a"  →  /a2a/, /a2a/introduction/, /a2a/why-a2a/, …
 *
 * 17 lessons + quiz. 7 framework integrations. 4 model providers.
 * Local-first: GitHub Models Phi-4, Azure AI Foundry Kimi-K2/K2-Thinking,
 * Foundry Local Qwen2.5 Coder.
 */

import type { CourseDefinition } from "./types";

export const A2A_COURSE: CourseDefinition = {
  slug: "a2a",
  title: "A2A: The Agent2Agent Protocol",
  description:
    "Build multi-agent AI systems using the A2A protocol. Covers 7 frameworks (Microsoft Agent Framework, Google ADK, LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK, GitHub Copilot SDK) with local-first models.",
  totalDuration: "~135 mins",
  tags: [
    "A2A",
    "AI Agents",
    "Python",
    "Microsoft Agent Framework",
    "Google ADK",
    "LangGraph",
    "CrewAI",
    "MCP",
  ],
  icon: "🔌",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
  parts: [
    // ── 1. Introduction ──────────────────────────────────────────────────
    {
      slug: "introduction",
      title: "Introduction",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-intro",
      description:
        "Get oriented to agentic AI systems, the N² integration problem, and why A2A exists.",
      objectives: [
        "Understand what agentic AI systems are and why they need protocols",
        "Grasp the N² integration problem that A2A solves",
        "Preview the seven frameworks and four model providers used in this course",
        "Differentiate A2A (agent-to-agent) from MCP (agent-to-tool)",
      ],
      qa: [
        {
          question: "What is the N² problem in multi-agent systems?",
          answer:
            "Without a shared protocol, connecting N agents requires up to N×(N-1)/2 custom integrations. A2A reduces this to one standard interface per agent.",
        },
      ],
      tags: ["introduction", "overview", "a2a"],
    },

    // ── 2. Why Agent2Agent? ──────────────────────────────────────────────
    {
      slug: "why-a2a",
      title: "Why Agent2Agent Protocol?",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-why-a2a",
      description:
        "Explore the motivation behind A2A — how it solves the interoperability problem and complements MCP.",
      objectives: [
        "Quantify the N² integration scale problem",
        "Compare REST API integration vs. A2A protocol approach",
        "Understand A2A's five design values",
        "Map the A2A agent stack layers",
      ],
      qa: [
        {
          question: "How does A2A differ from MCP (Model Context Protocol)?",
          answer:
            "MCP connects a single model to tools and data sources. A2A connects two or more autonomous agents — each potentially running different models — allowing them to discover each other and delegate tasks across organizational boundaries.",
        },
        {
          question: "Why can't agents just call each other's APIs directly?",
          answer:
            "They can, but without a common protocol you need custom integration for every pair of agents. A2A provides a standard discovery mechanism (Agent Card), task format, and streaming contract so any A2A-compliant agent can talk to any other.",
        },
      ],
      tags: ["overview", "motivation", "interoperability"],
    },

    // ── 3. Architecture ──────────────────────────────────────────────────
    {
      slug: "a2a-architecture",
      title: "A2A Architecture",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-architecture",
      description:
        "Dive into Agent Cards, Messages, Parts, Task lifecycle, SSE streaming, and the JSON-RPC transport layer.",
      objectives: [
        "Understand the Agent Card discovery mechanism and its JSON structure",
        "Learn the Task lifecycle (submitted → working → input-required → completed/failed/canceled)",
        "Map Messages and Parts to the A2A data model",
        "Understand Server-Sent Events streaming via tasks/sendSubscribe",
        "Identify the seven JSON-RPC methods in the A2A specification",
      ],
      qa: [
        {
          question: "What is an Agent Card?",
          answer:
            "A JSON document served at /.well-known/agent.json describing the agent's name, URL, capabilities, and skills. It is the discovery document that lets other agents (or clients) understand what the agent can do.",
        },
        {
          question: "How does streaming work in A2A?",
          answer:
            "The agent emits Server-Sent Events (SSE) over the /tasks/sendSubscribe endpoint. Each event carries a status update or partial artifact. The client iterates over the event stream until it receives a terminal status (completed, failed, canceled).",
        },
      ],
      tags: ["architecture", "spec", "agent-card", "sse", "json-rpc"],
    },

    // ── 4. Setup & Resources ─────────────────────────────────────────────
    {
      slug: "setup-resources",
      title: "Setup & Resources",
      type: "reading",
      duration: "5 mins",
      description:
        "Configure your development environment with GitHub Models, Azure AI Foundry, and Foundry Local.",
      readingUrl: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
      objectives: [
        "Clone the course repository and set up Python 3.11+",
        "Configure GitHub Models API for Phi-4 access",
        "Configure Azure AI Foundry for Kimi-K2 and Kimi-K2-Thinking",
        "Install and verify Foundry Local for Qwen2.5 Coder",
        "Run the smoke test script to validate all providers",
      ],
      tags: ["setup", "resources", "environment"],
    },

    // ── 5. First A2A Agent ───────────────────────────────────────────────
    {
      slug: "first-a2a-agent",
      title: "Building Your First A2A Agent",
      type: "video-code",
      duration: "6 mins",
      videoId: "placeholder-first-agent",
      description:
        "Build a QA agent from scratch using GitHub Phi-4 via the OpenAI-compatible API.",
      objectives: [
        "Create a QAAgent class with async invoke method",
        "Configure GitHub Models Phi-4 endpoint",
        "Structure agent responses for A2A compatibility",
        "Test the agent standalone before wrapping",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/05-first-a2a-agent",
      qa: [
        {
          question: "Why use the OpenAI-compatible API for GitHub Models?",
          answer:
            "GitHub Models exposes an OpenAI-compatible endpoint, so any code that uses the OpenAI Python SDK works with Phi-4 by just changing the base_url and api_key to the GitHub Models values.",
        },
      ],
      tags: ["phi-4", "github-models", "python", "qa-agent"],
    },

    // ── 6. A2A Server ────────────────────────────────────────────────────
    {
      slug: "a2a-server",
      title: "Wrapping an Agent as an A2A Server",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-a2a-server",
      description:
        "Take the QA agent and expose it as a fully compliant A2A server with Agent Card, AgentExecutor, and EventQueue.",
      objectives: [
        "Implement the AgentExecutor interface",
        "Use EventQueue for async result streaming",
        "Define an Agent Card with skills and capabilities",
        "Configure A2AStarletteApplication with uvicorn",
        "Follow the port convention scheme (port 10001)",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/06-a2a-server",
      tags: ["a2a-server", "starlette", "uvicorn", "agent-card"],
    },

    // ── 7. A2A Client ────────────────────────────────────────────────────
    {
      slug: "a2a-client",
      title: "Calling an A2A Agent using an A2A Client",
      type: "video-code",
      duration: "6 mins",
      videoId: "placeholder-a2a-client",
      description:
        "Write a Python A2A client that discovers the QA agent's card and sends tasks using both blocking and streaming modes.",
      objectives: [
        "Use A2ACardResolver to fetch and parse Agent Cards",
        "Send tasks using blocking (send_task) mode",
        "Send tasks using streaming (send_task_streaming) mode",
        "Parse task responses and handle errors gracefully",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/07-a2a-client",
      qa: [
        {
          question: "Can I use the TypeScript A2A SDK instead?",
          answer:
            "Yes. The TypeScript SDK (@anthropic-ai/a2a-sdk or equivalent) provides the same getAgentCard() and sendTask() / streamTask() APIs. The protocol contract is language-agnostic.",
        },
      ],
      tags: ["client", "python", "sdk", "streaming"],
    },

    // ── 8. Microsoft Agent Framework ─────────────────────────────────────
    {
      slug: "microsoft-agent-framework",
      title: "A2A with Microsoft Agent Framework",
      type: "video-code",
      duration: "8 mins",
      videoId: "placeholder-msft-af",
      description:
        "Build an OrchestratorAgent using Microsoft Agent Framework with Kimi-K2-Thinking that routes tasks to specialist A2A agents.",
      objectives: [
        "Build an A2AAgent proxy class in Microsoft Agent Framework",
        "Create an OrchestratorAgent with intent-based routing",
        "Configure Kimi-K2-Thinking via Azure AI Foundry",
        "Demonstrate cross-framework interoperability",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/08-microsoft-agent-framework",
      qa: [
        {
          question: "Why use Microsoft Agent Framework for orchestration?",
          answer:
            "Microsoft Agent Framework provides built-in orchestration patterns, agent routing, and enterprise-grade tooling. Combined with Kimi-K2-Thinking's reasoning capabilities, it excels at intent classification and task delegation.",
        },
      ],
      tags: [
        "microsoft",
        "agent-framework",
        "orchestration",
        "kimi-k2-thinking",
      ],
    },

    // ── 9. Google ADK ────────────────────────────────────────────────────
    {
      slug: "google-adk",
      title: "A2A with Google ADK",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-google-adk",
      description:
        "Use the Google Agent Development Kit to build a ResearchAgent with Kimi-K2 and expose it via A2A with a single method call.",
      objectives: [
        "Build an LlmAgent with tool use in Google ADK",
        "Use to_a2a() to auto-generate an A2A server",
        "Connect remote A2A agents using RemoteA2aAgent",
        "Compose agents with SequentialAgent, ParallelAgent, and LoopAgent",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/09-google-adk",
      qa: [
        {
          question: "What does to_a2a() do?",
          answer:
            "The to_a2a() method on an ADK agent auto-generates a complete A2A server — Agent Card, task handler, and HTTP endpoints — from the agent's existing configuration. One line converts any ADK agent into an A2A server.",
        },
      ],
      tags: ["google-adk", "research-agent", "kimi-k2", "tools"],
    },

    // ── 10. LangGraph + MCP ──────────────────────────────────────────────
    {
      slug: "langgraph",
      title: "A2A with LangGraph & MCP",
      type: "video-code",
      duration: "10 mins",
      videoId: "placeholder-langgraph",
      description:
        "Combine LangGraph's stateful graph execution, MCP tool servers, and A2A to build a CodeAgent powered by Foundry Local Qwen2.5 Coder.",
      objectives: [
        "Build a FastMCP server with @mcp.tool() decorators",
        "Connect MCP tools to a LangGraph agent via MultiServerMCPClient",
        "Use create_react_agent for tool-calling with Qwen2.5 Coder",
        "Bridge LangGraph to A2A with langgraph-a2a-server",
        "Run fully local inference with Foundry Local",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/10-langgraph",
      qa: [
        {
          question: "Why combine LangGraph with A2A?",
          answer:
            "LangGraph excels at stateful, multi-step reasoning with checkpointing. Combining it with A2A lets other agents invoke your LangGraph workflow as a black-box A2A agent, getting progress updates via streaming without knowing the internal graph structure.",
        },
        {
          question: "What does MCP add here?",
          answer:
            "MCP tool servers provide structured, type-safe access to external tools. The LangGraph agent calls MCP tools natively while A2A handles the external agent-to-agent communication layer.",
        },
      ],
      tags: ["langgraph", "mcp", "qwen", "foundry-local", "code-agent"],
    },

    // ── 11. CrewAI ───────────────────────────────────────────────────────
    {
      slug: "crewai",
      title: "A2A with CrewAI",
      type: "video-code",
      duration: "8 mins",
      videoId: "placeholder-crewai",
      description:
        "Build a PlannerAgent using CrewAI's role-based agent model with Kimi-K2-Thinking and expose it over A2A.",
      objectives: [
        "Define CrewAI agents with roles, goals, and backstories",
        "Create tasks with expected output specifications",
        "Compose a Crew with sequential process execution",
        "Build a CrewAIExecutor to wrap Crew as an A2A server",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/11-crewai",
      tags: ["crewai", "planner-agent", "kimi-k2-thinking", "roles"],
    },

    // ── 12. OpenAI Agents SDK ────────────────────────────────────────────
    {
      slug: "openai-agents-sdk",
      title: "A2A with OpenAI Agents SDK",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-openai-agents",
      description:
        "Build a TaskAgent using OpenAI's Agents SDK with tool use and handoff capabilities, configured for GitHub Phi-4.",
      objectives: [
        "Define tools with @tool decorator in the Agents SDK",
        "Create an Agent with tools and instructions",
        "Execute tasks with Runner.run()",
        "Configure the SDK for GitHub Phi-4 via OpenAI-compatible API",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/12-openai-agents-sdk",
      tags: ["openai", "agents-sdk", "phi-4", "task-agent"],
    },

    // ── 13. Claude Agent SDK ─────────────────────────────────────────────
    {
      slug: "claude-agent-sdk",
      title: "A2A with Claude Agent SDK",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-claude-agent",
      description:
        "Build an AssistantAgent using the Claude Agent SDK's structured tool use and conversation memory, routed through Kimi-K2 via Foundry.",
      objectives: [
        "Define structured tools with JSON schemas",
        "Manage conversation memory across interactions",
        "Handle per-task state in the Claude Agent SDK",
        "Route inference through Kimi-K2 via Azure AI Foundry",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/13-claude-agent-sdk",
      tags: ["claude-sdk", "assistant-agent", "kimi-k2", "memory"],
    },

    // ── 14. GitHub Copilot SDK ───────────────────────────────────────────
    {
      slug: "github-copilot-sdk",
      title: "A2A with GitHub Copilot SDK",
      type: "video-code",
      duration: "8 mins",
      videoId: "placeholder-copilot-sdk",
      description:
        "Build a CopilotAgent that analyzes pull requests and repository structure using the GitHub Copilot SDK with a dual-use GITHUB_TOKEN.",
      objectives: [
        "Build a code-analysis agent with the GitHub Copilot SDK",
        "Integrate GitHub API for PR and repo analysis",
        "Leverage GITHUB_TOKEN for both API and model access",
        "Wrap as an A2A server on port 10007",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/14-github-copilot-sdk",
      tags: ["github", "copilot-sdk", "phi-4", "code-review"],
    },

    // ── 15. Multi-Agent Deep Dive (Capstone) ─────────────────────────────
    {
      slug: "multi-agent-deep-dive",
      title: "Multi-Agent System Deep Dive",
      type: "video-code",
      duration: "15 mins",
      videoId: "placeholder-capstone",
      description:
        "Capstone: wire all seven framework agents into a unified multi-agent system with a MasterOrchestrator, chain/parallel execution, and error recovery.",
      objectives: [
        "Build a MasterOrchestrator with dynamic agent discovery",
        "Implement chain and parallel execution strategies",
        "Add error recovery with fallback agent selection",
        "Configure the startup script for all 8 agents (ports 10001–10008)",
        "Run the complete multi-agent system end-to-end",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/15-multi-agent-system",
      qa: [
        {
          question:
            "How does the MasterOrchestrator discover available agents?",
          answer:
            "It uses A2ACardResolver to fetch Agent Cards from each port (10001–10008). Each card describes the agent's skills and capabilities, so the orchestrator can route tasks based on intent matching against those skills.",
        },
        {
          question: "What happens if one of the 8 agents is down?",
          answer:
            "The error recovery system detects failures via timeouts or error responses and falls back to the next-best agent based on skill overlap. The system degrades gracefully rather than failing entirely.",
        },
      ],
      tags: ["capstone", "orchestration", "multi-agent", "production"],
    },

    // ── 16. Advanced Concepts ────────────────────────────────────────────
    {
      slug: "advanced-concepts",
      title: "Advanced A2A Concepts — Extensions, Security & Observability",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-advanced",
      description:
        "Explore production-ready A2A patterns: protocol extensions, security hardening (TLS, OAuth 2.0, mTLS), and observability with OpenTelemetry.",
      objectives: [
        "Understand four types of A2A protocol extensions",
        "Apply security patterns: TLS, OAuth 2.0, mTLS",
        "Instrument A2A systems with OpenTelemetry distributed tracing",
        "Evaluate GDPR/HIPAA compliance requirements for agent systems",
      ],
      qa: [
        {
          question: "How do you add authentication to an A2A agent?",
          answer:
            "Add a securitySchemes block to your Agent Card (OpenAPI-style). Clients read this and attach credentials — Bearer tokens, API keys, or OAuth flows — to task requests. The server validates them before processing.",
        },
      ],
      tags: [
        "security",
        "oauth",
        "extensions",
        "observability",
        "opentelemetry",
      ],
    },

    // ── 17. Conclusion ───────────────────────────────────────────────────
    {
      slug: "conclusion",
      title: "Conclusion & Next Steps",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-conclusion",
      description:
        "Recap the complete A2A journey: protocols, seven frameworks, multi-agent orchestration, and paths forward.",
      objectives: [
        "Recall the full A2A technology stack and capabilities built",
        "Identify 12 key patterns practiced across the course",
        "Plan next steps for production deployment and community engagement",
      ],
      tags: ["conclusion", "recap", "next-steps"],
    },

    // ── 18. Quiz ─────────────────────────────────────────────────────────
    {
      slug: "quiz",
      title: "Quiz",
      type: "quiz",
      duration: "10 mins",
      description:
        "Test your understanding of A2A protocol fundamentals, framework integrations, and multi-agent orchestration.",
      quizQuestions: [
        {
          id: "q1",
          question:
            "What is the purpose of the Agent Card in the A2A protocol?",
          options: [
            { id: "a", text: "To store the agent's conversation history" },
            {
              id: "b",
              text: "To describe the agent's capabilities, endpoint, and skills for discovery",
            },
            { id: "c", text: "To encrypt communication between agents" },
            {
              id: "d",
              text: "To define the agent's internal memory structure",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The Agent Card is a JSON discovery document served at /.well-known/agent.json. It describes the agent's name, URL, version, skills, and supported capabilities so other agents can discover and interact with it.",
        },
        {
          id: "q2",
          question:
            "Which HTTP mechanism does A2A use for streaming partial results?",
          options: [
            { id: "a", text: "WebSockets" },
            { id: "b", text: "Long polling" },
            { id: "c", text: "Server-Sent Events (SSE)" },
            { id: "d", text: "gRPC streaming" },
          ],
          correctOptionId: "c",
          explanation:
            "A2A uses Server-Sent Events (SSE) over the tasks/sendSubscribe endpoint for streaming partial results. SSE is unidirectional (server → client), lightweight, and works over standard HTTP.",
        },
        {
          id: "q3",
          question: "What distinguishes A2A from MCP (Model Context Protocol)?",
          options: [
            { id: "a", text: "A2A uses JSON while MCP uses XML" },
            {
              id: "b",
              text: "MCP connects agents to tools/data; A2A connects autonomous agents to each other",
            },
            { id: "c", text: "A2A only works with Google models" },
            { id: "d", text: "MCP requires streaming; A2A does not" },
          ],
          correctOptionId: "b",
          explanation:
            "MCP is designed to connect a single AI model to tools and data sources. A2A is designed for agent-to-agent communication, letting autonomous agents (possibly built on different frameworks or models) discover each other and delegate tasks.",
        },
        {
          id: "q4",
          question:
            "Which Google ADK method auto-generates a complete A2A server from an agent?",
          options: [
            { id: "a", text: "agent.serve()" },
            { id: "b", text: "agent.to_a2a()" },
            { id: "c", text: "agent.export_a2a()" },
            { id: "d", text: "agent.start_server()" },
          ],
          correctOptionId: "b",
          explanation:
            "The to_a2a() method on an ADK agent auto-generates a complete A2A server — Agent Card, task handler, and HTTP endpoints — from the agent's existing configuration.",
        },
        {
          id: "q5",
          question:
            "In A2A task execution, what does a 'working' status indicate?",
          options: [
            {
              id: "a",
              text: "The task has been received but not yet started",
            },
            {
              id: "b",
              text: "The agent is actively processing and may emit partial artifacts",
            },
            { id: "c", text: "The task completed successfully" },
            { id: "d", text: "The task requires additional user input" },
          ],
          correctOptionId: "b",
          explanation:
            "A 'working' status means the agent has started processing the task and may emit streaming updates (partial artifacts). This is an intermediate state between 'submitted' and terminal states like 'completed' or 'failed'.",
        },
        {
          id: "q6",
          question: "What is the role of AgentExecutor in the A2A Python SDK?",
          options: [
            {
              id: "a",
              text: "It defines the Agent Card JSON structure",
            },
            {
              id: "b",
              text: "It is the interface that wraps any agent's logic for the A2A server to call",
            },
            {
              id: "c",
              text: "It manages the HTTP routing for the server",
            },
            {
              id: "d",
              text: "It handles OAuth authentication",
            },
          ],
          correctOptionId: "b",
          explanation:
            "AgentExecutor is the interface between the A2A server infrastructure and your agent's business logic. You implement its execute() method, which receives a RequestContext and uses EventQueue to yield status updates and artifacts.",
        },
        {
          id: "q7",
          question:
            "Which model provider in this course runs entirely locally without an API key?",
          options: [
            { id: "a", text: "GitHub Models" },
            { id: "b", text: "Azure AI Foundry" },
            { id: "c", text: "Foundry Local" },
            { id: "d", text: "OpenAI API" },
          ],
          correctOptionId: "c",
          explanation:
            "Foundry Local runs Qwen2.5 Coder entirely on your local machine. No API key, no cloud dependency, no cost — ideal for development and offline use.",
        },
        {
          id: "q8",
          question:
            "How does the MasterOrchestrator in the capstone lesson discover available agents?",
          options: [
            {
              id: "a",
              text: "It reads a hardcoded configuration file",
            },
            {
              id: "b",
              text: "It uses A2ACardResolver to fetch Agent Cards from each port",
            },
            {
              id: "c",
              text: "Agents register themselves via a central registry",
            },
            {
              id: "d",
              text: "It scans the local network for open ports",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The MasterOrchestrator uses A2ACardResolver to fetch Agent Cards from ports 10001–10008. Each card describes the agent's skills, letting the orchestrator route tasks based on intent matching.",
        },
      ],
    },
  ],

  // ─── Rich overview content ──────────────────────────────────────────────

  overview: {
    heroSubheading:
      "An open protocol for building multi-agent AI systems — where agents discover, delegate, and collaborate across seven frameworks and four model providers.",

    learnItems: [
      {
        icon: "🔮",
        title: "Expose agents as A2A servers",
        description:
          "Wrap agents built with Microsoft Agent Framework, Google ADK, LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK, and GitHub Copilot SDK as fully compliant A2A servers.",
      },
      {
        icon: "🚡",
        title: "Build A2A clients from scratch",
        description:
          "Create clients that fetch Agent Cards, send tasks, and handle both synchronous responses and live SSE streaming — using the A2A Python SDK.",
      },
      {
        icon: "🔀",
        title: "Orchestrate multi-agent workflows",
        description:
          "Wire eight agents into a unified system with chain and parallel execution, dynamic routing via a MasterOrchestrator, and graceful error recovery.",
      },
      {
        icon: "🏠",
        title: "Local-first model providers",
        description:
          "Use GitHub Models Phi-4, Azure AI Foundry Kimi-K2/K2-Thinking, and Foundry Local Qwen2.5 Coder — no expensive cloud APIs required.",
      },
    ],

    aboutParagraphs: [
      "Connecting agents built with different frameworks typically requires extensive custom integration work. A2A solves this with an open protocol that standardizes how agents <strong>discover</strong> each other and <strong>communicate</strong> — regardless of which model, language, or framework they were built on.",
      "In this course, you'll build a complete multi-agent system: seven specialized agents using seven different frameworks, each wrapped as an A2A server. You'll use four different model providers — from free GitHub Models to fully local inference with Foundry Local. The capstone lesson wires everything into an 8-agent orchestrated system with chain execution, parallel processing, and error recovery.",
    ],

    detailItems: [
      {
        title: "Understand why A2A exists",
        description:
          "Explore the client-server architecture of A2A: what an Agent Card is, how tasks flow through the lifecycle (submitted → working → completed), and why standardizing inter-agent communication matters.",
      },
      {
        title: "Build a QA agent with GitHub Phi-4",
        description:
          "Build a QA agent using GitHub Models Phi-4 via the OpenAI-compatible API, wrap it in an A2A server using the A2A Python SDK, and create an A2A client from scratch to communicate with it.",
      },
      {
        title: "Integrate seven agentic frameworks",
        description:
          "Build agents with Microsoft Agent Framework, Google ADK, LangGraph + MCP, CrewAI, OpenAI Agents SDK, Claude Agent SDK, and GitHub Copilot SDK — each wrapped as an A2A server.",
      },
      {
        title: "Combine LangGraph with MCP tools",
        description:
          "Create a CodeAgent using LangGraph, connect it to FastMCP tool servers for structured tool access, and run it entirely locally with Foundry Local Qwen2.5 Coder.",
      },
      {
        title: "Orchestrate with Microsoft Agent Framework",
        description:
          "Build an OrchestratorAgent using Microsoft Agent Framework with Kimi-K2-Thinking that routes tasks to specialist A2A agents based on intent classification.",
      },
      {
        title: "Build the capstone multi-agent system",
        description:
          "Wire all seven framework agents plus a QA agent into a unified 8-agent system with a MasterOrchestrator, chain and parallel execution, error recovery, and a full startup script.",
      },
      {
        title: "Production patterns",
        description:
          "Explore A2A extensions, TLS/OAuth 2.0/mTLS security hardening, OpenTelemetry distributed tracing, and GDPR/HIPAA compliance considerations for enterprise deployment.",
      },
    ],

    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["Python", "AI Agents", "Multi-Agent Systems", "Git"],
      description:
        "AI developers building multi-agent systems or working with agentic workflows. Familiarity with Python 3.11+ and a basic understanding of AI agents is recommended. No cloud accounts required — all model providers offer free tiers or local inference.",
    },

    audienceCards: [
      {
        icon: "🛠",
        title: "AI / ML Engineers",
        description:
          "You build AI-powered products and want a standard protocol to connect multiple agents — across frameworks, teams, and organizational boundaries.",
      },
      {
        icon: "⚙️",
        title: "Backend & Platform Engineers",
        description:
          "You design distributed systems and want to add agent-to-agent communication as a first-class capability in your architecture.",
      },
      {
        icon: "💻",
        title: "Full-Stack Developers",
        description:
          "You are exploring agentic AI and want a structured, code-first introduction to multi-agent orchestration with real, runnable examples.",
      },
      {
        icon: "📊",
        title: "Technical Leaders",
        description:
          "You evaluate emerging technologies and need to understand A2A's design, ecosystem backing, and what production readiness looks like.",
      },
    ],
  },
};
