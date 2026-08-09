---
title: SQL Server with Unicode / Khmer Unicode characters
date: "2009-07-13T17:47:00"
modified: "2009-07-13T17:47:00"
author: osify
categories:
  - Khmer Unicode
tags:
  - Database
  - Encoding
  - MS DotNet
  - SQL Server
lang: en
excerpt: To be notice MS SQL supports only UCS-2 encoding so do not have encoding with UTF-8 as we expected as MySQL or some other database server as well. This means that you can’t use UTF-8 character encoding with Microsoft…
origin:
  site: osify
  id: 86
  url: https://osify.com/2009/07/sql-server-with-unicode-khmer-unicode-characters/
  host: osify.com
legacyUrls:
  - https://osify.com/2009/07/sql-server-with-unicode-khmer-unicode-characters/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2009/07/sql-server-with-unicode-khmer-unicode.html
  published: "2009-07-13T02:47:00.000-07:00"
---

To be notice MS SQL supports only UCS-2 encoding so do not have encoding with UTF-8 as we expected as MySQL or some other database server as well. This means that you can’t use UTF-8 character encoding with Microsoft SQL Server:

Here after I type Khmer Unicode and execute the query, I got question marks instead of characters:

[![](/media/02/02f901f119c7-unicode-sql-server-0.webp)](/media/02/02f901f119c7-unicode-sql-server-0.webp)
So if you need to store national characters in Microsoft SQL Server – please consider using a national character encoding ([U+1780 to U+17FF](http://www.unicode.org/charts/PDF/U1780.pdf) in Unicode/ISO10646 for Khmer Unicode characters, for example). Change data types:

- varchar to nvarchar
- text to ntext
- char to nchar

Here is the example since I created a table and insert data:

1. Create database (mtr_db) as normally (default setting)

[![](/media/4e/4ed735ba484c-unicode-sql-server-1.webp)](/media/4e/4ed735ba484c-unicode-sql-server-1.webp)

2. Create table (tblunicode) with two fields (id/name) but
name – data type nvarchar(MAX)[![](/media/f9/f9d74b7d2989-unicode-sql-server-2.webp)](/media/f9/f9d74b7d2989-unicode-sql-server-2.webp)
3. Insert Khmer Unicode and execute we got it as we typed!
[![](/media/01/01b8a8829f80-unicode-sql-server-3.webp)](/media/01/01b8a8829f80-unicode-sql-server-3.webp)Good luck!
