---
title: Weblogic 10.3 – Create client jar
date: "2011-01-17T19:20:14"
modified: "2012-03-05T15:35:19"
author: osify
categories:
  - Application
  - Development
tags:
  - Deployment
  - Java
  - Weblogic
  - Weblogic 10.3
lang: en
excerpt: Working with Weblogic 8.1, it’s fine just to put jar of weblogic-8.1.jar into your classpath, your client application will find weblogic server easily but with Weblogic 9+ (in my case, Weblogic 10.3), it’s not the case…
origin:
  site: osify
  id: 460
  url: https://osify.com/2011/01/weblogic-10-3-create-client-jar/
  host: osify.com
legacyUrls:
  - https://osify.com/2011/01/weblogic-10-3-create-client-jar/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Working with Weblogic 8.1, it’s fine just to put jar of weblogic-8.1.jar into your classpath, your client application will find weblogic server easily but with Weblogic 9+ (in my case, Weblogic 10.3), it’s not the case if you don’t know.

You may get similar errors as:

```java
java.lang.NoClassDefFoundError: weblogic/utils/NestedException
or
java.lang.NoClassDefFoundError: weblogic/descriptor/DescriptorBean
or
java.lang.NoClassDefFoundError: weblogic/utils/classloaders/GenericClassLoader
```

So you will try to drop following jars:

- weblogic-10.3.0.0.jar
- webserviceclient.jar
- wlclient.jar
- wlfullclient.jar
- wljmsclient.jar
- wls-api.jar or
- wseeclient.jar
- etc

But you will find it more than 2 days and still got most of NoClassDefFoundError as my cases, I almost went crazy with all these but finally found the solution, it’s an easy way to group all needed client jar into one jar file: **wlfullclient.jar** via command:

```java
WL_HOME/server/lib>java -jar ../../../modules/com.bea.core.jarbuilder_1.2.0.0.jar
```

You will find it in weblogic server lib folder (**WL_HOME/server/lib**/**wlfullclient.jar**)

Add it into your client application classpath: ./wlfullclient.jar and drop the file into your client app library.

Everything will be Ok.

Do not doubt as myself, Good luck!
