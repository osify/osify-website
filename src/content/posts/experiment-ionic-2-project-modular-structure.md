---
title: Experiment on Ionic 2 Project Modular Structure
date: "2017-03-01T12:02:30"
modified: "2017-04-04T17:09:29"
author: osify
categories:
  - Hybrid
  - Mobile
tags:
  - Hybrid Mobile
  - ionic
  - ionic 2
  - Modular Idea
  - Tutorials
lang: en
excerpt: Suppose you already know about ionic 2, typescript, nodejs, NPM related or Webpack. I’ll some day back on those topics whenever available, of course, I am also a learner with few tries. The subject of this guideline…
origin:
  site: ask
  id: 846
  url: https://ask.osify.com/qa/846
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/846
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

Suppose you already know about ionic 2, typescript, nodejs, NPM related or Webpack. I’ll some day back on those topics whenever available, of course, I am also a learner with few tries.

The subject of this guideline will be updated according to my real experiment, this is just a starter:

- 1st of March, 2017: Start init
- 4th of April, 2017: Node module generator

Let’s go to the topic…

You may need to have different projects and one core as a centralize project for most of your common methods.

Here is the normal ionic 2 with typescript project structure:

![](/media/42/42a62a632c5d-ionic2-project-typescript-structure.webp)

As in above, we need to have our own *core-common project* which is a npm module by theory and then in another project we need to include that module as dependency and of course, it’s a private dependency so the we may need to add as following way (via this [ref](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc#.k2awgnadt)):

```xslt
{
 "name": "my-app",
 "dependencies": {
   "my-core-module": "file:local_modules/my-core-module",
 }
}
```

And to create the npm module, I suggest to go through with the Yeoman Generator, [es6-npm-module](https://github.com/ghaiklor/generator-es6-npm-module#readme).

```actionscript
npm install -g yo generator-es6-npm-module
mkdir my-core-module && cd my-core-module
yo es6-npm-module
```

If using above generator, we need to add our own tsconfig.json and other typescript file to manage.
I found one generator is easy to use: [Node-Typescript](https://www.npmjs.com/package/generator-node-typescript)

```actionscript
npm install -g generator-node-typescript

mkdir my-new-project && cd my-new-project

yo node-typescript
```

I’ll let you know how my journey is.
