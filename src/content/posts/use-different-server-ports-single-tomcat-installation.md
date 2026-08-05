---
title: Use Different Server Ports on a Single Tomcat Installation
date: "2014-12-16T12:17:00"
modified: "2014-12-16T12:17:30"
author: osify
categories:
  - Apache Tomcat
tags:
  - Apache Tomcat
  - Java
lang: en
excerpt: In some cases, you might want to have only one Tomcat installation but use separate ports to deploy your application. As example case if you want to have the same context name to run on the same server. My solution on…
origin:
  site: ask
  id: 627
  url: https://ask.osify.com/qa/627
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/627
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

In some cases, you might want to have only one Tomcat installation but use separate ports to deploy your application. As example case if you want to have the same context name to run on the same server.

My solution on this matter, I introduce the port separation on the tomcat server.xml as shown as following.

I created two connection ports: 8080 and 8083:

```xml
<Service name="Catalina">
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
			   compression="on"
			   URIEncoding="UTF-8"
               compressionMinSize="2048"
	           noCompressionUserAgents="gozilla, traviata"
	           compressableMimeType="text/html,text/xml,text/json,text/javascript,text/css,text/plain, application/javascript,application/xml,application/xml+xhtml"
			   />

    <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />

    <Engine name="Catalina" defaultHost="localhost">

      <Realm className="org.apache.catalina.realm.LockOutRealm">
        <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
               resourceName="UserDatabase"/>
      </Realm>

      <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">

        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log." suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />

      </Host>
    </Engine>
  </Service>
  <Service name="Branch301">
    <Connector port="8083" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8473"
			   compression="on"
			   URIEncoding="UTF-8"
               compressionMinSize="2048"
	           noCompressionUserAgents="gozilla, traviata"
	           compressableMimeType="text/html,text/xml,text/json,text/javascript,text/css,text/plain, application/javascript,application/xml,application/xml+xhtml"
			   />


    <Connector port="8013" protocol="AJP/1.3" redirectPort="8473" />

    <Engine name="Branch301" defaultHost="localhost">

      <Realm className="org.apache.catalina.realm.LockOutRealm">
        <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
               resourceName="UserDatabase"/>
      </Realm>

      <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">

        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log." suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />

      </Host>
    </Engine>
  </Service>
```

After restart your tomcat, it will create separate context folder for you so that you can place different application deployment for each connection port on single tomcat installation.

[![tomcat-context-folders](/media/b6/b66eb675696d-tomcat-context-folders.webp)](/media/b6/b66eb675696d-tomcat-context-folders.webp)

As shown above, we can place different application context file in different folder (refer to each connection port) we wish. If you don’t know how to create tomcat context file, you can [read here](http://ask.osify.com/qa/416 "Deploy Application via Apache Tomcat Context").

Here, you can download the [sample server.xml](https://our-source.googlecode.com/svn/trunk/website-resources/tomcat/tomcat-server.xml "Sample file") above.
