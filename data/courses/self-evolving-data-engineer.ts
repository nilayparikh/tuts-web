import type { CourseDefinition } from "./types";

const CLEANLOOP_REPO_URL =
  "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent/cleanloop";

export const SELF_EVOLVING_DATA_ENGINEER_COURSE: CourseDefinition = {
  slug: "self-evolving-data-engineer",
  title: "Build an AI Data Engineer: Self-Improving Pipelines with AutoGen Framework",
  description:
    "Build one bounded AI data-engineering loop with AutoGen, a fixed judge, dashboard evidence, and safe mutation over messy finance pipelines.",
  totalDuration: "8 mins",
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
  ],
  overview: {
    heroSubheading:
      "Build one bounded mutation loop over messy finance data, keep the judge fixed, and use AutoGen only at the orchestration seam.",
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
        title: "Tour the live CleanLoop surface",
        description:
          "Walk the repo, run the setup flow, and inspect the dashboard evidence for one bounded loop.",
      },
    ],
    aboutParagraphs: [
      "This site now publishes the <strong>live</strong> version of the Self-Evolving Data Engineer course lesson by lesson. The first published lesson frames the business problem, the mutation contract, and the CleanLoop example that the rest of the series will build on.",
      "The focus is narrow on purpose: one mutable surface, one fixed judge, and one repeatable repair loop. That keeps the first lesson auditable today while leaving space to evolve the rest of the course structure as new lessons go live.",
    ],
    detailItems: [
      {
        title: "What is live right now?",
        description:
          "Lesson 01 is live with the published YouTube video, the CleanLoop code surface, and the lesson transcript, Q&A, and step guide synced into the site.",
      },
      {
        title: "What comes next?",
        description:
          "Future lessons will only appear here when their lesson titles, content, and YouTube videos are published and stable enough to treat as public site content.",
      },
    ],
    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["Python basics", "Data pipelines", "CSV cleanup"],
      description:
        "You do not need prior AutoGen experience for Lesson 01. It helps if you already understand basic Python workflows, messy CSV data, and why deterministic rules fail on real-world pipeline inputs.",
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