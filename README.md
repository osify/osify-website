# osify.com

The merged archive of **osify.com** and **ask.osify.com**, rebuilt as a static
site and served from GitHub Pages.

423 articles published between 2008 and 2021, in English and Khmer, with every
original author, publish date and permalink preserved.

| | |
|---|---|
| Framework | Astro 5 (static output) |
| Interactive islands | Vue 3 — command-K search, archive filtering, theme toggle |
| Styling | Tailwind CSS v4 |
| Type | Kantumruy Pro (self-hosted, Khmer + Latin in one variable family) |
| Hosting | GitHub Pages at the apex domain `osify.com` |

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve dist/ locally
```

## Writing

Articles are Markdown files in `src/content/posts/`. The filename is the URL
slug, so `src/content/posts/my-article.md` publishes at `/posts/my-article/`.

**Slugs are ASCII only** — an English slug where the title has one, otherwise the
original numeric post id. Khmer never appears in a URL.

```markdown
---
title: Your title, Khmer or English
date: "2026-01-15T09:00:00"
modified: "2026-01-15T09:00:00"
author: osify
categories:
  - How-To
tags:
  - Khmer
  - Tips
lang: km            # "km" or "en" — drives line-height and font preloading
excerpt: One or two sentences shown in listings and search results.
origin:             # provenance; for new articles point it at this site
  site: osify
  id: 90001
  url: https://osify.com/posts/your-slug/
  host: osify.com
legacyUrls: []
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Your article body.
```

Set `draft: true` to keep something out of the build. Drafts are still visible
in `npm run dev`.

Portfolio entries live in `src/content/projects/` — copy `_template.md` and drop
the `draft: true` line. The author roster is `src/data/authors.json`.

Images go in `public/media/` and are referenced with an absolute path
(`/media/...`).

## Re-running the migration

The migration is idempotent and only needs re-running if the source archive at
`../ask-osify/data` changes. **It rewrites `src/content/posts/` from scratch**,
so hand-edits to migrated articles will be lost.

```bash
npm run migrate:all      # media -> external images -> articles, in that order
```

Individually:

| Command | What it does |
|---|---|
| `npm run migrate:media` | Deduplicates media by content hash, resizes to 1600px, converts to WebP, writes `.migration/media-map.json` |
| `npm run migrate:external` | Downloads images the articles referenced on remote hosts (old Blogger account, Jetpack Photon) and folds them into the same store |
| `npm run migrate` | Converts articles, strips WordPress share widgets, rewrites media paths, records redirects |
| `npm run migrate:fonts` | Re-downloads and self-hosts Kantumruy Pro |

What the migration does to the source material:

- **Preserves** author, publish date, modified date, original post id and
  original URL on every article, verbatim. These are printed on each page as a
  publication record.
- **Strips** the trailing Jetpack "Share this:" widgets (all 424 articles had
  one) and stray C1 control bytes left by an old encoding mishap.
- **Merges duplicates**: articles with matching normalised titles collapse into
  the newest copy; the older ones become redirects and are listed in
  `mergedFrom`.
- **Deduplicates media**: the extractor had copied the same images into up to
  seven post folders. 1,731 files / 524 MB becomes 1,459 unique images / 37 MB.
- **Rescues remote images** that were never hosted on either site, and repoints
  "click for full size" wrapper links at the local copy.

One image (`facebook-login-history-log.png`) 404s on the source server and shows
a placeholder. Around 40 third-party images remain hotlinked because their hosts
are gone — no osify-owned image is hotlinked.

## URLs and redirects

| Type | Pattern |
|---|---|
| Article | `/posts/<slug>/` |
| Archive | `/archive/` (with `#y2012` year anchors) |
| Topics | `/topics/`, `/topics/<tag>/`, `/categories/<category>/` |
| Authors | `/authors/<author>/` |
| Portfolio | `/work/` |
| Feeds | `/rss.xml`, `/sitemap-index.xml`, `/search-index.json` |

Legacy `osify.com/YYYY/MM/<slug>/` permalinks are generated as redirect stubs by
`src/pages/[...legacy].astro` and are excluded from the sitemap.

### ask.osify.com

GitHub Pages binds **one custom domain per repository** — the domain comes from
the single `CNAME` file at the site root — so `ask.osify.com` cannot be served
from this repo. It gets its own repository and its own working directory,
generated as a sibling folder rather than a nested one (git will not usefully
track a repository inside a repository):

```bash
node scripts/build-ask-redirects.mjs            # -> ../ask-osify-redirect/
node scripts/build-ask-redirects.mjs --out DIR  # somewhere else
```

Regenerating replaces the generated files but preserves `.git`, so the redirect
repo keeps its history. Commit and push from that directory, enable Pages
(branch `main`, folder `/`), then point a DNS CNAME for `ask.osify.com` at
`<owner>.github.io`. All 216 `/qa/<id>` URLs forward to their article on
osify.com; anything unmapped lands on `/archive/`.

Do not remove the `ask.osify.com` DNS record until that site is live, or those
216 URLs break.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Enable Pages with **Source: GitHub Actions** in the
repository settings.

`public/CNAME` holds `osify.com`. Point DNS at GitHub:

```
A     osify.com    185.199.108.153
A     osify.com    185.199.109.153
A     osify.com    185.199.110.153
A     osify.com    185.199.111.153
CNAME www          <owner>.github.io
```

Wait for the certificate to issue, then enable **Enforce HTTPS**.

## Project layout

```
src/
├── components/          Astro components
│   └── vue/             Vue 3 islands (search, archive filter, theme)
├── content/
│   ├── posts/           423 migrated articles
│   └── projects/        Portfolio entries
├── data/authors.json    Author roster
├── layouts/
├── lib/                 Query helpers and site config
├── pages/
└── styles/
scripts/                 Migration tooling
public/
├── media/               Deduplicated, optimised images
├── fonts/               Self-hosted Kantumruy Pro
└── CNAME                osify.com
```

Sibling directory, its own repository:

```
../ask-osify-redirect/   Generated redirect site for ask.osify.com
```
