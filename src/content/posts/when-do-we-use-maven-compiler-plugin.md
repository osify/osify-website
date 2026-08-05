---
title: When do we use maven-compiler-plugin ?
date: "2013-07-02T12:37:53"
modified: "2013-07-02T12:37:53"
author: osify
categories:
  - Java
tags:
  - Java
  - Maven
  - Maven 2
  - Maven Plugin
  - Maven Tips
  - Plugin
lang: en
excerpt: "Overview The Compiler Plugin is used to compile the sources of your project. Setup Place following the maven pom structure, please add following lines to plugins block: The version, you need to define according to the…"
origin:
  site: ask
  id: 290
  url: https://ask.osify.com/qa/290
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/290
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

### Overview

The Compiler Plugin is used to compile the sources of your project.

### Setup

Place following the maven [pom structure](http://ask.osify.com/qa/239 "Sample layout pom.xml for Java project"), please add following lines to plugins block:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.0</version>
    <configuration>
      <source>1.6</source>
      <target>1.6</target>
      <encoding>UTF-8</encoding>
    </configuration>
</plugin>
```

The version, you need to define according to the maven2 version you installed. All versions, you can find from [here](http://mvnrepository.com/artifact/org.apache.maven.plugins/maven-compiler-plugin).

### Do we really need it and When?

By default, if you don’t want to modify the way maven will compile your project, you do not need to put this plugin, only when:

**Compile Using A Different JDK**

- You want to compile (javac) from a specific JDK folder (D:/java/jdk1.5.x/bin)

**Compile Using -source and -target javac Options**

- You want to specify source and target of the compiler version (as above example)

**Compile Using Memory Allocation Enhancement**

- Allocate your memory to use for compilation, mostly when you need to limit or force more memory to use

**Pass Compiler Arguments**

- Sometimes, you need to pass other compiler arguments that are not handled by the Compiler Plugin (rt.jar)

Most of the case above, you will be likely to use as above configuration sample, define encoding, source and target. More information, you can find from [here](http://maven.apache.org/plugins/maven-compiler-plugin/).

**Have I missed something? Please share your answer in comment below?**
