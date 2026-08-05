---
title: "Docker: Move Data Folder Location"
date: "2021-06-18T14:38:56"
modified: "2021-06-18T14:43:36"
author: osify
categories:
  - General
tags:
  - Docker
  - Tips
lang: en
excerpt: "On Windows, the docker data is store at user’s AppData location: It keep growing large so that our drive C: got out of space so fast, so a better solution is to move it to another drive. Two ways that can do that:…"
origin:
  site: ask
  id: 11920
  url: https://ask.osify.com/qa/11920
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11920
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

On Windows, the docker data is store at user’s AppData location:

```
%USERPROFILE%\AppData\Local\Docker\wsl\data\ext4.vhdx
```

It keep growing large so that our drive C: got out of space so fast, so a better solution is to move it to another drive.

Two ways that can do that:

1. Re-locate the data location using daemon.json file
2. Export/Unregister to a new location using WSL (on Windows)

I am successfully do the option 2. and I think the option 1. should also work but as I tried at first on option 2. so it’s perfect for me as data not lose and I don’t know yet for option 1.

##### **Option 1**: daemon.json

Before doing this, please close docker service.

At location of “C:\ProgramData\Docker”, normally you don’t see a folder config and file daemon.json so please create that file.

Create the file: “C:\ProgramData\Docker\config\daemon.json” and in the content of daemon.json, put the location you want:

```
{
"data-root": "E:/_/docker"
}
```

Start docker-desktop again and pull any image back.

##### Option 2: Export/Unregister

On DOS Prompt and follow a quick commands below:

1. Stop docker (Stop-Service docker)
2. wsl –list -v
   You will see service of docker

```
  NAME                   STATE           VERSION
* docker-desktop         Stopped         2
  docker-desktop-data    Stopped         2
```

3. wsl –export docker-desktop-data “E:_\docker\wsl\data\docker-desktop-data.tar”

4. wsl –unregister docker-desktop-data

5. wsl –import docker-desktop-data “E:_\docker\wsl\data” “E:_\docker\wsl\data\docker-desktop-data.tar” –version 2

From the [answer of StackOverflow](https://stackoverflow.com/questions/62441307/how-can-i-change-the-location-of-docker-images-when-using-docker-desktop-on-wsl2)

I follow the option 2. and work as expected.

Good luck.
