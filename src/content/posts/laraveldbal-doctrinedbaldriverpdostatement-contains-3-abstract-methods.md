---
title: "[Laravel+DBAL] Doctrine\\DBAL\\Driver\\PDOStatement contains 3 abstract methods"
date: "2018-05-25T12:09:39"
modified: "2018-05-25T12:09:39"
author: osify
categories:
  - PHP
tags:
  - Composer
  - DBAL
  - Doctrine
  - Laravel
  - PHP 7.0
  - PHP 7.1
lang: en
excerpt: I though before not to share every error I met during the development I did so far but it’s just facing more often with the same issue so let’s make it documents for others. I have a Laravel 5.5. and use the package:…
origin:
  site: ask
  id: 1098
  url: https://ask.osify.com/qa/1098
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1098
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

I though before not to share every error I met during the development I did so far but it’s just facing more often with the same issue so let’s make it documents for others.

I have a **Laravel 5.5.*** and use the package: **Doctrine\DBAL** which is on **version v2.5.13**, it was working fine, it might be until I did some composer upgrade and of course, also my Windows 10 recently update, it gave me something strange whenever I run the dev of this project. Relatively it gave me error once and project no long running with this error:

> local.ERROR: Class Doctrine\DBAL\Driver\PDOStatement contains 3 abstract methods and must therefore be declared abstract or implement the remaining methods (Doctrine\DBAL\Driver\Statement::errorInfo, Doctrine\DBAL\Driver\Statement::rowCount, Doctrine\DBAL\Driver\ResultStatement::columnCount) {“exception”:”[object] (Symfony\\Component\\Debug\\Exception\\FatalErrorException(code: 1): Class Doctrine\\DBAL\\Driver\\PDOStatement contains 3 abstract methods and must therefore be declared abstract or implement the remaining methods (Doctrine\\DBAL\\Driver\\Statement::errorInfo, Doctrine\\DBAL\\Driver\\Statement::rowCount, Doctrine\\DBAL\\Driver\\ResultStatement::columnCount) at <project-location>\\vendor\\doctrine\\dbal\\lib\\Doctrine\\DBAL\\Driver\\PDOStatement.php:28)

My environment:

- PHP 7.0.23
- Apache 2.4,27

Here are related discussion on the same errors that might help you go to straight to read (of course, to help saving the time of our developer searching ;)):

- [Issue#2628](https://github.com/doctrine/dbal/issues/2628): Doctrine abstract methods must be declared in Driver
- [Issue#2847](https://github.com/doctrine/dbal/issues/2847): After update the package to 2.6.2, an error occurred!
- [Issue#2848](https://github.com/doctrine/dbal/issues/2848): PDO exception on version 2.6.2

Already tried accordingly for some solutions:

```javascript
{
    "minimum-stability": "stable",
    "require": {
        "doctrine/dbal": "2.5.13",
        "doctrine/common": "2.7.0"
    }
}
```

Not working.

I also did try to upgrade the dbal version from 2.5.x to 2.6 but it was stated that my PHP version not support.

**Then so what to do?**

So my issue above has been corrected by changing the **PHP version from 7.0.23 to 7.1.x** and then I run: **composer upgrade**, the project run as normal.

How is my dependency look like:

> ```
> "doctrine/dbal": "^2.5",
> ```

The change as in attachment, so it may help you guys:

![](/media/9b/9b5e6894f2e1-doctrine-dbal.webp)
