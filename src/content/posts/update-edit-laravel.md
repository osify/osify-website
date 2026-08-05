---
title: របៀប Update/Edit ជាមួយ Laravel
date: "2020-01-07T14:57:29"
modified: "2020-01-07T21:44:27"
author: sysomeho
categories:
  - PHP
tags:
  - Khmer
  - Khmer Tutorial
  - Laravel
  - Laravel 5.6
  - Laravel Tutorial
  - Laravel Update Data
lang: km
excerpt: មាតិកា I. បើក View “index” II. បង្កើត View “edit” III. សរសេរកូដក្នុង StudentController ដើម្បី Edit/update data IV. ដំណើរការកម្មវិធី I. បើក View “index” ចូលទៅកាន់ index.blade.php រួចធ្វើការសរសេរកូដដើម្បី edit II. បង្កើត…
featuredImage: /media/d9/d961139e4a76-3.webp
origin:
  site: ask
  id: 11404
  url: https://ask.osify.com/qa/11404
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11404
mergedFrom: []
mediaCount: 11
featured: false
draft: false
---

**មាតិកា**

I.   បើក View “index”

II. បង្កើត View “edit”

III. សរសេរកូដក្នុង StudentController ដើម្បី Edit/update data

IV. ដំណើរការកម្មវិធី

#### **I.          បើក View “index”**

ចូលទៅកាន់ index.blade.php រួចធ្វើការសរសេរកូដដើម្បី edit

![](/media/71/7109aa0f4a84-1.webp)

#### **II.          បង្កើត View “edit”**

- បង្កើត edit.blade.php ក្នុង folder Views à student

![](/media/6a/6a0f63267e55-2.webp)

សរសេរកូដក្នុង edit page

![](/media/d9/d961139e4a76-3.webp)

#### **III.          សរសេរកូដក្នុង StudentController ដើម្បី Edit/update data**

- បើក
  StudentController
- ក្នុង edit
  function សូមសរសេរកូដខាងក្រោម

![](/media/8a/8ad0958bfc51-4.webp)

ក្នុង update function សូមសរសេរកូដខាងក្រោម

![](/media/93/9310a8b88855-5.webp)

#### **IV.          ដំណើរការកម្មវិធី**

ដើម្បីដំណើរការកម្មវិធីបាន
យើងត្រូវចូលទៅកាន់ path folder project របស់យើង រួចសូមវាយ
command “**php artisan serve**”

- ចូលទៅកាន់​ Browser
  រួចវាយ **“http://127.0.0.1:8000/student/”**

![](/media/54/540cb06898e2-6.webp)

ចុចលើ Edit

![](/media/29/29b19bfb30ac-7.webp)

លុប data ក្នុង text box ចោល វានឹងបង្ហាញដូចរូប

![](/media/45/4591c6ce7277-8.webp)

ធ្វើការកែប្រែទិន្នន័យ

![](/media/b7/b7266ad944e2-9.webp)

វានឹង redirect ទៅកាន់ list

![](/media/13/137c6e8dfe4d-10.webp)
