---
title: Git Beginner – What should I know about git to shart working?
date: "2013-07-05T01:27:39"
modified: "2013-07-05T01:53:03"
author: osify
categories:
  - Source Control
tags:
  - bitBucket
  - git
  - Git Beginner
  - Git TIps
  - github
lang: en
excerpt: "Git is one popular source control nowadays. I have worked with CVS, SVN and just now get to know git. Things I have done so far: Installation I install it on my Windows 8 & Windows XP (32 bits): Download the Git for…"
origin:
  site: ask
  id: 302
  url: https://ask.osify.com/qa/302
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/302
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalAuthor: MTR
---

Git is one popular source control nowadays. I have worked with CVS, SVN and just now get to know git.

Things I have done so far:

### Installation

I install it on my Windows 8 & Windows XP (32 bits):

- [Download the Git for Windows installer package](http://code.google.com/p/msysgit/downloads/list). I installed Git-1.8.3-preview20130601.exe
- I used all default installation instruction
- Local machine configuration:

```bash
Configure your username using the following command:
git config --global user.name "FIRST_NAME LAST_NAME"

Configure your email address using the following command:
git config --global user.email "MY_NAME@example.com"
```

(I created one account at [bitbucket](https://bitbucket.org) – install document follow [here](https://confluence.atlassian.com/display/BITBUCKET/Set+up+Git+and+Mercurial))

### Some useful commands I started working with git

**Add existing project to my git repository**

1. Go to git bash, Locally, change to the root directory of your existing source
2. Initialize the directory under source control: ***git init***
3. Add the existing files to the repository: ***git add .***
4. Commit the files: ***git commit -m “message”***
5. Publish local repo to git server (ex: bitbucket or github)

```bash
git remote add origin ssh://username@bitbucket.org/username/yourrepo.git

git push -u origin master
```

**Ignore files**

Some files or folders, we don’t want to upload to server so we ignore them from commit. Here are some commands I used:

- Add ignore file via Git bash: touch .gitignore
- Copy some default ignore from [here](https://help.github.com/articles/ignoring-files)
- Commit the file

### Just for me, many things to learn about it

My first time, I might miss many things than above so please help to give me some guideline to master on git.

I feel I miss something and not quite sure.
What are the useful commands I should know more about git?
What’s else about it?

Please help to share in comment below to help me and other beginners as well.
