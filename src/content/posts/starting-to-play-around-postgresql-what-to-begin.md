---
title: Starting to play around PostgreSql – what to begin
date: "2010-05-21T16:18:34"
modified: "2016-05-26T16:59:02"
author: osify
categories:
  - Database
  - Tips
tags: []
lang: en
excerpt: My client asks to work on a Java batch to migrate data from PostgreSql to Oracle via JDBC, with almost 2 days to spend around preparing the server, loading dump, starting dev. around as well. Here wanna to share what I…
origin:
  site: osify
  id: 194
  url: https://osify.com/2010/05/starting-to-play-around-postgresql-what-to-begin/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/05/starting-to-play-around-postgresql-what-to-begin/
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

My client asks to work on a Java batch to migrate data from PostgreSql to Oracle via JDBC, with almost 2 days to spend around preparing the server, loading dump, starting dev. around as well.

Here wanna to share what I went on (not sure if I went to the right way, give advise if any)

[toc]

## 1. Download PostgreSql & Install

- Go to PostgreSql download site: <http://www.postgresql.org/download/>
- In my case, I use [PostgreSql 8.3.8](http://wwwmaster.postgresql.org/download/mirrors-ftp/binary/v8.3.8/win32/postgresql-8.3.8-1.zip)

2. Download Administration tool for PostgreSql: pgAdmin

- [pgAdmin 3.1.8.4](http://www.postgresql.org/download/mirrors-ftp/pgadmin3/release/v1.8.4/win32/pgadmin3-1.8.4.zip)

## 3. Configure the postgreSql server be able to accept remote access from other client PC

Suppose using the default port of PostgreSql (Port: 5432)

I corrected for following configuration file:

- `postgresql.conf`

  - `Change listen_addresses from 'localhost' to '*'`

  ```
  listen_addresses = '*'
  ```

- `pg_hba.conf`
  - We need to enable client pc ip to access Postgresql with following rule:
  - # TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD
  - host    all         all         127.0.0.1/32          md5  ==> For local pc only
  - host    all         all         192.168.1.0/24     md5   ==> All PC in my LAN

## 4. Connecting to the server for the first time

[![PostgreSql pgAdmin](/media/91/91bfef1945e7-postgres-pgadmin-first.webp "PostgreSql pgAdmin")](/media/91/91bfef1945e7-postgres-pgadmin-first.webp)

PostgreSql pgAdmin

[![PostgreSql pgAdmin Area](/media/45/4572aa2dc713-postgres-pgadmin-query.webp "PostgreSql pgAdmin Area")](/media/45/4572aa2dc713-postgres-pgadmin-query.webp)

PostgreSql pgAdmin Area

Generally the query is the same to MySql or Plsql of oracle as well for basically… I haven’t gone detail yet.

## 5. Loading existing dump to server

Go to DOS at PostgreSql/bin folder and follow for following step:

- — delete old db
  dropdb -U {admin_user} {db_name}
  - if the db is not exist will saw an error as well.

- — create db
  createdb -U {admin_user} -T template0 {db_name}
  - I created the db with PostgreSql template “zero” (template0)
  - Why create with template0?
  - Because the dumps produced by pg_dump are relative to template0 that will also dump all from template1. (see explain detail in [Manual on Restoring the Dump](http://www.postgresql.org/docs/current/static/backup-dump.html))

- — execute to restore dump file to db
  psql -U {admin_user} -d {db_name} -f “{dump.sql file}”

Notice: sometimes not work when the database is accessing my client PC or currently being connected; Stop the service and restart the service before perform above action.

My first task is done now…

We are going on with Jdbc connection of PostgreSql, I’m reading following post:

- <http://wiht.link/postgresql_resources>
- <http://mojo.codehaus.org/sql-maven-plugin/examples/execute.html>

To continue with around Jdbc dev. later.
