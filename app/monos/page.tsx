import type { Metadata } from "next";
import { TutorialLayout, HeroSection } from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { MONO_TOPIC, PUBLISHED_MONOS } from "@/data/monos";
import { MonoGrid } from "@/app/components/MonoGrid";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Monos | ${MONO_TOPIC.topicName} | LocalM\u2122 Tuts`,
  description: MONO_TOPIC.description,
  openGraph: {
    title: `${MONO_TOPIC.topicName} — Mono Lessons`,
    description: MONO_TOPIC.description,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function MonosHomePage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/monos/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="tf-breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            /
          </li>
          <li aria-current="page">Monos</li>
        </ol>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`${PUBLISHED_MONOS.length} Mono Lesson${PUBLISHED_MONOS.length !== 1 ? "s" : ""}`}
        headline={`**${MONO_TOPIC.topicName}** Monos`}
        subheading={MONO_TOPIC.tagline}
      />

      {/* ── Monos (filterable) ────────────────────────────────────────────── */}
      <MonoGrid monos={PUBLISHED_MONOS} topicName={MONO_TOPIC.topicName} />
    </TutorialLayout>
  );
}
