---
title: "Tips: The site is experiencing technical difficulties"
date: "2020-01-31T17:42:31"
modified: "2020-01-31T17:42:39"
author: osify
categories:
  - PHP
  - Website
tags:
  - Tips
  - WordPress
  - WordPress Tips
lang: en
excerpt: "when you go to /wp-admin Open the website, you receive a message: “This site is experiencing difficulties.“ And if you open admin page, it added another detail as: “This site is experiencing difficulties. Please check…"
featuredImage: /media/8b/8b5a4077c5dd-featured.webp
origin:
  site: ask
  id: 11419
  url: https://ask.osify.com/qa/11419
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11419
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

![](/media/a3/a33e0db732df-wordpress-5-admin-error.webp)

*when you go to /wp-admin*

Open the website, you receive a message: “*This site is experiencing difficulties.*“

And if you open admin page, it added another detail as: “*This site is experiencing difficulties. Please check your site admin email inbox for instruction*”

So it’s telling you check email of an Admin user and of course, if you are lucky, you may see that in email in your inbox or in spam folder as example:

![](/media/b5/b5a4be7f4ab2-wordpress-5-email-technical-issue.webp)

So with above message it would tell you how to fix your website.

**How about if not (see, or still error)?**

Here is the steps to resolve it.

1. Enable Debug Mode in ***“wp-config.php”***

Place following code before the comment */* That’s all, stop editing! Happy publishing. */*

```
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define( 'WP_DEBUG_DISPLAY', false );

/* That's all, stop editing! Happy publishing. */
```

2. Find the ***“debug.log”*** file at: /wp-content/debug.log

This will help you fix your website

And don’t stop there, you may need some more helper, scan to look for other issue in your website, I recommend you to install a plugin after your website up and running: [WordFence](https://wordpress.org/plugins/wordfence/), it will help you to look up also any threat that might install in your website.

Good luck to make your site back, and let me know if it’s helping or anything else we can share.
