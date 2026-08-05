---
title: Experience slow browsers, Google Chrome recently?
date: "2015-01-21T11:19:47"
modified: "2015-01-21T15:27:34"
author: osify
categories:
  - Networking
  - Windows
tags:
  - Browsers
  - Firefox
  - Google Chrome
lang: en
excerpt: I’ve been a fan of Firefox and Google Chrome most of the time but day by day they become loading, responding so slow and sometimes crash without any reason, just loading the page or tab. Of course, people will ask to…
origin:
  site: ask
  id: 665
  url: https://ask.osify.com/qa/665
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/665
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

I’ve been a fan of Firefox and Google Chrome most of the time but day by day they become loading, responding so slow and sometimes crash without any reason, just loading the page or tab.

Of course, people will ask to check plugins or extensions on Chrome and add-on on Firefox in general to check what not using or there are some hidden installation process etc. That’s we need to do.

Here I take few simple solutions over general solutions:

**Use Google DNS**

On every of your network card, you can consider to use Google DNS that allows the web surfing more faster for each website request by settings on TCP/IPv4 properties with:

- Preferred DNS server: 8.8.8.8
- Alternate DNS server: 8.8.4.4

[![internet-performance-Windows8.1-network-setting](/media/8a/8a81b5374ac4-internet-performance-windows8-1-network-setting.webp)](/media/8a/8a81b5374ac4-internet-performance-windows8-1-network-setting.webp)

**Google Chrome**

I have been trying and searching around some simple solution for recent crash issue of Google Chrome (32-bit), beside removing extensions or plugins, to disable the settings of “*Use hardware acceleration when available*” of Google Chrome also help a lot to prevent page crashing. You can try the setting as shown in following image, in Chrome Advance settings part, remove the tick of *System* part.

[![chrome-performance-windows8.1](/media/ed/edcdd1e493bc-chrome-performance-windows8-1.webp)](/media/ed/edcdd1e493bc-chrome-performance-windows8-1.webp)

You can also consider to use Google Chrome 64-bits for 64-bits OS which was just released recently in December 2014, you can find the download link from [here (Google Chrome Canary)](https://www.google.com/chrome/browser/canary.html).

**Firefox**

I don’t have yet more recommendation on Firefox beside removing unused add-on or plugins. In fact, I did some change inside the *about:config* of firefox but I do not remember, I’ll update when I could catch up again.

Let’s share your solutions to help others.
