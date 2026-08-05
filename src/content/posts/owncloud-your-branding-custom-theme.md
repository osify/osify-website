---
title: ownCloud – Your Branding – Custom Theme
date: "2014-07-02T13:29:27"
modified: "2014-09-19T19:49:31"
author: osify
categories:
  - Development
tags:
  - Custom Theme
  - ownCambo
  - ownCloud
lang: en
excerpt: As I stated previously in late 2014 about my involvement in ownCloud translation which is currently now appearing in new release of ownCloud 6.0.x already even I could only reach around 40% of all translations. You can…
featuredImage: /media/e5/e53582fdf204-featured.webp
origin:
  site: osify
  id: 2093
  url: https://osify.com/2014/07/owncloud-your-branding-custom-theme/
  host: osify.com
legacyUrls:
  - https://osify.com/2014/07/owncloud-your-branding-custom-theme/
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

As I stated previously in late 2014 about my involvement in [ownCloud translation](http://osify.com/2014/02/owncloud-being-translated-into-khmer/ "ownCloud, being translated into Khmer") which is currently now appearing in new release of ownCloud 6.0.x already even I could only reach around 40% of all translations.

You can go to setting (settings > personal)

Change language to **km**

[![ownCloud-ownCambo-Khmer-language-setting](/media/f5/f5de5dcec5ea-owncloud-owncambo-khmer-language-setting.webp)](/media/f5/f5de5dcec5ea-owncloud-owncambo-khmer-language-setting.webp)

With 40% of Khmer translation you can see some places in Khmer but as Khmer Unicode constraint, we need font embedded to the web which is not the case in current ownCloud theme so that I want to initialize that as well.

I created a custom theme called, ownCambo, you can find it in [github](https://github.com/osify/ownCambo), currently it could be a way to brand your own ownCloud installed with your logo.

[![ownCloud-ownCambo-Theme](/media/a0/a01eb6af2cb5-owncloud-owncambo-theme.webp)](/media/a0/a01eb6af2cb5-owncloud-owncambo-theme.webp)

What you need to do to use this theme, you can just

- Download the theme and put it in (owncloud/themes/ownCambo)
- You can change your logo, see mine in folder: design and convert theme to svg format
- Change setting of your **config.php**

```actionscript
<?php
$CONFIG = array (
  'instanceid' => 'XXXX',
  'passwordsalt' => 'XXX',
  'trusted_domains' =>
  array (
    0 => 'owncloud.loc',
  ),
  'datadirectory' => '/home/owncloud',
  'dbtype' => 'mysql',
  'version' => '6.0.3.1',
  'dbname' => 'owndb',
  'dbhost' => 'localhost',
  'dbtableprefix' => 'oc_',
  'dbuser' => 'root',
  'dbpassword' => '',
  'installed' => true,
  'maxZipInputSize' => 838860800,
  'allowZipDownload' => true,
  "theme" => "ownCambo",
);
```

I haven’t added the Khmer Unicode embedded yet, soon I will do it.

But with this theme, I do hope it could help most of our Khmer community to start something more beautiful with ownCloud’s solution.
