---
title: "Jasper Report: Print Column Footer only at the last page"
date: "2019-11-01T00:39:40"
modified: "2019-11-01T13:00:02"
author: osify
categories:
  - How-To
  - Java
  - Reporting
tags:
  - iReport
  - Jasper Report
  - Java
  - Reporting
  - Reporting Tips
lang: en
excerpt: Report designer mostly said it’s depended on the way you design the report, of course, it does but for some new or even some years report designers still need example, tips to help too. Here, I take this kind of…
featuredImage: /media/22/22fbd95e0a50-image-2.webp
origin:
  site: ask
  id: 11187
  url: https://ask.osify.com/qa/11187
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11187
mergedFrom: []
mediaCount: 6
featured: false
draft: false
---

Report designer mostly said it’s depended on the way you design the report, of course, it does but for some new or even some years report designers still need example, tips to help too.

Here, I take this kind of issue/solution that finally I could make it: ***“printing a signature footnote to the last table of the report***” which is very common issue in most of report design, right?

Without going on, do you have any suggestion?

My case in short, I solved it by using “**Column footer**” band which is suppose to print it on every page at the end of the detail printed block.

To achieve this, at first, you need to understand the role of each band of the report design, what are they for? So, please check that first and I cannot explain each one here yet.

![](/media/22/22fbd95e0a50-image-2.webp)

**Solution so far:**

1. You can use Summary block
2. You can play with Detail block to print the last page (*also can do with below solution*)
3. Use Column footer band to print the last page
4. Use Last Page Footer, can do easier but it will always print to the bottom of the page that will free a lot of space above it in some cases

My case, I cannot use ***Summary*** block as I need to printout some graphic so I did it with ***Column footer*** which I think much right for me as it will automatically manage its block to the bottom of each page so we just manage to allow it to print only the last page only.

***A. Make column footer*** to be able floating next to the last content of the detail block by click on the report, on the right tick “*Floating Column Footer*“

![](/media/e2/e2e4f00e76ed-image.webp)

Or via XML code, main report block add attribute: `isFloatColumnFooter="true"`

![](/media/af/af716cc9f68c-image-1.webp)

***B. Create a variable*** to identify current page number: `$V{CURRENT_PAGE}`

- Variable name: `CURRENT_PAGE`
- Value Class Name: `java.lang.Integer` (Integer)
- Calculation: `No Calculation Function`
- Expression: `$V{PAGE_NUMBER}`
- Initial Value Express: *Blank*
- Increment type: `Page`
- Reset type: `Page`

![](/media/95/95ab922b20b2-image-2-2.webp)

***C. You may try to manage the print expression*** on the block, I can tell you it won’t work as the variable that we created won’t calculate itself before its render, so don’t try on Print Expression as: `$V{CURRENT_PAGE}.equals($V{PAGE_NUMBER})`

***D. To do it on each textfield*** as it has `Evaluation time` to handle the variable calculation, in our case, we need to place the textfield and manage how the text will display on Text field’s expression as example:

1. Expression: `$V{CURRENT_PAGE}.equals($V{PAGE_NUMBER}-1) ? "Signature":""` (I minus 1 as I skip a page, Summary)
2. Evaluation time set to `Auto`
3. On textfield’s appearance, tick `Remove Line When Blank`

You have to do that for all textfields you want to display on the block, result will be as expected.

![](/media/30/307e80317655-image-3.webp)

Let’s me know if this would help you.

**Remark on Environment:** I am doing it on

- Windows 10 Pro
- Jasper Report Studio 6.10.0 (and I think other lower version also the same either on iReport)
- Java 12 (also OK with Java 8)
