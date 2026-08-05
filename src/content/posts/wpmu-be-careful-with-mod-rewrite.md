---
title: WPMU Be careful with Mod_Rewrite
date: "2012-04-11T00:51:50"
modified: "2012-05-15T14:53:23"
author: osify
categories:
  - WordPress
tags:
  - ModRewrite
  - StackOverflow
  - WordPress
  - WordPress MU
lang: en
excerpt: As stated previously on StackOverflow about osify got stuck because of can’t add new post or upload new media file after I have configured osify to be a multi-site by using WordPress Multisite. I got following error:…
origin:
  site: osify
  id: 1149
  url: https://osify.com/2012/04/wpmu-be-careful-with-mod_rewrite/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/04/wpmu-be-careful-with-mod_rewrite/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

As stated previously on [StackOverflow](http://stackoverflow.com/questions/9905842/wordpress-multisite-are-you-sure-you-want-to-do-this-please-try-again) about osify got stuck because of can’t add new post or upload new media file after I have configured osify to be a multi-site by using WordPress Multisite.

I got following error:

1. Can’t add new post and got message: Are you sure you want to do this? Please try again
2. Can’t upload any media file, it stucked at “Crunching…”, image was in the folder if checked in FTP and permission of folder (755), files (644) are right but image can’t load on the screen of the media or via post

I spent around 2 weeks to search on the net about this issue but got no result after all tries.

Now it has been solved, thanks to [Ipstenu](http://stackoverflow.com/users/894076/ipstenu) on [StackOverflow](http://stackoverflow.com/questions/9905842/wordpress-multisite-are-you-sure-you-want-to-do-this-please-try-again) who spotted the right issue on Mod_Rewrite of apache that caused the issue.

On my **.htaccess**, I removed:

```php
#uploaded files
RewriteRule ^(.*/)?files/$ index.php [L]
RewriteCond %{REQUEST_URI} !.*wp-content/plugins.*
RewriteRule ^(.*/)?files/(.*) wp-includes/ms-files.php?file=$2 [L]

# add a trailing slash to /wp-admin
RewriteCond %{REQUEST_URI} ^.*/wp-admin$
RewriteRule ^(.+)$ $1/ [R=301,L]
```

And according to the [codex of wordpress](http://codex.wordpress.org/Multisite_Network_Administration#.htaccess_and_Mod_Rewrite) for WPMU with subdomain, I should place in **.htaccess** as:

```php
# BEGIN WordPress
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]

# uploaded files
RewriteRule ^files/(.+) wp-includes/ms-files.php?file=$1 [L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule . index.php [L]
# END WordPress
```

**UPDATED: 11/04**

I got error again after last night fix but when I put in my wp-config.php the debug mode:

> define( ‘WP_DEBUG’, true );

I could see there are some errors with DB.

- I go to my cpanel to repair, optimize the tables/db
- I cleanup all unused stuffs in my current site by using: [WP CleanFix](http://wordpress.org/extend/plugins/wp-cleanfix/) plugin

And since, my site is not put on the root of the server (view by FTP), I added another rewrite rule to be able to see image after upload:

```php
RewriteRule ^([_0-9a-zA-Z-]+/)?siteN/files/(.+) wp-content/blogs.dir/N/files/$2 [L]
```

**Note:** siteN = Site Number, N = Site Number as well. In my case, I put my main site: so siteN or N = 1

(Ref: Issues with old WPMU installs in [wordpress codex](http://codex.wordpress.org/Multisite_Network_Administration#.htaccess_and_Mod_Rewrite))

**My final .htaccess**:

```php
# BEGIN WordPress
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]

# uploaded files
RewriteRule ^files/(.+) wp-includes/ms-files.php?file=$1 [L]
RewriteRule ^([_0-9a-zA-Z-]+/)?1/files/(.+) wp-content/blogs.dir/1/files/$2 [L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule . index.php [L]
# END WordPress
```

**UPDATED: 15/05**

Occasionally, I met this issue again that led me to recheck on the issue of db error:

- WordPress database error The table ‘*_1_options’ is full for query UPDATE
- WordPress database error The table ‘*_1_comments’ is full for query INSERT
- etc

Finally I got an answer because of the Mysql innodb issue at my hosting, thanks to [this post](http://stackoverflow.com/questions/730579/error-1114-hy000-the-table-is-full)

I solved with this change:

> innodb_data_file_path = ibdata1:10M:autoextend:max:512M

Hope it won’t happen again but I will keep update the info if any more issue found.
