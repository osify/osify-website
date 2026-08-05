---
title: "[Eclipse] java.lang.UnsatisfiedLinkError: Cannot load 32-bit SWT libraries on 64-bit JVM"
date: "2016-07-12T00:34:14"
modified: "2016-07-12T00:34:14"
author: osify
categories:
  - Java
  - Tools
tags:
  - Eclipse
lang: en
excerpt: "Double click on your eclipse, and you receive error log as following (logged at: configuration/xxxxx.log) !ENTRY org.eclipse.osgi 4 0 2016-07-12 00:22:11.260 !MESSAGE Application error !STACK 1…"
origin:
  site: ask
  id: 804
  url: https://ask.osify.com/qa/804
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/804
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Double click on your eclipse, and you receive error log as following (logged at: configuration/xxxxx.log)

> !ENTRY org.eclipse.osgi 4 0 2016-07-12 00:22:11.260
> !MESSAGE Application error
> !STACK 1
> java.lang.UnsatisfiedLinkError: Cannot load 32-bit SWT libraries on 64-bit JVM
> at org.eclipse.swt.internal.Library.loadLibrary(Library.java:263)
> at org.eclipse.swt.internal.Library.loadLibrary(Library.java:240)
> at org.eclipse.swt.internal.C.<clinit>(C.java:21)
> at org.eclipse.swt.widgets.Display.<clinit>(Display.java:138)
> at org.eclipse.ui.internal.Workbench.createDisplay(Workbench.java:679)
> at org.eclipse.ui.PlatformUI.createDisplay(PlatformUI.java:162)
> at com.aptana.rcp.IDEApplication.createDisplay(IDEApplication.java:162)
> at com.aptana.rcp.IDEApplication.start(IDEApplication.java:94)
> at org.eclipse.equinox.internal.app.EclipseAppHandle.run(EclipseAppHandle.java:196)
> at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.runApplication(EclipseAppLauncher.java:110)
> at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.start(EclipseAppLauncher.java:79)
> at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:354)
> at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:181)
> at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
> at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
> at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
> at java.lang.reflect.Method.invoke(Method.java:497)
> at org.eclipse.equinox.launcher.Main.invokeFramework(Main.java:636)
> at org.eclipse.equinox.launcher.Main.basicRun(Main.java:591)
> at org.eclipse.equinox.launcher.Main.run(Main.java:1450)
> at org.eclipse.equinox.launcher.Main.main(Main.java:1426)

It’s because of Eclipse is on 32-bits JVM and your environment is pointing to Java JVM 64-bits, you can check your default JVM via Java -version.

To solve this, you can install another 32-bits JVM and let’s eclipse point it or passing in your eclipse.ini with following JVM parameter:

```bash
-vm
D:\Java\jdk1.8.0_66\bin\javaw.exe
-d32
```

The argument **-d32** tells eclipse to pick the right JVM to use. I did that so that I do not need to install another JVM in my PC.
