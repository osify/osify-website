---
title: Create Openoffice document with template in Java Solution
date: "2013-08-08T11:06:01"
modified: "2013-08-08T16:51:37"
author: osify
categories:
  - Java
tags:
  - Converter
  - Java
  - Khmer unicode
  - Maven
  - Maven Dependencies
  - MS Excel
  - Open Office
  - Report Template
lang: en
excerpt: POI is not supported well to create open office document (calc, spreadsheet), it’s working fine for MS Excel (only). I would clarify my point with POI, it’s not working to set Khmer Unicode font to Openoffice document…
origin:
  site: ask
  id: 318
  url: https://ask.osify.com/qa/318
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/318
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

[POI](http://poi.apache.org/) is not supported well to create open office ~~document~~ (calc, spreadsheet), it’s working fine for MS Excel (~~only~~).

I would clarify my point with POI, it’s not working to set Khmer Unicode font to Openoffice document that could block us to use it well in JODConverter.

So another solution should be applied for manipulate the open office document, I have found JODReports according to the discussion at [StackOverflow](http://stackoverflow.com/questions/4791389/how-to-create-an-odt-file-programmatically-with-java) which is coming from 3 interesting libraries to try:

- [JOpenDocument](http://www.jopendocument.org/)
- [ODFDOM – the OpenDocument API](http://incubator.apache.org/odftoolkit/odfdom/index.html)
- [JODReports](http://jodreports.sourceforge.net/)

And since I am interesting to work with report template rather than pure hard coded in the source file, I’d like to tried JODReports than other in the first sight.

```java
DocumentTemplateFactory templateFactory = new DocumentTemplateFactory();
DocumentTemplate template = templateFactory .getTemplate(new File("template.odt"));
Map data = new HashMap();
data.put("title", "Title of my doc");
data.put("picture", new RenderedImageSource(ImageIO.read(new File("/tmp/lena.png"))));
data.put("answer", "42");
//...
template.createDocument(data, new FileOutputStream("output.odt"));
```

And another interesting point on JODReports, it would work fine with [JODConverter](http://code.google.com/p/jodconverter/) that allows the report to be converted to PDF, Word, RTF, etc.

Of course, more research/test should take over on it.

If you are also interested to try as well go together with JODReports and share your though and experiences with us.

### JODReports

- Official [project page](http://jodreports.sourceforge.net/)
- [Sample project](https://github.com/mdeverdelhan/java-samples/tree/master/jodreports-samples)
- JODReports on [maven](http://mvnrepository.com/artifact/net.sf.jodreports/jodreports/2.4.0)

```
<dependency>
	<groupId>net.sf.jodreports</groupId>
	<artifactId>jodreports</artifactId>
	<version>2.4.0</version>
</dependency>
```

- JODReports related converter [JODConverter](http://code.google.com/p/jodconverter/), using [maven](http://mvnrepository.com/artifact/com.artofsolving/jodconverter-maven-plugin/2.2.1) by following:

```xml
<dependency>
	<groupId>com.artofsolving</groupId>
	<artifactId>jodconverter-maven-plugin</artifactId>
	<version>2.2.1</version>
</dependency>
```

Let’s share how do you think? Or any other solutions better?

**Updated 08/08**

Forget my judgement on POI and JODReports, they are in different context. POI is for spreadsheet and JODReports is for text document.

I’m slightly make a mistake in my post above to mix: POI & JODReports together but it’s really a different purpose. Here my purpose to seek for the library that could make PDF reports well. By using JODReports we could make openoffice document (though it’s for spreadsheet) and using JODConverter to convert the report (in Khmer Unicode) working fine but stuck on how to make Openoffice spreadsheet in Java to support Khmer Unicode since POI can’t set font name on any cell.
