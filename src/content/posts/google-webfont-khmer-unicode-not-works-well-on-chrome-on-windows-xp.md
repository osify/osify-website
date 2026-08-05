---
title: Google Webfont – Khmer Unicode not works well on Chrome on Windows XP?
date: "2011-07-03T23:26:37"
modified: "2011-07-06T11:55:12"
author: osify
categories:
  - Khmer Unicode
  - Tips
tags:
  - Browser
  - Google
  - Google Chrome
  - Khmer Unicode
  - Windows
lang: en
excerpt: It’s still a question for me as I’m not sure if it is a real bug of Google Chrome, My PC or Khmer Unicode font on the Webfont. I tested Khmer unicode on webfont on Chrome and I fount that the Khmer text mixed with some…
origin:
  site: osify
  id: 699
  url: https://osify.com/2011/07/google-webfont-khmer-unicode-not-works-well-on-chrome-on-windows-xp/
  host: osify.com
legacyUrls:
  - https://osify.com/2011/07/google-webfont-khmer-unicode-not-works-well-on-chrome-on-windows-xp/
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

It’s still a question for me as I’m not sure if it is a real bug of Google Chrome, My PC or Khmer Unicode font on the Webfont.

I tested Khmer unicode on webfont on Chrome and I fount that the Khmer text mixed with some English text are not working properly on latest Chrome 12.0.742.112 on Windows XP. I tested the same way on Windows 7 and also asked friends to test on Mac OS, they are working just fine.

[![Webfont Khmer Unicode on Chrome on Windows XP](/media/b5/b548d8614f54-webfont-khmer-unicode-error-on-chrome.webp "webfont-khmer-unicode-error-on-chrome")](/media/b5/b548d8614f54-webfont-khmer-unicode-error-on-chrome.webp)

Webfont Khmer Unicode on Chrome on Windows XP

Please help to test:

- On Windows XP
- Google Chrome 12.0.742.112
- Test URL: <http://www.google.com/webfonts/preview?subset=khmer#font-family=Khmer>
- Copy text with mixed English and Khmer

I tested with 2 PCs with Windows XP got the same issue and with Windows 7 with no issue.

Let me know if you have the same issue and if know why let’s share as well.

Hope I could find the reason and fix this soon.

## Updated 05/07: Looking if it can be the issue

Opening the font file downloaded from the WebFont of Google: Battambang-Regular.tff, I found that the font doesn’t have the English characters range, **can we say because of this lead to the issue I said above?** Checking again to the Kh-Battambang.tff that be able to use on Adobe CS3, I found them, see below images:

[![View Battambang Webfont on fontcreator](/media/24/24af96ae6e18-battambang-webfont.webp "Battambang-webfont")](/media/24/24af96ae6e18-battambang-webfont.webp)

View Battambang Webfont on fontcreator

[![View Kh-Battambang.tff on fontcreator](/media/ca/ca35a8dd3950-kh-battambang-adobe-font.webp "Kh-Battambang-Adobe-font")](/media/ca/ca35a8dd3950-kh-battambang-adobe-font.webp)

View Kh-Battambang.tff on fontcreator

Planning to update to the latest WordPress 3.2:
– In next two weeks 15/07
– Testing before first with the new feature to make sure that everything is working fine otherwise will not upgrade on production.

## Updated 06/07: Raised this issue to Barcamp PP community, font owner & Chrome Help

So now I realized that it can be the chrome issue or font issue.

- I open a ticket to Barcamp PP group to find out if they are having the same issue or not; And yes, they are having, check it out [here](http://groups.google.com/group/barcampphnompenh/browse_thread/thread/6d55427f7c962fa5).
- [Mr. Danh Hong](http://khmertype.blogspot.com/), the font creator of Google Webfont already aware with this issue, hope he can find the real cause and solution.
- Raised a help ticket to Google Chrome help, check out from [here](http://www.google.com/support/forum/p/Chrome/thread?tid=7f34dd82cac854c3&hl=en).

Hope we can find the exactly cause and the solution soon, as the Google Webfont for Khmer Unicode is currently very popular for Web designers and developers ~ there are many website running with it. Thanks to Mr. Danh Hong for this great resource for Khmer community.
