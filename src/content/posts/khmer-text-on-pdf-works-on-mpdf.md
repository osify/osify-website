---
title: Khmer Text on PDF, Works on mPDF
date: "2020-07-29T13:28:51"
modified: "2020-07-29T13:45:08"
author: osify
categories:
  - PHP
tags: []
lang: en
excerpt: Here, how the story could explain in this result As you see, it’s working! mPDF ( ) is originally extended from FPDF ( ) It has some wrapper such as in Laravel and other PHP framework. To make it works, we need to…
featuredImage: /media/5f/5f95dd43ea48-image-2.webp
origin:
  site: ask
  id: 11677
  url: https://ask.osify.com/qa/11677
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11677
mergedFrom: []
mediaCount: 7
featured: false
draft: false
---

Here, how the story could explain in this result

![](/media/5f/5f95dd43ea48-image-2.webp)

As you see, it’s working!

mPDF (<https://github.com/mpdf/mpdf>) is originally extended from FPDF (<http://fpdf.org/>)

It has some wrapper such as in Laravel and other PHP framework.

To make it works, we need to understand how to put the custom font and in mPDF it has a configuration (I did in Laravel, wrapper using: <https://github.com/niklasravnsborg/laravel-pdf>) in “*config/pdf.php*” to provide a font configure as:

```
"yourfont" => /* Khmer */
  'R' => "your-regularfont.ttf",
  'useOTL' => 0xFF, // required for Khmer
  'useKashida' => 75, // required for Khmer
],
```

That’s it but if you don’t know how it works, you will end up using wrong font. Most of case, Khmer Fonts are missing Latin characters, you need to know to check this, here is example of missing character:

![](/media/9c/9c2ca7ecbab9-image-3.webp)

I did make an answer in 2012 for FPDF at [StackOverflow](https://stackoverflow.com/a/8997343/889126) when it that time, it’s hard to make it work even showing a Khmer character but it kept a clue to help with: <http://www.fpdf.org/makefont/>

With above makefont URL, it helps us to find a good font to use, in my case, it’s “[Khmer OS Siemreap](https://github.com/Seuksa/iTextKhmer/blob/master/src/main/resources/KhmerOSSiemreap.ttf)“, you test that you will see like this:

![](/media/6f/6f398d14415d-image-4.webp)

It’s a good font to use.

I think, it would work the same for library: TCPDF (https://tcpdf.org/) as it’s also an extender from FPDF.

**Wrap-up**

To make it works for mPDF:

1. HTML header to add:

![](/media/7c/7c49a843a737-image-5.webp)

2. Custom Font

![](/media/91/91ed9a2d7310-image-6.webp)

3. Use fontname in HTML tag

![](/media/4b/4bd3c47137c1-image-7.webp)

That’s all!
