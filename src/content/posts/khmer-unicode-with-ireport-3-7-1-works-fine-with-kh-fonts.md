---
title: Khmer Unicode with Ireport 3.7.1 works fine with Kh fonts
date: "2010-03-01T10:30:00"
modified: "2010-03-01T10:30:00"
author: osify
categories:
  - Khmer Unicode
tags:
  - iReport
  - Java
lang: en
excerpt: "Just quick configuration with Ireport 3.7.1 without detail here: Download ireport from http://jasperforge.org 3.7.1 Install ireport 3.7.1 Open ireport design Use blank design Go to ireport tool configuration: Tool –>…"
origin:
  site: osify
  id: 101
  url: https://osify.com/2010/03/khmer-unicode-with-ireport-3-7-1-works-fine-with-kh-fonts/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/03/khmer-unicode-with-ireport-3-7-1-works-fine-with-kh-fonts/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2010/02/khmer-unicode-with-ireport-371-works.html
  published: "2010-02-28T18:30:00.000-08:00"
---

Just quick configuration with Ireport 3.7.1 without detail here:

1. Download ireport from [http://jasperforge.org](http://jasperforge.org//website/ireportwebsite/IR%20Website/ir_download.html?header=project&target=ireport) 3.7.1
2. Install ireport 3.7.1
3. Open ireport design
4. Use blank design
5. Go to ireport tool configuration: Tool –> Options –> Fonts and click install fonts

I install two fonts: Khmer OS System and Kh System

First tested with Khmer OS System font, found it’s not display correctly, see screen shot:
[![](/media/db/dbdff8359973-ireport-khmerossystem-font.webp)](/media/db/dbdff8359973-ireport-khmerossystem-font.webp)
Now I use font: Kh System, it displays correctly:
[![](/media/dd/dd0770c1b309-ireport-khsystem-font.webp)](/media/dd/dd0770c1b309-ireport-khsystem-font.webp)Printed the report into PDF format also work for me.

To configure, I just change the font name to JasperReports Properties (find in Options menu):
[![](/media/f1/f11210c15274-ireport-font-properties.webp)](/media/f1/f11210c15274-ireport-font-properties.webp)
In my local PC, I have already installed the font (Kh System) so please consider to add also if above configuration not yet work for you.

As I’m not using iReport, just wanna to test with Khmer Unicode only.

Thanks for comment any idea to improve it.

[Tested Package download here](http://www.snapdrive.net/files/583222/training/ireportKhmerUnicode.zip).
