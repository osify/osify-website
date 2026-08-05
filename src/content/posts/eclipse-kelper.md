---
title: Eclipse Kelper – Be careful with trailing space remove automatically
date: "2014-02-05T18:58:52"
modified: "2014-02-05T19:08:52"
author: osify
categories:
  - Java
tags:
  - Developer Tools
  - Eclipse
  - Editor
  - IDE
lang: en
excerpt: "On my Eclipse Java EE IDE for Web Developers. Version: Kepler Service Release 1 Build id: 20130919-0819 When open existing file on my project, all of the trailing spaces are removed that make me difficult to synchronize…"
origin:
  site: ask
  id: 432
  url: https://ask.osify.com/qa/432
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/432
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

On my Eclipse Java EE IDE for Web Developers.

- Version: Kepler Service Release 1
- Build id: 20130919-0819

When open existing file on my project, all of the trailing spaces are removed that make me difficult to synchronize with other users on the old projects.

The issue because of *AnyEdit Tools* in *Preferences > Editors*

So to make thing as normal, I just unchecked *Remove trailing whitespace* option.

It’s simple but thing to share if you will have the same issue.

[![eclipse-editor-setting-no-removing-space](/media/e6/e65d5fa3fdc3-eclipse-editor-setting-no-removing-space.webp)](/media/e6/e65d5fa3fdc3-eclipse-editor-setting-no-removing-space.webp)
