---
title: របៀប Retrieve Data ចេញពី Mysql Database ជាមួយ Laravel
date: "2019-12-27T23:05:00"
modified: "2019-12-31T11:48:35"
author: sysomeho
categories:
  - PHP
tags:
  - Khmer Tutorial
  - Laravel
  - Laravel 5.6
  - Laravel Tutorial
  - Retrieve data from MySql Database
lang: km
excerpt: មាតិកា I. បង្កើត View “index” II. សរសេរកូដក្នុង StudentController ដើម្បី fetch data ពី database III. ដំណើរការកម្មវិធី I. បង្កើត View “index” បង្កើត index.blade.php ក្នុង folder Views à student សរសេរកូដក្នុង index page…
featuredImage: /media/6b/6bec14df8890-6-2.webp
origin:
  site: ask
  id: 11392
  url: https://ask.osify.com/qa/11392
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11392
mergedFrom: []
mediaCount: 7
featured: false
draft: false
---

**មាតិកា**

I.   បង្កើត View “index”

II. សរសេរកូដក្នុង StudentController ដើម្បី fetch data ពី database

III. ដំណើរការកម្មវិធី

#### **I.          បង្កើត View “index”**

- បង្កើត index.blade.php ក្នុង folder
  Views à student

![](/media/72/72489f70f93b-1-2.webp)

សរសេរកូដក្នុង index page

![](/media/5f/5fc6bbe2d192-2-2.webp)

#### **II.          សរសេរកូដក្នុង StudentController ដើម្បី fetch data ពី database**

- បើក
  StudentController
- ក្នុង index
  function សូមសរសេរកូដខាងក្រោម

![](/media/df/df7c1bfdc299-3-2.webp)

#### **III.          ដំណើរការកម្មវិធី**

ដើម្បីដំណើរការកម្មវិធីបាន យើងត្រូវចូលទៅកាន់ path folder project របស់យើង រួចសូមវាយ command “**php artisan serve**”

![](/media/1f/1fb2a8c30cf1-4-2.webp)

ត្រូវ start xampp ដើម្បីអាចធ្វើការ access ទៅកាន់ database បាន

![](/media/0c/0c8d619687e8-5-2.webp)

ចូលទៅកាន់​ Browser រួចវាយ **“http://127.0.0.1:8000/student/”**

![](/media/6b/6bec14df8890-6-2.webp)
