---
title: Deploy Application via Apache Tomcat Context
date: "2013-12-30T13:19:23"
modified: "2013-12-30T13:19:23"
author: osify
categories:
  - Apache Tomcat
tags:
  - Apache Tomcat
  - Servlet
  - Tips
  - Tomcat
lang: en
excerpt: "Apache Tomcat is a Java web application server that provides possibility to deploy your Servlet application. There are two ways to configure your different web application to deploy in tomcat: server.xml via Context…"
origin:
  site: ask
  id: 416
  url: https://ask.osify.com/qa/416
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/416
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

[Apache Tomcat](http://ask.osify.com/qa/tag/apache-tomcat) is a Java web application server that provides possibility to deploy your [Servlet](http://ask.osify.com/qa/tag/servlet) application.

There are two ways to configure your different web application to deploy in tomcat:

- server.xml
- via Context file

Most of the case, it’s discouraged to configure the deployment on server.xml so here I propose for deploying application using context file.

The context file:

- is located at **apache-tomcat-7.x.x\conf\Catalina\localhost**
- Filename is the application context name (e.g. http://localhost:8080/mycontextapp/)
- One context file is for deploying one application war

Sample configuration (file: apache-tomcat-7.x.x\conf\Catalina\localhost\mycontextapp.xml)

```xml
<Context path="/mycontextapp" reloadable="true"
	docBase="D:/tmp/webapp"
	workDir="D:/tmp/webapp/work" />
```

If you are looking for the way to call this context and deploying the application with eclipse, please have a look to this [article](http://ask.osify.com/qa/195).

And enjoy other [application server topic](http://ask.osify.com/qa/category/programming/app-server).
