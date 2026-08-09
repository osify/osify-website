---
title: "How to kill virus: MS-DOS.com, Global.exe, system.exe, svchost.exe manually"
date: "2009-01-05T12:36:00"
modified: "2009-01-05T12:36:00"
author: osify
categories:
  - How to kill Virus
tags:
  - Antivirus
  - Virus
lang: en
excerpt: "The virus: MS-DOS.com which in the process we can see it as Global.exe, system.exe and svchost.exe (which confused to the system process) which are the main process of the virus. I used to met them with my friends’ PC…"
origin:
  site: osify
  id: 78
  url: https://osify.com/2009/01/how-to-kill-virus-ms-dos-com-global-exe-system-exe-svchost-exe-manually/
  host: osify.com
legacyUrls:
  - https://osify.com/2009/01/how-to-kill-virus-ms-dos-com-global-exe-system-exe-svchost-exe-manually/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalSource:
  platform: Blogger
  host: computer-experience.blogspot.com
  url: https://computer-experience.blogspot.com/2009/01/how-to-kill-virus-ms-doscom-globalexe.html
  published: "2009-01-04T20:36:00.000-08:00"
---

The virus: MS-DOS.com which in the process we can see it as Global.exe, system.exe and svchost.exe (which confused to the system process) which are the main process of the virus.
[![](http://fongthai.files.wordpress.com/2008/05/i-got-hacked.png)](http://fongthai.files.wordpress.com/2008/05/i-got-hacked.png)

I used to met them with my friends’ PC but I could not do anything other than format their PC as most of the antivirus seem can’t heal it after the PC affected but now it’s with my PC and I don’t want to format it again, I tried to kill it myself without any information of it for almost 2 days but I got nothing.

After research, I got some solutions that possible to try, thanks to:

- [Panda Security](http://www.pandasecurity.com/homeusers/security-info/about-malware/encyclopedia/overview.aspx?lst=det&idvirus=193263)
- [FontThai blog](http://fongthai.wordpress.com/2008/06/23/perwall-worm_autorunbuk-sillyfdc-virus-globalexe/)
- Vietnamese blog: [lecuong.info](http://translate.google.com/translate?hl=en&ie=UTF-8&u=http%3A%2F%2Fwww.lecuong.info%2Fblog%2Fread.php%2F56.htm&sl=vi&tl=en&history_state0=) (I used google translator)

With [lecuong.info](http://translate.google.com/translate?hl=en&ie=UTF-8&u=http%3A%2F%2Fwww.lecuong.info%2Fblog%2Fread.php%2F56.htm&sl=vi&tl=en&history_state0=) solution seem more closely to solve the issue:
B1: Use IceSword simultaneously kill 3 Process: system.exe, Global.exe, svchost.exe
B2: Find and delete all the files have been analyzed at above
B3: Using Autoruns to check & remove all key viruses created in the registry
B4: Reboot computer.
B5: Download antivirus program (such [bkav](http://www.bkav.com.vn/home/MuatheBkav2.aspx?d=9)) to scan again! (If the computer has antivirus program is removed and then installed again!)
B6: Open Run -> CMD: type in sfc /scannow or sfc /scanonce and XP disk to correct the file failed.
B7: Reboot computer. (If necessary)

With solution B2/ B3/ please use batch file to do it: ([kill-msdos.zip](http://www.snapdrive.net/files/583222/Software/kill-msdos%20from%20lecuong.info.zip))
But I recommend you to use another batch file below…

As for sure, everyone will difficult for point B1/ so I, myself tried to enhance on lecuong.info batch to add following command to try ending all processes of the virus:

taskkill /F /IM system.exe /IM Global.exe /IM svchost.exe /T

But we will face delete also svchost.exe which is the windows system one so that in 1 minute the PC will shutdown but don’t worry, we can proceed the rest before 1 minute.

Please press any key and accept YES by press Y to confirm delete all virus files and regedit entries as in the batch.

As I face the virus, seem the batch needs to enhance for more file paths to delete such as:
c:\windows\system32\regedit.exe and its regedit entries so here what I added more:

ATTRIB -R -H -S -A c:\windows\system32\regedit.exe

DEL /f c:\windows\system32\regedit.exe

REG DELETE “HKEY_CURRENT_USER\Software\Microsoft\Search Assistant\ACMru\5603” /v “001” /F
REG DELETE “HKEY_CLASSES_ROOT\MSCFile\Shell\Open\Command” /f

Now I don’t see any process of this virus on my task manager any more.

> (DOWNLOAD)
> Here is the full batch file: [kill-msdos-full (computerexperience.co.cc).zip](http://www.snapdrive.net/files/583222/Software/kill-msdos-full%20%28computerexperience.co.cc%29.zip)

Don’t forget to continue point B5/ and B6/ also.

Please report any issue/success related to this solution.
