---
title: It’s time to move to JDK 1.8
date: "2014-11-18T10:14:12"
modified: "2014-11-18T10:15:21"
author: osify
categories:
  - Java
tags:
  - Java
  - JDK 1.8
  - Tomcat
lang: en
excerpt: "Early morning, I got this error Yeah, it’s time to move to JDK 1.8. Let’s install JDK 1.8 now, there are a lot of feature for developer in this version, you can read here: And if you are using Tomcat, you have also need…"
origin:
  site: ask
  id: 592
  url: https://ask.osify.com/qa/592
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/592
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

Early morning, I got this error

```bash
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:2.5.1:compile (default-compile) on project center-core: Compilation failure
[ERROR] Failure executing javac, but could not parse the error:
[ERROR] javac: invalid target release: 1.8
[ERROR] Usage: javac <options> <source files>
[ERROR] use -help for a list of possible options
[ERROR] -> [Help 1]
```

Yeah, it’s time to move to JDK 1.8.

[![java-installer](/media/b1/b1d8a3e6543f-java-installer.webp)](/media/b1/b1d8a3e6543f-java-installer.webp)

Let’s install JDK 1.8 now, there are a lot of feature for developer in this version, you can read here:

- <http://www.javacodegeeks.com/2014/05/java-8-features-tutorial.html>
- <http://www.takipiblog.com/5-features-in-java-8-that-will-change-how-you-code/>
- <http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html>
- <http://javacambodia.blogspot.com/2014/03/jdk-8-project-kenai-18-march.html>

And if you are using Tomcat, you have also need to move to Tomcat 8.

Have you been experienced with this new JDK yet?

Let’s me know in comment.
