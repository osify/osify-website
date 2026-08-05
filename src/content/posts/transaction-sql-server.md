---
title: ការប្រើប្រាស់ Transaction ក្នុង SQL Server
date: "2019-11-12T12:06:40"
modified: "2019-11-13T09:28:10"
author: sysomeho
categories:
  - Database
tags:
  - Khmer Tutorial
  - Transaction in SQL
  - Tutorials
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. Properties of Transactions III. ប្រភេទនៃ Transaction I. សេចក្តីផ្តើម ប្រសិនបើមានសំនុំ Statements ជាច្រើន ហើយពួកយើងចង់អោយ Statements ទាំងអស់នោះគួរតែត្រូវបាន execute ឬក៏មិនគួរ execute។…
featuredImage: /media/de/deec187259f0-2.webp
origin:
  site: ask
  id: 11255
  url: https://ask.osify.com/qa/11255
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11255
mergedFrom: []
mediaCount: 7
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II. Properties of Transactions

III. ប្រភេទនៃ Transaction

#### **I.          សេចក្តីផ្តើម**

ប្រសិនបើមានសំនុំ Statements ជាច្រើន ហើយពួកយើងចង់អោយ
Statements ទាំងអស់នោះគួរតែត្រូវបាន execute ឬក៏មិនគួរ execute។ យើងអាចរក្សាទុក Statements
ទាំងអស់នោះនៅខាងក្នុង Transactions។ Transaction
ប្រាកដថា ការផ្លាស់ប្តូរនឹងត្រូវបានធ្វើឡើងឬគ្មានការផ្លាស់ប្តូរណាមួយនឹងត្រូវបានធ្វើ។

#### **II.         Properties of Transactions**

មាន
properties នៃ transactions ចំនួន៤
ដែលត្រូវបានគេហៅថា **ACID**

1.) **Atomicity**:-
នៅក្នុង Atomicity ដែល transaction និមួយៗគួរតែមាន unique number ដូច្នេះប្រសិនបើ
transaction failed ឬក៏ abort  ក្នុងចំនុចណាមួយ យើងអាចមានភាពងាយស្រួល
Rollback មកវិញបាន។
2.) **Consistency**: – នៅក្នុង Consistency ប្រសិនបើ transaction committed របស់យើងទទួលបានជោគជ័យ ពេលនោះ database នឹងត្រូវបាន
change។

3. ) **Isolation**:-
នៅក្នុង Isolation​ រាល់ transactions
និមួយៗគួរតែ transparent ហើយនិង independent
គ្នាទៅវិញទៅមក។
4. ) **Durability**: – In Durability ,result of each transaction
should be persisted ,if in case system failure.

#### **III.        ប្រភេទនៃ Transaction**

នៅក្នុង Microsoft sql server មាន transactions
ចំនួន ២ប្រភេទ

- Implicit
  Transaction
- Explicit
  Transaction

**Implicit Transaction**

នៅពេលដែលយើងធ្វើការ execute នូវ statement ណាមួយ នោះ sql server database engine
នឹងចាប់ផ្តើមនូវ transaction ថ្មីដោយស្វ័យប្រវត្តិ
បន្ទាប់ពី current transactions ត្រូវបាន committed។ នៅក្នុង Implicit transaction ប្រសិនបើយើងចង់ប្រើវា
យើងមិនអាចធ្វើការ Rollback statement ត្រឡប់មកវិញបានទេ។ Implicit
Transaction គឺ by default មាន Automatic
នៅក្នុង SQL server។ យើងអាចកំណត់ **set** **implicit_transactions on** ទៅលើវាបាន។
ក៏ប៉ុន្តែវាមានភាពខុសគ្នាមួយចំនួន

- នៅពេលដែលយើង **set implicit_transactions on** ពេលនោះយើងនិងមិនឃើញ
  **Begin** Transaction នៅក្នុង Log file ឡើយ។
- នៅក្នុង implicit mode, Transaction បាន
  start ដោយស្វ័យប្រវត្តិ បន្ទាប់ពី commit។

នៅពេលដែល implicit transaction mode កំណត់ **ON/off** ពេលនោះ sql database ចាប់ផ្តើមនូវ transaction ប្រសិនបើយើងធ្វើការ execute (DDL command)  commands ដូចខាងក្រោម

![](/media/2d/2df20e4a13a2-1.webp)

**Explicit Transaction**

explicit
transaction គឺជា explicitly កំណត់ដោយ
begin (start) ហើយបញ្ចប់ដោយ transaction។
មាន control នៃ transaction មួយចំនួន
ដែលត្រូវបានផ្តល់អោយដូចខាងក្រោមៈ

**1.) Begin Transaction**: – វាត្រូវបានប្រើដើម្បីកំណត់ពីចំនុចចាប់ផ្តើម
(starting point) នៃ transaction ណាមួយ។

**2.) Commit**: – វាត្រូវបាន save changes នៅក្នុង Database.

**ឧទាហរណ៍៖** យើងបានបង្កើត table មួយឈ្មោះថា employee ដូចរូប

![](/media/de/deec187259f0-2.webp)

នៅពេលដែលយើងធ្វើការ insert ទិន្នន័យ (data) ហើយ ដាក់ commit statement នៅខាងចុង statement បន្ទាប់មក output នឹងបង្ហាញដូចខាងក្រោម៖

![](/media/71/7130655bfc02-3.webp)

**3.) Rollback**: – វាត្រូវបានប្រើដើម្បី Rollback ការផ្លាស់ប្តូរនៅក្នុង Database។ នៅពេលដែល error កើតឡើងរវាង transaction ជាមួយនឹងការជួយសង្រ្គោះដោយប្រើប្រាស៉ Rollback យើងអាចងាយស្រួល Rollback state របស់ transaction។

![](/media/0a/0a38ac2e37aa-4.webp)

ប្រសិនបើយើងចង់ប្រើប្រាស់ commit ហើយនិង Rollback នៅក្នុង statement តែមួយ ពេលនោះ output នឹងបង្ហាញដូចរូបៈ

![](/media/6d/6df0fea7d9d2-5.webp)

**4.) Save Point**: – យើងអាចផ្តល់ ‘save point’ ដើម្បីបែងចែក transaction ចូលទៅក្នុង sub logical transaction។ មានន័យថាប្រសិនបើនៅក្នុង transaction មានសំនុំនៃ statement ដែលត្រូវតែ execute ហើយសំនុំ statement ផ្សេងទៀតនឹងត្រូវបាន execute ឬក៏ Rollback ដែលពឹងអាស្រ័យទៅលើ condition មួយចំនួន។ បន្ទាប់មកយើងអាចផ្តល់នូវ Save Point ទៅកាន់ statement ទាំងនោះ ដែលត្រូវតែ committed.

![](/media/05/057383407446-6.webp)
