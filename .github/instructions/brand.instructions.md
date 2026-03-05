---
applyTo: "**"
---

# Brand Implementation Rules

Apply these rules when editing branding, metadata, visual identity, or public assets.

## Source of Truth

- Master source: `_brand/localm_tuts_brands.svg`
- Generated canonical assets: `_brand/dist/localm/`
- Brand guide: `_brand/docs/BRAND_GUIDE.md`
- **All brand documentation lives in `_brand/docs/`** — do not duplicate in `_tuts/docs/`.

## Rules

- Only copy files from `_brand/dist/localm/` that are **actually referenced** by app code (`layout.tsx`, `manifest.webmanifest`, `site.ts`).
- Brand files go directly into `public/brand/` — no `localm/` subfolder in `_tuts`.
- Do not dump the entire `_brand/dist/` into the consumer repo.
- Do not introduce ad-hoc brand colors; use values from `_brand/docs/BRAND_GUIDE.md`.
- Do not stretch, skew, recolor, or add custom effects to logos.
- For app metadata (`app/layout.tsx`): ensure icon, apple-touch-icon, favicon, and OG image use canonical brand files.

## Currently used brand files

```
public/brand/
  favicon-full-32.png              ← layout.tsx (icon 32×32)
  icon-mark-gradient-64.png        ← layout.tsx (icon 64×64), site.ts (logoUrl)
  icon-mark-gradient-180.png       ← layout.tsx (apple-touch-icon)
  icon-mark-gradient-192.png       ← manifest.webmanifest
  icon-mark-gradient-512.png       ← manifest.webmanifest
  og-image-template-1200x630.png   ← layout.tsx (OG/Twitter)
  nilay_parikh.jpeg                ← site-specific (instructor photo)
  profile-pic-512.png              ← site-specific (profile picture)
```

## When Brand Changes

1. Edit master source in `_brand/`.
2. Run `python _brand/scripts/generate_localm_brand_assets.py`.
3. Copy only the needed files: see `public/brand/README.md` for the sync script.
4. Commit both `_brand` submodule pointer and updated `public/brand/` files.
