---
title: GMail App Crashes On Galaxy S2 – Loop Constantly
date: "2012-07-08T10:20:35"
modified: "2012-07-17T16:02:02"
author: osify
categories:
  - Tips
tags:
  - Android Crash
  - Galaxy
  - Galaxy S2
lang: en
excerpt: "My crashed report of Gmail App: Report type: Crash Package name: com.google.android.gm Package version: 360 Package version name: 4.0.5 Installed by: com.android.vending Process name: com.google.android.gm Time: July 8,…"
origin:
  site: osify
  id: 1416
  url: https://osify.com/2012/07/gmail-app-crashes-on-galaxy-s2-loop-constantly/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/07/gmail-app-crashes-on-galaxy-s2-loop-constantly/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

My crashed report of Gmail App:

- Report type: Crash
- Package name: com.google.android.gm
- Package version: 360
- Package version name: 4.0.5
- Installed by: com.android.vending
- Process name: com.google.android.gm
- Time: July 8, 2012
- Device: GT-I9100
- Exception class name: java.lang.ArrayIndexOutOfBoundsException
- Source method: arraycopy
- Line number: -2
- Stack trace:

> java.lang.ArrayIndexOutOfBoundsException: src.length=8192 srcPos=1 dst.length=8192 dstPost=0 length=-1 aat java.lang.System.arraycopy(Native Method) at org.kxml2.io.KXmlParser.fillBuffer(KXmlParser.java:1489) at org.kxml2.io.KXmlParser.kip(KXmlParser.java:1574) [..]

This happened on my Galaxy S2 but I don’t know what was the cause and I can’t solve the issue yet even I already restart or clear cache of the application (GMail), it might be because of there are so many mails of my account.

Anyone know? I will find and get back here with the solution to share for others.

**Updated 17/07**

I solved it by uninstall last updated and use gmail of factory setting. After that I updated the new gmail and it’s working fine.
