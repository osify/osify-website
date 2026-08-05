---
title: ការប្រើប្រាស់ ViewBag, ViewData, TempDataក្នុង ASP.NET MVC
date: "2020-06-28T10:16:45"
modified: "2020-07-01T19:26:37"
author: sysomeho
categories:
  - ASP.net
tags:
  - TempData in Khmer Tutorial
  - ViewBag
  - ViewData
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. ការប្រើប្រាស់ ViewBag III. ការប្រើប្រាស់ ViewData IV. ការប្រើប្រាស់ TempData V. ភាពខុសគ្នារវាង ViewData, ViewBag, និង TempData I. សេចក្តីផ្តើម ViewBag, ViewData និង TempData គឺជា Objects…
origin:
  site: ask
  id: 11621
  url: https://ask.osify.com/qa/11621
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11621
mergedFrom: []
mediaCount: 9
featured: false
draft: false
---

**មាតិកា**

[I](#_Toc38662424).   សេចក្តីផ្តើម

[I](#_Toc38662425)I.  ការប្រើប្រាស់ ViewBag

[I](#_Toc38662426)II. ការប្រើប្រាស់ ViewData

IV. ការប្រើប្រាស់ TempData

V.  ភាពខុសគ្នារវាង ViewData, ViewBag, និង TempData

#### **I.          សេចក្តីផ្តើម**

ViewBag, ViewData និង TempData គឺជា Objects ដែលមាននៅក្នុង ASP.NET MVC ហើយ object ទាំងនេះត្រូវបានប្រើដើម្បីបោះទិន្នន័យនៅក្នុង scenarios ផ្សេងៗគ្នា។ ខាងក្រោមនេះគឺជា Scenarios ដែលយើងអាចយក object ទាំងនោះមកប្រើប្រាស់ដូចខាងក្រោម៖

- បោះទិន្នន័យចេញពី Controller ទៅកាន់ View
- បោះទិន្នន័យចេញពី action មួយទៅកាន់ action មួយផ្សេងទៀតដែលស្ថិតនៅក្នុង controller តែមួយ
- បោះទិន្នន័យរវាង Controllers ទៅកាន់ Controller
- បោះទិន្នន័យតាមរយៈការ requests បន្តបន្ទាប់គ្នា

#### **II.        ការប្រើប្រាស់ ViewBag**

**ViewBag** គឺជា dynamic object ដើម្បីធ្វើការ pass ទិន្នន័យ (data) ចេញពី Controller ទៅកាន់ View។ វានឹង pass ទិន្នន័យ (data) ជា property របស់ object ViewBag។ ហើយយើងមិនត្រូវការធ្វើការ convert ឬ typecast ដើម្បី read ទិន្នន័យ (data) ឬក៏ សម្រាប់ null checking ឡើយ។ Scope របស់ ViewBag គឺ ត្រូវបានប្រើអនុញ្ញាតតែក្នុង current request ហើយនិងតម្លៃ (value) របស់ ViewBag នឹងប្រែក្លាយជា null ខណៈពេលដែល redirecting។

ឧទាហរណ៍៖

- បើក HomeController.cs
- រួចធ្វើការសរសេរកូដខាងក្រោម

![](/media/7e/7e24c17561ec-1-1.webp)

- ចូលទៅកាន់ Views
- រួចចូលទៅក្នុង Home
- បើក Index.cshtml

![](/media/fd/fdbb03e751f0-2-1.webp)

លទ្ធផល

![](/media/63/6345240b0a00-3-1.webp)

#### **III.          ការប្រើប្រាស់ ViewData**

**ViewData** គឺជា dictionary object ដើម្បីធ្វើការបោះទិន្នន័យ (data) ចេញពី Controller ទៅកាន់ View ដែល data ត្រូវបាន pass ក្នុងទម្រង់ជា key-value pair។ Scope របស់ ViewData គឺស្រដៀងទៅនឹង ViewBag ហើយវា ត្រូវបានតឹងតែង (restricted) ទៅលើ current request និង តម្លៃ (value) នៃ ViewData នឹងក្លាយទៅជា null ខណៈពេលដែល redirecting។

**ឧទាហរណ៍៖**

- បើក HomeController.cs
- រួចធ្វើការសរសេរកូដខាងក្រោម

![](/media/ab/ab59c9741bde-4-1.webp)

- ចូលទៅកាន់ Views
- រួចចូលទៅក្នុង Home
- បើក Index.cshtml

![](/media/c2/c272562e4a26-5-1.webp)

#### **IV.          ការប្រើប្រាស់ TempData**

- TempData គឺជា dictionary object ដើម្បី pass data ចេញពី action មួយទៅ action មួយទៀត ស្ថិតក្នុង Controller តែមួយ ឬក៏ controllers ផ្សេងគ្នា។ ជាធម្មតា TempData object នឹងត្រូវបានគេ store នៅក្នុង session object។ Scope របស់ TempData គឺមានកម្រិត (limit) ទៅលើ next request ហើយបើសិនជាយើងចង់ប្រើប្រាស់ TempData អោយបានយូរជាងនេះ គឺយើងប្រើប្រាស់ object keep និង peek។

**ឧទាហរណ៍៖**

- បើក HomeController.cs
- រួចធ្វើការសរសេរកូដខាងក្រោម

![](/media/1a/1a8d37096fdf-6-1.webp)

- ចូលទៅកាន់ Views
- រួចចូលទៅក្នុង Home
- បើក Index.cshtml

![](/media/9f/9f488ec21f60-7-1.webp)

**V.          ភាពខុសគ្នារវាង** **ViewData, ViewBag, និង TempData**

![](/media/e5/e559015479e5-8-1.webp)
![](/media/61/61c2bcdbf1e3-9-2.webp)
