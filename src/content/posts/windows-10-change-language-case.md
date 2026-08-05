---
title: "Windows 10: Change Language Case"
date: "2019-11-01T12:52:06"
modified: "2019-11-08T11:24:51"
author: osify
categories:
  - Windows
tags:
  - Windows 10
  - Windows Tips
lang: en
excerpt: On my Windows 10 Pro / Microsoft Surface 6 Pro, I did a setup wrong from the beginning to select UK as my language/keyboard and it’s likes nightmare as I cannot completely remove it, it did remove each time I tried…
featuredImage: /media/eb/eb50945a7d3b-image-6.webp
origin:
  site: ask
  id: 11194
  url: https://ask.osify.com/qa/11194
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11194
mergedFrom: []
mediaCount: 5
featured: false
draft: false
---

On my Windows 10 Pro / Microsoft Surface 6 Pro, I did a setup wrong from the beginning to select UK as my language/keyboard and it’s likes nightmare as I cannot completely remove it, it did remove each time I tried around such as follow [this post](https://answers.microsoft.com/en-us/windows/forum/windows_10-other_settings/remove-english-uk-keyboard-arabic-type-window-10/54d918d3-e27d-42c9-b21a-12b5be22432e), or [this post](https://www.howtogeek.com/232659/how-to-change-the-display-language-in-windows-10/), etc. as it may randomly or after Windows update to go back to the same state.

Here is my problem, too many language appear in the language bar, I just want: English (United State), Khmer Angkor, Thai as example;

My case, I want completely remove English (United Kingdom) as I don’t know how to use the keyboard layout.

![](/media/c0/c0c30ae1d339-image-5.webp)

What finally I think it solved (to re-confirm whenever I have new Windows update), as following way:

1. I tried to remove all input keyboard/language via ***Control Panel > Settings > Language*** etc.
2. I install Keyboard/language: ***English (United State)*** and put it **as default**
3. I attach ***region to the correct country***
4. Then I go to ***Control Panel again > Regions***, Click on it and go to tab: **Administrative**, click on **Copy Settings**, originally I see that:
   - Current User is pointing to *English (United Kingdom)*
   - Welcome screen is *English (United State)*
   - New user account is *English (United Kingdom)*
5. So that, I change the setting by click Copy your current setting for (see below picture):
   - Welcome screen and system accounts
   - New user account
6. You will see if the language from those 3 points are presenting correctly, then ***click OK*** and ***restart your PC***

![](/media/0a/0a33aa3d632e-image-4.webp)

*What we need to do*

After restart, I could see that I have withdraw the language I want it out

![](/media/eb/eb50945a7d3b-image-6.webp)

Then, we can re-install the language we want and it’s back as expected

![](/media/96/960f532bbab0-image-7.webp)
