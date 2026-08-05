---
title: To solve drop down menu or fancybox photos behind YouTube embedded object
date: "2011-06-25T17:26:11"
modified: "2011-06-25T17:34:16"
author: osify
categories:
  - Development
  - WordPress
tags:
  - TubePress
  - WordPress
  - WordPress MU
  - YouTube
lang: en
excerpt: I met this issue that happened in Google Chrome mostly but may other browsers as well. I used TubePress plugin for embedded youtube video in my WordPress, combined for all searches on the net, let’s summary here for how…
origin:
  site: osify
  id: 657
  url: https://osify.com/2011/06/to-solve-drop-down-menu-or-fancybox-photos-behind-youtube-embedded-object/
  host: osify.com
legacyUrls:
  - https://osify.com/2011/06/to-solve-drop-down-menu-or-fancybox-photos-behind-youtube-embedded-object/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I met this issue that happened in Google Chrome mostly but may other browsers as well.

I used TubePress plugin for embedded youtube video in my WordPress, combined for all searches on the net, let’s summary here for how we could solve this issue.

## Fixes Guidelines

Normally, for normal embedded, you just need to add two fixes **about wmode**:

1. <param name=”wmode” value=”opaque”></param>
2. <embed … wmode=”opaque” …></embed>

Before I added only the first point but could not work with all cases and found a support in [here](http://wordpress.org/support/topic/plugin-fancybox-for-wordpress) to tell this.

Another fix also requires for [TubePress plugin](http://tubepress.org/), the issue raised as well in google code: [Issue 298](http://code.google.com/p/tubepress/issues/detail?id=298):

> /sys/classes/org/tubepress/impl/embedded/strategies/AbstractYouTubeEmbeddedStrategy.class.php
>
> To add code:
> $link->setQueryVariable(‘wmode’, ‘transparent’);
>
> at line 58.

## Add auto fixes for WordPress content

As TubePress plugin still have another issue on single embedded so the fixes with wmode should be applied automatically via following codes to add at the end of file functions.php (Checked your embedded object and adopt this):

> // Modify Flash Movie to go behind other objects
> add_filter(‘the_content’, ‘add_opaque_to_all_flash’);
>
> function add_opaque_to_all_flash($string) {
> $string = str_ireplace(‘<param name=”src” value=”‘, ‘<param name=”wmode” value=”opaque”><param name=”src” value=”‘, $string);
> $string = str_ireplace(‘type=”application/x-shockwave-flash”‘, ‘wmode=”opaque” type=”application/x-shockwave-flash”‘, $string);
> return $string;
> }
>
> Original code is different from here due to the way of embedded code, you can find it [here](http://forum.bytesforall.com/showthread.php?p=8808)
>
> This issue should be solved if TubePress aware and please remove after TubePress fixes this.

Hope these will help you as well.
