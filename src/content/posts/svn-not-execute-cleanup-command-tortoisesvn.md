---
title: SVN could not execute cleanup command – TortoiseSVN
date: "2014-12-19T14:01:41"
modified: "2014-12-18T19:39:51"
author: osify
categories:
  - Source Control
tags:
  - Sourec Control
  - SVN
lang: en
excerpt: "Your repository is locked due to some error during update or something. You made a cleanup command or via GUI of TortoiseSVN and then you always get error as something like: Then you can’t do anything even update, nor…"
origin:
  site: ask
  id: 634
  url: https://ask.osify.com/qa/634
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/634
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

Your repository is locked due to some error during update or something.

You made a cleanup command or via GUI of TortoiseSVN and then you always get error as something like:

```actionscript
Previous operation has not finished; run 'cleanup' if it was interrupted
Please execute the 'Cleanup' command.
```

Then you can’t do anything even update, nor clean up.

[![svn-cleanup-failt](/media/bd/bd6b64bbee9f-svn-cleanup-failt.webp)](/media/bd/bd6b64bbee9f-svn-cleanup-failt.webp)

#### Reading

You can find similar or the same issue on StackOverflow or something:

- Working copy XXX locked and cleanup failed in SVN, [here](http://stackoverflow.com/questions/127932/working-copy-xxx-locked-and-cleanup-failed-in-svn)
- Executing SVN Cleanup from command prompt, [here](http://stackoverflow.com/questions/7090507/executing-svn-cleanup-from-command-prompt)

So among them, one solution that I always use for this kind of issue.

#### Solutions

I would first to make sure that I could re-execute the clean-up, update or commit as normal so I use the method to clean the sqlite db (***wc.db***) of SVN that you can find it in the root of your local folder (.svn).

Following screen shows that the local sync. has been locked.

[![svn-cleanup-db-cleanlock-1](/media/f6/f6cb2eeaf00b-svn-cleanup-db-cleanlock-1.webp)](/media/f6/f6cb2eeaf00b-svn-cleanup-db-cleanlock-1.webp)

To remove the lock, we just need to delete the records of WC_LOCK and WC_QUEUE:

```sql
delete from WC_LOCK;
delete from WORK_QUEUE;
```

Next, above solution just about to re-enable commit, update or cleanup but you need to solve your real issue that causes you with this lock. As in my case, I have issue with a folder contains special character naming on files so for me, I just need to delete the folder from local and commit it to solve my problem.

You might have other issue, let’s raise here if I or some could help out.
