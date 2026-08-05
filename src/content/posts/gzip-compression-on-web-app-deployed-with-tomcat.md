---
title: GZip Compression on Web App Deployed with Tomcat
date: "2012-09-28T16:06:34"
modified: "2013-12-30T12:32:50"
author: osify
categories:
  - Apache Tomcat
tags:
  - Apache Tomcat
  - GZip
  - Performance
  - Servlet
  - Tips
  - Tomcat
  - Web App
lang: en
excerpt: Performance is very important to save resource for visitors using our website. If you deploy your Java Web Application on Apache Tomcat and you feel it’s a bit slow, please check it out my experience on solving issue of…
origin:
  site: ask
  id: 207
  url: https://ask.osify.com/qa/207
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/207
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

Performance is very important to save resource for visitors using our website.

If you deploy your Java Web Application on Apache Tomcat and you feel it’s a bit slow, please check it out my experience on solving issue of gzip compression by changing configuration of Apache Tomcat.

**Result: Before/After Correction**

[![](/media/45/455ebcedd676-gzip-compression-tomcat-osify.webp "gzip-compression-tomcat-osify")](/media/45/455ebcedd676-gzip-compression-tomcat-osify.webp)

**Solutions**

- Edit file: apache-tomcat-xx\conf\server.xml change setting connection from:

```xml
<Connector port="8080" protocol="HTTP/1.1"
       connectionTimeout="20000"
       redirectPort="8443"/>
```

- To add some lines as following:

```xml
<Connector port="8080" protocol="HTTP/1.1"
       connectionTimeout="20000"
       redirectPort="8443"
       compression="on"
       compressionMinSize="10"
       noCompressionUserAgents="gozilla, traviata"
	   compressableMimeType="text/html,text/xml,text/javascript,text/css"/>
```

**Tips & Warning**

You need to restart your tomcat server for any change of configuration file such as server.xml file.
