---
title: "MySQL issue & Solution: Illegal mix of collations for operation ‘=’"
date: "2013-07-04T19:35:13"
modified: "2013-07-04T19:45:25"
author: osify
categories:
  - MySQL
tags:
  - MySql Error
  - MySql Tips
  - MySql Tutorials
lang: en
excerpt: "MySQL Error Overview I have two databases in mysql, I have written a sql to compare two table (dbA.contact & dbB.actor). Example: When I execute the request, I will get above error, why it errors? Reasons According to…"
origin:
  site: ask
  id: 294
  url: https://ask.osify.com/qa/294
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/294
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

### MySQL Error

```sql
Illegal mix of collations (utf8_general_ci,IMPLICIT) and (utf8_unicode_ci,IMPLICIT) for operation '='
```

### Overview

I have two databases in mysql, I have written a sql to compare two table (*dbA.contact* & *dbB.actor*).

Example:

```sql
SELECT dbB.*
FROM dbA.contact co, dbB.actor ac
WHERE co.name = ac.name
```

When I execute the request, I will get above error, why it errors?

### Reasons

According to the message, it means that:

- Table on the left (*dbA.contact*, field *co.name*) using charset collation ***utf8_general_ci***
- Table on the right (*dbB.actor*, field *ac.name*) using charset collation ***utf8_unicode_ci***

So in order to compare these two tables from different database, we need to make them to have the same charset and collations.

### Solutions

You have to decide which table to follow the charset and collation?

In my case, I can only modify at *dbA.contact* so here I did:

```sql
alter table `dbA`.`contact` convert to character set utf8 collate utf8_unicode_ci;
```

This has solved my headache!

If you have more to add, please share your experience in comment.
