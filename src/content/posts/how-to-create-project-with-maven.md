---
title: How to create project with MAVEN
date: "2018-05-14T13:09:16"
modified: "2018-05-14T13:09:16"
author: sysomeho
categories:
  - Java
tags:
  - Beginner Guide
  - Head Start Project
  - Java
  - Maven
lang: en
excerpt: "I. How to create project in MAVEN There are two ways for create project in MAVEN Normal Java Project Step 1: cmd past below code to command prompt Note: DgroupId : name of your package (whatever you want) DartifactId :…"
featuredImage: /media/7d/7df9289d4243-z10.webp
origin:
  site: ask
  id: 926
  url: https://ask.osify.com/qa/926
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/926
mergedFrom: []
mediaCount: 16
featured: false
draft: false
---

**I. How to create project in MAVEN**

There are two ways for create project in MAVEN

# 1. Normal **Java Project**

- **Step 1:**
  - cmd
  - past below code to command prompt

```bash
mvn archetype:generate -DgroupId=com.javacambodia -DartifactId=NumberGenerator -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

- **Note:**
  - **DgroupId** : name of your package (whatever you want)
  - **DartifactId** : name of your project
  - Press enter![](/media/fe/fe7b03126543-a.webp)

- **Step 2:** Import project to eclipse
  - Go to eclipse IDE
  - File (menu) > Import
  - Maven > Existing Maven Projects![](/media/62/62c413bb4ba9-b.webp)
  - Click Next![](/media/40/4030e5e1bb6e-c.webp)
  - Browse…
  - You will see the *project structure* on the “Project Explorer”
  - Find your project location on your computer
  - Click OK
  - Click Finish![](/media/5f/5fd8da28702c-d.webp)
- **Step 3:**
  - To Run the project
  - Right click on the java main class
  - Run As –> Java Application![](/media/ed/ed4cd679c455-e.webp)

You will see the result![](/media/08/084886e8d725-f.webp)

# **2. Spring MVC** **Project Example**

- **Step 1:**
  - cmd
  - past below code to command prompt

    |  |
    | --- |
    | mvn archetype:generate -DarchetypeGroupId=pl.codeleak -DarchetypeArtifactId=spring-mvc-quickstart -DarchetypeVersion=5.0.0 -DgroupId=com.sysome -DartifactId=ArticleSolution -Dversion=1.0 -DarchetypeRepository=<http://kolorobot.github.io/spring-mvc-quickstart-archetype> |
  - Press Enter![](/media/2d/2dd80a5108c5-g.webp)
- **Step 2:** Import project to eclipse
  - Do the same things on the above page.
  - We will see the project structure as below![](/media/0b/0befbf90a834-h.webp)
- **Step 3:** Run the project
  - Run As
  - Run on the server
  - Wait until the server initialize![](/media/97/97dc57da23eb-i.webp)
  - The result will show as below![](/media/c0/c06e31f5636d-j.webp)
  - You can copy url and past to your browser (firefox, chrome, ……)
    - Home page![](/media/fb/fb9b08ddbb2c-k.webp)
    - About page![](/media/cb/cb6aa36df53a-l.webp)
    - Sign in page![](/media/0b/0b56c35b730b-m.webp)
    - Signup page![](/media/68/689f9f679b0e-n.webp)
    - Or![](/media/70/7014bc494055-o.webp)
