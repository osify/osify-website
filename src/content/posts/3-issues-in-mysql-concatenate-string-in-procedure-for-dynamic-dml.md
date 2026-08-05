---
title: "3 Issues in MySQL concatenate String in procedure for dynamic DML"
date: "2013-01-08T15:44:01"
modified: "2013-01-08T15:44:01"
author: osify
categories:
  - Database
tags:
  - MySQL
  - MySQL Function
  - MySQL Procedure
lang: en
excerpt: I was trying to figure out one of my long coding procedure issue in mysql that I just did and could not find exactly problem. Let’s have a look one of my sample issue as a use case during my experience. I create a…
origin:
  site: osify
  id: 1671
  url: https://osify.com/2013/01/3-issues-in-mysql-concatenate-string-in-procedure-for-dynamic-dml/
  host: osify.com
legacyUrls:
  - https://osify.com/2013/01/3-issues-in-mysql-concatenate-string-in-procedure-for-dynamic-dml/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I was trying to figure out one of my long coding procedure issue in mysql that I just did and could not find exactly problem.

Let’s have a look one of my sample issue as a use case during my experience.

I create a procedure that contain a very long dynamic insertion string by using concatenate feature ([CANCAT](http://dev.mysql.com/doc/refman/5.0/en/string-functions.html#function_concat)()) as following example:

```sql
SET @sqlString = CONCAT('INSERT INTO (f1,f2,f3,...,fn) ');
SET @sqlString = CONCAT(@sqlString, 'SELECT v_f1, v_f2, ..., v_fn');
PREPARE stmtString FROM @sqlString;
EXECUTE stmtString;
```

The **@sqlString** length should be longer than 2000 characters and all fields are coming from some logic to assign value before passing to this insertion string.

Of course, I was typing my first issue in StackOverflow to look for help but finally I trigger it myself with following simple issue that we might face again some day in MySQL Procedure.

Here are my issues and solutions that work for me:

### 1st Issue: CONCAT(‘string’, null) = NULL

I got **@sqlString** NULL string, if I output first line of code, I got the string is not null but after concatenate the second line of code, the reference param **@sqlString** is null.

(While I am typing, I solved my problem of 1st issue)

I found it because of one reference param in 2nd line of code is null so when concatenate with null value bring all string to null, corrected by using QUOTE(v_fx).
So all Number, date field, I used QUOTE(param) to help handling null value return to make concatenate the issue.

### 2nd Issue: long concatenate string return as BLOB

The query string after 2nd line of code above return value as blob type, I corrected by convert it to string

SET @sqlString = CAST(@sqlString AS CHAR(10000) CHARACTER SET utf8);

### 3rd Issue: Always take care on NULL return field, use right function

Again, the issue with dynamic insertion string, it was unable to execute the query, I tried to track the string output of @sqlString by directly output on editor since I can’t find exactly how to catch exception in mysql as it doesn’t have in procedure so here I am doing:

```sql
SELECT @sqlString
```

Finally I found the same issue as 1st issue, it’s because of the missing QUOTE on some fields.
Here are some function you might need to consider to use to prevent null in concatenate string:

- [QUOTE (v_string)](http://dev.mysql.com/doc/refman/5.0/en/string-functions.html#function_quote)
- [IFNULL(v_field, new_value)](http://dev.mysql.com/doc/refman/5.0/en/control-flow-functions.html#function_ifnull)

Now, it’s working for me, here is my final code sample that might help you.

```sql
SET @sqlString = CONCAT('INSERT INTO (f1,f2,f3,...,fn) ');
SET @sqlString = CONCAT(@sqlString, 'SELECT v_f1, v_f2, ..., v_fn');
SET @sqlString = CAST(@sqlString AS CHAR(10000) CHARACTER SET utf8);
PREPARE stmtString FROM @sqlString;
EXECUTE stmtString;
```
