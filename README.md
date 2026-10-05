# Garavaglia

Astro rebuild of [garavaglia.eu](https://www.garavaglia.eu) (WordPress/Avada → Astro). Italian + English static site.

## Stack

- [Astro](https://astro.build) 5
- Tailwind CSS 4 (Vite plugin)
- Content collections for case studies / areas / galleries
- Deploy: [Cloudflare Pages](https://developers.cloudflare.com/pages/) (`.github/workflows/deploy.yml`)

## Commands

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm install`        | Install dependencies                        |
| `npm run dev`        | Dev server at `localhost:4321`              |
| `npm run build`      | Production build to `./dist/`               |
| `npm run preview`    | Preview the production build locally        |
| `npm run pages:deploy` | Build + deploy `dist` to Cloudflare Pages |

## Contact form

Contattaci posts via [FormSubmit](https://formsubmit.co) AJAX to `info@garavaglia.eu` (same inbox as the old CF7 form).

**First submit:** FormSubmit emails that address a one-time activation link — confirm it, then messages deliver normally.

Newsletter still posts to MagNews / EmailSP (`c2i7f.emailsp.net`), same as WordPress.

## Deploy (Cloudflare Pages)

Static site — **no** `@astrojs/cloudflare` adapter. Build output is `dist`.

### Option A — GitHub Actions (already wired)

1. Create a Cloudflare API token: [API Tokens](https://dash.cloudflare.com/profile/api-tokens) → **Edit Cloudflare Workers** (includes Pages).
2. In the GitHub repo → Settings → Secrets and variables → Actions, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID` (Workers & Pages overview, right sidebar)
3. In the Cloudflare dashboard, create a Pages project named **`garavaglia`** (Workers & Pages → Create → Pages), or let the first `wrangler pages deploy` create it.
4. Push to `main` (or run the workflow manually). Site will be at `https://garavaglia.pages.dev`.

### Option B — Cloudflare dashboard (Git connected)

1. Workers & Pages → Create → Pages → Import repository.
2. Settings:

   | Field                 | Value            |
   | --------------------- | ---------------- |
   | Production branch     | `main`           |
   | Framework preset      | Astro            |
   | Build command         | `npm run build`  |
   | Build output directory| `dist`           |

3. If you use Option B, you can delete or disable `.github/workflows/deploy.yml` to avoid double deploys.

### Custom domain

Pages project → Custom domains → add `www.garavaglia.eu` (and apex if needed). Point DNS to Cloudflare (or follow the CNAME they show).

`astro.config.mjs` `site` and `public/robots.txt` already use `https://www.garavaglia.eu`.

### Local deploy

```sh
npx wrangler login
npm run pages:deploy
```

## Project layout

```text
src/
  components/   Page sections (hero, galleries, forms, …)
  content/      Markdown collections (case studies, areas, galleries)
  data/         Typed page copy
  i18n/         Locale routes + UI strings
  layouts/      Shell layouts
  pages/        File-based routes (IT root, EN under /en/)
  scripts/      Client motion (reveal, parallax)
  styles/       Global tokens + utilities
public/         Images, favicon, robots.txt, _headers
```
