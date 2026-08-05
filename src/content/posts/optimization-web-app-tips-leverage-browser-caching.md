---
title: "Optimization Web App Tips: Leverage browser caching"
date: "2012-05-30T13:32:26"
modified: "2012-05-30T13:32:26"
author: osify
categories: []
tags:
  - .htaccess
  - Apache
  - CodeIgniter
  - Optimization
lang: en
excerpt: What is Leverage browser caching? Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the…
origin:
  site: osify
  id: 1374
  url: https://osify.com/2012/05/optimization-web-app-tips-leverage-browser-caching/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/05/optimization-web-app-tips-leverage-browser-caching/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

**What is Leverage browser caching?**

Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network. [[Ref](https://developers.google.com/speed/docs/best-practices/caching#LeverageBrowserCaching)]

**Requirement**

With Apache 2, we need following modules to make it works:

- [Apache Module mod_expires](http://httpd.apache.org/docs/2.0/mod/mod_expires.html)
- [Header Module](http://httpd.apache.org/docs/2.0/mod/mod_headers.html)

**Implementation & Result**

With below changes, it can increase my website performance from **29/100** to **55/100** by Google Pagespeed score.

Here what I added to my **.htaccess** of my CodeIgniter App:

```bash
## EXPIRES CACHING ##
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType text/x-javascript "access plus 1 month"
ExpiresByType application/x-shockwave-flash "access plus 1 month"
ExpiresByType image/x-icon "access plus 1 year"
ExpiresDefault "access plus 2 days"

  <IfModule mod_headers.c>
    Header append Cache-Control "public"
  </IfModule>

</IfModule>
## EXPIRES CACHING ##
<IfModule mod_headers.c>
    # 1 YEAR
    <FilesMatch "\.(ico|pdf|flv)$">
    Header set Cache-Control "max-age=29030400, public"
    </FilesMatch>
    # 1 WEEK
    <FilesMatch "\.(jpg|jpeg|png|gif|swf)$">
    Header set Cache-Control "max-age=604800, public"
    </FilesMatch>
    # 1 WEEK
    <FilesMatch "\.(xml|txt|css|js)$">
    Header set Cache-Control "max-age=604800, proxy-revalidate"
    </FilesMatch>
    # 1 MIN
    <FilesMatch "\.(html|htm|php)$">
    Header set Cache-Control "max-age=60, private, proxy-revalidate"
    </FilesMatch>
</IfModule>
```
