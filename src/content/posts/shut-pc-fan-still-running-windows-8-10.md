---
title: Shut down PC but Fan still running [Windows 8, 10]
date: "2016-03-16T11:16:41"
modified: "2016-07-07T22:39:54"
author: osify
categories:
  - Windows
tags:
  - Driver
  - Power Management
  - Windows 10
  - Windows 8
lang: en
excerpt: In somehow, I confused to update driver with some tools, after that my Windows could not shut down, and it seems to be in sleeping mode but I cannot wake it up in any case, I need to hold power button for awhile to…
origin:
  site: ask
  id: 762
  url: https://ask.osify.com/qa/762
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/762
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

In somehow, I confused to update driver with some tools, after that my Windows could not shut down, and it seems to be in sleeping mode but I cannot wake it up in any case, I need to hold power button for awhile to force shutdown and click again to start each time.

Since the laptop still keep running, it makes my battery drain so fast.

I had tried some solutions (I forgot) but still now.

I have upgraded to Windows 10 and still got the same error.

Any recommendation?

______________________

**Solution 1:** Because of Intel Management Engine Interface, version 11.xxx

![Intel-management-engine-interface-v11-issue](/media/68/684936acd954-intel-management-engine-interface-v11-issue.webp)

So need to uninstall the version 11.xxx and install the version 9.5.

You can find to download at [Intel website](https://downloadcenter.intel.com/search?keyword=intel+management+engine) or at your manufacturer model, example: [Dell](http://www.dell.com/support/home/us/en/04/Drivers/DriversDetails?driverId=9M49M&fileId=3489719045&osCode=WT64A&productCode=inspiron-15-5547-laptop&languageCode=en&categoryId=CS).

Another way there, you can just click: *Roll Back Drive*

![Intel-management-engine-interface-v9.5](/media/89/89012f18b615-intel-management-engine-interface-v9-5.webp)

Please install only from official website.
