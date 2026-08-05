---
title: Jasper Report is now Supported Khmer Unicode to Pdf
date: "2017-05-10T15:07:46"
modified: "2017-05-10T15:07:46"
author: osify
categories:
  - Khmer Unicode
  - Reporting
tags:
  - iReport
  - Jasper Report
  - Java
  - Khmer unicode
  - Tips
  - Unicode
lang: en
excerpt: Thanks for another question on StackOverflow and the answer of user dada67, told us that Jasper added Khmer Unicode supports since version 6.2. I tested now on JasperReport 6.3 library with its existing sample in…
origin:
  site: ask
  id: 868
  url: https://ask.osify.com/qa/868
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/868
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

Thanks for another question on [StackOverflow](http://stackoverflow.com/questions/43750736/jasper-reports-cambodian-khmer-and-laotian-language/43868037) and the answer of user [dada67](http://stackoverflow.com/questions/43750736/jasper-reports-cambodian-khmer-and-laotian-language/43868037?noredirect=1#comment74791921_43868037), told us that Jasper added Khmer Unicode supports since version 6.2.

I tested now on JasperReport 6.3 library with its existing sample in folder:

> jasperreports-6.3.0\demo\samples\unicode

And now I could see it’s working good enough for Khmer rendering, just still one issue:

> When we mix between Khmer text and English text together but the issue is only when it displays on Pdf, with other formats are fine now.

But I believe we still have a workaround to solve that kind of issue that we need to go deep into detail later.

Here is my tested result:

![](/media/83/83b9e96d4de2-jasperreport-6-3-khmer-unicode-working.webp)

#### How to setup the testing demo

After you finished building the jasperreport library, you need to make sure that your Apache Ant has already the library of [Apache Ivy](http://ant.apache.org/ivy/download.cgi), if you don’t, just download, extract it and place the ivy jar (e.g. ivy-2.4.0.jar) into Apache Ant “lib” folder.

Type: **ant** command on “**samples/unicode**” folder

The rest, just waiting…

#### What’s Interesting here…

Google Noto font that handle all the Unicode rendering here.
