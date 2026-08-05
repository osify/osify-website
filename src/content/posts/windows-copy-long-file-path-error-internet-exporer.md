---
title: "[Windows] Copy Long File Path Error, Internet Exporer"
date: "2014-10-17T10:33:31"
modified: "2014-10-17T10:33:31"
author: osify
categories:
  - Windows
tags:
  - HotFix
  - Tips
  - Windows
  - Windows 7
  - Windows 8
lang: en
excerpt: "You copy from a location to another location and got error as describe as following message and picture: The file name(s) would be too long for the destination folder…. I got the error on my Windows 7, SP1. Of course,…"
origin:
  site: ask
  id: 567
  url: https://ask.osify.com/qa/567
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/567
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

You copy from a location to another location and got error as describe as following message and picture:

> The file name(s) would be too long for the destination folder….

[![destination-path-is-too-long-windows7-askOsify](/media/3e/3ea572adb44a-destination-path-is-too-long-windows7-askosify.webp)](/media/3e/3ea572adb44a-destination-path-is-too-long-windows7-askosify.webp)

I got the error on my Windows 7, SP1. Of course, you can have the same issue on Windows 8.

I use Windows Explorer to try to copy files or folders in order to paste them into some other folder.

There is a solution and explain already by Microsoft on [the support](http://support.microsoft.com/kb/2891362) that the problem occurs because of an issue in how Windows handles the long-path errors.

### Solutions

#### HotFix

You can apply the official HotFix ([Fix475608](support.microsoft.com/hotfix/KBHotfix.aspx?kbnum=2891362&amp;kbln=en-US)) as stated in [Microsoft’s Support](http://support.microsoft.com/kb/2891362), you need to read if your issue as describe as in the ticket or not and ask the hotfix via mail.

Or if you are using Windows 7, SP1, 64bit as mine and has the same issue as above, you can download [here](http://hotfixv4.microsoft.com/Windows%207/Windows%20Server2008%20R2%20SP1/sp2/Fix475608/7600/free/470273_intl_x64_zip.exe) (at your own risk).

#### Alternative

Use external software to help such as:

- [Long Path Fixer](http://corz.org/windows/software/accessories/Long-Path-Fixer-for-Windows.php) Tool
