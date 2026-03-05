# Prompt: Apply LocalM Brand System

Use this prompt when you need to apply consistent LocalM™ Tuts branding across code, docs, and assets.

## Inputs

- Current repository files
- `_brand/localm_tuts_brands.svg`
- `_brand/docs/BRAND_GUIDE.md`

## Required Actions

1. Ensure canonical assets exist in `_brand/dist/localm/`.
2. Copy **only the files actually referenced by app code** into `public/brand/` (flat, no subfolder).
3. Update metadata/icon references in `app/layout.tsx`.
4. Update site-level logo references in `config/site.ts`.
5. Keep `_brand/docs/` as the single source of truth for all brand documentation.
6. Do **not** duplicate brand docs in `_tuts/docs/` — use pointers only.

## Output Checklist

- [ ] Only referenced brand PNGs present in `public/brand/`
- [ ] Metadata icon paths valid (no `localm/` subfolder)
- [ ] `_brand/docs/BRAND_GUIDE.md` is current
- [ ] `.github/instructions/brand.instructions.md` aligned
- [ ] No hardcoded off-brand colors introduced
