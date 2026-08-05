---
title: Declare and compare a variable with Khmer unicode string in VBA, excel
date: "2013-04-19T13:39:28"
modified: "2013-04-19T13:39:28"
author: osify
categories:
  - VBA
tags:
  - Khmer
  - Khmer unicode
  - MS Access
  - MS Excel
  - Programming Tip
  - Tips
  - VBA
lang: en
excerpt: Issue Khmer unicode character string is different from other unicode character, we can’t write it on VBA editor of Excel or MS Access. How to declare a variable and assign Khmer unicode string? Answer Of course refer to…
origin:
  site: ask
  id: 231
  url: https://ask.osify.com/qa/231
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/231
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

# Issue

Khmer unicode character string is different from other unicode character, we can’t write it on VBA editor of Excel or MS Access.

How to declare a variable and assign Khmer unicode string?

# Answer

Of course refer to the answer in <http://stackoverflow.com/questions/7269399/declaring-a-unicode-string-in-vba-in-excel> help us to answer to Khmer unicode issue in Excel VBA as well.

In VBA, to declare a Khmer unicode, you can’t write directly to it, so you need to translate each character into its hexadecimal code and use function: ChrW

I used tool: <http://rishida.net/tools/conversion/> to translate Khmer unicode string to hexa and then I added to each hexadecimal to use in VBA by **&H**.

Example of writing: ល.រ into VBA variable:

```vb.net
Dim myStr As String
myStr = ChrW(&H179B) & "." & ChrW(&H179A)
```

So that the comparison can make the same as other string do.

Here is the complete sample code:

```vb.net
Attribute VB_Name = "Module1"
Sub TestUnicode()
Dim num As Integer
Dim str As String

num = Range("A1")
str = Range("B1")

' assign Khmer unicode string to a cell in excel
Range("D1").Value = str

Dim total As Integer
total = 14
Dim init As Integer
Dim myStr As String
' How you write: ល.រ in Khmer unicode
' conver character you want to compare and use function ChrW to convert each character
' you can use tool: http://rishida.net/tools/conversion/
' use Hexadecimal code point and adding: &H in front of the unicode number
myStr = ChrW(&H179B) & "." & ChrW(&H179A)

'comparing Khmer unicode string between cell
For init = 1 To total
    If Range("B" & init).Value = Range("D" & init).Value Then
        Range("C" & init).Value = 1
    Else
        Range("C" & init).Value = 0
    End If
Next init

If Range("B17").Value = myStr Then
    MsgBox "Unicode characters match"
Else
    MsgBox "Character not matchx"
End If
End Sub
```

This would apply the same to other VBA platform code: MS Word, MS Access etc.
