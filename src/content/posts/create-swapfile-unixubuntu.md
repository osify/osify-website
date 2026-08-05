---
title: Create SwapFile [Unix/Ubuntu]
date: "2014-06-24T02:10:51"
modified: "2014-06-24T02:15:43"
author: osify
categories:
  - Unix OS
tags:
  - Linux
  - Memory
  - RAM
  - SwapFile
  - Ubuntu
lang: en
excerpt: Linux SwapFile Overview Linux RAM is composed of chunks of memory called pages. To free up pages of RAM, a linux swap can occur and a page of memory is copied from the RAM to pre-configured space on the hard disk. Linux…
origin:
  site: ask
  id: 489
  url: https://ask.osify.com/qa/489
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/489
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

**Linux SwapFile Overview**

Linux RAM is composed of chunks of memory called pages. To free up pages of RAM, a *linux swap* can occur and a page of memory is copied from the RAM to pre-configured space on the hard disk. Linux swaps allow a system to harness more memory than was originally physically available.

However, swapping does have disadvantages. Because hard disks have a much slower memory than RAM, virtual private server performance may slow down considerably. Additionally, swap thrashing can begin to take place if the system gets swamped from too many files being swapped in and out.

**Check Swap Usage**

Before we proceed to set up a swap file, we need to check if any swap files have been enabled on the VPS by looking at the summary of swap usage.

```actionscript
swapon -s
```

**Create Swap File 1GB**

```actionscript
dd if=/dev/zero of=/swapfile bs=1024 count=1024k
```

**Make Swap File As Swap Device**

```actionscript
mkswap /swapfile
```

**Make Swap Automount**

```actionscript
nano /etc/fstab/swapfile       none    swap    sw      0       0
```

**Start mount Swap**

```actionscript
swapon -a
```
