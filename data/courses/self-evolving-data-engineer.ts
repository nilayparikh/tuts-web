import type { CourseDefinition } from "./types";
import { SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS } from "./self-evolving-data-engineer.transcripts";

const CLEANLOOP_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent/cleanloop";

export const SELF_EVOLVING_DATA_ENGINEER_COURSE: CourseDefinition = {
  slug: "self-evolving-data-engineer",
  title:
    "Build an AI Data Engineer: Self-Improving Pipelines with AutoGen Framework",
  description:
    "Build one bounded AI data-engineering loop with AutoGen, a fixed judge, and safe mutation over messy finance pipelines.",
  totalDuration: "58 mins",
  tags: [
    "Data Engineering",
    "AutoGen",
    "Software 3.0",
    "Self-Improving Pipelines",
    "CleanLoop",
    "Streamlit",
  ],
  icon: "🧬",
  difficulty: "moderate",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: CLEANLOOP_REPO_URL,
  status: "publish",
  parts: [
    {
      slug: "mutation-engine",
      title: "The Mutation Engine",
      type: "video-code",
      duration: "8 mins",
      videoId: "yx6aB5heI9o",
      description:
        "Frame the mutation engine before the deeper build lessons. This lesson explains why broken pipelines still bottleneck on humans, defines the bounded mutation contract, tours the CleanLoop repo surface, and places AutoGen at the orchestration seam instead of the judge.",
      objectives: [
        "Explain why data inconsistency becomes the real bottleneck before model quality matters.",
        "Define the bounded mutation contract for the course.",
        "Place AutoGen at the proposal and orchestration seam rather than inside the fixed judge.",
        "Orient the learner to the CleanLoop repo, setup flow, loop run, and dashboard evidence.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "Boundary First",
          content:
            "Keep one mutable surface, one fixed judge, and one visible artifact trail before the loop gets more autonomous. That is the contract the rest of the course builds on.",
        },
      ],
      stepGuides: [
        {
          title: "Get Started",
          steps: [
            {
              title: "Read the repo map first",
              description:
                "Start in the CleanLoop README so you see the command surface, the docs map, and the root learning files before you inspect code.",
              code: "cd _examples/self-improving-agent/cleanloop\ncode README.md",
              codeLanguage: "bash",
            },
            {
              title: "Validate setup before mutation",
              description:
                "Run the status and verify commands so you can inspect the finance inputs, provider config, and preflight gate before the loop starts.",
              code: "python util.py status\npython util.py verify",
              codeLanguage: "bash",
            },
            {
              title: "Run one bounded loop and inspect evidence",
              description:
                "Execute a short loop run, then open the dashboard and inspect the genome surface, mutation decisions, and recall evidence.",
              code: "python util.py loop --max-iterations 2\npython util.py dashboard",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["mutation-engine"],
      qa: [
        {
          question:
            "Why spend the first lesson on framing and repo orientation instead of code mutation?",
          answer:
            "Because a self-improving loop only makes sense when the learner can name the mutable surface, the fixed judge, and the artifact trail before the first mutation ever runs.",
        },
        {
          question: "Where does AutoGen belong in this course architecture?",
          answer:
            "At the proposal and orchestration seam. It can help coordinate retries and candidate generation, but it does not get to redefine correctness or grade its own work.",
        },
        {
          question: "Why show the dashboard in Lesson 01?",
          answer:
            "Because the course does not treat mutation as hidden magic. The dashboard makes the genome surface, the mutation decisions, and the evidence trail visible from the start.",
        },
      ],
      tags: ["data engineering", "AutoGen", "mutation engine"],
    },
    {
      slug: "pipeline-genome",
      title: "Defining the Pipeline Genome",
      type: "video-code",
      duration: "9 mins",
      videoId: "8Y7MEbEw8wc",
      description:
        "Define the one mutable pipeline genome for CleanLoop. This lesson reconnects to the Lesson 01 contract, shows why one file and one fixed judge keep mutation auditable, and walks the runtime surface where deterministic cleanup hands off to the mutation playbook.",
      objectives: [
        "Identify the mutable genome file and the fixed judge file in CleanLoop.",
        "Explain why bounded mutation is both a file-scope boundary and a problem-scope boundary.",
        "Trace where deterministic cleanup stops and the mutation playbook begins.",
        "See why worktrees and measurable diffs make genome evolution reviewable.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "One Mutable File",
          content:
            "The loop stays auditable only when one file is mutable, the judge stays fixed, and every failure maps back to a concrete diff you can inspect or roll back.",
        },
      ],
      stepGuides: [
        {
          title: "Define the Genome Boundary",
          steps: [
            {
              title: "Open the genome and the fixed judge side by side",
              description:
                "Read the mutable genome next to the immutable referee so the mutation boundary is visible before you run anything.",
              code: "cd _examples/self-improving-agent/cleanloop\ncode clean_data.py prepare.py",
              codeLanguage: "bash",
            },
            {
              title: "Trace the runtime handoff",
              description:
                "Inspect the runtime and loop files so you can see where deterministic cleanup ends and the mutation playbook takes over.",
              code: "code clean_data_runtime.py loop.py",
              codeLanguage: "bash",
            },
            {
              title: "Run the evaluation and inspect the dashboard",
              description:
                "Validate the setup, run the bounded evaluation flow, and inspect the evidence surface from the dashboard.",
              code: "python util.py status\npython util.py verify\npython util.py evaluate\npython util.py dashboard",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["pipeline-genome"],
      qa: [
        {
          question:
            "Why insist on one mutable file if a repo has many moving parts?",
          answer:
            "Because the loop becomes reviewable only when failures map back to a small diff surface. One file is not a universal rule, but it is the safest default when the problem can be bounded that tightly.",
        },
        {
          question: "What does bounded mutation actually bound in this lesson?",
          answer:
            "It bounds both the physical file surface and the business problem surface. CleanLoop is not trying to become a universal data engineer. It is trying to repair a narrow class of finance CSV inconsistencies.",
        },
        {
          question: "Why bring up worktrees before the orchestrator lesson?",
          answer:
            "Because the recording wants the learner to see early that mutation should run in an auditable workspace with a clean rollback path, not as unchecked branch churn.",
        },
      ],
      tags: ["pipeline genome", "bounded mutation", "AutoGen"],
    },
    {
      slug: "orchestrator",
      title: "The Orchestrator",
      type: "video-code",
      duration: "9 mins",
      videoId: "--mpnJ8f4Sg",
      description:
        "Show the CleanLoop orchestrator as the real control surface. This lesson explains the reader, repair forge, and crucible split, traces one bounded loop run, and shows why dashboard evidence matters before the system gets more autonomous.",
      objectives: [
        "Trace one full round of the CleanLoop orchestrator.",
        "Explain why read, propose, verify, and revert must stay separate.",
        "Show where AutoGen helps inside the proposal step without owning correctness.",
        "Connect row-level traces and dashboard evidence to the next observability lesson.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "Deterministic Frame",
          content:
            "The orchestrator can use an LLM for bounded proposals, but the loop stays trustworthy only when the read, verify, and survival decisions remain explicit and inspectable.",
        },
      ],
      stepGuides: [
        {
          title: "Trace the Orchestrator Loop",
          steps: [
            {
              title: "Open the control path in code",
              description:
                "Read the main loop beside the AutoGen runtime so you can see where failure context becomes a bounded mutation request.",
              code: "cd _examples/self-improving-agent/cleanloop\ncode loop.py autogen_runtime.py",
              codeLanguage: "bash",
            },
            {
              title: "Run one bounded iteration",
              description:
                "Reset the genome, evaluate the baseline, and run one loop round so the control path is visible in the terminal output.",
              code: "python util.py reset\npython util.py evaluate\npython util.py loop --max-iterations 1",
              codeLanguage: "bash",
            },
            {
              title: "Inspect dashboard evidence",
              description:
                "Open the dashboard and review artifacts, score movement, and trace decisions so you can see why observability is the next lesson.",
              code: "python util.py dashboard",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["orchestrator"],
      qa: [
        {
          question: "Why call the orchestrator the real control surface?",
          answer:
            "Because it owns the sequence that turns failure into the next verified attempt. Without that control shell, you only have raw suggestions and no reliable survival rule.",
        },
        {
          question: "Where should AutoGen sit in this lesson?",
          answer:
            "Inside the bounded proposal step. It can suggest the next mutation, but the fixed evaluation path still decides whether the candidate survives.",
        },
        {
          question: "Why end an orchestration lesson on dashboards and traces?",
          answer:
            "Because orchestration without observability does not scale. If you cannot inspect the evidence trail, you cannot safely widen the search space or trust the next stage of autonomy.",
        },
      ],
      tags: ["orchestrator", "AutoGen", "control loop"],
    },
    {
      slug: "observability-feedback",
      title: "Observability & The Feedback Signal",
      type: "video-code",
      duration: "8 mins",
      videoId: "0loLP30v0qM",
      description:
        "Make the CleanLoop loop observable. This lesson shows where run history, strategy snapshots, row-level traces, and dashboard metrics come from so you can tell whether a mutation actually taught the system anything.",
      objectives: [
        "Explain why eval history is part of the loop, not an optional dashboard extra.",
        "Show how the dashboard turns raw history into operator-facing metrics.",
        "Connect score movement, row-level traces, and mutation diffs into one feedback surface.",
        "Show when a human should continue, reset, or intervene based on the artifact trail.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "External Memory",
          content:
            "Observability is not decoration in this course. The loop needs durable history, trace rows, and operator controls so you can tell whether a mutation improved the system, repeated a failure, or never produced the artifact you expected.",
        },
      ],
      stepGuides: [
        {
          title: "Generate and Inspect the Feedback Surface",
          steps: [
            {
              title: "Write one bounded history artifact",
              description:
                "Run one loop iteration so CleanLoop exports the history, strategy, and trace artifacts that the rest of the lesson depends on.",
              code: "cd _examples/self-improving-agent/cleanloop\npython util.py reset\npython util.py loop --max-iterations 1",
              codeLanguage: "bash",
            },
            {
              title: "Inspect the saved artifacts directly",
              description:
                "Open the history and trace files before you rely on the dashboard so you know exactly which evidence the UI is reading.",
              code: "code .output/finance_eval_history.json .output/finance_strategy.json .output/traces/row-decisions.jsonl",
              codeLanguage: "bash",
            },
            {
              title: "Review the dashboard like an operator",
              description:
                "Launch the Streamlit dashboard and connect score movement, invoice-level traces, and mutation evidence into one review surface.",
              code: "python util.py dashboard",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["observability-feedback"],
      qa: [
        {
          question:
            "Why does this lesson separate score from trace instead of treating them as one metric surface?",
          answer:
            "Because they answer different engineering questions. The score tells you whether the run improved overall, while the trace tells you what actually happened to one row, proposal, or failure path. You need both to trust the loop.",
        },
        {
          question:
            "Why spend time on correlation IDs in a lesson about a local CleanLoop example?",
          answer:
            "Because the same reasoning scales to distributed systems. Correlation IDs let you connect one business event across multiple components, which is exactly how you keep agentic systems legible once they spread beyond one file or one process.",
        },
        {
          question:
            "Why are missing artifacts considered feedback in this lesson?",
          answer:
            "Because absence is a signal. If the history, strategy, or trace files never appear, that tells you the run never reached the stage you expected. Observability should help when the system fails early, not only when the happy path works.",
        },
      ],
      tags: ["observability", "feedback signal", "CleanLoop"],
    },
    {
      slug: "judge-self-challenging",
      title: "The Judge & Self-Challenging Loops",
      type: "video-code",
      duration: "8 mins",
      videoId: "vx9Lpm67RZk",
      description:
        "Keep the judge fixed while the data gets harder. This lesson shows how CleanLoop generates adversarial finance CSVs, applies targeted pressure, and forces the loop to improve without redefining correctness.",
      objectives: [
        "Explain why the judge must stay fixed while the data gets harder.",
        "Show how the challenger generates adversarial data without changing correctness.",
        "Connect targeted pressure to observed weaknesses instead of random noise.",
        "Show how challenge generation, evaluation, and dashboard review fit into one arena.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "Fixed Judge Rule",
          content:
            "The challenger can only change the data and the pressure profile. The judge still reads the same correctness contract. If the judge changes with the challenge, the loop stops learning and starts moving the goalposts.",
        },
      ],
      stepGuides: [
        {
          title: "Generate Pressure Without Moving the Goalposts",
          steps: [
            {
              title: "Create one fresh adversarial arena",
              description:
                "Clear the old challenger files and generate a fresh adversarial set so you know exactly which pressure level you are testing.",
              code: "cd _examples/self-improving-agent/cleanloop\nRemove-Item .input\\adversarial_d*.csv -ErrorAction SilentlyContinue\npython util.py challenge --levels 1 2 3",
              codeLanguage: "powershell",
            },
            {
              title: "Evaluate the same fixed judge",
              description:
                "Run evaluation and one loop pass so you can compare how the unchanged referee responds to the harder data surface.",
              code: "python util.py evaluate\npython util.py loop --max-iterations 1",
              codeLanguage: "bash",
            },
            {
              title: "Inspect challenge outcomes in the dashboard",
              description:
                "Open the dashboard after the adversarial run and inspect which rows stayed deterministic, which required mutation, and how the judge reported the outcome.",
              code: "python util.py dashboard",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["judge-self-challenging"],
      qa: [
        {
          question: "Why is the fixed judge the central rule in this lesson?",
          answer:
            "Because if the judge changes with the challenger, the system can no longer tell whether it truly improved. The lesson keeps correctness fixed so harder data increases pressure without redefining success.",
        },
        {
          question: "What makes a good challenger in this lesson?",
          answer:
            "A good challenger creates realistic, finance-aware anomalies that target observed weaknesses. It should increase difficulty in a way the operator can still understand and debug, not just flood the system with random noise.",
        },
        {
          question:
            "Why does the lesson spend time on curriculum pressure instead of only one adversarial example?",
          answer:
            "Because pressure should scale. The difficulty ladder lets the loop face mild, moderate, and harder cases in an intentional order, which is more useful than one-off chaos when you want the system to improve over time.",
        },
      ],
      tags: ["self-challenging AI", "adversarial loops", "CleanLoop"],
    },
    {
      slug: "test-time-search",
      title: "Test-Time Reranking",
      type: "video-code",
      duration: "8 mins",
      videoId: "bsfxRJGhzYM",
      description:
        "Add best-of-N candidate search to CleanLoop. This lesson shows why reranking improves output quality only when each candidate stays bounded, isolated, and scored by the same fixed judge.",
      objectives: [
        "Explain why reranking is a search-depth upgrade instead of a new judge.",
        "Trace how candidate generation, isolated evaluation, and final selection fit together.",
        "Compare a rejected one-shot round with a stronger reranked round.",
        "Decide when higher quality is worth extra cost and latency in a bounded AI loop.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "Search Depth, Not Judge Drift",
          content:
            "Reranking helps only when the judge stays fixed. This lesson adds candidate comparison before commit, not a softer definition of success.",
        },
      ],
      stepGuides: [
        {
          title: "Compare One-Shot vs Reranked Mutation",
          steps: [
            {
              title: "Reset and capture the baseline",
              description:
                "Reset the genome and run one bounded loop without reranking so you have a clean baseline before you widen search.",
              code: "python util.py reset\npython util.py loop --max-iterations 1",
              codeLanguage: "bash",
            },
            {
              title: "Enable best-of-N search",
              description:
                "Turn on reranking with two candidates and inspect which candidate survives the fixed judge.",
              code: "python util.py loop --max-iterations 1 --rerank --candidates 2",
              codeLanguage: "bash",
            },
            {
              title: "Review the saved evidence",
              description:
                "Open the dashboard or observe output so you can inspect candidate width, token cost, and the final selected attempt.",
              code: "python util.py observe\npython util.py dashboard",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["test-time-search"],
      qa: [
        {
          question: "Why is reranking different from changing the judge?",
          answer:
            "Because reranking spends more inference-time budget before commit, while the deterministic judge still defines success the same way for every candidate.",
        },
        {
          question: "When is best-of-N search worth paying for?",
          answer:
            "When a better result has clear business value and one-shot quality is too unstable. If the gain does not justify the extra latency and token cost, the simpler path usually wins.",
        },
        {
          question: "Why does the lesson insist on isolation and fairness?",
          answer:
            "Because reranking is only trustworthy when candidates do not contaminate each other and the same fixed judge evaluates all of them with the same hints and scoring rules.",
        },
      ],
      tags: ["test-time reranking", "best-of-N search", "CleanLoop"],
    },
    {
      slug: "production-safety",
      title: "Conclusion & Production Safety",
      type: "video-code",
      duration: "8 mins",
      videoId: "0guzOCHXE5Q",
      description:
        "Close the CleanLoop course with production safety. This lesson shows how sandboxing, tripwires, reset controls, and graduated autonomy turn a self-improving loop into something you can audit, contain, and actually trust.",
      objectives: [
        "Explain why production safety means containment, stop signals, and controlled autonomy instead of blind optimism.",
        "Show how sandboxing and reset keep bad genome code from damaging the main loop.",
        "Interpret the trust ladder from live runs and saved history instead of gut feel.",
        "Use the CleanLoop safety commands to inspect containment, operator oversight, and recovery.",
      ],
      codeUrl: CLEANLOOP_REPO_URL,
      infoBoxes: [
        {
          title: "Safety Is A System",
          content:
            "Production safety is not one switch. It is containment, stop signals, reset, and an autonomy policy that rises and falls with recent evidence.",
        },
      ],
      stepGuides: [
        {
          title: "Inspect Containment, Trust, And Recovery",
          steps: [
            {
              title: "Generate one fresh safety baseline",
              description:
                "Reset the genome, run one bounded round, and keep the saved history so the later safety commands have real evidence to inspect.",
              code: "cd _examples/self-improving-agent/cleanloop\npython util.py reset\npython util.py loop --max-iterations 1",
              codeLanguage: "bash",
            },
            {
              title: "Validate containment and evidence",
              description:
                "Run the sandbox path and the read-only observer so you can see what gets contained and which artifacts operators use to review the run.",
              code: "python util.py sandbox --timeout 10\npython util.py observe",
              codeLanguage: "bash",
            },
            {
              title: "Inspect trust, then recover cleanly",
              description:
                "Check the simulated trust ladder, compare it with history-based trust, then reset to the starter baseline without losing the evidence you just generated.",
              code: "python util.py autonomy --rounds 5\npython util.py autonomy --from-history\npython util.py reset",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      transcript: SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS["production-safety"],
      qa: [
        {
          question: "Why is sandboxing non-negotiable in this lesson?",
          answer:
            "Because the genome is rewritten code. A self-improving loop needs containment around crashes, hangs, and unsafe side effects before it deserves more autonomy.",
        },
        {
          question: "Why keep reset separate from deleting output artifacts?",
          answer:
            "Because recovery should restore the starter genome without erasing the evidence that explains what just happened. Operators still need the logs, traces, and judged history after a bad run.",
        },
        {
          question:
            "Why can the loop stay in review mode even after some good history?",
          answer:
            "Because the trust ladder is meant to be conservative. A few good runs are useful, but recent instability, drift, or weak rolling scores should still block automatic promotion.",
        },
      ],
      tags: ["production safety", "self-improving AI", "CleanLoop"],
    },
  ],
  overview: {
    heroSubheading:
      "Build one bounded mutation loop over messy finance data, keep the judge fixed, widen search only when it earns its cost, and close with sandboxing, reset, and graduated autonomy.",
    learnItems: [
      {
        icon: "🧠",
        title: "Frame the real bottleneck",
        description:
          "See why human repair loops, not model quality, still block modern data pipelines.",
      },
      {
        icon: "🧬",
        title: "Understand the bounded mutation contract",
        description:
          "Learn the core shape: one editable genome, one fixed judge, and one visible artifact trail.",
      },
      {
        icon: "🛠️",
        title: "Understand the control loop",
        description:
          "See how the orchestrator turns one failure into the next bounded repair attempt without letting the model own correctness.",
      },
    ],
    aboutParagraphs: [
      "This site now publishes the complete seven-lesson Self-Evolving Data Engineer course. The series frames the business problem, defines the mutation contract, locks the exact pipeline genome, shows how the orchestrator controls one bounded repair loop, makes that loop observable, raises pressure with a fixed judge and smarter challengers, adds best-of-N reranking before commit, and closes with production safety.",
      "The scope stays narrow on purpose: one mutable surface, one fixed judge, one repeatable control path, one readable feedback surface, and one safety ladder for containment, reset, and trust. That keeps the public course auditable from Lesson 01 through Lesson 07 instead of widening into a vague platform story.",
    ],
    detailItems: [
      {
        title: "What is live right now?",
        description:
          "All seven lessons are live with published YouTube videos, the CleanLoop code surface, and the synced transcript, Q&A, and step-guide content for the full public course boundary.",
      },
      {
        title: "What comes next?",
        description:
          "The course is complete. The next step is to apply the same bounded pattern to one real surface in your own system: define the genome, keep the judge fixed, add observability, then earn safety and autonomy one control at a time.",
      },
    ],
    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["Python basics", "Data pipelines", "CSV cleanup"],
      description:
        "You do not need prior AutoGen experience for Lessons 01 through 03. It helps if you already understand basic Python workflows, messy CSV data, and why deterministic rules fail on real-world pipeline inputs.",
    },
    audienceCards: [
      {
        icon: "🏗️",
        title: "Data platform engineers",
        description:
          "You want a safer pattern for introducing AI into brittle data-cleaning and normalization pipelines.",
      },
      {
        icon: "🤖",
        title: "Agent builders",
        description:
          "You want to see how AutoGen fits into a bounded engineering loop without letting the model redefine correctness.",
      },
    ],
  },
};
