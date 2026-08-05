---
title: JBoss 4.2.2.GA – Deploying issue on class loading and out of memory
date: "2010-01-26T11:14:00"
modified: "2010-05-11T17:12:35"
author: osify
categories:
  - Tips
tags:
  - J2EE
  - Java
  - Jboss
lang: en
excerpt: "While deploying my applications with JBoss 4.2.2.GA, using JDK 1.5 I got some issue with class loading issue something like: If meet such error: For sure, missing Oracle JDBC driver so Copy the Oracle JDBC Driver…"
origin:
  site: osify
  id: 97
  url: https://osify.com/2010/01/jboss-4-2-2-ga-deploying-issue-on-class-loading-and-out-of-memory/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/01/jboss-4-2-2-ga-deploying-issue-on-class-loading-and-out-of-memory/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

While deploying my applications with JBoss 4.2.2.GA, using JDK 1.5 I got some issue with class loading issue something like:

1. If meet such error:

```
org.jboss.deployment.DeploymentException: Error while fixing table name;
- nested throwable: (org.jboss.util.NestedSQLException: Could not create connection;
- nested throwable: (org.jboss.resource.JBossResourceException:
Failed to register driver for: oracle.jdbc.driver.OracleDriver;
- nested throwable: (java.lang.ClassNotFoundException:
No ClassLoaders found for: oracle.jdbc.driver.OracleDriver));
- nested throwable: (org.jboss.resource.JBossResourceException:
Could not create connection;
- nested throwable: (org.jboss.resource.JBossResourceException:
Failed to register driver for: oracle.jdbc.driver.OracleDriver;
- nested throwable: (java.lang.ClassNotFoundException:
No ClassLoaders found for: oracle.jdbc.driver.OracleDriver))))
```

For sure, missing Oracle JDBC driver so Copy the Oracle JDBC Driver (10.2.0.1.0) (ojdbc14.jar) to lib folder of %JBOSS_HOME%/lib or at your server %JBOSS_HOME%/server/default/lib directory.

2. If something around:

```
2010-01-25 15:03:27,113 DEBUG [org.jboss.web.tomcat.service.TomcatDeployer]
Classes needed for clustered webapp unavailablejava.lang.NoClassDefFoundError:
org/jgroups/blocks/MethodCallat org.jboss.web.tomcat.service.session.JBossCacheService.
(JBossCacheService.java:70)at org.jboss.web.tomcat.service.session.JBossCacheManager.init
(JBossCacheManager.java:157)at org.jboss.web.tomcat.service.
TomcatDeployer.performDeployInternal(TomcatDeployer.java:336)
```

So please try as following:

- Define a isolated classloader. To do it, change %JBOSS_HOME%/server/default/conf/jboss-service.xml :

```
<mbean code="org.jboss.naming.NamingService" name="jboss:service=Naming"
    dd="resource:xmdesc/NamingService-xmbean.xml">
[ ... ]
<attribute name="CallByValue">true</attribute>
[ ... ]
</mbean>
```

- `change %JBOSS_HOME%/server/default/deploy/ear-deployer.xml :`

```
<server>
[...]
<attribute name="Isolated">true</attribute>
[...]
<attribute name="CallByValue">true</attribute>
[...]
</server>
```

- `change %JBOSS_HOME%/server/default/deploy/jboss-web.deployer/META-INF/jboss-service.xml :`

```
[...]
<attribute name="Java2ClassLoadingCompliance">true</attribute>
[...]
<attribute name="UseJBossWebLoader">true</attribute>[...]
```

3. When you wanna to deploy more than 2 applications on the same JBoss server instance, you may face some issues with unsuccessful deployment and with some error around Out of Memory.
So we need to increase memory allocation for Jboss, let’s try to add/change JAVA_OPTS for memory allocation in file %JBOSS_HOME%/bin/run.bat as

> set JAVA_OPTS=%JAVA_OPTS% -Xms512m -Xmx1024m -XX:MaxPermSize=128m

My applications are now deployed.
