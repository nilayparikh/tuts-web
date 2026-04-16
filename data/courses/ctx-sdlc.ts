import type { CourseDefinition, PartQuizQuestion } from "./types";

const lines = (...value: string[]) => value.join("\n");
const EXAMPLE_LESSONS_BASE =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/blob/001-github-copilot-sdlc/ctx-sdlc/lessons";
const lessonArtifactUrl = (
  lessonFolder: string,
  artifact: "ASSESSMENT.md" | "RUN.md",
) => `${EXAMPLE_LESSONS_BASE}/${lessonFolder}/${artifact}`;

const optionIds = ["a", "b", "c", "d", "e", "f"] as const;

function makeQuizQuestion(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): PartQuizQuestion {
  return {
    id,
    question,
    options: options.map((text, index) => ({
      id: optionIds[index] ?? String(index),
      text,
    })),
    correctOptionId: optionIds[correctIndex] ?? String(correctIndex),
    explanation,
  };
}

export const CTX_SDLC_COURSE: CourseDefinition = {
  slug: "ctx-sdlc",
  title: "Context Engineering for GitHub Copilot",
  description:
    "Master .github and /docs so GitHub Copilot behaves like a project-aware engineering partner across planning, coding, review, and delivery.",
  totalDuration: "~95 mins",
  tags: [
    "Context Engineering",
    "GitHub Copilot",
    ".github",
    "Custom Instructions",
    "MCP",
    "AI-Assisted SDLC",
  ],
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/ctx-sdlc",
  icon: "🧭",
  difficulty: "beginner",
  status: "draft",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  parts: [
    {
      slug: "why-context-engineering",
      title: "Why Context Engineering Matters",
      type: "video",
      duration: "7 mins",
      videoId: "YBXo_hxr9k4",
      description:
        "Understand why AI-assisted engineering fails without durable project context and why context engineering is the most impactful skill for AI-assisted development.",
      objectives: [
        "Explain why AI-assisted engineering fails when project context is missing",
        "Distinguish prompt engineering from durable repository-level context engineering",
        "Describe why context should be treated as engineering infrastructure rather than ad hoc chat setup",
        "Position context engineering as the foundation for planning, implementation, review, and maintenance workflows",
      ],
      infoBoxes: [
        {
          title: "No Prerequisites",
          content:
            "This is the first lesson. No setup or prior knowledge is needed beyond basic familiarity with a code editor. Follow the course in order because each lesson adds a new context layer on top of the previous one.",
        },
      ],
      noteBoxes: [
        {
          title: "Context Engineering Is Not Prompt Engineering",
          content:
            "Prompt engineering optimizes one interaction. Context engineering optimizes every interaction across the lifetime of a repository by storing reusable instructions, prompts, agents, and documentation in version control.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Poor Context"] --> B["Generic suggestions\\nWrong frameworks\\nInconsistent style"]\n    C["Rich Context"] --> D["Project-aware code\\nCorrect patterns\\nTeam conventions"]\n    E[".github/ + /docs/"] --> C',
          caption:
            "AI output quality is a direct function of the context you provide.",
          alt: "Poor context leads to generic suggestions while rich context from .github and docs leads to project-aware code.",
        },
        {
          chart:
            'graph TD\n    A["Level 1: Autocomplete\\nPredict next tokens"] --> B["Level 2: Chat\\nAnswer code questions"]\n    B --> C["Level 3: Agent\\nAutonomous task execution"]\n    C --> D["Level 4: Orchestrated Agents\\nMulti-agent workflows"]',
          caption:
            "As AI assistance grows more autonomous, the context requirements increase dramatically.",
          alt: "Four levels of AI assistance from autocomplete to orchestrated agents.",
        },
      ],
      poll: {
        question: "How do you use GitHub Copilot today?",
        options: [
          { id: "autocomplete", text: "Autocomplete only" },
          {
            id: "chat",
            text: "Chat for questions, but I re-explain context every session",
          },
          {
            id: "instructions",
            text: "I have some custom instructions set up",
          },
          {
            id: "agents",
            text: "Agents, prompts, and skills — full .github/ setup",
          },
          { id: "none", text: "I have not started using Copilot yet" },
        ],
        simulatedVotes: {
          autocomplete: 22,
          chat: 38,
          instructions: 24,
          agents: 9,
          none: 7,
        },
      },
      qa: [
        {
          question: "What is the main failure mode this course addresses?",
          answer:
            "AI systems are strong generalists but weak at project-specific judgment unless you teach them how your repository works. Wrong frameworks, wrong conventions, and wrong validation steps are usually context failures, not model failures.",
        },
        {
          question: "Why does this matter more for agents than autocomplete?",
          answer:
            "Autocomplete only needs the current file. Agents need architecture, tooling, validation commands, and role boundaries to act safely and correctly across a whole repository.",
        },
        {
          question:
            "What is the durable alternative to repeating context in chat?",
          answer:
            "Encode the shared knowledge once in .github and /docs so every developer, every session, and every agent run gets the same context automatically.",
        },
      ],
      tags: [
        "introduction",
        "context-engineering",
        "motivation",
        "ai-assisted-development",
      ],
      exampleAssessment: {
        model: "claude-haiku-4.5",
        duration: "1m 24s",
        date: "2025-03-15",
        verdict: "pass",
        promptUnderTest:
          "Implement the manual review escalation workflow for this repository. Follow existing repo conventions and architecture. Return the exact files you would change and the code for each change.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "With-context read all 3 context docs in first 15 s; without-context had none to discover",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "With-context: 25 tool calls, 1 m 24 s, 3 edits — without-context: ~40 calls, >180 s timeout, 11 edits",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "Same short prompt in both conditions; no constraints violated",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary:
              "With-context scored 14/14 on rubric; without-context scored 4.5/14",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary:
              "All four lesson objectives demonstrated through the comparative gap",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "Not applicable for manual comparison",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary:
              "With-context: discovery-first, all context read before writing",
          },
        ],
      },
      exampleRun: {
        sessionId: "c162f7a2-27ae-4690-875d-470238c01d31",
        model: "claude-haiku-4.5",
        duration: "1m 24s",
        stages: [
          {
            name: "Discovery",
            timeRange: "0–15 s",
            contextLoaded: "Listed workspace root, found .github/, docs/, src/",
            purpose: "Locate context files",
          },
          {
            name: "Context Reading",
            timeRange: "15–22 s",
            contextLoaded:
              "Read manual-review-escalation.md (all 14 requirements), architecture.md",
            purpose: "Extract specification and architecture knowledge",
          },
          {
            name: "Convention Discovery",
            timeRange: "22–60 s",
            contextLoaded:
              "Read 12 source files (routes, services, models, rules, audit)",
            purpose: "Map repo-specific conventions and codebase structure",
          },
          {
            name: "Planning & Implementation",
            timeRange: "60–84 s",
            contextLoaded: "14-point plan matching spec, then 3 surgical edits",
            purpose: "Implement against discovered context",
          },
        ],
        toolCalls: [
          {
            tool: "view",
            target: "with-context/",
            outcome: "directory listing",
            success: true,
          },
          {
            tool: "view",
            target: "docs/",
            outcome: "file listing",
            success: true,
          },
          {
            tool: "view",
            target: "src/",
            outcome: "directory listing",
            success: true,
          },
          {
            tool: "view",
            target: "docs/manual-review-escalation.md",
            outcome: "read 14-point spec",
            success: true,
          },
          {
            tool: "view",
            target: "docs/architecture.md",
            outcome: "system design",
            success: true,
          },
          {
            tool: "view",
            target: "src/routes/applications.ts",
            outcome: "read 150 lines",
            success: true,
          },
          {
            tool: "view",
            target: "src/services/loan-service.ts",
            outcome: "read 200 lines",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "routes/applications.ts",
            outcome: "added POST endpoint",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "services/loan-service.ts",
            outcome: "added function",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "rules/escalation-rules.ts",
            outcome: "new rule module",
            success: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~25" },
          { label: "Files Changed", value: "3" },
          { label: "Rubric Score", value: "14/14" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "01-why-context-engineering",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("01-why-context-engineering", "RUN.md"),
    },
    {
      slug: "curate-project-context",
      title: "Curate Project Context with .github and /docs/",
      type: "video",
      duration: "10 mins",
      videoId: "1B90MkDnmhs",
      description:
        "Build the shared context layer that powers every AI interaction in your project by combining .github behavioral guidance with /docs knowledge context.",
      objectives: [
        "Explain why .github and /docs should be treated as one shared context layer",
        "Distinguish behavioral guidance from knowledge context",
        "Identify the repository artifacts that provide high-leverage project context to AI systems",
        "Design a starter context layout that helps both human contributors and AI assistants",
      ],
      infoBoxes: [
        {
          title: "Two Halves of the Same System",
          content:
            ".github tells the assistant how to behave: standards, workflows, tools, and roles. /docs tells the assistant what it needs to know: architecture, ADRs, API contracts, and operational constraints. If you only provide one half, the assistant still has to guess too much.",
        },
      ],
      noteBoxes: [
        {
          title: "What Not To Put In Instructions",
          content:
            "Do not restate linter rules, copy large READMEs, or duplicate code definitions into instruction files. Link to source material instead. The goal is a maintainable context layer, not a bloated one.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph ".github/"\n        A["copilot-instructions.md"] --> |"Always on"| Z["AI Context"]\n        B["instructions/"] --> |"Glob-filtered"| Z\n        C["prompts/"] --> |"User-invoked"| Z\n        D["agents/"] --> |"Agent-selected"| Z\n        E["skills/"] --> |"On-demand"| Z\n        F["hooks/"] --> |"Event-driven"| Z\n    end',
          caption:
            "Each .github subfolder feeds context through a different activation mechanism.",
          alt: "Six .github configuration surfaces connect to shared AI context.",
        },
        {
          chart:
            'graph LR\n    subgraph "HOW to behave"\n        A[".github/\\nInstructions\\nAgents\\nPrompts"]\n    end\n    subgraph "WHAT to know"\n        B["/docs/\\nArchitecture\\nADRs\\nConventions"]\n    end\n    A --> |"References"| B\n    B --> |"Feeds"| A\n    A --> C["AI Context"]\n    B --> C',
          caption:
            ".github provides behavioral rules while /docs provides knowledge context.",
          alt: ".github behavioral guidance and /docs knowledge context feed into AI context.",
        },
      ],
      poll: {
        question:
          "What does your repo's .github folder currently contain for Copilot?",
        options: [
          {
            id: "nothing",
            text: "Nothing AI-related — just workflows and templates",
          },
          { id: "basic", text: "A basic copilot-instructions.md file" },
          {
            id: "layered",
            text: "Multiple instruction files with applyTo scoping",
          },
          {
            id: "full",
            text: "Instructions plus prompts plus agents or skills",
          },
          { id: "unsure", text: "I am not sure what is in there" },
        ],
        simulatedVotes: {
          nothing: 32,
          basic: 28,
          layered: 18,
          full: 8,
          unsure: 14,
        },
      },
      codePreview: {
        title: "Starter Context Layout",
        description:
          "A small but effective repository context layer for a loan-workbench project.",
        segments: [
          {
            code: lines(
              ".github/",
              "  copilot-instructions.md",
              "  instructions/",
              "    frontend.instructions.md",
              "    backend.instructions.md",
              "docs/",
              "  architecture.md",
              "  adr/",
              "    001-state-management.md",
            ),
            language: "text",
            filename: "loan-workbench tree",
            explanation:
              "Keep behavior in .github and knowledge in docs so the assistant gets both the how and the why.",
          },
          {
            code: lines(
              "# .github/copilot-instructions.md",
              "",
              "- Product: Loan Workbench for underwriting teams.",
              "- Frontend: React 19 + TypeScript + Tailwind.",
              "- Backend: FastAPI + Pydantic + SQLAlchemy async.",
              "- Testing: Vitest for UI, pytest for API.",
              "- Never invent workflow states; use docs/architecture.md and ADRs.",
            ),
            language: "markdown",
            filename: ".github/copilot-instructions.md",
            explanation:
              "Start with a short repository-wide file that gives Copilot identity, stack, and non-obvious global rules.",
          },
        ],
      },
      qa: [
        {
          question: "Why do docs matter if the code already exists?",
          answer:
            "Code shows what exists. Docs explain why it exists, what was rejected, and what operational constraints matter. That missing why is often what the AI needs to avoid wrong suggestions.",
        },
        {
          question: "What is the highest-value document type for AI context?",
          answer:
            "Architecture Decision Records are especially valuable because they teach the assistant both the chosen pattern and the rejected alternatives.",
        },
        {
          question: "What should live in .github versus docs?",
          answer:
            "Put behavior and automation in .github. Put architecture, decisions, conventions, and operational knowledge in docs. They solve different but complementary problems.",
        },
      ],
      tags: [
        ".github",
        "docs-folder",
        "project-context",
        "repository-structure",
        "ADR",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "1m 44s",
        date: "2026-03-14",
        verdict: "pass",
        promptUnderTest:
          "Refactor notification preference write handlers so the generic route and the existing email/SMS routes follow the same owner-only, delegated-session, audit, and FORBIDDEN-error conventions.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Read architecture, API conventions, preference management docs, and route file",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "Completed in 1 m 44 s with ~5 tool calls; single focused file edit",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "All constraints respected; inspection-first behavior observed",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations; no shell commands executed",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary: "Discovery-first; all context read before single write",
          },
        ],
      },
      exampleRun: {
        sessionId: "f7b0578c-da1b-41a2-b2ef-41ff6af49bce",
        model: "GPT-5.4",
        duration: "1m 44s",
        stages: [
          {
            name: "Doc + Route Discovery",
            timeRange: "0–17 s",
            contextLoaded:
              "architecture.md, api-conventions.md, preference-management-example.md, notifications.ts, error-handler.ts",
            purpose: "Discover write route surface and conventions",
          },
          {
            name: "Deep Source Read",
            timeRange: "25–42 s",
            contextLoaded:
              "role-permissions.ts, types.ts, audit-service.ts, preference-repository.ts, auth.ts",
            purpose: "Read permission model, audit patterns, existing CRUD",
          },
          {
            name: "Code Generation",
            timeRange: "~60 s",
            contextLoaded: "All context consumed; extracts shared helpers",
            purpose: "DRY refactor of notification handlers",
          },
          {
            name: "Verification",
            timeRange: "80–84 s",
            contextLoaded: "Final view to confirm all patterns applied",
            purpose: "Self-check correctness",
          },
        ],
        toolCalls: [
          {
            tool: "view",
            target: "docs/architecture.md",
            outcome: "System layers + queue",
            success: true,
          },
          {
            tool: "view",
            target: "docs/api-conventions.md",
            outcome: "FORBIDDEN prefix, audit contract",
            success: true,
          },
          {
            tool: "view",
            target: "docs/preference-management-example.md",
            outcome: "4 constraints",
            success: true,
          },
          {
            tool: "view",
            target: "routes/notifications.ts",
            outcome: "272 lines",
            success: true,
          },
          {
            tool: "view",
            target: "middleware/error-handler.ts",
            outcome: "error prefix parsing",
            success: true,
          },
          {
            tool: "rg",
            target: "audit|publish|emit.*audit",
            outcome: "pattern matches",
            success: true,
          },
          {
            tool: "view",
            target: "rules/role-permissions.ts",
            outcome: "permission mapping",
            success: true,
          },
          {
            tool: "view",
            target: "services/audit-service.ts",
            outcome: "auditAction() signature",
            success: true,
          },
          {
            tool: "view",
            target: "models/preference-repository.ts",
            outcome: "findPreference(), setPreference()",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "MODIFY notifications.ts",
            outcome: "extract shared helpers",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Extract assertCanWriteNotificationPreferences() helper",
            basis: "DRY refactor from 3 identical guard blocks",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Use FORBIDDEN error prefix",
            basis: "From api-conventions.md",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Block delegated sessions from writing",
            basis: "From preference-management-example.md",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Add setPreferenceWithAudit() wrapper",
            basis: "Discovered auditAction() API",
            constraintType: "inferred",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~18" },
          { label: "Lines Changed", value: "~30" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "02-curate-project-context",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("02-curate-project-context", "RUN.md"),
    },
    {
      slug: "instruction-architecture",
      title: "Design Instruction Architecture",
      type: "video",
      duration: "9 mins",
      videoId: "BS2NbFnyYJY",
      description:
        "Design a layered instruction architecture with repository-wide defaults, path-specific scoping, and the three-axis context model that keeps AI guidance precise and maintainable.",
      objectives: [
        "Describe the difference between repository-wide, path-specific, and agent-scoped instruction patterns",
        "Explain how instruction layering reduces irrelevant context and conflicting guidance",
        "Use applyTo scoping to encode framework- or domain-specific rules",
        "Apply the three-axis context model to organize customization files",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/ctx-sdlc/lessons/03-instruction-architecture",
      infoBoxes: [
        {
          title: "Two Ways Instructions Activate",
          content:
            "Instructions load either because the current file matches the applyTo glob pattern, or because the description semantically matches the current task. Good descriptions capture intent and trigger phrases, not just file types.",
        },
      ],
      noteBoxes: [
        {
          title: "Keep Instructions Focused",
          content:
            "Put non-obvious conventions in instructions. Do not duplicate rules already enforced by ESLint, Prettier, type checkers, or test runners. Split by concern using multiple files, not one giant dump.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph "Horizontal — Always Available"\n        A["Agents"]\n        B["Skills"]\n    end\n    subgraph "Vertical — Filtered by Scope"\n        C["Instructions"]\n        D["Org → Repo → Path → Personal"]\n    end\n    subgraph "Diagonal — Task-Specific"\n        E["Prompts"]\n    end\n    A --> F["Runtime Context"]\n    B --> F\n    C --> F\n    E --> F',
          caption:
            "The three-axis model explains how different context sources activate and combine.",
          alt: "Horizontal agents and skills, vertical instructions, and diagonal prompts compose into runtime context.",
        },
        {
          chart:
            'graph TD\n    A["Personal Settings"] --> B["Path-Specific\\n*.instructions.md"]\n    B --> C["Repository-Wide\\ncopilot-instructions.md"]\n    C --> D["Organization Defaults"]',
          caption:
            "More specific scopes override broader defaults when instructions conflict.",
          alt: "Instruction precedence pyramid from organization defaults up to personal settings.",
        },
      ],
      poll: {
        question: "How are your Copilot instructions organized today?",
        options: [
          { id: "none", text: "No instruction files yet" },
          {
            id: "single",
            text: "One copilot-instructions.md with everything in it",
          },
          { id: "few", text: "A few files, loosely organized" },
          {
            id: "layered",
            text: "Layered with applyTo scoping per framework or domain",
          },
        ],
        simulatedVotes: {
          none: 24,
          single: 35,
          few: 23,
          layered: 18,
        },
      },
      codePreview: {
        title: "Layered Instruction Files",
        description:
          "Repository-wide defaults plus focused path-specific rules for the same loan-workbench repo.",
        segments: [
          {
            code: lines(
              "---",
              'applyTo: "**"',
              "---",
              "",
              "# Loan Workbench Repository Rules",
              "",
              "- Use React for apps/web and FastAPI for services/api.",
              "- Never invent underwriting workflow states.",
              "- Always reference docs/adr before changing domain behavior.",
            ),
            language: "markdown",
            filename: ".github/copilot-instructions.md",
            explanation:
              "Keep the repository-wide layer short and universally applicable.",
          },
          {
            code: lines(
              "---",
              'name: "Loan UI Standards"',
              'description: "Rules for React loan workflow screens, accessibility, and form state"',
              'applyTo: "apps/web/**/*.tsx"',
              "---",
              "",
              "- Use named exports for components.",
              "- Forms use React Hook Form with Zod validation.",
              "- Loan status badges must use the shared status map.",
            ),
            language: "markdown",
            filename: ".github/instructions/frontend.instructions.md",
            explanation:
              "Path-scoped instructions keep UI-specific guidance out of backend tasks.",
          },
        ],
      },
      qa: [
        {
          question: "Why is one huge instruction file a problem?",
          answer:
            "It loads irrelevant guidance for unrelated tasks, wastes context budget, and becomes difficult to maintain as frameworks and domains evolve.",
        },
        {
          question: "What does the description field really do?",
          answer:
            "It is not just documentation. It is a semantic routing hint that helps the runtime decide when a file is relevant even outside strict path matching.",
        },
        {
          question: "Where do agent-specific rules belong?",
          answer:
            "Inside the relevant .agent.md file, because those rules belong to a role on the horizontal axis rather than to a file path on the vertical axis.",
        },
      ],
      tags: [
        "instructions",
        "applyTo",
        "layering",
        "three-axis-model",
        "glob-patterns",
        "context-pyramid",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "2m 3s",
        date: "2026-03-13",
        verdict: "pass",
        promptUnderTest:
          "Create a pure business-rule module at src/backend/src/rules/notification-channel-rules.ts and matching tests. The rule should validate when disabling a notification channel is allowed for mandatory events, including the California decline LEGAL-218 restriction.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Read types, existing rules, permissions, and instruction layers",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "Completed in 2 m 3 s with ~4 tool calls; two files added cleanly",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "All constraints respected; discovered instruction-layer conventions",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary:
              "5 instructions injected; 9-turn discovery gap before writes",
          },
        ],
      },
      exampleRun: {
        sessionId: "1f3eda36-a79d-4c3e-99f8-897f393d9dbd",
        model: "GPT-5.4",
        duration: "2m 41s",
        stages: [
          {
            name: "Initial Discovery",
            timeRange: "0–19 s",
            contextLoaded:
              "Glob patterns empty, rg found mandatory-events, notification patterns",
            purpose: "Map guardrail files",
          },
          {
            name: "Fallback: Directory Traversal",
            timeRange: "25–42 s",
            contextLoaded:
              "architecture.md, instruction-layering-example.md, mandatory-events.ts source of truth",
            purpose: "Manual mapping after glob failure",
          },
          {
            name: "Deep Read: Rules & Tests",
            timeRange: "46–57 s",
            contextLoaded:
              "mandatory-events.ts, business-rules.ts, state-machine.ts, role-permissions.ts",
            purpose: "Understand rule API and test patterns",
          },
          {
            name: "Notification Surface Scan",
            timeRange: "1 m 3–1 m 9 s",
            contextLoaded: "14 matching files across routes, models, services",
            purpose: "Map notification domain",
          },
        ],
        toolCalls: [
          {
            tool: "glob",
            target: "src/backend/src/rules/**/*.ts",
            outcome: "no matches",
            success: false,
          },
          {
            tool: "glob",
            target: "src/backend/tests/**/*.test.ts",
            outcome: "no matches",
            success: false,
          },
          {
            tool: "glob",
            target: "docs/*.md",
            outcome: "2 files",
            success: true,
          },
          {
            tool: "view",
            target: "docs/architecture.md",
            outcome: "60 lines",
            success: true,
          },
          {
            tool: "view",
            target: "docs/instruction-layering-example.md",
            outcome: "59 lines, 10 constraints",
            success: true,
          },
          {
            tool: "view",
            target: "mandatory-events.ts",
            outcome: "MANDATORY_EVENTS map",
            success: true,
          },
          {
            tool: "view",
            target: "business-rules.ts",
            outcome: "RuleViolation interface",
            success: true,
          },
          {
            tool: "view",
            target: "role-permissions.ts",
            outcome: "ROLE_PERMISSIONS",
            success: true,
          },
          {
            tool: "view",
            target: "business-rules.test.ts",
            outcome: "baseLoan fixture, vitest",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE notification-channel-rules.ts",
            outcome: "pure rule module",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE notification-channel-rules.test.ts",
            outcome: "4 test cases",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Glob-to-directory-walk fallback",
            basis: "Path resolution issue",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Use getMandatoryEvents() over direct map",
            basis: "Public API pattern",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Case-insensitive state code handling",
            basis: "Instruction requirement",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "California LEGAL-218 check first",
            basis: "Priority ordering",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "ReadonlyArray input pattern",
            basis: "Purity constraint",
            constraintType: "prompt",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~34" },
          { label: "Lines Changed", value: "~150" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "03-instruction-architecture",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("03-instruction-architecture", "RUN.md"),
    },
    {
      slug: "planning-workflows",
      title: "Planning Workflows with Prompts and Plan Agents",
      type: "video",
      duration: "10 mins",
      videoId: "KuLgT8Wck_E",
      description:
        "Separate planning from implementation using prompt files for repeatable workflows and read-only planning agents that decompose tasks, surface ambiguity, and produce actionable implementation plans.",
      objectives: [
        "Explain why AI-assisted planning should be separated from implementation work",
        "Use prompt files to standardize recurring planning activities",
        "Describe how read-only planning agents improve decomposition and clarification",
        "Design a planning workflow that turns vague requests into actionable implementation tasks",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/ctx-sdlc/ghctx-tut/lessons/04-planning-workflows",
      infoBoxes: [
        {
          title: "Plan Before You Code",
          content:
            "Many teams jump straight from a feature request to code generation. That feels fast, but it usually produces weak results because the AI is asked to interpret requirements, choose architecture, and write code all at once.",
        },
      ],
      noteBoxes: [
        {
          title: "Planning Agents Should Be Read-Only",
          content:
            "Planning agents should inspect the repository, read documentation, and produce a plan — not create or modify files. That separation keeps discovery distinct from implementation and prevents premature changes.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Curate Context\\n.github/ + /docs/"] --> B["Plan\\nPrompts + Read-Only Agents"]\n    B --> C["Build\\nImplementation Agents"]\n    C --> D["Validate\\nReview + Guardrails"]\n    D --> |"Feedback"| A',
          caption:
            "Context engineering follows a curate → plan → build → validate cycle.",
          alt: "Four-phase workflow from curated context to planning, building, and validation.",
        },
        {
          chart:
            'graph TD\n    A["Vague Request"] --> B["Planning Agent"]\n    B --> C{"Requirements complete?"}\n    C --> |"No"| D["Surface open questions"]\n    D --> E["Developer clarifies"]\n    E --> B\n    C --> |"Yes"| F["Structured plan"]',
          caption:
            "Good planning workflows force ambiguous requests to become explicit before coding starts.",
          alt: "Clarification loop for planning ambiguous feature requests.",
        },
      ],
      poll: {
        question:
          "How do you typically approach a new feature with AI assistance?",
        options: [
          {
            id: "direct",
            text: "Jump straight to code from the feature request",
          },
          {
            id: "manual",
            text: "Write a plan manually, then ask AI to implement it",
          },
          {
            id: "prompt",
            text: "Use a prompt or template to generate a plan first",
          },
          {
            id: "agent",
            text: "Use a dedicated read-only planning agent",
          },
        ],
        simulatedVotes: {
          direct: 41,
          manual: 26,
          prompt: 20,
          agent: 13,
        },
      },
      codePreview: {
        title: "Planning Prompt and Agent",
        description:
          "A feature-planning slash command and a read-only planner agent for the loan-workbench project.",
        segments: [
          {
            code: lines(
              "---",
              'name: "plan-feature"',
              'description: "Break down a loan-workbench feature into implementation tasks"',
              'agent: "planner"',
              "tools:",
              "  - read_file",
              "  - grep_search",
              "  - semantic_search",
              "---",
              "",
              "Feature request: ${input:feature}",
              "",
              "Produce:",
              "1. Summary",
              "2. Open questions",
              "3. Tasks with acceptance criteria",
              "4. Validation steps",
            ),
            language: "markdown",
            filename: ".github/prompts/plan-feature.prompt.md",
            explanation:
              "Prompt files turn repeatable planning motions into one slash command.",
          },
          {
            code: lines(
              "---",
              'name: "planner"',
              'description: "Read-only planning agent for repository analysis and task decomposition"',
              "tools:",
              "  - read_file",
              "  - grep_search",
              "  - semantic_search",
              "agents: []",
              "---",
              "",
              "- Never create or edit files.",
              "- Surface open questions before proposing tasks.",
              "- Reference ADRs and architecture docs in every plan.",
            ),
            language: "markdown",
            filename: ".github/agents/planner.agent.md",
            explanation:
              "The planner agent is intentionally limited to read-only work and structured output.",
          },
        ],
      },
      qa: [
        {
          question: "Why not let the implementer do the planning too?",
          answer:
            "Because planning and implementation require different behaviors. A planner should explore, question, and decompose. An implementer should execute against an agreed plan.",
        },
        {
          question: "What is the value of clarification loops?",
          answer:
            "They force vague requests to become explicit before code changes begin, which reduces rework and avoids hidden assumptions in the implementation phase.",
        },
        {
          question: "What should every good planning output include?",
          answer:
            "A summary, open questions, concrete tasks, dependencies, risks, and validation steps. Planning is only useful if it becomes actionable.",
        },
      ],
      tags: [
        "prompt-files",
        "planning-agent",
        "slash-commands",
        "variables",
        "clarification-loops",
        "read-only",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "1m 14s",
        date: "2026-03-13",
        verdict: "pass",
        promptUnderTest:
          "Inspect the relevant docs/, specs/, and existing source surfaces for notification preferences. Discover the architecture, ADR, product, and NFR context you need rather than assuming a fixed file list. Produce a structured implementation plan.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Discovered architecture, ADR, product spec, and NFR docs autonomously",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "Completed in 1 m 14 s with ~5 tool calls; single plan artifact",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "All plan sections present; discovery-first behavior observed",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations; read-only discovery phase",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary:
              "61 files read before writing; plan built from broad discovery",
          },
        ],
      },
      exampleRun: {
        sessionId: "0b1cb144-3c12-4347-909a-85fc85baa317",
        model: "GPT-5.4",
        duration: "3m 57s",
        stages: [
          {
            name: "Initial Discovery",
            timeRange: "0–18 s",
            contextLoaded:
              "Glob patterns failed, rg found docs (19 hits), specs (84 hits)",
            purpose: "Identify doc and spec files",
          },
          {
            name: "Read Docs & ADR",
            timeRange: "25–46 s",
            contextLoaded:
              "architecture.md, planning-workflow-example.md (10 plan reqs), ADR-003-frontend-state.md",
            purpose: "Load system knowledge and planning constraints",
          },
          {
            name: "Read All Specs",
            timeRange: "46 s+",
            contextLoaded:
              "product-spec (FR-1–FR-6, SC-1–SC-3), NFRs (7 items), feature-request, bug-report",
            purpose: "Extract normalized requirements",
          },
          {
            name: "Source Surfaces",
            timeRange: "46 s–3 m 41 s",
            contextLoaded: "~50 source files across backend and frontend",
            purpose: "Map exact change surfaces and behavior",
          },
        ],
        toolCalls: [
          {
            tool: "glob",
            target: "docs/**/*",
            outcome: "no matches",
            success: false,
          },
          {
            tool: "glob",
            target: "specs/**/*",
            outcome: "no matches",
            success: false,
          },
          {
            tool: "rg",
            target: "notification|preference|LEGAL-218|delegated",
            outcome: "19 + 84 hits",
            success: true,
          },
          {
            tool: "view",
            target: "docs/architecture.md",
            outcome: "system architecture",
            success: true,
          },
          {
            tool: "view",
            target: "docs/adr/ADR-003-frontend-state.md",
            outcome: "central store requirement",
            success: true,
          },
          {
            tool: "view",
            target: "specs/product-spec-notification-preferences.md",
            outcome: "193 lines, FR-1–FR-6",
            success: true,
          },
          {
            tool: "view",
            target: "specs/non-functional-requirements.md",
            outcome: "110 lines, NFR-1–NFR-7",
            success: true,
          },
          {
            tool: "view",
            target: "routes/notifications.ts",
            outcome: "271 lines — write endpoints",
            success: true,
          },
          {
            tool: "view",
            target: "middleware/auth.ts",
            outcome: "delegation detection",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE plan.md",
            outcome: "structured implementation plan",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Product spec is canonical for FR/SC requirements",
            basis: "More detailed than feature-request.md",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Separate confirmed vs inferred requirements",
            basis: "Planning discipline",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "3 false positives and 5 hard negatives documented",
            basis: "Prompt requirement",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Highlight fail-closed audit gap as largest risk",
            basis: "NFR analysis",
            constraintType: "inferred",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~87" },
          { label: "Files Read", value: "61" },
          { label: "Discovery", value: "3 m 41 s" },
          { label: "Writing", value: "14 s" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "04-planning-workflows",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("04-planning-workflows", "RUN.md"),
    },
    {
      slug: "implementation-workflows",
      title: "Implementation Workflows with Agents and Skills",
      type: "video",
      duration: "11 mins",
      videoId: "ZvclU2Jyx5o",
      description:
        "Design implementation workflows using custom agents for role separation, skills for reusable patterns, and TDD handoffs for disciplined execution — all governed by least-privilege tool boundaries.",
      objectives: [
        "Explain how custom agents and skills support role-specialized implementation work",
        "Apply least-privilege principles to implementation and review workflows",
        "Describe how TDD handoffs improve reliability in AI-assisted coding",
        "Design an implementation workflow that separates planning, coding, and review concerns",
      ],
      infoBoxes: [
        {
          title: "Role Separation Beats Monolithic Agents",
          content:
            "Implementation is not one undifferentiated act. Planning, coding, testing, and review need different tools, different context windows, and different behavioral constraints. Splitting these roles improves output at every stage.",
        },
      ],
      noteBoxes: [
        {
          title: "Least-Privilege Boundaries",
          content:
            "A review agent should never have write access. An implementation agent should not carry deployment tools by default. Restricting capabilities reduces accidental behavior and limits blast radius.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    P["Planner Agent\\nread-only"] --> I["Implementer Agent\\nwrite scoped"]\n    I --> R["Reviewer Agent\\nread-only + diagnostics"]\n    R --> |"feedback"| I\n    R --> |"approved"| D["Done"]',
          caption:
            "Three-agent implementation trio: planner decomposes, implementer codes, reviewer validates.",
          alt: "Planner agent passes a structured plan to implementer, which passes changes to reviewer with a feedback loop.",
        },
        {
          chart:
            "sequenceDiagram\n    participant Dev as Developer\n    participant T as Test Agent\n    participant I as Implement Agent\n    participant R as Review Agent\n    Dev->>T: Describe expected behavior\n    T->>I: Handoff: make test pass\n    I->>R: Handoff: validate changes\n    R-->>I: Fix issues if needed\n    R->>Dev: All green",
          caption:
            "TDD handoff keeps test creation, implementation, and review separated.",
          alt: "Test agent, implementer, and reviewer form a TDD handoff sequence.",
        },
      ],
      poll: {
        question:
          "How many distinct agents or roles do you currently use in your coding workflow?",
        options: [
          { id: "one", text: "Just one — default chat or inline agent" },
          { id: "two", text: "Two — a planner and an implementer" },
          {
            id: "three",
            text: "Three or more — planner, implementer, reviewer, and more",
          },
          { id: "none", text: "I do not use AI agents for implementation" },
        ],
        simulatedVotes: {
          one: 48,
          two: 22,
          three: 12,
          none: 18,
        },
      },
      codePreview: {
        title: "Role-Separated Agent Definitions",
        description:
          "Three complementary agents plus a small TDD skill package.",
        segments: [
          {
            code: lines(
              "---",
              'name: "implementer"',
              'description: "Write code for approved loan-workbench tasks"',
              "tools:",
              "  - read_file",
              "  - create_file",
              "  - replace_string_in_file",
              "  - run_in_terminal",
              "agents:",
              "  - reviewer",
              "---",
              "",
              "- Follow the plan exactly.",
              "- Prefer existing utilities before writing new ones.",
              "- Hand off to reviewer after implementation.",
            ),
            language: "markdown",
            filename: ".github/agents/implementer.agent.md",
            explanation:
              "The implementer gets write access, but only the tools needed for implementation and local validation.",
          },
          {
            code: lines(
              "---",
              'name: "test-driven-development"',
              'description: "Use when implementing any feature or bugfix before writing implementation code"',
              "---",
              "",
              "1. Write a failing test.",
              "2. Run the test and confirm the failure.",
              "3. Write the minimum code to pass.",
              "4. Re-run tests.",
              "5. Refactor if needed.",
            ),
            language: "markdown",
            filename: ".github/skills/test-driven-development/SKILL.md",
            explanation:
              "Skills package reusable workflows and supporting resources without forcing them into every session.",
          },
        ],
      },
      qa: [
        {
          question: "Why are skills useful if I already have agents?",
          answer:
            "Agents define roles. Skills define reusable capabilities or workflows that those roles can invoke when needed. They solve different problems.",
        },
        {
          question:
            "What is the practical benefit of a reviewer agent with no write tools?",
          answer:
            "It must report findings instead of silently changing code, which makes review explicit, auditable, and easier for the developer to reason about.",
        },
        {
          question: "What does TDD handoff improve?",
          answer:
            "It preserves discipline. A test-focused role writes the failing test first, and the implementer focuses on the smallest change that satisfies it.",
        },
      ],
      tags: [
        "custom-agents",
        "agent-skills",
        "tdd-handoffs",
        "role-separation",
        "least-privilege",
        "implementation",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "2m 30s",
        date: "2026-03-14",
        verdict: "pass",
        promptUnderTest:
          "Inspect docs/, specs/, and the relevant notification-preference write surfaces. Write tests first, then add a pure rule module, and wire the minimal production changes into the route file.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Read playbook, NFRs, routes, rules, models, and services before editing",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "Completed in 2 m 30 s with 31 tool calls; three files changed",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "All constraints respected; TDD skill loaded; tests written before rules",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations; denied tools respected",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary:
              "Implementation follows context inspection; 3 writes after 16 reads",
          },
        ],
      },
      exampleRun: {
        sessionId: "75425311-a9e8-4f75-b5b5-33ca70c55d25",
        model: "GPT-5.4",
        duration: "2m 30s",
        stages: [
          {
            name: "Skill Load + Doc Discovery",
            timeRange: "0–20 s",
            contextLoaded:
              "TDD skill loaded, glob empty, rg found docs and specs",
            purpose: "Load TDD pattern and map files",
          },
          {
            name: "Architecture + Specs",
            timeRange: "25–45 s",
            contextLoaded:
              "architecture.md (rule-layer pattern), product-spec (FR-1–FR-6)",
            purpose: "Learn system shape and requirements",
          },
          {
            name: "Deep Code Read",
            timeRange: "50 s–1 m 10 s",
            contextLoaded:
              "notifications.ts (272 lines), mandatory-events, business-rules, types, preference-repo, audit",
            purpose: "Understand existing patterns",
          },
          {
            name: "TDD: Tests First",
            timeRange: "1 m 15 s",
            contextLoaded:
              "All context consumed; test file created before rule module",
            purpose: "Follow TDD skill workflow",
          },
        ],
        toolCalls: [
          {
            tool: "skill",
            target: "tdd-workflow",
            outcome: "TDD instructions loaded",
            success: true,
          },
          {
            tool: "glob",
            target: "docs/**/*",
            outcome: "no matches",
            success: false,
          },
          {
            tool: "rg",
            target: "notification|preference|LEGAL-218",
            outcome: "hits found",
            success: true,
          },
          {
            tool: "view",
            target: "docs/implementation-workflow-example.md",
            outcome: "assessment criteria",
            success: true,
          },
          {
            tool: "view",
            target: "routes/notifications.ts",
            outcome: "272 lines — write surface",
            success: true,
          },
          {
            tool: "view",
            target: "rules/mandatory-events.ts",
            outcome: "MANDATORY_EVENTS + getMandatoryEvents()",
            success: true,
          },
          {
            tool: "view",
            target: "models/types.ts",
            outcome: "domain types",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE write-rules.test.ts",
            outcome: "5 test cases",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE write-rules.ts",
            outcome: "pure rule module",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "MODIFY notifications.ts",
            outcome: "wired validator",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Load TDD skill before discovery",
            basis: "Recognized TDD requirement from prompt",
            constraintType: "skill",
            validated: true,
          },
          {
            decision: "Create pure rule module (no DB access)",
            basis: "Spec constraint",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Include false-positive/hard-negative comments",
            basis: "Spec constraint",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Defer bulk email/SMS surfaces",
            basis: "Scope constraint — documented in handoff",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Escalation must keep ≥1 channel enabled",
            basis: "Spec constraint",
            constraintType: "prompt",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~38" },
          { label: "Lines Changed", value: "235" },
          { label: "Files Changed", value: "3" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "05-implementation-workflows",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("05-implementation-workflows", "RUN.md"),
    },
    {
      slug: "tools-and-guardrails",
      title: "MCP, Hooks, and Guardrails",
      type: "video",
      duration: "10 mins",
      videoId: "MBHvkVrEgRk",
      description:
        "Extend agent capabilities with MCP servers for external tool access, then enforce safety with hooks and validation scripts that run at key lifecycle points — keeping your AI workflows powerful and trustworthy.",
      objectives: [
        "Distinguish between capability extensions and enforcement mechanisms in AI-assisted workflows",
        "Explain when to use MCP servers versus hooks for a given requirement",
        "Describe how validation and guardrails reduce operational risk in AI-assisted work",
        "Design a tooling layer that expands capability without sacrificing safety",
      ],
      infoBoxes: [
        {
          title: "Capability Without Guardrails Is Not Enough",
          content:
            "MCP servers let your agents browse the web, query databases, call APIs, and interact with external services. That is powerful — but every new capability needs a corresponding guardrail.",
        },
      ],
      noteBoxes: [
        {
          title: "Hook Safety: Never Call the Model from a Hook",
          content:
            "Hooks must stay fast and deterministic. Do not call AI models from hooks. Use them for validation, formatting, and hard checks only.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph Capability["Expand: MCP Servers"]\n        A["GitHub MCP"]\n        B["Playwright MCP"]\n        C["Postgres MCP"]\n    end\n    subgraph Guardrails["Enforce: Hooks + Validation"]\n        D["onSave Hook"]\n        E["onEdit Guard"]\n        F["onTerminal Guard"]\n    end\n    Capability --> Guardrails\n    Guardrails --> S["Safe, Capable Workflow"]',
          caption:
            "MCP expands what agents can do. Hooks and validation enforce what they must not do.",
          alt: "Capability layer from MCP servers feeds a guardrail layer of hooks and validation.",
        },
        {
          chart:
            "sequenceDiagram\n    participant Agent\n    participant VSCode as VS Code\n    participant Hook\n    Agent->>VSCode: Edit file\n    VSCode->>Hook: onEdit\n    Hook-->>VSCode: Allow or block\n    Agent->>VSCode: Save file\n    VSCode->>Hook: onSave\n    Hook-->>VSCode: Format and lint\n    Agent->>VSCode: Terminal command\n    VSCode->>Hook: onTerminal\n    Hook-->>VSCode: Allow or require approval",
          caption:
            "Hooks fire at key lifecycle points to validate, transform, or block actions.",
          alt: "Edit, save, and terminal lifecycle hooks intercept actions before or after they occur.",
        },
      ],
      poll: {
        question:
          "Which external tool integration would be most valuable for your workflow?",
        options: [
          { id: "browser", text: "Browser automation" },
          { id: "database", text: "Database access" },
          { id: "api", text: "API integration" },
          { id: "none", text: "I have not added MCP servers yet" },
        ],
        simulatedVotes: {
          browser: 24,
          database: 18,
          api: 36,
          none: 22,
        },
      },
      codePreview: {
        title: "Capability and Guardrail Files",
        description:
          "A small MCP config plus a blocking hook for protected paths.",
        segments: [
          {
            code: lines(
              "{",
              '  "servers": {',
              '    "github": {',
              '      "command": "npx",',
              '      "args": ["-y", "@modelcontextprotocol/server-github"],',
              '      "env": { "GITHUB_TOKEN": "${input:githubToken}" }',
              "    }",
              "  }",
              "}",
            ),
            language: "json",
            filename: ".vscode/mcp.json",
            explanation:
              "MCP configuration should use input variables or environment references, never hardcoded secrets.",
          },
          {
            code: lines(
              "#!/usr/bin/env python3",
              '"""Block edits to protected workflow and secrets files."""',
              "import json",
              "import sys",
              "",
              "PROTECTED = ('.github/workflows/', '.env', 'infra/')",
              "payload = json.loads(sys.stdin.read())",
              "path = payload.get('parameters', {}).get('filePath', '')",
              "if any(path.startswith(prefix) for prefix in PROTECTED):",
              "    print(json.dumps({'decision': 'deny'}))",
              "    sys.exit(1)",
              "sys.exit(0)",
            ),
            language: "python",
            filename: ".github/hooks/block-protected-files.py",
            explanation:
              "When failure would be expensive, use a deterministic hook rather than a polite natural-language instruction.",
          },
        ],
      },
      qa: [
        {
          question: "When should I use MCP instead of a hook?",
          answer:
            "Use MCP when the assistant needs a new capability such as browser automation, API access, or database inspection. Use hooks when you need deterministic enforcement or automation around actions the assistant already performs.",
        },
        {
          question:
            "Why are hooks better for protected paths than instructions?",
          answer:
            "Because hooks can block the action outright. Instructions are guidance. Hooks are enforcement.",
        },
        {
          question: "What is the practical rollout strategy here?",
          answer:
            "Add external capabilities incrementally, and add guardrails where failure would be costly. Do not collect tools without a workflow.",
        },
      ],
      tags: [
        "mcp-servers",
        "hooks",
        "guardrails",
        "lifecycle-automation",
        "validation",
        "safety",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "3m 13s",
        date: "2026-03-14",
        verdict: "pass",
        promptUnderTest:
          "Inspect the lesson's guardrail-related instructions, hook configs, scripts, MCP config, and policy docs before answering. Then implement a new import-validation guardrail.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Discovered all existing hooks, scripts, MCP config, and policy docs",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "Completed in 3 m 13 s with ~9 tool calls; two files created",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "All constraints respected; discovery-first across 8+ files",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary:
              "Discovery-first across hooks/scripts/docs; 2 writes after 19 reads",
          },
        ],
      },
      exampleRun: {
        sessionId: "ca2dc2b2-3dc8-45bf-abad-3e17ac710e34",
        model: "GPT-5.4",
        duration: "3m 21s",
        stages: [
          {
            name: "Surface Discovery",
            timeRange: "0–17 s",
            contextLoaded:
              "3 glob empty, 1 rg (103 hits) mapping hooks, scripts, MCP, policy",
            purpose: "Map guardrail infrastructure",
          },
          {
            name: "Convention Reading",
            timeRange: "17–31 s",
            contextLoaded:
              "copilot-instructions, mcp.json, 3 hook JSONs, 3 Python scripts",
            purpose: "Learn hook structure and script patterns",
          },
          {
            name: "Import Landscape",
            timeRange: "31–43 s",
            contextLoaded:
              "rg for imports, glob for index.ts (none), relative imports scan",
            purpose: "Understand TypeScript barrel usage",
          },
          {
            name: "Implementation",
            timeRange: "2 m 4–2 m 42 s",
            contextLoaded: "Session plan + 2 new files created",
            purpose: "Hook config + validation script",
          },
        ],
        toolCalls: [
          {
            tool: "glob",
            target: ".github/**/*.json",
            outcome: "0 matches",
            success: false,
          },
          {
            tool: "glob",
            target: ".github/**/*.py",
            outcome: "0 matches",
            success: false,
          },
          {
            tool: "rg",
            target: "guardrail|hook|MCP|policy|security",
            outcome: "103 matches",
            success: true,
          },
          {
            tool: "view",
            target: ".github/copilot-instructions.md",
            outcome: "50 lines — hook/MCP policy",
            success: true,
          },
          {
            tool: "view",
            target: ".github/mcp.json",
            outcome: "33 lines — sqlite + filesystem",
            success: true,
          },
          {
            tool: "view",
            target: ".github/hooks/file-protection.json",
            outcome: "11 lines — PreToolUse",
            success: true,
          },
          {
            tool: "view",
            target: ".github/scripts/check_protected_files.py",
            outcome: "64 lines — deny payload",
            success: true,
          },
          {
            tool: "view",
            target: ".github/scripts/format_file.py",
            outcome: "24 lines — PostSave script",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE import-validation.json",
            outcome: "hook config created",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE validate_imports.py",
            outcome: "255 lines — validator",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Used PreToolUse event type",
            basis: "Matches existing hook patterns",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Hook invokes python validate_imports.py",
            basis: "Established command pattern from existing hooks",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Emit deny payload with permissionDecision",
            basis: "Standard pattern from check_protected_files.py",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Simplified format_relative_import after first pass",
            basis: "Used os.path.relpath instead",
            constraintType: "inferred",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~31" },
          { label: "Files Created", value: "2" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "06-tools-and-guardrails",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("06-tools-and-guardrails", "RUN.md"),
    },
    {
      slug: "surface-strategy",
      title: "Surface Strategy and Portability",
      type: "reading",
      duration: "8 mins",
      description:
        "Not every Copilot surface supports the same context artifacts. Learn to invest in portable foundations first, then layer surface-specific capabilities where they deliver clear value.",
      objectives: [
        "Compare how context artifacts behave across VS Code, Copilot CLI, coding agent, and review surfaces",
        "Explain why portability matters when choosing where to invest in customization work",
        "Use surface strategy to decide which artifacts should be foundational and which should be optional layers",
        "Treat surface support as a design constraint rather than an afterthought",
      ],
      readingUrl:
        "https://code.visualstudio.com/docs/copilot/customization/overview",
      infoBoxes: [
        {
          title: "Build Portable Foundations First",
          content:
            "The most common mistake is optimizing for the richest surface and forgetting the rest. Repository instructions and documentation should form the portable foundation that every surface can benefit from.",
        },
      ],
      noteBoxes: [
        {
          title: "Surface Support Changes Frequently",
          content:
            "Treat support matrices as design guidance, not timeless truth. Always verify the current documentation before making long-lived architecture decisions.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph Foundation["Portable Foundation — All Surfaces"]\n        A["Repository Instructions"]\n        B["Documentation"]\n    end\n    subgraph Mid["Broad Support — Most Surfaces"]\n        C["Custom Instructions"]\n        D["MCP Servers"]\n    end\n    subgraph Specialized["Surface-Specific"]\n        E["Agents"]\n        F["Skills"]\n        G["Hooks"]\n        H["Prompts"]\n    end\n    Foundation --> Mid --> Specialized',
          caption:
            "Invest in portable foundations first, then layer specialized features on top.",
          alt: "Portability pyramid from repository instructions and docs up to surface-specific features.",
        },
      ],
      poll: {
        question: "Which Copilot surface do you use most often?",
        options: [
          { id: "vscode", text: "VS Code chat or inline" },
          { id: "cli", text: "Copilot CLI" },
          { id: "coding-agent", text: "Coding agent" },
          { id: "review", text: "Code review" },
        ],
        simulatedVotes: {
          vscode: 66,
          cli: 12,
          "coding-agent": 12,
          review: 10,
        },
      },
      qa: [
        {
          question: "What should I build first if portability matters?",
          answer:
            "Repository instructions and docs. They are the broadest, most reusable context layer across surfaces.",
        },
        {
          question: "Should I avoid VS Code-specific features entirely?",
          answer:
            "No. They add real value. The principle is to build portable foundations first, then layer deeper IDE-specific workflows where they are justified.",
        },
      ],
      tags: [
        "surface-strategy",
        "portability",
        "copilot-cli",
        "coding-agent",
        "code-review",
        "cross-surface",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "38s",
        date: "2026-03-13",
        verdict: "pass",
        promptUnderTest:
          "Inspect the lesson's surface-strategy artifacts. Discover baseline instructions, agents, prompts, MCP, hooks, and docs. Then create portable-baseline.instructions.md and docs/surface-portability-notes.md.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Discovered all existing instructions, agents, prompts, and docs",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary: "Completed in 38 s with ~4 tool calls; two files created",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary: "All constraints respected; analysis-driven file creation",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary:
              "3 instructions + focused discovery; 2 writes after 10 reads",
          },
        ],
      },
      exampleRun: {
        sessionId: "b5e6470b-0e11-4a17-a3d3-f8859a8d4e54",
        model: "GPT-5.4",
        duration: "1m 53s",
        stages: [
          {
            name: "Surface Discovery",
            timeRange: "0–19 s",
            contextLoaded: "glob × 3 and rg for surface strategy artifacts",
            purpose: "Map instructions, agents, docs",
          },
          {
            name: "Deep Reading",
            timeRange: "19 s–1 m 23 s",
            contextLoaded:
              "copilot-instructions, api.instructions, reviewer.agent, portability-matrix, cli-guide",
            purpose: "Read baseline and understand portability",
          },
          {
            name: "Absence Checking",
            timeRange: "1 m 23–1 m 39 s",
            contextLoaded:
              "3 glob for prompts/hooks/extras confirmed none present",
            purpose: "Verify absence of other surface layers",
          },
          {
            name: "Implementation",
            timeRange: "1 m 39–1 m 45 s",
            contextLoaded: "1 apply_patch creating both files",
            purpose: "Generate portable baseline + analysis",
          },
        ],
        toolCalls: [
          {
            tool: "glob",
            target: ".github/**/*",
            outcome: "3 files",
            success: true,
          },
          {
            tool: "glob",
            target: "docs/**/*",
            outcome: "3 files",
            success: true,
          },
          {
            tool: "rg",
            target: "surface|instruction|agent|hook|mcp",
            outcome: "multi-file hits",
            success: true,
          },
          {
            tool: "view",
            target: ".github/copilot-instructions.md",
            outcome: "66 lines — universal baseline",
            success: true,
          },
          {
            tool: "view",
            target: ".github/instructions/api.instructions.md",
            outcome: "route-scoped rules",
            success: true,
          },
          {
            tool: "view",
            target: ".github/agents/reviewer.agent.md",
            outcome: "reviewer agent definition",
            success: true,
          },
          {
            tool: "view",
            target: "docs/portability-matrix.md",
            outcome: "surface compatibility reference",
            success: true,
          },
          {
            tool: "view",
            target: "docs/surface-strategy-example.md",
            outcome: "lesson target constraints",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE portable-baseline.instructions.md",
            outcome: "portable baseline",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE surface-portability-notes.md",
            outcome: "portability analysis",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Used applyTo: '**' for portable baseline",
            basis: "Cross-surface scope",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Extracted universal guidance only",
            basis: "Exclude scoped instructions",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Confirmed absence of prompts, hooks, MCP",
            basis: "Verified via glob",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Documented agent portability disagreement",
            basis: "Resolved using portability-matrix",
            constraintType: "inferred",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~18" },
          { label: "Files Created", value: "2" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "07-surface-strategy",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("07-surface-strategy", "RUN.md"),
    },
    {
      slug: "operating-model",
      title: "Operating the Context System",
      type: "reading",
      duration: "8 mins",
      description:
        "Context engineering is not a one-time setup. Learn the operating model for maintaining, measuring, and cleaning up your context artifacts so AI assistance stays aligned as your codebase evolves.",
      objectives: [
        "Explain why context engineering requires ongoing maintenance rather than one-time setup",
        "Describe the role of memory, measurement, and review in keeping AI behavior aligned",
        "Identify common anti-patterns that degrade context quality over time",
        "Build an operating model for reviewing, updating, and validating context artifacts",
      ],
      readingUrl:
        "https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot",
      infoBoxes: [
        {
          title: "Context Is a Living System",
          content:
            "If .github and /docs do not evolve with the codebase, they stop being context and start becoming misinformation. The operating model matters as much as the initial setup.",
        },
      ],
      noteBoxes: [
        {
          title: "Memory Complements But Does Not Replace Instructions",
          content:
            "Copilot memory is reactive and probabilistic. Critical architectural decisions and mandatory conventions still belong in explicit, version-controlled files.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Use Context"] --> B["Measure Failures"]\n    B --> C["Review Artifacts"]\n    C --> D["Update or Remove"]\n    D --> E["Validate"]\n    E --> A',
          caption:
            "The operating model is a continuous cycle: use, measure, review, update, and validate.",
          alt: "Context maintenance cycle from use through validation back to use.",
        },
      ],
      poll: {
        question:
          "How often do you review or update your AI context configuration?",
        options: [
          { id: "never", text: "Never — I set it up once" },
          { id: "broken", text: "Only when something breaks" },
          { id: "monthly", text: "Monthly or with architecture changes" },
          { id: "quarterly", text: "Quarterly with a formal audit" },
        ],
        simulatedVotes: {
          never: 32,
          broken: 28,
          monthly: 24,
          quarterly: 16,
        },
      },
      qa: [
        {
          question: "What is the most common long-term failure mode?",
          answer:
            "Stale context. The repo changes, but the instruction and documentation layer does not. That teaches the assistant outdated or contradictory behavior.",
        },
        {
          question: "What signals tell me the context system is thin or stale?",
          answer:
            "Repeated AI mistakes, repeated clarification questions, inconsistent behavior across developers, and instructions that reference files or patterns that no longer exist.",
        },
      ],
      tags: [
        "operating-model",
        "maintenance",
        "memory",
        "measurement",
        "anti-patterns",
        "context-hygiene",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "30s",
        date: "2026-03-13",
        verdict: "pass",
        promptUnderTest:
          "Inspect the lesson's context-maintenance artifacts. Fix the drifted example at .github/examples/drifted/copilot-instructions.md by resolving all drift issues: update stale technology references, remove contradictory rules, fix dead file path references.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Read clean example, drifted example, audit scripts, and maintenance docs",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary: "Completed in 30 s with ~4 tool calls; single file fixed",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "All drift issues resolved; discovery-first comparison approach",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All four lesson objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary: "4 instructions; drift comparison before single-file fix",
          },
        ],
      },
      exampleRun: {
        sessionId: "a2aa1094-bdb8-4309-988f-2bdae84b6e1e",
        model: "GPT-5.4",
        duration: "1m 33s",
        stages: [
          {
            name: "Surface Discovery",
            timeRange: "0–13 s",
            contextLoaded:
              "glob × 2 empty, rg found 60 matches for audit/stale/drift keywords",
            purpose: "Map context-maintenance files",
          },
          {
            name: "Convention Reading",
            timeRange: "13–35 s",
            contextLoaded:
              "copilot-instructions, clean example, drifted example, audit scripts, maintenance docs",
            purpose: "Load clean baseline and drift patterns",
          },
          {
            name: "Dead Path Verification",
            timeRange: "50 s–1 m 24 s",
            contextLoaded:
              "View of helpers/ failed (confirmed deleted), glob × 4 verified actual structure",
            purpose: "Confirm dead reference",
          },
          {
            name: "Implementation",
            timeRange: "1 m 24–1 m 29 s",
            contextLoaded: "apply_patch to fix all 5 drift issues",
            purpose: "Apply corrections",
          },
        ],
        toolCalls: [
          {
            tool: "glob",
            target: ".github/**/*",
            outcome: "5 files",
            success: true,
          },
          {
            tool: "rg",
            target: "audit_context|stale_refs|context-maintenance|drift",
            outcome: "60 matches",
            success: true,
          },
          {
            tool: "view",
            target: ".github/examples/clean/copilot-instructions.md",
            outcome: "clean reference",
            success: true,
          },
          {
            tool: "view",
            target: ".github/examples/drifted/copilot-instructions.md",
            outcome: "drifted example",
            success: true,
          },
          {
            tool: "view",
            target: ".github/scripts/audit_context.py",
            outcome: "context audit script",
            success: true,
          },
          {
            tool: "view",
            target: ".github/scripts/detect_stale_refs.py",
            outcome: "stale reference detector",
            success: true,
          },
          {
            tool: "view",
            target: "docs/maintenance-schedule.md",
            outcome: "maintenance cadence",
            success: true,
          },
          {
            tool: "view",
            target: "app/backend/src/helpers/",
            outcome: "FAILED — path not found",
            success: false,
          },
          {
            tool: "glob",
            target: "Check actual src structure",
            outcome: "confirmed no helpers",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "FIX drifted copilot-instructions.md",
            outcome: "5 drift issues resolved",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Changed Node.js 18 → Node.js 20 LTS",
            basis: "Matches clean example",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Changed winston → pino",
            basis: "Matches clean example",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Removed console.log() permission",
            basis: "Contradicts structured logging",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Removed app/backend/src/helpers/ reference",
            basis: "Path confirmed deleted",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision:
              "Updated banner from 'intentionally contains drift' to 'repaired'",
            basis: "Maintenance protocol",
            constraintType: "inferred",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~19" },
          { label: "Files Fixed", value: "1" },
          { label: "Drift Issues", value: "5" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "08-operating-model",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl("08-operating-model", "RUN.md"),
    },
    {
      slug: "ai-assisted-sdlc-capstone",
      title: "End-to-End AI-Assisted SDLC Workflow",
      type: "video",
      duration: "12 mins",
      videoId: "placeholder-ai-assisted-sdlc-capstone",
      description:
        "Synthesize the entire course into one end-to-end AI-assisted engineering workflow. Map shared context, planning, implementation, tooling, and maintenance into a curate → plan → build → validate delivery loop.",
      objectives: [
        "Synthesize all course layers into a single curate → plan → build → validate delivery loop",
        "Map each customization surface to its corresponding SDLC phase",
        "Design a minimum viable context stack for a real team starting from scratch",
        "Apply the progressive complexity principle to sequence a team adoption plan",
      ],
      infoBoxes: [
        {
          title: "From Surfaces to System",
          content:
            "The goal of the capstone is not to use every surface. It is to use the right surfaces at the right stage of delivery: curate context, plan against it, build with it, and validate the result.",
        },
      ],
      noteBoxes: [
        {
          title: "Start Small, Prove Value",
          content:
            "Most teams get most of the value from instructions plus docs. Add prompts, agents, MCP, hooks, and skills only when they solve an actual friction point.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Curate\\n.github/ + /docs/"] --> B["Plan\\nRead-only planner"]\n    B --> C["Build\\nImplementation agent"]\n    C --> D["Validate\\nHooks + review"]\n    D --> E["Deploy"]\n    E --> A',
          caption:
            "The delivery loop: curate context, plan deliberately, build with scoped roles, validate with guardrails, then feed improvements back into the context layer.",
          alt: "Curate, plan, build, validate, and deploy form a continuous delivery loop.",
        },
      ],
      poll: {
        question:
          "Which stage of the minimum viable context stack has your team reached?",
        options: [
          { id: "none", text: "No context setup yet" },
          { id: "stage1", text: "Repository instructions only" },
          { id: "stage2", text: "Instructions plus docs" },
          { id: "stage3", text: "Prompts or planning workflow" },
          { id: "stage4", text: "Agents, skills, and guardrails" },
        ],
        simulatedVotes: {
          none: 18,
          stage1: 32,
          stage2: 26,
          stage3: 14,
          stage4: 10,
        },
      },
      codePreview: {
        title: "Minimum Viable Context Stack",
        description: "A compact stack for a real team starting from scratch.",
        segments: [
          {
            code: lines(
              "# Day 1",
              ".github/copilot-instructions.md",
              "docs/architecture.md",
              "",
              "# Week 1",
              ".github/instructions/frontend.instructions.md",
              ".github/instructions/backend.instructions.md",
              "docs/adr/001-state-management.md",
              "",
              "# Month 1",
              ".github/prompts/plan-feature.prompt.md",
              ".github/agents/planner.agent.md",
              ".github/agents/implementer.agent.md",
            ),
            language: "text",
            filename: "minimum-viable-context-stack",
            explanation:
              "Earn each layer of complexity. Do not start with the most sophisticated setup if the foundation is still weak.",
          },
        ],
      },
      qa: [
        {
          question:
            "Do I need all seven customization surfaces to be effective?",
          answer:
            "No. Most teams get substantial value from instructions and docs first. The rest are optional layers that should earn their complexity by solving real workflow problems.",
        },
        {
          question:
            "What is the capstone lesson trying to teach beyond feature inventory?",
          answer:
            "It teaches a delivery system. Context engineering is valuable because it improves the whole flow from planning through validation, not because it gives you a collection of isolated configuration files.",
        },
      ],
      tags: [
        "capstone",
        "sdlc",
        "delivery-loop",
        "minimum-viable-stack",
        "progressive-complexity",
        "workflow",
      ],
      exampleAssessment: {
        model: "gpt-5.4",
        duration: "3m 57s",
        date: "2026-03-14",
        verdict: "pass",
        promptUnderTest:
          "Inspect project instructions, backend and frontend scoped instructions, architecture doc, and implement a notification preference event-channel validator as a cross-stack hardening slice with validator, tests, and route wiring.",
        dimensions: [
          {
            name: "Context Utilization",
            abbr: "CU",
            rating: "pass",
            summary:
              "Discovered instructions, architecture, and backend/frontend surfaces autonomously",
          },
          {
            name: "Session Efficiency",
            abbr: "SE",
            rating: "pass",
            summary:
              "Completed in 3 m 57 s with ~11 tool calls; three files changed",
          },
          {
            name: "Prompt Alignment",
            abbr: "PA",
            rating: "pass",
            summary:
              "Discovery-first; all three implementation steps completed",
          },
          {
            name: "Change Correctness",
            abbr: "CC",
            rating: "pass",
            summary: "Files match: True · Patterns match: True",
          },
          {
            name: "Objective Completion",
            abbr: "OC",
            rating: "pass",
            summary: "All five capstone objectives demonstrated",
          },
          {
            name: "Behavioral Compliance",
            abbr: "BC",
            rating: "pass",
            summary: "No tool boundary violations",
          },
          {
            name: "Context Validation",
            abbr: "CV",
            rating: "pass",
            summary: "Full-stack discovery (33 reads) before 3 targeted writes",
          },
        ],
      },
      exampleRun: {
        sessionId: "35d07442-2296-471f-a324-415461eec70a",
        model: "GPT-5.4",
        duration: "3m 57s",
        stages: [
          {
            name: "Surface Discovery",
            timeRange: "0–21 s",
            contextLoaded:
              "view root, glob × 2, rg for notification/preference/LEGAL-218",
            purpose: "Map project context",
          },
          {
            name: "Instruction Reading",
            timeRange: "21–50 s",
            contextLoaded:
              "copilot-instructions, api.instructions, frontend.instructions, architecture, capstone-example",
            purpose: "Load project and lesson conventions",
          },
          {
            name: "Backend Mapping",
            timeRange: "50 s–1 m 23 s",
            contextLoaded:
              "5 glob + 2 rg + follow-up globs for rules, routes, models, tests",
            purpose: "Discover implementation surfaces",
          },
          {
            name: "Deep Source Reading",
            timeRange: "1 m 23 s–2 m 36 s",
            contextLoaded:
              "12 views of mandatory-events, role-permissions, business-rules, notifications, types, tests",
            purpose: "Understand existing patterns",
          },
        ],
        toolCalls: [
          {
            tool: "view",
            target: "repo root",
            outcome: "7 items",
            success: true,
          },
          {
            tool: "glob",
            target: ".github/**/*.md",
            outcome: "3 instruction files",
            success: true,
          },
          {
            tool: "glob",
            target: "**/architecture*.md",
            outcome: "1 architecture doc",
            success: true,
          },
          {
            tool: "rg",
            target: "notification|preference|LEGAL-218|mandatory",
            outcome: "multi-file matches",
            success: true,
          },
          {
            tool: "view",
            target: ".github/copilot-instructions.md",
            outcome: "project conventions",
            success: true,
          },
          {
            tool: "view",
            target: "docs/architecture.md",
            outcome: "system architecture",
            success: true,
          },
          {
            tool: "view",
            target: "docs/capstone-example.md",
            outcome: "lesson constraints",
            success: true,
          },
          {
            tool: "view",
            target: "rules/mandatory-events.ts",
            outcome: "MANDATORY_EVENTS map",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE event-channel-validator.ts",
            outcome: "pure validation function",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "CREATE event-channel-validator.test.ts",
            outcome: "focused tests",
            success: true,
          },
          {
            tool: "apply_patch",
            target: "MODIFY notifications.ts",
            outcome: "wired validator",
            success: true,
          },
        ],
        decisions: [
          {
            decision: "Import MANDATORY_EVENTS from existing module",
            basis: "Reuse pattern",
            constraintType: "prompt",
            validated: true,
          },
          {
            decision: "Pure validation function in rules/",
            basis: "Business logic convention",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Wire validator before persistence/audit",
            basis: "Audit-first pattern",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "Rename isCaliforniaLoan → isCaliforniaRestrictedContext",
            basis: "Conservative approach, default true",
            constraintType: "inferred",
            validated: true,
          },
          {
            decision: "No shell commands or SQL",
            basis: "Denied tools respected",
            constraintType: "prompt",
            validated: true,
          },
        ],
        metadata: [
          { label: "Tool Calls", value: "~77" },
          { label: "Files Changed", value: "3" },
          { label: "Discovery Reads", value: "33" },
        ],
      },
      exampleAssessmentUrl: lessonArtifactUrl(
        "09-ai-assisted-sdlc-capstone",
        "ASSESSMENT.md",
      ),
      exampleRunUrl: lessonArtifactUrl(
        "09-ai-assisted-sdlc-capstone",
        "RUN.md",
      ),
    },
    {
      slug: "questions",
      title: "Course Quiz",
      type: "quiz",
      duration: "10 mins",
      description:
        "Test your context engineering knowledge with scenario-based and concept-check questions covering the full curate → plan → build → validate workflow and the seven customization surfaces.",
      objectives: [
        "Validate understanding of context engineering principles and the delivery loop",
        "Test knowledge of the seven customization surfaces and when to use each",
        "Assess judgment on progressive complexity, least-privilege, and maintenance",
        "Apply course concepts to realistic scenarios",
      ],
      infoBoxes: [
        {
          title: "Assessment Overview",
          content:
            "This quiz mixes concept checks with scenario-based questions. When two answers seem plausible, ask which one best follows progressive complexity, least privilege, and long-term maintainability.",
        },
      ],
      noteBoxes: [
        {
          title: "Target Score",
          content:
            "Aim for 80 percent or higher. If you miss multiple questions in one area, revisit the corresponding lesson before moving on.",
        },
      ],
      quizQuestions: [
        makeQuizQuestion(
          "q1",
          "What is the core thesis of context engineering in this course?",
          [
            "AI should replace manual code review",
            "AI output quality tracks input context quality",
            "Every repo needs all seven customization surfaces",
            "The best model solves repository context automatically",
          ],
          1,
          "The course is built on the idea that AI output quality correlates directly with input context quality.",
        ),
        makeQuizQuestion(
          "q2",
          "What is the best first step for a repository with no Copilot customization yet?",
          [
            "Create five agents",
            "Add MCP servers for every external system",
            "Create a short copilot-instructions.md file",
            "Install plugins before writing any files",
          ],
          2,
          "Start with a small repository-wide instruction file. It is the highest-leverage, lowest-complexity step.",
        ),
        makeQuizQuestion(
          "q3",
          "How do path-specific instructions normally activate?",
          [
            "Only through manual invocation",
            "By applyTo glob matching and semantic description matching",
            "Only when the coding agent asks for them",
            "Only when a prompt file links to them",
          ],
          1,
          "Path-specific instructions load through applyTo matching and can also be discovered through semantic description matching.",
        ),
        makeQuizQuestion(
          "q4",
          "What is the strongest reason to separate planning from implementation?",
          [
            "Planning agents are cheaper",
            "It keeps discovery and clarification distinct from code changes",
            "It avoids writing docs",
            "Implementation agents cannot read files",
          ],
          1,
          "Planning is a different kind of work. Separating it reduces premature code changes and forces ambiguity into the open.",
        ),
        makeQuizQuestion(
          "q5",
          "Which role should usually be read-only?",
          ["Implementation agent", "Review agent", "MCP server", "Prompt file"],
          1,
          "Review roles should usually report findings, not silently modify the implementation.",
        ),
        makeQuizQuestion(
          "q6",
          "What is the practical value of agent skills?",
          [
            "They replace instructions entirely",
            "They package reusable workflows and resources that load on demand",
            "They are only for UI theming",
            "They make applyTo glob patterns unnecessary",
          ],
          1,
          "Skills package capabilities and supporting resources without forcing them into every session.",
        ),
        makeQuizQuestion(
          "q7",
          "When should you choose a hook instead of an instruction?",
          [
            "When you need deterministic enforcement",
            "When you want longer prose explanations",
            "When you need semantic discovery",
            "When you want the model to infer the rule",
          ],
          0,
          "Use hooks when failure would be expensive and you need deterministic enforcement rather than polite guidance.",
        ),
        makeQuizQuestion(
          "q8",
          "What is the portability-first design rule?",
          [
            "Build VS Code-specific features first",
            "Avoid prompts entirely",
            "Build portable foundations first, then layer specialized features",
            "Only use the coding agent surface",
          ],
          2,
          "Repository instructions and docs should form the portable foundation. Specialized features can layer on top.",
        ),
        makeQuizQuestion(
          "q9",
          "What makes context engineering an operating model rather than a setup task?",
          [
            "It requires expensive cloud tooling",
            "It needs ongoing review, updates, and cleanup as the codebase evolves",
            "It only works for enterprise teams",
            "It depends on personal memory rather than shared files",
          ],
          1,
          "Context files become harmful if they drift. Maintenance, measurement, and cleanup are part of the discipline.",
        ),
        makeQuizQuestion(
          "q10",
          "What is the progressive complexity principle?",
          [
            "Always adopt the most powerful setup immediately",
            "Add complexity only when each new layer earns its place",
            "Keep all rules in one file until the repo is large",
            "Prefer more tools over clearer workflows",
          ],
          1,
          "Start simple and add layers only when a real workflow limitation justifies them.",
        ),
        makeQuizQuestion(
          "q11",
          "Which pair forms the shared project context foundation?",
          [
            ".github and /docs",
            "MCP and hooks",
            "Prompts and plugins",
            "Subagents and memory",
          ],
          0,
          "Behavior in .github plus knowledge in /docs form the reusable foundation for later workflows.",
        ),
        makeQuizQuestion(
          "q12",
          "Which statement best describes the capstone delivery loop?",
          [
            "Plan, code, and deploy in one monolithic step",
            "Curate context, plan, build, validate, then feed improvements back",
            "Write prompts first and docs later if needed",
            "Rely on memory instead of version-controlled files",
          ],
          1,
          "The course culminates in a curate → plan → build → validate loop with feedback returning to the context layer.",
        ),
        makeQuizQuestion(
          "q13",
          "Which three surfaces does Copilot Chat in the GitHub.com web interface currently support?",
          [
            "Instructions, prompts, and agents",
            "Custom instructions, knowledge bases attached to agents, and Copilot Extensions",
            "Instructions, hooks, and MCP servers",
            "Only copilot-instructions.md — no other surfaces",
          ],
          1,
          "GitHub.com's Copilot Chat supports custom instructions, organization-level knowledge bases attached to Copilot Agents, and Copilot Extensions. It does not support .prompt.md, .agent.md, skills, or hooks — those are VS Code and CLI features.",
        ),
        makeQuizQuestion(
          "q14",
          "What is the role of '/docs/' in context engineering, compared to '.github/'?",
          [
            "Both serve the same purpose — they are interchangeable",
            ".github/ tells AI HOW to behave; /docs/ tells AI WHAT to know",
            "/docs/ is for humans only; .github/ is for AI only",
            ".github/ is ignored by Copilot; only /docs/ is read",
          ],
          1,
          ".github/ contains behavioral rules — instructions, agents, prompts, hooks — that control HOW the AI operates. /docs/ contains knowledge — architecture overviews, ADRs, conventions — that give the AI domain understanding. Together they form the complete context foundation.",
        ),
        makeQuizQuestion(
          "q15",
          "A team's copilot-instructions.md has grown to 500 lines. Which anti-pattern is this, and what is the recommended fix?",
          [
            "Tool maximalism — reduce the number of agents",
            "Instruction bloat — split into path-specific .instructions.md files by concern",
            "Over-automation — remove hooks and let the AI decide",
            "Context leakage — move sensitive rules to environment variables",
          ],
          1,
          "Instruction bloat occurs when a single file accumulates too many rules. The fix is to split by concern into path-specific files with an applyTo scope, targeting 30-60 lines per file with a clear, focused scope.",
        ),
        makeQuizQuestion(
          "q16",
          "In the three-axis context model, which axis do .prompt.md files occupy?",
          [
            "Horizontal — always available when the agent is selected",
            "Vertical — activated by file path matching",
            "Diagonal — invoked manually for specific tasks, combining instructions and agent capabilities",
            "Event-driven — triggered by lifecycle events",
          ],
          2,
          "The three-axis context model: Horizontal (agents, skills — always available when selected), Vertical (instructions — filtered by applyTo file path), Diagonal (prompts — manually invoked task-specific workflows that can reference agents and pull in instructions).",
        ),
        makeQuizQuestion(
          "q17",
          "You need to ensure that no AI agent can ever write to the '/migrations/' directory. Which approach provides the strongest guarantee?",
          [
            "Add 'Never edit files in /migrations/' to copilot-instructions.md",
            "Omit create_file and replace_string_in_file from all agents' tool lists",
            "Add a PreToolUse hook with a deny gate matching **/migrations/**",
            "Both A and C — instruction as guidance plus hook as enforcement",
          ],
          3,
          "Defense in depth: an instruction tells the AI the intent, reducing the chance it even attempts the write. A PreToolUse deny hook provides deterministic enforcement. Instructions are probabilistic guidance; hooks are deterministic gates. Use both.",
        ),
        makeQuizQuestion(
          "q18",
          "What are the four phases of the delivery loop that the capstone lesson synthesizes?",
          [
            "Design → Code → Test → Deploy",
            "Curate → Plan → Build → Validate",
            "Research → Prototype → Implement → Ship",
            "Configure → Develop → Review → Release",
          ],
          1,
          "The capstone delivery loop is: Curate (prepare context) → Plan (read-only agent analyzes requirements) → Build (implementation agent executes with scoped tools) → Validate (hooks enforce guardrails, review agent checks quality). Validation feedback flows back to curate, creating a self-improving loop.",
        ),
      ],
      tags: ["quiz", "assessment", "review", "knowledge-check"],
    },
  ],
  overview: {
    heroSubheading:
      "Master the seven customization surfaces — instructions, prompts, agents, skills, MCP, hooks, and plugins — that transform GitHub Copilot from a generic assistant into a domain expert for your project.",
    learnItems: [
      {
        icon: "",
        title: "The .github folder, end to end",
        description:
          "How custom instructions activate via glob patterns, how prompt files create reusable slash commands, how agents define specialized personas — the complete directory anatomy, explained through a real-world project.",
      },
      {
        icon: "",
        title: "Seven surfaces, one context architecture",
        description:
          "Build each customization layer individually — instructions, prompts, agents, skills, MCP servers, hooks, and plugins — then combine them into a composable three-axis context system that activates automatically.",
      },
      {
        icon: "",
        title: "Full SDLC integration",
        description:
          "Apply context engineering across the entire software development lifecycle: plan with prompts, code with instructions, review with agents, and automate with hooks — from first commit to production CI or CD.",
      },
      {
        icon: "",
        title: "VS Code and CLI throughout",
        description:
          "Every demo runs in VS Code with GitHub Copilot Chat and the Copilot CLI. No cloud accounts or paid APIs required — you build a real .github setup that works on your local machine from lesson one.",
      },
    ],
    aboutParagraphs: [
      "GitHub Copilot is a powerful code generation tool. But out of the box, it does not know your project's naming conventions, preferred libraries, architecture decisions, or testing patterns. Every new chat session starts from zero — an amnesiac genius that writes excellent code in the wrong framework. Context engineering fixes that by building structured, version-controlled configuration files that teach the AI how your project works.",
      "The customization system has seven distinct surfaces. <strong>Custom instructions</strong> activate automatically based on file paths. <strong>Prompt files</strong> create reusable slash commands for recurring tasks. <strong>Custom agents</strong> define specialized personas with restricted tool access. <strong>Skills</strong> package domain knowledge for cross-tool portability. <strong>MCP servers</strong> connect external tools. <strong>Hooks</strong> automate pre- and post-chat actions. <strong>Plugins</strong> extend agent capabilities from the marketplace. Each surface has a defined file format, trigger mechanism, and scope — and they compose together through a three-axis model.",
      "In this course you build the complete picture. Starting with a blank .github folder, each lesson adds one layer of context capability — from always-on instructions through lifecycle hooks. By the end, you have a production-grade .github and /docs tree that makes Copilot behave like a project-aware expert. Every demo uses VS Code and the Copilot CLI.",
    ],
    detailItems: [
      {
        title: "Understand why context engineering matters",
        description:
          "Learn why AI output quality correlates directly with input context quality, how context engineering differs from prompt engineering, and why the shift to agentic AI demands a systematic approach.",
      },
      {
        title: "Master the .github directory structure",
        description:
          "Explore the complete .github folder anatomy — six subfolders, each controlling a different aspect of AI behavior. Learn the instruction layering pattern, precedence rules, and VS Code settings that customize file discovery.",
      },
      {
        title: "Build all seven customization surfaces",
        description:
          "Create custom instructions with glob-scoped activation, prompt files with dynamic variables, agent personas with tool restrictions, SKILL.md capability packages, MCP server connections, and lifecycle hooks.",
      },
      {
        title: "Apply the three-axis context model",
        description:
          "Understand horizontal (agents and skills), vertical (instructions), and diagonal (prompts) context axes. Learn how they compose automatically and design layered architectures for multi-framework projects.",
      },
      {
        title: "Integrate context into your SDLC",
        description:
          "Apply context engineering to planning, coding, review, testing, and CI or CD. Build role-based workflows that move from curated context to validated changes.",
      },
      {
        title: "Avoid common anti-patterns",
        description:
          "Recognize and fix instruction bloat, monolithic rule files, duplicated linter guidance, over-privileged agents, and stale context that fights the AI instead of guiding it.",
      },
    ],
    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["VS Code", "GitHub Copilot", "Git", "TypeScript"],
      description:
        "Developers who use GitHub Copilot and want to move beyond one-off prompting to systematic, project-wide AI customization. Familiarity with VS Code and basic Git is recommended. No specific programming language expertise is required.",
    },
    audienceCards: [
      {
        icon: "💻",
        title: "Individual Developers",
        description:
          "You use Copilot daily and want it to generate code that matches your project conventions without constant manual correction.",
      },
      {
        icon: "🏗️",
        title: "Tech Leads and Architects",
        description:
          "You want to encode architecture decisions, coding standards, and security policies into AI configuration that applies automatically for the whole team.",
      },
      {
        icon: "⚙️",
        title: "DevOps and Platform Engineers",
        description:
          "You manage CI or CD pipelines and developer tooling, and want to integrate AI context into existing automation and governance workflows.",
      },
      {
        icon: "🤖",
        title: "Teams Adopting Agentic AI",
        description:
          "Your team is moving from autocomplete to agents, and needs a structured approach to agent configuration, skills, and multi-agent orchestration.",
      },
    ],
  },
};
