---
title: Optimizing the firefox 3.0.x for saving memories
date: "2009-06-12T12:44:00"
modified: "2009-06-12T12:44:00"
author: osify
categories: []
tags:
  - Browser
  - Firefox
  - Performance
lang: en
excerpt: Hum, I got so headache when using a slow computer so I have to find the issue… I know I have many programs installed on my system so these can be the problem but I use mostly the firefox for internet surfing… I start…
origin:
  site: osify
  id: 83
  url: https://osify.com/2009/06/optimizing-the-firefox-3-0-x-for-saving-memories/
  host: osify.com
legacyUrls:
  - https://osify.com/2009/06/optimizing-the-firefox-3-0-x-for-saving-memories/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2009/06/optimizing-firefox-30x-for-saving.html
  published: "2009-06-11T21:44:00.000-07:00"
---

Hum, I got so headache when using a slow computer so I have to find the issue… I know I have many programs installed on my system so these can be the problem but I use mostly the firefox for internet surfing…

I start finding that anytime I open many firefox or tabs at the same it crashes me for a while to use other applications. Check in the process, yes firefox using much memory than others:

[![](/media/8c/8c84b026f258-firefox-memory-process-before.webp)](/media/8c/8c84b026f258-firefox-memory-process-before.webp)
Here is the process screen for firefox opens around 25 tabs

Here the way I optimize the firefox configuration:
I. Type about:config on firefox address box
II. Session cofingure:

1. search “session” in filter box
2. Edit browser.sessionhistory.max_entries – this is the number of pages stored in the history of your browsing session. Basically these are pages that can be reached using your Back and Forward buttons. The default is 50, I reduced it to 20.
3. Edit browser.sessionhistory.max_total_viewers – this is the number of pages that are stored in RAM so that they aren’t re-processed by Firefox’s rendering engine. This is what allows you to go Back to a page in Firefox and have it load almost instantaneously. The number of pages stored actually depends on the amount of RAM on your machine. I reduced this to 4 (I have 2GB RAM).
4. Edit browser.sessionstore.max_tabs_undo – the number of tabs you can restore after closing them (you can do this with Ctrl/Cmd-Shift-T). The default of 10 is more than I really need, so I reduced it to 5 tabs.
5. Edit browser.sessionstore.interval – Firefox saves your session after every 10 seconds by default. I changed this to a more conservative 30000 milliseconds.

[![](/media/42/42e94ddbb1d8-firefox-about-config-session-optimize.webp)](/media/42/42e94ddbb1d8-firefox-about-config-session-optimize.webp)
III. Network configuration: enable these to get faster network speed

1. network.http.pipelining => true
2. network.http.pipelining.ssl => true
3. network.http.proxy.pipelining => true

[![](/media/4a/4aa3bcd7733d-firefox-about-config-network-optimize.webp)](/media/4a/4aa3bcd7733d-firefox-about-config-network-optimize.webp)
IV. Release Memory When Firefox Minimized

1. Right click at the content (anywhere) and choose New->Boolean.
2. In the textbox, type config.trim_on_minimize and press OK.
3. Set the value to true, and press OK

V. Restart firefox to take affection.

Here is the result of the process after optimize:
[![](/media/8d/8d01c9db70c5-firefox-memory-process-after.webp)](/media/8d/8d01c9db70c5-firefox-memory-process-after.webp)
So seem it helps, so much different, isn’t it? 🙂
Thanks to following posts also:

1. http://support.mozilla.com/en-US/kb/high+memory+usage
2. http://blog.codefront.net/2008/09/10/optimize-firefoxs-memory-usage-by-tweaking-session-preferences/
3. http://www.go4expert.com/forums/showthread.php?t=8568

Enjoy!
