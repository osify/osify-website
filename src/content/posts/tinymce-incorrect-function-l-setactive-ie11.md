---
title: TinyMCE – Incorrect function. l.setActive [IE11]
date: "2014-11-19T15:30:11"
modified: "2014-11-19T15:30:11"
author: osify
categories:
  - Website
tags:
  - TinyMCE
lang: en
excerpt: If you meet an error with your TinyMCE as Incorrect function. setActive on IE11, it seemly, you are using one of an old version of TinyMCE in 2013, there are some places already raised the error in their old product…
origin:
  site: ask
  id: 608
  url: https://ask.osify.com/qa/608
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/608
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

If you meet an error with your TinyMCE as *Incorrect function. setActive* on IE11, it seemly, you are using one of an old version of TinyMCE in 2013, there are some places already raised the error in their old product such as:

- <https://core.trac.wordpress.org/ticket/25281>
- <https://github.com/tinymce/tinymce/commit/cd01160b037cab69c2f45866d9443e09851cf839>
- <http://www.tinymce.com/develop/changelog/?type=tinymce>

That would explain the issue.

So, please upgrade your TinyMCE to latest version such as [version 4.1.6](http://www.tinymce.com/download/download.php) which already solved the issue.
