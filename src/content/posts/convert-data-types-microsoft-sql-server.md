---
title: មូលដ្ឋានគ្រឹះនៃការ Convert Data Types នៅក្នុង Microsoft SQL Server
date: "2020-02-23T21:50:31"
modified: "2020-02-25T11:00:27"
author: sysomeho
categories:
  - Database
tags:
  - Basic Convert data type in SQL
  - Khmer
  - Khmer Tutorial
  - SQL Server
lang: km
excerpt: មាតិកា I. របៀបប្រើប្រាស់ TRY PARSE II. របៀបប្រើប្រាស់ TRY CONVERT III. របៀបប្រើប្រាស់ TRY CAST IV. របៀបប្រើប្រាស់ CAST V. របៀបប្រើប្រាស់ CONVERT I. របៀបប្រើប្រាស់ TRY PARSE Try parse…
featuredImage: /media/6b/6bffe0cde113-featured.webp
origin:
  site: ask
  id: 11465
  url: https://ask.osify.com/qa/11465
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11465
mergedFrom: []
mediaCount: 17
featured: false
draft: false
---

**មាតិកា**

**I.**  **របៀបប្រើប្រាស់ TRY PARSE**

**II.** **របៀបប្រើប្រាស់ TRY CONVERT**

**III.** **របៀបប្រើប្រាស់ TRY CAST**

**IV.** **របៀបប្រើប្រាស់ CAST**

**V.**  **របៀបប្រើប្រាស់ CONVERT**

#### **I.          របៀបប្រើប្រាស់ TRY PARSE**

**Try parse** ត្រូវបានគេប្រើប្រាស់សម្រាប់បម្លែងនូវប្រភេទទិន្នន័យជា
**string** ទៅជាប្រភេទទិន្ន័យដែលយើងចង់បាន (**Date ឬ Numeric**) ។ ឧទាហរណ៍ ប្រភេទទិន្នន័យដើមរបស់យើងជា **string** ហើយយើងត្រូវការទៅជាប្រភេទទិន្នន័យជា **date**។ ប្រសិនបើការបម្លែងមិនទទួលបានជោគជ័យ នោះវានឹងធ្វើការ return មកវិញជា **NULL** value។

**Syntax:**

![](/media/7a/7aed1782fc05-1-2.webp)

- **string_value** : គឺជា argument នៃ source
  value ដែលវាមានប្រភេទជា NVARCHAR(4000)
- **data_type**: គឺជា target data type ដែលមានប្រភេទជា date
  ឬ numeric
- **culture**: គឺជា optional argument ដែលជួយយើងដើម្បី
  convert តម្លៃ ទៅជា Culture format។
  ឧបមាថាយើងចង់បង្ហាញ date ជាភាសាបារាំង បន្ទាប់មកយើងត្រូវការបោះប្រភេទទិន្នន័យជា
  **“Fr-FR”**។ ប្រសិនបើយើងបោះឈ្មោះរបស់ប្រភេទ
  culture មិនត្រឹមត្រូវ នោះ PARSE
  នឹងលេចឡើងនូវ error។

***១. ករណីយើងប្រើប្រាស់ culture ត្រឹមត្រូវ***

![](/media/ac/acbaa246bdf2-2-2.webp)

**លទ្ធផល៖**

![](/media/d9/d9c573635d43-3-3.webp)

*២. ករណីយើងប្រើប្រាស់ culture មិនត្រឹមត្រូវ*

![](/media/84/8447addc530b-4-2.webp)

**លទ្ធផល៖**

![](/media/ad/addb936e2d78-5-1.webp)

#### **II.          របៀបប្រើប្រាស់ TRY CONVERT**

**Try Convert** ត្រូវបានប្រើប្រាស់សម្រាប់ convert value
ទៅជាប្រភេទទិន្នន័យជាក់លាក់ណាមួយ ហើយប្រសិនបើការ convert
ទទួលបរាជ័យ នោះវានឹង return តម្លៃ NULL។ ឧទាហរណ៍ value ដើមរបស់យើងជា string
format ហើយយើងត្រូវការ format ជា date/integer នោះវានឹងធ្វើការជួយដល់យើងដើម្បីអោយសម្រេចតាមអ្វីដែលយើងចង់បាន។

**Syntax:**

![](/media/c7/c7d9053925b9-6-1.webp)

**TRY CONVERT()** វានឹង return
value បម្លែងទៅជាប្រភេទទិន្នន័យជាក់លាក់
ប្រសិនបើការបម្លែងទទួលបានជោគជ័យ ផ្ទុយមកវិញវានឹង return **NULL**

- **Data_type:** គឺជាប្រភេទទិន្នន័យដែលយើងត្រូវបម្លែង ដែល length គឺជា optional
  parameter ដែលជួយដល់ការ get result ក្នុង length
  ជាក់លាក់ណាមួយ។
- **Expression:** គឺជា value ដែលត្រូវ convert
- **Style:** គឺជា optional parameter ដែលកំណត់នូវ format។ ឧបមាថាយើងចង់បាន date format ដូចជា “**Feb, 18 2020**” បន្ទាប់មកយើងត្រូវការកំណត់នូវ
  style ដែលមានលេខ **111**

![](/media/16/1689893ae02e-7-1.webp)

#### **III.          របៀបប្រើប្រាស់ TRY CAST**

**TRY CAST** ត្រូវបានប្រើសម្រាប់ convert
value ទៅជាប្រភេទទិន្នន័យជាក់លាក់ណាមួយ ហើយប្រសិនបើការ
convert មិនទទួលបានជោគជ័យ វានឹង return NULL។
ឧទាហរណ៍ source value ជា string format ហើយយើងត្រូវការអោយវាជា double/integer format
នោះវានឹងជួយដល់យើងដើម្បីសម្រេចបានលទ្ធផលនេះ។

**Syntax:**

![](/media/9e/9e8f01a5b8bf-8-1.webp)

**TRY CAST()** នឹង return value ទៅជាប្រភេទទិន្នន័យដែលចង់បាន
ប្រសិនបើ cast ទទួលបានជោគជ័យ ផ្ទុយទៅវិញនឹង return **NULL**

- **Expression:** គឺជា source value ដែលនឹងត្រូវបម្លែង (cast)
- **Data_type:** គឺជា target data type ដែល source value នឹងត្រូវធ្វើការ cast
- **Length:** គឺជា optional parameter ដែលបញ្ជាក់ពី
  length នៃ target data type

![](/media/09/092791052307-9-1.webp)

**លទ្ធផល៖**

![](/media/0f/0f385ca5aa9c-10-1.webp)

#### **IV.          របៀបប្រើប្រាស់ CAST**

**Cast()** function ត្រូវបានគេប្រើប្រាស់ដើម្បីធ្វើការ​
convert នូវ data type variable ឬក៏
data មកពីប្រភេទទិន្នន័យមួយទៅជាប្រភេទទិន្នន័យផ្សេងទៀត។

**Syntax:**

![](/media/75/75f42ab9cc1a-11-2.webp)

data type ដែលយើងធ្វើការបម្លែងជា expression គឺជា​ target type។ expression របស់ data type ចេញមកពីយើងធ្វើការ cast គឺជា source type។

![](/media/57/57836975ba30-12-1.webp)

**លទ្ធផល៖**

![](/media/4c/4c1dc30ab541-13.webp)

#### **V.          របៀបប្រើប្រាស់ CONVERT**

**CONVERT** ប្រើនៅពេលដែលយើងធ្វើការ convert
expression ពីប្រភេទមួយទៅប្រភេទផ្សេងទៀត ក្នុងករណីមួយចំនួនដែលនឹងមានភាពចាំបាច់ប្រើនៅក្នុង
store procedure ដើម្បី convert data ពីប្រភេទទិន្នន័យ datetime ទៅជាប្រភេទទិន្នន័យ
varchar។ Convert function ត្រូវបានប្រើប្រាស់សម្រាប់រឿងរ៉ាវដូចនេះ។
Convert() function អាចត្រូវបានគេប្រើសម្រាប់បង្ហាញទិន្នន័យ
date/time ក្នុងទម្រង់ format ផ្សេងៗ។

**Syntax:**

![](/media/6f/6f0b2e40233c-14.webp)

**Style:** គឺជា style values សម្រាប់ datetime និង smalldatetime បម្លែងទៅជាទិន្នន័យ character។ ដោយដាក់បន្ថែមលេខ 100 ទៅអោយ style value ដើម្បី get នូវ ឆ្នាំ 4 ខ្ទង់ដែលបញ្ចូលនូវ century (yyyy)

![](/media/25/25972b7932d7-15.webp)

**លទ្ធផល៖**

![](/media/c8/c8121aae0990-16.webp)
