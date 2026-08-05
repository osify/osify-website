---
title: ការបង្កើត QR Code Generator ជាមួយ VB.NET
date: "2021-02-21T09:34:22"
modified: "2021-02-25T16:40:41"
author: sysomeho
categories:
  - Visual Basic.Net
tags:
  - Basic QR Code Generator in VB.NET
  - Khmer Tutorial
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. បង្កើត Form III. សរសេរកូដ IV. ដំណើរការកម្មវិធី I. សេចក្តីផ្តើម នៅក្នុងមេរៀននេះ ខ្ញុំនឹងបង្ហាញអ្នកទាំងអស់គ្នាអំពីរបៀបបង្កើត QR Code Generator សម្រាប់អាចអោយយើងធ្វើការ export ទៅជា image បាន។…
origin:
  site: ask
  id: 11872
  url: https://ask.osify.com/qa/11872
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11872
mergedFrom: []
mediaCount: 8
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II.  បង្កើត Form

III. សរសេរកូដ

IV. ដំណើរការកម្មវិធី

#### **I.          សេចក្តីផ្តើម**

នៅក្នុងមេរៀននេះ ខ្ញុំនឹងបង្ហាញអ្នកទាំងអស់គ្នាអំពីរបៀបបង្កើត QR Code Generator សម្រាប់អាចអោយយើងធ្វើការ export ទៅជា image បាន។ សូមមើលនូវការអនុវត្តន៍ខាងក្រោមនេះ៖

#### **II.        បង្កើត Form**

សូមធ្វើការបង្កើត Form ដែលមាន Control ដូចខាងក្រោម៖

1. TextBox ចំនួន១
2. Button ចំនួន២
3. PictureBox ចំនួន១

សូមមើលរូបខាងក្រោម

![](/media/f7/f7a85c2d1e41-1-1.webp)

#### **III.          សរសេរកូដ**

ដើម្បីអាចប្រើប្រាស់ QR code function របស់វាបាន លុះត្រាតែយើងធ្វើការចូលទៅទាញយក library របស់វាជាមុនសិន។ ដំបូងត្រូវចូលទៅកាន់

- Tools
- NuGet Package Manager
- Manage NuGet Packages for Solution…

![](/media/b5/b58f246b5fdd-2-1.webp)

- រួចធ្វើការ search រក library មួយឈ្មោះថា MessagingToolkit.QRCode
- យើងនឹងទទួលបានដូចរូប

![](/media/02/02d2ced916ca-3-1.webp)

សូមធ្វើការសរសេរកូដខាងក្រោម៖

![](/media/ec/ece1ab5e766b-4-1.webp)

#### **IV.          ដំណើរការកម្មវិធី**

សូមដំណើរការកម្មវិធីខាងក្រោម

![](/media/e5/e58aea0eeff6-5-1.webp)

បញ្ចូលតម្លៃ ក្នុង TextBox រួចចុចលើប៊ូតុង Generate Code

![](/media/f8/f87ea14424a4-6-1.webp)

បន្ទាប់មកចុចលើប៊ូតុង Export to Image ដើម្បធ្វើការទាញចេញជារូបភាព

![](/media/d3/d390077133b1-7-1.webp)

យើងនឹងទទួលបានរូបខាងក្រោម

![](/media/2e/2ec19b04bdc2-8-1.webp)
