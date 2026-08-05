---
title: iText can render for Khmer Unicode
date: "2014-11-27T16:37:26"
modified: "2015-12-30T18:18:14"
author: osify
categories:
  - Khmer Unicode
tags:
  - iText
  - Khmer
  - Khmer unicode
lang: en
excerpt: I just implement to put the render of Khmer Unicode in iText 5.5.4-SNAPSHOT and try, I could produce the PDF with the right display as following image. iText is a core pdf writer in most of the opensource library for…
origin:
  site: ask
  id: 613
  url: https://ask.osify.com/qa/613
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/613
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

I just implement to put the render of Khmer Unicode in iText 5.5.4-SNAPSHOT and try, I could produce the PDF with the right display as following image.

iText is a core pdf writer in most of the opensource library for outputting report or rendering text but unfortunately, it’s not working with Khmer Unicode as I stated previously in my [post](http://ask.osify.com/qa/287 "iText supports Khmer Unicode issue").
[![itext-with-khmer-render-start](/media/62/624c319c3810-itext-with-khmer-render-start.webp)](/media/62/624c319c3810-itext-with-khmer-render-start.webp)

It’s just only the initial work and not yet done and sure that it’s fully working fine yet.

**Remark**: I have read: <http://www.redlab.be/blog/2011/developer-guide/>

And I have tried:

```java
itext/src/main/java/com/itextpdf/text/pdf/TrueTypeFont.java
itext/src/main/java/com/itextpdf/text/pdf/languages/khmer
itext/src/main/java/com/itextpdf/text/pdf/languages/khmer/UnicodeRender.java
itext/src/main/java/com/itextpdf/text/pdf/languages/khmer/UnicodeUtil.java
itext/src/main/java/com/itextpdf/text/pdf/languages/KhmerLigaturizer.java
```

**Update:**

There won’t be an easy task to integrate the latest iText (5.x) version to some opensource product such as JasperReport to test Khmer render since they are still using very old version 2.1.7.

One more remark on iText product about its revolution since version 2.1.7, 4.2.0 to 5.x:

- [Difference between lowagie and iText](http://stackoverflow.com/questions/13515210/difference-between-lowagie-and-itext)

Source Code

- Sample Project with the Jar: <https://github.com/osify/iTextKhmerSample> (you can take the iText jar for that purpose, I do not have enough time to manage full source of the modification yet)
