---
title: How to use GitLab
date: "2018-05-09T15:27:23"
modified: "2018-05-09T15:29:32"
author: sysomeho
categories:
  - Source Control
tags:
  - git
  - Gitlab
lang: en
excerpt: "I. How to use GitLab Go to website GitLab ( ) Step 1: We have to add SSH key to your profile Step 2: Right click on any directories on your local computer Step 3:Please follow this step after you signup on Gitlab:…"
featuredImage: /media/ad/ad0718a5ad4b-17.webp
origin:
  site: ask
  id: 899
  url: https://ask.osify.com/qa/899
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/899
mergedFrom: []
mediaCount: 21
featured: false
draft: false
---

# **I.** **How to use GitLab**

Go to website GitLab (<https://gitlab.com>)

- **Step 1:**
  - We have to add SSH key to your profile

[![1](/media/86/862707a5c227-1.webp "1")](/media/86/862707a5c227-1.webp)

- **Step 2:**
  - Right click on any directories on your local computer![](/media/9e/9ee35e929b2d-2.webp)
  - **Step 3:**Please follow this step after you signup on Gitlab:
    - Generate key on Git Bash:
      ssh-keygen -t rsa -C “your.email@example.com” -b 4096
    - On Windows DOS Prompt:
      type %userprofile%\.ssh\id_rsa.pub | clip
    - At Gitlab‘s account, add Key:
      <https://gitlab.com/profile/keys>
  - **Step 4:**
    - Before generating a new SSH key pair check if your system already has oneat the default location by opening a shell, or Command Prompt on Windows, and running the following command:
    - Windows Command Prompt:
      - type %userprofile%\.ssh\id_rsa.pub![](/media/0b/0b2962ad6ba2-3.webp)
  - Git Bash on Windows / GNU/Linux / macOS / PowerShell:
    - cat ~/.ssh/id_rsa.pub
    - ![](/media/e4/e437c41be2ca-4.webp)
  - **Step 5:**
    - After Generating your SSH Keys, please go to
      - Settings
      - ![](/media/03/0363fb373aec-5.webp)
      - SSH Keys
      - ![](/media/3a/3a06c1296781-6.webp)
      - Right Click and past your key
      - ![](/media/45/4594643036ec-7.webp)
      - You will see your key as below:
      - ![](/media/92/92887ad231b3-8.webp)

#

# **II.** **How to push project to GitLab**

- **Step 1:**
  - Create Group in GitLab
  - Groups in menu –> New Group
  - Click button “Create Group”![](/media/72/72fe82703a9e-9.webp)

- **Step 2:**
  - - Create project
    - Click new project![](/media/3f/3fa4d944df50-10.webp)
    - We got the project as below![](/media/96/9688ee69a12e-11.webp)
    - Click on the project
    - We will see the instruction to push our project to server

  ![](/media/ae/ae48869fc520-12.webp)
- **Step 3:**
  - Open Location of our project to push them to GitLab
  - Then right click on directory / project location![](/media/46/46076353c13c-13.webp)
- **Step 4:**
  - Follow the command in Git Bash Here
    - § git init
    - § git remote add origin git@gitlab.com:AEU_MSIT_JAVA/Article-Solution.git
    - § git add **.**§ git commit -m “Initial commit”
    - § git push -u origin master![](/media/4f/4fea1dd95aee-14.webp)![](/media/18/182cc86413dc-15.webp)
    - Result will show as below screenshot![](/media/c6/c65ce1656632-16.webp)

# **III. How to Remove Groups from GitLab**

- **Step 1:**
  - Select **Groups** on menu![](/media/ad/ad0718a5ad4b-17.webp)
  - Click on the sign
  - Remove group![](/media/5a/5a98ed81a2f5-18.webp)

# **IV.** **How to Remove Project from GitLab**

- **Step 1:**
  - Choose project we want to remove on Groups![](/media/da/daeb538da86d-19.webp)
  - Example: I want to remove project “***AEU_MSIT_JAVA/AS-Project***”
  - **On the left side:**
    - Settings
    - Advanced Settings
    - Expand
    - Scroll down and click on button “Remove Project”![](/media/ac/ac2b6933f463-20.webp)
