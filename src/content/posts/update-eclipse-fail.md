---
title: "Update Eclipse failed – Can not remove : eclipse.exe"
date: "2014-11-19T07:52:54"
modified: "2014-11-18T14:34:00"
author: osify
categories:
  - Java
  - Tools
tags:
  - Eclipse
  - Java
lang: en
excerpt: "Use Eclipse Update and got fail The issue links to permission on file system. According to the post here, two solutions raised but for me, only following solution, the best to take: Run eclipse Rename eclipse exe to…"
origin:
  site: ask
  id: 602
  url: https://ask.osify.com/qa/602
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/602
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

Use Eclipse Update and got fail

```bash
An error occurred while uninstalling
session context was:(profile=epp.package.jee, phase=org.eclipse.equinox.internal.p2.engine.phases.Uninstall, operand=[R]org.eclipse.rcp.configuration_root.win32.win32.x86_64 1.0.0.v20130521-1847 --> null, action=org.eclipse.equinox.internal.p2.touchpoint.natives.actions.CleanupzipAction).
Backup of file D:\Apps\eclipse\eclipse.exe failed.
Can not remove : D:\Apps\eclipse\eclipse.exe
```

The issue links to permission on file system.

According to the post [here](http://stackoverflow.com/questions/22427728/eclipse-kepler-cant-install-updates), two solutions raised but for me, only following solution, the best to take:

1. Run eclipse
2. Rename eclipse exe to eclipse.exe.back
3. Run updates
4. Updates executed successfully

Another solution by creating a new workspace not work for me and above is simple to use.

[![eclipse-kelper-release-2-updated](/media/39/390b33c9c186-eclipse-kelper-release-2-updated.webp)](/media/39/390b33c9c186-eclipse-kelper-release-2-updated.webp)
