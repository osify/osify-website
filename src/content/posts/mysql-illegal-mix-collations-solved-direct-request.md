---
title: "[MySQL] Illegal mix of collations – Solved in direct request"
date: "2014-12-18T13:40:05"
modified: "2014-12-18T13:40:05"
author: osify
categories:
  - MySQL
tags:
  - MySQL
  - MySql Error
lang: en
excerpt: "In case, you have executed some request as following example And you receive the error about illegal mix of collations as: You are trying to compare two fields that have different collation in MySQL. In above case,…"
origin:
  site: ask
  id: 631
  url: https://ask.osify.com/qa/631
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/631
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

In case, you have executed some request as following example

```sql
UPDATE `td_invoice_zzz` zi, ts_zone zo SET `zzz_com_zon_id` = zo.zon_id
	WHERE zzz_com_zon_code = zo.zon_code;
```

And you receive the error about illegal mix of collations as:

```sql
Error Code: 1267. Illegal mix of collations (utf8_general_ci,IMPLICIT) and (utf8_unicode_ci,IMPLICIT) for operation '='
```

You are trying to compare two fields that have different collation in MySQL.

In above case, field on left of the where clause (*zzz_com_zon_code*) is *utf8_general_ci* and the right (*zo.zon_code*) is *utf8_unicode_ci*.

I already raised this kind of issue in [previous post](http://ask.osify.com/qa/294 "MySQL issue & Solution: Illegal mix of collations for operation ‘=’") with explanation and solution by alter the field collation, here I just re-raise and provide another solution directly on the request as showing as following:

```sql
UPDATE `td_invoice_zzz` zi, ts_zone zo SET `zzz_com_zon_id` = zo.zon_id
	WHERE zzz_com_zon_code COLLATE utf8_unicode_ci = zo.zon_code;
```

This might helps people who doesn’t want to alter their collation on the field but if you want to change it, just read [my post here](http://ask.osify.com/qa/294 "MySQL issue & Solution: Illegal mix of collations for operation ‘=’").

You can find other posts on [MySQL](/qa/category/database/mysql) matters or any of [database](/qa/category/database/) issue.
