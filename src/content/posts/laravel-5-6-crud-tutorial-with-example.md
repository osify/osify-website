---
title: Laravel 5.6 CRUD Tutorial With Example
date: "2018-06-15T10:43:51"
modified: "2018-06-15T10:43:51"
author: sysomeho
categories:
  - PHP
tags:
  - Beginner Guide
  - Laravel
  - Laravel 5.6
  - Laravel CRUD
lang: km
excerpt: មាតិកា សេចក្តីផ្តើម តម្រូវការ ជំហ៊ានទី១៖ បង្កើត Laravel Project ជំហ៊ានទី២៖ បង្កើត MySQL Database ក្នុង .env file. ជំហ៊ានទី៣៖ បង្កើតនូវ model, migration file និង controller សម្រាប់ table “Passports” ជំហ៊ានទី៤៖ បង្កើត…
origin:
  site: ask
  id: 1109
  url: https://ask.osify.com/qa/1109
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1109
mergedFrom: []
mediaCount: 38
featured: false
draft: false
---

**មាតិកា**

1. សេចក្តីផ្តើម
2. តម្រូវការ
3. ជំហ៊ានទី១៖ បង្កើត Laravel Project
4. ជំហ៊ានទី២៖ បង្កើត MySQL Database ក្នុង .env file.
5. ជំហ៊ានទី៣៖ បង្កើតនូវ model, migration file និង controller សម្រាប់ table “Passports”
6. ជំហ៊ានទី៤៖ បង្កើត file view​ ដើម្បីបញ្ចូលព័ត៌មានទៅក្នុង database.
7. ជំហ៊ានទី៥៖ បង្កើត Controller និង Route.
8. ជំហ៊ានទី៦៖ រក្សាទុកទិន្នន័យនៅក្នុង Database.
9. ជំហ៊ានទី៧៖ បង្កើត index page មួយសម្រាប់ធ្វើការ List ចេញរាល់ព័ត៌មានទាំងអស់
10. ជំហ៊ានទី៨៖ បង្កើតនូវ Edit view មួយសម្រាប់ Update ព៍ត៌មាន
11. ជំហ៊ានទី៩៖ របៀបលុបទិន្នន័យចេញពី Database
12. ឯកសារយោង

### **1. សេចក្តីផ្តើម**

សម្រាប់ Tutorial នេះ ខ្ញុំសូមណែនាំពីរបៀបប្រើប្រាស់ Laravel CRUD (Create, Read, Update, Delete) ដែលជា Open source web framework មួយ សម្រាប់ធ្វើការបង្កើតនូវ Dynamic website។ វាមានការពេញនិយមសម្រាប់អ្នក Developer ក្នុងការចាប់ផ្តើមបង្កើត Project មួយប្រកបដោយភាពងាយស្រួល។ Tutorial នេះដែរបង្កើតឡើងសម្រាប់អ្នកមិនចេះសោះ និងអ្នកដែលទើបតែចាប់ផ្តើមប្រើប្រាស់វាសម្រាប់គោលបំណងធ្វើ Project នៅថ្ងៃខាងមុខ។ ក្នុងនេះដែរខ្ញុំក៏ទើបតែចាប់ផ្តើមសិក្សាពីវាបានបន្តិចបន្តួច ហើយចំពោះTutorial នេះដែរ យើងអាចធ្វើការស្វែងយល់បន្ថែមពីវា តាម Reference វេបសាយដែលបានបង្ហាញនៅខាងក្រោមនេះ។

### **2.** **តម្រូវការ**

ដើម្បីអាចបង្កើត Project ជាមួយ laravel framework បាន យើងត្រូវមានៈ

- កម្មវិធីសម្រាប់សរសេរកូដ Text Editor ឬ IDE (ដូចជា Sublime, Notepad…, Eclipse, phpStorm, ក៏ដូចជា IDE ផ្សេងៗទៀតជាដើម)
- Wamp server ឬ Xamp
- ត្រូវភ្ជាប់អ៊ីនធើណេត (នៅពេលដែលយើង Generate Project ជាដើម)
- ត្រូវតម្លើង Composer ក្នុងម៉ាស៊ីនកុំព្យូទ័រ (https://getcomposer.org/)

### **3. ជំហ៊ានទី១៖ បង្កើត** **Laravel Project**

សូមវាយនូវ Command ខាងក្រោមដើម្បីបង្កើតនូវ Laravel Project មួយដែលមានឈ្មោះថា *passportappointmentsystem*

- ចូលទៅកាន់ command prompt រួច paste code ខាងក្រោមចូលcomposer create-project –prefer-dist laravel/laravel passportappointmentsystem
- សូមរង់ចាំរហូតដល់វា Generate​ Project ដោយជោគជ័យ![](/media/6d/6dbe303950ac-1.webp)
- បន្ទាប់ពី create project បានដោយជោគជ័យហើយ យើងនឹងទទួលបាននូវ Project Structure ដូចរូប![](/media/6c/6c4e72ea03d4-2.webp)

### **4.** **ជំហ៊ានទី២៖ បង្កើត** **MySQL Database ក្នុង .env file**

- នៅក្នុង .env file សូមធ្វើការ Configure ដូចរូបខាងក្រោម![](/media/74/74f61acc5d84-3.webp)
- សូមចូលទៅកាន់ phpMyAdmin ដើម្បីបង្កើតនូវ database មួយឈ្មោះថា “**passportsystem**”![](/media/71/71e5d066c52e-4.webp)
- បន្ទាប់ពីយើង configure .env file រួចហើយ សូមធ្វើការ migrate នូវ Tables ចំនួន២ដែលផ្តល់ដោយ laravel ដោយស្វ័យប្រវត្តិ![](/media/3e/3e63a52d8bd9-5.webp)
- សូមវាយនូវ command php artisan migrate ក្នុង ​command prompt
- *ចំណាំ៖* មុននឹង វាយនូវ command ខាងលើ សូមចូលទៅកាន់ path នៃ Project យើងជាមុនសិន![](/media/97/97b49889a1d2-6.webp)
- ចុច Enter
- ករណីនៅពេលដែលវា **error** ខណៈពេល migrate tables ដូចរូបខាងក្រោម![](/media/c0/c0eb34b5cca5-7.webp)
- **សូមចូលទៅកាន់ Providers –> AppServiceProvider.php![](/media/42/42e31468bbaf-8.webp)**
- រូចធ្វើការ add code ដូច highlight រូបខាងក្រោម
- ![](/media/fc/fcbd136c7f3d-9.webp)
- បន្ទាប់មកចូលទៅ command prompt រូចmigrate ម្តងទៀត![](/media/fc/fc0039b84772-10.webp)
- សូមចូលទៅកាន់ phpMyAdmin
- យើងនឹងទទួលបាននូវ Tables ដូចខាងក្រោម![](/media/7a/7abc2b9917e5-11.webp)

### **5.** **ជំហ៊ានទី៣៖ បង្កើតនូវ** **model, migration file និង controller សម្រាប់ table “Passports”**

- សូមវាយនូវ command ខាងក្រោម
- php artisan make:model Passport -m
- ពេលនោះវានឹងបង្កើត files ចំនួន២
  - php model.
  - create_passports_table migration file.![](/media/5b/5bc75193b157-a.webp)
- ក្នុង migration យើងនឹងទទួលបាន file ដូចរូប![](/media/7e/7ef08548a319-13.webp)
- បន្តមកទៀតយើងត្រូវបង្កើតនូវ Schema អោយ table “passports”
- ចុចលើfile “2018_05_30_153508_create_passports_table.php”
- សូមបង្កើតនូវ fields និមួយៗ ដូចរូបខាងក្រោម![](/media/bc/bcf70a577c8b-14.webp)
- បន្ទាប់ពីយើងបានបង្កើត Schema អោយ table ខាងលើរួចហើយ
- សូមធ្វើការ migrate table ដោយវាយ “php artisan migrate”![](/media/5a/5a3cfa46918b-15.webp)
- ដូចនេះក្នុង database យើងនឹងទទួលបាន table “passports”![](/media/0e/0e0b3fe2e1d9-16.webp)

### **6. ជំហ៊ានទី៤៖ បង្កើត** **file view​ ដើម្បីបញ្ចូលព័ត៌មានទៅក្នុង database**

- បង្កើត file មួយនៅក្នុង **resources  >>  views  >>   create.blade.php![](/media/01/0138f66fd404-17.webp)**
- រួចសរសរកូដដូចខាងក្រោម![](/media/19/19d604273d8c-18.webp)![](/media/c0/c061d8e9b578-19.webp)![](/media/80/80b71300930a-21.webp)

### **7.** **ជំហ៊ានទី៥៖ បង្កើត** **Controller និង Route**

ដើម្បីបង្កើតបាននូវ Controller យើងត្រូវវាយ command

- php artisan make:controller PassportController –resource
- ពេលនោះវានឹងបង្កើតនូវ controller មួយមានឈ្មោះថា “PassportController.php” សម្រាប់អោយយើងធ្វើការបង្កើតនូវរាល់ functions CRUD![](/media/e3/e317b355f4d2-22.webp)
- នៅក្នុង project folder របស់យើង នឹងទទួលបាន file ដូចរូប![](/media/13/13241745f426-23.webp)
- សូមធ្វើការចុចលើ file “PassportController.php” រួចធ្វើការបង្កើត function មួយដូចរូប![](/media/db/dbd3b6b2a9ed-24.webp)
  - Function create(): សម្រាប់ធ្វើការ return view មួយដែលមានឈ្មោះថា “blade.php”
  - **សម្គាល់ៈ** ចំពោះការcall ហៅ view នៅក្នុង laravel យើងមិនចាំបាច់សរសេរ “create.blade.php” ទាំងស្រុងឡើយ គឺគ្រាប់តែសរសេរឈ្មោះ create បានហើយ។
- ធ្វើការ register route នៅក្នុង​ **routes  >>  web.php**file![](/media/20/20485f138baf-25.webp)
- ចុចលើ web.php
- រួចសរសេរកូដ Route::resource(‘passports’,’PassportController’);![](/media/a4/a4912cb0309c-26.webp)
- បន្ទាប់មកទៀតសូមចូលទៅកាន់ Terminal រួចវាយ Command php artisan route:list សម្រាប់ធ្វើការ List មើលរាល់ routes ទាំងអស់នៅក្នុង Project របស់យើង![](/media/09/09b180aed506-27.webp)
- ដើម្បីអាចដំណើរការ laravel project បានយើងត្រូវ ប្រើប្រាស់នូវ command មួយគឺ “php artisan serve”![](/media/66/66dd0a3fc7df-28.webp)
- ឥលូវនេះ server ត្រូវបានដំណើរការហើយ
- សូមចូលទៅកាន់ browser រួចវាយនូវ url “<http://localhost:8000/passports/create>”
- យើងនឹងទទួលបានដូចរូប![](/media/f8/f8e7d9253b84-29.webp)

### **8.** **ជំហ៊ានទី៦៖ រក្សាទុកទិន្នន័យនៅក្នុង** **Database**

យើងត្រូវការសរសេរនៅក្នុង Function​ “**store**” ដើម្បីបញ្ចូល ទិន្នន័យចូលទៅក្នុង database

- ចូលទៅ PassportController.php
- រួចសរសេរកូដដូចខាងក្រោម![](/media/6d/6d4157df69ad-30.webp)

### 9. **ជំហ៊ានទី៧៖ បង្កើត** **index page មួយសម្រាប់ធ្វើការ List ចេញរាល់ព័ត៌មានទាំងអស់**

- ចូលទៅ PassportController.php![](/media/33/339b5a780577-31.webp)
- នៅក្នុង **resources**>> **views** សូមធ្វើការបង្កើត file view មួយមានឈ្មោះថា “**blade.php”**
- រួចសរសេរកូដខាងក្រោមចូល![](/media/3e/3e3f2cd7cde1-37.webp) ![](/media/cd/cd615bc5f244-38.webp) ![](/media/40/40404e7a83ae-39.webp)
- សូមចូលទៅ url “<http://localhost:8000/passports>”
- ខាងក្រោមនេះជាលទ្ធផលដែលយើងបានធ្វើការបញ្ចូលទិន្នន័យចូលទៅក្នុង database ដោយជោគជ័យ![](/media/bd/bd1d4e07e8c4-35.webp)

### 10. **ហ៊ានទី៨៖ បង្កើតនូវ** **Edit view មួយសម្រាប់ Update ព៍ត៌មាន**

- ចូលទៅ PassportController.php
- រួចសរសេរ function edit![](/media/c4/c4e603ac83cb-36.webp)
- សូមបង្កើត file មួយឈ្មោះថា “**blade.php”** នៅក្នុង **resources  >>  views![](/media/3e/3e3f2cd7cde1-37.webp) ![](/media/cd/cd615bc5f244-38.webp) ![](/media/40/40404e7a83ae-39.webp)**
- បន្ទាប់មកទៀតសូមធ្វើការសរសេរកូដដើម្បី update ទិន្នន័យ
- នៅក្នុងនេះដែរ យើងមិនបានធ្វើការ update ទៅលើfield “**Date**, និង **Image**” ឡើយ
- ចូលទៅ PassportController.php
- រួចសរសេរកូដ function សម្រាប់ update![](/media/b0/b0c4f5536629-40.webp)
- ខាងក្រោមនេះ គឺជា form សម្រាប់កែប្រែទិន្នន័យរបស់យើង![](/media/f0/f069bc52a189-41.webp)

### 11. **ជំហ៊ានទី៩៖ របៀបលុបទិន្នន័យចេញពី** **Database**

- ចូលទៅ PassportController.php
- រួចសរសេរកូដ function សម្រាប់ destroy (លុប)![](/media/be/be105597b2d8-42.webp)
- ដើម្បីលុបទិន្នន័យ គឺគ្រាន់តែចុចលើ Button Delete ជាការស្រេច
- ដូចនេះ ការប្រើប្រាស់ CRUD នៅក្នុង Laravel ត្រូវបានបញ្ចប់ សូមអរគុណ.

### **12. ឯកសារយោង**

- https://appdividend.com/2018/02/23/laravel-5-6-crud-tutorial/
