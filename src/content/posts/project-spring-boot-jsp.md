---
title: របៀបបង្កើត Project Spring Boot ជាមួយ JSP
date: "2018-06-02T17:12:18"
modified: "2018-06-02T17:12:18"
author: sysomeho
categories:
  - Java
tags:
  - Beginner Guide
  - Java
  - Spring Boot
  - Spring Framework
lang: km
excerpt: ១.​សេចក្តីផ្តើម Spring Boot មានលក្ខណៈងាយស្រួលសម្រាប់កាត់បន្ថយក្នុងការសរសេរកូដបានច្រើន ដោយវារួមមាននូវ Features ដូចតទៅៈ Create stand-alone Spring applications Embed Tomcat, Jetty or Undertow directly (no need to deploy…
origin:
  site: ask
  id: 1066
  url: https://ask.osify.com/qa/1066
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1066
mergedFrom: []
mediaCount: 28
featured: false
draft: false
---

### ១.​សេចក្តីផ្តើម

Spring Boot មានលក្ខណៈងាយស្រួលសម្រាប់កាត់បន្ថយក្នុងការសរសេរកូដបានច្រើន ដោយវារួមមាននូវ Features ដូចតទៅៈ

- Create stand-alone Spring applications
- Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
- Provide opinionated ‘starter’ POMs to simplify your Maven configuration
- Automatically configure Spring whenever possible
- Provide production-ready features such as metrics, health checks and externalized configuration
- Absolutely **no code generation** and **no requirement for XML** configuration

### ២.​តម្រូវការ

តម្រូវការសម្រាប់បង្កើត Spring Boot ត្រូវមានៈ

- Spring Boot 1.4.2.RELEASE
- Spring 4.3.4.RELEASE
- Tomcat Embed 8.5.6
- Maven 2, 3
- Java 7, 8

### ៣.រចនាសម្ព័ន្ធ Project

ខាងក្រោមនេះគឺជា Project Structure ដែលបាន Generate រួចរាល់ ដូចរូបខាងក្រោម

![](/media/82/827728368ef8-1a.webp)

![](/media/3f/3ffd51c3df9b-1b.webp)

### ៤.​ការបង្កើត Project

ដើម្បីបង្កើត Project ជាមួយ Spring Boot បាន យើងមានវិធីចំនួន២យ៉ាងគឺ

- តាមរយៈ Eclipse IDE ឬ Spring Suit Tool (STS )
- តាមរយៈ Spring Initializr (website: <https://start.spring.io/>)

ដូចនេះ ខ្ញុំសូមធ្វើការបង្ហាញពីការបង្កើត project តាមវិធីសាស្រ្តនិមួយៗ៖

- ***បង្កើត*** ***Project តាមរយៈ Eclipse IDE***
  - File
  - New
  - Other…![](/media/ef/eff06837b154-1c.webp)
  - ត្រង់ Spring Boot
  - សូមជ្រើសរើសយក **Spring Starter Project**
  - ចុច Next![](/media/5c/5c47409a5e96-1d.webp)
  - សូមបំពេញពត៍មានខាងលើ
  - ចុច Next![](/media/bd/bd30efe2c221-1e.webp)
  - ចុច Next![](/media/fb/fbe67f231324-1f.webp)
  - សូមចុច Finish
  - រង់ចាំបន្តិច ដើម្បីអោយ Project ធ្វើការ Build និង ទាញយក dependencies ពី Internet។
    - **ចំណាំៈ** ដើម្បីបង្កើត Project ជាមួយ Spring / Spring Boot ទាមទារអោយយើងភ្ជាប់ជាមួយ Internet។![](/media/6e/6eff5dd38c9c-1g.webp)![](/media/3d/3d4e8093d2ae-1h.webp)
- ***បង្កើត*** ***Project តាមរយៈ Spring Initializr***
  - ចូលទៅកាន់ Website: <https://start.spring.io/>![](/media/ab/ab3487d5f82a-1i.webp)
    - Group: ឈ្មោះ Package នៃ Project
    - Artifact: ឈ្មោះ Project
    - Search for dependencies: ជា dependencies ដែលនឹងត្រូវ import ចូលទៅក្នុង ​Project របស់យើង។ ក្នុងនេះដែរ យើងអាច Skip វា ចាំដាក់នៅពេលក្រោយក៏បាន។
  - សូមចុចលើ Switch to the full version ដើម្បីជ្រើសរើស Options មួយចំនួនទៀតសម្រាប់ Project
  - បន្ទាប់មកចុច លើប៊ូតុង Generate Project![](/media/c1/c18e536ec0f9-1j.webp)
  - បន្ទាប់មកសូម save project![](/media/70/7050f1433d84-1k.webp)
  - សូម Extract file
  - ចូលទៅ Eclipse ដើម្បី Import project
    - File
    - Import …![](/media/d3/d395072ba4be-1l.webp)
    - ត្រង់ Maven
    - យក Existing Maven Projects
    - Click Next
    - ចុច Browse ទៅរក Project directory![](/media/6e/6ede18d03e83-1m.webp)
    - ចុច Finish
    - យើងនឹងឃើញ Project ក្នុង Eclipse ដូចរូប![](/media/9e/9e0c4c986ce5-1n.webp)
  - សូមចុចលើ **xml** យើងនឹងទទួលបាន dependencies មួយចំនួនដូចខាងក្រោម![](/media/b8/b8551c66b86b-1o.webp)![](/media/d0/d0a6304e05c8-1p.webp)![](/media/70/706a14c5d1ea-1q.webp)

### ៥.​ការ Implementation

- ក្នុង Java Resources à src/main/java
- package “com.sysome.spring”
  - SpringExampleApplication.java![](/media/b0/b0676a9b6945-1s.webp)**1**. ត្រូវ extends ចេញពី class “**SpringBootServletInitializer”**
  - **2**. **SpringBootServletInitializer** run a SpringApplication from a traditional

- WAR deployment
- បង្កើត នូវ Spring Controller មួយឈ្មោះ “WelcomeController.java”
- ក្នុង Java Resources –> src/main/java
- package “com.sysome.spring”![](/media/35/35dffb9f8e1f-1t.webp)
- បង្កើត នូវ JSP file មួយឈ្មោះ “welcome.jsp”
  - សូមបង្កើត file jsp ក្នុង **src/main/webapp/WEB-INF/jsp/welcome.jsp![](/media/e9/e9a71d4de3fa-1u.webp)![](/media/34/349ec90eeb0c-1v.webp)**
- បង្កើត នូវ CSS file មួយឈ្មោះ “main.css”
  - /src/main/resources/static/css/main.css![](/media/1d/1d967a7dc366-1w.webp)
  - សូមចុចលើ file “application.properties”
    - /src/main/resources/application.properties![](/media/e6/e66d55d5716b-1x.webp)
  - ក្រោយពីយើងបង្កើត files ទាំងនោះរួចរាល់ហើយ យើងនឹងទទូលបាន Structure ថ្មីដូចរូប![](/media/1c/1c713ec4bbc5-1y.webp)![](/media/7f/7f64dcb024e4-1z.webp)

### ៦.​ដំណើរការ Project (Run Project)

ដើម្បី Run Project បាន​យើងត្រូវ

- ចុច Mouse ស្តាំលើ project
- យក​ Run As
- យក Java Application ឬ Spring Boot App![](/media/8c/8cf594874be8-1z1.webp)
- ពេលនោះវានឹងបង្ហាញផ្ទាំងដូចខាងក្រោម![](/media/68/68b89a2a0154-1z2.webp)
- សូមបើក Browser រួចវាយនៅលើ Address bar “localhost:8080”
  - Localhost:8080 –> យើងអាចប្តូរport បាន ដោយសារកុំព្យូទ័រនេះគឺមាន port 8080
- វានឹងបង្ហាញលទ្ធផលដូចរូប![](/media/13/139e1f58009e-1z3.webp)
