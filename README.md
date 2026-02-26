# Agentic AI — Tutorial Site

A multi-course tutorial website built with the [LocalM Tutorial Framework](https://github.com/nilayparikh). Each site covers a single **topic** (e.g. Agentic AI) and hosts one or more **courses** under that topic.

**Live site**: [nilayparikh.github.io/\_tuts/](https://nilayparikh.github.io/_tuts/)

## Quick Start

```powershell
git clone --recurse-submodules https://github.com/nilayparikh/_tuts.git
cd _tuts
./scripts/run.ps1
```

Or manually:

```bash
git clone --recurse-submodules https://github.com/nilayparikh/_tuts.git
cd _tuts
npm install
npm run dev          # → http://localhost:3000
```

## What This Site Provides

- **Topic home page** (`/`) — hero, course catalogue, instructor card
- **Course overview pages** (`/[course]/`) — hero, lesson list, instructor card
- **Lesson pages** (`/[course]/[part]/`) — sidebar navigation + content by type
- **8 part types** — video, video-code, reading, quiz, article, podcast, slideshow, lab
- **Static export** — deploys to GitHub Pages with zero server
- **Dark theme** — design-token-based, fully customizable

## Structure

```
_common/                     # Git submodule → nilayparikh/_tuts_common
├── frontend/
│   └── tutorial-framework/  # @localm/tutorial-framework (40+ components)
├── .github/                 # Shared agent configs, instructions, skills
└── docs/                    # Framework documentation

app/
├── layout.tsx               # Root layout
├── page.tsx                 # Topic home — lists all courses
├── globals.css              # Theme overrides
├── components/              # Site-specific UI (InstructorDetailCard)
├── [course]/
│   ├── page.tsx             # Course overview (dynamic)
│   └── [part]/
│       └── page.tsx         # Lesson pages (dynamic)
├── examples/page.tsx        # Code examples (aggregated from all courses)
├── privacy/page.tsx         # Privacy policy
└── terms/page.tsx           # Terms of use

config/site.ts               # Site name, nav, social links
data/
├── courses/
│   ├── types.ts             # Shared TypeScript interfaces
│   ├── index.ts             # Course registry + helpers
│   └── a2a.ts               # A2A course data (first course)
scripts/
├── run.ps1                  # Dev launcher
└── sync-common.ps1          # Sync _common submodule
docs/                        # Site documentation
.github/
├── agents/                  # Copilot agent definitions
├── instructions/            # AI coding rules (auto-applied)
├── prompts/                 # Reusable prompt templates
├── skills/                  # Copilot agent skills
└── workflows/               # GitHub Actions (deploy)
```

## Route Architecture

| Route               | Page                     | Data source              |
| ------------------- | ------------------------ | ------------------------ |
| `/`                 | Topic home (course list) | `data/courses/index.ts`  |
| `/[course]/`        | Course overview          | `data/courses/<slug>.ts` |
| `/[course]/[part]/` | Lesson page              | Course `parts[]` array   |
| `/examples/`        | Code examples            | All courses aggregated   |

## The `_common` Submodule

The shared component library (`@localm/tutorial-framework`) and AI agent configurations live in [`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common), included as a git submodule at `_common/`.

- **Always clone with submodules**: `git clone --recurse-submodules <url>`
- **Sync updates**: `./scripts/sync-common.ps1`
- **Full guide**: [`docs/_common-submodule.md`](docs/_common-submodule.md)

## Adding a New Course

1. Create `data/courses/<slug>.ts` exporting a `CourseDefinition`
2. Import it in `data/courses/index.ts` and add to `ALL_COURSES`
3. The site automatically generates pages at `/<slug>/` and `/<slug>/<part>/`
4. Run `npm run build` to verify

## Create Your Own Tutorial Site

1. Fork this repo (or "Use this template"), then `git submodule update --init --recursive`
2. Edit `data/courses/index.ts` — update `SITE_TOPIC` for your topic
3. Create course data files under `data/courses/`
4. Edit `config/site.ts` with your branding
5. `npm run build` → deploy `out/` to GitHub Pages

See [`docs/README.md`](docs/README.md) for the full guide.

## Deployment

```bash
npm run build      # → out/ directory
npx serve out      # Preview locally
```

For GitHub Actions CI/CD, see [`docs/deployment.md`](docs/deployment.md).

## Tech Stack

| Layer      | Technology                       |
| ---------- | -------------------------------- |
| Framework  | Next.js 15 (App Router)          |
| Components | `@localm/tutorial-framework`     |
| Language   | TypeScript (strict)              |
| Output     | Static HTML (`output: 'export'`) |
| Hosting    | GitHub Pages                     |

## License

© 2026 LocalM™. All rights reserved.
