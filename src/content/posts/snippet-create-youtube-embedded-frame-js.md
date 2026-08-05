---
title: Snippet – Create YouTube Embedded Frame [JS]
date: "2015-09-24T14:20:19"
modified: "2015-09-24T14:21:37"
author: osify
categories:
  - Code Snippet
tags:
  - Code Snippet
  - Javascript
  - jQuery
lang: en
excerpt: "Just share a small Javascript function to help you make a iframe embedded for your content. There exists a regular express to verify the link content Here’s right away: You can call in your Javascript code as:"
origin:
  site: ask
  id: 756
  url: https://ask.osify.com/qa/756
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/756
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Just share a small Javascript function to help you make a iframe embedded for your content.

There exists a regular express to verify the link content

Here’s right away:

```javascript
function youtubeEmbeddedFrame (content){
	var matches = /(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g.exec(content);
	if(!matches){
		return null;
	}

	var iframe = jQuery('<iframe width="300" height="200" frameborder="0" allowfullscreen />');
	iframe.attr('src', location.protocol + '//www.youtube.com/embed/' + matches[1]);

	return iframe;
}
```

You can call in your Javascript code as:

```javascript
youtubeEmbeddedFrame("https://www.youtube.com/watch?v=J2ADdDCvaj4")
```
