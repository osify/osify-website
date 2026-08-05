---
title: In general, how webservice recieves image file or other binary data?
date: "2010-06-23T19:20:43"
modified: "2010-06-23T19:20:43"
author: osify
categories:
  - Tips
tags:
  - Java
  - SOAP
  - Web Service
  - XML
lang: en
excerpt: As you may notice, one of the popular way to communicate with web service to transfer data or receive data, we mostly use XML (Soap, XML RPC …). XML is a string data, so what is the best way to attach the image files or…
origin:
  site: osify
  id: 240
  url: https://osify.com/2010/06/in-general-how-webservice-recieves-image-file-or-other-binary-data/
  host: osify.com
legacyUrls:
  - https://osify.com/2010/06/in-general-how-webservice-recieves-image-file-or-other-binary-data/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

As you may notice, one of the popular way to communicate with web service to transfer data or receive data, we mostly use XML (Soap, XML RPC …). XML is a string data, so what is the best way to attach the image files or any binary data to send or receive from the webservice?

I think the better way is converting the file as byte array and encode the byte array into encoding Base64 string. Then save the string into the block node so at web service will handle to produce the decoding byte array into stream and produce the file as well. Do the same when web service responses.

Is it interesting?
