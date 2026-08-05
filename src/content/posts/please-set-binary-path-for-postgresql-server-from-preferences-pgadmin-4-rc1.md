---
title: Please set binary path for PostgreSQL Server from preferences. [pgAdmin 4-rc1]
date: "2016-09-23T11:48:33"
modified: "2016-09-23T11:50:42"
author: osify
categories:
  - PostgreSQL
tags:
  - pgAdmin
  - PostgreSQL
  - Trouble Shooting
lang: en
excerpt: pgAdmin 4 is a new version of PostgreSQL administration tool. It’s interface looks so cool and of course, more features would come with that. Any way, here is the first error I faced and I think people might need to…
origin:
  site: ask
  id: 824
  url: https://ask.osify.com/qa/824
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/824
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

pgAdmin 4 is a new version of PostgreSQL administration tool. It’s interface looks so cool and of course, more features would come with that.

Any way, here is the first error I faced and I think people might need to know it when such as we try to backup/restore from the pgAdmin 4 (rc1) received an error:

> Please set binary path for PostgreSQL Server from preferences.

![postgres-pgadmin94-preference](/media/10/1079f118c3b8-postgres-pgadmin94-preference.webp)

It’s needed to configure the preference to point to the postgres installation’s bin.

You can find the preference via File menu and go to “Binary paths” as following:

![postgres-pgadmin94-preference-solved](/media/71/71e9ae620414-postgres-pgadmin94-preference-solved.webp)

Then we can do as we did in pgAdmin III.

And more other preference for this version, you can find via this [link](https://www.pgadmin.org/docs4/dev/preferences.html).
