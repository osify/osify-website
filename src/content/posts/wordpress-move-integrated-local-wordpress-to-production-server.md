---
title: "[WordPress] Move integrated local wordpress to production server"
date: "2009-08-18T19:52:00"
modified: "2009-08-18T19:52:00"
author: osify
categories: []
tags:
  - Hosting
  - PHP
  - WordPress
lang: en
excerpt: "First I have read some post and I though it was right but when I followed I got same error such as executing timeout (Fatal error: Maximum execution time of 30 seconds exceeded) when browse the website etc. I have…"
origin:
  site: osify
  id: 88
  url: https://osify.com/2009/08/wordpress-move-integrated-local-wordpress-to-production-server/
  host: osify.com
legacyUrls:
  - https://osify.com/2009/08/wordpress-move-integrated-local-wordpress-to-production-server/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

First I have read some post and I though it was right but when I followed I got same error such as executing timeout (**Fatal error**: Maximum execution time of 30 seconds exceeded) when browse the website etc.

I have prepared the wordpress blog with some modification of the theme; integrated and tested my wanted plugin; prepare all pages, navigation etc. I have named my local site as: www.defondyann.loc but when I move to the server for website: www.defondyann.com I got above error and can’t browse the page or went to the admin as well.

I tried as following post:

- http://www.mydigitallife.info/2007/10/01/how-to-move-wordpress-blog-to-new-domain-or-location/
- http://yoast.com/move-wordpress-blog-domain-10-steps/
- http://codex.wordpress.org/Moving_WordPress

but not all worked for me so I took some points to do this way:

I. At my local server, I prepared the virtual host by naming as: www.defondyann.comI’m sure you guy know how to do virtual host in windows; any way, here it is:

- apache2.2.6\conf\extra\httpd-vhosts.conf

```
   ServerAdmin webmaster@defondyann.com   DocumentRoot "Z:/defondyann/wordpress"   ServerName defondyann.com   ServerAlias www.defondyann.com   ErrorLog "logs/defondyann.com-error_log"   CustomLog "logs/defondyann.com-common.log common" combined
```

- Change at C:\WINDOWS\system32\drivers\etc\hosts

> 127.0.0.1 www.defondyann.com

II. I browsed the website locally with: www.defondyann.com login to admin as normal
III. Modified upload directory configuration in /wp-admin/options-misc.php

- To change upload directory to: wp-content/uploads

IV. Modified database, by execute update script via phpMyAdmin or any mysql client:

```
UPDATE wp_options SET option_value = replace(option_value, 'http://www.defondyann.loc', 'http://www.defondyann.com') WHERE option_name = 'home' OR option_name = 'siteurl';UPDATE wp_posts SET guid = replace(guid, 'http://www.defondyann.loc','http://www.defondyann.com');UPDATE wp_posts SET post_content = replace(post_content, 'http://www.defondyann.loc', 'http://www.defondyann.com');
```

It’s working for me,
Good luck,
