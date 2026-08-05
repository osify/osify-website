---
title: របៀប Upload Image នៅក្នុង ASP.NET Web Form ជាមួយ Database
date: "2019-12-07T13:15:41"
modified: "2019-12-13T18:08:41"
author: sysomeho
categories:
  - ASP.net
tags:
  - Khmer
  - Khmer Tutorial
  - Tutorials
  - Upload Image With ASP.net
lang: km
excerpt: មាតិកា I. បង្កើត Database និង Table II. បង្កើត Connection III. បង្កើត Form សម្រាប់បញ្ចូលទិន្នន័យ IV. ដំណើរការកម្មវិធី I. បង្កើត Database និង Table សូមធ្វើការបង្កើត Database ក្នុង SQL server ដោយដាក់ឈ្មោះ Database…
featuredImage: /media/69/69263dccfddc-7.webp
origin:
  site: ask
  id: 11337
  url: https://ask.osify.com/qa/11337
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11337
mergedFrom: []
mediaCount: 10
featured: false
draft: false
---

**មាតិកា**

I.   បង្កើត Database និង Table

II. បង្កើត Connection

III. បង្កើត Form សម្រាប់បញ្ចូលទិន្នន័យ

IV. ដំណើរការកម្មវិធី

#### **I.          បង្កើត Database និង Table**

សូមធ្វើការបង្កើត Database ក្នុង SQL server ដោយដាក់ឈ្មោះ Database ដែលអ្នកចង់បាន ក្នុងលំហាត់នេះខ្ញុំដាក់ឈ្មោះថា**“SampDB”**។បន្ទាប់មកទៀតសូមធ្វើការបង្កើត Table មួយដោយដាក់ឈ្មោះថា**“employees”** ដោយមាន fields ដូចរូប៖

![](/media/01/017cff6a15f1-1.webp)

#### **II.          បង្កើត Connection**

សូមបើក Web.config រួចសរសេរ connection string ដូចខាងក្រោម៖

![](/media/ad/ad722b8aed73-2.webp)

#### **III.          បង្កើត Form សម្រាប់បញ្ចូលទិន្នន័យ**

- បង្កើតនូវ form សម្រាប់អាចអោយ user ធ្វើការបញ្ចូលនូវទិន្នន័យក៏ដូចជា
  image សម្រាប់ upload ចូលទៅក្នុង
  database table

![](/media/15/15d3bf55c5d1-3.webp)

ក្នុង Code Behind សូមធ្វើការសរសេរកូដ Event ទៅលើប៊ូតុងដើម្បីធ្វើការ save​ ចូលទៅក្នុង database របស់យើង

![](/media/7c/7c6329ea5199-4.webp)

#### **IV.          ដំណើរការកម្មវិធី**

- ចុច Run ដើម្បីដំណើរការកម្មវិធី

![](/media/ec/ece1d180ef69-5.webp)

ករណីមិនជ្រើសរើសយក file image

![](/media/be/be8668ad075e-6.webp)

ករណីមិនជ្រើសរើសយក file image

![](/media/69/69263dccfddc-7.webp)

ក្នុង Table យើងនឹងទទួលបាន Records ដូចរូប

![](/media/32/32207c3a9884-8.webp)

ក្នុង Folder “upload” យើងទទួលបាន image ដែលបាន uploaded

![](/media/71/712f07a2d23b-9.webp)
