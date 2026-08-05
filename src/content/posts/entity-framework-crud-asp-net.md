---
title: របៀបប្រើប្រាស់ Entity Framework ជាមួយ CRUD ក្នុង ASP.NET
date: "2019-10-20T10:14:48"
modified: "2019-10-24T22:37:14"
author: sysomeho
categories:
  - ASP.net
tags:
  - ASP.net
  - CRUD with Entity Framework
  - Khmer Tutorial
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. ជំហានទី១៖ បង្កើត Table III. ជំហានទី២៖ បង្កើត Project IV. ជំហានទី៣៖ Add “ADO.Net Entity Data Model” V. ជំហានទី៤៖ បង្កើត interface VI. ជំហានទី៥៖ សរសេរកូដក្នុង Code Behind VII.ជំហានទី៦៖…
featuredImage: /media/98/98b610e9fc25-24.webp
origin:
  site: ask
  id: 1857
  url: https://ask.osify.com/qa/1857
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1857
mergedFrom: []
mediaCount: 25
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II. ជំហានទី១៖ បង្កើត Table

III. ជំហានទី២៖ បង្កើត Project

IV. ជំហានទី៣៖ Add “ADO.Net Entity Data Model”

V.  ជំហានទី៤៖ បង្កើត interface

VI. ជំហានទី៥៖ សរសេរកូដក្នុង Code Behind

VII.ជំហានទី៦៖ ដំណើរការកម្មវិធី

#### **I.          សេចក្តីផ្តើម**

ក្នុងមេរៀននេះ នឹងបង្ហាញលោកអ្នកអំពីការប្រើប្រាស់ CRUD ជាមួយ entity framework ក្នុង asp.net ដោយមានការអនុវត្តន៍ពីមួយជំហានទៅមួយជំហាន ដើម្បីអាចចេញជាលទ្ធផល។
ដើម្បីកាន់តែយល់ច្បាស់ សូមធ្វើការអនុវត្តន៍ដូចខាងក្រោមនេះ៖

#### **II.         ជំហានទី១៖ បង្កើត Table**

សូមធ្វើការបង្កើត table មួយដែលមានឈ្មោះថា “Student” សម្រាប់ធ្វើការរក្សាទុកទិន្នន័យដែលបានបញ្ចូលតាមរយៈ interface

![](/media/ea/ea852e7d940b-1-1.webp)

យើងនឹងទទួលបាន table ដូចរូប

![](/media/4e/4e87edbc04d1-2-1.webp)

#### **III.          ជំហានទី២៖ បង្កើត Project**

សូមធ្វើការបង្កើត project

![](/media/6f/6f35f7aa435e-3-1.webp)

រួចយើងនឹងទទួលបាន project structure ដូចរូបខាងក្រោម

![](/media/b0/b0bb2ab5b696-4-1.webp)

#### **IV.          ជំហានទី៣៖ Add “ADO.Net Entity Data Model”**

- ចូលទៅកាន់ Solution Explorer
- ចុច Mouse ស្តាំ រើសយក “Add” –> យក “Add new item”

![](/media/3a/3aae709eafd2-5-2.webp)

- វានឹង pop up ផ្ទាំងមួយអោយយើង
- សូមធ្វើការជ្រើសរើសយក ADO.Net
  Entity Data Model

![](/media/42/426ff5999d5f-6-1.webp)

- សូមជ្រើសរើស generate
  from database រួចចុច Next

![](/media/c6/c6bc86e6c669-7.webp)

- វានឹងលោតចេញផ្ទាំងមួយទៀត

![](/media/c6/c6dcc307c9f1-8.webp)

- ចុចលើប៊ូតុង New
  Connection…
- រូចវានឹងលោតមកផ្ទាំងមួយទៀត

![](/media/cf/cfe37ec73e3f-9.webp)

- សូមធ្វើការបំពេញនូវ SQL
  Server Credential និងព័ត៌មាន Database
- បន្ទាប់មកវានឹងចេញផ្ទាំង window ថ្មីមួយទៀត ដែលមានព័ត៌មាន connection string ដែលត្រូវបាន
  generated ពីជំហានខាងលើ

![](/media/07/0751d5bd98ad-10.webp)

- ចុច Next
- រូចមកទៀត
  វានឹងបង្ហាញផ្ទាំងសម្រាប់អោយយើង ជ្រើសរើស database object

![](/media/93/93ae44443450-11.webp)

- ចុច Finish
- យើងនឹងទទួលបាន file ថ្មីមួយទៀតក្នុង project structure របស់យើង

![](/media/c8/c89182cd3f86-12.webp)

- ដូចនេះ connection
  ទៅកាន់ database រួចរាល់សម្រាប់អោយយើងធ្វើការសរសេរកូដដើម្បីធ្វើ
  operation ផ្សេងៗទៅលើវាបាន។
- សូមបើក web.config ពេលនោះយើងនឹងឃើញ connection ដែលត្រូវបាន
  generate ដោយស្វ័យប្រវត្តិ

![](/media/26/2679aa6d26b6-13.webp)

#### **V.          ជំហានទី៤៖ បង្កើត interface**

បង្កើត web form សម្រាប់ធ្វើការ insert, delete, update, និង retrieve ទិន្នន័យ ដូចខាងក្រោម

![](/media/3c/3cd586537d5f-14.webp)

#### **VI.          ជំហានទី៥៖ សរសេរកូដក្នុង****Code Behind**

សូម double click លើប៊ូតុង Save

![](/media/6e/6e17a10ee33c-15.webp)

- បង្កើត clearFormFields()

![](/media/68/68a81e17ee94-16.webp)

- បង្កើត bindStudentInfo()

![](/media/77/779532ec5a2a-17.webp)

- បង្កើត Edit និង Delete Operations

![](/media/b7/b7e10ae5922a-18.webp)

- កូដក្នុង Update
  Button

![](/media/8d/8de1e2918697-19.webp)

- Bind data ក្នុង repeater ទៅលើ Page_Load()

![](/media/e0/e04ed1041bb6-20.webp)

#### VI**I.          ជំហានទី៦៖ ដំណើរការកម្មវិធី**

- ពេលដំណើរការកម្មវិធី

![](/media/f0/f01b8a340812-21.webp)

- បញ្ចូលទិន្នន័យ

![](/media/b5/b532e28ccbea-22.webp)

- កែប្រែទិន្នន័យ

![](/media/20/20d3e58c9f0a-23.webp)

- លុបទិន្នន័យ

![](/media/98/98b610e9fc25-24.webp)
