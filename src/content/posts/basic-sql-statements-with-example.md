---
title: Basic SQL Statements with Example
date: "2018-05-14T13:48:52"
modified: "2018-05-14T14:11:19"
author: sysomeho
categories:
  - Database
tags:
  - Beginner Guide
  - SQL Server
  - T-SQL Example
lang: en
excerpt: SQL or T-SQL Statement/syntax are quite important for the database developer, here are some selected basic statements with example using SQL Server that may help you to get started with sql query. Basic SELECT…
featuredImage: /media/7b/7b51eb87efee-39.webp
origin:
  site: ask
  id: 949
  url: https://ask.osify.com/qa/949
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/949
mergedFrom: []
mediaCount: 48
featured: false
draft: false
---

SQL or T-SQL Statement/syntax are quite important for the database developer, here are some selected basic statements with example using SQL Server that may help you to get started with sql query.

**Basic SELECT statement, * means all columns**

> SELECT * FROM Customers

![](/media/1c/1cd702c1ea54-1.webp)![](/media/84/8407182d1a56-2.webp)

**Basic SELECT statement, specifying which columns to display**

> SELECT FirstName, LastName FROM Customers

![](/media/a3/a35f05603d8b-3.webp)

**Basic SELECT statement, changing the field name**

> SELECT FirstName as ‘First Name’, LastName as ‘Last Name’ FROM Customers

![](/media/50/50d0366962dc-4.webp)

**Basic SELECT statement, concatenating and formatting columns**

> SELECT FirstName + ‘ ‘ + LastName as ‘Customer Name’ From Customers

![](/media/f4/f4bc1e6becc7-5.webp)

**Selecting a record using a WHERE clause to specify the Product ID**

> SELECT * FROM Products WHERE ProductID=3

![](/media/28/281aeda962ba-6.webp)

**Selecting records using a WHERE clause to specify that you want**
 **Products that have a price greater than $30**

> SELECT * FROM Products WHERE ProductPrice>30

![](/media/60/605e7b4526d9-7.webp)

**Selecting records using a WHERE clause to specify that you want**
 **Products that have a price less than $30**

> SELECT * FROM Products WHERE ProductPrice<30

![](/media/64/649018bb838a-8.webp)

**Selecting records using a WHERE clause to specify that you want**
 **Products that have a price GREATER OR EQUAL TO $29.95**

> SELECT * FROM Products WHERE ProductPrice>=29.95

![](/media/61/6174d8862d78-9.webp)

**Selecting records where ProductTypeID is NOT EQUAL to 2**

> SELECT * FROM Products WHERE ProductTypeID <>2

![](/media/05/05d4b65a431c-10.webp)

**Selecting records where ProductName is NOT EQUAL to ‘Inspired By Widgets’**

> SELECT * FROM Products WHERE ProductName <> ‘Inspired By Widgets’

![](/media/9e/9e77bad79778-11.webp)

**Selecting records where ProductName is EQUAL to ‘Inspired By Widgets’**

> SELECT * FROM Products WHERE ProductName =‘Inspired By Widgets’

![](/media/60/60edb5a4a32f-12.webp)

**Selecting records where Orders were between a certain date range**
 **IMPORTANT!! If you don’t specify the TIME, it assumes 12:00:00 AM…….midnight**

> SELECT * FROM Orders WHERE OrderDateTime> ‘1/10/2006’

![](/media/eb/ebf0e5dfee1b-13.webp)

**Selecting records where Orders were between a certain date range**
 **IMPORTANT!! If you don’t specify the TIME, it assumes 12:00:00 AM…….midnight**

> SELECT * FROM Orders WHERE OrderDateTime> ‘1/10/2006’ AND OrderDateTime < ‘1/13/2006’

![](/media/a7/a79d0f3c2723-14.webp)

**Select records where Orders are NOT between a certain date range**

> SELECT * FROM Orders WHERE OrderDateTime< ‘1/9/2006’ OR OrderDateTIme > ‘1/12/2006’

![](/media/3a/3af04aa4aef1-15.webp)

**Calculate the total tax collected from all orders**

> SELECT SUM (Tax) as ‘Taxes Collected’ FROM Orders

![](/media/ca/cac4fff16244-16.webp)

**Calculate the total number of orders in the database**

> SELECT Count (*) as ‘Total Orders’ FROM Orders

![](/media/94/94d679bb16a9-17.webp)

**Display the regular price of all products, and the price less a $5 discount**

> SELECT ProductID, ProductPrice as ‘Regular Price’, ProductPrice-5 as ‘Sale Price’ FROM Products

![](/media/a6/a65f0ad5914c-18.webp)

**Display the regular price of all products, and price with a 10% discount**

> SELECT ProductID, ProductPrice as ‘Regular Price’, ProductPrice*.9 as ‘Sale Price’ FROM Products

![](/media/76/769fed33f339-19.webp)

**Display the least expensive item**

> SELECT Min(ProductPrice) FROM Products

![](/media/ec/ecc1e1979d8f-20.webp)

**Display the most expensive item**

> SELECT Max(ProductPrice) FROM Products

![](/media/f8/f84d396b7386-21.webp)

**Display the average cost of all items**

> SELECT Avg(ProductPrice) FROM Products

![](/media/d5/d501156092f2-22.webp)

**Display only the ID, Year and Month of each order**

> SELECT OrderID, OrderDateTime, Month(OrderDateTime, Day(OrderDateTime) FROM Orders

![](/media/1e/1ef07ab3568a-23.webp)

**Get the current date and time (Useful for the default value columns property**

> SELECT GetDate()

![](/media/6d/6db08fdb5d9d-24.webp)

**User the datename function to return the ‘friendly’ date name**

> –yy=Year
> –mm=Month
> –dd=Day
> –hh=Hour
> –mi=Minute
> –weekday=(Sunday through Saturday)

Example:

> SELECT datename(mm, OrderDateTime) FROM Orders

![](/media/61/61b5b4c12993-25.webp)

**Similar to above, but returns an integer representing the date part you specify**

> SELECT datepart(mm, OrderDateTime) FROM Orders

![](/media/c5/c5ab2c7092ad-26.webp)

**Returns the difference between two dates in DAYS (dd)**

> SELECT datediff(dd, GetDate(), OrderDateTime) FROM Orders

![](/media/af/af5f55ec7a58-27.webp)

**Adds the specified time (in this case 5 days) to each OrderDateTime**

> SELECT dateadd(dd, 5, OrderDateTime) FROM Orders

![](/media/bc/bcdd4b64caf2-28.webp)

**Adds the specified time (in this case 5 days) to each OrderDateTime**

> SELECT OrderDateTime, dateadd(dd, 5, OrderDateTime) FROM Orders

![](/media/bc/bcc5f36e2513-29.webp)

**Selects a subset of an entire field of information. In this case**
 **I’m starting at the 3rd character and retrieving the next 5 characters.**

> SELECT substring(ProductDescription, 3, 5) FROM Products

![](/media/2b/2b187fb0454c-30.webp)

> SELECT right(ProductName, 5) FROM Products

![](/media/f4/f45b08341b1e-31.webp)

> SELECT left(ProductName, 5) FROM Products

![](/media/88/88afcd0cdb09-32.webp)

> –Upper case
> SELECT upper(ProductName) FROM Products

![](/media/bb/bb8d281151f8-33.webp)

> –Lower Case
> SELECT lower(ProductName) FROM Products

![](/media/89/89c40daea1ef-34.webp)

**Reverses the text…not sure how useful, but if you were Harry Carey**
 **this would have come in handy.**

> SELECT reverse (ProductName) FROM Products

![](/media/51/51d566148aed-35.webp)

**Use LIKE to find records the fit a pattern**

> SELECT * FROM Customers WHERE FirstName LIKE ‘J%’

![](/media/20/20a70314a295-36.webp)

**Only selecting those customers that are in one of the list of**
 **possibilities…Illinois, Kansas or Pennsylvania**

> SELECT * FROM Customers WHERE StateProvince IN (‘IL’, ‘KS’, ‘PA’)

![](/media/7f/7f6c6d3db93a-37.webp)

**Ordering the customers by their last name**

> SELECT * FROM Customers ORDER BY LastName ASC

![](/media/dd/dde074f201bb-38.webp)

> SELECT * FROM Customers ORDER BY LastName DESC

![](/media/7b/7b51eb87efee-39.webp)

**Ordering primarily by lastname, but secondarily by firstname**

> SELECT * FROM Customers ORDER BY LastName, FirstName

![](/media/4b/4b989aedde6a-40.webp)

**Calculate the total amounts paid by each customer for shipping**

> SELECT CustomerID, SUM (Shipping) FROM Orders GROUP BY CustomerID

![](/media/cc/cc02d6b8aefa-41.webp)

> SELECT CustomerID, Count(*), SUM (Shipping) FROM Orders GROUP BY CustomerID

![](/media/6b/6b80cf774b22-42.webp)

**Calculate the total amounts paid by each customer for shipping**
 **ONLY IF the customer has purchased 3 or more times**

> SELECT CustomerID, SUM (Shipping) FROM Orders GROUP BY CustomerID HAVING COUNT (*) >=3

![](/media/b8/b8130ebe5a9f-43.webp)

**JOINS!!! OK, here’s where it gets intersting………….**

> SELECT Products, ProductID, Products.ProductName, ProductTypes.ProductTypeName FROM Products INNER JOIN ProductTypes ON Products.ProductTypeID=ProductTypes.ProductTypeID

![](/media/28/28d722bd12d7-44.webp)

**This can be shortened using aliases….**

> SELECT p.ProductID, p.ProductName, pt.ProductTypeName FROM Products p INNER JOIN ProductTypes pt ON p.ProductTypeID=pt.ProductTypeID

![](/media/21/213edd10e7e5-45.webp)

**You can use CLAUSES, and just about everything,**
 **although you always have to be aware of the join.**

> SELECT p.*, pt.ProductTypeName FROM Products p INNER JOIN ProductTypes pt ON p.ProductTypeID=pt.ProductTypeID WHERE p.ProductPrice >29.95

![](/media/a2/a21a0e772dc6-46.webp)

**You can join THERE or MORE TABLES using the name basic formula**

> SELECT c.LastName, o.OrderID, p.ProductName FROM Customers c INNER JOIN Orders o ON c.CustomerID=o.CustomerID INNER JOIN OrderItems oi ON o.OrderID=oi.OrderID INNER JOIN Products p ON p.ProductID=oi.ProductID ORDER BY c.LastName, o.OrderID

![](/media/4d/4dc2ff985c73-47.webp)
