---
title: Easy Way to Migrate CSS Bootstrap 2.x to 3.x, Font Awesome v3 to v4
date: "2014-11-21T11:56:26"
modified: "2014-11-21T11:56:26"
author: osify
categories:
  - Tools
tags:
  - Bootstrap
  - Bootstrap 2.x
  - Bootstrap 3.x
  - CSS
  - Font Awesome 3.x
  - Font Awesome 4.x
  - Migration
  - Tools
lang: en
excerpt: "The old web app uses CSS Bootstrap 2 and the new CSS Bootstrap 3 have a lot of things different, we need to aware: Get into the issue/concept: http://getbootstrap.com/migration/ My Working Tool There is already an…"
origin:
  site: ask
  id: 589
  url: https://ask.osify.com/qa/589
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/589
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

The old web app uses CSS Bootstrap 2 and the new CSS Bootstrap 3 have a lot of things different, we need to aware:

### Get into the issue/concept:

- <http://stackoverflow.com/questions/17974998/updating-bootstrap-to-version-3-what-do-i-have-to-do>
- [http://getbootstrap.com/migration/](http://getbootstrap.com/migration/ "Follow link")

### My Working Tool

There is already an existing tool written in Python ([b2tob3](http://geeksta.net/tools/b2tob3-migrate-bootstrap/)) but for me, it’s working only for HTML (extension .html) files and there are some more rules to add into the tool to work fully for Bootstrap 2 to 3.

And then [zlotnika](https://github.com/zlotnika/b2tob3) forked the original tool above and add more support on extension and I found that it looks a bit more better but still not match to my case which is on Java application written the template on JSP/Servlet (.java) file; and there is no Font Awesome converter inside the tool as well.

So I forked from zlotnika and modified to my need which is hosted in [github](https://github.com/metrey/b2tob3). I still keep updating but at this stage, it’s working almost fine for me.

If you want to try, you can download the compile [EXE for Windows](https://github.com/metrey/b2tob3/blob/master/EXE-files/b2tob3-metrey.zip?raw=true) or take the source from [github](https://github.com/metrey/b2tob3).

### Other Tools

Some available automatic tools, you can try:

- Original Tool that forked from: <https://pypi.python.org/pypi/b2tob3/0.4>
- HTML: <http://code.divshot.com/bootstrap3_upgrader/>
