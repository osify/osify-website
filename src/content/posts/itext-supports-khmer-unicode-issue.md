---
title: iText supports Khmer Unicode issue
date: "2013-07-01T11:05:36"
modified: "2014-11-27T16:41:45"
author: osify
categories:
  - Java
tags:
  - iText
  - Java
  - Khmer
  - Khmer unicode
  - Pdf Writer
lang: en
excerpt: About Last iText opensource license is in version 4.2.0 5.5.1 which is until now we can not find the way to make it work with Khmer Unicode yet. After the free version, iText now goes to commercial and I don’t find any…
origin:
  site: ask
  id: 287
  url: https://ask.osify.com/qa/287
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/287
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

### About

Last iText opensource license is in version ~~[4.2.0](http://mvnrepository.com/artifact/com.lowagie/itext)~~ [5.5.1](http://mvnrepository.com/artifact/com.itextpdf/itextpdf) which is until now we can not find the way to make it work with Khmer Unicode yet.

After the free version, iText now goes to commercial and I don’t find any test with Khmer Unicode with it yet as well.

So iText is not support Khmer Unicode rendering.

### See old post about related issue

- [Khmer Unicode in iText](http://stackoverflow.com/questions/7427555/khmer-unicode-in-itext)
- [Khmer Unicode support in iText](http://itext-general.2136553.n4.nabble.com/Khmer-Unicode-support-in-iText-td3815030.html) discussion with Java code

They are from the same user: [leejava](http://stackoverflow.com/users/93011/leejava) asking and still do not have any solution beside comment from iText user for Khmer community to implement it directly in iText code library itself.

### So…

Can we have a way to make iText work with Khmer Unicode?

Or do you have any alternative solution for Khmer Unicode with Pdf writer?

Let’s make this an open room for people to share their idea and technique.

### UPDATED

- I tried to integrate the Khmer rendering to iText, question at [StackOverflow](http://stackoverflow.com/questions/23862732/how-to-add-a-new-language-support-to-itext)
- 26/05/2014: Confusing that the last opensource version was 4.2.0 but in fact, [5.5.1](http://mvnrepository.com/artifact/com.itextpdf/itextpdf) (<http://itextpdf.com/>)
- 27/11/2014: [iText can work for Khmer display](http://ask.osify.com/qa/613 "iText can render for Khmer Unicode")
