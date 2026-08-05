---
title: Monitor Java Application with JConsole
date: "2014-07-09T13:00:58"
modified: "2014-07-09T13:03:44"
author: osify
categories:
  - Java
tags:
  - Apache Tomcat
  - Java
  - JConsole
  - Performance
  - Tips
lang: en
excerpt: You might need to monitor your java application in order to examine the memory or CPU usage. JConsole is free and available in your JDK from version JDK 5 up. About JConsole Jconsole is a JMX-compliant monitoring tool.…
origin:
  site: ask
  id: 482
  url: https://ask.osify.com/qa/482
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/482
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

You might need to monitor your java application in order to examine the memory or CPU usage. JConsole is free and available in your JDK from version JDK 5 up.

### About JConsole

Jconsole is a JMX-compliant monitoring tool.  It uses the extensive JMX instrumentation of the Java virtual machine to provide information on performance and resource consumption of applications running on the Java platform.

The JConsole interface is composed of the following six tabs:

- **Summary** displays summary information on the JVM and monitored values.
- **Memory** displays information about memory use.
- **Threads** displays information about thread use.
- **Classes** displays information about class loading.
- **MBeans** displays information about MBeans.
- **VM** displays information about the JVM.

### Use Case

Java deploying with Tomcat

#### Configuration

To enable the jconsole, put following configuration in *tomcat/bin/catalina.bat* (Windows)

```actionscript
SET JAVA_OPTS=%JAVA_OPTS% -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=9033
SET JAVA_OPTS=%JAVA_OPTS% -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false
```

Here, I set the jconsole to use port: ***9033***

#### Running JConsole

- Start DOS Prompt
- Go to your JDK folder  and its bin folder
- On the bin folder, type: *jconsole*

```actionscript
D:\Apps\Java\jdk1.7.0_40\bin>jconsole
```

![Starter Command and Its selection Application](/media/c8/c81c0ac3d5f9-jconsole-starter.webp)

*Starter Command and Its selection Application*

- You could see a JConsole screen lists some available running JVM application, in my case above
  - Service of Eclipse (org.eclipse.equinox.launcher_xxx.jar)
  - Tomcat: (org.apache.catalina.startup.Bootstrap start)
  - JConsole: (sun.tools.jconsole.JConsole)
- I select my tomcat application

![JConsole Overview](/media/73/7349f8ec6749-jconsole-overview-screen.webp)

*JConsole Overview*

So that each time you do some request in the application, you would see different graphic of *Live Threads*, *CPU Usage,* *Memory* or *loaded classes*; or you can check each JConsole tab to examine some performance in detail.

—

References:

- [JConsole Doc](http://www.cs.rit.edu/~hpb/Jdk5/guide/management/jconsole.html)
