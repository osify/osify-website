---
title: My Recommendation Performance Settings [Drupal]
date: "2014-03-13T15:32:09"
modified: "2014-03-13T15:32:09"
author: osify
categories:
  - Drupal
  - MySQL
  - PHP
tags:
  - Apache
  - Drupal
  - MySQL
  - Performance
  - PHP
  - Recommendation
lang: en
excerpt: I posted some posts about drupal since I started to implement things with drupal. Issue with “Maximum execution time“ Issue with “MySQL server has gone away“ And still with memory “The InnoDB memory heap“ Here is my own…
origin:
  site: ask
  id: 457
  url: https://ask.osify.com/qa/457
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/457
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I posted some posts about drupal since I started to implement things with drupal.

- Issue with “[Maximum execution time](http://ask.osify.com/qa/443 "Maximum execution time of 60 seconds exceeded [Drupal]")“
- Issue with “[MySQL server has gone away](http://ask.osify.com/qa/438 "MySQL server has gone away, Issue & Solution [drupal]")“
- And still with memory “[The InnoDB memory heap](http://ask.osify.com/qa/455 "MySQL: The InnoDB memory heap is disabled")“

Here is my own recommendation for Drupal or some heavy PHP/MySQL application.

#### php.ini

```actionscript
max_execution_time=5000
memory_limit=1024M
```

#### my.ini

```actionscript
[mysqld]
max_allowed_packet = 128m
sort_buffer_size = 512K

## You can set .._buffer_pool_size up to 50 - 80 %
innodb_buffer_pool_size = 512M
innodb_additional_mem_pool_size = 2M

innodb_use_sys_malloc = 0
```

#### Info

I applied above setting with my environment

- XAMPP v3.2.1: PHP 5.5.3, MySQL 5.6.14, Apache 2.4.4
- Windows 7-64bit, Core i5
- RAM 8GB

I am interesting to see if above settings work for you or not in order to be clear that this recommendation is helpful, please drop me a comment.
