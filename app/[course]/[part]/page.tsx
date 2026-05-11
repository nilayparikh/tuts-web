import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CoursePlayerLayout,
  LessonHeader,
  QABlock,
  QuizBlock,
  ArticleBlock,
  PodcastEmbed,
  SlideshowEmbed,
  YouTubeEmbed,
  SectionDivider,
  TutorialNav,
  CalloutBox,
  InfoBox,
  NoteBox,
  StepByStepGuide,
  Paragraph,
  VideoTranscript,
  LessonSocialBar,
  LessonObjectives,
  GitHubRepoCard,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import {
  findCourse,
  findCoursePart,
  getAdjacentParts,
  allCoursePartParams,
} from "@/data/courses";
import type { CoursePartMeta } from "@/data/courses";

// ─── Types ────────────────────────────────────────────────────────────────

type Params = { course: string; part: string };

// ─── Static params (for output: 'export') ────────────────────────────────

export function generateStaticParams(): Array<Params> {
  return allCoursePartParams().filter(
    (p) => p.course.trim().length > 0 && p.part.trim().length > 0,
  );
}

export const dynamicParams = false;

// ─── Dynamic metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { course: courseSlug, part: partSlug } = await params;
  const course = findCourse(courseSlug);
  const part = findCoursePart(courseSlug, partSlug);
  if (!course || !part) return {};

  return {
    title: `${part.title} | ${course.title}`,
    description: part.description ?? course.description,
    openGraph: {
      title: `${part.title} · ${course.title}`,
      description: part.description ?? course.description,
      type: "article",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function LessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { course: courseSlug, part: partSlug } = await params;
  const course = findCourse(courseSlug);
  const part = findCoursePart(courseSlug, partSlug);
  if (!course || !part) notFound();

  const { prev, next } = getAdjacentParts(courseSlug, partSlug);
  const shareUrl = new URL(
    `/${courseSlug}/${partSlug}/`,
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tuts.localm.dev",
  ).toString();

  return (
    <CoursePlayerLayout
      header={{
        ...SITE_CONFIG.header,
        currentPath: `/${courseSlug}/${partSlug}/`,
      }}
      footer={SITE_CONFIG.footer}
      sidebar={{
        courseTitle: course.title,
        parts: course.parts,
        currentSlug: partSlug,
        basePath: `/${courseSlug}`,
        totalDuration: course.totalDuration,
      }}
      sidebarWidth={384}
    >
      {/* ── All lesson content in a single constrained column ──────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--tf-space-6)",
          width: "100%",
        }}
      >
        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="tf-breadcrumb">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true" className="tf-breadcrumb-sep">
              /
            </li>
            <li>
              <a href="/courses/">Courses</a>
            </li>
            <li aria-hidden="true" className="tf-breadcrumb-sep">
              /
            </li>
            <li>
              <a href={`/${courseSlug}/`}>{course.title}</a>
            </li>
            <li aria-hidden="true" className="tf-breadcrumb-sep">
              /
            </li>
            <li aria-current="page">{part.title}</li>
          </ol>
        </nav>

        {/* ── Header + social bar: tight unit ─────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--tf-space-3)",
          }}
        >
          <LessonHeader
            part={part}
            type={part.type}
            duration={part.duration}
            title={part.title}
          />
          <LessonSocialBar
            instructorName="Nilay Parikh"
            instructorImageSrc="/brand/nilay_parikh.jpeg"
            twitterUrl={BRAND.socials.twitter}
            twitterHandle={BRAND.socials.twitterHandle}
            linkedinNewsletterUrl={BRAND.socials.linkedinNewsletter}
            youtubeSubscribeUrl={BRAND.socials.youtube}
            pageUrl={shareUrl}
            shareTitle={`${part.title} — ${course.title}`}
            shareDescription={part.description ?? course.description}
            shareHashtags={part.tags ?? course.tags}
          />
        </div>

        {/* ── Description (full width) ─────────────────────────────── */}
        {part.description && <Paragraph>{part.description}</Paragraph>}

        {/* ── Main content by type ─────────────────────────────────── */}
        <PartContent part={part} courseTitle={course.title} />

        {/* ── Navigation ───────────────────────────────────────────────── */}
        <TutorialNav
          prev={
            prev
              ? {
                  label: prev.title,
                  href: `/${courseSlug}/${prev.slug}/`,
                  description: prev.duration,
                }
              : {
                  label: "Course Overview",
                  href: `/${courseSlug}/`,
                  description: "All lessons",
                }
          }
          next={
            next
              ? {
                  label: next.title,
                  href: `/${courseSlug}/${next.slug}/`,
                  description: next.duration,
                }
              : undefined
          }
        />
      </div>
    </CoursePlayerLayout>
  );
}

// ─── Per-type content renderers ───────────────────────────────────────────

function PartContent({
  part,
  courseTitle,
}: {
  part: CoursePartMeta;
  courseTitle: string;
}) {
  switch (part.type) {
    case "video":
      return <VideoContent part={part} />;
    case "video-code":
      return <VideoCodeContent part={part} />;
    case "code":
      return <CodeContent part={part} />;
    case "reading":
      return <ReadingContent part={part} />;
    case "quiz":
      return <QuizContent part={part} />;
    case "article":
      return <ArticleContent part={part} />;
    case "podcast":
      return <PodcastContent part={part} courseTitle={courseTitle} />;
    case "slideshow":
      return <SlideshowContent part={part} />;
    default:
      return <GenericContent part={part} />;
  }
}

// ─── Shared data-driven content blocks ────────────────────────────────────
//
// Render order matches canonical CoursePartMeta field groups
// (see course.instructions.md §"Canonical CoursePartMeta Field Order"):
//
//   Group 2 — Core content:   Objectives
//   Group 4 — Callouts:       InfoBoxes, NoteBoxes
//   Group 5 — Visual:         Mermaid Diagrams, Poll
//   Group 6 — Hands-on:       Code Preview, Step-by-step Guides, Source Code
//   Group 7 — Learning:       Video Transcript, Q&A
//
// Layout-level components (video embeds, notebook splits) are handled by
// per-type renderers above — this function renders everything else.
//

function DataDrivenContent({
  part,
  showObjectives = false,
}: {
  part: CoursePartMeta;
  showObjectives?: boolean;
}) {
  return (
    <>
      {/* ── Transcript ─────────────────────────────────────────── */}
      {part.transcript && part.transcript.length > 0 && (
        <VideoTranscript
          title="Transcript"
          defaultCollapsed
          entries={part.transcript}
        />
      )}

      {/* ── Learning objectives ───────────────────────────────── */}
      {showObjectives && part.objectives && part.objectives.length > 0 && (
        <LessonObjectives objectives={part.objectives} />
      )}

      {/* ── Info boxes ─────────────────────────────────────────── */}
      {part.infoBoxes?.map((box, i) => (
        <InfoBox key={`info-${i}`} title={box.title}>
          {box.content}
        </InfoBox>
      ))}

      {part.noteBoxes?.map((box, i) => (
        <NoteBox key={`note-${i}`} title={box.title}>
          {box.content}
        </NoteBox>
      ))}

      {/* ── Get started / instructions ─────────────────────────── */}
      {part.stepGuides?.map((guide, i) => (
        <StepByStepGuide
          key={`guide-${i}`}
          title={guide.title}
          steps={guide.steps.map((s) => ({
            ...s,
            description: s.description ?? "",
          }))}
        />
      ))}

      {/* ── Auto-generated clone/install (from codeUrl) ─────────── */}
      {part.codeUrl && !part.stepGuides?.length && (
        <StepByStepGuide
          title="Setup Instructions"
          steps={[
            {
              title: "Clone the repository",
              description:
                "Clone the course repository to your local machine to follow along with the code examples.",
              code: `git clone ${part.codeUrl}\ncd $(basename ${part.codeUrl})`,
              codeLanguage: "bash",
            },
            {
              title: "Create a virtual environment",
              description:
                "Create an isolated Python environment for the project dependencies.",
              code: "python -m venv .venv\nsource .venv/bin/activate  # or .venv\\Scripts\\activate on Windows",
              codeLanguage: "bash",
            },
            {
              title: "Install dependencies",
              description:
                "Install all required packages from the requirements file.",
              code: "pip install -r requirements.txt",
              codeLanguage: "bash",
            },
          ]}
        />
      )}

      {part.codeUrl && (
        <GitHubRepoCard
          url={part.codeUrl}
          description="Complete source code for this lesson."
        />
      )}

      {part.qa && part.qa.length > 0 && (
        <section>
          <SectionDivider label="Q&A" />
          <QABlock items={part.qa} />
        </section>
      )}
    </>
  );
}

// ─── Video ────────────────────────────────────────────────────────────────

function VideoContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      {/* Video embed */}
      {part.videoId && (
        <YouTubeEmbed
          videoId={part.videoId}
          title={part.title}
          lazyLoad
          caption={`${part.title} · ${part.duration}`}
        />
      )}

      {/* Description box with objectives */}
      <DataDrivenContent part={part} showObjectives />
    </>
  );
}

// ─── Video with Code ──────────────────────────────────────────────────────

function VideoCodeContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      {part.videoId && (
        <YouTubeEmbed
          videoId={part.videoId}
          title={part.title}
          lazyLoad
          caption={`${part.title} · ${part.duration}`}
        />
      )}

      <DataDrivenContent part={part} />
    </>
  );
}

// ─── Code ────────────────────────────────────────────────────────────────

function CodeContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      <DataDrivenContent part={part} showObjectives />
    </>
  );
}

// ─── Reading ──────────────────────────────────────────────────────────────

function ReadingContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      {/* ── Reading URL (type-specific, above standard content) ── */}
      {part.readingUrl && (
        <GitHubRepoCard
          url={part.readingUrl}
          description="This lesson links to an external resource."
        />
      )}

      {/* ── Standard data-driven content (canonical order) ──────── */}
      <DataDrivenContent part={part} showObjectives />
    </>
  );
}

// ─── Quiz ─────────────────────────────────────────────────────────────────

function QuizContent({ part }: { part: CoursePartMeta }) {
  if (!part.quizQuestions || part.quizQuestions.length === 0) {
    return (
      <CalloutBox variant="warning" title="Quiz Coming Soon">
        Questions for this quiz are being prepared. Check back soon!
      </CalloutBox>
    );
  }

  return (
    <>
      <NoteBox title="Instructions">
        Choose the best answer for each question. You need 80% to pass. Take
        your time — there is no timer.
      </NoteBox>

      <QuizBlock
        title={part.title}
        instructions="Choose the best answer for each question. You need 80% to pass."
        questions={part.quizQuestions}
      />
    </>
  );
}

// ─── Article ──────────────────────────────────────────────────────────────

function ArticleContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      <ArticleBlock
        title={part.title}
        subtitle={part.description}
        readingTime={part.duration}
      >
        {part.objectives && part.objectives.length > 0 && (
          <>
            <Paragraph lead>In this article, you will learn:</Paragraph>
            <ul
              style={{
                margin: 0,
                paddingLeft: "var(--tf-space-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--tf-space-2)",
              }}
            >
              {part.objectives.map((obj, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "var(--tf-text-sm)",
                    color: "var(--tf-text-secondary)",
                    lineHeight: "var(--tf-leading-relaxed)",
                  }}
                >
                  {obj}
                </li>
              ))}
            </ul>
          </>
        )}
        {part.readingUrl && (
          <Paragraph>
            Read the full article:{" "}
            <a href={part.readingUrl} target="_blank" rel="noopener noreferrer">
              {part.readingUrl}
            </a>
          </Paragraph>
        )}
      </ArticleBlock>

      <DataDrivenContent part={part} />
    </>
  );
}

// ─── Podcast ──────────────────────────────────────────────────────────────

function PodcastContent({
  part,
  courseTitle,
}: {
  part: CoursePartMeta;
  courseTitle: string;
}) {
  return (
    <>
      <PodcastEmbed
        title={part.title}
        description={part.description}
        duration={part.duration}
        showName={courseTitle}
      />

      {part.objectives && part.objectives.length > 0 && (
        <section>
          <SectionDivider label="Episode highlights" />
          {part.objectives.map((obj, i) => (
            <Paragraph key={i}>
              <strong>{i + 1}.</strong> {obj}
            </Paragraph>
          ))}
        </section>
      )}

      <DataDrivenContent part={part} />
    </>
  );
}

// ─── Slideshow ────────────────────────────────────────────────────────────

function SlideshowContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      <SlideshowEmbed
        title={part.title}
        embedUrl="about:blank"
        provider="google-slides"
        description={part.description}
      />
      <InfoBox title="Slides embedded">
        Slides will appear above once the embed URL is configured.
      </InfoBox>
    </>
  );
}

// ─── Generic fallback ─────────────────────────────────────────────────────

function GenericContent({ part }: { part: CoursePartMeta }) {
  return (
    <CalloutBox variant="info" title="Content coming soon">
      This lesson ({part.type}) is being prepared.
    </CalloutBox>
  );
}
