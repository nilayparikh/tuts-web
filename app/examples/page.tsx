import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  Paragraph,
  NoteBox,
  ConceptCard,
  ConceptGrid,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import { COURSE } from "@/data/course";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Code Examples | LocalM\u2122 Tuts",
  description:
    "Runnable code examples from the A2A: The Agent2Agent Protocol course — agents, clients, and orchestration patterns.",
  openGraph: {
    title: "Code Examples | LocalM\u2122 Tuts",
    description:
      "Runnable code examples from the A2A: The Agent2Agent Protocol course.",
    type: "article",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────

const codeExamples = COURSE.parts
  .filter((p) => p.codeUrl)
  .map((p, i) => ({
    title: p.title,
    description: p.description ?? "",
    slug: p.slug,
    codeUrl: p.codeUrl!,
    index: i + 1,
  }));

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ExamplesPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/examples/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      <HeroSection
        eyebrow={`${codeExamples.length} Examples`}
        headline="Code Examples"
        subheading="Runnable code from every hands-on lesson. Clone the repo and follow along."
        primaryAction={{
          label: "View on GitHub",
          href: COURSE.githubUrl ?? "#",
        }}
        tags={["Python", "A2A", "Google ADK", "LangGraph", "BeeAI"]}
      />

      <SectionDivider label="All Examples" />

      <Paragraph lead center>
        Each example maps to a course lesson and includes full source, setup
        instructions, and a README.
      </Paragraph>

      <ConceptGrid columns={2}>
        {codeExamples.map((ex) => (
          <a
            key={ex.slug}
            href={ex.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ConceptCard
              title={`${ex.index}. ${ex.title}`}
              description={ex.description}
              variant={
                (
                  [
                    "primary",
                    "accent",
                    "success",
                    "warning",
                    "danger",
                    "default",
                  ] as const
                )[ex.index % 6]
              }
            />
          </a>
        ))}
      </ConceptGrid>

      <NoteBox title="Getting Started">
        Clone the{" "}
        <a
          href={COURSE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--tf-color-primary-light)" }}
        >
          course repository
        </a>{" "}
        and follow the setup instructions in each example&apos;s README. All
        examples are self-contained Python projects.
      </NoteBox>
    </TutorialLayout>
  );
}
