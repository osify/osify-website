---
title: "Windows 10: Quick Access in Trouble?"
date: "2016-07-07T22:33:17"
modified: "2016-07-07T22:33:17"
author: osify
categories:
  - Windows
tags:
  - Quick Access
  - Windows
  - Windows 10
lang: en
excerpt: "Quick Access is where you can see firstly in Windows 10, something like this: Disable Quick Access You might do not want to display the folder, the recent files; here you can do it by go to folder option via File >…"
origin:
  site: ask
  id: 794
  url: https://ask.osify.com/qa/794
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/794
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

Quick Access is where you can see firstly in Windows 10, something like this:

![quick-access-win10](/media/8b/8bd505c3d1b4-quick-access-win10.webp)

**Disable Quick Access**

You might do not want to display the folder, the recent files; here you can do it by go to folder option via *File > Change folder and search option* of the Explorer.

![quick-access-win10-disable-enable](/media/34/34698fe4fdfb-quick-access-win10-disable-enable.webp)

As shown in above picture, part 1. you can disable *Quick Access* by change open Explorer to *This PC* so that when you first open explorer, it will point to My PC instead of display the quick access.

Part 2. above you can disable two options:

1. Show recently used files in Quick Access
2. Show frequently used folders in Quick Access

**Quick Access not working**

When you add any folder, you receive a message: *Error Explorer….*

And your Quick Access might not display the folders that we did put them in there.

Those issue can be solved by above Disable / Enable back the quick access as stated in first part above.
If still not solve the problem, please go to following location and delete all entries there:

- %AppData%\Microsoft\Windows\Recent\AutomaticDestinations
- %AppData%\Microsoft\Windows\Recent\CustomDestinations

![quick-access-win10-delete](/media/ff/ff83f58c09dc-quick-access-win10-delete.webp)
