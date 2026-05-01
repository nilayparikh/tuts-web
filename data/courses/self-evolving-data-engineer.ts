import type { CourseDefinition } from "./types";

const CLEANLOOP_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent/cleanloop";

export const SELF_EVOLVING_DATA_ENGINEER_COURSE: CourseDefinition = {
  slug: "self-evolving-data-engineer",
  title:
    "Build an AI Data Engineer: Self-Improving Pipelines with AutoGen Framework",
  description:
    "Build one bounded AI data-engineering loop with AutoGen, a fixed judge, and safe mutation over messy finance pipelines.",
  totalDuration: "26 mins",
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
  ],
  overview: {
    heroSubheading:
      "Build one bounded mutation loop over messy finance data, keep the judge fixed, lock the genome, and see how the orchestrator decides what survives.",
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
      "This site now publishes the <strong>live</strong> version of the Self-Evolving Data Engineer course lesson by lesson. The first three published lessons frame the business problem, define the mutation contract, lock the exact pipeline genome, and show how the orchestrator controls one bounded repair loop inside CleanLoop.",
      "The focus is narrow on purpose: one mutable surface, one fixed judge, and one repeatable control path. That keeps the current public lessons auditable today while leaving space to evolve the rest of the course structure as new lessons go live.",
    ],
    detailItems: [
      {
        title: "What is live right now?",
        description:
          "Lessons 01 through 03 are live with published YouTube videos, the CleanLoop code surface, and the synced transcript, Q&A, and step-guide content for the current public course boundary.",
      },
      {
        title: "What comes next?",
        description:
          "Future lessons will only appear here when their lesson titles, content, and YouTube videos are published and stable enough to treat as public site content. Observability is the next lesson in line.",
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
