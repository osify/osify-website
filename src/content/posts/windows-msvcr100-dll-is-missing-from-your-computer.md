---
title: "Windows: MSVCR100.dll is missing from your computer"
date: "2012-09-19T10:37:59"
modified: "2012-09-19T10:46:26"
author: osify
categories:
  - Windows
tags:
  - Missing DLL
  - Windows 7
lang: en
excerpt: "You might start a program and found a popup said something like: The Program can’t start becuase MSVCR100.dll is missing from your computer. Try reinstalling the program to fix this problem. The issue because the…"
origin:
  site: ask
  id: 182
  url: https://ask.osify.com/qa/182
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/182
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

You might start a program and found a popup said something like:

> The Program can’t start becuase MSVCR100.dll is missing  from your computer. Try reinstalling the program to fix this problem.

The issue because the program you are trying to start was built with Visual Studio 2010 and in your Windows missing the  Microsoft Visual C++ Redistributable dll.

## Resolution

Install ones of the following redistributable dll:

> Visual C++ 2005 Redistributable Package for (X86)
> <http://www.microsoft.com/downloads/en/details.aspx?FamilyId=32BC1BEE-A3F9-4C13-9C99-220B62A191EE&displaylang=en>
>
> Visual C++ 2005 Redistributable Packager for (x64)
> <http://www.microsoft.com/downloads/en/details.aspx?FamilyID=eb4ebe2d-33c0-4a47-9dd4-b9a6d7bd44da&displaylang=en>
>
> Microsoft Visual C++ 2008 Redistributable Package (x86)
> <http://www.microsoft.com/downloads/en/details.aspx?FamilyID=9B2DA534-3E03-4391-8A4D-074B9F2BC1BF&displaylang=en>
>
> Microsoft Visual C++ 2008 SP1 Redistributable Package for (x64)
> <http://www.microsoft.com/downloads/en/details.aspx?familyid=BA9257CA-337F-4B40-8C14-157CFDFFEE4E&displaylang=en>
>
> Microsoft Visual C++ 2010 Redistributable Package (x86)
> [http://www.microsoft.com/download/en/details.aspx?id=5555]( http://www.microsoft.com/download/en/details.aspx?id=5555)
>
> Microsoft Visual C++ 2010 Redistributable Package (x64)
> [http://www.microsoft.com/download/en/details.aspx?id=14632]( http://www.microsoft.com/download/en/details.aspx?id=14632)

## Tips & Warnings

You could install each version (2005, 2008, 2010) since all of them are different package.
