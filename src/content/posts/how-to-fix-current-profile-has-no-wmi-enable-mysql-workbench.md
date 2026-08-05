---
title: How to fix “Current Profile Has no WMI enable” – MySQL Workbench
date: "2016-09-28T17:19:22"
modified: "2016-09-28T17:19:22"
author: osify
categories:
  - MySQL
tags:
  - MySQL
  - MySQL Workbench
lang: en
excerpt: "On My SQL Workbench 5.x or 6.x, to manage the administration stuff such as import/export. Somehow, you could face an error when click on those admin tool: Current Profile Has no WMI enable Solution To solve this, it’s…"
origin:
  site: ask
  id: 830
  url: https://ask.osify.com/qa/830
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/830
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

On My SQL Workbench 5.x or 6.x, to manage the administration stuff such as import/export.

Somehow, you could face an error when click on those admin tool:

> Current Profile Has no WMI enable

#### Solution

To solve this, it’s simply :

- On MySQL Workbench: Server Administration (on the right column)
- Click Manage Server Instances
- Select System Profile tab
- Check box(es) to acquire Admin privileges

See attachment:

![mysql-workbench-admin-profile](/media/e3/e34d27678e45-mysql-workbench-admin-profile.webp)
