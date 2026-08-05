---
title: របៀប Encrypt និង Decrypt connection string ក្នុង ASP.NET
date: "2019-10-13T17:09:20"
modified: "2019-10-14T12:31:31"
author: sysomeho
categories:
  - ASP.net
tags:
  - ASP.net
  - ASP.NET - Encrypt and Decrypt Connection String
  - ASP.net MVC
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. របៀប Encryption Connection String III. របៀប Decryption Connection Strings I. សេចក្តីផ្តើម ប្រសិនបើយើងមានវេបសាយជា shared web hosting service…
origin:
  site: ask
  id: 1845
  url: https://ask.osify.com/qa/1845
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1845
mergedFrom: []
mediaCount: 6
featured: false
draft: false
---

**មាតិកា**

**I.   សេចក្តីផ្តើម**

**II. របៀប Encryption Connection String**

**III. របៀប Decryption Connection Strings**

#### **I.          សេចក្តីផ្តើម**

ប្រសិនបើយើងមានវេបសាយជា shared web hosting service
យើងប្រហែលជាមានការព្រួយបារម្ភអំពីវេបសាយរបស់យើងដែលអាចត្រូវបានគេលួចយក
(hack)។ នេះគឺជាអ្វីដែលពិតជានឹងអាចកើតមានឡើងគឺ user ធ្វើការ request តាមរយៈ HTTP នោះ web application របស់យើងដំណើរការនូវ
request ដោយរួមមានការភ្ជាប់ទៅកាន់ database ហើយនិង
return លទ្ធផលមកអោយ user វិញ។
ដូចនេះការ send connection string នៅលើ HTTP គឺគ្រាន់តែជា plain text តែប៉ុណ្ណោះ។

- ***Encrypt ឬក៏ Decrypt Connection Strings ក្នុង a
  web.config file***

Connection
strings នៅក្នុង **web.config** file មានផ្ទុកទៅដោយព័ត៌មានសំខាន់អំពី
database ដូចជា connection string
របស់ parameters។ ដើម្បីបញ្ចៀសនូវបញ្ហាទាំងនេះ យើងអាចពង្រឹង
security នូវព័ត៌មានសំខាន់ៗដែលត្រូវបាន store ទុកនៅក្នុង connection string ដោយប្រើប្រាស់នូវមុខងាររបស់
configuration ដែលមានស្រាប់ (built in) ដើម្បីធ្វើការ encrypt ឬក៏ decrypt នូវ sections មួយចំនួនរបស់ web.config file។

- ***តើ*** ***encrypting the connection string in ASP.NET ធ្វើឡើងយ៉ាងដូចម្តេច ?***

យើងអាចប្រើប្រាស់ encrypt connection string នៃ web.config
file ដោយប្រើប្រាស់ command line tool មួយឈ្មោះថា
**aspnet_regiis.exe** ដូចនេះ
connection string មិនត្រូវបានផ្ទុកជា plain text ទៀតឡើយ។​ ចំពោះទីតាំង file ត្រូវបានផ្ទុកក្នុង path:
“**%systemroot%\Microsoft.NET\Framework\versionNumber**”។

សូមចូលទៅកាន់ **C:\Windows\Microsoft.NET\Framework\v4.0.30319**

![](/media/87/872cb39bc3d4-1.webp)

#### **II.          របៀប Encryption Connection String**

សន្មតថាយើងបានបង្កើត project មួយរួចរាល់ដែលមានឈ្មោះថា​ “**MyWebApp**” ដែលមាន structure ដូចរូបខាងក្រោមនេះ

![](/media/35/353904edf6f9-2.webp)

- **មុនពេល** **Encrypt
  Web.config**

![](/media/e9/e9d18deb11c2-3.webp)

យើងឃើញថា connectionStrings របស់យើងត្រូវបានគេមើលដឹងទាំងអស់ ដោយមិនត្រូវបានលាក់ឡើយ។

- ការធ្វើ encryption
  ទៅលើ Web.config
  - បើក Command Prompt ជាមួយសិទ្ធិជា Administrator
  - ក្នុង Command Prompt សូមបញ្ចូល
    - cd
      C:\Windows\Microsoft.NET\Framework\v4.0.30319
  - ក្នុងករណីនេះ web config របស់ខ្ញុំស្ថិតនៅក្នុងទីតាំង D:\010_Testing\MyWebApp\MyWebApp បន្ទាប់មកសូមវាយបញ្ចូលនូវ encrypt connectionStrings ដូចខាងក្រោម

aspnet_regiis  -pef  “connectionStrings”
“D:\010_Testing\MyWebApp\MyWebApp”

**កំណត់ចំណាំៈ** Parameter
“connectionStrings”
គឺប្រកាន់តួអក្សរ (case sensitive)

ដើម្បីកាន់តែច្បាស់សូមមើលរូបខាងក្រោមៈ

![](/media/53/537e8348c526-4.webp)

- **ក្រោយពេល** **Encrypt
  Web.config**

បន្ទាប់ពីយើងបានធ្វើ encryption ទៅលើ connectionStrings រួចរាល់ហើយនោះconnectionStrings របស់យើងនឹងបង្ហាញជា format ដូចខាងក្រោម

![](/media/7f/7fb9e0327a03-5.webp)

#### II**I.          របៀប Decryption Connection Strings**

វិធីសាមញ្ញក្នុងការប្រើប្រាស់ command ដើម្បី decrypt នូវ connectionStrings elements នៅក្នុង Web.config file.

**aspnet_regiis  -pdf  “connectionStrings”  “D:\010_Testing\MyWebApp\MyWebApp”**

- សូមពិនិត្យដូចរូប

![](/media/d1/d17d16abafee-6.webp)
