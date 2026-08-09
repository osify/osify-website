---
title: CodeIgniter – Automatic config base url
date: "2010-01-22T12:29:00"
modified: "2010-01-22T12:29:00"
author: osify
categories: []
tags:
  - PHP
lang: en
excerpt: "In CodeIgniter, you may know that you need to configure base url via config.php (param: $config[“baseurl”]) so when change domain you may doubt sometimes with such small error; Here a solution to help solving the issue;…"
origin:
  site: osify
  id: 95
  url: https://osify.com/2010/01/codeigniter-automatic-config-base-url/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/01/codeigniter-automatic-config-base-url/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2010/01/codeigniter-automatic-config-base-url.html
  published: "2010-01-21T20:29:00.000-08:00"
---

In CodeIgniter, you may know that you need to configure base url via config.php (param: $config[“base_url”]) so when change domain you may doubt sometimes with such small error; Here a solution to help solving the issue;

Change at config.php by fix url with this smart url configuration:

`> $config['base_url'] = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "https" : "http");
> $config['base_url'] .= "://".$_SERVER['HTTP_HOST'];
> $config['base_url'] .= str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER['SCRIPT_NAME']);`

Source: <http://codeigniter.com/wiki/Automatic_configbase_url/>
