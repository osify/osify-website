---
title: Khmer Unicode with Crystal Report in C# Application
date: "2008-12-26T18:17:00"
modified: "2010-08-20T11:04:47"
author: osify
categories:
  - Khmer Unicode
  - Tips
  - Training
tags:
  - C#
  - Crystal Report
  - Fonts
  - Visual Studio
  - VS 2005
  - VS 2008
lang: en
excerpt: I use VS2008 to test Khmer Unicode rendering in Crystal Report. I. Prepare Crystal Report Render well in report design First you have to make the crystal report in design time possible to write or view Khmer Unicode…
origin:
  site: osify
  id: 77
  url: https://osify.com/2008/12/khmer-unicode-with-crystal-report-in-c-application/
  host: osify.com
legacyUrls:
  - https://osify.com/2008/12/khmer-unicode-with-crystal-report-in-c-application/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I use VS2008 to test Khmer Unicode rendering in Crystal Report.

I. Prepare Crystal Report Render well in report design
First you have to make the crystal report in design time possible to write or view Khmer Unicode

1.1. Copy usp10.dll (version1.465.4001.0) to C:\Program Files\Business Objects\Common\2.8\bin

[![](/media/4e/4eec795dc0a9-kh-crystal-0.webp)](/media/4e/4eec795dc0a9-kh-crystal-0.webp)

1.2. Change fonts setting in Crystal Report, at VS2008, create a crystal report and go to Crystal Reports –> Design –> Default Setting –> Go to Fonts Tab, change all element to Kh System

II. View Crystal Report with VS Crystal Report Viewer,
Khmer Unicode is not rendering well.
(Under research)

III. View Crystal Report with Crystal Report View
It’s working very well for me to view Crystal Report with Khmer Unicode characters on form.
Here is the process…

3.1. On design time, add COM control of Crystal Report ActiveX Report Viewer Control of Business Objects; from my pc, it’s a dll at: C:\Program Files\Business Objects\Common\2.8\bin\ crviewer.dll

[![](/media/c6/c6ff8e00647b-crystal-control-01.webp)](/media/c6/c6ff8e00647b-crystal-control-01.webp)

3.2. Add Reference in the project of craxddrt.dll
[![](/media/8f/8fc4ae0c8c18-crystal-control-02.webp)](/media/8f/8fc4ae0c8c18-crystal-control-02.webp)

3.3. Create Crystal Report and write some code in Khmer Unicode and save it to some where, my example in folder bin/Debug

3.4. Coding to call the report to view in the control:

> ```
> CRAXDDRT.Application crxApp = new CRAXDDRT.Application();
> CRAXDDRT.Report crxReport = new CRAXDDRT.Report();
> crxReport = crxApp.OpenReport(Application.StartupPath
>     + "/KhmerUnicodeTest.rpt", null);
> this.axCrystalActiveXReportViewer1.ReportSource=crxReport;
> this.axCrystalActiveXReportViewer1.ViewReport();
> ```

3.5. Here is the result display

[![](/media/28/2841871bfd64-crystal-control-03.webp)](/media/28/2841871bfd64-crystal-control-03.webp)

## DOWNLOAD: [Sample Project: TestCrystalReportViewer](http://docs.google.com/leaf?id=0B7IVz1-OPPszMzNjMzI2OTgtYmQ3Yy00YTc5LTljNzQtOTViNWE4MzgzNTc2&hl=en)

(DLL of USP10.dll attached in the sample folder: Resource)

IV. View Crystal Report by export directly to PDF
It works very well, just have issue with font size.
We just call Crystal Report Object and then export it to disk, here is the coding:

> ```
> private void btnPrintCrystal_Click(object sender, EventArgs e){
>       CrystalKhmerUnicode rptCrystal = new CrystalKhmerUnicode();
>       rptCrystal.SetParameterValue("txtReportTitle","Hello World");
>       rptCrystal.SetParameterValue("txtTitle", txtTitle.Text);
>       rptCrystal.SetParameterValue("txtArticle", txtArticle.Text);
>       rptCrystal.ExportToDisk(ExportFormatType.PortableDocFormat, "./KhmerUnicode.pdf");
>       MessageBox.Show("Now report exported to current folder: KhmerUnicode.pdf");
>       // Direct open pdf
>       reportSystem.Diagnostics.Process.Start("./KhmerUnicode.pdf");
> }
> ```

Enjoy,
Happy New Year 2009!
Metrey,
