---
title: Generate jar and manifest Info in Jar in maven 2
date: "2012-09-13T18:05:32"
modified: "2013-05-09T10:23:29"
author: osify
categories:
  - Java
tags:
  - Manifest
  - Maven
  - Maven 2
  - Maven Tips
  - Plugin
  - Plugin Jar
  - Solution
  - Tips
lang: en
excerpt: "To create jar packaging of Java project with maven 2 based, we used a plugin called: maven-jar with simply paste the code below in pom.xml of plugins section: And if you want to add in your jar’s MANIFEST info, you can…"
origin:
  site: ask
  id: 155
  url: https://ask.osify.com/qa/155
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/155
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

To create jar packaging of Java project with maven 2 based, we used a plugin called: [maven-jar](http://maven.apache.org/plugins/maven-jar-plugin/usage.html) with simply paste the code below in pom.xml of plugins section:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
	<version>2.4</version>
    <configuration>
      <archive>
        <manifest>
          <addClasspath>true</addClasspath>
        </manifest>
      </archive>
    </configuration>
</plugin>
```

And if you want to add in your jar’s [MANIFEST info](http://maven.apache.org/shared/maven-archiver/examples/manifest.html), you can directly modify above plugin configuration as:

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
	<version>2.4</version>
    <configuration>
      <archive>
        <manifest>
          <addClasspath>true</addClasspath>
          <addDefaultImplementationEntries>true</addDefaultImplementationEntries>
          <addDefaultSpecificationEntries>true</addDefaultSpecificationEntries>
        </manifest>
      </archive>
    </configuration>
</plugin>
```

**Note:** If your pom.xml does not have a <name> element, then the Specification-Title and Implementation-Title entries will have “Unnamed – ${project.groupId}:${project.artifactId}:${project.version}” as their value.

Another post about manifest issue related custom string in manifest classpath, see stackoverflow [here](http://stackoverflow.com/questions/7007561/adding-custom-string-in-java-manifest-classpath-via-maven-pom-xml).

**Example:**

```xml
<plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-jar-plugin</artifactId>
        <configuration>
          <archive>
            <manifest>
              <mainClass>com.osify.training.MyMainClass</mainClass>
              <addClasspath>true</addClasspath>
              <classpathPrefix>./</classpathPrefix>
            </manifest>
            <manifestEntries>
              <Class-Path>./../config/ j2ee.jar</Class-Path>
            </manifestEntries>
          </archive>
        </configuration>
      </plugin>
</plugins>
```
