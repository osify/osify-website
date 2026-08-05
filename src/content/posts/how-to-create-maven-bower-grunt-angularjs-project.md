---
title: How to create maven bower grunt angularjs project
date: "2015-07-20T14:35:43"
modified: "2015-07-20T14:35:43"
author: osify
categories:
  - General
  - Java
  - NodeJS
tags:
  - AngularJS
  - Bower
  - GruntJS
  - Maven
  - NodeJS
  - Quickstart
lang: en
excerpt: I just published an article on Webapp structure with maven, here I would like to add another structure with AngularJS project for my Quickstart series. The first procedure is the same for maven that you need to read the…
origin:
  site: ask
  id: 722
  url: https://ask.osify.com/qa/722
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/722
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

I just published an article on Webapp structure with maven, here I would like to add another structure with AngularJS project for my [Quickstart series](http://ask.osify.com/qa/tag/quickstart).

The first procedure is the same for maven that you need to read the [previous article](http://ask.osify.com/qa/714).

#### Install AngularJS Generator

```bash
npm install -g generator-angular
```

#### Generate AngularJS Webapp Structure

```bash
yo angular
```

Next, we need to adapt the pom.xml and Gruntfile.js, the same way as previous [one](http://ask.osify.com/qa/714).

[![ask-osify-maven-bower-grunt-angular-page](/media/9f/9f710e1be9f2-ask-osify-maven-bower-grunt-angular-page.webp)](/media/9f/9f710e1be9f2-ask-osify-maven-bower-grunt-angular-page.webp)

Now I could have the structure of the maven project for AngularJS development as in this [Github repo](https://github.com/osify/maven-bower-grunt-angular).

I will modify to use the frontend plugin to save more lines on maven soon.
