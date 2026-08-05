---
title: Blogger Error 500 While Mapped to Adsense Account
date: "2013-12-16T23:30:47"
modified: "2013-12-16T23:30:47"
author: osify
categories:
  - Google App
tags:
  - Blogger
  - Error 500
lang: en
excerpt: "While trying to connect to the existing Adsense of google.com and at the accepting association button, after click got following error without clear explanation and only debugging code appears: What is the issue? Is it…"
origin:
  site: ask
  id: 412
  url: https://ask.osify.com/qa/412
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/412
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

While trying to connect to the existing Adsense of google.com and at the accepting association button, after click got following error without clear explanation and only debugging code appears:

[![blogger-adsense-error](/media/ca/ca0edf1303cf-blogger-adsense-error.webp)](/media/ca/ca0edf1303cf-blogger-adsense-error.webp)

```java
We're sorry. An error occurred during the sign-in process.
500 Internal Server Error { "code" : 500, "errors" : [ { "debugInfo" : "com.google.api.server.core.Fault: ImmutableErrorDefinition{base=null, category=BACKEND_ERROR, cause=com.google.api.server.core.Fault: ImmutableErrorDefinition{base=null,
category=BACKEND_ERROR, cause=null, debugInfo=null, domain=global, extendedHelp=null, httpHeaders={}, httpStatus=internalServerError, internalReason=Reason{code=null, createdByBackend=true, errorProtoDomain=null, errorProtoCode=null, location=null,
debugMessage=Could not find hosted account 19130392, cause=null, unnamedArguments=[], message=null, arguments={}}, location=null, message=null, reason=null, rpcCode=500}, debugInfo=null, domain=global, extendedHelp=null, httpHeaders={},
httpStatus=internalServerError, internalReason=Reason{code=null, creat edByBackend=true, errorProtoDomain=null, errorProtoCode=null, location=null, debugMessage=Could not find hosted account 19130392, cause=null, unnamedArguments=[], message=null, arguments={}},
location=null, message=null, reason=null, rpcCode=500}\n\tat com.google.api.server.core.ErrorCollector.toFault(ErrorCollector.java:43)\n\tat com.google.api.server.core.intercept.ErrorConverterInterceptor.processErrorResponse(ErrorConverterInterceptor.java:69)\n\tat
com.google.api.server.core.intercept.AroundInterceptorWrapper.processErrorResponse(AroundInterceptorWrapper.java:28)\n\tat com.google.api.server.stats.StatsBootstrap$InterceptorStatsRecorder.processErrorResponse(StatsBootstrap.java:301)\n\tat com.google.api.server.core.intercept.Interceptions$AroundInterception.handleErrorResponse(Interceptions.java:192)\n\tat
com.google.api.server.core.intercept.Interceptions$AroundInterception.access$200(Interceptions.java:96)\n\tat com.google.api.server.core.intercept.Interceptions$AroundInterception$1.call(Interceptions.java:135)\n\tat com.google.api.server.core.intercept.Interceptions$AroundInterception$1.call(Interceptions.java:128)\n\tat com.google.api.server.core.util.CallableFuture.run(CallableFuture.java:62)\n\tat
com.google.common.util.concurrent.MoreExecutors$SameThreadExecutorService.execute(MoreExecutors.java:297)\n\tat com.google.common.util.concurrent.ExecutionList.executeListener(ExecutionList.java:156)\n\tat com.google.common.util.concurrent.ExecutionList.execute(ExecutionList.java:145)\n\tat com.google.common.util.concurrent.AbstractFuture.setException(AbstractFuture.java:202)\n\tat
com.google.api.server.core.util.CallableFuture.run(CallableFuture.java:68)\n\tat com.google.common.util.concurrent.MoreExecutors$SameThreadExecutorService.execute(MoreExecutors.java:297)\n\tat com.google.common.util.concurrent.ExecutionList.executeListener(ExecutionList.java:156)\n\tat com.google.common.util.concurrent.ExecutionList.execute(ExecutionList.java:145)\n\tat
com.google.common.util.concurrent.AbstractFuture.set(AbstractFuture.java:185)\n\tat com.google.api.server.core.util.CallableFuture.run(CallableFuture.java:62)\n\tat com.google.api.server.thread.ThreadTrackers$ThreadTrackingRunnable.run(ThreadTrackers.java:126)\n\tat com.google.tracing.TraceContext$TraceContextRunnable.runInContext(TraceContext.java:437)\n\tat
com.google.api.server.server.CommonModule$ContextCarryingExecutorService$1.runInContext(CommonModule.java:668)\n\tat com.google.tracing.TraceContext$TraceContextRunnable$1.run(TraceContext.java:444)\n\tat com.google.tracing.CurrentContext.runInContext(CurrentContext.java:188)\n\tat com.google.tracing.TraceContext$AbstractTraceContextCallback.runInInheritedContextNoUnref(TraceContext.java:308)\n\tat
com.google.tracing.TraceContext$AbstractTraceContextCallback.runInInheritedContext(TraceContext.java:300)\n\tat com.google.tracing.TraceContext$TraceContextRunnable.run(TraceContext.java:441)\n\tat com.google.gse.internal.DispatchQueueImpl$WorkerThread.run(DispatchQueueImpl.java:387)\nCaused by: com.google.api.server.core.Fault: ImmutableErrorDefinition{base=null, category=BACKEND_ERROR, cause=null, debugInfo=null,
domain=global, extendedHelp=null, httpHeaders={}, httpStatus=internalServerError, internalReason=Reason{code=null, createdByBackend=true, errorProtoDomain=null, errorProtoCode=null, location=null, debugMessage=Could not find hosted account 19130392, cause=null, unnamedArguments=[], message=null, arguments={}}, location=null, message=null, reason=null, rpcCode=500}\n\tat
com.google.api.server.core.ErrorCollector.toFault(ErrorCollector.java:43)\n\tat com.google.api.server.rest.adapter.rosy.RosyErrorConverter.toFault(RosyErrorConverter.java:55)\n\tat com.google.api.server.rest.adapter.rosy.RosyHandler$3.call(RosyHandler.java:389)\n\tat com.google.api.server.rest.adapter.rosy.RosyHandler$3.call(RosyHandler.java:369)\n\tat
com.google.api.server.core.util.CallableFuture.run(CallableFuture.java:62)\n\t... 14 more\n" } ], "message" : null }
```

What is the issue?

Is it the error of Google blogger itself or because of the account?
