---
title: Eclipse Tomcat Launcher plugin & Performance Configuration
date: "2013-05-09T11:47:33"
modified: "2013-12-30T12:49:26"
author: osify
categories:
  - Apache Tomcat
tags:
  - Apache Tomcat
  - Eclipse Plugin
  - Eclipse Tips
  - Plugin
  - Servlet
  - Tomcat
lang: en
excerpt: "Eclipse Tomcat Launcher plugin helps you: Starting and stopping Tomcat 4.x, 5.x, 6.x, 7.x Registering Tomcat process to Eclipse debugger Creating a WAR project (wizard can update server.xml file) Adding Java Projects to…"
origin:
  site: ask
  id: 195
  url: https://ask.osify.com/qa/195
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/195
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

Eclipse Tomcat Launcher plugin helps you:

- Starting and stopping Tomcat 4.x, 5.x, 6.x, 7.x
- Registering Tomcat process to Eclipse debugger
- Creating a WAR project (wizard can update server.xml file)
- Adding Java Projects to Tomcat classpath
- Setting Tomcat JVM parameters, classpath and bootclasspath
- Exporting a Tomcat project to a WAR File

You can download the plugin from the [author’s website](http://www.eclipsetotale.com/tomcatPlugin.html), extract and copy the folder into Eclipse plugin folder, restart your eclipse, then you can use it now.

## Configure Tomcat Launcher Plugin

**General configuration**[![tomcat-eclipse-configuration](/media/1f/1f5095e665f4-tomcat-eclipse-configuration.webp)](/media/1f/1f5095e665f4-tomcat-eclipse-configuration.webp)

**Performance Configuration: Deployment memory to increase**

[![tomcat-eclipse-configuration-permformance](/media/47/4723c545a2f6-tomcat-eclipse-configuration-permformance.webp)](/media/47/4723c545a2f6-tomcat-eclipse-configuration-permformance.webp)

Value to copy:

```java
-XX:PermSize=512m -XX:MaxPermSize=512m -XX:+CMSClassUnloadingEnabled -XX:+CMSPermGenSweepingEnabled
```
