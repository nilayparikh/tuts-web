import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  Paragraph,
  GistCodeOutput,
  GitHubGistEmbed,
  NotebookEmbed,
  NoteBox,
  TipBox,
  InfoBox,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gist & Notebook Embeds Demo | LocalM™ Tuts",
  description:
    "Demonstration of GistCodeOutput, GitHubGistEmbed, and NotebookEmbed components for embedding code, output, and notebooks.",
  openGraph: {
    title: "Gist & Notebook Embeds Demo | LocalM™ Tuts",
    description:
      "Live demos of code embedding components from the tutorial framework.",
    type: "article",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function GistDemoPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/examples/gist-demo/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      <HeroSection
        headline="Gist & Notebook Embeds"
        subheading="Live demos of code embedding components — formatted GitHub Gists with output, classic Gist embeds, and Jupyter notebook previews."
        eyebrow="Component Demo"
      />

      {/* ── Section 1: GistCodeOutput ─────────────────────────────── */}
      <SectionDivider label="GistCodeOutput" />
      <SectionHeading
        eyebrow="New Component"
        title="GistCodeOutput — Formatted Code with Output"
      />
      <Paragraph>
        The <strong>GistCodeOutput</strong> component fetches a GitHub Gist via
        the API and renders it with a terminal-style header, line numbers, file
        tabs (for multi-file gists), copy button, and an optional output panel
        below the code.
      </Paragraph>

      <InfoBox title="How it works">
        The component calls the GitHub Gist API at render time (client-side) to
        fetch file contents, then renders them with syntax-aware formatting. No
        external script injection — fully self-contained.
      </InfoBox>

      {/* Single-file gist with output */}
      <GistCodeOutput
        gistId="nilayparikh/1e46f1d39cdccc6bbfa0fc34a92ff4c6"
        title="Hello World Agent"
        description="A minimal A2A agent that responds to any task with a greeting."
        output={`Server started on http://localhost:8000
Agent Card: http://localhost:8000/.well-known/agent.json
Ready to accept tasks...

[Task received] id=task-001
[Processing] "Hello, who are you?"
[Completed] "I am the Hello World Agent. How can I help you today?"
`}
      />

      <TipBox title="Usage">
        Pass a <strong>gistId</strong> (with or without owner prefix) and
        optionally an <strong>output</strong> string to display simulated
        terminal output below the code.
      </TipBox>

      {/* ── Section 2: GitHubGistEmbed (classic) ──────────────────── */}
      <SectionDivider label="GitHubGistEmbed" />
      <SectionHeading
        eyebrow="Existing Component"
        title="GitHubGistEmbed — Classic Gist Embed"
      />
      <Paragraph>
        The original <strong>GitHubGistEmbed</strong> component renders a GitHub
        Gist using the official embed script inside a sandboxed iframe. It
        preserves GitHub&apos;s native styling.
      </Paragraph>

      <GitHubGistEmbed
        gistId="nilayparikh/1e46f1d39cdccc6bbfa0fc34a92ff4c6"
        caption="Classic GitHub Gist embed using the official script"
      />

      {/* ── Section 3: NotebookEmbed ──────────────────────────────── */}
      <SectionDivider label="NotebookEmbed" />
      <SectionHeading
        eyebrow="New Component"
        title="NotebookEmbed — Jupyter Notebook Preview"
      />
      <Paragraph>
        The <strong>NotebookEmbed</strong> component renders a static preview of
        a Jupyter notebook from GitHub via nbviewer.org. It includes action
        buttons to open the notebook on GitHub or in Google Colab, with a full
        fallback view if the iframe fails to load.
      </Paragraph>

      <NotebookEmbed
        notebookUrl="https://github.com/nilayparikh/a2a-agent2agent-protocol-tutorial/blob/main/tests/book.ipynb"
        colabUrl="https://colab.research.google.com/drive/1PMmAp2MQHbsWb9NZ9LxQp2F0Gm5jk41b?usp=sharing"
        title="QA Agent Notebook"
        height="700px"
        caption="Static preview rendered via nbviewer.org — click 'Open in Colab' to run interactively."
      />

      <NoteBox title="Embedding Options">
        The NotebookEmbed supports two URL sources: a{" "}
        <strong>notebookUrl</strong> pointing to the .ipynb file on GitHub
        (rendered via nbviewer.org), and an optional <strong>colabUrl</strong>{" "}
        for the &quot;Open in Colab&quot; button. If only notebookUrl is
        provided, the Colab link is auto-generated from the GitHub path.
      </NoteBox>
    </TutorialLayout>
  );
}
