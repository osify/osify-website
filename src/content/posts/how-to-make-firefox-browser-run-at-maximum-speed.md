---
title: How to make Firefox browser run at maximum speed
date: "2011-07-19T09:47:39"
modified: "2011-07-19T09:47:39"
author: osify
categories:
  - How-To
tags: []
lang: km
excerpt: សូម​ធ្វើ​តាម​ជំហាន​នីមួយៗខាង​ក្រោម​នេះ ត្រូវ​បើក​កម្មវិធី​ Firefox បន្ទាប់មក​ត្រូវ​វាយ​អក្សរ “about:config” ពេល​វា​ចេញ​ផ្ទាំង​អក្សរ​មួយ​មក​ លោកអ្នក​​ចុច​ជ្រើសរើស​យក​ពាក្យ​យល់​ព្រម​…
origin:
  site: ask
  id: 6098
  url: https://ask.osify.com/qa/6098
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/6098
mergedFrom: []
mediaCount: 0
featured: false
draft: false
originalAuthor: MTR
---

សូម​ធ្វើ​តាម​ជំហាន​នីមួយៗខាង​ក្រោម​នេះ

1. ត្រូវ​បើក​កម្មវិធី​ Firefox បន្ទាប់មក​ត្រូវ​វាយ​អក្សរ “about:config”

2. ពេល​វា​ចេញ​ផ្ទាំង​អក្សរ​មួយ​មក​ លោកអ្នក​​ចុច​ជ្រើសរើស​យក​ពាក្យ​យល់​ព្រម​

3. ពេល​នោះ​លោក​អ្នក​នឹង​ឃើញ​តារាង​អក្សរ​ជា​ច្រើន​ជួរ​

4. ត្រូវ​ស្វែង​រក​អក្សរ​ “**network.http.pipelining**” ហើយ​ចុច​ mouse ខាង​ស្តាំ​ ជ្រើស​រើស​យក​ Toggle ដើម្បី​ប្តូរ​តំលៃ​ពី false ទៅ true

5. បន្ទាប់​មក​ទៀត​ស្វែងរក​អក្សរ​ “**network.http.proxy.pipelining**” រួច​ចុច​ mouse ខាង​ស្តាំង​ជ្រើស​រើស​យក​ Toggle ដើម្បី​ប្តូរ​តំលៃ​ពី false ទៅ true ដូច​ក្នុង​ជំហាន​ទី​ 4 ដែរ

6. បន្ទាប់​មក​ទៀត​ស្វែងរក​អក្សរ​ **“network.http.pipelining.maxrequests”** រួច​ហើយ​ចុច​ mouse ខាង​ស្តាំង​ជ្រើស​រើស​យក Modify ទើប​ប្តូរ​លេខដែល​នៅ​ក្នុង​ប្រអប់​ពី​ទាប ទៅ​ខ្ពស់​ ដូចជា​ 10 20 ឬ 30 ក៏បាន​

7. រូចមក​លោកអ្នក​ចុច​ mouse ខាង​ស្តាំ​ត្រង់​ណា​ក៏​បាន​ ហើយ​ចុច​លើ “New” ជ្រើសរើស​យក​ “Integer” បន្ទាប់​មក​វានឹង​ទាម​ទារ​ឱ្យ​ដាក់​ឈ្មោះ​ អ្នក​ត្រូវ​វាយ​អក្សរ​ **“nglayout.initialpaint.delay”** រួចហើយ​ចុច OK វានឹង​ទាម​ទារ​ឱ្យ​វាយ​លេខ​ចូល​ សូម​វាយ​លេខ 0 ចូល​ទៅ។

8. បិទ​កម្មវិធី​ ហើយ​បើក​ឡើង​វិញ​

9. លោក​អ្នក​នឹង​ឃើញ​ថា​វា​ដំណើរ​ការ​លឿន​ជាង​មុន1. first in the URL bar, Type “about:config”.

It will bring up a list of commands and variables you can edit.

2. The second step is to put “network.http.pipelining” in the filter and change the value to “true”.

3. After that you will want to put “network.http.proxy.pipelining” in the filter.
Like the last one, make that value set to “true” also.

4. Next, locate “network.http.pipelining.maxrequests” and change the value to some number higher, say 10,20 or even 30, it would make up to 10,20 or 30 requests at once.

5. The last step is to right click anywhere and select “New” then “Integer”. Name it “nglayout.initialpaint.delay” and make its value “0″. This will make the browser respond faster on the information of the websites it receives.

6. Close out FireFox  and restart it

loo.. enjoy the new mega speed
