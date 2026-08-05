---
title: Link Two Folders for Data Synchronization in Windows
date: "2013-12-31T16:29:00"
modified: "2013-12-31T17:08:00"
author: osify
categories:
  - Windows
tags:
  - FAQ
  - mklink
  - Symbolic Link
  - Tips
  - Windows
  - Windows 7
  - Windows 8
  - Windows Tips
lang: en
excerpt: In some cases, you need two folders in your PC to be synchronized to each other, example synchronize data between folders in your dropbox to local PC in order to save your time in copy it back or some other cases. Here…
origin:
  site: ask
  id: 423
  url: https://ask.osify.com/qa/423
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/423
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

In some cases, you need two folders in your PC to be synchronized to each other, example synchronize data between folders in your dropbox to local PC in order to save your time in copy it back or some other cases.

Here I would like to show a simple way to use in Windows 7 or 8 with command of ***mklink***

## Problem

Your original data is in drive ***D:/temp/share/toShare***
You want to synchronize it to folder in drive ***C:/temp/myShared***

## Solution

The solution need to use Windows command from DOS Prompt.
Make sure that you have backup all of your data in drive ***C:*** to drive ***D:*** in order to synchronize back from drive D: as original source.

- Start your DOS prompt as Administrator
- Type following command *<**mklink /D “target” “source”**>*

```bash
mklink /D "C:\temp\myShared" "D:\temp\share\toShare"
```

[![symbolic-link-folders-dos-prompt-osify](/media/06/06469018c3e7-symbolic-link-folders-dos-prompt-osify.webp)](/media/06/06469018c3e7-symbolic-link-folders-dos-prompt-osify.webp)

You could see the successful message as:

```actionscript
symbolic link created for C:\temp\myShared <<===>> D:\temp\share\toShare
```

Now both folders are linked to each other, if drop a file to one folder, another one also has it and the same for delete or update.

[![symbolic-link-folders-osify](/media/39/393f298c683a-symbolic-link-folders-osify.webp)](/media/39/393f298c683a-symbolic-link-folders-osify.webp)

## How to delete the symbolic link

**BE CAREFUL!**
Simply by delete the target destination folder and not the source folder.
In my case, my destination folder that I linked is in drive C: so I just need to delete the folder:
***C:/temp/myShared***
