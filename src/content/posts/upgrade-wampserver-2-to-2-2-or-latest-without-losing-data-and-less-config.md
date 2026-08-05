---
title: Upgrade WampServer 2 to 2.2 or latest without losing data and less config
date: "2012-05-28T15:15:57"
modified: "2012-05-28T15:25:04"
author: osify
categories:
  - Database
tags:
  - Database
  - Migration
  - MySQL
  - MySQL Workbench
lang: en
excerpt: WampServer is a Windows web development environment. It allows you to create web applications with Apache2, PHP and a MySQL database. I found WampServer is an easy tool for development PHP app in Windows. But since, I…
origin:
  site: osify
  id: 1360
  url: https://osify.com/2012/05/upgrade-wampserver-2-to-2-2-or-latest-without-losing-data-and-less-config/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/05/upgrade-wampserver-2-to-2-2-or-latest-without-losing-data-and-less-config/
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

[WampServer](http://www.wampserver.com/en/) is a Windows web development environment. It allows you to create web applications with Apache2, PHP and a MySQL database. I found WampServer is an easy tool for development PHP app in Windows.

But since, I have to upgrade my development environment to match my production server for PHP 5.3.x and MySql 5.5.x, WampServer installer is not easy at all to do upgrading stuff for us easily.

Before I used WampServer 2.0d and now I’m going to upgrade to WampServer 2.2d which is not so different but I have already more than 20 virtual host configuration on my local machines and especially mysql databases.

![http://www.wampserver.com](/media/3b/3b721b58fd8c-wamp-logo.webp "wamp-logo")

http://www.wampserver.com

So I take following steps to make this happen without losing any databases and has less configuration after the new installation, here are they:

- **Step 1**: Backup old wamp folder, rename it to wamp1
- **Step 2**: Download latest WampServer [here](http://sourceforge.net/projects/wampserver/files/WampServer%202/WampServer%202.2/wampserver2.2d-x32.exe/download) (my case: 2.2d)
- **Step 3**: Install WampServer, normally it named as: wamp (not overwrite the old installation)
- **Step 4**: Test if my new installation is working by start all services and type: localhost
- **Step 5**: Move my virtual host configuration from old version to the new one

- Old: wamp1\bin\apache\apache2.2.6\conf\extra\httpd-vhosts.conf

- And backup the new httpd-vhosts.conf of the new WampServer

- Copy overwrite to wamp\bin\apache\Apache2.2.21\conf\extra\httpd-vhosts.conf

- **Step 6**: Copy my old mysql database in folder: wamp1\bin\mysql\mysql5.0.45\data

- All folders, except folder: mysql & test
- Copy all database folders to: wamp\bin\mysql\mysql5.5.20\data
- You will have all databases there but you need to recreate database users for each of your database since we don’t copy **mysql** folder to here

- My case: **known issues & solutions** (see below)
- **Step 7**: Enable virtual host in httpd.conf as normal
- **Step 8**: Start all services, if any error, please have a look to wamp/logs folder
- **Step 9**: You should have everything the same as your previous wamp version. You’ve done!

**Known issues with WampServer2.2D in my case**

**Issue 1**:  Error with log file size which is different from your previous config / data

```sql
InnoDB: Error: log file .\ib_logfile0 is of different size 0 10485760 bytes
InnoDB: than specified in the .cnf file 0 5242880 bytes!
```

- Solution: Change in wamp\bin\mysql\mysql5.5.20\my.ini

- Before:
  #innodb_log_file_size = 5M
  #innodb_log_buffer_size = 8M
- Change to
  innodb_log_file_size = 10M
  innodb_log_buffer_size = 18M

**Issue 2**: I can’t create mysql database user with mysql gui tool (MySQL Administrator)

Of course, it is the old tool (which is no longer support), it was working with my previous mysql version but mysql 5.5.x it doesn’t, we can’t give any privilege to database user.

[![MySQL Workbench](/media/64/64852fd2d229-mysql-workbench5-2.webp "mysql-workbench5.2")](/media/64/64852fd2d229-mysql-workbench5-2.webp)

MySQL Workbench

- Solution: Stop using MySQL Administrator, use MySQL Workbench 5.2.x which is supporting by Mysql community, just create one instance of Server Administration, you can do everything as before.

It might help you as well. Good luck.
