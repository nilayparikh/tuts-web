import type { CourseDefinition } from "./types";

const lines = (...value: string[]) => value.join("\n");

const SELF_IMPROVING_AGENT_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent";
const CLEANLOOP_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent/cleanloop";

export const SELF_IMPROVING_AI_AGENTS_CODE_MODIFICATION_COURSE: CourseDefinition =
  {
    slug: "self-improving-ai-agents-code-modification",
    title: "Self-Improving AI Agents: Code Modification",
    description:
      "Build self-improving AI agents that read a repo, propose safe diffs, debug failures, and turn winning repairs into reusable learning.",
    totalDuration: "~47 mins",
    tags: [
      "Self-Improving AI Agents",
      "Agentic Coding",
      "Code Modification",
      "Autonomous Debugging",
      "Human-on-the-Loop",
      "CleanLoop",
      "Git",
      "Python",
    ],
    githubUrl: SELF_IMPROVING_AGENT_REPO_URL,
    icon: "🧬",
    difficulty: "moderate",
    instructor: {
      name: "Nilay Parikh",
      imageSrc: "/brand/nilay_parikh.jpeg",
      role: "Founder · LocalM · ErgoSum",
    },
    parts: [
      {
        slug: "self-aware-codebase",
        title: "Build a Self-Aware Codebase for Self-Improving AI Agents",
        type: "video-code",
        duration: "9 mins",

        description:
          "Map the bounded repo contract that makes self-improving AI agents safe to reason about: one mutable file, one fixed judge, and one visible artifact trail.",
        objectives: [
          "Explain why repo awareness matters before self-modifying code",
          "Identify the mutable surface, fixed judge, and artifact trail in CleanLoop",
          "Describe the minimum read path an autonomous AI agent needs before editing",
          "Justify why bounded repo intelligence is safer than open-ended code access",
        ],

        codeUrl: CLEANLOOP_REPO_URL,

        infoBoxes: [
          {
            title: "Bounded Repo First",
            content:
              "Self-improving AI agents should not start with full-repo mutation rights. They should start with one mutable file, one fixed judge, and one artifact trail that a human can inspect quickly.",
          },
        ],
        noteBoxes: [
          {
            title: "Read Before Write",
            content:
              "Modern agentic IDEs feel reliable when they read the repo map, the latest failure, and the current diff boundary before they propose any edit.",
          },
        ],

        diagrams: [
          {
            chart: lines(
              "graph LR",
              '    M["Map Repo"] --> J["Read Fixed Judge"]',
              '    J --> F["Inspect Latest Failure"]',
              '    F --> D["Propose Bounded Diff"]',
              '    D --> A["Store Artifacts"]',
            ),
            caption:
              "The self-aware codebase loop starts by mapping the repo and narrows context before any edit happens.",
            alt: "Diagram showing a repo-awareness loop from repo map to judge, latest failure, bounded diff, and stored artifacts",
          },
        ],
        poll: {
          question:
            "What usually breaks first when you try autonomous coding in a real repo?",
          options: [
            {
              id: "scope",
              text: "The agent edits outside the intended scope",
            },
            {
              id: "judge",
              text: "The success criteria are too vague",
            },
            {
              id: "context",
              text: "The agent reads the wrong context first",
            },
            {
              id: "review",
              text: "Human review becomes the bottleneck",
            },
          ],
          simulatedVotes: {
            scope: 28,
            judge: 24,
            context: 29,
            review: 19,
          },
        },

        codePreview: {
          title: "Repo Surface Contract",
          description:
            "Name the mutable file, the fixed judge, and the artifact trail before the loop touches code.",
          segments: [
            {
              code: lines(
                "from pathlib import Path",
                "",
                'MUTABLE_SURFACE = Path("clean_data.py")',
                'FIXED_JUDGE = Path("prepare.py")',
                "ARTIFACTS = [",
                '    Path("finance_master.csv"),',
                '    Path("finance_eval_history.json"),',
                '    Path("finance_strategy.json"),',
                "]",
                "",
                "print(MUTABLE_SURFACE, FIXED_JUDGE, ARTIFACTS)",
              ),
              language: "python",
              filename: "repo_surface.py",
              explanation:
                "This snippet names the mutable file, the fixed judge, and the generated artifacts before the loop makes any edit.",
            },
          ],
        },
        stepGuides: [
          {
            title: "Map the CleanLoop Surface",
            steps: [
              {
                title: "Walk the repo map first",
                description:
                  "Open the CleanLoop folder and identify the judge, the mutable file, the gold reference, and the generated outputs.",
                code: "cd _examples/self-improving-agent/cleanloop",
                codeLanguage: "bash",
              },
              {
                title: "Compare fixed versus mutable surfaces",
                description:
                  "Read prepare.py before clean_data.py so you know what the loop may change and what it must satisfy.",
                code: "code prepare.py\ncode clean_data.py",
                codeLanguage: "bash",
              },
              {
                title: "Inspect one artifact before editing",
                description:
                  "Read one recent eval-history entry so the loop starts with an exact failure signal, not a vague goal.",
                code: "code finance_eval_history.json",
                codeLanguage: "bash",
              },
            ],
          },
        ],

        transcript: [
          {
            time: 0,
            speaker: "Instructor",
            text: "An autonomous AI agent that edits the wrong file is not self-improving. It's self-sabotaging. So before we talk about self-modifying code, we need to map the repo boundary.\n\nThis lesson shows the bounded arena that makes agentic coding trustworthy.",
          },
          {
            time: 42,
            speaker: "Instructor",
            text: "The CleanLoop workspace is deliberately narrow. One mutable file. One fixed judge. One artifact trail. That shape matters because it keeps automated debugging measurable and explainable.",
          },
          {
            time: 108,
            speaker: "Instructor",
            text: "Repo awareness means the agent knows the job of each surface. clean_data.py is the mutable genome. prepare.py is the referee. The history files are memory, not logic.\n\nThat role map is what modern GitHub repository intelligence needs before it starts proposing diffs.",
          },
          {
            time: 181,
            speaker: "Instructor",
            text: "The read path matters too. Map the repo first. Read the judge second. Inspect the latest failure third. Only then propose a bounded diff.\n\nThat order keeps context tight and keeps the patch tied to a real failure signal.",
          },
          {
            time: 257,
            speaker: "Instructor",
            text: "Now that the repo contract is clear, we're ready for the planning layer. In the next lesson, the agent stops observing and starts making autonomous code edits with tests, diffs, and Git-backed selection pressure.",
          },
        ],
        qa: [
          {
            question:
              "Why not let the agent edit the whole repo if the model is strong enough?",
            answer:
              "Because the review surface explodes. A bounded mutation surface keeps diffs small, tests fast, and rollback obvious. That is a better teaching and operating posture than open-ended code access.",
          },
          {
            question: "Why does the judge need to stay fixed?",
            answer:
              "If the same loop can change the judge and the genome at the same time, it can redefine success instead of earning success. A fixed judge keeps the evaluation honest.",
          },
          {
            question: "Is repo awareness just a better prompt?",
            answer:
              "No. It is a system contract. The prompt may describe the contract, but the real value comes from the file roles, artifact trail, and execution policy around the agent.",
          },
        ],

        tags: [
          "self-improving ai agents",
          "agentic coding",
          "autonomous ai agents",
          "self-modifying code",
          "github repository intelligence",
        ],
      },
      {
        slug: "autonomous-editing-loop",
        title: "Plan Autonomous Code Edits With Diffs, Tests, and Git",
        type: "video-code",
        duration: "10 mins",

        description:
          "Turn repo awareness into a disciplined autonomous editing loop built around change proposals, bounded diffs, deterministic tests, and Git-backed selection pressure.",
        objectives: [
          "Describe the autonomous editing cycle from reset through commit or revert",
          "Explain why change proposals make code-modifying agents safer to review",
          "Compare diff-first editing with whole-file rewrites",
          "Use Git as selection pressure instead of simple version control",
        ],

        codeUrl: CLEANLOOP_REPO_URL,

        infoBoxes: [
          {
            title: "Planning Layer First",
            content:
              "A code-modifying agent should explain what it plans to change, what it will test, and when it will roll back before it edits any file.",
          },
        ],
        noteBoxes: [
          {
            title: "Git Is More Than Storage",
            content:
              "In a self-improving loop, Git is the survival gate. Good patches earn a commit. Bad patches get reverted.",
          },
        ],

        diagrams: [
          {
            chart: lines(
              "graph LR",
              '    R["Reset Baseline"] --> J["Run Judge"]',
              '    J --> P["Assemble Change Proposal"]',
              '    P --> D["Apply Bounded Diff"]',
              '    D --> T["Re-run Tests"]',
              '    T --> G["Commit or Revert"]',
            ),
            caption:
              "The autonomous editing loop turns failures into bounded diffs and lets Git decide whether a candidate survives.",
            alt: "Diagram showing reset, judge, change proposal, bounded diff, re-run tests, and commit or revert",
          },
        ],
        poll: {
          question:
            "What approval posture feels safest for autonomous code edits in your environment?",
          options: [
            {
              id: "proposal",
              text: "The agent should always propose a diff first",
            },
            {
              id: "auto",
              text: "Auto-apply is fine if tests pass",
            },
            {
              id: "hybrid",
              text: "Routine edits can auto-apply, risky ones need review",
            },
            {
              id: "manual",
              text: "Humans should review every patch",
            },
          ],
          simulatedVotes: {
            proposal: 27,
            auto: 14,
            hybrid: 38,
            manual: 21,
          },
        },

        codePreview: {
          title: "Change Proposal Before the Patch",
          description:
            "The loop should name the target, the tests, and the rollback rule before it edits code.",
          segments: [
            {
              code: lines(
                "change_proposal = {",
                '    "problem": "date parser drops invoice rows",',
                '    "target_file": "clean_data.py",',
                '    "planned_edit": "normalize dates before merge",',
                '    "tests_to_run": ["prepare.py", "csv diff"],',
                '    "rollback_rule": "revert on regression",',
                "}",
                "",
                "print(change_proposal)",
              ),
              language: "python",
              filename: "change_proposal.py",
              explanation:
                "A minimal change proposal forces the agent to name the problem, the target file, the test plan, and the rollback rule before editing code.",
            },
          ],
        },
        stepGuides: [
          {
            title: "Trace One Autonomous Edit",
            steps: [
              {
                title: "Trace the control loop",
                description:
                  "Read loop.py top to bottom and identify reset, judge, proposal, patch, and commit-or-revert.",
                code: "code loop.py",
                codeLanguage: "bash",
              },
              {
                title: "Write a tiny change proposal",
                description:
                  "Before editing the mutable file, write one short JSON or markdown proposal that names the patch and the tests.",
                code: "code CHANGE_PROPOSAL.md",
                codeLanguage: "bash",
              },
              {
                title: "Inspect the no-path",
                description:
                  "Check where the loop reverts or rejects a patch. The no-path is what makes the whole system trustworthy.",
                code: "git log --oneline -5",
                codeLanguage: "bash",
              },
            ],
          },
        ],

        transcript: [
          {
            time: 0,
            speaker: "Instructor",
            text: "Most agentic coding demos jump straight to the patch. That's backwards. The real leverage comes from the planning layer — the moment where the agent decides what to change, what to test, and what should force a rollback.",
          },
          {
            time: 44,
            speaker: "Instructor",
            text: "In CleanLoop, that logic lives in loop.py. The loop resets the baseline, runs the judge, packages the failure signal, asks for a repair, and then uses Git to decide whether the candidate survives.\n\nThat is the control plane for self-modifying code.",
          },
          {
            time: 116,
            speaker: "Instructor",
            text: "The change proposal is small on purpose. Name the problem. Name the target file. Name the tests. Name the rollback rule.\n\nIf the agent cannot explain the edit that clearly, it should not apply the edit yet.",
          },
          {
            time: 188,
            speaker: "Instructor",
            text: "Diff-first editing matters because whole-file rewrites are expensive to review and easy to hallucinate. Bounded diffs are cheaper to reason about, cheaper to revert, and better for pull request automation.",
          },
          {
            time: 264,
            speaker: "Instructor",
            text: "Now that the control loop is clear, we can make it self-correcting. In the next lesson, we add autonomous debugging, evidence traces, and test-time search so the loop improves across rounds instead of gambling on one patch.",
          },
        ],
        qa: [
          {
            question:
              "Why force a change proposal when the model could just edit directly?",
            answer:
              "Because the proposal is the cheapest review surface in the whole system. It exposes scope, tests, and rollback rules before any code changes land.",
          },
          {
            question:
              "Why is Git part of the loop instead of just a storage layer?",
            answer:
              "Because Git becomes the selection gate. A patch survives only if it passes the judge and does not regress the current state.",
          },
          {
            question:
              "When should a code-modifying agent expand beyond one file?",
            answer:
              "Only when a human-approved policy allows it. Multi-file orchestration is real, but the bounded one-file loop teaches the control logic more honestly and keeps failure analysis simpler.",
          },
        ],

        tags: [
          "autonomous code edits",
          "self-modifying code",
          "agentic coding",
          "pull request automation",
          "git selection pressure",
        ],
      },
      {
        slug: "self-correction-loop",
        title: "Build the Self-Correction Loop for Autonomous Debugging",
        type: "video-code",
        duration: "11 mins",

        description:
          "Build the self-correction stack that turns one-shot code patches into automated debugging with evidence, history, and Best-of-N search.",
        objectives: [
          "Explain how precise failures become bounded repair targets",
          "Use history and dashboard artifacts to steer the next round",
          "Compare one-candidate repair with Best-of-N search",
          "Describe why self-healing software needs evidence, not just generation",
        ],

        codeUrl: CLEANLOOP_REPO_URL,

        infoBoxes: [
          {
            title: "Self-Correction Needs Memory",
            content:
              "A useful repair loop does not start fresh every round. It keeps a failure history, reads the latest evidence, and uses that memory to narrow the next patch.",
          },
        ],
        noteBoxes: [
          {
            title: "Search Is Optional, Evidence Is Not",
            content:
              "Best-of-N search can improve candidate quality, but observability is the real non-negotiable piece. Without history and traces, the loop cannot tell whether it improved or just got lucky.",
          },
        ],

        diagrams: [
          {
            chart: lines(
              "graph LR",
              '    F["Read Latest Failure"] --> R["Propose Repair"]',
              '    R --> T["Run Tests"]',
              '    T --> H["Write History"]',
              '    H --> S["Search / Rerank Next Candidates"]',
              "    S --> F",
            ),
            caption:
              "The self-correction loop ties repairs to tests, history, and candidate search so the system learns across rounds.",
            alt: "Diagram showing a loop from failure to repair, tests, history, search, and back to the next failure",
          },
        ],
        poll: {
          question:
            "What would make you trust autonomous debugging more in production?",
          options: [
            {
              id: "history",
              text: "Better round history and trace evidence",
            },
            {
              id: "tests",
              text: "Stronger automated tests",
            },
            {
              id: "search",
              text: "Multiple candidates with reranking",
            },
            {
              id: "review",
              text: "Clearer human review triggers",
            },
          ],
          simulatedVotes: {
            history: 33,
            tests: 27,
            search: 18,
            review: 22,
          },
        },

        codePreview: {
          title: "Round History as Repair Memory",
          description:
            "A compact history row gives the next round an exact memory of what failed and what still needs work.",
          segments: [
            {
              code: lines(
                "history_row = {",
                '    "round": 4,',
                '    "failing_assertions": ["date_parse", "currency_normalization"],',
                '    "candidate_count": 3,',
                '    "winner": "candidate_2",',
                '    "regressions": 0,',
                '    "next_focus": "keep row count stable while fixing dates",',
                "}",
                "",
                "print(history_row)",
              ),
              language: "python",
              filename: "history_row.py",
              explanation:
                "A compact history row gives the next round a precise memory of what failed, what won, and what still needs attention.",
            },
          ],
        },
        stepGuides: [
          {
            title: "Inspect One Self-Correction Round",
            steps: [
              {
                title: "Inspect one exact failure",
                description:
                  "Start with the current judge output or eval-history row so the repair target is concrete.",
                code: "code finance_eval_history.json",
                codeLanguage: "bash",
              },
              {
                title: "Compare one repair candidate",
                description:
                  "Read the current genome and inspect how the patch changes the bounded logic surface.",
                code: "code clean_data.py",
                codeLanguage: "bash",
              },
              {
                title: "Review evidence before the next round",
                description:
                  "Open the dashboard or reranker surface and decide whether the next round needs another patch or a wider candidate search.",
                code: "code dashboard.py\ncode reranker.py",
                codeLanguage: "bash",
              },
            ],
          },
        ],

        transcript: [
          {
            time: 0,
            speaker: "Instructor",
            text: "A patch that passes once is not a self-correction loop. Real autonomous debugging needs evidence, repeatability, and a way to search for stronger candidates when the first answer is weak.",
          },
          {
            time: 48,
            speaker: "Instructor",
            text: "The core stack is simple. Read the latest failure. Map it to one bounded repair target. Re-run the judge. Then write the result to history so the next round starts smarter instead of guessing from scratch.",
          },
          {
            time: 122,
            speaker: "Instructor",
            text: "Observability is what makes self-healing software believable. The dashboard, the history file, and the strategy snapshot let you see whether the loop is improving, plateauing, or regressing.\n\nWithout that trace, autonomous debugging is just narrative.",
          },
          {
            time: 210,
            speaker: "Instructor",
            text: "Best-of-N search adds another layer. One candidate can be lucky or weak. Three candidates with reranking give you stronger selection pressure without changing the judge.\n\nThat is a practical form of test-time search for coding agents.",
          },
          {
            time: 305,
            speaker: "Instructor",
            text: "Now that the loop can correct itself across rounds, the next question is governance. In the next lesson, we add safety rails, approval ladders, and human-on-the-loop controls so the system earns trust before it earns more autonomy.",
          },
        ],
        qa: [
          {
            question:
              "Why not trust the judge alone and skip the history files?",
            answer:
              "Because the judge tells you the current state, not the trend. The history files tell you whether the system is actually learning, oscillating, or regressing across rounds.",
          },
          {
            question: "When is Best-of-N worth the extra cost?",
            answer:
              "When failure is expensive or the repair space is broad. Best-of-N increases token cost, but it often improves candidate quality enough to reduce wasted rounds.",
          },
          {
            question:
              "Is autonomous debugging the same as full recursive self-improvement?",
            answer:
              "No. This course stays bounded. The loop improves one code surface under one fixed judge. That is much narrower and much more controllable than open-ended recursive systems.",
          },
        ],

        tags: [
          "automated debugging",
          "self-healing software",
          "self-correcting ai agents",
          "llm unit testing",
          "test-time search",
        ],
      },
      {
        slug: "safety-rails-and-approval",
        title: "Add Safety Rails and Human-on-the-Loop Approval",
        type: "video-code",
        duration: "9 mins",

        description:
          "Wrap the self-correction loop with sandboxing, approval gates, and human-on-the-loop control so the system earns trust before it earns more autonomy.",
        objectives: [
          "Explain why reliability compounds across autonomous repair rounds",
          "Add sandbox and file-scope guardrails around the mutation surface",
          "Differentiate human-in-the-loop from human-on-the-loop control",
          "Define when a code-modifying agent must pause for approval or rollback",
        ],

        codeUrl: CLEANLOOP_REPO_URL,

        infoBoxes: [
          {
            title: "Governance Is Part of the Architecture",
            content:
              "Sandboxing, approval gates, and rollback rules should live inside the loop design. They are not post-launch cleanup work.",
          },
        ],
        noteBoxes: [
          {
            title: "Human-on-the-Loop Scales Better",
            content:
              "Human-in-the-loop blocks every round. Human-on-the-loop lets routine bounded edits move quickly while humans stay available for escalation, regressions, and scope changes.",
          },
        ],

        diagrams: [
          {
            chart: lines(
              "graph LR",
              '    P["Proposed Diff"] --> S["Sandbox Check"]',
              '    S --> A["Approval Ladder"]',
              '    A --> C["Commit"]',
              '    A --> R["Rollback / Review"]',
            ),
            caption:
              "The governance flow checks the candidate inside a sandbox, routes it through an approval ladder, and either commits or rolls back the result.",
            alt: "Diagram showing proposed diff to sandbox check to approval ladder and then commit or rollback",
          },
        ],
        poll: {
          question:
            "Which event should always trigger human review for a code-modifying agent?",
          options: [
            {
              id: "scope",
              text: "The mutation surface expands",
            },
            {
              id: "judge",
              text: "The evaluation contract changes",
            },
            {
              id: "regression",
              text: "A previously passing test regresses",
            },
            {
              id: "all",
              text: "All of the above",
            },
          ],
          simulatedVotes: {
            scope: 18,
            judge: 17,
            regression: 21,
            all: 44,
          },
        },

        codePreview: {
          title: "Autonomy Ladder",
          description:
            "A simple autonomy ladder makes the loop's earned freedom explicit.",
          segments: [
            {
              code: lines(
                "autonomy_levels = {",
                '    0: "observe_only",',
                '    1: "propose_diff_and_wait_for_approval",',
                '    2: "auto_apply_if_all_tests_pass",',
                '    3: "auto_commit_after_streak_threshold",',
                "}",
                "",
                "print(autonomy_levels)",
              ),
              language: "python",
              filename: "autonomy_levels.py",
              explanation:
                "A simple autonomy ladder makes it explicit how much freedom the loop has earned and when humans must step back in.",
            },
          ],
        },
        stepGuides: [
          {
            title: "Inspect the Governance Surface",
            steps: [
              {
                title: "Inspect the sandbox boundary",
                description:
                  "Read sandbox.py and identify what the agent may execute, what it may write, and what stays outside the boundary.",
                code: "code sandbox.py",
                codeLanguage: "bash",
              },
              {
                title: "Read the autonomy ladder",
                description:
                  "Open autonomy.py and decide which events in your environment should always force human review.",
                code: "code autonomy.py",
                codeLanguage: "bash",
              },
              {
                title: "Verify the rollback path",
                description:
                  "Inspect or simulate one revert path so you can see how the system contains a bad patch immediately.",
                code: "git log --oneline -5",
                codeLanguage: "bash",
              },
            ],
          },
        ],

        transcript: [
          {
            time: 0,
            speaker: "Instructor",
            text: "A self-improving loop without guardrails is just a faster way to create damage. Reliability compounds across rounds, and so do mistakes.\n\nThat is why safety rails belong in the architecture itself.",
          },
          {
            time: 46,
            speaker: "Instructor",
            text: "The first layer is the sandbox. The loop may optimize inside the bounded arena, but it should not gain write access to new surfaces just because the model sounds confident.",
          },
          {
            time: 112,
            speaker: "Instructor",
            text: "The second layer is the approval ladder. Observe first. Then propose and wait. Then auto-apply only when every check passes. Then auto-commit only after a strong streak.\n\nAutonomy should rise with evidence, not optimism.",
          },
          {
            time: 184,
            speaker: "Instructor",
            text: "Human-on-the-loop is the operating model that scales. Humans stay available for boundary changes, regressions, and risky decisions, but the loop does not stop for routine bounded work.",
          },
          {
            time: 254,
            speaker: "Instructor",
            text: "Once the loop has safety rails, the next question is learning. In the final lesson, we turn the wins from code modification into reusable memory that can feed the next Prompt Evolution and Skill Mastery series.",
          },
        ],
        qa: [
          {
            question:
              "Why does human-on-the-loop scale better than human-in-the-loop?",
            answer:
              "Because routine bounded edits can move automatically while humans stay focused on exceptions, regressions, and policy changes. It preserves oversight without turning every round into a queue.",
          },
          {
            question: "What should always force a rollback?",
            answer:
              "Any regression on a previously passing check, any unapproved scope expansion, and any judge-contract change should force rollback or immediate human review.",
          },
          {
            question: "Can a bounded loop ever run without human review?",
            answer:
              "Yes, but only in a very narrow arena with strong tests, low blast radius, and a proven autonomy ladder. The safer default is still human-on-the-loop, not no-human oversight.",
          },
        ],

        tags: [
          "ai agent safety",
          "human-on-the-loop",
          "autonomous ai agents",
          "explainable ai",
          "self-healing software",
        ],
      },
      {
        slug: "permanent-learning-bridge",
        title: "Turn Winning Fixes Into Permanent Agent Skills",
        type: "video-code",
        duration: "8 mins",

        description:
          "Capture the wins from code modification in a lightweight memory format so future Prompt Evolution and Skill Mastery systems can start smarter instead of relearning the same repair.",
        objectives: [
          "Explain why stable wins should become reusable memory instead of one-off patches",
          "Distinguish between code, prompt, skill, and governance as storage targets for learning",
          "Draft a lightweight memory record from a successful repair loop",
          "Explain how this course bridges into future Prompt Evolution and Skill Mastery series",
        ],

        codeUrl: SELF_IMPROVING_AGENT_REPO_URL,

        infoBoxes: [
          {
            title: "Do Not Throw Away Stable Wins",
            content:
              "If a repair has worked across multiple rounds, the loop should capture the pattern, the evidence, and the reuse scope so the next task starts smarter.",
          },
        ],
        noteBoxes: [
          {
            title: "This Lesson Is a Bridge",
            content:
              "The code-modification course ends here on purpose. Prompt Evolution and Skill Mastery deserve their own series because they change different mutation surfaces.",
          },
        ],

        diagrams: [
          {
            chart: lines(
              "graph LR",
              '    W["Winning Repair"] --> E["Evidence Check"]',
              '    E --> C["Keep In Code"]',
              '    E --> P["Promote To Prompt Rule"]',
              '    E --> S["Promote To Skill"]',
              '    E --> G["Promote To Governance Rule"]',
            ),
            caption:
              "Permanent learning routes stable wins to the right storage surface: code, prompt, skill, or governance.",
            alt: "Diagram showing a winning repair flowing through evidence check into code, prompt, skill, or governance storage targets",
          },
        ],
        poll: {
          question:
            "When a repair keeps winning, where should the next improvement usually live?",
          options: [
            {
              id: "code",
              text: "Keep it in code",
            },
            {
              id: "prompt",
              text: "Promote it to a prompt rule",
            },
            {
              id: "skill",
              text: "Promote it to a reusable skill",
            },
            {
              id: "depends",
              text: "It depends on the kind of improvement",
            },
          ],
          simulatedVotes: {
            code: 18,
            prompt: 14,
            skill: 21,
            depends: 47,
          },
        },

        codePreview: {
          title: "Memory Record",
          description:
            "A compact memory record is enough to capture a stable repair and route it to the right next surface.",
          segments: [
            {
              code: lines(
                "memory_record = {",
                '    "failure_pattern": "date parser drops timezone suffix",',
                '    "winning_fix": "normalize timezone before schema enforcement",',
                '    "evidence": "passed 5/5 checks for 4 straight rounds",',
                '    "reuse_scope": "csv cleanup tasks with mixed locale timestamps",',
                '    "next_surface": "prompt_or_skill",',
                "}",
                "",
                "print(memory_record)",
              ),
              language: "python",
              filename: "memory_record.py",
              explanation:
                "A compact memory record is enough to capture a stable repair and route it into a future prompt or skill system.",
            },
          ],
        },
        stepGuides: [
          {
            title: "Draft One Reusable Memory Record",
            steps: [
              {
                title: "Read the strategy snapshot",
                description:
                  "Inspect the current finance_strategy.json and decide whether it captures a reusable lesson or just the next local patch.",
                code: "code finance_strategy.json",
                codeLanguage: "bash",
              },
              {
                title: "Compare companion surfaces",
                description:
                  "Open the Prompt Evolution and Skill Mastery companion docs so you can see where future learning will move next.",
                code: "code ../prompt_evolution/README.md\ncode ../skill_mastery/README.md",
                codeLanguage: "bash",
              },
              {
                title: "Draft one reusable memory record",
                description:
                  "Write one small JSON or markdown record from a successful repair and decide whether it belongs in code, prompt, skill, or governance.",
                code: "code MEMORY_RECORD.md",
                codeLanguage: "bash",
              },
            ],
          },
        ],

        transcript: [
          {
            time: 0,
            speaker: "Instructor",
            text: "A code-modifying agent becomes genuinely valuable when it stops relearning the same lesson every week. The real upgrade is permanent learning — turning successful repairs into reusable patterns instead of disposable patches.",
          },
          {
            time: 44,
            speaker: "Instructor",
            text: "The first storage surface is lightweight memory. Strategy snapshots. Eval history. Small pattern records. You do not need a giant system before you can stop throwing away stable wins.",
          },
          {
            time: 112,
            speaker: "Instructor",
            text: "The next question is where the win should live. Some improvements belong in code forever. Some belong in a better prompt. Some belong in a reusable skill file. Some belong in governance.\n\nThat routing decision is what separates this course from the next two planned series.",
          },
          {
            time: 192,
            speaker: "Instructor",
            text: "Prompt Evolution will focus on autonomous prompt optimization. Skill Mastery will focus on permanent reusable habits and agentic memory. This course gives both of them the raw material: stable repair records tied to real evidence.",
          },
          {
            time: 258,
            speaker: "Instructor",
            text: "That closes the code-modification path. You now have repo awareness, diff-first editing, self-correction, governance, and a learning handoff. The next move is not more patching. The next move is choosing the next mutation surface on purpose.",
          },
        ],
        qa: [
          {
            question:
              "Why not keep every successful repair in code and stop there?",
            answer:
              "Because some improvements are not code-level truths. Better instructions, reusable debugging playbooks, and governance heuristics often belong in prompts, skill files, or policy instead of the executable logic.",
          },
          {
            question:
              "How do I know a win is stable enough to store permanently?",
            answer:
              "Require repeated evidence. A single lucky patch is not enough. The repair should survive multiple rounds or multiple similar tasks before it becomes a reusable memory entry.",
          },
          {
            question: "Is this lesson already teaching Skill Mastery?",
            answer:
              "No. This lesson prepares the handoff. It shows how to capture the right evidence so a future Skill Mastery system has good source material instead of vague summaries.",
          },
        ],

        tags: [
          "permanent learning",
          "agentic memory",
          "self-improving ai agents",
          "skill mastery",
          "prompt evolution",
        ],
      },
    ],
    overview: {
      heroSubheading:
        "Build self-improving AI agents that read a repo, propose safe diffs, debug their own failures, and turn winning repairs into reusable learning.",
      learnItems: [
        {
          icon: "🗺",
          title: "Repo-aware agentic coding",
          description:
            "How autonomous AI agents build a map of the mutable surface, the fixed judge, and the artifact trail before they touch code.",
        },
        {
          icon: "🧩",
          title: "Diff-first autonomous editing",
          description:
            "How to turn free-form code generation into a disciplined change proposal, bounded patch, test run, and Git-backed commit-or-revert decision.",
        },
        {
          icon: "🔁",
          title: "Self-correction loops that actually learn",
          description:
            "How automated debugging, observability, and test-time search work together so the loop improves across rounds instead of relying on one lucky patch.",
        },
        {
          icon: "🛡",
          title: "Human-on-the-loop governance",
          description:
            "How sandboxing, approval ladders, rollback paths, and autonomy levels make autonomous AI agents practical in real engineering teams.",
        },
        {
          icon: "🧠",
          title: "Permanent learning handoff",
          description:
            "How to turn stable repairs into reusable patterns that can later power Prompt Evolution and Skill Mastery instead of being relearned from scratch.",
        },
      ],
      aboutParagraphs: [
        "Agentic coding is one of the highest-interest AI workflows right now, but most teams still treat coding agents like faster autocomplete. The bigger shift is to treat the model as part of a bounded repair loop: it reads the repo, proposes a change, runs the judge, inspects the failure, and keeps only the candidates that survive objective evaluation.",
        "This course focuses on the code-modification branch of self-improving AI agents. It does not try to teach every mechanism family at once. Instead, it keeps one mutable surface, one fixed judge, and one shared CleanLoop example so ideas like automated debugging, self-healing software, pull-request automation, and human-on-the-loop governance stay concrete and inspectable.",
        "By the end, you will have a clean mental model for autonomous editing, self-correction, governance, and permanent learning. You will also have the right bridge into the next two planned series: Prompt Evolution and Skill Mastery. Those series change the mutation surface. This course teaches the loop that makes those future surfaces understandable.",
      ],
      detailItems: [
        {
          title: "Build a self-aware codebase map",
          description:
            "Learn how to define the mutable file, the fixed judge, the artifact trail, and the read path that keeps the agent inside a bounded repo contract.",
        },
        {
          title: "Add a planning layer to autonomous edits",
          description:
            "Use change proposals, diff-first editing, deterministic tests, and Git-backed selection pressure so the loop can say no to bad patches.",
        },
        {
          title: "Turn debugging into a repeatable loop",
          description:
            "Combine exact failures, bounded diffs, round history, dashboards, and Best-of-N reranking so the system improves across multiple attempts.",
        },
        {
          title: "Govern autonomy without slowing everything down",
          description:
            "Use sandboxing, approval gates, and an autonomy ladder to move from human-in-the-loop to human-on-the-loop without losing trust.",
        },
        {
          title: "Capture reusable learning",
          description:
            "Store the wins from code modification in a lightweight pattern library so the next agent starts smarter and future Prompt Evolution and Skill Mastery systems have clean source material.",
        },
      ],
      prerequisites: {
        title: "Prerequisites",
        subtitle: "What you need before starting",
        tags: [
          "Self-Improving AI",
          "Agentic AI",
          "Python",
          "Git",
          "Autonomous Agents",
        ],
        description:
          "Developers building autonomous AI agents or evaluating agentic coding workflows. You should be comfortable with Python and Git. You do not need a full production platform — just the bounded CleanLoop example and model access.",
      },
      audienceCards: [
        {
          icon: "🧠",
          title: "AI Engineers",
          description:
            "You want to move from prompt demos into bounded self-improving AI systems that can fix code and justify the result.",
        },
        {
          icon: "⚙️",
          title: "Platform Engineers",
          description:
            "You need governance patterns for agentic coding, including approval gates, rollback paths, and clear mutation boundaries.",
        },
        {
          icon: "🛠",
          title: "Developer Tool Builders",
          description:
            "You want to understand how modern agentic IDE patterns like repository intelligence, diff proposals, and automated debugging fit together.",
        },
        {
          icon: "📈",
          title: "Technical Leaders",
          description:
            "You need a practical view of AI ROI for coding agents without buying into vague autonomy claims or unsafe self-modifying systems.",
        },
      ],
    },
    status: "publish",
  };
