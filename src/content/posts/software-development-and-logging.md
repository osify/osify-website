---
title: Software Development and Logging
date: "2008-11-14T14:34:00"
modified: "2008-11-14T14:34:00"
author: osify
categories: []
tags:
  - Java
  - Log Management
  - MS DotNet
  - Oracle
  - PHP
  - PLSQL
  - SQLPlus
lang: en
excerpt: Beside understanding programming language and programming model etc. We must know how to manage the message from the development for user, for developer etc. We called logging. To manage log, we have many ways according…
origin:
  site: osify
  id: 71
  url: https://osify.com/2008/11/software-development-and-logging/
  host: osify.com
legacyUrls:
  - https://osify.com/2008/11/software-development-and-logging/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Beside understanding programming language and programming model etc. We must know how to manage the message from the development for user, for developer etc. We called logging.

To manage log, we have many ways according to programming language and platform.

Normally, most of the developers neglect on logging during development parse and starting to expect the log files when an issue happens. That’s why log management becomes very important for software development that we need to spend time to manage it as much as possible during development parse.

Log Management proceed into 4 levels:
1. Debug : this is a developer logging level. Should use it for any technical test or technical information that not requires to understand the business process.
2. Info : This is user logging level. Use it to describe the business process or information.
3. Warning: This log level is to focus on not mandatory missing element.
4. Error : Use this log level in case of technical or functional error.

There are many tools or add-on tool to help handling for various log management: (but I would suppose for open source project one, Apache)
– [log4j](http://logging.apache.org/log4j/1.2/index.html) : For Java
– [log4Net](http://logging.apache.org/log4net/index.html) : For MS DotNet
– [log4PHP](http://logging.apache.org/log4php/) : For PHP
– [log4plsql](http://www.oracle.com/technology/pub/articles/moulard_log4plsql.html) : For PL/SQL or SQLPlus of Oracle
