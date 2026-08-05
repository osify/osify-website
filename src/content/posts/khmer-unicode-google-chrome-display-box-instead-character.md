---
title: "[Khmer Unicode] Google Chrome, Display Box Instead of Character"
date: "2014-10-23T23:17:51"
modified: "2014-10-23T23:22:56"
author: osify
categories:
  - Khmer Unicode
tags:
  - Google Chrome
  - Khmer unicode
  - Settings
  - Unicode Render
lang: en
excerpt: It has been long time that I though to write this post when my brother faced issue on his Google Chrome could not see the Khmer character (Khmer Unicode) and in fact all other Unicode characters such Chinese or Thai. We…
origin:
  site: ask
  id: 579
  url: https://ask.osify.com/qa/579
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/579
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

It has been long time that I though to write this post when my brother faced issue on his Google Chrome could not see the Khmer character (Khmer Unicode) and in fact all other Unicode characters such Chinese or Thai.

We first say, it’s because of Khmer Unicode issue on Chrome but in fact, it was not.

The real issue and solution because of the settings of Chrome does not allow the render.

Please type on Google Chrome’s address bar: **chrome://flags** and search for ***DirectWrite Windows***

```actionscript
Disables DirectWrite Windows
Disables the use of experimental DirectWrite font rendering system. #disable-direct-write
```

You would see a button to Enable it, just do it and click relaunch.

It was solved the issue.

[![Khmer Unicode Render Solution on Google Chrome](/media/0e/0e45fc4c8e46-chrome-unicode-render.webp)](/media/0e/0e45fc4c8e46-chrome-unicode-render.webp)

Note:

I tried to disable it to reproduce the issue on my Windows 8-32bit, I still can see Khmer Unicode but it was confirmed from my brother that it’s impacted on his Windows 8-64bit on Unicode rendering.

So, if you have this problem, let’s try and let’s share your result in comment if any.
