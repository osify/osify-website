---
title: ENOGIT git is not installed or not in the PATH
date: "2016-07-07T17:08:55"
modified: "2016-07-07T17:11:27"
author: osify
categories:
  - Tools
tags:
  - Bower
  - git
  - NodeJS
  - Windows
lang: en
excerpt: You are running bower install and face this error, either on Windows or Unix like… The issue because you need to have git installed and run the project on the command prompt with git command support, without that you…
origin:
  site: ask
  id: 785
  url: https://ask.osify.com/qa/785
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/785
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

You are running bower install and face this error, either on Windows or Unix like…

The issue because you need to have git installed and run the project on the command prompt with git command support, without that you will face error on screen:

> ENOGIT git is not installed or not in the PATH

Solution so far on my Windows:

- Set git path in my environment as:

```bash
set PATH=%PATH%;C:\Program Files\Git\bin;
```

Or via screen: (System environment variable)

![bower-git-enogit-issue](/media/4c/4c22652dc2b0-bower-git-enogit-issue.webp)
