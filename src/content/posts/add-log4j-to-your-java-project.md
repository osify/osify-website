---
title: Add log4j to your Java project
date: "2012-09-19T23:25:30"
modified: "2012-09-19T23:25:30"
author: osify
categories:
  - Java
  - Tools
tags:
  - Dependencies
  - Java
  - log4j
  - Maven
  - Maven 2
  - Maven Dependencies
  - Maven Tips
  - Tips
lang: en
excerpt: "Log4j is a logging mechanism that is in Apache foundation project. Log4j is for Java project. Here, to add logging feature to your Java project, you can use one as following ways: Manually Visit Download the Log4j jar…"
origin:
  site: ask
  id: 190
  url: https://ask.osify.com/qa/190
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/190
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Log4j is a logging mechanism that is in Apache foundation project. Log4j is for Java project. Here, to add logging feature to your Java project, you can use one as following ways:

## Manually

1. Visit <http://logging.apache.org/log4j/>
2. Download the Log4j jar library
3. Manually include it into your project dependency
4. All manage by yourself, you need to do everything

If there is Log4j version upgrade, you need to repeat above steps again.

## Maven 2 – Recommended

Use Maven 2 or 3 to handle the build for you. See how to install it in [previous post](http://ask.osify.com/qa/163 "Install Maven 2 build tool on Windows").

You can just add into your **pom.xml** as following:

```xml
<dependencies>
<!-- other dependencies -->
        <dependency>
			<groupId>log4j</groupId>
			<artifactId>log4j</artifactId>
			<version>1.2.15</version>
	    </dependency>
<!-- other dependencies -->
</dependencies>
```

So with maven, when you want to change version, you just need to update the version tag as above (Ex: 1.2.15)
