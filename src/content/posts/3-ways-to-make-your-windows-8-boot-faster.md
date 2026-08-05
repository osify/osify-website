---
title: "3 Ways to Make Your Windows 8 Boot faster"
date: "2013-01-07T11:37:44"
modified: "2013-01-07T11:40:01"
author: osify
categories:
  - Tips
tags:
  - Windows 8
  - Windows 8 Startup Issue
lang: en
excerpt: I just install Windows 8 Pro 32bits on my Dell Inspiron laptop of 3GB RAM, Core 2 Duo CPU; I do not like enough when I start install some program the Windows start load longer than expected, so here are some twists I…
origin:
  site: osify
  id: 1655
  url: https://osify.com/2013/01/3-ways-to-make-your-windows-8-boot-faster/
  host: osify.com
legacyUrls:
  - https://osify.com/2013/01/3-ways-to-make-your-windows-8-boot-faster/
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

I just install Windows 8 Pro 32bits on my Dell Inspiron laptop of 3GB RAM, Core 2 Duo CPU; I do not like enough when I start install some program the Windows start load longer than expected, so here are some twists I made.

### I. Process to run on Startup

You need to check what are the process that will run during your PC boot, enable only what it should, not all.

Example, in my case, I do not need Adobe, vMware etc. to start so that I disable them on startup.

Steps:

- Press Ctrl + Shift + Esc to open Task Manager
- Click on Startup tab, you would see all startup processes with Name, Publisher, Status, Startup Impact (High, Low or Medium etc.)
- Disable any startup that you think should not enable, this will help when Windows 8 startup itself

**NOTE:**

> This is the first option that we need to take care before the rest of the option. If this one is working for you, just leave the rest for a while but of course, you can take all.

![Startup Apps on Task Manager](/media/bc/bc0d9c95adf2-startup-process-task-manager-osify.webp "Startup Apps on Task Manager")

Startup Apps on Task Manager

### II. Require Hibernate when shutdown

- Windows Key + R
- Type: gpedit.msc
- Under Computer Configuration
- Click Administrative template
- Click System, then Search for Shutdown, Click it
- You will find “Required use of fast startup”, enable it

**Notice that:**

> If you enable this policy setting, the system requires hibernate to be enabled.

![Require Boot faster](/media/54/5494d12f733d-require-startup-faster-osify.webp "Require Boot faster")

Require Boot faster

### III. Alocate more processor and memory

- Windows Key + R
- Type: msconfig
- Goto Boot, then Advanced options…
- Check Number of processors,
- Select the maximum number of processors or the number that gives you fast bootup without stressing your machin
- Also select max memory

**NOTE**

> I haven’t research on the impact by using this feature yet.
>
> So if you do not have much running at startup, then you may not notice much improvement in how long it takes to startup.
>
> You should consider using this feature only if you have so many startup, if option 1. & 2. above has been configure and solve your problem, this option should be left it for a while until you have problem at startup.
>
> Use this feature at **your own risk**.

![Boot Advanced Option](/media/30/30684ae0a588-boot-advanced-options-osify.webp "Boot Advanced Option")

Boot Advanced Option
