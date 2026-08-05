---
title: Generate source code Jar for Maven 2 based project
date: "2012-09-13T16:52:34"
modified: "2012-09-13T18:14:05"
author: osify
categories:
  - Java
tags:
  - Maven
  - Maven 2
  - Maven Tips
  - Plugin
  - Plugin Source
  - Solution
  - Tips
lang: en
excerpt: Some case, you need to generate source code from your project which is maven 2 based. Please have a look to maven-source plugin by adding a short code below into your pom.xml By default it will generate jar named as:…
origin:
  site: ask
  id: 153
  url: https://ask.osify.com/qa/153
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/153
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Some case, you need to generate source code from your project which is maven 2 based.

Please have a look to [maven-source plugin](http://maven.apache.org/plugins/maven-source-plugin/usage.html) by adding a short code below into your pom.xml

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-source-plugin</artifactId>
	<executions>
		<execution>
			<id>attach-sources</id>
			<goals>
				<goal>jar</goal>
			</goals>
		</execution>
	</executions>
</plugin>
```

By default it will generate jar named as: **${project.artifactId}-${project.version}-source.jar**
