---
title: "Tomcat java.lang.OutOfMemoryError: PermGen space"
date: "2013-05-02T01:11:13"
modified: "2013-12-30T12:32:42"
author: osify
categories:
  - Apache Tomcat
tags:
  - Apache Tomcat
  - Exception
  - Java
  - OutOfMemory
  - PermGen
  - Servlet
  - Solution
  - Tomcat
lang: en
excerpt: In Java application, PermGem memory is very important, it is used to compile and optimize classes. You might also face this issue during deployment application in tomcat, in my case, I faced it with Tomcat 6 and 7 with…
origin:
  site: ask
  id: 235
  url: https://ask.osify.com/qa/235
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/235
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

In Java application, PermGem memory is very important, it is used to compile and optimize classes.

You might also face this issue during deployment application in tomcat, in my case, I faced it with Tomcat 6 and 7 with message of:

```
<code>java.lang.OutOfMemoryError: PermGen space</code>
```

**Solutions**

Increasing the PermGem memory in “*catalina.bat*” for windows or “*catalina.sh*” by passing the parameters to JAVA_OPT as following (in Windows):

```bash
set JAVA_OPTS=%JAVA_OPTS% -Xms512m -Xmx512m
set JAVA_OPTS=%JAVA_OPTS% -XX:NewSize=256m -XX:MaxNewSize=256m -XX:PermSize=256m -XX:MaxPermSize=256m -XX:+DisableExplicitGC

rem ----- Execute The Requested Command ---------------------------------------
```

```
<code>java.lang.OutOfMemoryError: PermGen space</code>
```

Above, I set:

- Min/Max JVM memory allocation: *-Xms512m -Xmx512m*
- Min/Max PermGen size allocation: *-XX:PermSize=256m -XX:MaxPermSize=256m*

**Tips & Warning**

- You need to adapt the memory according to your real physical memory, (eg. my laptop has 3GB RAM) and your application resources needed. PermGem size 256MB would be enough
- If you are starting the tomcat via Eclipse, above settings might not apply, you need to set it instead in Eclipse
  - Ex: Eclipse 3.7, Windows –> Preferences –> Tomcat –> JVM Settings
  - At box of “Append to JVM Parameters”, add above value here
