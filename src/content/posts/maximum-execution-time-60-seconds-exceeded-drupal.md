---
title: Maximum execution time of 60 seconds exceeded [Drupal]
date: "2014-02-20T19:00:10"
modified: "2014-02-20T19:00:10"
author: osify
categories:
  - Drupal
  - PHP
tags:
  - Drupal
  - PHP
lang: en
excerpt: "The error: When you execute some PHP script that spends longer time than the configuration of php.ini (which is sometimes is 30 or 60 seconds). With drupal, you might need much in your local development so let’s change…"
origin:
  site: ask
  id: 443
  url: https://ask.osify.com/qa/443
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/443
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

The error:

```actionscript
Maximum execution time of 60 seconds exceeded
```

When you execute some PHP script that spends longer time than the configuration of **php.ini** (which is sometimes is 30 or 60 seconds).

With drupal, you might need much in your local development so let’s change in php.ini at:

- xampp\php\php.ini
- variable: **max_execution_time**
  - To value (zero, no limit): 0
  - Or to a higher value such as (in seconds): 5000

```actionscript
;;;;;;;;;;;;;;;;;;;
; Resource Limits ;
;;;;;;;;;;;;;;;;;;;

; Maximum execution time of each script, in seconds
; http://php.net/max-execution-time
; Note: This directive is hardcoded to 0 for the CLI SAPI
max_execution_time=5000
```

The solution above would apply for PHP application but of course, your adaption to use less time execution in the application is very important for your production environment (hosting).
