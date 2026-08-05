---
title: VBA MS Access for 32-bits / 64-bits – PtrSafe declaration
date: "2019-01-15T16:55:52"
modified: "2019-01-15T16:59:17"
author: osify
categories:
  - Access DB
  - VBA
tags:
  - MS Access
  - VBA
  - VBA Programming
lang: en
excerpt: "Open a MS Access VBA 2016 64-bits The message is clear: The expression On Load you entered as the event property setting produced the following error: The code in this project​ must be updated for use on 64-bit system.…"
featuredImage: /media/28/2869929a6133-featured.webp
origin:
  site: ask
  id: 1578
  url: https://ask.osify.com/qa/1578
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1578
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

![](/media/28/2869929a6133-featured.webp)

*Open a MS Access VBA 2016 64-bits*

The message is clear:

> The expression On Load you entered as the event property setting produced the following error: The code in this project​ must be updated for use on 64-bit system. Please review and update Declare statements and then mark them with the PtrSafe attribute.

So the issue is linked to declare function or declare sub function in VBA and when we use in Office 64-bits which is using VBA version 7 (VBA7), it’s not allowed without “PtrSafe” keyword.

To make those lines work on both 32-bits and 64-bits Office version, we need to use condition with VBA7 as following

```
<code>#If VBA7 Then ' to work with 64-bits
    Private Declare PtrSafe Sub ...
#Else ' to work with 32-bits
    Private Declare Sub ..
#End If</code>
```

List of some declare functions or sub functions

|  |  |
| --- | --- |
| **32-bits declare** | **64-bits declare** |
| Declare Sub GetSystemTime Lib “kernel32” | Declare PtrSafe Sub GetSystemTime Lib “kernel32” |
| Declare Function CopyFile Lib “kernel32” | Declare PtrSafe Function CopyFile Lib “kernel32” |
| Declare Function ShellExecute Lib “shell32.dll” | Declare PtrSafe Function ShellExecute Lib “shell32.dll” |
| Declare Sub Sleep Lib “kernel32” | Declare PtrSafe Sub Sleep Lib “kernel32” |
| Declare Sub GetSystemTime Lib “kernel32” | Declare PtrSafe Sub GetSystemTime Lib “kernel32” |

The solution has been tested on MS Access 2010 (32-bits) and MS Access 2016 (64-bits) on Windows 10 Pro 64-bits.
