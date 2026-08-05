---
title: "[Drupal] Disable secure connection (https://)"
date: "2014-09-29T15:22:43"
modified: "2014-09-29T15:22:43"
author: osify
categories:
  - Drupal
tags:
  - Drupal
  - Drupal tips
  - https
  - PHP
  - Tips
lang: en
excerpt: "You might sometimes want or face issue that your drupal always redirect to secure connection (https://) protocol. You might want to disable it, especially in local development environment. Note: It’s always a good idea…"
origin:
  site: ask
  id: 559
  url: https://ask.osify.com/qa/559
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/559
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

You might sometimes want or face issue that your drupal always redirect to secure connection (https://) protocol.

You might want to disable it, especially in local development environment.

Note: It’s always a good idea to have the secure connection in production server if it’s available, but normally it costs you extra on that feature on the hosting.

#### Solutions

1. At the end of the *settings.php* file put a line:

```
$conf['securepages_enable'] = FALSE;
```

2. Another option, you can set value in a table: *system.status* to 0

```
-- securepages
select * from system where `name` like '%sec%';
```
