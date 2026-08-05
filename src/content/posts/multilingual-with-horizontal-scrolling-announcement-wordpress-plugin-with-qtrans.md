---
title: Multilingual with Horizontal scrolling announcement wordpress plugin with qtranslate
date: "2010-12-20T14:56:01"
modified: "2010-12-20T16:20:04"
author: osify
categories:
  - Development
  - WordPress
tags:
  - Horizontal scrolling announcement
  - Multi Lingual
  - PHP
  - qTranslate
  - WordPress MU
lang: en
excerpt: I used Horizontal scrolling announcement wordpress plugin (v3.0) for some sites but currently it’s not supporting for multi langauges but I need. I modified the code in the plugin for displaying purpose in file:…
origin:
  site: osify
  id: 402
  url: https://osify.com/2010/12/multilingual-with-horizontal-scrolling-announcement-wordpress-plugin-with-qtranslate/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/12/multilingual-with-horizontal-scrolling-announcement-wordpress-plugin-with-qtranslate/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I used [Horizontal scrolling announcement](http://www.gopiplus.com/work/2010/07/18/horizontal-scrolling-announcement/) wordpress plugin (v3.0) for some sites but currently it’s not supporting for multi langauges but I need.

I modified the code in the plugin for displaying purpose in file: horizontal-scrolling-announcement.php in method: horizontal_scrolling_announcement()

- Line 53:
  - $hsa = htmlspecialchars(__(stripslashes($data->hsa_text)));
- Line 61:
  - $hsa = $hsa . ”   –   ” . htmlspecialchars(__(stripslashes($data->hsa_text)));

At “Horizontal scrolling announcement” admin you just need to add text in pattern of:

> <!–:en–>My text in English<!–:–><!–:km–>អក្សរជាភាសាខ្មែរ (Khmer)<!–:–>

I can’t find easy way to enable the editor for user text editing for each language yet.
