---
title: CodeIgniter – Remove index.php from URI
date: "2010-01-22T13:22:00"
modified: "2010-01-22T13:22:00"
author: osify
categories: []
tags:
  - PHP
lang: en
excerpt: "Normally with CodeIgniter, the URI will come with http://domain/index.php/controller/method You may have doubt to remove the index.php to have only http://domain/controller/method .. Here is the way: modrewrite still…"
origin:
  site: osify
  id: 96
  url: https://osify.com/2010/01/codeigniter-remove-index-php-from-uri/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/01/codeigniter-remove-index-php-from-uri/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2010/01/codeigniter-remove-indexphp-from-uri.html
  published: "2010-01-21T21:22:00.000-08:00"
---

Normally with CodeIgniter, the URI will come with http://domain/index.php/controller/method
You may have doubt to remove the index.php to have only http://domain/controller/method ..

Here is the way:
1. mod_rewrite still need to be enable in your apache server
2. Open config.php from your application/config and replace **$config[‘index_page’] = “index.php”** by **$config[‘index_page’] = “”**

3. In file .htaccess at the root of your website (should be in website root, where the system directory is) and add following line:

```
    RewriteEngine on    RewriteCond $1 !^(index\.php|resources|robots\.txt)    RewriteCond %{REQUEST_FILENAME} !-f    RewriteCond %{REQUEST_FILENAME} !-d    RewriteRule ^(.*)$ index.php/$1 [L,QSA]
```

(My case, above changes work fine)

4. In some case, the default setting for **uri_protocol** does not work properly. To solve this problem just replace **$config[‘uri_protocol’] = “AUTO”** by **$config[‘uri_protocol’] = “REQUEST_URI”** from **application/config/config.php**

Enjoy,

Update 26/01: If you want both using index.php with URI or no, you just need to skip option 4 (using uri_protocol as AUTO)
