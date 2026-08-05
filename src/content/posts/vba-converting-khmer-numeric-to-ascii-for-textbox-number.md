---
title: VBA Converting Khmer Numeric to Ascii for TextBox Number
date: "2019-01-15T12:15:19"
modified: "2019-01-15T03:21:53"
author: osify
categories:
  - Access DB
  - VBA
tags:
  - Khmer Converter
  - Khmer Font
  - Khmer unicode
  - MS Access
  - VBA
  - VBA Programming
lang: en
excerpt: "Have you ever found this when you type Number using Khmer Unicode Keyboard ? The error message: The value you entered isn’t valid for this field. For example, you may have entered text in a numeric field or a number…"
featuredImage: /media/b8/b84d5bcb2d78-featured.webp
origin:
  site: ask
  id: 1571
  url: https://ask.osify.com/qa/1571
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1571
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

![](/media/b8/b84d5bcb2d78-featured.webp)

*Have you ever found this when you type Number using Khmer Unicode Keyboard ?*

The error message:

> The value you entered isn’t valid for this field.
>
> For example, you may have entered text in a numeric field or a number that is larger than the FieldSize settings permits.
>
> MS Access 2010

Above error is simple for us as our characters are in Unicode and of course, if we check Keycode, it’s the same from number 0 to 9 but when we check ASCII code on each typing of the numeric, it’s not the same.

I solved it in a very simple way by converting the unicode ascii to numeric ascii

|  |  |  |
| --- | --- | --- |
| **Number** | **Khmer Unicode Number ASCII** | **Number in ASCII** |
| 0 | 6112 | 48 |
| 1 | 6113 | 49 |
| 2 | 6114 | 50 |
| 3 | 6115 | 51 |
| 4 | 6116 | 52 |
| 5 | 6117 | 53 |
| 6 | 6118 | 54 |
| 7 | 6119 | 55 |
| 8 | 6120 | 56 |
| 9 | 6121 | 57 |

By then we can do it on event “KeyPress” to detect the ASCII code of the typing:

![](/media/76/765e45517e50-vba-unicode-numeric-in-textbox-number-solution1.webp)

They when you type the number will transform itself to Latin Numeric, prevent you error with the VBA form as above. And you can find the source code to copy as following:

```
<code>Select Case KeyAscii
Case 6112 '0
	KeyAscii = 48
Case 6113
	KeyAscii = 49
Case 6114
	KeyAscii = 50
Case 6115
	KeyAscii = 51
Case 6116
	KeyAscii = 52
Case 6117
	KeyAscii = 53
Case 6118
	KeyAscii = 54
Case 6119
	KeyAscii = 55
Case 6120
	KeyAscii = 56
Case 6121 '9
	KeyAscii = 57
End Select</code>
```
