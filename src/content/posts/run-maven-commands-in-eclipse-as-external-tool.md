---
title: Run maven commands in Eclipse as External Tool
date: "2009-10-01T19:51:00"
modified: "2009-10-01T19:51:00"
author: osify
categories: []
tags:
  - Eclipse
  - Java
  - Maven
  - Maven 2
  - POM
lang: en
excerpt: You might already know what is maven; it’s a tool to build / compile or package java project… Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM),…
origin:
  site: osify
  id: 91
  url: https://osify.com/2009/10/run-maven-commands-in-eclipse-as-external-tool/
  host: osify.com
legacyUrls:
  - https://osify.com/2009/10/run-maven-commands-in-eclipse-as-external-tool/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

You might already know what is [maven](http://maven.apache.org/index.html); it’s a tool to build / compile or package java project…

> Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project’s build, reporting and documentation from a central piece of information.

Here, I want to show how to configure maven to use as external tool in eclipse IDE so easy for you to execute maven commands from the Eclipse interface easy without needing to open a DOS prompt to use. Here is the procedure:

1. Suppose maven 2 already install some where on your PC, (mine is in D:\Work\install\Tools\maven-2.0.4)
2. From the menu bar, select Window > Preferences. Select the Run/Debug > String Substitution. Add a new variable e.g. *maven_exec*.
[![](/media/dd/dd14be007821-maven-eclipse-maven-exec.webp)](/media/dd/dd14be007821-maven-eclipse-maven-exec.webp)3. Set up a new external launcher from the menu bar, select Run > External Tools. Select Program
[![](/media/59/59020f8b2e07-maven-eclipse-create-program.webp)](/media/59/59020f8b2e07-maven-eclipse-create-program.webp)4. Create each maven task, example: in here, I create only the build classpath

- On program, create a new program and name as: build_classpath (any name as you wish)
- In location box: choose our created variable: maven_exec
- In Working Directory: choose variable: project_loc
- In Argument, give maven command, in here is: eclipse:clean eclipse:eclipse
- Click on Apply and Run if you wish now

[![](/media/89/89f072d075d4-maven-eclipse-create-task-build.webp)](/media/89/89f072d075d4-maven-eclipse-create-task-build.webp)5. So you can execute the external tool program by execute Run button, result should be in console tab:
[![](/media/2e/2e89484489fa-maven-eclipse-build-successful.webp)](/media/2e/2e89484489fa-maven-eclipse-build-successful.webp)
Enjoy,
