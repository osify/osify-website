---
title: របៀបប្រើប្រាស់ CRUD ជាមួយ Entity Framework ក្នុង ASP.NET MVC
date: "2020-07-18T09:54:42"
modified: "2020-07-18T11:12:59"
author: sysomeho
categories:
  - ASP.net
tags:
  - CRUD with Entity Framework
  - Tutorial Khmer
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. ជំហានទី១៖ បង្កើត Database និង Table III. ជំហានទី២៖ បង្កើត MVC project IV. ជំហានទី៣៖ បង្កើត Entity data model V. ជំហានទី៤៖ បង្កើត Controller VI. ជំហានទី៥៖ ដំណើរការកម្មវិធី I. សេចក្តីផ្តើម…
origin:
  site: ask
  id: 11647
  url: https://ask.osify.com/qa/11647
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11647
mergedFrom: []
mediaCount: 23
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II.  ជំហានទី១៖ បង្កើត Database និង Table

III. ជំហានទី២៖ បង្កើត MVC project

[I](#_Toc43503150)V. ជំហានទី៣៖ បង្កើត Entity data model

V.  ជំហានទី៤៖ បង្កើត Controller

VI. ជំហានទី៥៖ ដំណើរការកម្មវិធី

#### **I.          សេចក្តីផ្តើម**

ក្នុងមេរៀននេះយើងនឹងធ្វើការទៅលើការប្រើប្រាស់ Entity Framework ក្នុង ASP.NET MVC ដ៏សាមញ្ញបំផុតមួយ ដែលអាចជួយដល់អ្នកទាំងអស់គ្នាយកទៅអនុវត្តន៍ដោយខ្លួនឯងបាន។ វាមានលក្ខណៈងាយស្រួល ដោយយើងមិនចាំបាច់បង្កើត class Model ដោយខ្លួនឯងទេ ដោយវាបាន Generate class អោយយើងស្រាប់ចេញពី entity Table របស់យើងទាំងស្រុង។ ដើម្បីកាន់តែយល់បន្ថែមទៀត សូមលោកអ្នកអនុវត្តន៍តាមជំហានដែលខ្ញុំបានណែនាំដូចខាងក្រោមនេះ។

#### **II.        ជំហានទី១៖ បង្កើត Database និង Table**

សូមបង្កើត Database រួចដាក់ឈ្មោះទៅតាមអ្វីដែលអ្នកត្រូវការ។ ក្នុងការអនុវត្តន៍នេះ ខ្ញុំសូមដាក់ឈ្មោះ Database របស់ខ្ញុំគឺ **MyDB** ដែលមាន Table មួយឈ្មោះថា “**Student**” រួមទាំង fields ដូចរូប

![](/media/1e/1eb3360773e3-1.webp)

#### **III.          ជំហានទី២៖ បង្កើត MVC project**

បង្កើត Project MVC ដែលមាន Structure ដូចរូប

![](/media/21/215a3b7c2229-2.webp)

#### **IV.          ជំហានទី៣៖ បង្កើត Entity data model**

សូមបង្កើត entity data model ដើម្បីធ្វើការ add connection string ចូលទៅក្នុង web.config file។ យើងមិនចាំបាច់ខ្វល់ខ្វាយរឿង connection ក្នុង web.config ឡើយ វានឹងបង្កើតដោយស្វ័យប្រវត្តិអោយយើង។

- ចុច Mouse ស្តាំលើ Model
- Add
- New Item…

![](/media/87/87cd2aa1a254-3.webp)

វានឹងលោតផ្ទាំងអោយយើង

![](/media/5b/5b18ded33275-4.webp)

រើសយក ADO.NET Entity Data Model

![](/media/ce/ce07de62b67e-5.webp)

- យក EF Designer from Database
- Next

![](/media/c5/c5268e07449f-6.webp)

ចុច New Connection…

![](/media/87/877a1a2fce15-7.webp)

- បំពេញព័ត៌មានខាងលើ
- ចុច OK

![](/media/16/16e216631cd4-8.webp)

ចុច Next

![](/media/c4/c474ca3f6c85-9.webp)

- ធីកយក Table របស់អ្នក
- រួចចុច Finish
- យើងនឹងទទួលបាន

![](/media/d0/d03ab337e56f-10.webp)

#### **V.          ជំហានទី៤៖ បង្កើត Controller**

បង្កើត Controller “**CRUD**” ដូចខាងក្រោម

- **Method សម្រាប់ Create ទិន្នន័យ**

![](/media/6d/6d5a8153415d-11.webp)

- បង្កើត View សម្រាប់ Create
  - ចុច Mouse ស្តាំលើ create
  - Add View

![](/media/55/55e70987cf36-12.webp)

- វានឹងចេញផ្ទាំងមួយសម្រាប់អោយយើងជ្រើសរើស
  - ត្រង់ Template: Create

![](/media/c3/c3aca564c34a-13.webp)

**Method សម្រាប់ Read ទិន្នន័យ**

![](/media/ca/ca778ca835bd-14.webp)

- បង្កើត View សម្រាប់ Create
  - ចុច Mouse ស្តាំលើ Read
  - Add View

![](/media/2c/2c9c3a7e1cb8-15-1.webp)

**Method សម្រាប់ Update ទិន្នន័យ**

![](/media/c3/c3ade8b3b604-16-1.webp)

- បង្កើត View សម្រាប់ Update
  - ចុច Mouse ស្តាំលើ Update
  - Add View

![](/media/c2/c23b6c671992-17.webp)

**Method សម្រាប់ Delete ទិន្នន័យ**

![](/media/25/250d915b5aa4-18.webp)

- បង្កើត View សម្រាប់ Update
  - ចុច Mouse ស្តាំលើ Update
  - Add View

![](/media/03/032a7c2ebcfe-19.webp)

#### V**I.          ជំហានទី៥៖ ដំណើរការកម្មវិធី**

សូមធ្វើការដំណើរការកម្មវិធីដូចខាងក្រោម

- Read ទិន្នន័យ

![](/media/a0/a0235dd55e7d-20.webp)

Create ទិន្នន័យ

![](/media/5c/5c72b1dda837-21.webp)

Update ទិន្នន័យ

![](/media/9e/9ef1071442ae-22.webp)

Delete ទិន្នន័យ

![](/media/e7/e7372a1cbb25-23.webp)
