---
title: ADT plugin doesn’t show up in Eclipse After Install
date: "2016-02-26T16:34:23"
modified: "2016-02-28T11:22:41"
author: osify
categories:
  - Android
tags:
  - ADT
  - Android
  - Eclipse
lang: en
excerpt: On Eclipse, after install the Android Development Tool, restart it but do not see the Android menu (Android SDK Manager, AVD Manager etc.). Faced this issue on Eclipse Mars but in fact, it could be any eclipse that may…
origin:
  site: ask
  id: 770
  url: https://ask.osify.com/qa/770
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/770
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

On Eclipse, after install the Android Development Tool, restart it but do not see the Android menu (Android SDK Manager, AVD Manager etc.).

Faced this issue on Eclipse Mars but in fact, it could be any eclipse that may happen for this kind of issue.

To solve it, you just need: Inside Eclipse

- Window-> Perspective -> Customize Perspective
- Go to tab: Action Set Availability
- On Available Action Set, you will see some command menu of Android
- Check All Android groups -> OK

![adt-show-menu-eclipse](/media/48/48a989a9cb80-adt-show-menu-eclipse.webp)

You will now be able to see the Android menu as normal.

![adt-show-menu-result](/media/e0/e058225116e9-adt-show-menu-result.webp)
