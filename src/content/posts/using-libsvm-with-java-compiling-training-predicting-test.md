---
title: Using libsvm with Java, Compiling, Training, Predicting – Test
date: "2013-07-16T01:59:03"
modified: "2015-03-11T17:35:56"
author: osify
categories:
  - Java
tags:
  - classification
  - Java
  - libsvm
  - svm
lang: en
excerpt: I try to understand and learn to use libsvm to training, classify and recognize thing but first time, it’s hard to understand it without reading well about SVM. Then I face again the issue understanding the libsvm that…
origin:
  site: ask
  id: 311
  url: https://ask.osify.com/qa/311
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/311
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

I try to understand and learn to use libsvm to training, classify and recognize thing but first time, it’s hard to understand it without reading well about SVM.

Then I face again the issue understanding the libsvm that I’m going to use, here the way I go:

I choose Java to use with libsvm so here one of my practice on libsvm

### Download

I download version 3.17 (tar.gz) from following site:

[http://www.csie.ntu.edu.tw/~cjlin/libsvm/index.html](http://www.csie.ntu.edu.tw/%7Ecjlin/libsvm/index.html)

### Compile

You can compile all java files at:

- libsvm-3.17\java\libsvm
- libsvm-3.17\java

But my case, I used pre-compile libsvm: libsvm.jar from the package

### Learn with example svmguide1

libsvm comes with following methods:

– ‘svm-train’
– ‘svm-predict’
– ‘svm-scale’

Read at [Installation and data format](https://github.com/jnioche/libsvm-java) to understand these functions.

**Example with svmguide1**

- Download the training and testing data at [libsvm dataset](http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/datasets/binary.html#svmguide1)
  - [Training](http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/datasets/binary/svmguide1) data
  - [Testing](http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/datasets/binary/svmguide1.t) data
- I place the files in folder: guide1, here is my folder structures

```bash
.java
	│   batch-svm-predict.bat (to create)
	│   batch-svm-train.bat (to create)
	│   libsvm.jar
	│   Makefile
	│   svm_predict.java
	│   svm_scale.java
	│   svm_toy.java
	│   svm_train.java
	│   test_applet.html
	│
	├───guide1 (I created)
	│       svmguide1
	│       svmguide1.model
	│       svmguide1.predict
	│       svmguide1.t
	│
	├───libsvm
	│       svm.java
	│       svm.m4
	│       svm_model.java
	│       svm_node.java
	│       svm_parameter.java
	│       svm_print_interface.java
	│       svm_problem.java
```

- I write a batch script to run: svm-training: batch-svm-train.bat

```bash
@echo off
setlocal
title Batch SVM Training with libsvm

java -classpath libsvm.jar svm_train guide1/svmguide1 guide1/svmguide1.model
Pause
endlocal
```

- Run svm-training on the *svmguid1* file:

```bash
D:\libsvm-3.17\java>batch-svm-train.bat
.....*
optimization finished, #iter = 5371
nu = 0.6061503521187195
obj = -1061.528918183956, rho = -0.49526608854956916
nSV = 3053, nBSV = 722
Total nSV = 3053
Press any key to continue . . .
```

- Write batch file for svm-predict for testing file: batch-svm-predict.bat

```bash
@echo off
setlocal
title Batch SVM Predict with libsvm

java -classpath libsvm.jar svm_predict guide1/svmguide1.t guide1/svmguide1.model guide1/svmguide1.predict
Pause
endlocal
```

- Run svm-predict on testing file: svmguide1.t with recent generated model

```bash
D:\libsvm-3.17\java>batch-svm-predict.bat
Accuracy = 66.925% (2677/4000) (classification)
```

### Result

So here, I got result of **accuracy = 66.925%**

That’s a beginner guide to get into libsvm with Java that’s you might need it as me at the first time.

Next… I need to understand how a training/testing data generated.

**Updated**

- Sample Testing Package in [GitHub](https://github.com/metrey/LearnLibSVM)
