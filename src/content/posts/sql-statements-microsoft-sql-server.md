---
title: ការស្វែងយល់អំពីប្រភេទនៃ SQL Statements នៅក្នុង Microsoft SQL Server
date: "2020-08-09T11:51:53"
modified: "2020-08-10T10:21:50"
author: sysomeho
categories:
  - Database
tags:
  - Khmer Tutorial
  - Type of SQL Statements
lang: km
excerpt: មាតិកា I. អ្វីទៅជា SQL? II. ប្រភេទនៃ SQL Statements III. Reference I. អ្វីទៅជា SQL? SQL មកពីពាក្យថា Structure Query Language ដែលវាមានគោលបំណងចំបងបំផុតសម្រាប់ធ្វើការ Query ទិន្នន័យនៅក្នុង Relational Database Management…
origin:
  site: ask
  id: 11691
  url: https://ask.osify.com/qa/11691
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11691
mergedFrom: []
mediaCount: 7
featured: false
draft: false
---

**មាតិកា**

I.   អ្វីទៅជា SQL?

II. ប្រភេទនៃ SQL Statements

III. Reference

#### **I.          អ្វីទៅជា SQL?**

SQL មកពីពាក្យថា Structure Query Language ដែលវាមានគោលបំណងចំបងបំផុតសម្រាប់ធ្វើការ Query ទិន្នន័យនៅក្នុង Relational Database Management System (RDBMS)។ Microsoft SQL Server, MySQL, Oracle, etc. ប្រើប្រាស់នូវ SQL សម្រាប់ Query ទិន្នន័យ ដែលវាមាន syntax ខុសគ្នាបន្តិចបន្តួចតែប៉ុណ្ណោះ។

![](/media/7c/7c427db393cb-1.webp)

#### **II.          ប្រភេទនៃ SQL Statements**

SQL Statements ត្រូវបានគេបែងចែកជា៤ប្រភេទផ្សេងៗគ្នា ដែលមានដូចខាងក្រោម៖

1. DML (DATA MANIPULATION LANGUAGE)
2. DDL (DATA DEFINITION LANGUAGE)
3. DCL (DATA CONTROL LANGUAGE)
4. TCL (TRANSACTION CONTROL LANGUAGE)

សូមមើលរូបខាងក្រោម

![](/media/84/84e0edd43461-2.webp)

- **DML**

DML មកពីពាក្យថា Data Manipulation Language ដែលមាន SQL statements ចំនួន៤ប្រភេទខុសៗគ្នា ដូចជា Select, Insert, Update និង Delete

- SELECT Statement

SELECT statement ត្រូវបានប្រើដើម្បីធ្វើការ select records ចេញពី table ដោយមានឬពុំមានលក្ខខណ្ឌ

**ឧទាហរណ៍៖**

select * from student – សម្រាប់ធ្វើការទាញយកទិន្នន័យទាំងអស់ចេញពី table Student

Select * from student where rank>5 – សម្រាប់ធ្វើការទាញយកទិន្នន័យចេញពី table student ដែលមានលក្ខខណ្ឌ rank ធំជាង 5

- INSERT

INSERT statement ត្រូវបានប្រើប្រាស់ដើម្បីធ្វើការបញ្ចូលតម្លៃចូលទៅក្នុង database table

**ឧទាហរណ៍៖**

Insert Into Student (Rank, StudentName, Mark) Values(1,’Rithy’,450)

- UPDATE

UPDATE statement ត្រូវបានប្រើដើម្បីធ្វើការកែប្រែនូវតម្លៃដែលមានស្រាប់នៅក្នុង table ដែលផ្អែកទៅលើលក្ខខណ្ឌមួយចំនួន

**ឧទាហរណ៍៖**

update student set StudentName=’Sophea’ where StudentName=Rithy’

- DELETE

DELETE statement ត្រូវបានប្រើដើម្បីលុបនូវ record ដែលមាននៅក្នុង table ដោយផ្អែកលើលក្ខខណ្ឌរបស់វា

**ឧទាហរណ៍៖**

Delete from Student where StudentName=’Rithy’

- **DDL**

DDL មកពីពាក្យថា Data Definition Language (DDL) ដែលមាន SQL Statement ចំនួន៣ខុសៗគ្នា។

- CREATE

CREATE statement ត្រូវបានប្រើដើម្បីបង្កើត table ថ្មីនៅក្នុង Database។ CREATE Statement ក៏ត្រូវបានប្រើដើម្បីបង្កើត database object ដូចជា stored procedure, function, etc.

**ឧទាហរណ៍៖**

Create Table Student (Rank Int,StudentName varchar(50),Mark Float)

- ALTER

ALTER statement អាចធ្វើការ add column, modify column, drop column, rename column ឬក៏ rename ឈ្មោះ table

**ឧទាហរណ៍៖**

Alter Table Student Add (StudentAddress varchar (100))

- DROP

SQL DROP TABLE statement ត្រូវបានប្រើដើម្បី remove table រួមទាំង ទិន្នន័យទាំងអស់, indexes, triggers, constraints និង permission ទៅលើ table

**ឧទាហរណ៍៖**

                              Drop Student

- TRUNCATE

TRUNCATE SQL query ប្រើសម្រាប់ remove រាល់ rows ទាំងអស់ចេញពី table

**ឧទាហរណ៍៖**

                              Truncate Table Table_Name

- **DCL**

DCL មកពីពាក្យថា Data Control Language វាត្រូវបានប្រើសម្រាប់ធ្វើការកំណត់នូវ Control ទៅលើទិន្នន័យក្នុង Database។ វាមានcommand ២ប្រភេទ៖

- GRAND

GRAND ត្រូវបានអនុញ្ញាតធ្វើការកំណត់សិទ្ធទៅលើ user

**Syntax៖**

![](/media/eb/eb0ba222de2a-3.webp)

- REVOKE

ត្រូវបានប្រើដើម្បីធ្វើការ Cancel previously granted ឬក៏ denied permissions.

**Syntax៖**

![](/media/03/034f45f97b4b-4.webp)

- **TCL**

TCL មកពីពាក្យថា Transaction Control Language ដែល commands របស់វាត្រូវបានប្រើដើម្បីគ្រប់គ្រងទៅលើ transaction នៅក្នុង database។ ដែលវាត្រូវបានប្រើប្រាស់ដើម្បីគ្រប់គ្រងទៅលើការ changed ដោយ DML statements។ វាក៏អនុញ្ញាតអោយ statements ត្រូវបាន grouped បញ្ចូលគ្នាទៅក្នុង logical transactions។

- COMMIT

Commit command ត្រូវបានប្រើដើម្បី permanently save នូវ transaction ទៅក្នុង database

**Syntax៖**

![](/media/68/683ac947bb03-5.webp)

- ROLLBACK

Rollback command ត្រូវបានប្រើដើម្បី restore database សម្រាប់ last commit។

**Syntax៖**

![](/media/78/78108f68da7b-6.webp)

- SAVEPOINT

SAVEPOINT command ត្រូវបានប្រើដើម្បី temporarily save transaction ដូចនេះយើងអាច roll back បានប្រសិនបើមានភាពាចាំបាច់។

**Syntax៖**

![](/media/b5/b583a7a79f70-7.webp)

#### **III.          Reference**

<https://www.c-sharpcorner.com/blogs/types-of-sql-statements-with-example>
