---
title: ការស្វែងយល់អំពីរបៀបបង្កើត Login, User, assign Permission នៅក្នុង Microsoft SQL Server
date: "2020-09-17T22:28:58"
modified: "2020-10-01T17:07:20"
author: sysomeho
categories:
  - Database
tags:
  - assign Permission
  - Create User
  - Khmer Tutorial
  - Login
lang: km
excerpt: មាតិកា I. របៀបបង្កើត Login II. របៀបបង្កើត User III. របៀប assign permission ទៅអោយ user I. របៀបបង្កើត Login ដើម្បីបង្កើត login សម្រាប់ចូលទៅក្នុង​ SQL server យើងត្រូវ៖ ចុចលើ Security Logins បន្ទាប់មកវាលោតផ្ទាំងមួយឡើង…
origin:
  site: ask
  id: 11704
  url: https://ask.osify.com/qa/11704
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11704
mergedFrom: []
mediaCount: 15
featured: false
draft: false
---

**មាតិកា**

I.     របៀបបង្កើត Login

II.   របៀបបង្កើត User

III. របៀប assign permission ទៅអោយ user

#### **I.          របៀបបង្កើត Login**

ដើម្បីបង្កើត login សម្រាប់ចូលទៅក្នុង​ SQL server យើងត្រូវ៖

- ចុចលើ Security
- Logins

![](/media/5a/5a9f000676b4-1.webp)

- បន្ទាប់មកវាលោតផ្ទាំងមួយឡើង ដោយចូលទៅកាន់
  - ជ្រើសរើសយក SQL Server authentication
  - បញ្ចូលលេខសម្ងាត់
  - ចុច OK

![](/media/3a/3ad2e89480a3-2.webp)

ពេលនោះយើងនឹងបាន login ដូចរូប

![](/media/7e/7efe356fee46-3.webp)

ម្យ៉ាងវិញទៀត យើងក៏អាចបង្កើត login តាមរយៈ T-SQL command

![](/media/16/169f973dc9cb-4.webp)

#### **II.          របៀបបង្កើត User**

User គឺជា account ដែលយើងអាចបង្កើតដើម្បធ្វើការ access SQL server។ ដើម្បីបង្កើត user យើងអាចបង្កើតតាមវិធីសាស្រ្តចំនួន២ខាងក្រោមនេះ៖

- តាមរយៈ T-SQL
- តាមរយៈ SQL Server Management Studio

**តាមរយៈ** **SQL Server Management Studio**

យើងបង្កើត user ដោយប្រើប្រាស់ EDU_TSQL database

- connect ទៅកាន់ SQL server បន្ទាប់មកពន្លា Databases folder
- កំណត់យក database ដែលយើងត្រូវការបង្កើត user រួចពន្លាវា
- ពន្លា security folder

right click ត្រង់ Users folder បន្ទាប់មកជ្រើសរើស “New User…”

![](/media/86/86b4da0c6532-5.webp)

- បន្ទាប់មកយើងនឹងទទួលបាន screen ខាងក្រោម
  - បញ្ចូល User name
  - បញ្ចូល Login name (ដែលបានបង្កើតពីខាងលើ)

ចុច OK

![](/media/8d/8dc44f17b785-6.webp)

ដូចនេះ user បានបង្កើតចប់ជាស្រេច

![](/media/ba/badfe6952b7a-7.webp)

**តាមរយៈ T-SQL** យើងអាចបង្កើត User ថ្មី ដោយប្រើប្រាស់ T-SQL command ខាងក្រោម៖

![](/media/c5/c5d29c80351e-8.webp)
![](/media/36/36ebf3987acd-9.webp)

#### **III.          របៀប assign permission ទៅអោយ user**

Permission សំដៅទោលើ rules ដែលគ្រប់គ្រងទៅលើ level នៃការ access របស់ user។ SQL server អនុញ្ញាតិអោយយើងធ្វើការ​ grant, revoke, និង deny។

**តាមរយៈ** **SQL Server Management Studio**

- connect ទៅកាន់ SQL server instance ហើយ expand folder

right click លើ user ដូចរូប

![](/media/81/8116eb8eec20-10.webp)

- វានឹងចេញផ្ទាំងមួយទៀត
- ចុចលើ Securable
- ចុច search

![](/media/31/31a608d4ef7a-11.webp)

- បន្ទាប់មកទៀតវានឹងលោតចេញផ្ទាំងមួយទៀត
  - ជ្រើសរើសយក “All objects belonging to the Schema.”
  - ជ្រើសរើសយក Schema name ជា “dbo”

ចុច OK

![](/media/3f/3f2b3fdc3ef0-12.webp)

- កំណត់ Table ដែលអ្នកចង់ធ្វើកការ Grant permission
- នៅក្នុង explicit permission ជ្រើសរើស Grant

ចុច OK

![](/media/08/08fe7fcf26f5-13.webp)

**តាមរយៈ T-SQL**

យើងអាចបង្កើត grant permission តាមរយៈ T-SQL

![](/media/08/086162d66867-14.webp)

សូមមើលឧទាហរណ៌ខាងក្រោម

![](/media/9c/9c84c5cb807b-15.webp)
