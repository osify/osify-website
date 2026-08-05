---
title: Tomcat 8 Performance Setting
date: "2015-03-27T14:51:38"
modified: "2015-03-27T14:51:38"
author: osify
categories:
  - General
tags:
  - Java 7
  - Java 8
  - Performance
  - Tomcat
  - Tomcat 8
lang: en
excerpt: Tomcat 8 comes with more performance features comparing to previous version, this version, Tomcat is using NIO2 according to Jboss’s blog. You might interesting to read Tomcat 8 overview at this slideshare by SpringIO.…
origin:
  site: ask
  id: 689
  url: https://ask.osify.com/qa/689
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/689
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Tomcat 8 comes with more performance features comparing to previous version, this version, Tomcat is using NIO2 according to [Jboss’s blog](http://planet.jboss.org/post/nio_2_in_apache_tomcat_8). You might interesting to read Tomcat 8 overview at this [slideshare](http://www.slideshare.net/SpringCentral/apache-tomcat-8preview) by SpringIO.

The performance setting of tomcat is similar to other previous version of tomcat as I already stated in my previous post for general [Tomcat performance](http://ask.osify.com/qa/207) and [here](http://ask.osify.com/qa/235).

Here, again, to list down the simple performance tuning for Tomcat 8 that you might need it.

### Memory Settings

- catalina.sh / catalina.bat

Java 7

```bash
set JAVA_HOME=D:/Apps/Java/jdk1.7.0_40
set JAVA_OPTS=-Djava.awt.headless=true -Dfile.encoding=UTF-8
set JAVA_OPTS=%JAVA_OPTS% -server -Xms512m -Xmx1024m -XX:NewSize=128m -XX:MaxNewSize=256m -XX:PermSize=256m -XX:MaxPermSize=256m -XX:+DisableExplicitGC
```

Java 8

```actionscript
set JAVA_HOME=D:/Apps/Java/jdk1.8.0_25
set JAVA_OPTS=-Djava.awt.headless=true -Dfile.encoding=UTF-8
set JAVA_OPTS=%JAVA_OPTS% -server -Xms512m -Xmx1024m -XX:NewSize=128m -XX:MaxNewSize=256m -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=256m -XX:+DisableExplicitGC
```

### Tomcat Compression

```xml
<Connector port="8080" protocol="HTTP/1.1"
	   connectionTimeout="20000"
	   redirectPort="8443"
	   maxHttpHeaderSize="8192"
	   maxThreads="150"
	   minSpareThreads="25"
	   maxSpareThreads="75"
	   maxKeepAliveRequests="-1"
	   enableLookups="false"
	   acceptCount="100"
	   compression="on"
	   URIEncoding="UTF-8"
	   compressionMinSize="2048"
	   noCompressionUserAgents="gozilla, traviata"
	   compressableMimeType="text/html,text/xml,text/json,text/javascript,text/css,text/plain, application/javascript,application/xml,application/xml+xhtml"
	   />
```

If any other tunings, please share, I will update here as well.

If you are interesting other topic on Tomcat, find them [here](http://ask.osify.com/?s=tomcat&x=0&y=0).

If you are interesting on performance tuning, please find [here](http://ask.osify.com/qa/tag/performance).
