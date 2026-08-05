---
title: Grunt Serve – grunt-connect-proxy – Cannot read property ‘prototype’ of undefined
date: "2015-07-15T10:49:35"
modified: "2015-07-15T10:49:35"
author: osify
categories:
  - NodeJS
tags:
  - Bower
  - Grunt
  - NodeJS
  - Solution
lang: en
excerpt: "Starting grunt server via: grunt serve and got following error The issue seems already raised on grunt-connect-proxy module already and it has already fixed for the new version, if you still face the error above, please…"
origin:
  site: ask
  id: 712
  url: https://ask.osify.com/qa/712
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/712
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Starting grunt server via: grunt serve and got following error

```bash
Loading "connect_proxy.js" tasks...ERROR
>> TypeError: Cannot read property 'prototype' of undefined
```

The issue seems already raised on grunt-connect-proxy module [already](https://github.com/drewzboto/grunt-connect-proxy/issues/97) and it has already fixed for the new version, if you still face the error above, please try following command to solve it:

```bash
rm -rf node_modules/grunt-connect-proxy
npm install eventemitter3@0.1.6
npm install grunt-connect-proxy
```

It is because of the dependency: *eventemitter3* that from version *0.1.6*, it has been solved already, please use latest one.
