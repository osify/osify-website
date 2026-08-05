---
title: របៀប Upload និង Download File ចេញពី Folder នៅក្នុង ASP.NET Web Form
date: "2019-11-30T21:48:03"
modified: "2019-12-13T18:08:23"
author: sysomeho
categories:
  - ASP.net
tags:
  - Khmer
  - Khmer Tutorial
  - Tutorials
  - Upload &amp; Download Files From Folder with ASP.NET
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. បង្កើត User Interface III. សរសេរកូដក្នុង Code Behind IV. ដំណើរការកម្មវិធី I. សេចក្តីផ្តើម នៅក្នុងមេរៀននេះនឹងលើកយកពីរបៀប upload files, download files, និង delete files ចេញពី folder (directory)…
featuredImage: /media/80/803e8a5c7da1-9-2.webp
origin:
  site: ask
  id: 11325
  url: https://ask.osify.com/qa/11325
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11325
mergedFrom: []
mediaCount: 10
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II. បង្កើត User Interface

III. សរសេរកូដក្នុង Code Behind

IV. ដំណើរការកម្មវិធី

#### **I.          សេចក្តីផ្តើម**

នៅក្នុងមេរៀននេះនឹងលើកយកពីរបៀប upload files, download files, និង delete files ចេញពី folder (directory)
នៅលើ Hard Drive របស់យើង។
រាល់ការធ្វើប្រតិបត្តិការផ្សេងៗគឺនៅលើ ASP.NET GridView
ដោយមានភាពងាយស្រួលសម្រាប់ users។

#### **II.         បង្កើត User Interface**

ក្រោយពីបង្កើត project នៅក្នុង ASP.net រួចបង្កើត folder មួយដោយដាក់ឈ្មោះថា “**Uploads**” ដើម្បីធ្វើការផ្ទុកនូវ Files ដែលបាន uploaded

![](/media/30/30f62e3dc35d-1-3.webp)

សូមធ្វើការសរសេរកូដដើម្បីអាចអោយយើងធ្វើការទៅលើវា

![](/media/93/93274cd51b22-2-3.webp)

#### **III.          សរសេរកូដក្នុង Code Behind**

ខាងក្រោមនេះគឺជា
Event handler នីមួយៗដែលយើងធ្វើ Action លើវា

- ត្រូវ import
  namespace “using System.IO;”
- Event សម្រាប់ធ្វើការ upload file ដោយធ្វើការជ្រើសរើស file រួចធ្វើការចុចលើប៊ូតុង
  Upload

![](/media/7b/7be59a09da45-3-3.webp)

List រាល់ files ដែលបាន uploads ទាំងអស់ចេញពី Folder (Directory) បង្ហាញក្នុង GridView

![](/media/07/076f39163b05-4-3.webp)

- រាល់ files​ ទាំងអស់ដែលមាននៅក្នុង Uploads folder ត្រូវបាន
  fetched ចូលទៅក្នុង string array
  ដោយប្រើប្រាស់នូវ method “**GetFiles**” របស់ **Directory**
  class។ បន្ទាប់មក values របស់ array ត្រូវបាន copy ទៅកាន់ Generic List
  collection ដែលរួមមាន objects នៃ ListItem
  class ហើយបន្ទាប់មកត្រូវបានប្រើប្រាស់ដើម្បី populate នៅក្នុង GridView control.
- Event សម្រាប់ធ្វើការ download file
  ចេញពី Folder (Directory)

![](/media/56/56d6a1237f4d-5-3.webp)

- នៅពេលចុចលើ
  download ប៊ូតុង នៅក្នុង row នៃ GridView ពេលនោះ Event handler តត្រូវបាន execute។ Path នៃ file ត្រូវបាន
  fetched ចេញពី CommandArgument property តាមរយៈ
  LinkButton។ ក្រោយមកទៀតត្រូវប្រើ WriteFile method របស់ Response class ដែល File ត្រូវបាន write ចូលទៅក្នុង Response Stream
  ដោយប្រើប្រាស់ Path និង File ដែលបាន download។
- Event សម្រាប់ធ្វើការ delete file ចេញពី Folder (Directory)

![](/media/9c/9cd5bc78f7d9-6-4.webp)

- នៅពេលចុចលើ delete ប៊ូតុង នៅក្នុង row នៃ GridView ពេលនោះ Event handler តត្រូវបាន execute។ Path នៃ file ត្រូវបាន
  fetched ចេញពី CommandArgument property តាមរយៈ
  LinkButton។ ក្រោយមកទៀតត្រូវប្រើ Delete method របស់ File class។

#### **IV.          ដំណើរការកម្មវិធី**

- ករណីមិនទាន់បានធ្វើប្រតិបត្តិការ

![](/media/bd/bddc6353a1b2-7-2.webp)

ករណីជ្រើសរើស file និងចុចលើប៊ូតុង upload

![](/media/1c/1c509e8937f0-8-3.webp)

ករណីចុចលើ link Download

![](/media/80/803e8a5c7da1-9-2.webp)

ករណីចុចលើ link Delete វានឹងលុបចេញពី Folder (Directory) របស់យើង
