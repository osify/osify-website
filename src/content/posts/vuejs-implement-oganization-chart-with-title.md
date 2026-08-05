---
title: VueJS – Implement Oganization Chart with Title
date: "2018-05-25T17:18:50"
modified: "2018-05-25T17:18:50"
author: osify
categories:
  - General
tags:
  - Tips
  - VueJS
lang: en
excerpt: "I use this Vue Wrapper: OrgChart JS At first, I could not figure out the chart to display: name + title. Finally I got the point! Here how I go… Install And setting up the style per its website. Implementation And at…"
featuredImage: /media/97/976e03243c7e-featured.webp
origin:
  site: ask
  id: 1103
  url: https://ask.osify.com/qa/1103
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/1103
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

I use this Vue Wrapper: [OrgChart JS](https://github.com/spiritree/vue-orgchart)

At first, I could not figure out the chart to display: name + title.

Finally I got the point!

**Here how I go…**

### Install

```actionscript
npm install vue-orgchart -S
```

And setting up the style per its website.

### Implementation

```javascript
export default {
        components: { VoBasic },
        data () {
            return {
                chartData : {
                    name: 'Department A', title: 'Manager A',
                    children: [
                        {
                            name: 'Department B', title: 'Manager B',
                        },
                        {
                            name: 'Department C', title: 'Manager B',
                            children: []
                        },
                        {
                            name: 'Department D', title: 'Manager C',
                            children: []
                        },
                        {
                            name: 'Department E', title: 'Manager E',
                            children: []
                        },
                        {
                            name: 'Department F', title: 'Manager F',
                            children: []
                        },
                        {
                            name: 'Department G', title: 'Manager G',
                            children: []
                        }
                    ]
                },
                titleData: 'title'
            }
        }
    }
```

And at template use this:

```actionscript
<template>
    <div class="row">
        <vo-basic :data="chartData" :nodeContent="titleData" class="col-12 col-sm-10 col-md-10"></vo-basic>
    </div>
</template>
```

### Result

![](/media/9c/9c2d081a3fb9-vuchart-with-title.webp)
