---
title: Java – JDBC – Oracle For Better Performance Tips
date: "2012-02-15T12:41:50"
modified: "2012-02-15T12:41:50"
author: osify
categories:
  - Database
  - Tips
tags:
  - Java
  - JDBC
  - Oracle
  - Tips
lang: en
excerpt: I just come out from my mind to list down the tips that could help in Java/JDBC and Oracle for better performance. Of course, each of the them could have their own proving but I haven’t yet detailed and judgement could…
origin:
  site: osify
  id: 969
  url: https://osify.com/2012/02/java-jdbc-oracle-for-better-performance-tips/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/02/java-jdbc-oracle-for-better-performance-tips/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I just come out from my mind to list down the tips that could help in Java/JDBC and Oracle for better performance. Of course, each of the them could have their own proving but I haven’t yet detailed and judgement could be made by the way, you use.

In development, we need a real use case to be sure which case match to you but this message could help you or give you a view to look more detail about it.

- Use ArrayList over Vector, HashMap over HashTable ~ set references to null when you no longer need them.
- Use Thread-Pool instead of Thread
- DB – Write store procedure to encapusulate almost all DB related to Business Logic & reduce application cycle between DB Objects for a Single Request
- DB – Create appropriate indexes for your tables, that will reduce time when you fetch data from tables
- DB – Tune you SQL statements appropriately – Example: Check your request with SQL Plan Text in Oracle
