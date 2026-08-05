---
title: "MySQL Workbench – Error Code: 1175. You are using safe update mode"
date: "2012-07-31T12:02:12"
modified: "2012-07-31T15:00:45"
author: osify
categories:
  - Database
tags:
  - Error 1175
  - MySQL
  - MySQL Workbench
lang: en
excerpt: "When you execute the update/delete request in MySQL workbench and you got the message error as: You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column And in MySQL…"
origin:
  site: osify
  id: 1476
  url: https://osify.com/2012/07/mysql-workbench-error-code-1175-you-are-using-safe-update-mode/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/07/mysql-workbench-error-code-1175-you-are-using-safe-update-mode/
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

When you execute the update/delete request in MySQL workbench and you got the message error as:

> You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column

And in MySQL Workbench also mention how we solve this issue as well by following message:

> To disable safe mode, toggle the option in Preferences -> SQL Editor -> Query Editor and reconnect

Every found that kind of error when trying to update rows in MySQL? It’s because you tried to update a table without a WHERE that uses a KEY column. In my case, I don’t use even WHERE clause:

```sql
delete from order_detail;

delete from order;
```

Any way, the quick fix is to add `SET SQL_SAFE_UPDATES=0;` before your update/delete query.

```sql
SET SQL_SAFE_UPDATES=0;
delete from order_detail;

delete from order;
```

Or follow what MySQL Workbench mentioned as here:

> To disable safe mode, toggle the option in Preferences -> SQL Editor -> Query Editor and reconnect

Here is the screenshot in MySQL Workbench **5.2.40 CE**

[![MySQL Workbench 5.2 - Error 1175](/media/fe/fe720f212d33-mysql-workbench5-2-error-1175.webp "mysql-workbench5.2-error-1175")](/media/fe/fe720f212d33-mysql-workbench5-2-error-1175.webp)

MySQL Workbench 5.2 – Error 1175

It might help for those who first experience with MySQL Workbench.

If any possibly solutions found, just drop here in the comment.
