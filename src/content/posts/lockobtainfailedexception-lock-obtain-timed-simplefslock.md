---
title: "LockObtainFailedException: Lock obtain timed out: SimpleFSLock@ [Issue/Explain]"
date: "2014-07-07T19:27:10"
modified: "2014-07-07T19:28:18"
author: osify
categories:
  - Java
tags:
  - Apache Lucene
  - Hibernate
  - Tomcat
lang: en
excerpt: Let’s me start from a scenario of a Java (Hibernate, Spring App)/tomcat application that would give you as myself, the error as stated in the subject above. To reproduce In some cases, as you do as following steps:…
origin:
  site: ask
  id: 508
  url: https://ask.osify.com/qa/508
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/508
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Let’s me start from a scenario of a Java (Hibernate, Spring App)/tomcat application that would give you as myself, the error as stated in the subject above.

### To reproduce

In some cases, as you do as following steps:

- Build with clean install
- Start Tomcat as normal
- Stop Tomcat
- And Start Tomcat again
- You got an error with *LockObtainFailedException*

**The error message**

```actionscript
org.apache.lucene.store.LockObtainFailedException: Lock obtain timed out: SimpleFSLock@C:\Users\youruser\YourProject-1.0-SNAPSHOT\index\com.yourproject.model.MyModel\write.lock
```

### Work Around Solution

Here is my first solution, I noticed each time I got the error

- Each before start any tomcat, you need to run: *mvn clean install*
- Then can start tomcat as normal

### Exactly Cause & Temporary Solution

What’s the exactly issue I really found out. It is because of your search index in configuration of file: *hibernate.properties*

```actionscript
app.search.index.basedir=\${user.home}/${project.build.finalName}/index
hibernate.search.default.directory_provider=filesystem
hibernate.search.default.locking_strategy=simple
hibernate.search.default.exclusive_index_use=true
hibernate.search.lucene_version=LUCENE_35
hibernate.search.analyzer=org.apache.lucene.analysis.en.EnglishAnalyzer
hibernate.search.worker.batch_size=100
```

According to the [doc of LockFactory](https://access.redhat.com/documentation/en-US/Red_Hat_JBoss_Web_Framework_Kit/2.5/html/Hibernate_Search_Guide/LockFactory_Configuration.html) as in one document of RedHat, the strategy config with *simple* said that:

> If for some reason you had to kill your application, you will need to remove this file before restarting it.

So that for my temporary solution, I consider to disable the index for awhile in my development environment and keep above setting for my production environment.

```actionscript
hibernate.search.default.locking_strategy=none
```

### Real Solution

I still need more flexible solution which is better than above “Work Around Solution” & “Temporary Solution” for my development environment, nor deleting the file for each restarting the tomcat.

Please drop in comment if you have some experiences about this issue.
