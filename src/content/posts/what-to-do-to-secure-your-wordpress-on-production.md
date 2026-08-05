---
title: What to do to secure your wordpress on production
date: "2011-02-14T13:50:17"
modified: "2011-02-14T14:04:01"
author: osify
categories:
  - How to kill Virus
  - WordPress
tags:
  - Security
  - WordPress
lang: en
excerpt: Security is most concerning for all kinds of software or applications. WordPress is a free opensource blogging and CMS-like system, as it is an opensource product so source code is opening that’s easy for hackers to…
origin:
  site: osify
  id: 481
  url: https://osify.com/2011/02/what-to-do-to-secure-your-wordpress-on-production/
  host: osify.com
legacyUrls:
  - https://osify.com/2011/02/what-to-do-to-secure-your-wordpress-on-production/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Security is most concerning for all kinds of software or applications.

WordPress is a free opensource blogging and CMS-like system, as it is an opensource product so source code is opening that’s easy for hackers to read to understand the way of the open source does.

But it doesn’t mean that it’s easy to hack.

Here are some tips to help giving more security to your WordPress installation:

## 1. Keep your WordPress / Plugins up to date

At least, every 2 or 3 months check if there are any upgrade available for [WordPress Core](http://wordpress.org).
And always update your plugins that you are using when they are available.

## 2. Super Admin User & Other User login Management

- Do not use the admin account

WordPress comes with the default “admin” user that hacker may firstly use this user to guest our login.

=> If you already create it, update it from your MySQL Admin:

> update tableprefix_users set user_login=’newuser’ where user_login=’admin’;

- Delete the admin account if you already have another super admin: Good, not to have it any more.
- Change default passwords
- Use “strong” passwords
- Do not allow people to register as administrators by default

## 3. Your wp-config.php

- Use secret keys in your wp-config.php file
  - Find the way to generate your unique keys here: <https://api.wordpress.org/secret-key/1.1/salt/>
  - If you give this keys to others, they may be able to get into your system as well.
- Move your wp-config.php file from root directory

You can move the wp-config.php file to the directory above your WordPress install.

- Change permission of your wp-config.php

Note that if you are on a shared-server the permissions of your wp-config.php should be 750.
It means that no other user will be able to read your database username and password.

> chmod 750 wp-config.php

- Hide your wp-config.php with .htaccess:

> <files wp-config.php>
> order allow,deny
> deny from all
> </files>

## 4. Database

- If you monitor the database yourself, please secure it from server part
- Change the wordpress table prefix

table_prefix is “wp_,” the default. So better to change to something else.

- Backup your database more often

## 5. Secure your wp-admin

- Block access to the wp-admin folder using your .htaccess file
- Enable SSL if your hosting enables this feature (enable it in wp-config.php)

> `define('FORCE_SSL_ADMIN', true);`

(Even no, read here: <http://codex.wordpress.org/Administration_Over_SSL>)

## 6. Keep spam comments out

- Use some plugins as: [Akismet](http://wordpress.org/extend/plugins/akismet/), [Cookies for Comments](http://wordpress.org/extend/plugins/cookies-for-comments/)

## 7. Backup

- Backup your database and server-side files regularly

## 8. More tips

- Lockdown your htaccess to allow only certain IPS to access it
- Use shell access as opposed to FTP

Be careful on this part, some FTP clients can be infected by virus and during your uploading or accessing to FTP. See same issues, I used to meet and help others in the past:

> - <http://develop.catholiccambodia.org/2010/04/11/website-got-hacked-by-ftp-virus/>

- Create a blank index.html in your plugins directory (should be there in newer WP versions)
- Remove the WordPress version string from your **header.php** file

You can simply add this snip code in your theme function file:

> <?php remove_action(‘wp_head’, ‘wp_generator’); ?>

Or use a plugin: [Replace WP-Version](http://wordpress.org/extend/plugins/replace-wp-version/), [Secure WordPress](http://wordpress.org/extend/plugins/secure-wordpress/), or [WP-Secure Remove WordPress Version](http://wordpress.org/extend/plugins/wp-secure-remove-wordpress-version/)

- Block your wp folders from search engines
  - In your robots.txt file, add following line to your list:
> ```
> Disallow: /wp-*
> ```

- Use proper file permission settings on all files on your server
- Remove unused plugins
- Scan for vulnerabilities

You can try with a plugin called: **[**WP Security Scan**](http://wordpress.org/extend/plugins/wp-security-scan/)**
