---
title: Migrate from MySQL to MS SQL 2005 using MS Access 2003 as a bridge
date: "2010-02-22T13:54:00"
modified: "2010-05-11T17:21:56"
author: osify
categories:
  - Tips
tags:
  - Migration
  - MS Access
  - MS SQL
  - MySQL
lang: en
excerpt: My friend asked me this topic “Migrate all tables of MySQL to MS SQL 2005 – what way”. I searched on the net as usual, got many questions and answer around one table import mostly but for many tables seem got a tip from…
origin:
  site: osify
  id: 100
  url: https://osify.com/2010/02/migrate-from-mysql-to-ms-sql-2005-using-ms-access-2003-as-a-bridge/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/02/migrate-from-mysql-to-ms-sql-2005-using-ms-access-2003-as-a-bridge/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2010/02/migrate-from-mysql-to-ms-sql-2005-using.html
  published: "2010-02-21T21:54:00.000-08:00"
---

My friend asked me this topic “Migrate all tables of MySQL to MS SQL 2005 – what way”.
I searched on the net as usual, got many questions and answer around one table import mostly but for many tables seem got a tip from a comment:

> This might not be the best solution. Nonetheless, it worked for me. First you need to install and configurate the MyODBC connector as others said previously. Use Access to import from a external ODBC data source. (google it if you have trouble with this step). Once the import is done, use SSIS to import the data in the Access db into a SQL Server 2k5 db. Hope this Helps. (from [social.msdb.microsoft.com](http://social.msdn.microsoft.com/Forums/en-US/sqlintegrationservices/thread/abb4d339-e0d0-42b8-a56f-bbe91cf4867d))

CONTENT:

1. Technical Environment
2. Create ODBC Connection for MySQL
3. Import data from ODBC of MySQL to Access Db
4. Using SSIS (SQL Server Integration Service) to import data from Access Db to MS SQL

So here is my transforming steps:
0. Technical Environment

- I’m using Windows XP SP3 (not mandatory, just my environment.)
- MySQL ODBC Connector 5.1.6
- MS Access 2003 or 2007 (I’m using Access 2007 but db with Access 2003)
- MS SQL Server 2005
- MS SQL Server Tool 2005

I. Create ODBC Connection to MySQL database (using MySQL ODBC Connecter / System DNS)

- Download and install MySQL ODBC Connector [here](http://dev.mysql.com/downloads/connector/odbc/)
- Create System DNS by go to Start –> Settings –> Control Panel –> Administrator Tool –> Click on Data Source (ODBC)

[![](/media/dd/dd8f6753aaf4-migrate-mysql-mssql2k5-1.webp)](/media/dd/dd8f6753aaf4-migrate-mysql-mssql2k5-1.webp)
[![](/media/11/111427e3f8ef-migrate-mysql-mssql2k5-dns-2.webp)](/media/11/111427e3f8ef-migrate-mysql-mssql2k5-dns-2.webp)
[![](/media/ea/ea5c7a0af3a1-migrate-mysql-mssql2k5-dns-3.webp)](/media/ea/ea5c7a0af3a1-migrate-mysql-mssql2k5-dns-3.webp)
II. Using MS Access to import data from an external ODBC data source
I’m using MS Access 2007 but I use Access 2003 as the version here as mostly would work for all as well.

Step 1: Create a blank Access Db (Using compatible MS Access 2003)

[![](/media/86/866d12b25263-migrate-mysql-mssql2k5-access-4.webp)](/media/86/866d12b25263-migrate-mysql-mssql2k5-access-4.webp)
Step 2: Go to tab External Data, using import or link to an ODBC Database:
[![](/media/37/37007cc990ff-migrate-mysql-mssql2k5-access-5.webp)](/media/37/37007cc990ff-migrate-mysql-mssql2k5-access-5.webp)

Step 3: Using Import the source data into a new table in the current database option
[![](/media/de/dea43a314b6f-migrate-mysql-mssql2k5-access-6.webp)](/media/de/dea43a314b6f-migrate-mysql-mssql2k5-access-6.webp)
Step 4: Go to tab: Machine Data Source, choose MySQL

[![](/media/bf/bf3ad35c2f05-migrate-mysql-mssql2k5-access-7-mysql.webp)](/media/bf/bf3ad35c2f05-migrate-mysql-mssql2k5-access-7-mysql.webp)
“Choose your MySQL database to import”

Step 5: You will see a windows to list all table object, select all and click Ok
[![](/media/48/484cf21acc4f-migrate-mysql-mssql2k5-access-8-select-all.webp)](/media/48/484cf21acc4f-migrate-mysql-mssql2k5-access-8-select-all.webp)
Step 6: You’ve done, now. Close button is welcome.
[![](/media/a9/a9dbdb65a11e-migrate-mysql-mssql2k5-access-9-select-all.webp)](/media/a9/a9dbdb65a11e-migrate-mysql-mssql2k5-access-9-select-all.webp)

III. Using SSIS (SQL Server Integration Service)
As said above, I’m using MS SQL 2005 Tool (SQL Server Management Studio)

Step 1: start SQL Server Management Studio

[![](/media/cd/cd628d01b734-migrate-mysql-mssql2k5-mssql-10.webp)](/media/cd/cd628d01b734-migrate-mysql-mssql2k5-mssql-10.webp)
Step 2: Connect to the server with your authentication
[![](/media/8d/8d1e68305af8-migrate-mysql-mssql2k5-mssql-11.webp)](/media/8d/8d1e68305af8-migrate-mysql-mssql2k5-mssql-11.webp)
Step 3: Create new database (in case, it’s new) Ex: mySqlDbLink (not mandatory naming)
[![](/media/ca/ca7fd2afc0c6-migrate-mysql-mssql2k5-mssql-12.webp)](/media/ca/ca7fd2afc0c6-migrate-mysql-mssql2k5-mssql-12.webp)
Step 4: Right click on the db you want to import all tables / data, choose Import task
[![](/media/59/597fde6202f4-migrate-mysql-mssql2k5-mssql-13.webp)](/media/59/597fde6202f4-migrate-mysql-mssql2k5-mssql-13.webp)
Step 5: Choose data source: Microsoft Access and link the file name with above access db (Ex: Z:\LinkToImport.mdb)
[![](/media/12/12cc08357e44-migrate-mysql-mssql2k5-mssql-14.webp)](/media/12/12cc08357e44-migrate-mysql-mssql2k5-mssql-14.webp)
Step 6: Follow all steps of importing wizard but here choose: Copy data from one or more tables or views
[![](/media/72/72e04b06f90c-migrate-mysql-mssql2k5-mssql-15.webp)](/media/72/72e04b06f90c-migrate-mysql-mssql2k5-mssql-15.webp)
Step 7: Follow other instruction (select all tables as example), proceed the import

[![](/media/03/0346a05b1dfb-migrate-mysql-mssql2k5-mssql-16.webp)](/media/03/0346a05b1dfb-migrate-mysql-mssql2k5-mssql-16.webp)
Caution: During my process, I got error and all tables are not imported; I didn’t try to find to know why, but I just try my work for me solution in next comment.

[![](/media/49/4950adcfb2c2-migrate-mysql-mssql2k5-mssql-17-error.webp)](/media/49/4950adcfb2c2-migrate-mysql-mssql2k5-mssql-17-error.webp)

See error log:

> – Pre-execute (Error)
> Messages
> * Error 0xc0202009: {97D241BA-4215-4D82-A8CE-716288708210}: An OLE DB error has occurred. Error code: 0x80004005.
> An OLE DB record is available. Source: “Microsoft JET Database Engine” Hresult: 0x80004005 Description: “Unspecified error”.
> (SQL Server Import and Export Wizard)
>
> * Error 0xc020801c: Data Flow Task: The AcquireConnection method call to the connection manager “SourceConnectionOLEDB” failed with error code 0xC0202009.
> (SQL Server Import and Export Wizard)
>
> * Error 0xc004701a: Data Flow Task: component “Source 32 – wp_bp_messages_messages” (2627) failed the pre-execute phase and returned error code 0xC020801C.
> (SQL Server Import and Export Wizard)

My WORK FOR ME Solution:

- I again re-import the database with one table and I got successful imported
- I start again re-import for all tables, and I got successful with all tables list:

[![](/media/59/59c9ba2a12d1-migrate-mysql-mssql2k5-mssql-17-ok.webp)](/media/59/59c9ba2a12d1-migrate-mysql-mssql2k5-mssql-17-ok.webp)
Finally: Check at the database, found all tables listed here and check some tables, data are there.
[![](/media/dd/ddaadc3e3115-migrate-mysql-mssql2k5-mssql-18.webp)](/media/dd/ddaadc3e3115-migrate-mysql-mssql2k5-mssql-18.webp)
Hope it helps,
Check and give comment if anything to update.
What I have read:

- <http://social.msdn.microsoft.com/Forums/en-US/sqlintegrationservices/thread/abb4d339-e0d0-42b8-a56f-bbe91cf4867d> (Idea got from this forum)
- <http://www.aspfree.com/c/a/Microsoft-Access/Importing-Data-into-MS-Access-with-ODBC/> (For importing data into ms-access, it’s using MS Access 2003)
- <http://www.codeproject.com/KB/database/migrate-mysql-to-mssql.aspx> (not follow all, as not work for me)
