---
title: Import file size limit in PHPMyAdmin
date: "2018-05-14T13:22:23"
modified: "2018-05-14T13:23:27"
author: sysomeho
categories:
  - MySQL
tags:
  - Performance
  - PhpMyAdmin
  - XAMP
lang: en
excerpt: Performance tuning is very important and there are still a lot of question around, here our tips to help base on our experience. Import file size limit in PHPMyAdmin For uploading large files through PHPMyAdmin, follow…
featuredImage: /media/a4/a42e3669dd23-1a.webp
origin:
  site: ask
  id: 946
  url: https://ask.osify.com/qa/946
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/946
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

Performance tuning is very important and there are still a lot of question around, here our tips to help base on our experience.

1. [**Import file size limit in PHPMyAdmin**](https://stackoverflow.com/questions/3958615/import-file-size-limit-in-phpmyadmin)

![](/media/a4/a42e3669dd23-1a.webp)

For uploading large files through PHPMyAdmin, follow these steps:

- Step 1: Open your php.ini file.
- Step 2: Upgrading Memory Limit:

> memory_limit = 750M

- Step 3: Upgrading Maximum size to post:

> post_max_size = 750M

- Step 4: Upgrading Maximum file-size to upload:

> upload_max_filesize = 1000M

- Step 5: Upgrading Maximum Execution Time:

> max_execution_time = 5000

- Step 6: Upgrading Maximum Input Time:

> max_input_time = 3000

- Step 7: Restart your xampp control panel.

[**2. Maximum execution time in phpMyadmin**](https://stackoverflow.com/questions/1263680/maximum-execution-time-in-phpmyadmin)

Please go to:

> xampp\phpMyAdmin\libraries\config.default.php
>
> Look for : $cfg[‘ExecTimeLimit’] = 600;

You can change ‘600’ to any higher value, like ‘6000’.

Maximum execution time in seconds is (0 for no limit).
