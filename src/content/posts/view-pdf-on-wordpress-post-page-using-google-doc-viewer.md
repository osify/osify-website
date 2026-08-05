---
title: View Pdf on WordPress Post / Page using google doc viewer
date: "2010-03-16T21:45:51"
modified: "2017-03-21T19:26:06"
author: osify
categories:
  - Tips
tags:
  - PHP
  - WordPress
  - WordPress MU
lang: en
excerpt: "Very nice, let share you guys what I found and so interesting tips: to display your pdf on page or post, here is the way: Add following function into functions.php of your theme: Usage in any post or page use as: (With…"
origin:
  site: osify
  id: 121
  url: https://osify.com/2010/03/view-pdf-on-wordpress-post-page-using-google-doc-viewer/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/03/view-pdf-on-wordpress-post-page-using-google-doc-viewer/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Very nice, let share you guys what I found and so interesting tips: to display your pdf on page or post, here is the way:

1. Add following function into functions.php of your theme:

```actionscript
/**
* Pdf viewer function
*/
function pdfviewer($attr, $content) {
return '<iframe src="http://docs.google.com/viewer?url=' . $attr['href'] . '&embedded=true" width="500" height="370" style="border: none;"></iframe>';
}
add_shortcode('pdfviewer', 'pdfviewer');
```

2. Usage in any post or page use as:

```actionscript
["pdfviewer" href="your-pdf-url" ]
```

(With no quote with word: “pdfviewer” ==> pdfviewer only)

See demo at: <http://osify.com/2012/05/maths-binomial-probability-law/>
