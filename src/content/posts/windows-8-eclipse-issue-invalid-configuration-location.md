---
title: Windows 8 Eclipse Issue – Invalid Configuration Location
date: "2013-01-07T13:58:45"
modified: "2013-01-07T15:13:25"
author: osify
categories:
  - Tips
tags:
  - Eclipse
  - Windows 8
  - Windows 8 Tips
lang: en
excerpt: "When I first start my eclipse after Windows 8 install, I got error: Locking is not possible in the directory “\\Eclipse\\configuration\\org.eclipse.osgi”. A common reason is that the file system or Runtime Environment does…"
origin:
  site: osify
  id: 1665
  url: https://osify.com/2013/01/windows-8-eclipse-issue-invalid-configuration-location/
  host: osify.com
legacyUrls:
  - https://osify.com/2013/01/windows-8-eclipse-issue-invalid-configuration-location/
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

When I first start my eclipse after Windows 8 install, I got error:

> Locking is not possible in the directory “\Eclipse\configuration\org.eclipse.osgi”.
> A common reason is that the file system or Runtime Environment does not support file locking for that location.
> Please choose a different location, or disable file locking passing “-Dosgi.locking=none” as a VM argument.
>
> \Eclipse\configuration\org.eclipse.osgi\.manager\.fileTableLock

![Eclipse issue on file locking](/media/d8/d862dd9d9b01-eclipse-locking-issue-windows-8-osify.webp "Eclipse issue on file locking")

Eclipse issue on file locking

If you search on Google, it might lead you to this [post](http://stackoverflow.com/questions/8214957/locking-is-not-possible-in-the-directory-c-eclipse-configuration-org-eclipse-os) but I can’t solve the issue as soon as I get into the post but I would understand the issue because of permission on the locking file “.fileTableLock” so I apply my correction on change permission setting on the file:

- Go to directory: **\Eclipse-JEE-Indigo\configuration\org.eclipse.osgi\.manager**
- Right click on file: **.fileTableLock**> **Properties**
- On Security Tab, Edit (permission)
- Assign Permission on group: **Users**for full control on this file
- Click OK and start the eclipse again.
- It’s working now.

![Permission for Users group](/media/77/772a88f56493-eclipse-locking-solution-on-users-access-full-osify.webp "Permission for Users group")

Permission for Users group

Does it work for you?
