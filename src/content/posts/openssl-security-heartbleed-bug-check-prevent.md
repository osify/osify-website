---
title: OpenSSL Security – Heartbleed Bug – Check It, Prevent It
date: "2014-04-10T12:00:18"
modified: "2014-04-10T12:00:18"
author: osify
categories:
  - News
tags:
  - Heartbleed
  - OpenSSL
  - Security
lang: en
excerpt: When we talk about OpenSSL, we are talking about the security on the Internet, on especially user authentication but recently on 7th of April, the security flaw found and it’s serious! So what to do? Check Your Server…
origin:
  site: osify
  id: 2072
  url: https://osify.com/2014/04/openssl-security-heartbleed-bug-check-prevent/
  host: osify.com
legacyUrls:
  - https://osify.com/2014/04/openssl-security-heartbleed-bug-check-prevent/
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

When we talk about OpenSSL, we are talking about the security on the Internet, on especially user authentication but recently on 7th of April, the security flaw found and it’s serious!

So what to do?

#### Check Your Server

Check it if your server could be in this danger.

I found an online tool that hopes that it will help: <http://possible.lv/tools/hb/>

[![Heatbeat security test](/media/fe/feeedfc3b8e7-test-heartbleed-openssl.webp)](/media/fe/feeedfc3b8e7-test-heartbleed-openssl.webp)

Here is my test on one server, I have found:

> ```
> [..]
> ext 00015 (heartbeat, length=1) &lt;-- Your server supports heartbeat. Bug is possible when linking against OpenSSL 1.0.1f or older. Let me check.
> <b>Actively checking if CVE-2014-0160 works:</b> Your server appears to be patched against this bug.
> ```

#### Secure It

According to the patch info of the OpenSSL (CVE-2014-0160), we need to:

- Use OpenSSL version 1.0.1g
- Or recompile OpenSSL with -DOPENSSL_NO_HEARTBEATS
- And OpenSSL version 1.0.2 will be fixed in 1.0.2-beta2

#### Patch Info

> ```
> OpenSSL Security Advisory [07 Apr 2014]
> ========================================
>
> TLS heartbeat read overrun (CVE-2014-0160)
> ==========================================
>
> A missing bounds check in the handling of the TLS heartbeat extension can be
> used to reveal up to 64k of memory to a connected client or server.
>
> Only 1.0.1 and 1.0.2-beta releases of OpenSSL are affected including
> 1.0.1f and 1.0.2-beta1.
>
> Thanks for Neel Mehta of Google Security for discovering this bug and to
> Adam Langley <agl@chromium.org> and Bodo Moeller <bmoeller@acm.org> for
> preparing the fix.
>
> Affected users should upgrade to OpenSSL 1.0.1g. Users unable to immediately
> upgrade can alternatively recompile OpenSSL with -DOPENSSL_NO_HEARTBEATS.
>
> 1.0.2 will be fixed in 1.0.2-beta2.
> ```
>
> [[Ref](https://www.openssl.org/news/secadv_20140407.txt)]

#### References

- [Heartbleed Bug](http://heartbleed.com/) & All its news reference
- Test Tool: <http://possible.lv/tools/hb/>
