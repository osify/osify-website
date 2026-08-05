---
title: "Java: No compiler is provided in this environment [Maven]"
date: "2014-10-19T13:59:33"
modified: "2014-10-19T14:00:29"
author: osify
categories:
  - Java
tags:
  - Java
  - Java Basic
  - Maven
lang: en
excerpt: "Project created via the archtype and got error could not built Java Maven Project, pom.xml Error Message: No compiler is provided in this environment Java version Java Home The issue on Windows 7-64 bit. The project is…"
origin:
  site: ask
  id: 570
  url: https://ask.osify.com/qa/570
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/570
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

Project created via the archtype and got error could not built

```bash
mvn archetype:generate -DgroupId=com.dmsys.frmk -DartifactId=frmk -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

Java Maven Project, pom.xml

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.dmsys.frmk</groupId>
  <artifactId>frmk</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>frmk</name>
  <url>http://maven.apache.org</url>
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
    <dependency>
		<groupId>net.sf.ehcache</groupId>
		<artifactId>ehcache</artifactId>
		<version>2.5.0</version>
		<type>pom</type>
	</dependency>
  </dependencies>
</project>
```

Error Message: *No compiler is provided in this environment*

[![Java-Maven-Error](/media/a0/a0b130491b23-java-maven-error.webp)](/media/a0/a0b130491b23-java-maven-error.webp)

Java version

[![java-maven-version](/media/ea/ead46aa85fd1-java-maven-version.webp)](/media/ea/ead46aa85fd1-java-maven-version.webp)

Java Home

[![java-maven_home](/media/95/95ffe7812cbe-java-maven-home.webp)](/media/95/95ffe7812cbe-java-maven-home.webp)

The issue on Windows 7-64 bit.

The project is no issue since it could run on other machines so the issue would link to configuration of the machine above.

But what is it?
