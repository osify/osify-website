---
title: "PHP Flow3 Framwork: The system cannot find the path specified."
date: "2017-01-17T18:11:27"
modified: "2017-01-17T18:11:27"
author: osify
categories:
  - PHP
tags:
  - Flow Framework
  - Flow3
  - PHP 5
  - Typo3
lang: en
excerpt: Flow framework is a PHP framework from Typo3 community. I take a chance to try out how is the framework on Windows. Thanks to composer that makes more easier for PHP scripting language. Time by time, PHP is more better…
origin:
  site: ask
  id: 843
  url: https://ask.osify.com/qa/843
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/843
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Flow framework is a PHP framework from Typo3 community. I take a chance to try out how is the framework on Windows.

Thanks to composer that makes more easier for PHP scripting language.
Time by time, PHP is more better through different framework exists such as from CodeIgniter, Laravel, CakePHP or more … and Flow3 is one interesting to try.

Here, how I first started the project and get one error that still hard to understand.

Check it out:

Install Flow3 via Composer by using the quickstarter project:

```bash
  composer create-project --keep-vcs neos/flow-base-distribution tutorial 3.3.0
```

And try flow command after running composer install and got following error

```php
>flow
The system cannot find the path specified.

  Type: TYPO3\Flow\Core\Booting\Exception\SubProcessException
  Code: 1355480641
  File: xxx\Packages\Framework\TYPO3.Flow\Classes\TYPO3\Flow\Core\B
        ooting\Scripts.php
  Line: 632
```

**PHP log**: (sometimes, I tried several times: remove all logs and do it again, sometimes no see this but above error on the console is always)

```php
 Class 'TYPO3\Flow\Utility\Files' not found in
    \Packages\Framework\TYPO3.Flow\Classes\TYPO3\Flow\Composer\InstallerScripts.php on line 36
```

#### First of all

Really difficult to findout documentation in detail related to flow, even the similar question around but no specific answer and guideline. I hope if I could findout, I will help to document this out!
