# Public Brand Assets

Only files **actually referenced by app code** are copied here from `_brand/dist/localm/`.
The `_brand` submodule is the single source of truth — see `_brand/docs/BRAND_GUIDE.md`.

## Brand files (from `_brand/dist/localm/`)

| File                             | Referenced by                        |
| -------------------------------- | ------------------------------------ |
| `favicon-full-32.png`            | `layout.tsx` (icon 32×32)            |
| `icon-mark-gradient-64.png`      | `layout.tsx` (icon 64×64), `site.ts` |
| `icon-mark-gradient-180.png`     | `layout.tsx` (apple-touch-icon)      |
| `icon-mark-gradient-192.png`     | `manifest.webmanifest`               |
| `icon-mark-gradient-512.png`     | `manifest.webmanifest`               |
| `og-image-template-1200x630.png` | `layout.tsx` (OG/Twitter image)      |

## Site-specific files (not from `_brand`)

| File                  | Purpose          |
| --------------------- | ---------------- |
| `nilay_parikh.jpeg`   | Instructor photo |
| `profile-pic-512.png` | Profile picture  |

## Sync from `_brand`

```powershell
cd _brand
python scripts/generate_localm_brand_assets.py
cd ..

$needed = @(
  'favicon-full-32.png',
  'icon-mark-gradient-64.png',
  'icon-mark-gradient-180.png',
  'icon-mark-gradient-192.png',
  'icon-mark-gradient-512.png',
  'og-image-template-1200x630.png'
)
foreach ($f in $needed) {
  Copy-Item "_brand\dist\localm\$f" "public\brand\$f" -Force
}
```
