---
title: ការសិក្សាពីរបៀបបង្កើត CRUD Store Procedure ក្នុង SQL Server
date: "2018-07-10T17:55:54"
modified: "2018-07-10T17:57:05"
author: sysomeho
categories:
  - Database
tags:
  - Khmer
  - SQL Server
  - Store Procedure
  - Tips
  - Tutorial
  - ខ្មែរ
lang: km
excerpt: មាតិកា សេចក្តីផ្តើម គោលបំណង តម្រូវការ ការបង្កើត Table ការបង្កើត procedure សម្រាប់ CREATE ការបង្កើត procedure សម្រាប់ READ ការបង្កើត procedure សម្រាប់ UPDATE ការបង្កើត procedure សម្រាប់ DELETE ឯកសារយោង សេចក្តីផ្តើម CRUD…
featuredImage: /media/da/da63ac8e2485-18.webp
origin:
  site: ask
  id: 1261
  url: https://ask.osify.com/qa/1261
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1261
mergedFrom: []
mediaCount: 21
featured: false
draft: false
---

**មាតិកា**

1. សេចក្តីផ្តើម
2. គោលបំណង
3. តម្រូវការ
4. ការបង្កើត Table
5. ការបង្កើត procedure សម្រាប់ CREATE
6. ការបង្កើត procedure សម្រាប់ READ
7. ការបង្កើត procedure សម្រាប់ UPDATE
8. ការបង្កើត procedure សម្រាប់ DELETE
9. ឯកសារយោង

### **1.** **សេចក្តីផ្តើម**

CRUD មកពីពាក្យថា Create, Read, Update, Delete។ វាមានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការបង្កើត application មិនថានៅក្នុង web application, desktop application ក៏ដូចជា mobile application។ ខាងក្រោមនេះយើងនឹងលើកយកនូវការប្រើប្រាស់ CRUD​ជាមួយនឹង SQL Server ដែលអាចជាជំនួយក្នុងការយកទៅប្រើប្រាស់ទៅតាមគោលបំណងរបស់យើង។

### **2. គោលបំណង**

ក្រោយពីសិក្សាតាម Tutorial នេះ លោកអ្នកនឹងយល់អំពី

- មូលដ្ឋានគ្រឹះក្នុងការបង្កើត Store Procedure
- មូលដ្ឋានគ្រឹះក្នុងការប្រើប្រាស់ CRUD
- យល់ដឹងអំពីការប្រើប្រាស់ Parameters
- ចេះ execute stored procedure
- យល់ដឹងពី Syntax ក្នុងការសរសេរ procedure

### **3.** **តម្រូវការ**

ដើម្បីអាចអនុវត្តន៍ បានយើងត្រូវមាន

- SQL Server Management Studio (version 2000, 2005, 2008, 2008R2, 2012 និង 2014)
- ក្នុង Tutorial នេះ សូមលើកយក version 014

### **4. ការបង្កើត** **Table**

យើងអាចធ្វើការបង្កើត Table បានច្រើនរបៀប តាមរយៈ interface របស់ SQL ឬតាមរយៈ SQL Script៖

- Syntax ក្នុងការបង្កើត Table![](/media/39/39dbc3a4ca6e-1.webp)
- សូមធ្វើការបង្កើត Table តាមរយៈ script![](/media/d0/d09ceeab7421-2.webp)
- បន្ទាប់ពីបង្កើតរួច សូមចុច F5 លើ keyboard ឬចូលទៅកាន់ Execute icon![](/media/28/28890c561b25-3.webp)

### **5.** **ការបង្កើត** **procedure សម្រាប់ CREATE**

- General Syntax for *create procedure![](/media/f4/f43ec5858193-4.webp)*
- General Syntax for *insert data![](/media/98/9824615a8171-5.webp)*
- General Syntax for *select data![](/media/75/75bdcbf74b04-6.webp)*
- General Syntax for *update data![](/media/35/357aceb12370-7.webp)*
- សូមធ្វើការបង្កើតscript ដូចខាងក្រោម![](/media/67/6736b47526f4-8.webp)
- សូមធ្វើការ execute នូវ store procedure ខាងលើ![](/media/cc/cce9e9862fa6-9.webp)
- ខាងក្រោមគឺជាលទ្ធផលក្រោយពី execute រួច![](/media/b0/b03b60376095-10.webp)

### **6.** **ការបង្កើត** **procedure សម្រាប់ READ**

- READ procedure គឺជា procedure ដែលយើងធ្វើការ read data ចេញពី table records![](/media/d4/d4a041654e43-11.webp)
- ដើម្បី execute យើងត្រូវ![](/media/62/626fa79eb93b-12.webp)
- ខាងក្រោមគឺជាលទ្ធផលក្រោយពី execute រួច![](/media/b0/b03b60376095-10.webp)

### **7. ការបង្កើត** **procedure សម្រាប់ UPDATE**

- UPDATE procedure គឺជា procedure ដែលយើងធ្វើការ កែប្រែ data ពីក្នុង table records![](/media/12/121e95856d4d-14.webp)
- ដើម្បី update data យើងត្រូវ![](/media/6a/6a29b24001d8-15.webp)
- សូមធ្វើការ select data មើល![](/media/62/626fa79eb93b-12.webp)
- លទ្ធផល![](/media/03/03176a2f0990-17.webp)

### **8.** **ការបង្កើត** **procedure សម្រាប់ DELETE**

- DELETE procedure គឺជា procedure ដែលយើងធ្វើការ លុប data ពីក្នុង table records![](/media/da/da63ac8e2485-18.webp)
- ដើម្បី execute![](/media/d2/d2146ff774b7-19.webp)
- ខាងក្រោមនេះគឺជា Structure ទាំងមូលក្រោយពីយើងធ្វើការបង្កើត Procedure រួចរាល់![](/media/a4/a47f722e3b87-20.webp)

### **9. ឯកសារយោង**

- https://www.sqlshack.com/creating-using-crud-stored-procedures/
