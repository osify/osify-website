---
title: Verify Your Java/JDK 1.8 Environment
date: "2014-11-18T11:10:49"
modified: "2014-11-18T16:06:52"
author: osify
categories:
  - Java
tags:
  - Java
  - Java Basic
  - Java Beginner
  - JDK 1.8
lang: en
excerpt: As developer, sometimes, you need to know quickly if your environment is ready for a JDK after switch or something. Here I take a basic way to check in general, I think most of new developer always want that so I take…
origin:
  site: ask
  id: 596
  url: https://ask.osify.com/qa/596
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/596
mergedFrom: []
mediaCount: 4
featured: false
draft: false
---

As developer, sometimes, you need to know quickly if your environment is ready for a JDK after switch or something.

Here I take a basic way to check in general, I think most of new developer always want that so I take my Windows environment as example.

You need to check your JRE and JAVA_HOME if they are well configured or not:

[![verify-java-environment-config](/media/dd/dd11a90c7ba4-verify-java-environment-config.webp)](/media/dd/dd11a90c7ba4-verify-java-environment-config.webp)

## If Not Well Configure

You need to configure it in your Windows System Environment (Right Click on My Computer > Properties > Advanced System Setting > System Environemnt)

### JAVA_HOME

Most of the case, some people, just test *java -version* and found that they are on the right version but they forget to check JAVA_HOME which is required for development environment. Here is the configuration.

[![java-1.8-java-home-windows](/media/6e/6e5fa887dbd8-java-1-8-java-home-windows.webp)](/media/6e/6e5fa887dbd8-java-1-8-java-home-windows.webp)

### System PATH

This is where JRE needs to know which version on this system requests.

[![java-1.8-system-path-windows](/media/a1/a16ac45bf7fc-java-1-8-system-path-windows.webp)](/media/a1/a16ac45bf7fc-java-1-8-system-path-windows.webp)

You can see that after install JRE 1.8 (Java 8), you have a new path added firstly to the *path* system, it is *C:\ProgramData\Oracle\Java\javapath.*

It’s created by JRE 1.8 installer and you can go to the path above you will see, it’s including the shortcut to JRE of Java 8:

[![java-runtime-shortcut-windows](/media/26/2646cf8060a0-java-runtime-shortcut-windows.webp)](/media/26/2646cf8060a0-java-runtime-shortcut-windows.webp)

### Close Your Dos Prompt/Terminal

Some people before above configuration, they built their project on a DOS prompt or Terminal, when they finished the configuration, they didn’t close the current terminal for the new build so that the environments do not take any affect yet.

Close your current terminal and reopen it for a new build please.

Your project should compile now.

## Your Eclipse

Your eclipse need to check the compiler (JRE install) and build classpath as well. And you might want to check following issues/posts related to eclipse for Java 8:

- [If you could not see the Java Compiler with Java 8](http://stackoverflow.com/questions/13295275/programming-java-8-in-eclipse)
- [If you want your Eclipse Kelper Support Java 8, Update with Patch](https://wiki.eclipse.org/JDT/Eclipse_Java_8_Support_For_Kepler)

**Updated:**

You can verify your browsers via following link:

- <http://java.com/en/download/installed8.jsp>
