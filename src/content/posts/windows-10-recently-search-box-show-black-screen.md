---
title: "Windows 10 : Recently Search Box Show Black Screen"
date: "2020-02-06T17:30:15"
modified: "2020-02-06T17:32:06"
author: osify
categories:
  - Windows
tags:
  - Windows
  - Windows Tips
lang: en
excerpt: "My Surface Pro 6 / Windows 10 on 5th & 6th of February It happens around 5th of February, 2020 until now and I just found out that it also mentioned on another website, zdnet. The solution is: Start Windows PowerShell,…"
featuredImage: /media/9e/9e22b71f84b2-featured.webp
origin:
  site: ask
  id: 11431
  url: https://ask.osify.com/qa/11431
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11431
mergedFrom: []
mediaCount: 4
featured: false
draft: false
---

![](/media/9e/9e22b71f84b2-featured.webp)

*My Surface Pro 6 / Windows 10 on 5th & 6th of February*

It happens around 5th of February, 2020 until now and I just found out that it also mentioned on another website, [zdnet](https://www.zdnet.com/article/windows-10-users-encountering-problems-with-built-in-search/).

The solution is:

1. Start Windows PowerShell, Run as Administrator
2. Reinstall and re-register Cortana fixed it. Run the following in an elevated (*thanks to commentor dfrazier603*)

```
Get-AppxPackage -AllUsers Microsoft.Windows.Cortana | Foreach  {Add-AppxPackage -DisableDevelopmentMode -Register  "$($_.InstallLocation)\AppXManifest.xml"}
```

![](/media/27/2767a4478b9a-windows-10-search-box-solved-powershell.webp)

And it’s back to work!

![](/media/07/0790bac902a7-windows-10-search-box.webp)
