---
title: Dell Inspiron 15 5000 series Wifi Issue [Windows 8]
date: "2015-01-15T22:39:49"
modified: "2015-01-15T22:39:49"
author: osify
categories:
  - Windows
tags:
  - Wifi
  - Wifi Issue
  - Windows
  - Windows 8
  - Windows Tips
lang: en
excerpt: Just received a Dell Inspiron 15 5000 series with Windows 8.1 installed. It’s likely that most of the time, there is an issue with Wifi connectivity, it cannot well connected or connected but no Internet connection…
origin:
  site: ask
  id: 660
  url: https://ask.osify.com/qa/660
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/660
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

Just received a Dell Inspiron 15 5000 series with Windows 8.1 installed. It’s likely that most of the time, there is an issue with Wifi connectivity, it cannot well connected or connected but no Internet connection while other devices are fine.

When we are going a bit far from the router, in my case, almost 8-9 meters and in a closing room, the laptop can’t connect and usefully disconnect itself from Wifi.

After searching on the net, it’s the issue of the adapter, Intel (R) Dual Bank Wireless AC-3160 and seem no any feedback from Dell support forum beside many complains from the users.

Reading around, following twist seem work for me (I need more test):

[![dell-inspiron-15-5000-devices-manager](/media/b1/b145ea8bfc15-dell-inspiron-15-5000-devices-manager.webp)](/media/b1/b145ea8bfc15-dell-inspiron-15-5000-devices-manager.webp)

- Open the Device Manager (Win-R, devmgmt.msc)
- Expand “*Network Adapters*“, double click on “*Intel (R) Dual Band Wireless-AC 3160*“
- Go to “Advance” tab
- In the “*Properties*” list, select “*HT mode*“, you should see its value is set to “*VHT Mode*“, so set it to “*Disabled*” instead
- Click “OK”, the network adapter will reset, you will lost connection and then it’ll reconnect as normal

[![dell-inspiron-15-5000-Wifi-Wireless-AC-3160](/media/06/0677a8a38ba0-dell-inspiron-15-5000-wifi-wireless-ac-3160.webp)](/media/06/0677a8a38ba0-dell-inspiron-15-5000-wifi-wireless-ac-3160.webp)

Currently it’s working for me at home but of course, I need to see some more places where I used to have problem and will update this in comment.

If you have some experiences, please share below.
