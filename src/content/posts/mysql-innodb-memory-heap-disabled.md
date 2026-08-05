---
title: "MySQL: The InnoDB memory heap is disabled"
date: "2014-03-13T13:43:07"
modified: "2014-03-13T13:43:07"
author: osify
categories:
  - MySQL
tags:
  - Drupal
  - InnoDB
  - MySQL
  - Performance
lang: en
excerpt: "When you start your MySQL server, check in the log, you might found this warning message: The memory heap is related to performance of the MySQL with engine of InnoDB Solutions The issue would be solved by provide the…"
origin:
  site: ask
  id: 455
  url: https://ask.osify.com/qa/455
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/455
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

When you start your MySQL server, check in the log, you might found this warning message:

```actionscript
[Note] InnoDB: The InnoDB memory heap is disabled
```

The memory heap is related to performance of the MySQL with engine of InnoDB

#### Solutions

The issue would be solved by provide the setting in my.cnf/my.ini as

```actionscript
[mysqld]

# Comment the following if you are using InnoDB tables
# ..
# value can be 0 or 1
innodb_use_sys_malloc = 0
```

The message will be disappear from the error log of mysql when restarted but why we care about this message if the database we are using with InnoDB engine?

According to [MySQL dev](http://dev.mysql.com/doc/innodb-plugin/1.0/en/innodb-performance-use_sys_malloc.html) document and about [malloc](http://dev.mysql.com/doc/refman/5.1/en/innodb-parameters.html#sysvar_innodb_use_sys_malloc) setting

- If set to `ON` or `1` (the default), InnoDB will use the `malloc` and `free` functions of the underlying system rather than manage memory pools itself.
- To continue to use the InnoDB memory allocator in InnoDB Plugin, you will have to set innodb_use_sys_malloc to 0

So the setting ON (1) or OFF (0) here is just to indicate the engine to decide where the memory will use or allocate from.

I’m not so sure if value ON (1) refers to use directly the InnoDB engine allocation memory setting and OFF(0) is about to use the system memory of OS which is referring to our RAM. I’ll discover more about this setting but after set to OFF(0), I found that my MySQL execution is more better (faster) on my Windows 7-64bit of 8GB RAM, core i5.

I feel that the setting with OFF is recommended for Drupal for me.
