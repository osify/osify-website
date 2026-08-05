---
title: To perform … WordPress needs to access your web server.
date: "2016-07-11T17:04:45"
modified: "2016-07-11T17:04:45"
author: osify
categories:
  - Unix OS
  - WordPress
tags:
  - CHMOD
  - VPS Hosting
  - WordPress
lang: en
excerpt: "If you are using VPS to manage your own server, you might face similar info message when you try to update your plugins: The message: To perform the requested action, WordPress needs to access your web server. Please…"
origin:
  site: ask
  id: 802
  url: https://ask.osify.com/qa/802
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/802
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

If you are using VPS to manage your own server, you might face similar info message when you try to update your plugins:

The message:

> **To perform the requested action, WordPress needs to access your web server. Please enter your FTP credentials to proceed.** Under that are boxes for the Hostname, FTP User, and FTP Password, and then radio buttons for FTP or FTP (SSL).

It is because of the web server connects to your website does not have full right to manage its own content.

If you have access to the server, you can just set the permission as following

```bash
chown -Rf www-data.www-data /var/www/html/
```
