---
title: Flex build 3.0.194161 not working with Eclipse 3.4 solution
date: "2008-12-18T19:12:00"
modified: "2008-12-18T19:12:00"
author: osify
categories: []
tags:
  - Eclipse
  - Flex
lang: en
excerpt: "First I install flex (build: 3.0.194161) to use with Eclipse 3.2.1, it’s working fine. I wan to use my existing flex plugin with Eclipse 3.4, I got problem as describe in this post. I wanna to try to use both eclipse…"
origin:
  site: osify
  id: 73
  url: https://osify.com/2008/12/flex-build-3-0-194161-not-working-with-eclipse-3-4-solution/
  host: osify.com
legacyUrls:
  - https://osify.com/2008/12/flex-build-3-0-194161-not-working-with-eclipse-3-4-solution/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

First I install flex (build: 3.0.194161) to use with Eclipse 3.2.1, it’s working fine.

I wan to use my existing flex plugin with Eclipse 3.4, I got problem as describe in this post.

I wanna to try to use both eclipse with the same flex plugin, with Eclipse 3.4 I try to install Flex plugin by Software Updates but I could not.

I found the solution on the net, thanks to [Tekool.net](http://www.tekool.net/blog/2008/06/28/flex-builder-3-plugin-dont-work-with-eclipse-34)

I have removed the Flex plugin and then re-install the flex plugin, point to Eclipse 3.4 and Proceed it with Caution

[![](/media/e4/e4b4926f6909-eclipse-flex-3-4-error.webp)](/media/e4/e4b4926f6909-eclipse-flex-3-4-error.webp)

After done, download the patch provided in [Tekool.net](http://www.tekool.net/blog/2008/06/28/flex-builder-3-plugin-dont-work-with-eclipse-34) ([Direct download here](http://www.tekool.net/blogfiles/flex-builder-3-plugin-dont-work-with-eclipse-34/FB3_Eclipse34_patch.zip))
Replace the plug-in of the patch into Eclipse plug-in of Flex Plug-in

[![](/media/b7/b732ba1a606c-eclipse-flex-3-4-error-2.webp)](/media/b7/b732ba1a606c-eclipse-flex-3-4-error-2.webp)

And at Eclipse start up add parameter -clean: eclipse.exe -clean
Or from the Flex launcher add this parameter too:
 eclipse.exe -clean -showlocation -vm …

It’s working for me now.
