---
title: Write a string to the specific line or position in the written file in java
date: "2008-12-23T11:31:00"
modified: "2008-12-23T11:31:00"
author: osify
categories: []
tags:
  - Java
  - RandomAccessFile
  - Write to file
lang: en
excerpt: "I got doubt on this point almost 2 hours to seek how can I write a string to a file at the position, I want. Let me try to explain my issue that would help others who will have the same: I extracted the data from…"
origin:
  site: osify
  id: 74
  url: https://osify.com/2008/12/write-a-string-to-the-specific-line-or-position-in-the-written-file-in-java/
  host: osify.com
legacyUrls:
  - https://osify.com/2008/12/write-a-string-to-the-specific-line-or-position-in-the-written-file-in-java/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I got doubt on this point almost 2 hours to seek how can I write a string to a file at the position, I want.

Let me try to explain my issue that would help others who will have the same:
I extracted the data from database and write it to a file, I have so many queries for one group of lines, the layout of the file is:

```
1 line headermany lines detail
```

On the header, it’s the summary of all lines in detail, it’s in one query and I need to write first line of the header and a group of lines for detail to prevent OutOfMemory Exception at run time (As my file can have data around 1000 MB or much more than this).
One day, I got a request on my dev to modify a rule at the header that i need to count all lines of detail and put in in the header line in one position (position 27),
1. I don’t want to execute count all queries of detail to find the record as we can count it when each query extract data so that we can reduce some cost of performance issue.
2. And we should not keep all lines of detail in StringBuffer or String or in list or map and after finish iterate them to write into file from header and then the details (this way we can count the record lines till queries of detail finished and then add it to header as normal), this solution for sure, we will meet OutOfMemory Exception for hug amount of data.
3. So the only solution to write the lines of header and details as normal but try to integrate the record count value to the header line in written file which should not rewrite the new file by read from the written file (performance issue!)..

With solution 3/ above, I got the way with RandomAccessFile functionality: Seeking the byte position of records and after the position integrate the value we prefer.
As my file is fixed length file, and the field to add is at position 27 so the end position of it is 26, here is example:

```
file.txt: 1 line header and 12 lines of detail:000000000005400000221020080        98136...
```

I need to add value: 12 to the position 27, here is the code:

```
/*** @param args* @throws IOException*/public static void main(String[] args) throws IOException {   RandomAccessFile reReadWriteFile = null;   try {       reReadWriteFile =               new RandomAccessFile("file.txt", "rw");   } catch (FileNotFoundException e) {       System.out.println("Error: " + e.getMessage());       throw e;   }          try {       // To search on 26 bytes of field total detail lines        // at header line       reReadWriteFile.seek(26);       reReadWriteFile.writeBytes("12");       reReadWriteFile.close();   } catch (IOException e) {       System.out.println("Error: " + e.getMessage());        throw e;   }}
```

After execute, file.txt: will be

```
0000000000054000002210200812       98136...
```

Hope it helps you!
Metrey,

Learning Tip: [API of RandomAccessFile](http://java.sun.com/j2se/1.4.2/docs/api/java/io/RandomAccessFile.html)
