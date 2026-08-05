---
title: JasperReport – Place Subreport as Last Page(s)
date: "2015-01-10T23:29:00"
modified: "2015-01-10T23:29:00"
author: osify
categories:
  - Reporting
tags:
  - iReport
  - Jasper Report
lang: en
excerpt: "You have a main report and you want to print a last page from a subreport you created. Here is my solution that works for me. On the main report’s properties, ticked following attributes: Summary on a new page Summary…"
origin:
  site: ask
  id: 647
  url: https://ask.osify.com/qa/647
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/647
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

You have a main report and you want to print a last page from a subreport you created. Here is my solution that works for me.

**On the main report’s properties, ticked following attributes:**

- Summary on a new page
- Summary with Page Header and Footer (*If you want to print)*

And then, on your main report, enable Summary band to add the subreport, you will get it print at the last page.

[![ireport-last-page-subreport-newpage-ask-osify](/media/32/32cd92b61b2c-ireport-last-page-subreport-newpage-ask-osify.webp)](/media/32/32cd92b61b2c-ireport-last-page-subreport-newpage-ask-osify.webp)
