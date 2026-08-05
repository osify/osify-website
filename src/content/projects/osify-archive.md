---
title: The OSIFY Archive
summary: Thirteen years of writing across two WordPress blogs, extracted through the REST API and rebuilt as a static archive with every author, date and permalink preserved.
role: Design, migration, build
year: 2026
status: active
stack:
  - Astro
  - Vue 3
  - Tailwind CSS
  - Node
  - GitHub Pages
link: https://osify.com
order: 1
featured: true
---

osify.com and ask.osify.com ran on WordPress for thirteen years and accumulated
423 articles in English and Khmer. This project retires that hosting without
losing any of it.

Every article was pulled from the WordPress REST API rather than scraped, so
the original author, publish date, revision date and post id survive intact and
are printed on each page as a publication record. Images were deduplicated by
content hash — the extractor had copied the same photographs into as many as
seven post folders — then resized and converted to WebP, taking 524 MB down to
under 40 MB. Images that had never been hosted on either site, including a set
still living on the author's original Blogger account, were pulled down and
localised before they could disappear.

Old links keep working. Every legacy permalink resolves to its new home, and
ask.osify.com forwards to osify.com rather than going dark.
