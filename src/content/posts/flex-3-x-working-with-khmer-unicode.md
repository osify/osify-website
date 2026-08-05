---
title: Flex 3.x working with Khmer Unicode ?
date: "2010-02-03T15:05:00"
modified: "2010-06-25T16:14:16"
author: osify
categories:
  - Khmer Unicode
tags:
  - Flex
lang: en
excerpt: "I start a topic now with Flex 3 not rendering well with Khmer Unicode. If anyone has any idea, please share; I’ll do after some test first. Updated 10/02/2010: Embaded font still not work in flex 3: Updated 25/06/2010:…"
origin:
  site: osify
  id: 99
  url: https://osify.com/2010/02/flex-3-x-working-with-khmer-unicode/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/02/flex-3-x-working-with-khmer-unicode/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I start a topic now with Flex 3 not rendering well with Khmer Unicode.

If anyone has any idea, please share; I’ll do after some test first.

Updated 10/02/2010:
Embaded font still not work in flex 3:
[![](/media/4b/4b3f7c07cc92-flexkhmerunicode-error.webp)](/media/4b/4b3f7c07cc92-flexkhmerunicode-error.webp)

**Updated 25/06/2010:**

I haven’t found any solution exactly but now I found it’s working for firefox 3.6.4 and Google Chrome latest version – sound great Khmer Unicode with flex 3.x working fine and seem can acceptable.

Just a notice, I found, embedded font with CSS in style block (for tag: font-family) will make, Khmer unicode not rendering well, we need inline font changes.

**See my test sample**: (Khmer Unicode with Flex 3.x is WORKING only in Firefox 3.6.4 & latest Google Chrome)

For localization, we may can try for following posts:

- [Creating & Using localized flex libraries with Flexbuilder](http://viconflex.blogspot.com/2006/09/creating-using-localized-flex.html?widgetType=BlogArchive&widgetId=BlogArchive1&action=toggle&dir=open&toggle=YEARLY-1167634800000&toggleopen=MONTHLY-1209621600000)
- [Using Resources](http://livedocs.adobe.com/flex/3/html/help.html?content=l10n_4.html)

Download my test package [here](http://osify.com/uploads/soft/KhmerUnicodeTest.zip).

I still got doubt why flex or flashplayer font rendering depending on browser?

If we direct open swf file as a normal flash movie we can not type Khmer Unicode as well, so we need browser as mention above all the time for this. Who should I ask for this question?
