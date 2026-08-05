---
title: MySQL server has gone away, Issue & Solution [drupal]
date: "2014-02-19T17:35:53"
modified: "2014-02-19T17:35:53"
author: osify
categories:
  - MySQL
tags:
  - Drupal
  - MySQL
  - MySql Error
lang: en
excerpt: MySQL server has gone away, issue on drupal, drupal ecommerce kickstart gives me alot of headache since I do not first aware that the issue because of there are so many packets execution on mysql with drupal. The full…
origin:
  site: ask
  id: 438
  url: https://ask.osify.com/qa/438
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/438
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

MySQL server has gone away, issue on drupal, drupal ecommerce kickstart gives me alot of headache since I do not first aware that the issue because of there are so many packets execution on mysql with drupal.

The full error is (or similar):

```actionscript
Additional uncaught exception thrown while handling exception.
Original

PDOException: SQLSTATE[HY000]: General error: 2006 MySQL server has gone away: SELECT filename FROM {registry} WHERE name = :name AND type = :type; Array ( [:name] =&gt; views_handler_field_node [:type] =&gt; interface ) in _registry_check_code() (line 3108 of d:\commerce_kickstart-7.x-2.9\includes\bootstrap.inc).
Additional

PDOException: SQLSTATE[HY000]: General error: 2006 MySQL server has gone away: SELECT ff.* FROM {filter_format} ff WHERE (status = :db_condition_placeholder_0) ORDER BY weight ASC; Array ( [:db_condition_placeholder_0] =&gt; 1 ) in filter_formats() (line 427 of d:\commerce_kickstart-7.x-2.9\modules\filter\filter.module).
```

I am using XAMPP, on Windows 7 64bits:

- MySQL 5.6.14

### Solutions

I have searched around and found following solution is working for me:

To change “**max_allowed_packet**” from “1m” to “**16m**” or “**32m**”

- Go to xampp\mysql\bin
- Open my.ini
- Change “max_allowed_packet” from “1m” to “16m”
- Save my.ini
- Now restart MySql through the XAMPP control panel.

The same solution if other application faces the error of MySQL has gone away above.

—
Ref: https://drupal.org/node/984112
