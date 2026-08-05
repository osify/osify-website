---
title: How to remove the dropdown arrow from Select Tag in IE, Firefox, Chrome, Safari
date: "2014-02-26T22:50:00"
modified: "2014-02-26T22:50:00"
author: osify
categories:
  - General
  - Website
tags:
  - CSS
  - Select Tag
lang: en
excerpt: Web design is a difficult work also when we think about to make it compatible with all devices, browsers or OS. Here is one of a regularly question about “How to remove the dropdown arrow from Select tag” which we could…
origin:
  site: ask
  id: 450
  url: https://ask.osify.com/qa/450
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/450
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Web design is a difficult work also when we think about to make it compatible with all devices, browsers or OS.

Here is one of a regularly question about “*How to remove the dropdown arrow from Select tag*” which we could solve it in different way as well.

#### Firefox, Chrome, Safari:

With CSS3, you can do it with following CSS code:

```actionscript
select
{
  -webkit-appearance:none;
  -moz-appearance:none;
  -o-appearance:none;
   appearance:none;
}
```

#### IE 10, IE11

From IE10, Microsoft provides a way to do that as following in CSS3:

```actionscript
select::-ms-expand{
  display:none;
}
```

#### IE9:

There won’t come with a simple CSS solution for IE9

#### IE8/IE7:

It seems that it’s very difficult to achieve it in IE8 or IE7

#### Alternative Soltuion

You might try to use a jQuery plugin: Chosen: <http://harvesthq.github.io/chosen/> that might solve this issue for us.
