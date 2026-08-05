---
title: "SQL: Insert Statement with Examples"
date: "2018-05-17T00:07:29"
modified: "2018-05-17T00:09:14"
author: sysomeho
categories:
  - Database
tags:
  - Beginner Guide
  - SQL Server
  - T-SQL Example
lang: en
excerpt: Another technique beside selection queries in previous post, here are some of the insertion statement with example using MS SQL syntax that may help you to get understand clearer. Insert Statement –Subqueries help in…
origin:
  site: ask
  id: 999
  url: https://ask.osify.com/qa/999
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/999
mergedFrom: []
mediaCount: 9
featured: false
draft: false
---

Another technique beside [selection queries](http://ask.osify.com/qa/949) in previous post, here are some of the insertion statement with example using MS SQL syntax that may help you to get understand clearer.

**Insert Statement**

**–Subqueries help in situations when its not easy to express**
 **–all the rows that need to be selected …… especially for**
 **–INSERTS, UPDATES and DELETS**
 **–In this case, I only want to see those orders that contain**
 **–a certain product…….. in this case, ProductID=3**

> SELECT * FROM Orders WHERE OrderID IN ( SELECT DISTINCT OrderID FROM OrderItems WHERE ProductID=3)

![](/media/bc/bcd790b16260-1-1.webp)

> INSERT Customers (FirstName, LastName, Address, City, StatePriovince, PostalCode, Country) VALUES ( ‘Bob’, ‘Tabor’, ‘1201 Wheatfield Dr.’, ‘Mesquite’, ‘TX’, ‘75088’, ‘USA’)

**–UPDATES ARE THE MOST POTENTIALLY DESTRUCTIVE OF ALL**
 **–THE SQL COMMANDS .. USE WITH EXTREME CAUTION!**
 **–If you leave off the WHERE clause, you are in BIG trouble.**
 **–And for this reason, NEVER perform an UPDATE or DELETE**
 **–without first writing a SELECT statement to double**
 **–check your WHERE clause !!!**
 **–OR BETTER YET ….**
 **–Make a copy of database, test your changes on the copy,**
 **–script the SQL, make sure it works, then apply to the live database.**

> SELECT * FROM Customers WHERE LastName = ‘Tabor’

![](/media/2d/2d454c9ce92c-2-1.webp)

> UPDATE Customers SET City= ‘Rowlett’, PostalCode = ‘75088’ WHERE LastName = ‘Tabor’

![](/media/44/441436c70503-3-1.webp)

> SLECT * FROM Customers

![](/media/9c/9c40f3185b77-4-1.webp)

> –SELECT * FROM Customers WHERE LastName = ‘Tabor’
> DELETE Customers WHERE LastName = ‘Tabor’

![](/media/33/333ba80c80c6-5-1.webp)

**–Try to delete a customer that already has an associated order**
 **–DELETE Customers WHERE CustomerID =1**
 **–Notice that the foreign key constraint prevents this from happening**
 **–and creating “orphaned”rows.**

> SELECT * FROM Customers WHERE CustomerID =1

![](/media/05/05e32c2f18f8-6-1.webp)

> DELETE Customers WHERE CustomerID =1

![](/media/cb/cb4f8fc9d0e5-7-1.webp)

![](/media/5b/5b666bbf078b-8-1.webp)

```sql
CREATE PROCEDURE CustomerInsert
@FirstName varchar(50),
@LastName varchar(50),
@Address varchar(50),
@City varchar(50),
@StateRegion varchar(50),
@PostalCode varchar(50),
@Country varchar(50)
AS
BEGIN
INSERT Customers (FirstName, LastName, Address, City, StateRegion, PostalCode, Country)
VALUES (@FirstName, @LastName, @Address, @City, @StateRegion, @PostalCode, @Country)
END
GO
```

![](/media/08/08b92cd112df-9-1.webp)
