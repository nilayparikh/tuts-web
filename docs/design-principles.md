# Design Principles & Guardrails

This document captures the design decisions, constraints, and guardrails for the LocalM tutorial template. All contributors (human or AI agent) must follow these rules.

---

## 1. Architecture Constraints

### Static-first

- **Output**: `next build` produces `output: 'export'` — pure static HTML/CSS/JS.
- **No server runtime**: No `getServerSideProps`, no API routes, no middleware.
- **No client-only hooks at page level**: `useRouter()`, `useSearchParams()` etc. break static export. Use only inside `useEffect` if absolutely necessary.
- **GitHub Pages compatible**: Trailing slashes enabled (`trailingSlash: true`), `unoptimized: true` for images.

### Single Package, Source-linked

- The framework (`@localm/tutorial-framework`) lives in the `_common/` git submodule (→ [`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common)).
- Source path: `_common/frontend/tutorial-framework/`.
- Next.js **transpiles it from source** via `transpilePackages` + Turbopack alias — no pre-build needed during development.
- The framework build (`tsup`) is only required for production builds and CI.
- See [`docs/common-submodule.md`](common-submodule.md) for the full submodule guide.

### Dev Workflow

- `scripts/run.ps1` is the single entry point. In dev mode it skips the framework build and type-check (both are deferred to the dev server / CI).
- The framework build is only triggered with `--Build` or `--Preview` flags.

---

## 2. Component Design Guardrails

### Framework-only Components

All UI is composed from `@localm/tutorial-framework` exports. **No custom components** should be created in `app/` except for site-specific data wrappers (e.g. `CourseStatsBar`).

### Forbidden Patterns

| Pattern                                              | Why                   | Alternative                                   |
| ---------------------------------------------------- | --------------------- | --------------------------------------------- |
| `<pre><code>` for code                               | Inconsistent styling  | `<CodeBlock>`                                 |
| `<div style={{ background: 'red' }}>`                | Violates token system | Use `--tf-*` CSS variables                    |
| Hardcoded hex/rgba colors                            | Theme-breaking        | `var(--tf-text-primary)`, `var(--tf-color-*)` |
| Bare pixel values for layout                         | Not scalable          | `rem` or `var(--tf-space-*)` tokens           |
| `letterSpacing: "0.06em"`                            | Inconsistent          | `var(--tf-tracking-wide)`                     |
| `transition: "all 0.15s ease"`                       | Inconsistent          | `var(--tf-transition-fast)`                   |
| `onMouseEnter` / `onMouseLeave` in Server Components | Next.js RSC error     | Mark component `"use client"` (see below)     |
| External icon libraries (lucide, etc.)               | Bundle bloat          | Material Symbols or inline SVG                |
| `!important` overrides on `.tf-*` classes            | Specificity war       | Override via CSS variables                    |

### Client Components ("use client")

Next.js App Router renders all components on the server by default. Any component
that uses browser APIs or JS event handlers (`onClick`, `onMouseEnter`, etc.) **must**
have `"use client"` as its first line.

Current `"use client"` components in `@localm/tutorial-framework`:

| Component        | Why                                                |
| ---------------- | -------------------------------------------------- |
| `GitHubRepoCard` | `onMouseEnter`/`onMouseLeave` hover lift animation |
| `MermaidDiagram` | Loads mermaid.js from CDN in a `useEffect`         |
| `PollBlock`      | Vote state with `useState`                         |
| `QuizBlock`      | Quiz state with `useState`                         |
| `QABlock`        | Accordion expand state                             |
| `CodePreview`    | Tab selection with `useState`                      |

**Rule:** Never add hover/click state via inline JS handlers on a component that
does not already have `"use client"`. Either use pure CSS (`:hover` via a class) or
add `"use client"` to the component file.

### Token System (`--tf-*` prefix)

All spacing, color, typography, and layout values use CSS custom properties prefixed with `--tf-`. Override only in `app/globals.css` `:root` scope.

Key token groups:

- **Color**: `--tf-color-primary`, `--tf-color-accent`, `--tf-color-success`, etc.
- **Text**: `--tf-text-primary`, `--tf-text-secondary`, `--tf-text-muted`
- **Spacing**: `--tf-space-1` through `--tf-space-16`
- **Typography**: `--tf-text-xs` through `--tf-text-4xl`, `--tf-font-display`, `--tf-font-body`, `--tf-font-mono`
- **Layout**: `--tf-content-width`, `--tf-narrow-width`, `--tf-header-height`
- **Radius**: `--tf-radius-sm`, `--tf-radius-md`, `--tf-radius-lg`, `--tf-radius-xl`, `--tf-radius-full`
- **Transitions**: `--tf-transition-fast`, `--tf-transition-default`

---

## 3. Layout Rules

### Footer — Slim Single Row

The footer is a single-row flex layout: `[Brand] [©] [Links] ← spacer → [Social Icons]`. It uses minimal vertical padding (`--tf-space-4`) and small icons (13px). No tagline is rendered in the footer — keep it lean.

### Sidebar — No Progress Tracking

The course sidebar shows:

- Course title (linked to course overview)
- Duration + lesson count
- Numbered lesson list with user-facing lesson-type labels

It does **not** show:

- Progress bars
- Completion checkmarks
- "X/Y completed" counters

Rationale: This is a static site — there's no backend to persist progress. Showing fake progress UI is misleading.

Visible lesson-type labels must be descriptive, not internal template jargon. Keep
course data `type` values for rendering only, and derive the displayed vocabulary
from real lesson assets. Example: show `Video + Code Examples` only when the
lesson actually includes supporting code examples; otherwise prefer `Video Lesson`.

### Lesson Header

Each lesson page shows a `LessonHeader` with:

- `PartTypeBadge` (user-facing lesson label + duration pill)
- Title (clamped to `40ch` max-width, responsive `clamp()` font size)
- Description (muted, `60ch` max-width)

No lesson numbers in the header — numbers appear in the sidebar only.

---

## 4. Sharing Model

### Page-level Sharing

Every page ends with `<ShareButtons>` supporting X (Twitter), LinkedIn, and Email. The component auto-resolves the current page URL client-side.

### Video-level Sharing

`<YouTubeEmbed showShare>` renders a compact share bar directly below the video with:

- X (Twitter) share link (with optional hashtags)
- LinkedIn share link
- Copy video URL button

This shares the **YouTube video URL**, not the page URL — enabling viewers to share the video directly.

### Placement Rules

1. Page-level `<ShareButtons>` always appears before `<TutorialNav>` at the bottom.
2. Video share bar appears directly below the YouTube embed (after caption).
3. Both use the same visual language (small buttons, muted text, compact).

---

## 5. SEO Requirements

Every page must export:

```tsx
export const metadata: Metadata = {
  title: "...", // ≤ 60 chars, unique
  description: "...", // ≤ 155 chars, compelling
  openGraph: {
    title: "...",
    description: "...",
    type: "article",
    publishedTime: "...", // ISO date
  },
};
```

The `HeroSection` must include 3–6 `tags` for keyword discoverability.

---

## 6. Responsive Design

The framework handles most responsive behavior via internal CSS classes:

- `.tf-concept-grid` collapses columns on mobile
- `.tf-course-player-sidebar` hides below 768px
- `.tf-step-card` stacks vertically

Site-specific responsive rules live in `app/globals.css`:

- `@media (max-width: 768px)` — hide lesson topbar center info
- `@media (max-width: 640px)` — collapse header nav, simplify stats bar
- `@media (min-width: 1600px)` — extra padding on wide screens

**Never use `!important`** to override framework responsive classes.

---

## 7. File Organization

```
app/
├── layout.tsx              # Root layout — TutorialGlobalStyles + fonts (DO NOT duplicate)
├── globals.css             # Site-specific CSS overrides only
├── page.tsx                # Topic home — lists all courses
├── components/             # Site-specific components (InstructorDetailCard)
├── [course]/
│   ├── page.tsx            # Dynamic course overview
│   └── [part]/
│       └── page.tsx        # Dynamic lesson pages
├── examples/page.tsx       # Code examples (aggregated)
├── privacy/page.tsx        # Privacy policy
└── terms/page.tsx          # Terms of use

config/
└── site.ts                 # Header/footer/nav configuration (single source of truth)

data/
└── courses/
    ├── types.ts            # Shared TypeScript interfaces
    ├── index.ts            # Course registry + SITE_TOPIC + helpers
    └── <slug>.ts           # One file per course (e.g. a2a.ts)
```

### Naming Conventions

- Route slugs: lowercase kebab-case (`qa-agent-vertex-ai`)
- Course slugs: short lowercase (`a2a`, `rag`, `mcp`)
- Component files: PascalCase (`InstructorDetailCard.tsx`)
- Config/data files: lowercase (`site.ts`, `a2a.ts`)
- CSS class names: BEM-style (`lesson-topbar__back`)

---

## 8. Performance Budget

- No external icon libraries (bundle → 0 extra KB)
- YouTube embeds use lazy-load thumbnails by default
- Fonts loaded via Google Fonts CDN with `display=swap`
- All images must use `loading="lazy"` unless above the fold
- Keep page-level JS minimal — most components are server-rendered RSC

---

## 9. Accessibility Baseline

- All `<nav>` elements have `aria-label`
- Current page links have `aria-current="page"`
- YouTube play buttons have `aria-label`
- Social icons have `aria-label`
- Share buttons have `aria-label`
- Color contrast follows WCAG 2.1 AA (via `--tf-*` token system)
- All interactive elements are keyboard-focusable

---

## 10. Agent Instructions Alignment

AI context is layered to avoid duplication:

| Layer                     | File                                                              | Scope                                                                  |
| ------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Agent**                 | `.github/agents/tutorial.agent.md`                                | Project structure, component catalogue, page patterns, workflow        |
| **Instructions**          | `.github/instructions/tutorial.instructions.md`                   | Auto-applied constraints for `app/**` (forbidden patterns, checklists) |
| **Framework constraints** | `_common/.github/instructions/tutorial-framework.instructions.md` | Auto-applied tech rules (static export, tokens, layout architecture)   |
| **Skill**                 | `.github/skills/working-with-common/SKILL.md`                     | On-demand `_common` submodule operations guide                         |
| **Prompts**               | `.github/prompts/*.prompt.md`                                     | Task-specific templates (create page, modify page, add lesson)         |

This document (`docs/design-principles.md`) is the **human-readable** counterpart that explains the **why** behind each rule. When rules conflict, the instruction files take precedence for file-level constraints; this document takes precedence for architectural decisions.
