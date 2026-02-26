---
agent: _tuts_agent
description: Add a new lesson or part to the course
---

# Add Lesson

## Lesson details

${input:title:Lesson title — e.g. "Building Your First Agent"}
${input:type:Part type — article | video | quiz | qa | podcast | slideshow}
${input:description:Short description of what this lesson covers}

---

## Workflow

1. **Read `data/courses/index.ts`** to see which courses exist, then **read the relevant course file** (e.g. `data/courses/a2a.ts`) to find the correct insertion point.
2. **Add a new entry** to the `parts` array in the course file with:
   - `slug` — kebab-case, unique within the course
   - `title` — from input above
   - `type` — from input above
   - `duration` — estimated (e.g. `"5 min read"`, `"12:34"`)
   - `description` — from input above
   - Type-specific fields (e.g. `videoId` for video, `gistId` for article)
3. **Check `app/[course]/[part]/page.tsx`** — this is the dynamic route that renders all parts. If you're adding a new _type_ of content not yet handled, update the rendering logic there.
4. **Verify** the new lesson is reachable and the build passes.

## Required fields by part type

| Type        | Required fields                                     |
| ----------- | --------------------------------------------------- |
| `video`     | `slug`, `title`, `type`, `duration`, `videoId`      |
| `article`   | `slug`, `title`, `type`, `duration`, `description`  |
| `quiz`      | `slug`, `title`, `type`, `questions[]`              |
| `qa`        | `slug`, `title`, `type`, `questions[]`              |
| `podcast`   | `slug`, `title`, `type`, `duration`, `podcastUrl`   |
| `slideshow` | `slug`, `title`, `type`, `duration`, `slideshowUrl` |

> Match the actual `CoursePartMeta` type definition in `data/courses/types.ts` — check it before adding.

## Guardrails

- **Never duplicate slugs** — check existing parts within the course first.
- **Ordering matters** — insert at the correct position for the learning flow.
- **Use `CoursePlayerLayout`** for the wrapping layout (not `TutorialLayout`).
- **All internal links include the course prefix** — `/${courseSlug}/${partSlug}/`.
- **Static export safe** — no `useRouter`, no `getServerSideProps`, no `fetch` in render.
- **Run `get_errors`** on modified files, then `npm run build` to verify.
