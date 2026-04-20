/**
 * Course: Self-Improving Agents — The Karpathy Loop
 *
 * Slug: "self-improving-agents"  →  /self-improving-agents/, /self-improving-agents/the-bottleneck-problem/, …
 *
 * 12 lessons + 1 quiz. 6 hands-on code lessons (50% coverage).
 * Running project: CleanLoop — a self-healing data engineer.
 * Azure AI Foundry / Foundry Local. Streamlit dashboard.
 */

import type { CourseDefinition } from "./types";

export const SELF_IMPROVING_AGENTS_COURSE: CourseDefinition = {
  slug: "self-improving-agents",
  title: "Self-Improving Agents: The Karpathy Loop",
  description:
    "Build agents that improve themselves. From the Karpathy Loop to auto-curricula and graduated autonomy — with a running CleanLoop project, real-time dashboard, and production safety patterns.",
  totalDuration: "~91 mins",
  tags: [
    "Self-Improving Agents",
    "Karpathy Loop",
    "AutoResearch",
    "CleanLoop",
    "Python",
    "Azure AI Foundry",
    "Streamlit",
    "Metacognition",
    "Auto-Curriculum",
  ],
  icon: "🔁",
  difficulty: "moderate",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  status: "draft",
  parts: [
    // ── MODULE 1: FOUNDATIONS ─────────────────────────────────────────────

    // ── Lesson 01 ────────────────────────────────────────────────────────
    {
      slug: "the-bottleneck-problem",
      title: "The Bottleneck Problem",
      type: "video",
      duration: "6 mins",

      description:
        "LLMs are powerful but frozen after training. Explore why static models hit a ceiling and how the Karpathy Loop breaks through it.",
      objectives: [
        "Identify the freeze problem in deployed LLMs",
        "Explain the concept of the 'LLM OS' and its limitations",
        "Describe the core hypothesis of the Karpathy Loop",
        "Differentiate static inference from self-improving loops",
      ],

      infoBoxes: [
        {
          title: "No Prerequisites",
          content:
            "This is the first lesson in the course. No prior setup needed — just watch and learn. Setup starts in Lesson 05.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph LR\n    U["User Query"] --> LLM["LLM (Frozen Weights)"]\n    LLM --> R["Response"]\n    R --> E["Evaluation"]\n    E -->|"Gap identified"| H["Human fixes prompt/code"]\n    H --> LLM\n\n    style H fill:#ff6b6b,stroke:#333,color:#fff',
          caption:
            "Today's workflow — the human is the bottleneck. Every improvement requires manual intervention.",
          alt: "Diagram showing user query to LLM to response to evaluation, with human as bottleneck in the improvement loop",
        },
      ],

      poll: {
        question: "What is the biggest limitation of current LLM deployments?",
        options: [
          { id: "frozen", text: "Models are frozen after training" },
          { id: "cost", text: "Inference costs too much" },
          { id: "hallucination", text: "Models hallucinate too often" },
          { id: "latency", text: "Response latency is too high" },
          { id: "context", text: "Context windows are too small" },
        ],
        simulatedVotes: {
          frozen: 38,
          cost: 12,
          hallucination: 25,
          latency: 10,
          context: 15,
        },
      },

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "You deploy a model. It works — for a while. Then the world moves on. New data formats appear, user expectations shift, and your model sits there, frozen in time, confidently generating yesterday's answers.\n\nThis is the bottleneck problem. And it's not about model size — it's about the gap between training and deployment. Andrej Karpathy calls this the \"human in the loop\" problem.",
        },
        {
          time: 18,
          speaker: "Instructor",
          text: "Think of the current LLM stack as an operating system. You've got a CPU — the base model. You've got peripherals — tools, retrieval, code execution. But unlike a real OS, this system can't patch itself. Every improvement requires a human to diagnose the problem, write a fix, test it, and deploy it.\n\nThat's expensive. It's slow. And it doesn't scale.",
        },
        {
          time: 38,
          speaker: "Instructor",
          text: "Here's Karpathy's core insight, published in February 2025. What if the model could close that loop itself? Read the failing test, hypothesize a fix, modify the code, run the evaluation, and commit or revert — all without human intervention.\n\nThat's the Karpathy Loop. The model becomes its own engineer.",
        },
        {
          time: 58,
          speaker: "Instructor",
          text: "This isn't AGI fantasy. Karpathy built it. The AutoResearch repo ran 700 automated experiments that generated genuine ML improvements — published on arXiv. Shopify cloned it and got a 53% speedup on their Liquid engine overnight.\n\nThe pattern works. The question is: how do you build it yourself?",
        },
        {
          time: 80,
          speaker: "Instructor",
          text: "This course takes you from concept to production. You'll build CleanLoop — a self-healing data engineer that fixes messy CSVs without human help. Along the way you'll add a real-time dashboard, automatic curricula, test-time re-ranking, and safety guardrails.\n\nLet's start with where this all began.",
        },
      ],

      qa: [
        {
          question: "Is this the same as fine-tuning?",
          answer:
            "No. Fine-tuning changes model weights. The Karpathy Loop changes the code, prompts, or config the model works with — the model itself stays frozen. No training needed.",
        },
        {
          question: "Do I need a powerful GPU?",
          answer:
            "No. The loop runs inference, not training. You can use Azure AI Foundry or Foundry Local with a standard machine.",
        },
        {
          question: "How is this different from prompt chaining?",
          answer:
            "Prompt chaining generates output in steps. The Karpathy Loop generates code, evaluates it against assertions, and commits or reverts. It's a mutation-selection cycle, not a pipeline.",
        },
      ],

      tags: [
        "bottleneck",
        "LLM OS",
        "Karpathy Loop",
        "AutoResearch",
        "self-improvement",
      ],
    },

    // ── Lesson 02 ────────────────────────────────────────────────────────
    {
      slug: "inside-autoresearch",
      title: "Inside AutoResearch",
      type: "video",
      duration: "6 mins",

      description:
        "Walk through Karpathy's real AutoResearch repo. See how 700 automated experiments generated published ML improvements — and extract the reusable pattern.",
      objectives: [
        "Trace the AutoResearch workflow: prepare → modify → evaluate → commit/revert",
        "Identify the three-file pattern: referee, genome, orchestrator",
        "Explain binary assertions and why they matter",
        "Connect AutoResearch to the CleanLoop project you'll build",
      ],

      diagrams: [
        {
          chart:
            'graph TD\n    A["Read program.md (agenda)"] --> B["Read current genome"]\n    B --> C["LLM: propose hypothesis + code"]\n    C --> D["Write new genome to disk"]\n    D --> E["Run evaluation (assertions)"]\n    E --> F{"All pass?"}\n    F -->|Yes| G["git commit"]\n    F -->|No| H["git reset"]\n    G --> I["Next iteration"]\n    H --> I\n    I --> A',
          caption:
            "The Karpathy Loop — each iteration reads, hypothesizes, modifies, evaluates, then commits or reverts.",
          alt: "Flowchart of the Karpathy Loop cycle from reading code through LLM hypothesis to evaluation and Git commit/revert",
        },
      ],

      poll: {
        question:
          "AutoResearch ran 700 experiments. How many do you think a human would run manually?",
        options: [
          { id: "5", text: "About 5" },
          { id: "20", text: "About 20" },
          { id: "50", text: "About 50" },
          { id: "100", text: "100+" },
        ],
        simulatedVotes: { "5": 35, "20": 40, "50": 18, "100": 7 },
      },

      noteBoxes: [
        {
          title: "AutoResearch Scale",
          content:
            "AutoResearch ran 630+ lines of generated code across 700 experiments over multiple nights. Each experiment was a full hypothesis-code-evaluate cycle — far beyond what manual iteration can achieve.",
        },
      ],

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In February 2025, Karpathy published the AutoResearch repo. It's a Python project — about 800 lines of orchestration code — that ran 700 automated ML experiments. Some of those experiments produced genuine improvements that were published on arXiv.\n\nLet's walk through exactly how it works.",
        },
        {
          time: 16,
          speaker: "Instructor",
          text: "Three files. That's the core pattern. First — prepare.py. This is the referee. It sets up the experiment, defines the evaluation criteria, and scores results. The agent cannot edit this file.\n\nSecond — the genome. In AutoResearch, that's the ML training code. This is the only file the agent can modify.",
        },
        {
          time: 36,
          speaker: "Instructor",
          text: "Third — the orchestrator. It reads the current genome and the agenda — a markdown file called program.md — sends them to the LLM, gets back a hypothesis and new code, writes the code to disk, and runs the evaluation.\n\nIf all assertions pass, git commit. If any fail, git reset. Move to the next iteration.",
        },
        {
          time: 54,
          speaker: "Instructor",
          text: 'The key insight is binary assertions. Each evaluation check is pass or fail — not a gradient, not a score from 1 to 10. Binary.\n\nWhy? Because LLMs work better with clear success/failure signals. "Your code failed the date_is_parseable check" is more actionable than "your code scored 6.3 out of 10."',
        },
        {
          time: 72,
          speaker: "Instructor",
          text: "The commit/revert mechanism is the selection pressure. Good mutations survive. Bad ones are rolled back. The Git log becomes a fossil record of genuine improvements.\n\nThis is evolution — not gradient descent. Mutation, selection, survival.",
        },
        {
          time: 92,
          speaker: "Instructor",
          text: "In this course, you'll build the same pattern — but for data engineering instead of ML research. CleanLoop uses prepare.py as the referee, clean_data.py as the genome, and loop.py as the orchestrator.\n\nSame three-file pattern. Same binary assertions. Same Git commit/revert cycle. Different domain.",
        },
      ],

      qa: [
        {
          question: "Why can't the agent edit prepare.py?",
          answer:
            "If the agent could modify the referee, it could weaken the evaluation to make itself look good. The separation between referee and genome is the core safety property of the arena architecture.",
        },
        {
          question: "What is program.md?",
          answer:
            "The agenda file. It tells the agent what to focus on — like a sprint backlog. The orchestrator sends it to the LLM alongside the current code and failure history.",
        },
        {
          question: "Why binary assertions instead of a continuous score?",
          answer:
            "Binary signals give the LLM a clear target. Instead of 'improve your score,' it's 'fix this specific failing check.' Clear failures produce better hypotheses.",
        },
      ],

      tags: [
        "AutoResearch",
        "Karpathy",
        "three-file pattern",
        "binary assertions",
        "Git",
      ],
    },

    // ── Lesson 03 ────────────────────────────────────────────────────────
    {
      slug: "arena-architecture",
      title: "The Arena Architecture",
      type: "video-code",
      duration: "8 mins",

      description:
        "Scaffold the CleanLoop project in VS Code. Create the three-file arena pattern — referee, genome, orchestrator — and write your first binary assertions.",
      objectives: [
        "Create the three-file arena structure for CleanLoop",
        "Write binary assertions for data quality validation",
        "Understand why the referee file must be immutable",
        "Scaffold the project skeleton ready for the full loop",
      ],

      infoBoxes: [
        {
          title: "First Hands-On Lesson",
          content:
            "This is the first coding lesson. You'll scaffold the project structure and write assertions. Full loop implementation comes in Lesson 06.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph LR\n    subgraph Arena ["CleanLoop Arena"]\n        R["prepare.py<br/>(Referee)"]\n        G["clean_data.py<br/>(Genome)"]\n        O["loop.py<br/>(Orchestrator)"]\n    end\n\n    O -->|"reads"| G\n    O -->|"calls"| R\n    O -->|"rewrites"| G\n    R -.->|"immutable"| R\n\n    style R fill:#4ecdc4,stroke:#333,color:#fff\n    style G fill:#ff6b6b,stroke:#333,color:#fff\n    style O fill:#45b7d1,stroke:#333,color:#fff',
          caption:
            "The three-file arena — referee is immutable, genome is the mutation target, orchestrator ties them together.",
          alt: "Three-file pattern diagram: prepare.py (referee, immutable), clean_data.py (genome, mutable), loop.py (orchestrator)",
        },
      ],

      codePreview: {
        title: "Arena Scaffold",
        description: "The starting files for the CleanLoop project.",
        segments: [
          {
            code: '"""prepare.py — The Referee."""\n\nimport json\nimport pandas as pd\nfrom pathlib import Path\n\n\ndef evaluate(master_output: Path) -> dict:\n    """Run binary assertions against the master output."""\n    results = {"passed": [], "failed": []}\n    try:\n        df = pd.read_csv(master_output)\n    except Exception as e:\n        results["failed"].append(f"Cannot read output: {e}")\n        return results\n\n    # Assertion: price column is numeric\n    if df["price"].dtype in ("float64", "float32"):\n        results["passed"].append("price_is_float")\n    else:\n        results["failed"].append(f"price_is_float: got {df[\'price\'].dtype}")\n\n    # Assertion: date column is parseable\n    try:\n        pd.to_datetime(df["date"])\n        results["passed"].append("date_is_parseable")\n    except Exception:\n        results["failed"].append("date_is_parseable")\n\n    return results',
            language: "python",
            filename: "prepare.py",
            explanation:
              "The referee — defines binary assertions for data quality. The agent can never edit this file.",
          },
          {
            code: '{\n  "assertions": [\n    {"name": "price_is_float", "severity": "critical"},\n    {"name": "date_is_parseable", "severity": "critical"},\n    {"name": "no_nan_date", "severity": "high"},\n    {"name": "no_nan_product", "severity": "high"},\n    {"name": "no_nan_price", "severity": "high"}\n  ]\n}',
            language: "json",
            filename: "eval.json",
            explanation:
              "The assertion registry. Each assertion is binary — pass or fail. Severity guides the agent's priority.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Scaffold CleanLoop",
          steps: [
            {
              title: "Create the project directory",
              code: "mkdir cleanloop\ncd cleanloop",
              codeLanguage: "bash",
              description:
                "Create a fresh directory for the CleanLoop project.",
            },
            {
              title: "Create prepare.py (the referee)",
              description:
                "Copy the prepare.py code from the CodePreview. This file defines the evaluation criteria and must never be edited by the agent.",
            },
            {
              title: "Create eval.json (assertion registry)",
              description:
                "Define the assertion names, severities, and expected behaviors.",
            },
            {
              title: "Create clean_data.py (the genome)",
              code: '"""clean_data.py — The Genome. Starting point."""\n\nimport pandas as pd\nfrom pathlib import Path\n\n\ndef clean(input_dir: Path, output_path: Path) -> None:\n    """Clean CSV files and produce a master output."""\n    frames = []\n    for csv_file in sorted(input_dir.glob("*.csv")):\n        df = pd.read_csv(csv_file)\n        frames.append(df)\n    master = pd.concat(frames, ignore_index=True)\n    master.to_csv(output_path, index=False)',
              codeLanguage: "python",
              description:
                "Start with a naive implementation — just concatenate. This will fail most assertions.",
            },
            {
              title: "Create program.md (the agenda)",
              description:
                "Write a brief agenda: 'Merge all CSVs into a single master file with clean, consistent data types.'",
            },
            {
              title: "Verify the scaffold",
              code: "ls cleanloop/\n# prepare.py  clean_data.py  eval.json  program.md",
              codeLanguage: "bash",
              description:
                "You should see four files. The loop.py orchestrator comes in Lesson 06.",
            },
          ],
        },
      ],

      poll: {
        question:
          "Which property of binary assertions matters most for the Karpathy Loop?",
        options: [
          { id: "clear", text: "Clear pass/fail signal for the LLM" },
          {
            id: "composable",
            text: "Composable — each assertion is independent",
          },
          { id: "fast", text: "Fast to evaluate (milliseconds)" },
          {
            id: "deterministic",
            text: "Deterministic — same input, same result",
          },
        ],
        simulatedVotes: {
          clear: 35,
          composable: 20,
          fast: 15,
          deterministic: 30,
        },
      },

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "Theory time is over. Let's scaffold the project you'll build throughout this course.\n\nOpen VS Code. Create a fresh directory called cleanloop. Inside it, we need four files to start — prepare.py, clean_data.py, eval.json, and program.md.",
        },
        {
          time: 14,
          speaker: "Instructor",
          text: "prepare.py is the referee. It defines the evaluation criteria — binary assertions that check data quality. price_is_float — is the price column actually numeric? date_is_parseable — can pandas parse the date column?\n\nEach assertion returns pass or fail. No scores, no gradients. Binary.",
        },
        {
          time: 32,
          speaker: "Instructor",
          text: "clean_data.py is the genome. It starts naive — just concatenate all CSVs and dump them. This will fail most assertions immediately. That's the point.\n\nThe agent needs failures to work from. A genome that already passes everything gives the loop nothing to improve.",
        },
        {
          time: 50,
          speaker: "Instructor",
          text: "eval.json is the assertion registry. It lists every check by name and severity. Critical assertions must pass before the loop can commit. High-severity ones are prioritized but not blocking.\n\nprogram.md is the agenda — a human-readable description of what the agent should accomplish.",
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "The three-file pattern enforces separation of concerns. The referee can't be edited by the agent — that's the safety boundary. The genome is the only mutation target. The orchestrator — which we'll build in Lesson 06 — ties them together.\n\nThis pattern comes directly from AutoResearch. Same structure, different domain.",
        },
        {
          time: 86,
          speaker: "Instructor",
          text: "Verify your scaffold. You should see four files in the cleanloop directory. We'll add loop.py in the Build module.\n\nFor now, understand the architecture. The referee defines truth. The genome defines the current solution. The orchestrator runs the loop. Everything else builds on this foundation.",
        },
      ],

      qa: [
        {
          question: "Why start with a naive genome that fails?",
          answer:
            "The loop needs failures to improve from. If clean_data.py already passed all assertions, the agent would have nothing to fix. Starting naive gives maximum room for improvement.",
        },
        {
          question: "Can I add more assertions later?",
          answer:
            "Yes — and you should. Start with a few critical checks, then add more as the agent handles them. The Challenger lesson (09) automates this.",
        },
        {
          question: "What if two assertions conflict?",
          answer:
            "Binary assertions should be independently satisfiable. If two checks can't both pass simultaneously, one of them is wrong. Fix the assertions, not the agent.",
        },
      ],

      tags: ["arena", "scaffold", "VS Code", "binary assertions", "CleanLoop"],
    },

    // ── Lesson 04 ────────────────────────────────────────────────────────
    {
      slug: "universal-self-improvement",
      title: "The Universal Self-Improvement Recipe",
      type: "video",
      duration: "5 mins",

      description:
        "Shopify used the Karpathy Loop overnight — 19% ML improvement, 53% template speedup. Learn the universal three-criteria recipe for applying self-improving loops to any domain.",
      objectives: [
        "Analyze the Shopify case study: query expansion and Liquid optimizations",
        "State the three criteria for applying a Karpathy Loop to any domain",
        "Identify at least three non-ML use cases for self-improving loops",
        "Evaluate when a self-improving loop is appropriate vs. overkill",
      ],

      noteBoxes: [
        {
          title: "Scale Context",
          content:
            "Shopify's Liquid engine renders every storefront — billions of requests per day for 875 million customers. A 53% speedup at this scale translates to millions saved in compute costs.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph TD\n    E["1. Something You Can Edit<br/>Code, prompt, query, template"]\n    M["2. A Way to Measure<br/>Benchmark, test suite, score"]\n    T["3. A Time-Boxed Test<br/>Run and get a result"]\n    L["Self-Improving Loop"]\n\n    E --> L\n    M --> L\n    T --> L',
          caption:
            "The universal recipe — if all three criteria are present, you have a candidate for autonomous improvement.",
          alt: "Diagram showing three criteria converging: editable code, measurable metric, and time-boxed test",
        },
      ],

      poll: {
        question:
          "Which domain would you most like to apply a self-improving loop to?",
        options: [
          { id: "data", text: "Data pipeline maintenance" },
          { id: "test", text: "Test coverage improvement" },
          { id: "perf", text: "Performance optimization" },
          { id: "prompt", text: "Prompt engineering" },
          { id: "seo", text: "SEO / web optimization" },
        ],
        simulatedVotes: { data: 28, test: 22, perf: 25, prompt: 32, seo: 8 },
      },

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The Karpathy Loop started as an ML research tool. It took less than a month for it to prove itself in production — at one of the world's largest e-commerce platforms.\n\nIn March 2026, Shopify's CEO Tobi Lütke cloned the autoresearch repo and pointed it at two production problems.",
        },
        {
          time: 16,
          speaker: "Instructor",
          text: 'First — query expansion. Shopify\'s search engine needs to understand what a shopper means when they type "red shoes." Should it also search for "crimson footwear" or "scarlet sneakers"? Lütke ran 37 automated experiments overnight.\n\nThe result — a 0.8 billion parameter model optimized by the agent outperformed a 1.6 billion parameter model tuned by hand. 19% improvement. A smaller model, tuned by a machine, beat a larger model tuned by humans.',
        },
        {
          time: 42,
          speaker: "Instructor",
          text: "Second — the Liquid templating engine. This renders every storefront on Shopify — billions of times per day. After about 120 automated experiments and 93 commits, the agent achieved a 53% speedup in parse/render time and a 61% reduction in object allocations.\n\nAt Shopify's scale, that translates to millions saved and faster pages for 875 million customers.",
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "So here's the universal recipe. You can apply a Karpathy Loop to any problem that meets three criteria.\n\nFirst — something you can edit. Code, a prompt, a query, a template. Second — a way to measure. A test suite, a benchmark, a score. Third — a time-boxed test. Run it and get a result in minutes, not hours.\n\nIf all three are present, you have a candidate.",
        },
        {
          time: 92,
          speaker: "Instructor",
          text: "This goes way beyond ML. Test coverage — edit test code, measure coverage percent, run the suite. SQL performance — edit queries, measure execution time, run against test data. Prompt engineering — edit the system prompt, measure task accuracy, run the eval.\n\nThe pattern adapts to any domain where iteration is cheap and measurement is reliable.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "When doesn't it work? If the search space is small, a human can find the optimum faster. If iterations are expensive — hours, not minutes — the loop wastes resources. If the metric is noisy or subjective, the loop chases random variation.\n\nKnowing when not to use it is just as important as knowing how.",
        },
      ],

      qa: [
        {
          question: "How did a smaller model outperform a larger one?",
          answer:
            "The 0.8B model was optimized through 37 automated experiments that explored the configuration space much more thoroughly than manual tuning. A human might try 5-10 configurations. The agent tried 37 in one night. Better search, not bigger model.",
        },
        {
          question: "Can I use this with closed-source tools I can't edit?",
          answer:
            "You need something editable. For closed-source tools, the editable element might be the configuration, the prompts, or the pipeline that uses the tool — not the tool itself.",
        },
        {
          question: "What about domains where tests take hours?",
          answer:
            "The loop needs cheap iterations. If your test takes 2 hours, you only get 12 experiments per day — not enough for the pattern to shine. Consider finding a proxy metric that runs in minutes, or subsetting your test data.",
        },
      ],

      tags: [
        "Shopify",
        "universal recipe",
        "case study",
        "self-improving loops",
        "production",
      ],
    },

    // ── MODULE 2: BUILD ──────────────────────────────────────────────────

    // ── Lesson 05 ────────────────────────────────────────────────────────
    {
      slug: "setup-and-tools",
      title: "Setup & Tools",
      type: "reading",
      duration: "5 mins",

      description:
        "Set up your Python 3.12+ environment, install dependencies (including Streamlit), configure Azure AI Foundry credentials, and verify your setup runs end-to-end.",
      objectives: [
        "Set up a Python 3.12+ virtual environment with all dependencies",
        "Configure Azure AI Foundry or Foundry Local credentials",
        "Understand the CleanLoop project structure",
        "Verify your environment with an end-to-end LLM call",
      ],

      infoBoxes: [
        {
          title: "Python 3.12+ Required",
          content:
            "This course uses modern Python features (async/await, type hints). Ensure you have Python 3.12 or later. Run <code>python --version</code> to check.",
        },
      ],

      noteBoxes: [
        {
          title: "VS Code Recommended",
          content:
            "All examples in this course use VS Code with the Python extension. The dashboard lesson (Lesson 07) uses VS Code's split-terminal workflow. Any editor works, but VS Code gives the best experience.",
        },
        {
          title: "Foundry Local Alternative",
          content:
            "If you don't have Azure AI Foundry access, you can use Foundry Local with Qwen2.5 Coder for all code generation tasks. Set <code>MODEL_NAME=qwen2.5-coder</code> in your .env file.",
        },
      ],

      codePreview: {
        title: "Environment Verification",
        description: "Run this script to verify your setup works end-to-end.",
        segments: [
          {
            code: '"""verify_setup.py — Check that all dependencies and credentials work."""\n\nimport os\nfrom pathlib import Path\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\n# Check Python version\nimport sys\nassert sys.version_info >= (3, 12), f"Python 3.12+ required, got {sys.version}"\nprint("✅ Python version OK")\n\n# Check dependencies\ntry:\n    import pandas\n    import git\n    import streamlit\n    print("✅ All packages installed")\nexcept ImportError as e:\n    print(f"❌ Missing package: {e}")\n\n# Check credentials\nendpoint = os.getenv("AZURE_AI_FOUNDRY_ENDPOINT")\nif endpoint:\n    print("✅ Azure AI Foundry endpoint configured")\nelse:\n    print("⚠️  No Azure endpoint — using Foundry Local")\n\nprint("\\n🎉 Setup complete. Ready for Lesson 06.")',
            language: "python",
            filename: "verify_setup.py",
            explanation:
              "Checks Python version, installed packages, and API credentials in one shot.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Set Up Your Environment",
          steps: [
            {
              title: "Create a virtual environment",
              code: "python -m venv .venv\n.venv\\Scripts\\activate",
              codeLanguage: "bash",
              description:
                "Create and activate a Python virtual environment. On macOS/Linux use <code>source .venv/bin/activate</code>.",
              note: "Always use a venv — never install course dependencies globally.",
            },
            {
              title: "Install dependencies",
              code: "pip install azure-ai-projects pandas gitpython python-dotenv streamlit",
              codeLanguage: "bash",
              description:
                "Install all packages needed for the course. Streamlit is for the dashboard in Lesson 07.",
            },
            {
              title: "Configure credentials",
              code: "AZURE_AI_FOUNDRY_ENDPOINT=https://your-endpoint.azure.com\nAZURE_AI_FOUNDRY_KEY=your-api-key\nMODEL_NAME=gpt-4o",
              codeLanguage: "env",
              description:
                "Create a .env file in your project root. Replace the placeholder values with your actual credentials.",
            },
            {
              title: "Open the project in VS Code",
              code: "code .",
              codeLanguage: "bash",
              description:
                "Open the cleanloop directory in VS Code. You should see the arena files from Lesson 03.",
            },
            {
              title: "Run the verification script",
              code: "python verify_setup.py",
              codeLanguage: "bash",
              description:
                "All checks should pass. If any fail, fix the issue before proceeding to Lesson 06.",
            },
          ],
        },
      ],

      qa: [
        {
          question: "Can I use Foundry Local instead of Azure AI Foundry?",
          answer:
            "Yes. Set MODEL_NAME=qwen2.5-coder in your .env and update the endpoint to your local inference URL. All examples work with either provider.",
        },
        {
          question: "Do I need Streamlit for the course?",
          answer:
            "Streamlit is used in Lesson 07 (Loop Dashboard) to visualize agent decisions and evaluation results. Install it now so you're ready.",
        },
        {
          question: "Can I use a different editor?",
          answer:
            "Yes, but VS Code is recommended. The dashboard lesson uses VS Code's integrated terminal for a side-by-side workflow — code on the left, dashboard on the right.",
        },
      ],

      tags: ["setup", "Python", "Azure AI Foundry", "VS Code", "environment"],
    },

    // ── Lesson 06 ────────────────────────────────────────────────────────
    {
      slug: "build-your-first-loop",
      title: "Build Your First Self-Improving Loop",
      type: "video-code",
      duration: "10 mins",

      description:
        "Build the complete CleanLoop agent — a self-healing data engineer that fixes messy CSVs autonomously. Implement the full Karpathy Loop cycle: hypothesize, modify, evaluate, commit/revert.",
      objectives: [
        "Build a complete self-improving agent using the CleanLoop project",
        "Implement the Karpathy Loop cycle: hypothesize, modify, evaluate, commit/revert",
        "Write binary assertions for data quality validation",
        "Run an autonomous improvement session and interpret the results",
      ],

      infoBoxes: [
        {
          title: "Core Hands-On Lesson",
          content:
            "This is the central build lesson of the course. You'll create the full self-improving agent in VS Code. Make sure your environment from Lesson 05 is ready.",
        },
      ],

      diagrams: [
        {
          chart:
            "sequenceDiagram\n    participant L as loop.py\n    participant LLM as GPT-4o\n    participant G as clean_data.py\n    participant R as prepare.py\n    participant Git as Git\n\n    L->>LLM: Send current code + failed assertions\n    LLM-->>L: Hypothesis + code fix\n    L->>G: Write new clean_data.py\n    L->>R: Run evaluation\n    R-->>L: pass/fail results\n    alt All pass\n        L->>Git: git commit\n    else Any fail\n        L->>Git: git reset\n    end\n    L->>L: Next iteration",
          caption:
            "The CleanLoop cycle — orchestrator sends code to LLM, applies fix, evaluates, commits or reverts.",
          alt: "Sequence diagram showing loop.py orchestrating between LLM, clean_data.py, prepare.py, and Git",
        },
      ],

      codePreview: {
        title: "CleanLoop — Full Build",
        description:
          "The three files that make up the complete self-improving agent.",
        segments: [
          {
            code: '"""prepare.py — The Referee."""\n\nimport json\nimport pandas as pd\nfrom pathlib import Path\n\n\ndef create_messy_data(output_dir: Path) -> None:\n    """Generate CSV files with realistic data quality issues."""\n    jan = pd.DataFrame({\n        "date": ["2026-01-15", "2026-01-22", "2026-01-29"],\n        "product": ["Widget A", "Widget B", "Widget C"],\n        "price": ["$10.50", "USD 22.00", "15.75"],\n        "quantity": [100, 200, 150],\n    })\n    jan.to_csv(output_dir / "sales_jan.csv", index=False)\n\n    feb_data = "15/02/2026,Widget A,12.00,120\\n22/02/2026,Widget B,25.50,80\\n"\n    (output_dir / "sales_feb.csv").write_text(feb_data)\n\n\ndef evaluate(master_output: Path) -> dict:\n    """Run binary assertions against the master output."""\n    results = {"passed": [], "failed": []}\n    try:\n        df = pd.read_csv(master_output)\n    except Exception as e:\n        results["failed"].append(f"Cannot read output: {e}")\n        return results\n\n    if df["price"].dtype in ("float64", "float32"):\n        results["passed"].append("price_is_float")\n    else:\n        results["failed"].append(f"price_is_float: got {df[\'price\'].dtype}")\n\n    try:\n        pd.to_datetime(df["date"])\n        results["passed"].append("date_is_parseable")\n    except Exception:\n        results["failed"].append("date_is_parseable")\n\n    for col in ["date", "product", "price", "quantity"]:\n        if col in df.columns and df[col].isna().sum() == 0:\n            results["passed"].append(f"no_nan_{col}")\n        else:\n            results["failed"].append(f"no_nan_{col}")\n\n    return results',
            language: "python",
            filename: "prepare.py",
            explanation:
              "The referee — creates messy test CSVs and runs binary assertions. The agent can never edit this file.",
          },
          {
            code: '"""clean_data.py — The Genome. Starting point the agent will rewrite."""\n\nimport pandas as pd\nfrom pathlib import Path\n\n\ndef clean(input_dir: Path, output_path: Path) -> None:\n    """Clean CSV files and produce a master output."""\n    frames = []\n    for csv_file in sorted(input_dir.glob("*.csv")):\n        df = pd.read_csv(csv_file)\n        frames.append(df)\n    master = pd.concat(frames, ignore_index=True)\n    master.to_csv(output_path, index=False)',
            language: "python",
            filename: "clean_data.py",
            explanation:
              "The genome — starting version just concatenates CSVs. The agent will rewrite this to handle messy data.",
          },
          {
            code: '"""loop.py — The Orchestrator. Runs the Karpathy Loop."""\n\nimport json\nimport os\nfrom pathlib import Path\nfrom dotenv import load_dotenv\nfrom git import Repo\n\nload_dotenv()\n\nPROJECT_DIR = Path(".")\nINPUT_DIR = PROJECT_DIR / "input_folder"\nOUTPUT_PATH = PROJECT_DIR / "master_output.csv"\nGENOME_PATH = PROJECT_DIR / "clean_data.py"\nMAX_ITERATIONS = 5\n\n\ndef call_llm(prompt: str) -> str:\n    """Call the LLM with the given prompt."""\n    from azure.ai.projects import AIProjectClient\n    client = AIProjectClient(\n        endpoint=os.getenv("AZURE_AI_FOUNDRY_ENDPOINT"),\n        credential=os.getenv("AZURE_AI_FOUNDRY_KEY"),\n    )\n    response = client.inference.get_chat_completions(\n        model=os.getenv("MODEL_NAME", "gpt-4o"),\n        messages=[{"role": "user", "content": prompt}],\n    )\n    return response.choices[0].message.content\n\n\ndef run_loop() -> None:\n    """Execute the self-improving loop."""\n    from prepare import create_messy_data, evaluate\n    from importlib import reload\n\n    repo = Repo(PROJECT_DIR)\n    create_messy_data(INPUT_DIR)\n    eval_history: list[dict] = []\n\n    for i in range(MAX_ITERATIONS):\n        print(f"\\n--- Iteration {i + 1} ---")\n\n        current_code = GENOME_PATH.read_text()\n        agenda = (PROJECT_DIR / "program.md").read_text()\n\n        prompt = f"""You are a data engineer agent.\n\nAgenda:\\n{agenda}\n\nCurrent clean_data.py:\\n```python\\n{current_code}\\n```\n\nPrevious failures: {json.dumps(eval_history)}\n\nRewrite clean_data.py to fix the failing assertions.\nReturn ONLY the Python code, no explanation."""\n        new_code = call_llm(prompt)\n\n        GENOME_PATH.write_text(new_code)\n\n        import clean_data\n        reload(clean_data)\n        clean_data.clean(INPUT_DIR, OUTPUT_PATH)\n        results = evaluate(OUTPUT_PATH)\n\n        if len(results["failed"]) == 0:\n            repo.index.add([str(GENOME_PATH)])\n            repo.index.commit(f"iter-{i+1}: all assertions pass")\n            print(f"✅ Committed — all {len(results[\'passed\'])} assertions pass")\n        else:\n            repo.git.checkout("--", str(GENOME_PATH))\n            print(f"❌ Reverted — {len(results[\'failed\'])} failures")\n\n        eval_history.append(results)\n\n\nif __name__ == "__main__":\n    run_loop()',
            language: "python",
            filename: "loop.py",
            explanation:
              "The orchestrator — reads code, asks LLM for a fix, writes the fix, evaluates, then commits or reverts. The full Karpathy Loop.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Build CleanLoop End-to-End",
          steps: [
            {
              title: "Initialize Git in the project",
              code: 'cd cleanloop\ngit init\ngit add .\ngit commit -m "initial: arena scaffold from lesson 03"',
              codeLanguage: "bash",
              description:
                "The loop uses Git for commit/revert. Initialize the repo with the arena files.",
            },
            {
              title: "Complete prepare.py with messy data generator",
              description:
                "Add the create_messy_data function that generates CSVs with price format issues, European dates, and missing headers.",
            },
            {
              title: "Write the initial clean_data.py",
              description:
                "Start with a naive implementation — just concatenate CSVs. This will fail most assertions, giving the agent something to fix.",
            },
            {
              title: "Build loop.py — the orchestrator",
              description:
                "Wire up the LLM call, the evaluate step, and the Git commit/revert logic. Start with MAX_ITERATIONS=5.",
            },
            {
              title: "Run the loop",
              code: "python loop.py",
              codeLanguage: "bash",
              description:
                "Watch the agent iterate. Each round: read code → hypothesize → modify → evaluate → commit or revert.",
            },
            {
              title: "Inspect the Git log",
              code: "git log --oneline",
              codeLanguage: "bash",
              description:
                "See which iterations were committed. Each commit message shows the iteration number and pass count.",
            },
          ],
        },
      ],

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "Time to build. You've seen the theory — the three-file pattern, binary assertions, the Karpathy Loop. Now you're going to write every line of it in VS Code.\n\nThe project is CleanLoop — a self-healing data engineer. It maintains a Master Sales Report from a folder of messy CSVs. When new, broken formats appear, the agent rewrites its own cleaning code without human help.",
        },
        {
          time: 22,
          speaker: "Instructor",
          text: "This isn't a toy example. Data pipeline maintenance is one of the most time-consuming tasks in production engineering. The same pattern powers the Shopify optimizations from Lesson 4.\n\nFirst — initialize Git. The loop uses commit and revert as its selection mechanism. No Git, no loop.",
        },
        {
          time: 40,
          speaker: "Instructor",
          text: 'Let\'s complete prepare.py. The create_messy_data function generates CSVs with real-world issues — January has prices as strings with dollar signs and "USD" prefixes. February uses European date formats and has no column headers.\n\nThe evaluate function runs five binary assertions — price_is_float, date_is_parseable, and three no_nan checks. Each one is pass or fail.',
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "Now clean_data.py. Start naive — just concatenate the CSVs. This will fail most assertions immediately. That's the point. The agent needs failures to work from.\n\nThe magic is in loop.py — the orchestrator.",
        },
        {
          time: 85,
          speaker: "Instructor",
          text: "Here's how it works. For each iteration — step one, read the current clean_data.py and program.md. Step two, send them to GPT-4o along with the previous failures. Ask for a rewritten clean_data.py.\n\nStep three, write the LLM's response to disk. Step four, reload and run it, then call evaluate. Step five — if all assertions pass, git commit. If any fail, git checkout to revert.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "Let's run it. python loop.py.\n\nWatch the output. Iteration 1 — probably fails. The LLM's first attempt might miss the European date format. Iteration 2 — it reads the failure message, tries again. By iteration 3 or 4, you should see all assertions passing.\n\nCheck the Git log. Each commit is a genuine improvement that survived the evaluation.",
        },
        {
          time: 145,
          speaker: "Instructor",
          text: "That's a working self-improving agent. You built it in under 100 lines of orchestration code.\n\nBut right now you're staring at terminal output. In the next lesson, we'll build a Streamlit dashboard — so you can see iterations, pass/fail rates, and agent decisions in real-time instead of scrolling through logs.",
        },
      ],

      qa: [
        {
          question: "What if the LLM returns invalid Python?",
          answer:
            "The evaluate step will fail with a SyntaxError or ImportError. The loop catches this, records the failure, and reverts. The next iteration gets that error message as context, which helps the LLM fix the syntax.",
        },
        {
          question: "Why only 5 iterations?",
          answer:
            "Five is enough to demonstrate the pattern. In production you'd run more — AutoResearch ran 700. You can increase MAX_ITERATIONS once you've verified the loop works. The dashboard (Lesson 07) makes longer runs easier to monitor.",
        },
        {
          question: "Can the agent edit prepare.py?",
          answer:
            "Never. The loop only writes to clean_data.py (the genome). prepare.py is imported and called but never modified. This is the core safety property of the arena architecture.",
        },
      ],

      tags: [
        "CleanLoop",
        "hands-on",
        "Karpathy Loop",
        "data engineer",
        "Python",
      ],
    },

    // ── Lesson 07 ────────────────────────────────────────────────────────
    {
      slug: "loop-dashboard",
      title: "Loop Dashboard",
      type: "video-code",
      duration: "8 mins",

      description:
        "Build a Streamlit dashboard that visualizes your self-improving loop in real-time — iteration chart, assertion heatmap, decision log, and Git timeline. No more scrolling through terminal output.",
      objectives: [
        "Build a Streamlit dashboard with four panels for loop observability",
        "Read eval.json and Git log to populate real-time visualizations",
        "Run the dashboard alongside loop.py in a VS Code split terminal",
        "Interpret the dashboard to identify which assertions are hardest to fix",
      ],

      infoBoxes: [
        {
          title: "Streamlit Required",
          content:
            "Install Streamlit if you haven't already: <code>pip install streamlit</code>. The dashboard uses pandas and the built-in Streamlit charting — no extra dependencies needed.",
        },
      ],

      noteBoxes: [
        {
          title: "VS Code Split-Terminal Workflow",
          content:
            "Open two terminals in VS Code side-by-side. Left terminal: <code>python loop.py</code>. Right terminal: <code>streamlit run dashboard.py</code>. The dashboard auto-refreshes every 2 seconds as new eval results appear.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph LR\n    subgraph Loop ["loop.py"]\n        L1["Iterate"]\n        L2["Write eval.json"]\n        L3["Git commit/revert"]\n        L1 --> L2 --> L3 --> L1\n    end\n\n    subgraph Dashboard ["dashboard.py"]\n        D1["📈 Iteration Chart"]\n        D2["🟩 Assertion Heatmap"]\n        D3["📋 Decision Log"]\n        D4["🔀 Git Timeline"]\n    end\n\n    L2 -.->|"reads eval.json"| D1\n    L2 -.->|"reads eval.json"| D2\n    L2 -.->|"reads eval.json"| D3\n    L3 -.->|"reads git log"| D4',
          caption:
            "The dashboard reads eval.json and Git history — it never modifies loop state.",
          alt: "Architecture showing loop.py writing data that dashboard.py reads via eval.json and git log",
        },
      ],

      poll: {
        question:
          "Which dashboard panel would be most useful for debugging a stuck loop?",
        options: [
          { id: "chart", text: "Iteration chart (pass count over time)" },
          { id: "heatmap", text: "Assertion heatmap (which checks fail)" },
          { id: "log", text: "Decision log (hypothesis + result)" },
          { id: "git", text: "Git timeline (commits vs. reverts)" },
        ],
        simulatedVotes: { chart: 15, heatmap: 42, log: 28, git: 15 },
      },

      codePreview: {
        title: "CleanLoop Dashboard",
        description:
          "A single-file Streamlit app with four panels for real-time loop observability.",
        segments: [
          {
            code: '"""dashboard.py — Real-time observability for self-improving loops."""\n\nimport json\nimport time\nfrom pathlib import Path\n\nimport pandas as pd\nimport streamlit as st\nfrom git import Repo\n\nEVAL_PATH = Path("eval.json")\nPROJECT_DIR = Path(".")\nREFRESH_SECS = 2\n\nst.set_page_config(page_title="CleanLoop Dashboard", layout="wide")\nst.title("🔁 CleanLoop Dashboard")\n\n\ndef load_eval_history() -> list[dict]:\n    """Load all eval results from eval.json."""\n    if not EVAL_PATH.exists():\n        return []\n    return json.loads(EVAL_PATH.read_text())\n\n\ndef load_git_log(max_entries: int = 20) -> list[dict]:\n    """Load recent Git commits."""\n    try:\n        repo = Repo(PROJECT_DIR)\n        log = []\n        for commit in repo.iter_commits(max_count=max_entries):\n            log.append({\n                "hash": commit.hexsha[:7],\n                "message": commit.message.strip(),\n                "time": commit.committed_datetime.isoformat(),\n            })\n        return log\n    except Exception:\n        return []\n\n\n# --- Panel 1: Iteration Chart ---\nst.subheader("📈 Assertions Passed per Iteration")\nhistory = load_eval_history()\nif history:\n    chart_data = pd.DataFrame([\n        {"iteration": i + 1, "passed": len(h["passed"]), "failed": len(h["failed"])}\n        for i, h in enumerate(history)\n    ])\n    st.line_chart(chart_data.set_index("iteration"))\nelse:\n    st.info("Waiting for first iteration...")\n\n# --- Panel 2: Assertion Heatmap ---\nst.subheader("🟩 Assertion Heatmap")\nif history:\n    all_assertions = set()\n    for h in history:\n        all_assertions.update(h["passed"])\n        all_assertions.update(h["failed"])\n    heatmap_data = []\n    for i, h in enumerate(history):\n        row = {"iteration": i + 1}\n        for a in sorted(all_assertions):\n            row[a] = "✅" if a in h["passed"] else "❌"\n        heatmap_data.append(row)\n    st.dataframe(\n        pd.DataFrame(heatmap_data).set_index("iteration"),\n        use_container_width=True,\n    )\nelse:\n    st.info("No assertion data yet.")\n\n# --- Panel 3: Decision Log ---\nst.subheader("📋 Decision Log")\nif history:\n    for i, h in enumerate(history):\n        label = "✅ Committed" if not h["failed"] else "❌ Reverted"\n        with st.expander(f"Iteration {i + 1} — {label}"):\n            if h["passed"]:\n                st.success(f"Passed: {\', \'.join(h[\'passed\'])}")\n            if h["failed"]:\n                st.error(f"Failed: {\', \'.join(h[\'failed\'])}")\n\n# --- Panel 4: Git Timeline ---\nst.subheader("🔀 Git Timeline")\ngit_log = load_git_log()\nif git_log:\n    st.dataframe(pd.DataFrame(git_log), use_container_width=True)\nelse:\n    st.info("No Git history yet.")\n\n# --- Auto-refresh ---\ntime.sleep(REFRESH_SECS)\nst.rerun()',
            language: "python",
            filename: "dashboard.py",
            explanation:
              "Four panels: iteration pass-count chart, assertion heatmap, expandable decision log, and Git timeline. Auto-refreshes every 2 seconds.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Build and Run the Dashboard",
          steps: [
            {
              title: "Update loop.py to write eval.json",
              code: 'import json\neval_history.append(results)\nPath("eval.json").write_text(json.dumps(eval_history, indent=2))',
              codeLanguage: "python",
              description:
                "The dashboard reads eval.json. Update loop.py to write results after each iteration.",
            },
            {
              title: "Create dashboard.py",
              description:
                "Copy the dashboard code from the CodePreview above. Place it in the same directory as loop.py.",
            },
            {
              title: "Open VS Code split terminals",
              code: "# Terminal 1 (left):\npython loop.py\n\n# Terminal 2 (right):\nstreamlit run dashboard.py",
              codeLanguage: "bash",
              description:
                "Use Ctrl+\\ in VS Code to split the terminal. Run the loop on the left, dashboard on the right.",
            },
            {
              title: "Watch the iteration chart update",
              description:
                "As each iteration completes, the chart updates. A rising line means the agent is making progress.",
            },
            {
              title: "Inspect the assertion heatmap",
              description:
                "Identify which assertions are hardest to fix. Persistent red cells indicate the agent struggles with specific data quality issues.",
            },
            {
              title: "Review the decision log",
              description:
                "Expand each iteration to see exactly which assertions passed and which failed. This is your audit trail.",
            },
          ],
        },
      ],

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In the last lesson you built a working self-improving loop. But right now, all you see is terminal output scrolling past. You don't know which assertions are hardest to fix, whether the agent is making progress, or what decisions it's making.\n\nLet's fix that. We're building a real-time dashboard with Streamlit.",
        },
        {
          time: 18,
          speaker: "Instructor",
          text: "The architecture is simple. loop.py writes eval.json after each iteration — that's the data contract. dashboard.py reads eval.json and the Git log. It never modifies loop state.\n\nThis means you can start and stop the dashboard without affecting the loop. Pure observer pattern.",
        },
        {
          time: 36,
          speaker: "Instructor",
          text: "Four panels. First — the iteration chart. A line graph showing assertions passed per iteration. A rising line means the agent is improving. A flat line means it's stuck.\n\nSecond — the assertion heatmap. A grid where each row is an iteration and each column is an assertion. Green for pass, red for fail. You can immediately spot which checks are hardest.",
        },
        {
          time: 58,
          speaker: "Instructor",
          text: "Third — the decision log. An expandable list showing exactly what passed and failed in each iteration. This is your audit trail.\n\nFourth — the Git timeline. Every commit the loop made, with hash and message. You can trace each accepted change back to its iteration.",
        },
        {
          time: 76,
          speaker: "Instructor",
          text: "Let's build it. First, update loop.py to write eval.json after each iteration. Just dump the eval_history list to JSON. That's the only change to the loop.\n\nNow create dashboard.py — about 80 lines of Streamlit. The auto-refresh at the bottom re-runs the script every 2 seconds.",
        },
        {
          time: 96,
          speaker: "Instructor",
          text: "Open VS Code. Split your terminal — Ctrl+backslash on Windows, Cmd+backslash on Mac. Left terminal runs loop.py. Right terminal runs streamlit run dashboard.py.\n\nNow run the loop. Watch the dashboard update in real-time. The iteration chart climbs. The heatmap fills in. You can see exactly which assertions flip from red to green.",
        },
        {
          time: 120,
          speaker: "Instructor",
          text: "This is the real workflow. You don't stare at terminal output — you watch a dashboard. When the agent gets stuck, you look at the heatmap to see which assertion is blocking progress. When it succeeds, you check the Git timeline to see the commit.\n\nIn the next module, we'll go deeper — metacognition, auto-curricula, and test-time self-improvement.",
        },
      ],

      qa: [
        {
          question: "Can the dashboard affect the loop's behavior?",
          answer:
            "No. The dashboard is read-only — it reads eval.json and Git log but never writes to them. You can restart the dashboard mid-loop without any impact.",
        },
        {
          question: "Why not use a Jupyter notebook instead?",
          answer:
            "Streamlit auto-refreshes and runs as a standalone app alongside the loop. A notebook would require manual re-execution and can't easily show real-time updates from an external process.",
        },
        {
          question: "How do I extend the dashboard for longer runs?",
          answer:
            "Add pagination to the decision log (show last 20 iterations), switch the iteration chart to a rolling window, and add a summary stats panel at the top. The architecture scales — just read more from eval.json.",
        },
      ],

      tags: [
        "Streamlit",
        "dashboard",
        "observability",
        "VS Code",
        "data visualization",
      ],
    },

    // ── MODULE 3: ADVANCED ───────────────────────────────────────────────

    // ── Lesson 08 ────────────────────────────────────────────────────────
    {
      slug: "metacognition-dgm-hyperagents",
      title: "Metacognition, DGM & HyperAgents",
      type: "video",
      duration: "6 mins",

      description:
        "How agents improve the improver. Learn Darwin Gödel Machine, HyperAgent meta-loops, and metacognitive patterns that let agents rewrite their own strategy — not just their output.",
      objectives: [
        "Explain how DGM uses the LLM to rewrite its own loss function and architecture",
        "Distinguish output improvement from strategy improvement (metacognition)",
        "Describe the HyperAgent meta-loop and when it helps",
        "Identify which part of CleanLoop you'd add metacognition to",
      ],

      noteBoxes: [
        {
          title: "Reference Paper",
          content:
            "The Darwin Gödel Machine was introduced by Clune et al. (2025). The full paper details the open-ended search across models, loss functions, and training pipelines.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph TD\n    subgraph DGM ["Darwin Gödel Machine"]\n        D1["Generate code for new model + loss"]\n        D2["Train on dynamic dataset"]\n        D3["Evaluate against archive"]\n        D4{"Better than archive?"}\n        D5["Add to archive"]\n        D6["Discard"]\n\n        D1 --> D2 --> D3 --> D4\n        D4 -->|Yes| D5 --> D1\n        D4 -->|No| D6 --> D1\n    end',
          caption:
            "DGM generates new model architectures and loss functions, trains them, and keeps only improvements.",
          alt: "Flowchart of Darwin Gödel Machine cycle: generate, train, evaluate, archive or discard",
        },
        {
          chart:
            'graph LR\n    subgraph Inner ["Inner Loop"]\n        I1["Agent edits code"]\n        I2["Evaluate"]\n        I3["Commit/Revert"]\n        I1 --> I2 --> I3 --> I1\n    end\n\n    subgraph Meta ["Meta Loop (HyperAgent)"]\n        M1["Review inner loop results"]\n        M2["Rewrite strategy / prompt"]\n    end\n\n    I3 -.->|"Results"| M1\n    M2 -.->|"New strategy"| I1',
          caption:
            "The HyperAgent watches the inner loop and rewrites its strategy when progress stalls.",
          alt: "Two nested loops — inner loop edits code, meta loop rewrites the inner loop's strategy",
        },
      ],

      poll: {
        question:
          "If a self-improving agent gets stuck, what should it reflect on first?",
        options: [
          { id: "prompt", text: "The system prompt / instructions" },
          { id: "eval", text: "Whether the eval metric is correct" },
          { id: "scope", text: "Whether the search space is too narrow" },
          { id: "data", text: "Whether it needs different training data" },
        ],
        simulatedVotes: { prompt: 35, eval: 20, scope: 30, data: 15 },
      },

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "So far, your agent improves its output — it rewrites clean_data.py to pass more assertions. But what if the agent could improve the improver?\n\nThat's metacognition. Instead of just editing code, the agent reflects on its own strategy and rewrites that too.",
        },
        {
          time: 16,
          speaker: "Instructor",
          text: "The most ambitious version of this is the Darwin Gödel Machine — DGM. It doesn't just tune hyperparameters. It uses an LLM to generate entirely new model architectures, new loss functions, and new training pipelines.\n\nThen it trains them, evaluates against an archive of previous winners, and keeps only the improvements. Open-ended search — no fixed architecture.",
        },
        {
          time: 38,
          speaker: "Instructor",
          text: "DGM is research-grade. For production, there's a simpler pattern — the HyperAgent.\n\nYou already have an inner loop — the Karpathy Loop. A HyperAgent adds a meta-loop around it. After every N iterations, the meta-loop reviews the results and asks: is the inner loop making progress? If not, rewrite the strategy.",
        },
        {
          time: 56,
          speaker: "Instructor",
          text: "What can the meta-loop rewrite? The system prompt — maybe the instructions are too vague. The search strategy — maybe the agent is making changes that are too small. The assertion weights — maybe the agent should focus on the hardest failures first.\n\nThink of it as a coach watching game film. The player runs the plays, the coach adjusts the playbook.",
        },
        {
          time: 78,
          speaker: "Instructor",
          text: 'In CleanLoop terms, a HyperAgent would read the eval history from eval.json. If the same assertion fails three times in a row, the meta-loop rewrites program.md to say "focus specifically on date parsing" — giving the inner loop a more targeted agenda.',
        },
        {
          time: 95,
          speaker: "Instructor",
          text: "Three levels of self-improvement. Level one — the agent edits output. That's what CleanLoop does now.\n\nLevel two — the agent edits its own prompts and strategy. That's the HyperAgent pattern. Level three — the agent edits its own architecture and training. That's DGM.\n\nMost production systems need level one. Some benefit from level two. Level three is still research.",
        },
      ],

      qa: [
        {
          question: "Is DGM practical for production use?",
          answer:
            "Not yet. DGM requires training multiple models per iteration, which is compute-intensive. The HyperAgent pattern gives you most of the benefit — strategy improvement — without the training cost.",
        },
        {
          question: "How do I add a HyperAgent to CleanLoop?",
          answer:
            "After every 3-5 iterations, read eval.json, identify repeated failures, and use an LLM call to rewrite program.md with a more targeted agenda. That's a ~20-line addition to loop.py.",
        },
        {
          question: "Can the meta-loop make things worse?",
          answer:
            "Yes. A bad strategy rewrite can derail the inner loop. The safety net is the same — Git revert. If the inner loop stops improving after a meta-change, revert program.md too.",
        },
      ],

      tags: [
        "DGM",
        "metacognition",
        "HyperAgent",
        "Darwin Gödel Machine",
        "self-rewriting",
      ],
    },

    // ── Lesson 09 ────────────────────────────────────────────────────────
    {
      slug: "auto-curricula",
      title: "Automatic Curricula",
      type: "video-code",
      duration: "7 mins",

      description:
        "Hand-crafting test cases doesn't scale. Build a Challenger agent that generates progressively harder messy-data problems, forcing the Solver (CleanLoop) to keep improving beyond fixed assertions.",
      objectives: [
        "Implement a Challenger agent that generates new messy-data CSV files",
        "Integrate the Challenger into the Karpathy Loop as a curriculum generator",
        "Understand the Solver-Challenger co-evolution dynamic",
        "Use the dashboard to observe increasing challenge difficulty",
      ],

      infoBoxes: [
        {
          title: "Builds on Lessons 06-07",
          content:
            "This lesson adds a Challenger agent to the CleanLoop project from Lesson 06. Make sure loop.py and dashboard.py are working before starting.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph TD\n    subgraph Challenger ["Challenger Agent"]\n        C1["Review Solver\'s current abilities"]\n        C2["Generate harder CSV + assertions"]\n    end\n\n    subgraph Solver ["Solver (CleanLoop)"]\n        S1["Read new challenge"]\n        S2["Iterate (Karpathy Loop)"]\n        S3["Pass/Fail"]\n    end\n\n    C2 -->|"New messy CSV"| S1\n    S1 --> S2 --> S3\n    S3 -->|"Results"| C1\n    C1 --> C2',
          caption:
            "The Challenger reviews the Solver's results and generates progressively harder challenges.",
          alt: "Two-agent loop — Challenger generates challenges, Solver attempts them, results feed back to Challenger",
        },
      ],

      poll: {
        question:
          "What's the best signal for the Challenger to decide the next challenge?",
        options: [
          { id: "fail", text: "Which assertions failed most recently" },
          { id: "easy", text: "Which assertions always pass (too easy)" },
          { id: "time", text: "How many iterations the Solver needed" },
          { id: "combo", text: "Combine multiple data issues in one CSV" },
        ],
        simulatedVotes: { fail: 18, easy: 28, time: 14, combo: 40 },
      },

      codePreview: {
        title: "Challenger Agent",
        description:
          "Generates progressively harder messy-data challenges for the Solver.",
        segments: [
          {
            code: '"""challenger.py — Generates progressively harder data-quality problems."""\n\nimport json\nimport os\nfrom pathlib import Path\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\nCHALLENGE_DIR = Path("challenges")\nCHALLENGE_DIR.mkdir(exist_ok=True)\n\n\ndef call_llm(prompt: str) -> str:\n    """Call the LLM with the given prompt."""\n    from azure.ai.projects import AIProjectClient\n    client = AIProjectClient(\n        endpoint=os.getenv("AZURE_AI_FOUNDRY_ENDPOINT"),\n        credential=os.getenv("AZURE_AI_FOUNDRY_KEY"),\n    )\n    response = client.inference.get_chat_completions(\n        model=os.getenv("MODEL_NAME", "gpt-4o"),\n        messages=[{"role": "user", "content": prompt}],\n    )\n    return response.choices[0].message.content\n\n\ndef generate_challenge(solver_history: list[dict], round_num: int) -> dict:\n    """Generate a new challenge based on the Solver\'s strengths and weaknesses."""\n    easy_assertions = set()\n    hard_assertions = set()\n    for result in solver_history[-3:]:\n        easy_assertions.update(result.get("passed", []))\n        hard_assertions.update(result.get("failed", []))\n\n    prompt = f"""You are a data-quality Challenger.\n\nThe Solver easily passes: {sorted(easy_assertions)}\nThe Solver struggles with: {sorted(hard_assertions)}\nRound: {round_num}\n\nGenerate a new messy CSV challenge that:\n1. Combines at least two data issues in one file\n2. Introduces one issue the Solver hasn\'t seen\n3. Includes new assertion definitions for the new issue\n\nReturn JSON with keys:\n- "csv_content": the raw CSV string\n- "new_assertions": list of {{"name": str, "check": str}} objects\n- "difficulty": "easy" | "medium" | "hard"\n"""\n\n    response = call_llm(prompt)\n    challenge = json.loads(response)\n\n    challenge_path = CHALLENGE_DIR / f"round_{round_num:02d}.json"\n    challenge_path.write_text(json.dumps(challenge, indent=2))\n\n    return challenge',
            language: "python",
            filename: "challenger.py",
            explanation:
              "Reads the Solver's history, identifies easy vs. hard assertions, and asks the LLM to generate a harder challenge. Saves each challenge as JSON.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Add the Challenger to CleanLoop",
          steps: [
            {
              title: "Create challenger.py",
              description:
                "Place the Challenger agent in the same directory as loop.py. It reads eval history and generates challenges to a challenges/ folder.",
            },
            {
              title: "Wire the Challenger into loop.py",
              code: 'from challenger import generate_challenge\n\n# After every 3 solver iterations:\nif (i + 1) % 3 == 0:\n    challenge = generate_challenge(eval_history, round_num=i // 3 + 1)\n    (INPUT_DIR / f"challenge_{i // 3 + 1}.csv").write_text(challenge["csv_content"])',
              codeLanguage: "python",
              description:
                "Every 3 iterations, the Challenger generates a new messy CSV and drops it into the input folder.",
            },
            {
              title: "Run the extended loop",
              code: "python loop.py",
              codeLanguage: "bash",
              description:
                "Watch the loop handle both original and generated challenges. The dashboard will show new assertions appearing.",
            },
            {
              title: "Inspect the challenge log",
              code: "ls challenges/",
              codeLanguage: "bash",
              description:
                "Each round_NN.json file shows what the Challenger generated — CSV content, new assertions, and difficulty rating.",
            },
          ],
        },
      ],

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "CleanLoop can fix messy CSVs. But right now, the test cases are fixed — you wrote them in prepare.py. What happens when the agent solves all of them? It stops improving.\n\nA fixed test suite is a ceiling. To break through it, you need an automatic curriculum.",
        },
        {
          time: 15,
          speaker: "Instructor",
          text: "The idea comes from competitive co-evolution. Two agents — a Solver and a Challenger. The Solver tries to pass assertions. The Challenger generates new, harder challenges based on what the Solver already handles well.\n\nThe Solver improves because the problems keep getting harder. The Challenger improves because the Solver keeps raising the bar.",
        },
        {
          time: 35,
          speaker: "Instructor",
          text: "Let's build it. challenger.py reads the Solver's eval history — specifically the last three rounds. It identifies easy assertions — the ones that always pass — and hard ones that keep failing.\n\nThen it asks the LLM: generate a new messy CSV that combines at least two data issues and introduces something the Solver hasn't seen.",
        },
        {
          time: 55,
          speaker: "Instructor",
          text: "The integration is lightweight. Every three Solver iterations, call generate_challenge. Write the new CSV to the input folder. Now the Solver faces a moving target — the assertions from prepare.py plus whatever the Challenger invented.\n\nEach challenge is saved as JSON so you can inspect it later.",
        },
        {
          time: 75,
          speaker: "Instructor",
          text: "Let's run it. Watch the dashboard — you'll see new assertions appear in the heatmap as the Challenger adds them. The iteration chart may dip when a new challenge arrives, then climb again as the Solver adapts.\n\nThis oscillation — solve, new challenge, struggle, adapt — is exactly how competitive co-evolution works.",
        },
        {
          time: 95,
          speaker: "Instructor",
          text: "When do you stop? Set a round limit — say 5 Challenger rounds. Or stop when the Solver handles the hardest difficulty level on the first attempt.\n\nThe Challenger pattern works for any domain. Code challenges, prompt robustness, API edge cases. Anywhere a fixed test suite becomes a ceiling, a Challenger breaks through it.",
        },
      ],

      qa: [
        {
          question: "Can the Challenger generate invalid challenges?",
          answer:
            "Yes — the LLM might produce a CSV that's impossible to clean, or an assertion that contradicts another. Add a validation step: if the Solver can't make any progress after 5 iterations on a challenge, discard it and generate a new one.",
        },
        {
          question: "Does the Challenger use the same LLM as the Solver?",
          answer:
            "It can, but doesn't have to. Using a different model or temperature for the Challenger adds diversity. In production, you might use a smaller model for the Challenger since it generates data, not code.",
        },
        {
          question: "How is this different from fuzzing?",
          answer:
            "Fuzzing is random. The Challenger is targeted — it reads what the Solver already handles and specifically generates problems in the gaps. It's adversarial curriculum design, not random mutation.",
        },
      ],

      tags: [
        "auto-curriculum",
        "Challenger",
        "Solver",
        "co-evolution",
        "adversarial",
      ],
    },

    // ── Lesson 10 ────────────────────────────────────────────────────────
    {
      slug: "test-time-self-improvement",
      title: "Test-Time Self-Improvement",
      type: "video-code",
      duration: "7 mins",

      description:
        "Instead of committing the first solution that works, generate multiple candidates and rank them. Build a reranker that picks the best fix from several LLM proposals.",
      objectives: [
        "Implement a generate-then-rank pattern with multiple LLM candidates",
        "Build a reranker that scores candidates by assertion pass count and code quality",
        "Integrate the reranker into the Karpathy Loop",
        "Compare single-shot vs. ranked results in the dashboard",
      ],

      noteBoxes: [
        {
          title: "Training-Time vs. Test-Time",
          content:
            "Training-time improvement changes model weights. Test-time improvement uses the same model but generates and ranks multiple outputs at inference. This lesson focuses on test-time — no fine-tuning needed.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph LR\n    P["Prompt"]\n    G1["Candidate 1"]\n    G2["Candidate 2"]\n    G3["Candidate 3"]\n\n    P --> G1\n    P --> G2\n    P --> G3\n\n    G1 --> R["Reranker"]\n    G2 --> R\n    G3 --> R\n\n    R -->|"Best"| E["Evaluate"]\n    E --> C{"Pass?"}\n    C -->|Yes| Commit["Git Commit"]\n    C -->|No| Revert["Git Revert"]',
          caption:
            "Generate multiple candidates, rank them, then evaluate only the best one.",
          alt: "Pipeline: prompt generates 3 candidates, reranker picks best, evaluate, commit or revert",
        },
      ],

      poll: {
        question:
          "Which signal would you weight highest when ranking code candidates?",
        options: [
          { id: "assertions", text: "Number of assertions passed" },
          { id: "brevity", text: "Code brevity (fewer lines)" },
          { id: "robustness", text: "Handles edge cases not in assertions" },
          { id: "readability", text: "Code readability and documentation" },
        ],
        simulatedVotes: {
          assertions: 45,
          brevity: 8,
          robustness: 32,
          readability: 15,
        },
      },

      codePreview: {
        title: "Reranker Module",
        description:
          "Generates multiple candidates and ranks them before committing.",
        segments: [
          {
            code: '"""reranker.py — Generate-then-rank for higher-quality fixes."""\n\nimport os\nfrom pathlib import Path\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\nN_CANDIDATES = 3\n\n\ndef call_llm(prompt: str) -> str:\n    """Call the LLM with the given prompt."""\n    from azure.ai.projects import AIProjectClient\n    client = AIProjectClient(\n        endpoint=os.getenv("AZURE_AI_FOUNDRY_ENDPOINT"),\n        credential=os.getenv("AZURE_AI_FOUNDRY_KEY"),\n    )\n    response = client.inference.get_chat_completions(\n        model=os.getenv("MODEL_NAME", "gpt-4o"),\n        messages=[{"role": "user", "content": prompt}],\n        temperature=0.8,\n    )\n    return response.choices[0].message.content\n\n\ndef generate_candidates(prompt: str, n: int = N_CANDIDATES) -> list[str]:\n    """Generate N candidate solutions from the same prompt."""\n    return [call_llm(prompt) for _ in range(n)]\n\n\ndef score_candidate(\n    code: str,\n    input_dir: Path,\n    output_path: Path,\n    evaluate_fn,\n) -> dict:\n    """Run a candidate and score it."""\n    genome_path = Path("clean_data.py")\n    original = genome_path.read_text()\n\n    try:\n        genome_path.write_text(code)\n        import clean_data\n        from importlib import reload\n        reload(clean_data)\n        clean_data.clean(input_dir, output_path)\n        results = evaluate_fn(output_path)\n        score = len(results["passed"]) - len(results["failed"])\n    except Exception as e:\n        results = {"passed": [], "failed": [str(e)]}\n        score = -100\n    finally:\n        genome_path.write_text(original)\n\n    return {"code": code, "score": score, "results": results}\n\n\ndef rank_and_select(\n    candidates: list[str],\n    input_dir: Path,\n    output_path: Path,\n    evaluate_fn,\n) -> dict:\n    """Score all candidates and return the best one."""\n    scored = [\n        score_candidate(code, input_dir, output_path, evaluate_fn)\n        for code in candidates\n    ]\n    scored.sort(key=lambda x: x["score"], reverse=True)\n    return scored[0]',
            language: "python",
            filename: "reranker.py",
            explanation:
              "Generates N candidates at temperature 0.8, scores each by running against assertions, and returns the highest scorer.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Add Reranking to CleanLoop",
          steps: [
            {
              title: "Create reranker.py",
              description:
                "Place in the CleanLoop project directory. It exports generate_candidates and rank_and_select.",
            },
            {
              title: "Update loop.py to use the reranker",
              code: 'from reranker import generate_candidates, rank_and_select\n\ncandidates = generate_candidates(prompt, n=3)\nbest = rank_and_select(candidates, INPUT_DIR, OUTPUT_PATH, evaluate)\nGENOME_PATH.write_text(best["code"])',
              codeLanguage: "python",
              description:
                "Instead of committing the first response, generate 3 candidates and pick the best one.",
            },
            {
              title: "Run and compare",
              code: "python loop.py",
              codeLanguage: "bash",
              description:
                "Watch the dashboard. With reranking, the iteration chart should climb faster — fewer wasted iterations.",
            },
            {
              title: "Experiment with N_CANDIDATES",
              description:
                "Try N=1 (baseline), N=3, and N=5. More candidates cost more API calls but converge faster.",
            },
          ],
        },
      ],

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "Right now, CleanLoop takes the first LLM response and commits or reverts. But what if that response is mediocre? You waste an iteration on a bad fix, revert, and try again.\n\nTest-time self-improvement flips this. Instead of one shot — generate multiple candidates and pick the best one before committing.",
        },
        {
          time: 18,
          speaker: "Instructor",
          text: "This is the generate-then-rank pattern — sometimes called Best-of-N. Send the same prompt three times at temperature 0.8. Each response will be different. Score all three against the assertions. Commit only the winner.\n\nThe cost is 3× the API calls per iteration. The benefit — fewer wasted iterations, faster convergence.",
        },
        {
          time: 36,
          speaker: "Instructor",
          text: "Let's build it. reranker.py has three functions. generate_candidates sends the prompt N times and collects responses. score_candidate writes each candidate to disk, runs it, and counts assertion passes. rank_and_select picks the highest scorer.\n\nCritical detail — after scoring each candidate, restore the original code. You don't want a failed candidate polluting the next test.",
        },
        {
          time: 58,
          speaker: "Instructor",
          text: "The integration into loop.py is a three-line change. Replace the single call_llm with generate_candidates. Replace the raw write with rank_and_select. Use the best candidate's code.\n\nThat's it. Same loop, better selection pressure.",
        },
        {
          time: 72,
          speaker: "Instructor",
          text: "Let's compare. Run the loop with N=1 — that's the baseline. Then N=3. Watch the dashboard. With reranking, the iteration chart climbs faster. Fewer reverts, more commits.\n\nThe trade-off is latency — 3 LLM calls per iteration instead of 1. For batch workloads running overnight, that's fine. For interactive sessions, you might stick with N=1.",
        },
        {
          time: 92,
          speaker: "Instructor",
          text: "This is test-time compute scaling in action. You're not fine-tuning the model. You're not changing the prompt. You're just spending more inference compute to get better results.\n\nResearch shows this scales reliably — more candidates, better outcomes — up to a point. Past N=8 or so, you hit diminishing returns.",
        },
      ],

      qa: [
        {
          question: "Why temperature 0.8 instead of 0?",
          answer:
            "Temperature 0 produces near-identical responses. You need diversity for reranking to help. 0.8 gives enough variation that candidates explore different approaches while staying coherent.",
        },
        {
          question: "Can I rank on something other than assertion count?",
          answer:
            "Absolutely. You could add code quality signals — line count, cyclomatic complexity, or even a second LLM call to rate readability. The scoring function is pluggable.",
        },
        {
          question: "Does this work with Foundry Local?",
          answer:
            "Yes. Foundry Local with Qwen2.5 Coder supports temperature sampling. The latency per candidate is higher locally, but you save on API costs.",
        },
      ],

      tags: [
        "test-time",
        "reranking",
        "Best-of-N",
        "code quality",
        "inference scaling",
      ],
    },

    // ── MODULE 4: PRODUCTION ─────────────────────────────────────────────

    // ── Lesson 11 ────────────────────────────────────────────────────────
    {
      slug: "reliability-and-safety",
      title: "Reliability & Safety",
      type: "video-code",
      duration: "8 mins",

      description:
        "Self-improving agents that modify code autonomously need guardrails. Build a subprocess sandbox and graduated autonomy system that lets the agent earn trust through demonstrated reliability.",
      objectives: [
        "Implement subprocess sandboxing for agent-generated code execution",
        "Build a graduated autonomy system with trust levels",
        "Add resource limits and timeout controls",
        "Integrate safety guardrails into the CleanLoop project",
      ],

      infoBoxes: [
        {
          title: "Production Safety",
          content:
            "This lesson adds the safety layer that makes self-improving agents production-ready. Without sandboxing and autonomy controls, autonomous code execution is a liability.",
        },
      ],

      noteBoxes: [
        {
          title: "Graduated Autonomy Levels",
          content:
            "Level 0 — every change needs approval. Level 1 — auto-commit if all assertions pass, human review for partial passes. Level 2 — full autonomy within resource limits. Most teams should start at Level 0 and promote to Level 1 after 50+ successful iterations.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph TD\n    A["Agent generates code"]\n    S["Sandbox (subprocess)"]\n    R{"Resource check"}\n    E{"All assertions pass?"}\n    T{"Trust level?"}\n\n    A --> S\n    S --> R\n    R -->|Over limits| Kill["Kill + Revert"]\n    R -->|Within limits| E\n    E -->|Fail| Revert["Git Revert"]\n    E -->|Pass| T\n    T -->|Level 0| Queue["Queue for Review"]\n    T -->|Level 1+| Commit["Auto Commit"]\n    Commit --> Promote["Trust++"]',
          caption:
            "Code runs in a sandboxed subprocess with resource limits. Commits are gated by trust level.",
          alt: "Flowchart: agent code → sandbox → resource check → assertion eval → trust gate → commit or review",
        },
      ],

      poll: {
        question:
          "Which guardrail is most important for a self-improving agent?",
        options: [
          { id: "sandbox", text: "Subprocess isolation (can't touch host)" },
          { id: "timeout", text: "Execution timeout (can't run forever)" },
          {
            id: "scope",
            text: "File scope limits (can only edit the genome)",
          },
          {
            id: "review",
            text: "Human review gate (approval before deploy)",
          },
        ],
        simulatedVotes: { sandbox: 30, timeout: 15, scope: 25, review: 30 },
      },

      codePreview: {
        title: "Safety Modules",
        description:
          "Subprocess sandbox and graduated autonomy for production deployment.",
        segments: [
          {
            code: '"""sandbox.py — Execute agent code in an isolated subprocess."""\n\nimport subprocess\nimport sys\nfrom pathlib import Path\n\nTIMEOUT_SECS = 30\nMAX_OUTPUT_BYTES = 1_000_000\n\n\ndef run_sandboxed(\n    script_path: Path,\n    args: list[str] | None = None,\n    timeout: int = TIMEOUT_SECS,\n) -> dict:\n    """Run a Python script in a subprocess with resource limits."""\n    cmd = [sys.executable, str(script_path)] + (args or [])\n\n    try:\n        result = subprocess.run(\n            cmd,\n            capture_output=True,\n            text=True,\n            timeout=timeout,\n            cwd=script_path.parent,\n        )\n        return {\n            "success": result.returncode == 0,\n            "stdout": result.stdout[:MAX_OUTPUT_BYTES],\n            "stderr": result.stderr[:MAX_OUTPUT_BYTES],\n            "returncode": result.returncode,\n        }\n    except subprocess.TimeoutExpired:\n        return {\n            "success": False,\n            "stdout": "",\n            "stderr": f"Timeout after {timeout}s",\n            "returncode": -1,\n        }\n    except Exception as e:\n        return {\n            "success": False,\n            "stdout": "",\n            "stderr": str(e),\n            "returncode": -1,\n        }',
            language: "python",
            filename: "sandbox.py",
            explanation:
              "Runs agent code in a separate subprocess with a timeout. Captures stdout/stderr and enforces output size limits.",
          },
          {
            code: '"""autonomy.py — Graduated autonomy for agent commits."""\n\nimport json\nfrom pathlib import Path\n\nTRUST_FILE = Path("trust.json")\nPROMOTION_THRESHOLD = 10\n\n\ndef load_trust() -> dict:\n    """Load current trust state."""\n    if TRUST_FILE.exists():\n        return json.loads(TRUST_FILE.read_text())\n    return {"level": 0, "consecutive_passes": 0, "total_commits": 0}\n\n\ndef save_trust(state: dict) -> None:\n    """Persist trust state."""\n    TRUST_FILE.write_text(json.dumps(state, indent=2))\n\n\ndef should_auto_commit(eval_results: dict) -> tuple[bool, str]:\n    """Decide whether to auto-commit based on trust level."""\n    state = load_trust()\n    all_pass = len(eval_results["failed"]) == 0\n\n    if state["level"] == 0:\n        return False, "Level 0: queued for human review"\n\n    if state["level"] >= 1 and all_pass:\n        return True, f"Level {state[\'level\']}: auto-commit (all pass)"\n\n    if state["level"] >= 1 and not all_pass:\n        return False, f"Level {state[\'level\']}: partial pass — needs review"\n\n    return False, "Unknown state"\n\n\ndef update_trust(eval_results: dict) -> dict:\n    """Update trust after an evaluation."""\n    state = load_trust()\n    all_pass = len(eval_results["failed"]) == 0\n\n    if all_pass:\n        state["consecutive_passes"] += 1\n        state["total_commits"] += 1\n    else:\n        state["consecutive_passes"] = 0\n\n    if state["consecutive_passes"] >= PROMOTION_THRESHOLD and state["level"] < 2:\n        state["level"] += 1\n        state["consecutive_passes"] = 0\n\n    save_trust(state)\n    return state',
            language: "python",
            filename: "autonomy.py",
            explanation:
              "Tracks trust state in trust.json. Level 0 = human review. Level 1 = auto-commit if all pass. Promotes after 10 consecutive passes.",
          },
        ],
      },

      stepGuides: [
        {
          title: "Add Safety Guardrails to CleanLoop",
          steps: [
            {
              title: "Create sandbox.py",
              description:
                "The subprocess wrapper that isolates agent code execution.",
            },
            {
              title: "Create autonomy.py",
              description:
                "The trust manager that gates commits. Start with trust level 0.",
            },
            {
              title: "Update loop.py to use the sandbox",
              code: 'from sandbox import run_sandboxed\n\nresult = run_sandboxed(Path("run_eval.py"), timeout=30)\nif not result["success"]:\n    print(f"Sandbox error: {result[\'stderr\']}")',
              codeLanguage: "python",
              description:
                "All agent-generated code runs through the sandbox. No more direct imports.",
            },
            {
              title: "Wire in graduated autonomy",
              code: 'from autonomy import should_auto_commit, update_trust\n\nauto, reason = should_auto_commit(results)\nif auto:\n    repo.index.add([str(GENOME_PATH)])\n    repo.index.commit(f"iter-{i+1}: {reason}")\nelse:\n    print(f"⏸️  {reason}")\n\nupdate_trust(results)',
              codeLanguage: "python",
              description:
                "Replace the simple commit logic with the trust-gated version.",
            },
            {
              title: "Run and observe trust progression",
              code: "python loop.py\ncat trust.json",
              codeLanguage: "bash",
              description:
                "Watch trust.json update. After 10 consecutive passes, the agent promotes from Level 0 to Level 1.",
            },
          ],
        },
      ],

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "You've built an agent that rewrites its own code, evaluates itself, and commits improvements. That's powerful. It's also dangerous.\n\nWhat if the agent generates code that reads your environment variables? Or writes to files outside the project? Or runs an infinite loop that eats all your CPU?\n\nYou need guardrails.",
        },
        {
          time: 18,
          speaker: "Instructor",
          text: "Two safety modules. First — sandbox.py. It runs the agent's code in a separate subprocess with a 30-second timeout and output size limits. If the code crashes, the subprocess dies. Your main process — and your loop — stays clean.\n\nThis is defense in depth. Even if the agent writes malicious code, it can't escape the subprocess.",
        },
        {
          time: 38,
          speaker: "Instructor",
          text: "Second — autonomy.py. Not every commit should be automatic. The graduated autonomy model has three levels.\n\nLevel 0 — every change queues for human review. You see the diff, approve or reject. Level 1 — auto-commit when all assertions pass, but human review for partial passes. Level 2 — full autonomy within resource limits.",
        },
        {
          time: 58,
          speaker: "Instructor",
          text: "Trust is earned, not assumed. The agent starts at Level 0. After 10 consecutive all-pass iterations, it promotes to Level 1. After 10 more, Level 2.\n\nIf it ever fails — consecutive passes reset to zero. Trust goes up slowly and comes down fast. That's the right incentive.",
        },
        {
          time: 75,
          speaker: "Instructor",
          text: "Let's integrate both into CleanLoop. Replace the direct import of clean_data with a sandboxed execution — subprocess.run with a timeout. Replace the simple commit logic with should_auto_commit, which checks the trust level.\n\nTwo files, maybe 20 lines of changes to loop.py.",
        },
        {
          time: 92,
          speaker: "Instructor",
          text: "Run the loop. Watch trust.json. The agent starts at Level 0 — every good fix queues for review. After 10 consecutive passes, it promotes. Now good fixes commit automatically.\n\nIn the dashboard, you'll see the transition — a burst of queued items, then automatic commits once trust is established.",
        },
        {
          time: 110,
          speaker: "Instructor",
          text: "For production, add more guardrails. File scope limits — the agent can only write to clean_data.py. Network isolation — the subprocess can't make external calls. Diff size limits — reject changes that rewrite more than 50 lines at once.\n\nThe sandbox and trust system give you the foundation. Layer additional controls based on your risk tolerance.",
        },
      ],

      qa: [
        {
          question: "Is subprocess isolation enough for real production?",
          answer:
            "It's a solid starting point for local development and CI. For production workloads, consider containerized execution (Docker) or cloud sandboxes. The subprocess pattern establishes the architecture — you swap the executor later.",
        },
        {
          question: "What happens at trust Level 2?",
          answer:
            "Full autonomy within resource limits. The agent commits without human review as long as all assertions pass and the subprocess stays within timeout and output bounds.",
        },
        {
          question: "Can trust be demoted?",
          answer:
            "In this implementation, consecutive_passes resets on any failure, which prevents promotion. You could add explicit demotion — if the agent fails 3 times in a row at Level 1, drop back to Level 0.",
        },
      ],

      tags: [
        "safety",
        "sandbox",
        "graduated autonomy",
        "guardrails",
        "production",
      ],
    },

    // ── Lesson 12 ────────────────────────────────────────────────────────
    {
      slug: "the-road-ahead",
      title: "The Road Ahead",
      type: "video",
      duration: "5 mins",

      description:
        "Where is self-improving AI heading? From the SEA taxonomy to open questions in safety and alignment, map the frontier and plan your next build.",
      objectives: [
        "Summarize the SEA taxonomy: intrinsic vs. extrinsic, individual vs. collective",
        "Identify the four horizons of self-improving systems",
        "Evaluate open research questions in safety and alignment",
        "Plan a personal project using the patterns from this course",
      ],

      noteBoxes: [
        {
          title: "SEA Taxonomy",
          content:
            "The Self-Evolving Agents taxonomy organizes improvement along two axes: source (intrinsic vs. extrinsic feedback) and scope (individual agent vs. collective). This gives four quadrants — each maps to different patterns from this course.",
        },
      ],

      diagrams: [
        {
          chart:
            'graph TD\n    subgraph Now ["Horizon 1 — Today"]\n        H1["Karpathy Loop<br/>Output-level iteration"]\n    end\n\n    subgraph Near ["Horizon 2 — Near-term"]\n        H2["HyperAgent<br/>Strategy-level iteration"]\n        H3["Auto-curricula<br/>Environment-level iteration"]\n    end\n\n    subgraph Mid ["Horizon 3 — Mid-term"]\n        H4["DGM<br/>Architecture-level iteration"]\n    end\n\n    subgraph Far ["Horizon 4 — Open Research"]\n        H5["Self-modifying objectives<br/>Alignment boundary"]\n    end\n\n    H1 --> H2\n    H1 --> H3\n    H2 --> H4\n    H3 --> H4\n    H4 --> H5',
          caption:
            "Four horizons — from output iteration (today) through architecture iteration (mid-term) to the alignment boundary.",
          alt: "Stacked timeline showing four horizons of self-improving systems",
        },
      ],

      poll: {
        question:
          "What will you build first with the patterns from this course?",
        options: [
          {
            id: "data",
            text: "Self-healing data pipeline (like CleanLoop)",
          },
          { id: "test", text: "Self-improving test suite generator" },
          { id: "prompt", text: "Autonomous prompt optimizer" },
          { id: "code", text: "Self-improving code reviewer" },
          { id: "other", text: "Something completely different" },
        ],
        simulatedVotes: { data: 22, test: 18, prompt: 30, code: 20, other: 10 },
      },

      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "You've built a self-improving agent from scratch. You can make it observe itself with a dashboard, generate its own curriculum, rank multiple solutions, and operate safely with graduated autonomy.\n\nLet's zoom out. Where is all this heading?",
        },
        {
          time: 14,
          speaker: "Instructor",
          text: "The SEA taxonomy — Self-Evolving Agents — organizes improvement along two axes. Source — does the agent improve from its own feedback, or external signals? Scope — does one agent improve, or a collective?\n\nCleanLoop is intrinsic, individual — the simplest quadrant. A Challenger-Solver pair is extrinsic, collective.",
        },
        {
          time: 32,
          speaker: "Instructor",
          text: "Four horizons. Horizon 1 — where we are today. The Karpathy Loop. Output-level iteration. The agent edits code or config, evaluates, commits or reverts.\n\nHorizon 2 — near-term. HyperAgents that edit their own strategy. Auto-curricula that generate training environments. We built both in this course.",
        },
        {
          time: 50,
          speaker: "Instructor",
          text: "Horizon 3 — mid-term. DGM-style systems that modify their own architecture and loss functions. The agent doesn't just use the model — it builds better models.\n\nHorizon 4 — open research. Systems that modify their own objectives. This is the alignment boundary — the point where self-improvement intersects with AI safety in ways we don't fully understand yet.",
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "The open questions are fascinating and urgent. Reward hacking — the agent finds a shortcut that satisfies the metric but not the intent. Drift monitoring — how do you detect when a self-improving system has drifted from its original purpose? And the big one — when should self-improvement be irreversible?\n\nOur Git commit/revert pattern is reversible by design. That's not an accident.",
        },
        {
          time: 88,
          speaker: "Instructor",
          text: "Here's your call to action. Pick a domain you care about — data quality, testing, prompt engineering, code review. Apply the three-criteria test from Lesson 4: something editable, a way to measure, a time-boxed test.\n\nStart with a five-iteration loop. Add the dashboard. Then layer on the advanced patterns as you need them.\n\nThe tools are yours. Go build something that improves itself.",
        },
      ],

      qa: [
        {
          question:
            "Should I worry about alignment for a CleanLoop-style system?",
          answer:
            "At the output-improvement level (Horizon 1), the risk is low — Git revert catches bad changes. Alignment concerns grow at Horizon 3+ when the agent modifies its own objectives. For production Karpathy Loops, focus on sandbox + trust instead.",
        },
        {
          question: "What's the best first project after this course?",
          answer:
            "Pick something close to your daily work where you already have a test suite or metric. Test coverage improvement, SQL query optimization, or CI pipeline tuning are all good starting points.",
        },
        {
          question: "Where can I learn more about the SEA taxonomy?",
          answer:
            "The Self-Evolving Agents survey paper is the canonical reference. It covers intrinsic/extrinsic feedback, individual/collective scope, and catalogs hundreds of systems across the taxonomy.",
        },
      ],

      tags: [
        "SEA taxonomy",
        "frontier",
        "alignment",
        "future",
        "course wrap-up",
      ],
    },

    // ── QUIZ ─────────────────────────────────────────────────────────────
    {
      slug: "self-improving-agents-quiz",
      title: "Course Quiz",
      type: "quiz",
      duration: "10 mins",

      description:
        "Test your understanding of self-improving agents — the Karpathy Loop, arena architecture, dashboard observability, auto-curricula, test-time improvement, and production safety.",
      objectives: [
        "Validate understanding of the Karpathy Loop and its components",
        "Test ability to apply the universal self-improvement recipe",
        "Assess knowledge of advanced patterns: curricula, reranking, safety",
      ],

      quizQuestions: [
        {
          id: "q1",
          question:
            "In the Karpathy Loop, what happens when the agent's code change fails one or more assertions?",
          options: [
            { id: "a", text: "The agent retries the same change" },
            { id: "b", text: "The change is reverted with git reset" },
            { id: "c", text: "The failing assertions are removed" },
            { id: "d", text: "The loop terminates immediately" },
          ],
          correctOptionId: "b",
          explanation:
            "Failed changes are reverted using Git. The loop continues with the failure context, allowing the LLM to propose a different fix.",
        },
        {
          id: "q2",
          question:
            "In the three-file arena pattern, which file is the agent NOT allowed to modify?",
          options: [
            { id: "a", text: "loop.py (the orchestrator)" },
            { id: "b", text: "clean_data.py (the genome)" },
            { id: "c", text: "prepare.py (the referee)" },
            { id: "d", text: "program.md (the agenda)" },
          ],
          correctOptionId: "c",
          explanation:
            "prepare.py is the referee — it defines the evaluation criteria. If the agent could edit it, it could weaken its own tests.",
        },
        {
          id: "q3",
          question:
            "What three criteria must be present to apply the universal self-improvement recipe?",
          options: [
            { id: "a", text: "An LLM, a GPU, and a dataset" },
            {
              id: "b",
              text: "Something editable, a way to measure, and a time-boxed test",
            },
            {
              id: "c",
              text: "A Python environment, Git, and a cloud endpoint",
            },
            {
              id: "d",
              text: "A training set, a validation set, and a test set",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The universal recipe requires: something you can edit, a way to measure, and a time-boxed test with results in minutes.",
        },
        {
          id: "q4",
          question:
            "What is the primary purpose of the Streamlit dashboard in the CleanLoop project?",
          options: [
            { id: "a", text: "To control the loop's execution speed" },
            { id: "b", text: "To modify assertions during the run" },
            {
              id: "c",
              text: "To provide read-only observability of loop progress",
            },
            { id: "d", text: "To generate new test data" },
          ],
          correctOptionId: "c",
          explanation:
            "The dashboard reads eval.json and Git log but never writes to them. It's a read-only observer.",
        },
        {
          id: "q5",
          question:
            "In the Challenger-Solver pattern, what does the Challenger generate?",
          options: [
            { id: "a", text: "Better code for the Solver to use" },
            {
              id: "b",
              text: "New messy data files and assertions that are harder than previous ones",
            },
            { id: "c", text: "More iterations for the loop to run" },
            {
              id: "d",
              text: "Documentation for the Solver's changes",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The Challenger reviews the Solver's abilities and generates progressively harder challenges to prevent plateauing.",
        },
        {
          id: "q6",
          question:
            "Why does the reranker use temperature 0.8 instead of 0 when generating candidates?",
          options: [
            { id: "a", text: "To reduce API costs" },
            {
              id: "b",
              text: "To generate diverse candidates for ranking",
            },
            {
              id: "c",
              text: "To match the training temperature of the model",
            },
            { id: "d", text: "To produce longer responses" },
          ],
          correctOptionId: "b",
          explanation:
            "Temperature 0 produces near-identical outputs. Reranking needs diversity — different approaches to the same problem.",
        },
        {
          id: "q7",
          question:
            "In the graduated autonomy model, what must happen for the agent to be promoted from Level 0 to Level 1?",
          options: [
            {
              id: "a",
              text: "A human manually upgrades the trust level",
            },
            {
              id: "b",
              text: "The agent achieves 10 consecutive all-pass iterations",
            },
            {
              id: "c",
              text: "The agent runs for more than 24 hours without errors",
            },
            {
              id: "d",
              text: "The agent generates code shorter than 50 lines",
            },
          ],
          correctOptionId: "b",
          explanation:
            "Trust is earned through demonstrated reliability. After 10 consecutive all-pass iterations, the agent promotes. Any failure resets the count.",
        },
        {
          id: "q8",
          question:
            "What distinguishes a HyperAgent from the basic Karpathy Loop?",
          options: [
            { id: "a", text: "It uses a more powerful LLM" },
            {
              id: "b",
              text: "It adds a meta-loop that rewrites the inner loop's strategy",
            },
            {
              id: "c",
              text: "It runs the loop in parallel on multiple machines",
            },
            { id: "d", text: "It generates its own training data" },
          ],
          correctOptionId: "b",
          explanation:
            "The HyperAgent adds a meta-loop that reviews results and rewrites strategy — improving the improver, not just the output.",
        },
        {
          id: "q9",
          question:
            "In Shopify's overnight experiment, how did a 0.8B parameter model outperform a 1.6B model?",
          options: [
            { id: "a", text: "It was pre-trained on Shopify data" },
            {
              id: "b",
              text: "It ran 37 automated configuration experiments vs. manual tuning",
            },
            {
              id: "c",
              text: "It used a more efficient architecture",
            },
            { id: "d", text: "It processed queries in parallel" },
          ],
          correctOptionId: "b",
          explanation:
            "Better search over the configuration space, not a bigger model, produced the 19% improvement through 37 automated experiments.",
        },
        {
          id: "q10",
          question:
            "Why does the sandbox module use subprocess.run instead of importing the agent's code directly?",
          options: [
            {
              id: "a",
              text: "subprocess.run is faster for large files",
            },
            {
              id: "b",
              text: "It provides process isolation — a crash or timeout won't affect the main loop",
            },
            {
              id: "c",
              text: "Python imports can't handle dynamic code",
            },
            {
              id: "d",
              text: "subprocess.run supports more programming languages",
            },
          ],
          correctOptionId: "b",
          explanation:
            "Process isolation means a bad agent fix dies in the subprocess without affecting the orchestrator.",
        },
      ],

      tags: ["quiz", "assessment", "self-improving agents"],
    },
  ],

  overview: {
    heroSubheading:
      "Build agents that improve themselves — from the Karpathy Loop to production safety, with a running project and real-time dashboard.",
    learnItems: [
      {
        icon: "🔁",
        title: "The Karpathy Loop",
        description:
          "Understand and implement the mutation-selection cycle that powers self-improving agents.",
      },
      {
        icon: "🏗️",
        title: "Build CleanLoop",
        description:
          "Create a self-healing data engineer that fixes messy CSVs autonomously using the arena architecture.",
      },
      {
        icon: "📊",
        title: "Real-Time Dashboard",
        description:
          "Build a Streamlit dashboard to visualize iterations, assertions, decisions, and Git history.",
      },
      {
        icon: "⚔️",
        title: "Auto-Curricula",
        description:
          "Implement Challenger-Solver co-evolution to generate progressively harder test cases.",
      },
      {
        icon: "🏆",
        title: "Test-Time Ranking",
        description:
          "Generate multiple candidates and rank them to improve quality without more iterations.",
      },
      {
        icon: "🛡️",
        title: "Production Safety",
        description:
          "Add subprocess sandboxing and graduated autonomy so the agent earns trust through reliability.",
      },
    ],
    aboutParagraphs: [
      "LLMs are powerful but frozen after training. The Karpathy Loop breaks through this ceiling — letting agents hypothesize, modify, evaluate, and commit improvements autonomously.",
      "This course takes you from concept to production. You'll build CleanLoop — a self-healing data engineer — then add a real-time dashboard, automatic curricula, test-time re-ranking, and safety guardrails.",
      "Every pattern is grounded in real results. Shopify used this approach for a 53% speedup on their Liquid engine. AutoResearch ran 700 automated experiments that produced published ML improvements.",
    ],
    detailItems: [
      {
        title: "The Karpathy Loop & Arena Architecture",
        description:
          "Understand the three-file pattern (referee, genome, orchestrator) and binary assertions that make autonomous improvement possible.",
      },
      {
        title: "Hands-On Build with CleanLoop",
        description:
          "Build a complete self-improving agent in VS Code — from scaffold to running loop to production safety.",
      },
      {
        title: "Real-Time Observability",
        description:
          "Create a Streamlit dashboard with iteration charts, assertion heatmaps, decision logs, and Git timelines.",
      },
      {
        title: "Advanced Patterns",
        description:
          "Add metacognition (HyperAgent), auto-curricula (Challenger-Solver), and test-time reranking (Best-of-N).",
      },
      {
        title: "Production Safety",
        description:
          "Implement subprocess sandboxing and graduated autonomy with trust levels that earn commit rights through reliability.",
      },
    ],
    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["Python 3.12+", "Git basics", "VS Code"],
      description:
        "Intermediate Python skills, basic Git knowledge, and a working VS Code installation. No ML or AI experience required — we build everything from scratch.",
    },
    audienceCards: [
      {
        icon: "🔧",
        title: "Software Engineers",
        description:
          "Learn to build agents that maintain and improve codebases autonomously.",
      },
      {
        icon: "📊",
        title: "Data Engineers",
        description:
          "Automate data pipeline maintenance with self-healing agents.",
      },
      {
        icon: "🤖",
        title: "AI Engineers",
        description:
          "Go beyond prompt chaining — build agents that improve themselves.",
      },
    ],
  },
};
