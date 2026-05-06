import type { CourseDefinition } from "./types";

const CLEANLOOP_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent/cleanloop";

export const SELF_EVOLVING_DATA_ENGINEER_COURSE: CourseDefinition = {
  slug: "self-evolving-data-engineer",
  title:
    "Build an AI Data Engineer: Self-Improving Pipelines with AutoGen Framework",
  description:
    "Build one bounded AI data-engineering loop with AutoGen, a fixed judge, and safe mutation over messy finance pipelines.",
  totalDuration: "42 mins",
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
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The recording opens with the real bottleneck. Moving data is not enough anymore. When a pipeline breaks, a human still reads the failure, picks the next fix, and carries the loop memory forward.\n\nThat is the problem this course is trying to close.",
        },
        {
          time: 58,
          speaker: "Instructor",
          text: "Next, the lesson explains Software 3.0 in practical terms. The AI sits in the messy middle layer, while the outer contract stays rigid.\n\nThat framing matters because the loop only works when the editable surface stays narrow and the enforcement layer stays fixed.",
        },
        {
          time: 116,
          speaker: "Instructor",
          text: "From there, the recording shifts into the CleanLoop example. The README becomes the first navigation surface, then the learner sees the setup, status, and verify flow before any mutation happens.\n\nThe lesson uses that repo tour to prove that boundary-first design is visible in the project itself.",
        },
        {
          time: 261,
          speaker: "Instructor",
          text: "The live demo then runs a short loop against messy finance CSVs. Deterministic logic handles what it can first, and the mutation path only picks up the unresolved failures.\n\nThat is the key posture for the whole course: rules first, bounded mutation second.",
        },
        {
          time: 310,
          speaker: "Instructor",
          text: "The dashboard section shows the genome surface, mutation decisions, and evidence trail. The learner sees where deterministic decisions stop, where mutation playbooks begin, and how row-level inspection turns failure into a repair signal.\n\nThat makes the loop inspectable instead of magical.",
        },
        {
          time: 701,
          speaker: "Instructor",
          text: "The closing slides restore the full course roadmap and the mutation-process diagram. AutoGen sits on the orchestration seam, not inside the judge. Autonomy is earned, not assumed.\n\nThe outro then points directly into Lesson 02, where the course locks the exact genome boundary.",
        },
      ],
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
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The recording opens with the failure mode. Self-improving systems usually do not fail because the idea is wrong. They fail because the loop mutates the wrong surface.\n\nThat sets up the whole lesson: if the mutation boundary is vague, the loop becomes noisy and hard to trust.",
        },
        {
          time: 73,
          speaker: "Instructor",
          text: "The next section reconnects this lesson to Lesson 01. The earlier contract stays active, AutoGen stays on the orchestration seam, and the correctness boundary stays fixed.\n\nLesson 02 does not restart the system. It narrows the exact genome the loop is allowed to touch.",
        },
        {
          time: 131,
          speaker: "Instructor",
          text: "From there, the lesson argues for one mutable file whenever the problem allows it. A single-file genome makes diffs smaller, review easier, and rollback more believable.\n\nThe recording also clarifies that bounded mutation is not just about file count. It is also about the exact problem scope the loop is meant to solve.",
        },
        {
          time: 703,
          speaker: "Instructor",
          text: "The hands-on walkthrough then moves into CleanLoop. The runtime surface shows where deterministic normalization runs first and where the mutation playbook takes over for unresolved finance CSV failures.\n\nThat is the practical genome boundary: deterministic rules first, mutation only where the fixed logic runs out of road.",
        },
        {
          time: 833,
          speaker: "Instructor",
          text: "The demo section validates status, verifies model connectivity, and runs the bounded evaluation flow. The lesson explains why smaller, cost-effective models such as Phi-4 can still be enough when the mutation task is tightly scoped.\n\nThe point is not model prestige. It is choosing a model that fits the bounded repair job.",
        },
        {
          time: 953,
          speaker: "Instructor",
          text: "The closing segment introduces worktrees as the safer production posture for trial mutations and starter-genome evolution. The dashboard then becomes the review surface for evidence, validation, and future exercises.\n\nThe outro points directly into Lesson 03, where the orchestrator will decide which candidate mutations to keep and which to reject.",
        },
      ],
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
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The recording opens with the control question. Once the genome is bounded, who reads the failure, asks for the next mutation, and decides whether the candidate survives?\n\nThat is the orchestrator's job. It is the control layer around the proposal step, not just another prompt wrapper.",
        },
        {
          time: 55,
          speaker: "Instructor",
          text: "The next section walks the control diagram. The reader grounds the next move in failure evidence, the repair forge asks AutoGen for a bounded change, and the crucible plus Git decide what survives.\n\nThat keeps the loop deterministic around the agentic seam instead of turning the whole system into a black box.",
        },
        {
          time: 125,
          speaker: "Instructor",
          text: "The hands-on portion then moves into the repo. The lesson points at the orchestration code path and explains that the pattern is sequential here, but the same reasoning applies to broader agent architectures too.\n\nWhat matters is not the exact topology. What matters is that the control steps stay explicit.",
        },
        {
          time: 225,
          speaker: "Instructor",
          text: "From there, the live run resets the genome, evaluates the baseline, and runs one bounded iteration. The lesson shows how the loop preserves the starter surface, requests one proposal, and checks the result before anything is allowed to persist.\n\nThe model can suggest. It does not get to declare success.",
        },
        {
          time: 380,
          speaker: "Instructor",
          text: "The dashboard segment widens the view. Nilay inspects artifacts, score movement, and row-level trace decisions so you can see deterministic handling versus mutation-playbook handling.\n\nThat evidence surface is what makes control decisions reviewable instead of mystical.",
        },
        {
          time: 500,
          speaker: "Instructor",
          text: "The closing discussion makes the bridge to observability explicit. If you want to broaden the search space or increase pressure later, you need traces, backtesting, and clear dashboards first.\n\nThe outro points directly into Lesson 04, where observability becomes the main topic.",
        },
      ],
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
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The recording opens with the dashboard analogy. If you cannot see speed, fuel, warnings, or score movement, the system may still be moving, but it is moving blind. That is the lesson hook: a mutation loop without observability does not really learn.\n\nIt just keeps changing until you expose the signals that matter.",
        },
        {
          time: 34,
          speaker: "Instructor",
          text: "Next, Nilay reconnects Lesson 04 to the earlier lessons. The course is still one system, not four disconnected demos, so the reader, proposal, crucible, and dashboard evidence all stay in play together.\n\nObservability is the layer that lets the rest of the system stay reviewable.",
        },
        {
          time: 73,
          speaker: "Instructor",
          text: "The architecture segment explains the feedback signal directly. Run history, strategy state, live evidence, and operator control belong on the same surface because the real questions are simple: did the loop improve, is it repeating the same mistake, and should a human intervene?\n\nThat is why score movement alone is not enough.",
        },
        {
          time: 148,
          speaker: "Instructor",
          text: "The hands-on section then moves into the lesson README and the CleanLoop repo. Nilay frames observability as external memory and points the learner at the dashboard, metric helpers, and the saved `finance_eval_history.json` artifact.\n\nThose small stored decisions are what make later autonomy safer.",
        },
        {
          time: 243,
          speaker: "Instructor",
          text: "From there, the recording separates score from trace. The score answers whether the run improved. The trace answers what happened to one row, one proposal, or one correlation path.\n\nThe loan-application example makes the case for correlation IDs and row-level evidence across distributed systems.",
        },
        {
          time: 304,
          speaker: "Instructor",
          text: "The implementation segment explains the storage posture. CleanLoop uses OpenTelemetry-shaped traces and simple JSON artifacts instead of a full Grafana or Prometheus stack so the example stays lightweight for learners.\n\nThe lesson still keeps the same design idea you would use in production: durable history plus searchable trace context.",
        },
        {
          time: 415,
          speaker: "Instructor",
          text: "The dashboard walkthrough shows operator signals, score timelines, mutation evidence, invoice drill-down, and trace timelines. Nilay uses specific invoice examples to show how deterministic handling and mutation-playbook handling expose different evidence.\n\nThat is the practical meaning of the feedback signal in this lesson.",
        },
        {
          time: 618,
          speaker: "Instructor",
          text: "The closing section points back to the exercises and the production mindset. Learners are asked to read the dashboard like operators, not spectators, and to treat missing artifacts as useful feedback instead of silent failure.\n\nThe outro then tees up the next lesson, where the loop will face more pressure without giving up control.",
        },
      ],
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
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The recording opens with the gym analogy. If the system only lifts easy cases, it does not get stronger. It just gets comfortable. That leads directly into the lesson claim: self-challenging loops need pressure, but they need the right kind of pressure.\n\nA fixed judge plus a smart challenger is the mechanism that makes that possible.",
        },
        {
          time: 24,
          speaker: "Instructor",
          text: "Next, Nilay frames the two-role split. The judge defines truth, the challenger raises difficulty, and the loop must improve without being allowed to cheat.\n\nThat tension is the center of the lesson.",
        },
        {
          time: 83,
          speaker: "Instructor",
          text: "The lesson then ties this back to Lesson 04. Observability showed where the system was weak, so now the pressure is not random. It is targeted toward real failure modes that the artifact trail already exposed.\n\nThat is why Lesson 05 is a continuation of the same loop, not a new system.",
        },
        {
          time: 130,
          speaker: "Instructor",
          text: "The arena metaphor comes next. The judge is the referee, the executor is the current champion, and the challenger keeps sending stronger opponents.\n\nIf the judge changes, the goalposts move, and the loop stops being trustworthy.",
        },
        {
          time: 268,
          speaker: "Instructor",
          text: "The repo walkthrough asks the learner to trace the challenger path like an operator. The questions are practical: where are harder fixtures generated, what signal chooses them, and how is the judge protected from modification?\n\nThat sets up the live demo with the right engineering posture.",
        },
        {
          time: 326,
          speaker: "Instructor",
          text: "The hands-on lab then reinforces the theory. Judge and challenger are not the same tool, fixed selection pressure makes improvement meaningful, and curriculum pressure should be targeted instead of random.\n\nThat is the rule set the learner should carry into their own systems.",
        },
        {
          time: 484,
          speaker: "Instructor",
          text: "The difficulty ladder segment explains how the challenge surface grows from mild finance messiness to much harder business-context cases. Nilay also makes the trade-off explicit: higher levels need stronger models, better hints, and more mutation support than the current lesson covers.\n\nThat is an important production constraint, not a bug in the idea.",
        },
        {
          time: 603,
          speaker: "Instructor",
          text: "From there, the recording moves into the live run. Old adversarial files are cleared, new levels are generated, then the same judge evaluates the harder arena before the loop runs.\n\nThe dashboard becomes the review surface again so the learner can inspect deterministic rows, mutation-playbook rows, and anomaly reasons after challenge generation.",
        },
        {
          time: 978,
          speaker: "Instructor",
          text: "The closing discussion broadens the frame. Nilay links code mutation, prompt mutation, and longer-term behavioral learning as overlapping mutation surfaces, then points ahead to best-of-N and re-ranking as the next mechanism in the course.\n\nLesson 05 ends by showing that pressure alone is not enough. The loop also needs a way to compare candidates before commit.",
        },
      ],
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
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "One candidate is often too weak. If you trust only one generation, you are gambling on a lucky answer.\n\nThis lesson introduces test-time reranking as the safer pattern: generate a few bounded candidates, compare them, and commit only the strongest survivor.",
        },
        {
          time: 28,
          speaker: "Instructor",
          text: "The first trade-off is cost. More candidates usually improve quality, but they also add token spend and latency.\n\nThat means reranking is not free magic. It is an engineering decision you make only when the quality gain matters.",
        },
        {
          time: 93,
          speaker: "Instructor",
          text: "Next, the recording reconnects this mechanism to CleanLoop. The loop still uses the same proposal, judge, and feedback contract.\n\nThe only change is that proposal grows from one guess into a bounded best-of-few search before the final evaluation step.",
        },
        {
          time: 157,
          speaker: "Instructor",
          text: 'The key mental shift is comparative evaluation. A reranker does not ask, "Is this good?" It asks, "Which one is better?"\n\nThat is why the fixed judge matters so much. If the scoring surface drifts, the comparison stops being honest.',
        },
        {
          time: 297,
          speaker: "Instructor",
          text: "The hands-on section opens Lesson 06 in the repo and explains the operator workflow. Run the one-shot path first, then rerun the same round with `--rerank --candidates 2`.\n\nWhat you inspect is not just the final score. You inspect where the candidates differ and whether the selected winner matches your expectations.",
        },
        {
          time: 414,
          speaker: "Instructor",
          text: "The second half makes the fairness contract explicit. Candidates should run in isolation, and every candidate should face the same fixed judge.\n\nIf your hints or scoring are biased, reranking will confidently select the wrong answer for the wrong reason.",
        },
        {
          time: 604,
          speaker: "Instructor",
          text: "The live run then shows the rerank command in CleanLoop and compares the candidates. Nilay also makes one useful disclosure: this repo demonstrates the pattern honestly, but it does not claim every real system should pay for reranking.\n\nOnly a small slice of production use cases can justify the extra cost.",
        },
        {
          time: 736,
          speaker: "Instructor",
          text: "Near the end, the recording widens the frame with hybrid fusion. Instead of picking one full candidate, a stronger system can merge the best parts of several candidates.\n\nThat pattern is out of scope for this course, but it shows where reranking can evolve next.",
        },
        {
          time: 819,
          speaker: "Instructor",
          text: "The takeaway is simple. Your loop can now search, compare, and choose instead of blindly committing the first answer.\n\nBut it only works because the system stays bounded. Cost, latency, and trust all stay under operator control.",
        },
      ],
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
  ],
  overview: {
    heroSubheading:
      "Build one bounded mutation loop over messy finance data, keep the judge fixed, widen search only when it earns its cost, and see how the orchestrator decides what survives.",
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
      "This site now publishes the <strong>live</strong> version of the Self-Evolving Data Engineer course lesson by lesson. The first six published lessons frame the business problem, define the mutation contract, lock the exact pipeline genome, show how the orchestrator controls one bounded repair loop, make that loop observable, raise pressure with a fixed judge and smarter challengers, and then add best-of-N reranking before commit inside CleanLoop.",
      "The focus is narrow on purpose: one mutable surface, one fixed judge, one repeatable control path, one readable feedback surface, and one bounded search budget when one-shot quality is not enough. That keeps the current public lessons auditable today while leaving space for the final safety lesson to close the course cleanly.",
    ],
    detailItems: [
      {
        title: "What is live right now?",
        description:
          "Lessons 01 through 06 are live with published YouTube videos, the CleanLoop code surface, and the synced transcript, Q&A, and step-guide content for the current public course boundary.",
      },
      {
        title: "What comes next?",
        description:
          "Future lessons will only appear here when their lesson titles, content, and YouTube videos are published and stable enough to treat as public site content. The final lesson closes the course with production safety, dashboard oversight, and graduated autonomy.",
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
