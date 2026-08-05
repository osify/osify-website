---
title: របៀបបង្កើត Classes Files ដាច់ដោយឡែកពីគ្នា ជាមួយ Microsoft Visual Studio
date: "2021-09-05T09:57:00"
modified: "2021-09-13T22:21:14"
author: sysomeho
categories:
  - C Programming
tags:
  - Khmer Tutorial
  - Separate Class File with Microsoft Visual Studio in C++
lang: km
excerpt: បង្កើត project ក្នុង Microsoft Visual Studio ជ្រើសរើសយក Visual C++ Empty Project -យើងនឹងទទួលបាន project structure ដូចរូប បង្កើត class “main()” Right click លើ folder “Source Files” -> Add -> New Item……
origin:
  site: ask
  id: 11939
  url: https://ask.osify.com/qa/11939
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11939
mergedFrom: []
mediaCount: 14
featured: false
draft: false
---

1. **បង្កើត project ក្នុង Microsoft Visual Studio**
   - ជ្រើសរើសយក Visual C++
   - Empty Project

![](/media/29/298c51307eaf-1.webp)

-យើងនឹងទទួលបាន project structure ដូចរូប

![](/media/a5/a5d0482a56a3-2.webp)

2. **បង្កើត class “main()”**

Right click លើ folder “Source Files” -> Add -> New Item…

![](/media/2a/2a094bff97c3-3-1.webp)

វានឹងបង្ហាញផ្ទាំងដូចខាងក្រោម

![](/media/ab/ab1b38592817-4.webp)

3. **សរសេរកូដក្នុង main() function**

![](/media/26/26d40b5ffe15-5.webp)

4. **បង្កើត Header file សម្រាប់ផ្តាច់ class ពីគ្នា**

ដោយសង្កេតឃើញថាក្នុង main() function គឺយើងមាននូវ class ក៏ដូចជា methods ស្ថិតក្នុង main() function តែមួយ។ ក្នុងករណីកម្មវិធីរបស់យើងមាន class ក៏ដូចជា function តិចតួច យើងអាចធ្វើដូចនេះបាន ប៉ុន្តែករណីដែលយើងមានច្រើន យើងពិបាកក្នុងការរៀបចំចាត់ចែង class អោយមានសណ្តាប់ធ្នាប់ល្អ។ ដូចនេះយើងត្រូវបង្កើត Header file សម្រាប់ដោះស្រាយបញ្ហាទាំងអស់នេះ។

- ទី១៖ បង្កើត Header File
  - Right click លើ folder “Header File” -> Add -> New Item…
  - វានឹងចេញផ្ទាំងដូចរូប

![](/media/0f/0fac710df932-6.webp)

Add កូដចូលក្នុង “MyInteger.h”

![](/media/6f/6f3d804b882f-7.webp)

- ទី២៖ បង្កើត Resource Files
  - Right click លើ folder “Resource Files” à Add à New Item…
  - វានឹងចេញផ្ទាំងដូចរូប

![](/media/97/97bf3b02fd2a-8.webp)

Add កូដចូលក្នុង “MyInteger.cpp”

![](/media/8a/8a6257d635c6-9.webp)

- ទី៣៖ សសេរកូដក្នុង main() function
  - Add កូដចូលក្នុង “main.cpp”

![](/media/df/df4d12211775-10.webp)

- កំណត់ចំណាំ៖
  - ករណីដែលយើង add header file ច្រើនចូលទៅក្នុង main() របស់យើង នោះវានឹង error នៅពេលដំណើរការកូដ។

![](/media/32/32bfbba3dcb3-11.webp)
![](/media/c0/c0f263757fc1-12.webp)

- ដើម្បីការពារកុំអោយ error យើងត្រូវ៖
  - ចូលទៅកាន់ Header File “**MyInteger.h**” រួចសរសេរកូដដូចខាងក្រោម៖

![](/media/1d/1ddfb0d1e805-13.webp)

5. **ដំណើរការកម្មវិធី**

![](/media/05/056f054fe855-14.webp)
