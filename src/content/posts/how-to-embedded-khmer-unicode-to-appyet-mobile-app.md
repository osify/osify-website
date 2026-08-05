---
title: How to Embed Khmer Unicode to AppYet Mobile App
date: "2013-08-20T11:16:02"
modified: "2013-08-20T11:45:10"
author: osify
categories:
  - Android
tags:
  - Android
  - Android App Template
  - AppYet
  - Khmer unicode
  - Mobile App
lang: en
excerpt: Appyet.com is a good template app for creating Android app based on your website contents but it faces difficulty to make Khmer Unicode readable after build on some phone. By default AppYet App using browser feature…
origin:
  site: ask
  id: 336
  url: https://ask.osify.com/qa/336
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/336
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

Appyet.com is a good template app for creating Android app based on your website contents but it faces difficulty to make Khmer Unicode readable after build on some phone.

[![osify-appyet-khmerunicode-solution](/media/b9/b9d16a5d5c2e-osify-appyet-khmerunicode-solution.webp)](/media/b9/b9d16a5d5c2e-osify-appyet-khmerunicode-solution.webp)

By default AppYet App using browser feature which is able to view Khmer only for rooted device that have placed well the Khmer font (as my assumption and tested as above picture).

According to AppYet blog, on a post of FAQ: [How to work with Feed Module Extra HTML Header?](http://appyet.wordpress.com/faq/) we can use javascript or stylesheet in our feed posts display.

So to make Khmer unicode works in general (for most phones), we need to embed the font to each feed:

- From [Webfont](http://www.google.com/fonts/?subset=greek&sort=var#QuickUsePlace:quickUse/Family:) by using Nokora
- Use Javascript as following code and put in its Extra HTML header

```javascript
<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Nokora:400,700:khmer' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); </script>

<style>
* {font-family: 'Nokora', serif;}
.appyet_title, .appyet_subtitle, p {font-family: 'Nokora', serif;}
</style>
```

[![appyet-khmerunicode-support-solution](/media/b1/b15f4089001e-appyet-khmerunicode-support-solution.webp)](/media/b1/b15f4089001e-appyet-khmerunicode-support-solution.webp)

The result is working fine.

Continue to read more post from Osify, install our [Android App](https://play.google.com/store/apps/details?id=com.osify.mynews).

Share your though if you have found it useful.
