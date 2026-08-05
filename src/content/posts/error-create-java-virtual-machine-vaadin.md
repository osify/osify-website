---
title: "Error: Could not create the Java Virtual Machine [Vaadin]"
date: "2014-10-12T23:15:40"
modified: "2014-10-12T23:21:32"
author: osify
categories:
  - Java
tags:
  - GWT
  - Java
  - Maven
  - Maven 2
  - Maven 3
  - Maven Plugin
  - Maven Tips
  - Vaadin
lang: en
excerpt: "Vaadin built and received an error as error log: You might first like me, could not identify the first message of the error and trying to find out the error lines instead of the messages before the [ERROR] statement.…"
origin:
  site: ask
  id: 562
  url: https://ask.osify.com/qa/562
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/562
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Vaadin built and received an error as error log:

```bash
[INFO] Using com.vaadin:vaadin-client-compiler version 7.2.7
[INFO] Error occurred during initialization of VM
[INFO] Could not reserve enough space for object heap
[ERROR] Error: Could not create the Java Virtual Machine.
[ERROR] Error: A fatal exception has occurred. Program will exit.

[ERROR] Failed to execute goal com.vaadin:vaadin-maven-plugin:7.2.7:update-widgetset
..
]] failed with status 1
        at org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:217)
        at org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:153)
..
]] failed with status 1
        at org.codehaus.mojo.gwt.shell.AbstractGwtShellMojo$JavaCommand.execute(AbstractGwtShellMojo.java:485)
```

You might first like me, could not identify the first message of the error and trying to find out the error lines instead of the messages before the [ERROR] statement. The issue links to maven configuration to compile the Vaadin/GWT project.

#### Cause & Solution

The issue because I set memory of *-Xmx1024M -Xss1024k -XX:MaxPermSize=512M*  as in my pom.xml in block of plugin: ***vaadin-maven-plugin***

```xml
<configuration>
	<gwtSdkFirstInClasspath>true</gwtSdkFirstInClasspath>
	<extraJvmArgs>-Xmx1024M -Xss1024k -XX:MaxPermSize=512M</extraJvmArgs>
	<webappDirectory>${basedir}/target/tmp/resources/VAADIN/widgetsets</webappDirectory>
	[..]
</configuration>
```

This setting is wrong for my PC with RAM only 3GB. So I just need to lower it to:

```xml
<configuration>
	<gwtSdkFirstInClasspath>true</gwtSdkFirstInClasspath>
	<extraJvmArgs>-Xmx512M -Xss512k -XX:MaxPermSize=256M</extraJvmArgs>
	<webappDirectory>${basedir}/target/tmp/resources/VAADIN/widgetsets</webappDirectory>
	<hostedWebapp>${basedir}/target/tmp/resources/VAADIN/widgetsets</hostedWebapp>
	<noServer>true</noServer>
	<persistentunitcachedir>${basedir}/target/tmp/gwt-unitCache</persistentunitcachedir>
	<compileReport>true</compileReport>
	<strict>true</strict>
	<runTarget>http://localhost:8080/</runTarget>
</configuration>
```
