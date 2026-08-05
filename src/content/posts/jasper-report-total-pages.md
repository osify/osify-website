---
title: "Jasper Report: Total Pages"
date: "2019-10-30T00:56:58"
modified: "2019-10-30T00:58:55"
author: osify
categories:
  - Java
  - Reporting
tags:
  - iReport
  - Jasper Report
  - Java
  - Reporting Tips
lang: en
excerpt: "To have total pages, you can do two options: To display total pages using Evaluation Time: Report On view using $V{PAGENUMER} flexible using evaluation time: current page with “Now”, total page with “Report” Create a…"
origin:
  site: ask
  id: 11177
  url: https://ask.osify.com/qa/11177
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11177
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

To have total pages, you can do two options:

![](/media/e9/e9737466ad3b-image.webp)

*To display total pages using Evaluation Time: Report*

1. On view using $V{PAGE_NUMER} flexible using evaluation time: current page with “Now”, total page with “Report”
2. Create a variable for total page
   1. Name: **TOTAL_PAGES** (or any other)
   2. Variable class: **Integer**
   3. Calculation: **highest**
   4. Reset type: **report**
   5. Increment type: **page**
   6. Variable expression: **${PAGE_NUMBER}**

![](/media/19/19560dd62ed7-image-1.webp)

Then you can use on report in the field.

**Known Issues:**

- When using with Print Expression, it won’t do pre-calculate
