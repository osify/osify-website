---
title: Use localForage in NuxtJS
date: "2021-03-25T14:24:57"
modified: "2021-03-25T14:27:53"
author: osify
categories:
  - NodeJS
tags:
  - LocalForage
  - NuxtJS
  - Offline Web
  - VueJS
lang: en
excerpt: "You might found the module of nuxtjs such as: localforage-module or v-localforage but they are not up-to-date and it’s not working by default by using its module as example in this issue. Oh, and what is localForage…"
origin:
  site: ask
  id: 11885
  url: https://ask.osify.com/qa/11885
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11885
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

You might found the module of nuxtjs such as: localforage-module or v-localforage but they are not up-to-date and it’s not working by default by using its module as example in [this issue](https://github.com/nuxt-community/localforage-module/issues/15).

Oh, and what is localForage here? It’s an offline storage for web, another option over the localStorage but it’s an API that let’s us manage and use other storage such as IndexedDB, WebSQL, LocalStorage etc. Detail go [here](https://localforage.github.io/localForage/).

![](/media/34/34d2393b09f1-image.webp)

*Development Tool in Chrome Browser*

So, here how I made it works on nuxtjs project.

Thanks to v-localforage package wrapped-up for localforage, I took it to write a plugin instead in nuxtjs itself.

The main code is in here:
<https://github.com/datalogix/v-localforage/blob/master/src/index.js>

1. Install localforage

```
npm install localforage
```

2. Write plugin: plugin/localforage.client.js and load it as normal nuxtjs case:

```
import Vue from 'vue
import localforage from 'localforage'
Vue.use(VueLocalforage)
/* istanbul ignore next */
if (typeof window !== 'undefined' &amp;&amp; window.Vue) {
  window.Vue.use(VueLocalforage)
}

// Place your option here
const options = {}

Vue.$localforage = localforage.createInstance(options)
Vue.prototype.$localforage = Vue.$localforage

if (options.instances) {
    for (const instance of options.instances) {
        const name = instance.storeName || instance.name
        Vue.$localforage&#91;name] = localforage.createInstance(instance)
        Vue.prototype.$localforage&#91;name] = Vue.$localforage&#91;name]
    }
}
```

3. Use it in Vue Component

```
// set by name and provided data
this.$localforage.setItem(name, data)

// get by name
this.$localforage.getItem(name)

// remove by name
this.$localforage.removeItem(name)
```

Hope this helps you guys and don’t forget to let me know if it is or any comment.
