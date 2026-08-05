---
title: Vue ChartJS – Pie/Doughnut – Outlabel
date: "2020-06-05T02:18:39"
modified: "2020-06-05T02:42:56"
author: osify
categories:
  - General
tags:
  - ChartJS
  - Vue-ChartJS
  - VueJS
lang: en
excerpt: "The expected result By default, the chartjs, chart type: Pie or Doughnut, we can have label inside or as legend, see at: To have out-label as above image, will need some challenge as specially with vuejs. The issue as…"
origin:
  site: ask
  id: 11579
  url: https://ask.osify.com/qa/11579
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11579
mergedFrom: []
mediaCount: 2
featured: false
draft: false
---

![](/media/49/49ebcbe0365b-image.webp)

*The expected result*

By default, the chartjs, chart type: Pie or Doughnut, we can have label inside or as legend, see at: <https://www.chartjs.org/docs/latest/charts/doughnut.html>

To have out-label as above image, will need some challenge as specially with vuejs. The issue as stated in [VueChartJS#20](https://github.com/apertureless/vue-chartjs/issues/280), I faced that too.

**Plugin**

I finally used “[chartjs-plugin-piechart-outlabels](https://github.com/Neckster/chartjs-plugin-piechart-outlabels)” plugin and to challenge the issue#20 above and as following.

Install

npm install chartjs-plugin-piechart-outlabels –save

**Use it in VueJS Project**

```
import ChartDataOutlabels from 'chartjs-plugin-piechart-outlabels';

Vue.use(ChartDataOutlabels);
```

**ChartJS Component**: *doughnut-outlabel-graph.vue*

```
import { Doughnut } from 'vue-chartjs'

export default {
   extends: Doughnut,
   props: ['graph'],
   data() {
      return {
         options: {
             responsive: true,
             plugins: {
                legend: false,
                outlabels: {
                   text: '%l %v (%p)',
                   color: 'white',
                   stretch: 40,
                   font: {
                       resizable: true,
                       minSize: 10,
                       maxSize: 12
                   }
                 }
               },
               layout: {
                 padding: 135
               }
          },
      };
  },
  watch:{
    graph: {
        handler(val){
         this.renderChart(this.graph, this.options);
        },
        deep: true
     }
   }
 }
```

**Use It**

![](/media/48/48c2a1d4bb11-image-2.webp)
