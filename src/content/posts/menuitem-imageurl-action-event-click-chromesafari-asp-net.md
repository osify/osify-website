---
title: MenuItem – ImageUrl – No Action on Event Click, Chrome/Safari [ASP.net]
date: "2014-06-12T18:06:11"
modified: "2014-06-12T18:11:55"
author: osify
categories:
  - ASP.net
tags:
  - ASP.net
  - ASP.net Controls
  - Chrome
  - Cross Browser
  - Firefox
  - Safari
lang: en
excerpt: "There is an issue with MenuItem control in ASP.net with Safari/Chrome, the menu is unable to click but it’s working fine with Firefox and IE when we want to use image icon for the menu. Example: In Firefox, the MenuItem…"
origin:
  site: ask
  id: 494
  url: https://ask.osify.com/qa/494
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/494
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

There is an issue with MenuItem control in ASP.net with Safari/Chrome, the menu is unable to click but it’s working fine with Firefox and IE when we want to use image icon for the menu.

Example:

```actionscript
<asp:menuitem navigateurl="Home.aspx"
            text="Home"
            imageurl="Images\Home.gif"
            tooltip="Home"/>
```

***In Firefox***, the MenuItem generated the full HTML fine as following:

```actionscript
<span title="Home">
<a class="ctl00_LeftNaviMenu_1" href="Home.aspx">
<img src="Images\Home.gif" style="border-width:0px;" />
</a>
</span>
```

The image icon is able to click.

***In Chrome/Safari***, the MenuItem generated **wrong HTML**:

```actionscript
<span title="Home">
<img src="Images\Home.gif" style="border-width:0px;" />
<a class="ctl00_LeftNaviMenu_1" href="Home.aspx"></a>
</span>
```

So that we cannot click the menu (on the image) because the HTML is generated **a tag** wrong outside the image tag.

#### Solutions

Safari and Chrome use webkit and in ASP.net, it identifies them by “**Safari1Plus**“, without telling ASP.net not to use an adapter to render the menu control, Chrome and Safari has always wrong control rendering in HTML.

You can google: MenuItem in ASP.net Cross Browser Compatibility (Safari/Chrome)

You will see some solutions out there.

Here are what I have tried on the ASP.net project with Framework 3.5 and it works.

**Solution 1:** Add Browser File: Chrome.browsers to folder: App_Browsers

You need to [Ref: [StackOverflow](http://stackoverflow.com/questions/4867676/clicking-on-menu-item-in-chrome-does-nothing)]:

- add an **App_Browsers** folder to the project
- and add a new item *Add New Item*… Select “*Browser File*” and name it **Chrome.browsers**.
- Comment out the default stuff and insert this from the link above:

```xml
<browsers>
    <browser refID="safari1plus">
        <controlAdapters>
            <adapter controlType="System.Web.UI.WebControls.Menu" adapterType="" />
        </controlAdapters>
    </browser>
</browsers>
```

**Solution 2**: Add a code snippet in MasterPage

The solution answers the same as Solution 1 but it’s just about to write directly in the MasterPage file to tell the application not to use any adapter in case in browser Chrome or Safari. [Ref: [dotnetslackers](http://dotnetslackers.com/Community/blogs/kaushalparik/archive/2009/02/13/asp-menu-server-control-cross-browser-compatibility-safari-chrome.aspx)]

In the MasterPage’s **Page_Load** event, put following code:

```actionscript
if (Request.UserAgent.IndexOf("AppleWebKit") > 0)
{
    Request.Browser.Adapters.Clear();
}
```

They are working for me, and you can try one.

—

**References:**

- MSDN: [MenuItem Control](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.menuitem%28v=vs.90%29.aspx)
- Some Issues Raised on The Net
  - [Error MenuItem Using ImageUrl in Chrome](http://forums.asp.net/t/1527516.aspx?asp+MenuItem+using+ImageUrl+in+Chrome)
  - [Could not find Schema info](http://forums.asp.net/p/1369765/2860698.aspx#2860698)
