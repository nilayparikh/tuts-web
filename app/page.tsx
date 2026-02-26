import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  LessonList,
  DescriptionBox,
  Paragraph,
  StepList,
  ConceptCard,
  ConceptGrid,
  AccordionList,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import { InstructorDetailCard } from "./components/InstructorDetailCard";
import { COURSE } from "@/data/course";

// ─── "In detail, you'll" items ─────────────────────────────────────────────

const DETAIL_ITEMS = [
  {
    title: "Understand why A2A exists",
    description:
      "Explore the client-server architecture of A2A: what an Agent Card is, how tasks flow through the agent lifecycle (submitted → working → completed), and why standardizing inter-agent communication matters in 2025.",
  },
  {
    title: "Build an insurance QA agent on Vertex AI",
    description:
      "Build an insurance policy agent using Claude Haiku 4.5 on Vertex AI, wrap it in an A2A server using the A2A Python SDK, and create an A2A client from scratch to communicate with it.",
  },
  {
    title: "Create a health research agent with Google ADK",
    description:
      "Use the Google Agent Development Kit (ADK) and Gemini 3 Pro to build a research agent that performs real-time web search — then expose it via A2A.",
  },
  {
    title: "Chain agents sequentially with ADK",
    description:
      "Wire agents together so one agent's output feeds directly into the next as input — a sequential A2A chain where each specialist builds on the previous result.",
  },
  {
    title: "Build a LangGraph agent with MCP tools",
    description:
      "Create a healthcare provider agent using LangGraph, connect it to an MCP tool server for structured data access, and call it through Microsoft Agent Framework's A2A client.",
  },
  {
    title: "Orchestrate dynamically with BeeAI Framework",
    description:
      "Use IBM's BeeAI Framework to build a Requirement Agent that delegates tasks to specialized agents on the fly — a fully dynamic, hierarchical multi-agent system.",
  },
  {
    title: "Deploy to Agent Stack",
    description:
      "Ship your A2A agents to BeeAI's Agent Stack — open-source infrastructure for deploying, discovering, and sharing A2A agents in production.",
  },
];

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${COURSE.title} | LocalM\u2122 Tuts`,
  description: COURSE.description,
  openGraph: {
    title: COURSE.title,
    description: COURSE.description,
    type: "article",
    publishedTime: "2025-02-25",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function CourseOverviewPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Short Course · ${COURSE.parts.length} Lessons · ${COURSE.totalDuration}`}
        headline={`**${COURSE.title.split(":")[0]}**: ${COURSE.title.split(":").slice(1).join(":").trim()}`}
        subheading="An open protocol for building multi-agent AI systems — where agents discover, delegate, and collaborate across any framework."
        primaryAction={{
          label: "Start learning →",
          href: `/${COURSE.parts[0].slug}/`,
        }}
        secondaryAction={{
          label: "View on GitHub",
          href: COURSE.githubUrl ?? "#",
        }}
        tags={COURSE.tags}
      />

      {/* ── What You'll Learn ─────────────────────────────────────────────── */}
      <SectionDivider label="What You'll Learn" />

      <StepList>
        <ConceptCard
          compact
          icon="🔌"
          title="Expose agents as A2A servers"
          description="Wrap agents built with Google ADK, LangGraph, or BeeAI as fully compliant A2A servers — Agent Card discovery, task handling, and SSE streaming included."
        />
        <ConceptCard
          compact
          icon="🛠"
          title="Build A2A clients from scratch"
          description="Create clients that fetch Agent Cards, send tasks, and handle both synchronous responses and live streaming — or use existing A2A SDK integrations."
        />
        <ConceptCard
          compact
          icon="🔀"
          title="Orchestrate multi-agent workflows"
          description="Wire agents into sequential chains and dynamic hierarchical systems, where a Requirement Agent delegates sub-tasks to specialists in real time."
        />
      </StepList>

      {/* ── About This Course ─────────────────────────────────────────────── */}
      <SectionDivider label="About This Course" />

      <Paragraph>
        Connecting agents built with different frameworks typically requires
        extensive custom integration work. A2A solves this with an open protocol
        that standardizes how agents <strong>discover</strong> each other and{" "}
        <strong>communicate</strong> — regardless of which model, language, or
        framework they were built on.
      </Paragraph>
      <Paragraph>
        In this course, you&apos;ll build a complete healthcare multi-agent
        system: three specialized agents using different frameworks, each
        wrapped as an A2A server. You&apos;ll build the clients to talk to them
        and orchestrate them into both sequential and hierarchical workflows.
        Along the way you&apos;ll see exactly how A2A and MCP complement each
        other — MCP connects agents to external data; A2A connects agents to
        each other.
      </Paragraph>

      <AccordionList
        items={DETAIL_ITEMS.map((item) => ({
          title: item.title,
          content: item.description,
        }))}
        defaultOpenFirst
      />

      {/* ── Who Should Join? ──────────────────────────────────────────────── */}
      <SectionDivider label="Who Should Join?" />

      <DescriptionBox
        title="Prerequisites"
        subtitle="What you need before starting"
        tags={["Python", "AI Agents", "Multi-Agent Systems"]}
      >
        AI developers building multi-agent systems or working with agentic
        workflows. Familiarity with Python and a basic understanding of AI
        agents is recommended.
      </DescriptionBox>

      <ConceptGrid columns={2}>
        <ConceptCard
          compact
          icon="🤖"
          title="AI / ML Engineers"
          description="You build AI-powered products and want a standard protocol to connect multiple agents — across frameworks, teams, and organizational boundaries."
        />
        <ConceptCard
          compact
          icon="⚙️"
          title="Backend & Platform Engineers"
          description="You design distributed systems and want to add agent-to-agent communication as a first-class capability in your architecture."
        />
        <ConceptCard
          compact
          icon="💻"
          title="Full-Stack Developers"
          description="You are exploring agentic AI and want a structured, code-first introduction to multi-agent orchestration with real, runnable examples."
        />
        <ConceptCard
          compact
          icon="📋"
          title="Technical Leaders"
          description="You evaluate emerging technologies and need to understand A2A's design, ecosystem backing, and what production readiness looks like."
        />
      </ConceptGrid>

      {/* ── Course Outline ────────────────────────────────────────────────── */}
      <SectionDivider label="Course Outline" />

      <SectionHeading
        title={`${COURSE.parts.length} lessons · ${COURSE.totalDuration}`}
        subtitle="Each lesson builds on the previous one — from first principles to a fully deployed multi-agent healthcare system."
      />

      <LessonList parts={COURSE.parts} basePath="" />

      {/* ── Instructor ────────────────────────────────────────────────────── */}
      <SectionDivider label="Instructor" />

      <InstructorDetailCard
        name="Nilay Parikh"
        imageSrc="/brand/nilay_parikh.jpeg"
        role="Founder · LocalM · Ergo Sum"
        bio="Technologist with 20+ years of engineering experience and an ML/AI practitioner since 2010. Founder of Ergo Sum (quantitative & equity research) and LocalM (AI-assisted SDLC). Currently focused on AI Platform Engineering, Agentic AI, and Context Engineering."
        socials={{
          twitter: BRAND.socials.twitter,
          twitterHandle: BRAND.socials.twitterHandle,
          linkedin: BRAND.socials.linkedin,
          youtube: BRAND.socials.youtube,
          github: BRAND.socials.github,
        }}
      />
    </TutorialLayout>
  );
}
