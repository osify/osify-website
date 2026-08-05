---
title: Sample layout pom.xml for Java project
date: "2013-05-09T10:21:39"
modified: "2013-05-09T11:56:02"
author: osify
categories:
  - Java
tags:
  - Java
  - Maven
  - Maven 2
  - Tips
lang: en
excerpt: "To make you get into Maven 2 project easily, let’s have a look to pom.xml general layout for Java project, here it is: Sort explanation of each elements: parent: Parent pom project if you have any main project to refer…"
origin:
  site: ask
  id: 239
  url: https://ask.osify.com/qa/239
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/239
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

To make you get into Maven 2 project easily, let’s have a look to pom.xml general layout for Java project, here it is:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
		 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

	<modelVersion>4.0.0</modelVersion>
    <groupId>com.osify.training</groupId>
    <artifactId>sample-java-training</artifactId>
    <packaging>jar</packaging>
    <name>Osify Training Sample</name>
    <description>Osify Training Sample</description>
	<version>1.0.0-SNAPSHOT</version>

	<parent/>
	<prerequisites />
	<repositories/>

	<scm/>

	<properties/>

	<dependencies>
		<dependency/>
	</dependencies>

	<build>
		<sourceDirectory>src/main/java</sourceDirectory>
		<outputDirectory>target/classes</outputDirectory>
		<testSourceDirectory>src/test/java</testSourceDirectory>

	    <resources>
			<resource>
				<directory>src/main/resources/conf</directory>
			</resource>
			<resource/>
		</resources>
		<testResources>
			<testResource/>
		</testResources>
		<plugins>
			<plugin/>
    	</plugins>
	</build>
</project>
```

Sort explanation of each elements:

- parent: Parent pom project if you have any main project to refer
- repositories: You can fix some repositories directly in pom.xml but as recommended, you should use your settings.xml in .m2 directory for that
- scm: Source Code/Control Management
- properties: property variable to use in the pom.xml
- depedencies: Your dependecy jars that you will use in your project
- build :
  - resources
  - plugins

Full list explanation, you can find at <http://maven.apache.org/pom.html>
