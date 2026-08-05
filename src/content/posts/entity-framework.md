---
title: ស្វែងយល់អំពី Entity Framework
date: "2020-06-14T12:56:45"
modified: "2020-07-01T19:26:59"
author: sysomeho
categories:
  - ASP.net
tags:
  - Introduction Entity Framework
  - Khmer Tutorial
lang: km
excerpt: មាតិកា I. សេចក្តីផ្តើម II. អ្វីទៅជា Entity Framework? III. អ្វីទៅជា Object-Relational Mapping Framework? IV. ស្វែងយល់អំពី Entity Framework Features V. ស្វែងយល់អំពី Entity Framework Latest Versions VI. ឯកសារយោង I.…
origin:
  site: ask
  id: 11614
  url: https://ask.osify.com/qa/11614
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11614
mergedFrom: []
mediaCount: 4
featured: false
draft: false
---

**មាតិកា**

I.   សេចក្តីផ្តើម

II.  អ្វីទៅជា Entity Framework?

[I](#_Toc43030905)II. អ្វីទៅជា Object-Relational Mapping Framework?

[I](#_Toc43030906)V. ស្វែងយល់អំពី Entity Framework Features

V.  ស្វែងយល់អំពី Entity Framework Latest Versions

VI. ឯកសារយោង

#### **I****.          សេចក្តីផ្តើម**

ពីមុនឡើយ .Net 3.5 ក្នុងនាមជាអ្នកអភិវឌ្ឍន៍យើងច្រើនតែប្រើដើម្បីសរសេរកូដ ADO.NET ដើម្បីអនុវត្តប្រតិបត្តិការ  Perform CRUD ជាមួយមូលដ្ឋានទិន្នន័យ។ ចំពោះបញ្ហានេះយើងត្រូវបង្កើតការភ្ជាប់ជាមួយ Database ដោយបើកការភ្ជាប់ (Open Connection), Create DataSet ដើម្បីប្រមូលយក (fetch) ឬបញ្ជូនទិន្នន័យ (submit data) ទៅក្នុងឃ្លាំងទិន្នន័យ (database) ហើយបំលែងទិន្នន័យពី DataSet ទៅជា .NET Objects ឬផ្ទុយមកវិញដើម្បី Apply ទៅលើ Business rules របស់យើង។ តាមពិតនេះគឺជាពេលវេលាដែលត្រូវការដំណើរការស្មុគស្មាញនិងងាយនឹងមានកំហុស។ ក្រុមហ៊ុន Microsoft បានផ្តល់នូវ Framework មួយហៅថា“ Entity Framework” ដើម្បីធ្វើឱ្យ automate ដែលទាក់ទងនឹង Database ទាំងអស់នេះទៅលើ application របស់យើង ប្រសិនបើយើងផ្តល់នូវព័ត៌មានលំអិតចាំបាច់ទៅអោយ Entity Framework។ នៅក្នុងអត្ថបទនេះខ្ញុំនឹងផ្តល់ការណែនាំខ្លីៗអំពី Entity Framework។

#### **II.        អ្វីទៅជា Entity Framework?**

Entity Framework គឺជា open-source object-relational mapping (ORM) Framework សម្រាប់ .NET applications ដែលវាអនុញ្ញាតិអោយ .NET developers ធ្វើការជាមួយ relational data ដោយប្រើប្រាស់ domain-specific objects ដោយពឹងអាស្រ័យទៅលើ database tables និង columns សម្រាប់ stored ទិន្នន័យឡើយ។ នោះមានន័យថា Entity Framework លុបបំបាត់តម្រូវការសម្រាប់ការសរសេរនូវ data-access code។

តាមនិយមន័យផ្លូវការ៖ Entity Framework គឺជា object-relational mapper (O/RM) ដែលអនុញ្ញាតិអោយ .NET Developers ធ្វើការជាមួយ database ដោយប្រើប្រាស់នូវ Database objects។ វាលុបបំបាត់តម្រូវការទៅលើ data-access code ដែល developers ជាទូទៅតម្រូវអោយសរសេរកូដ។

#### **III.       អ្វីទៅជា Object-Relational Mapping Framework?**

Object Relational Mapping framework ជាស្វ័យប្រវត្តិបង្កើតនូវ classes ដោយផ្អែកលើ database tables។ ហើយវាអាច generate នូវ necessary SQL ដោយស្វ័យប្រវត្តិផងដែរ ដើម្បីបង្កើត database tables ដោយផ្អែកលើ classes។ ដ្យាក្រាមខាងក្រោមនេះបង្ហាញពីកន្លែងដែល Entity Framework fits ទៅក្នុង application របស់យើង។

![](/media/9b/9bb8a0faa29c-a.webp)

ក្នុងដ្យាក្រាមខាងលើបង្ហាញអំពី Entity Framework ដែលវា fits រវាង business entities (i.e. the domain classes) និង database។ វារក្សាទុក data នៅក្នុង database ដែលបាន stored នៅក្នុង properties នៃ business entities (domain classes) ហើយក៏អាច retrieve ទិន្នន័យពី database រួច convert វាទៅជាbusiness entities object ដោយស្វ័យប្រវត្តិ។

#### **IV.          ស្វែងយល់អំពី Entity Framework Features**

- **Cross-platform:** EF Core គឺជា cross-platform framework ដែលអាច run នៅលើ Windows, Linux ហើយនិង Mac.
- **Modelling:** EF (Entity Framework) បង្កើត EDM (Entity Data Model) ផ្អែកលើ POCO (Plain Old CLR Object) entities ជាមួយ get/set properties នៃប្រភេទ data types ផ្សេងៗគ្នា។ វាប្រើប្រាស់ model នៅពេលធ្វើការ querying ឬក៏ saving entity data ទៅក្នុង database។
- **Querying:** EF អនុញ្ញាតិអោយយើង ដើម្បីប្រើប្រាស់ LINQ queries (C#/VB.NET) ដើម្បី retrieve data ចេញពី database។ database provider នឹងបកប្រែ LINQ queries ទៅជា database-specific query language (e.g. SQL for a relational database) ។ EF ក៏អនុញ្ញាតិអោយយើងដើម្បី execute raw SQL queries ដោយផ្ទាល់ទៅកាន់ database។
- **Change Tracking:** EF ធ្វើការ keeps track នៃការប្តូរ instances នៃ entities (Property values) ដែល តម្រូវអោយធ្វើការ submitted ទៅកាន់ database.
- **Saving:** EF ធ្វើការ executes INSERT, UPDATE, និង DELETE commands ទៅកាន់ database ផ្អែកទៅលើការផ្លាស់ប្តូរទៅលើ entities នៅពេលដែលយើង​call​ នូវ SaveChanges() method។ EF ក៏ផ្តល់នូវ asynchronous SaveChangesAsync() method ផងដែរ។
- **Concurrency:** EF ប្រើប្រាស់ Optimistic Concurrency by default ដើម្បី protect overwriting changes ដែលបានបង្កើតឡើងដោយ user ផ្សេងទៀត ចាប់ពី data ដែលត្រូវបាន fetched ពី database។
- **Transactions:** EF performs automatic transaction management ក្នុងពេល querying ឬក៏ saving data។ វាក៏ផ្តល់នូវ options សម្រាប់ customize transaction management ផងដែរ។
- **Caching:** EF បញ្ចូលនូវ first level នៃ caching out of the box។ So, repeated querying will return data from the cache instead of hitting the database.
- **Built-in Conventions:** EF follows conventions over the configuration programming pattern, and includes a set of default rules which automatically configure the EF model.
- **Configurations:** EF allows us to configure the EF model by using data annotation attributes or Fluent API to override default conventions.
- **Migrations:** EF provides a set of migration commands that can be executed on the NuGet Package Manager Console or the Command Line Interface to create or manage underlying database Schema.

#### **V.        ស្វែងយល់អំពី Entity Framework Latest Versions**

ក្រុមហ៊ុន Microsoft ដាក់បញ្ចូល Entity Framework ក្នុងឆ្នាំ ២០០៨ ជាមួយ .NET Framework 3.5។ ចាប់តាំងពីពេលនោះមកវាបានចេញផ្សាយកំណែជាច្រើនរបស់ Entity Framework។ បច្ចុប្បន្ននេះមាន version ចុងក្រោមចំនួនពីរគឺ EF 6 និង EF Core។ ខាងក្រោមនេះគឺជាតារាងបង្ហាញពី EF6 និង EF Core

![](/media/a4/a41aff7b3da6-b.webp)

EF 6 Version History

![](/media/2d/2d7ff8dd67f5-c.webp)

EF Core Version History

![](/media/c5/c5815199dc58-d.webp)

#### V**I.          ឯកសារយោង**

- <https://www.entityframeworktutorial.net/what-is-entityframework.aspx>
- <https://dotnettutorials.net/lesson/introduction-to-entity-framework/>
