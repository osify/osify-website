---
title: Install grpc for correct php version
date: "2020-11-27T14:51:30"
modified: "2020-11-27T14:51:35"
author: osify
categories:
  - PHP
tags: []
lang: en
excerpt: Install PHP version to your ubuntu In case, you have many version of PHP, you need to check If you see the php version is not correctly set, you need to set the environment to use correctly before follow the official…
origin:
  site: ask
  id: 11804
  url: https://ask.osify.com/qa/11804
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11804
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Install PHP version to your ubuntu

```
<code>sudo add-apt-repository -y ppa:ondrej/php
sudo apt update
sudo apt install php7.3</code>
```

In case, you have many version of PHP, you need to check

```
<code>which php
php -v
ls -l /usr/bin/php</code>
```

If you see the php version is not correctly set, you need to set the environment to use correctly before follow the official doc of grpc, let’s switch the php version:

```
<code># disable previous version
sudo a2dismod php7.4

# enable new version
sudo a2enmod php7.3

# set default alternative
sudo update-alternatives --set php /usr/bin/php7.3

# global use
sudo update-alternatives --config php

# In case, you have installed other PHP extensions, set them as default as well.

sudo update-alternatives --set phar /usr/bin/phar7.3</code>
```

**Install grpc from pecl**

```
<code># modules of php 7.3 (state your correct version)
sudo apt install php7.3-common php7.3-mysql php7.3-xml php7.3-xmlrpc php7.3-curl php7.3-gd php7.3-imagick php7.3-cli php7.3-dev php7.3-imap php7.3-mbstring php7.3-opcache php7.3-soap php7.3-zip php7.3-intl -y

# module require
sudo apt-get install php-pear phpunit

# if you have previous version of grpc, uninstall it
pecl uninstall grpc

# install grpc base on specific version
pecl -d php_suffix=7.3 install grpc</code>
```

Thanks to [this post](https://stackoverflow.com/questions/40419718/how-to-install-php-extension-using-pecl-for-specific-php-version-when-several-p), that give me the idea for pecl to select correct version of php we want.

So you will have correct version of grpc as in folder:

- If PHP 7.2, it will be in folder: /usr/lib/php/20170718
- If PHP 7.3, it will be in folder: /usr/lib/php/20180731
- If PHP 7.4, it will be in folder: /usr/lib/php/20190902

You can find my pre-build of some php modules by version at this location.

**In case, you need to build from source**

```
<code># Install phpize for the version we want
sudo apt-get install php7.3-dev
sudo apt-get install phpize7.3

# Clone project for correct version
git clone -b v1.31.x https://github.com/grpc/grpc.git

cd ./grpc

phpize7.3

./configure --with-php-config=/usr/bin/php-config7.3

make clean

make

make install
</code>
```

Build grpc’s reference post from [this article](https://stackoverflow.com/questions/62686078/grpc-extension-not-installed-in-the-right-php-version-in-ubuntu-18-04).

I’ll update more if anything related to grpc case here.
