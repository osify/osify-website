---
title: Install Maven 2 build tool on Windows
date: "2012-09-14T17:45:52"
modified: "2012-09-14T17:50:28"
author: osify
categories:
  - Tools
tags:
  - Maven
  - Maven 2
  - Maven Tips
  - Solution
  - Tips
lang: en
excerpt: If you just start to develop some application, you need some built tools to help to package, compile or make your development structure look right. Maven is a right tool for that. It’s simple and easy to use, it works…
origin:
  site: ask
  id: 163
  url: https://ask.osify.com/qa/163
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/163
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

If you just start to develop some application, you need some built tools to help to package, compile or make your development structure look right.

[Maven](http://maven.apache.org/index.html) is a right tool for that. It’s simple and easy to use, it works with many of programming languages, especially with Java.

Here is simple steps to install maven in your Windows:

### Download & Set Environment Variables

- Download [maven 2 (version 3.0.4)](http://maven.apache.org/download.html)
- You need to have JVM installed in your PC
- Extract the tar.gz and put in some folder (Ex: D:\install\apache-maven-3.0.4)
- Configure Environment Variable:
  - Right Click on My Computer > Properties > Advanced > Environment Variables
  - Create New System Variables: M2_HOME & maven memory option as
    - M2_HOME=D:\install\apache-maven-3.0.4
    - MAVEN_OPTS=-Xms256m -Xmx512m
  - Set path of M2_HOME: path=%M2_HOME%\bin;%path%

### Prepare Your home folder

- Go to your home directory (C:\Documents and Settings\[your PC user]
- Create following folders (.m2 & .m2/repository) via DOS prompt:

```bash
C:\DOCUME~1\[your-user]>mkdir .m2
C:\DOCUME~1\[your-user]>cd .m2
C:\DOCUME~1\[your-user]\.m2>mkdir repository
```

### File: settings.xml

This file is useful for maven to collect all common configuration values that we can do in pom.xml as well. In [settings.xml](http://maven.apache.org/settings.html) file should not contain specific configuration for some projects but generic for all.

There are two locations where a settings.xml file may live:

- The Maven install: $M2_HOME/conf/settings.xml
- A user’s install: ${user.home}/.m2/settings.xml

I think, you can just use the simple configuration below and put it in ${user.home}/.m2/settings.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <localRepository>${user.home}/.m2/repository</localRepository>
  <interactiveMode>true</interactiveMode>
  <usePluginRegistry>false</usePluginRegistry>
  <offline>false</offline>
</settings>
```

### Testing & Maven Commands

Open DOS prompt and test command: mvn -version

```bash
D:\Work\develop\opensource>mvn -version
Apache Maven 3.0.4 (r1232337; 2012-01-17 15:44:56+0700)
Maven home: D:\install\apache-maven-3.0.4
Java version: 1.6.0_25, vendor: Sun Microsystems Inc.
Java home: D:\install\java\jdk1.6.0_25\jre
Default locale: en_US, platform encoding: Cp1252
OS name: "windows xp", version: "5.1", arch: "x86", family: "windows"
```

Some commands:

- Build project:

  ```java
  mvn package / mvn install
  ```
- Clean project:

  ```java
  mvn clean
  ```
- Build eclipse classpath:

  ```java
  mvn eclipse:eclipse
  ```
- Clean eclipse classpath:

  ```java
  mvn eclipse:clean
  ```

### Common Mistakes

**1. When build got error: java.lang.ClassNotFoundException: org.codehaus.classworlds.Launcher**

```java
Exception in thread "main" java.lang.NoClassDefFoundError: org/codehaus/classworlds/La
Caused by: java.lang.ClassNotFoundException: org.codehaus.classworlds.Launcher
        at java.net.URLClassLoader$1.run(URLClassLoader.java:202)
        at java.security.AccessController.doPrivileged(Native Method)
        at java.net.URLClassLoader.findClass(URLClassLoader.java:190)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:306)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:247)
Could not find the main class: org.codehaus.classworlds.Launcher.  Program will exit.
```

**Issue & Resolution:**

- Set environment variable, make sure that no conflict variable between: M2_HOME or M3_HOME; Only one should be used, my case I used: *M2_HOME* only.
- JDK to use 1.6 or latest for maven 3.04
