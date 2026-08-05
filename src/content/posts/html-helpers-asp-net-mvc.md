---
title: ស្វែងយល់អំពី HTML Helpers ក្នុង ASP.NET MVC
date: "2020-03-28T10:32:40"
modified: "2020-06-05T01:49:26"
author: sysomeho
categories:
  - ASP.net
tags:
  - Basic HTML Helpers in ASP.NET MVC
  - Khmer Tutorial
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. ការប្រើប្រាស់ Inline HTML Helpers III. ការប្រើប្រាស់ Built-In HTML Helpers I. សេចក្តីផ្តើម HTML Helper គ្រាន់តែជា method ដែល return នូវ HTML string​ តែប៉ុណ្ណោះ។ String អាចតំណាងអោយប្រភេទនៃ…
origin:
  site: ask
  id: 11544
  url: https://ask.osify.com/qa/11544
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11544
mergedFrom: []
mediaCount: 5
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II. ការប្រើប្រាស់ Inline HTML Helpers

III. ការប្រើប្រាស់ Built-In HTML Helpers

#### **I.          សេចក្តីផ្តើម**

HTML
Helper គ្រាន់តែជា method ដែល return
នូវ HTML string​ តែប៉ុណ្ណោះ។ String
អាចតំណាងអោយប្រភេទនៃ content ដែលយើងចង់បាន។
ឧទាហរណ៍ យើងអាចប្រើប្រាស់ HTML Helper ដើម្បី render
នូវ HTML tags ដូចជា HTML
<input>, <button> និង <img> tag ជាដើម។ យើងក៏អាចធ្វើការបង្កើត HTML Helper ដោយខ្លួនឯង
ដើម្បី render នូវ content ដ៏ស្មុគស្មាញជាច្រើន
ដូចជា menu strip ឬក៏ HTML table សម្រាប់បង្ហាញទិន្នន័យរបស់
database។

#### **II.         ការប្រើប្រាស់ Inline HTML Helpers**

ខាងក្រោមនេះគឺជាការបង្កើតឡើងនៅក្នុង view តែមួយដោយប្រើប្រាស់ Razor **@helper** tag។ Helpers ទាំងនេះអាចត្រូវបានគេប្រើតែនៅលើ view តែមួយដូចគ្នាតែប៉ុណ្ណោះ។

![](/media/16/164238c41149-a.webp)

#### **III.          ការប្រើប្រាស់ Built-In HTML Helpers**

Built-In
HTML Helpers គឺជា extensions methods ទៅលើ HtmlHelper
class។ Built-In HTML Helpers ត្រូវបានគេបែងចែកជា៣ប្រភេទ៖

1. **Standard HTML Helpers**

Helpers ទាំងនេះត្រូវបានគេប្រើដើម្បី render នូវប្រភេទ HTML elements ជាទូទៅភាគច្រើនដូចជា HTML text boxes, checkboxes ជាដើម។ ខាងក្រោមនេះគឺជា List នៃ​ standard html helpers ដែលត្រូវបានប្រើប្រាស់ភាគច្រើនដូចខាងក្រោម៖

![](/media/c4/c4f9a46175bb-b.webp)
![](/media/95/95a8e77b4fed-c.webp)

2. **Typed HTML Helpers**

Helpers ទាំងនេះបង្ហាញអំពីអ្វីដែល HTML elements ត្រូវតម្រូវអោយធ្វើការ render ពឹងផ្អែកទៅលើ properties នៃ​ class model របស់យើង។ នេះគឺជាវិធីសាស្រ្តយ៉ាងមានភាពបត់បែនសម្រាប់បង្ហាញទិន្នន័យទៅអោយ user ថ្វីបើវាតម្រូវអោយមានការយកចិត្តទុកដាក់ដើម្បីបង្កើតវាឡើងក៏ដោយ។ ដើម្បី setup នូវ HTML element អោយមានប្រសិទ្ធភាពជាមួយនឹង Templated HTML Helper ដែលបង្កើតអោយមានការប្រើប្រាស់ DataType attribute របស់ DataAnnitation class។ ឧទាហរណ៍ នៅពេលដែលយើងប្រើ DataType ជា Password នោះ Templated Helper នឹង render ប្រភេទ Password ជា HTML input element ដោយស្វ័យប្រវត្តិ។

![](/media/82/82def23139ca-d.webp)

3. **Custom HTML Helpers**

យើងក៏អាចបង្កើតនូវ customer html methods ដោយខ្លួនឯងបានដែរ ដោយបង្កើតនូវ extension method ទៅលើ HtmlHelper class ឬដោយបង្កើតនូវ    static methods នៅក្នុង utility class

![](/media/cb/cba6caf803d6-e.webp)
