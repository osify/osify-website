---
title: Bootstrap 3 – Auto Apply Default Form Control Style
date: "2015-08-05T18:04:20"
modified: "2015-08-05T18:04:20"
author: osify
categories:
  - Website
tags:
  - Bootstrap 3
  - Design
  - Migration
lang: en
excerpt: "Remember my case? To migrate full application from Bootstrap 2 to Bootstrap 3, there are still many cases to treat such as this one, we need to place CSS class: form-control to every input, textarea and select tag, how…"
origin:
  site: ask
  id: 731
  url: https://ask.osify.com/qa/731
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/731
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Remember my case? To migrate full application from [Bootstrap 2 to Bootstrap 3](http://ask.osify.com/qa/589), there are still many cases to treat such as this one, we need to place CSS class: form-control to every input, textarea and select tag, how about if we have so many files to treat?

Let’s go straight, here is a code snippet to try now:

```javascript
jQuery(document).ready(function(){
	jQuery('input[type=text], textarea, select').each(function() {
		if (!jQuery(this).hasClass("form-control")) {
			jQuery(this).addClass("form-control");
		}
	});
});
```

Of course, we should have a tool to automatic modify the files to add this class, I have tried to make one but it does not work well yet.
