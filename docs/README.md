# LocalM Tutorial Site — Docs

This is a **multi-course tutorial site** for a single topic (e.g. "Agentic AI"). Each topic site hosts one or more courses, each with its own overview page and lesson pages.

## Quick Start

```powershell
# Clone (with submodules!) and run
git clone --recurse-submodules https://github.com/your-org/your-tutorial.git
cd your-tutorial
./scripts/run.ps1
```

Or step-by-step:

```bash
git clone --recurse-submodules https://github.com/your-org/your-tutorial.git
cd your-tutorial
npm install
npm run dev          # → http://localhost:3000
```

> **Important**: Always clone with `--recurse-submodules`. The `_common/` directory is a git submodule containing the shared component library.

## Architecture

```
_tuts/                           # ← Your forked repo
├── _common/                     # Git submodule → nilayparikh/_tuts_common
│   ├── frontend/
│   │   └── tutorial-framework/  # @localm/tutorial-framework (source)
│   ├── .github/                 # Shared agent configs, instructions, skills
│   └── docs/                    # Framework documentation
├── app/
│   ├── layout.tsx               # Root layout (global styles, fonts)
│   ├── page.tsx                 # Topic home — lists all courses
│   ├── globals.css              # Token overrides
│   ├── components/              # Site-specific components (InstructorDetailCard)
│   ├── [course]/
│   │   ├── page.tsx             # Course overview (dynamic route)
│   │   └── [part]/
│   │       └── page.tsx         # Lesson page (dynamic route)
│   ├── examples/page.tsx        # Code examples aggregated from all courses
│   ├── privacy/page.tsx         # Privacy policy
│   └── terms/page.tsx           # Terms of use
├── config/
│   └── site.ts                  # Header, footer, nav links, social URLs
├── data/
│   └── courses/
│       ├── types.ts             # Shared TypeScript interfaces
│       ├── index.ts             # Course registry, SITE_TOPIC, helper functions
│       └── <slug>.ts            # One file per course (e.g. a2a.ts)
├── .github/
│   ├── agents/                  # Copilot agent definitions
│   ├── instructions/            # AI coding rules (auto-applied)
│   ├── prompts/                 # Reusable prompt templates
│   ├── skills/                  # Copilot agent skills
│   └── workflows/               # GitHub Actions (deploy to Pages)
├── scripts/
│   ├── run.ps1                  # One-command dev launcher
│   └── sync-common.ps1          # Pull latest _common submodule
├── docs/                        # This directory
├── next.config.ts               # Static export + framework alias config
└── package.json
```

## Route Structure

| Route               | Page                     | Source                          |
| ------------------- | ------------------------ | ------------------------------- |
| `/`                 | Topic home (course list) | `SITE_TOPIC` + `ALL_COURSES`    |
| `/[course]/`        | Course overview           | `findCourse(slug)`             |
| `/[course]/[part]/` | Lesson page               | `findCoursePart(course, part)` |
| `/examples/`        | Code examples             | `ALL_COURSES` (aggregated)     |

## The `_common` Submodule

The shared component library and AI agent configurations live in a separate repository ([`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common)) and are included as a git submodule at `_common/`.

See [\_common-submodule.md](_common-submodule.md) for the full guide on how `_common` works, when to edit it, and how to sync updates.

## How to Create Your Own Tutorial Site

### 1. Fork this template

Use the GitHub "Use this template" button or:

```bash
gh repo create my-tutorial --template nilayparikh/_tuts
cd my-tutorial
git submodule update --init --recursive
```

### 2. Configure your topic

Edit `data/courses/index.ts`:

```typescript
export const SITE_TOPIC: SiteTopicConfig = {
  topicName: "My Topic",
  tagline: "Short tagline for the hero section",
  description: "Fuller description of this tutorial site.",
  tags: ["Tag1", "Tag2", "Tag3"],
  courses: ALL_COURSES,
};
```

### 3. Create course data

Create a file at `data/courses/<slug>.ts`:

```typescript
import type { CourseDefinition } from "./types";

export const MY_COURSE: CourseDefinition = {
  slug: "my-course",
  title: "My Course Title",
  description: "What learners will build.",
  totalDuration: "~45 mins",
  tags: ["Topic1", "Topic2"],
  githubUrl: "https://github.com/you/repo",
  icon: "🚀",
  parts: [
    {
      slug: "intro",
      title: "Introduction",
      type: "video",
      duration: "5 mins",
      videoId: "youtube-video-id",
      description: "Welcome to the course.",
      objectives: ["Understand X", "Learn Y"],
    },
    // ... more parts
  ],
};
```

Then register it in `data/courses/index.ts`:

```typescript
import { MY_COURSE } from "./my-course";

export const ALL_COURSES: CourseDefinition[] = [MY_COURSE];
```

### 4. Update site config

Edit `config/site.ts` — change site name, GitHub URL, social links.

### 5. Customize theme (optional)

Override tokens in `app/globals.css`:

```css
:root {
  --tf-color-primary: #7c3aed;
}
```

### 6. Build and deploy

```bash
npm run build        # Generates out/ with static HTML
```

## Adding a New Course to an Existing Site

1. Create `data/courses/<slug>.ts` with a `CourseDefinition` export
2. Import it in `data/courses/index.ts` and append to `ALL_COURSES`
3. The site automatically generates:
   - `/<slug>/` — course overview page
   - `/<slug>/<part>/` — lesson pages for all parts
4. Run `npm run build` to verify all routes generate

## Data Layer Reference

### `data/courses/types.ts`

Shared interfaces used across all course files:

- `CourseDefinition` — slug, title, description, totalDuration, tags, githubUrl, icon, parts
- `CoursePartMeta` — extends `CoursePart` with videoId, description, objectives, qa, quizQuestions, codeUrl, readingUrl, tags
- `SiteTopicConfig` — topicName, tagline, description, tags, courses
- `PartQA`, `PartQuizQuestion` — nested types for content

### `data/courses/index.ts`

Central registry and helper functions:

| Export                 | Type                        | Purpose                                        |
| ---------------------- | --------------------------- | ---------------------------------------------- |
| `ALL_COURSES`          | `CourseDefinition[]`        | All courses in display order                   |
| `SITE_TOPIC`           | `SiteTopicConfig`           | Topic-level metadata for the home page         |
| `ALL_COURSE_SLUGS`     | `string[]`                  | All course slugs (for `generateStaticParams`)  |
| `findCourse(slug)`     | `CourseDefinition \| undef` | Look up a course by slug                       |
| `findCoursePart(c, p)` | `CoursePartMeta \| undef`   | Look up a part within a course                 |
| `getAdjacentParts(c,p)`| `{prev, next}`              | Prev/next parts for navigation                 |
| `allCoursePartParams()`| `{course, part}[]`          | All course+part combos for static generation   |

## Part Types

Each lesson in a course has a `type` that controls how it renders:

| Type         | Renders                              | Required Fields      |
| ------------ | ------------------------------------ | -------------------- |
| `video`      | YouTube embed + objectives + Q&A     | `videoId`            |
| `video-code` | Video + code link + objectives + Q&A | `videoId`, `codeUrl` |
| `reading`    | Resource list + reading link         | `readingUrl`         |
| `quiz`       | Interactive graded quiz              | `quizQuestions`      |
| `article`    | Long-form article block              | `objectives`         |
| `podcast`    | Audio player embed                   | —                    |
| `slideshow`  | Slide deck embed                     | —                    |

## Documentation Index

| Document                                      | Content                                    |
| --------------------------------------------- | ------------------------------------------ |
| [README.md](README.md)                        | This file — overview + quick start         |
| [\_common-submodule.md](_common-submodule.md) | How the `_common` submodule works          |
| [design-principles.md](design-principles.md)  | Architecture, component rules, guardrails  |
| [deployment.md](deployment.md)                | GitHub Pages deployment guide              |
| [`_common/docs/`](../_common/docs/README.md)  | Framework library + AI agent documentation |

## GitHub Pages Deployment

See [deployment.md](deployment.md) for the full CI/CD setup.

## Updating the Framework

The component library lives in the `_common/` git submodule (→ `nilayparikh/_tuts_common`). To pull the latest changes:

```powershell
./scripts/sync-common.ps1
git add _common
git commit -m "chore: update _common submodule"
```

See [\_common-submodule.md](_common-submodule.md) for the full guide.

## Scripts

| Script                    | Purpose                                 |
| ------------------------- | --------------------------------------- |
| `scripts/run.ps1`         | Install deps + start dev server         |
| `scripts/sync-common.ps1` | Pull latest `_common` submodule changes |
