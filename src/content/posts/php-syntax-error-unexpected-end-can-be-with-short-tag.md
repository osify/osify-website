---
title: PHP syntax error, unexpected $end – can be with short tag
date: "2010-09-15T20:47:04"
modified: "2010-09-15T20:47:04"
author: osify
categories:
  - Development
  - Tips
  - WordPress
tags: []
lang: en
excerpt: "Parse error: syntax error, unexpected $end in … on line … While I develop a wordpress plugin, I got such error, finally I found that the issue when we use short tag in PHP So solutions we can try: Replace phpflag…"
origin:
  site: osify
  id: 352
  url: https://osify.com/2010/09/php-syntax-error-unexpected-end-can-be-with-short-tag/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/09/php-syntax-error-unexpected-end-can-be-with-short-tag/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Parse error: syntax error, unexpected $end in … on line …

While I develop a wordpress plugin, I got such error, finally I found that the issue when we use short tag in PHP

> <? … ?>

So solutions we can try:

1. Replace <? by <?php
2. Enable PHP setting: short_open_tag

Create or edit .htaccess file to enable that setting:

> php_flag short_open_tag on
