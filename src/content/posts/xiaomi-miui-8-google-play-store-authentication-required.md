---
title: "Xiaomi – MIUI 8 – Google Play Store: Authentication is required"
date: "2017-04-10T17:55:45"
modified: "2017-04-10T17:55:45"
author: osify
categories:
  - Android
tags:
  - Android
  - Android Tips
  - Google Play Store
  - Mi Phone
  - Xiaomi
lang: en
excerpt: "Open your Google Play Store and got this annoy message: Authentication is required. You need to sign into your google account or Error while retrieving information from servers. It’s on my Xiaomi phone using MIUI 8…"
origin:
  site: ask
  id: 865
  url: https://ask.osify.com/qa/865
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/865
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Open your Google Play Store and got this annoy message:

> Authentication is required. You need to sign into your google account or Error while retrieving information from servers.

It’s on my Xiaomi phone using MIUI 8 (latest), I frequently got this error, and of course searching the whole Internet just to find a right solution for this.

Many forum post told us to remove Google account, re-login or clear cache of some Google app and services and of course, I did it a lot of time when met that and it works…. such as this [post](http://en.miui.com/thread-185851-2-1.html).

BUT for me, it’s not a right solution, you always meet that again and again; and you end up doing that all over again…. so annoy and disturb.

Finally, I found this [forum post](http://en.miui.com/thread-297185-1-1.html) that I believe it’s kind of the right solution:

> Manage some google app and service to auto startup

That looks right then other solutions because MIUI has a very good performance management according to my Android experience so far, it is because it manages to start the right (some also wrong 🙂 ) services but sadly most of Google services are disable to auto-start so that you need to manage yourself.

Here is a snapshot of [the forum](http://en.miui.com/thread-297185-1-1.html) that I tested and it works:

1. First, please clear cache of your play store
2. Then go to the security app > Permission > Autostart option and select following Google Apps:
   1. Google Account manager
   2. Google Play services
   3. Google Play store
   4. Google Services framework
3. and after that just do a reboot

That’s all.

Let’s share what you have done and let’s know if it works for you.
