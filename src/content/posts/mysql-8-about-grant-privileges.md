---
title: "MySQL 8 : About GRANT / PRIVILEGES"
date: "2019-10-31T18:57:56"
modified: "2019-10-31T19:00:10"
author: osify
categories:
  - MySQL
tags:
  - Database
  - Database Tips
  - MySQL
  - MySQL 8
lang: en
excerpt: In previous version of MySQL (before v8), we can grant/create mysql user one and grant it at once to get access by each host (location / 127.0.0.1) base on your mysql config. In MySQL 8, you no longer can (implicitly)…
origin:
  site: ask
  id: 11182
  url: https://ask.osify.com/qa/11182
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11182
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

In previous version of MySQL (before v8), we can grant/create mysql user one and grant it at once to get access by each host (location / 127.0.0.1) base on your mysql config.

In MySQL 8, you no longer can (implicitly) create a user using the `GRANT` command. You need to do by `CREATE USER` and also to manage each host you want to `GRANT`.

Some snippet to use:

**Create User by Allowed Hosts**

`CREATE USER 'root'@'localhost' IDENTIFIED BY 'myrootify';`

`CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'myrootify';`

**Example to grant all databases**

`GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';`
`FLUSH PRIVILEGES;`

`GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1';`
`FLUSH PRIVILEGES;`

**Example to grant a database to user**

`` GRANT ALL PRIVILEGES ON `my-db`.* TO 'root'@'localhost'; ``
`FLUSH PRIVILEGES;`

`` GRANT ALL PRIVILEGES ON `my-db`.* TO 'root'@'127.0.0.1'; ``
`FLUSH PRIVILEGES;`

**Login to your MySQL**

You can do both as following:

`mysql -h localhost -u root -p`

`mysql -h 127.0.0.1 -u root -p`
