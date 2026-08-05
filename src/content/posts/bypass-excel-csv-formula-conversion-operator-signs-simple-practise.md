---
title: Bypass Excel CSV formula Conversion with Operator signs with Simple Practise
date: "2017-03-23T17:11:36"
modified: "2017-03-23T17:13:10"
author: osify
categories:
  - Spreadsheet
tags:
  - Converter
  - CSV
  - MS Excel
  - Office Tips
  - Tips
lang: en
excerpt: You might try to open a CSV file and got error with some columns with error “#NAME?“, it is because of the excel formula conversion issue when there is an operator sign (+, -) in front of the value of the cell as…
origin:
  site: ask
  id: 854
  url: https://ask.osify.com/qa/854
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/854
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

You might try to open a CSV file and got error with some columns with error “**#NAME?**“, it is because of the excel formula conversion issue when there is an operator sign (+, -) in front of the value of the cell as following example:

![](/media/8f/8fbe1623e724-csv-to-excel-operator-issue-osify.webp)

Some solutions may suggest you to put **some few spaces before the value** such as ”   +Data1″ to preserve the value for excel in the CSV file but for me, manipulate the data in CSV should not be a good solution.

I would suggest the solution to use the right conversion in Excel, tell him what method to use in different column you may have that issue.

Normally:

1. You open the CSV (*.csv) to your MS Excel (e.g. MS Excel 2016)
2. You selected the first column to convert (it would not automatic converted if you are not using comma “,” separator but semicolon “;” or other)
3. On Data menu, select “*Text to Columns*“
4. Then do it right here as I show in this following pictures

![](/media/cf/cf83934be257-csv-to-excel-operator-solution-osify.webp)

In my example, two columns may have issue: *Header2, Header3* but I change column data format only in “Header3” to use “*Text*” format.

And the result, here is:

![](/media/f9/f9ea2937ad0a-csv-to-excel-operator-solution-2-osify.webp)

That’s simple.

Or do you think is there any other solutions, you can share to everyone? Please drop them in comment.
