---
title: What you need to know to use Android Studio
date: "2016-07-22T12:42:26"
modified: "2016-07-22T12:42:26"
author: osify
categories:
  - Android
tags:
  - Android
  - Android Studio
  - Eclipse
  - IDE
lang: en
excerpt: "As I am mostly doing my stuff with Eclipse even though the Android studio came, I still work with Eclipse project for Android but as time comes, we cannot ignore the Android studio anymore because: Official Android…"
origin:
  site: ask
  id: 812
  url: https://ask.osify.com/qa/812
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/812
mergedFrom: []
mediaCount: 3
featured: false
draft: false
---

As I am mostly doing my stuff with Eclipse even though the Android studio came, I still work with Eclipse project for Android but as time comes, we cannot ignore the Android studio anymore because:

- Official Android document is only support for Android Studio
- More and more library today does not include any support (no .jar to provide) for Eclipse

Of course, people might said more as Android studio is better because of blaa blaa…. but for me, two above reasons are mainly important that may block me to do my stuff.

Somehow to switch to Android Studio, the same way as we switch to InteliJ IDE, it’s a little bit frustrated, confusing or even stuck on something that we can do with Eclipse.

Here, I try to collect around the information that we need to know to replace our old habit with eclipse or just adapt to our old style on the new IDE.

First loaded the IDE, you see this screen:

![android-studio-first-screen-info](/media/ac/acc5a16ad9e6-android-studio-first-screen-info.webp)

And so here are:

**1. Important Android Studio Shortcuts You Need the Most**

1. Go to class : CTRL + N.
2. Go to file : CTRL + SHIFT + N.
3. Navigate open tabs : ALT + Left-Arrow ; ALT + Right-Arrow.
4. Lookup recent files : CTRL + E.
5. Go to line : CTRL + G.
6. Navigate to last edit location : CTRL + SHIFT + BACKSPACE.
7. Go to declaration : CTRL + B.

Check this [StackOverflow](http://stackoverflow.com/a/27657174/889126).

**2. How about if you want Eclipse Shortcut Keys instead?**

You can use “Mac os X, Visual studio, Eclipse, Netbeans etc.. shortcuts in your Android Studio by doing the following:

- `File` -> `Settings` -> `Keymap` -> choose “`Eclipse`” from dropdown.
- **OR** press `Ctrl`+`Alt`+`S` -> `keymap` -> choose “`Eclipse`” from dropdown like this.

![android-studio-setting-screen-keymap](/media/4a/4a4f41455e80-android-studio-setting-screen-keymap.webp)

**3. Configure your Android Studio for any Source Control**

As example, we need SVN (Subversion). Make sure you have a default svn client in your machine, if you already have it, on Android Studio:

1. Go to File > Settings
2. Click Plugins and then select Search **Subversion Integration**
3. Check SubVersion.
4. Restart Android Studio.

![android-studio-setting-screen-svn](/media/d2/d2da46aadbdf-android-studio-setting-screen-svn.webp)

Anything more? Will update.
