---
title: "Laravel : Customize Pagination on API Resource Collection"
date: "2020-02-03T14:20:58"
modified: "2020-02-03T14:21:08"
author: osify
categories:
  - PHP
tags:
  - Laravel
  - Laravel 5.6
  - Laravel Tips
  - Laravel Tutorial
lang: en
excerpt: Laravel from 5.5 / 5.6 has been tested with this solution! You want to wrap your model collection into a resource collection but as you might using the Vue-Pagination which need to be outwrapping the meta and links key.…
featuredImage: /media/ed/edac4548563d-featured.webp
origin:
  site: ask
  id: 11425
  url: https://ask.osify.com/qa/11425
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/11425
mergedFrom: []
mediaCount: 4
featured: false
draft: false
---

Laravel from 5.5 / 5.6 has been tested with this solution!

You want to wrap your model collection into a resource collection but as you might using the Vue-Pagination which need to be outwrapping the meta and links key.

![](/media/d6/d686a75813cd-laravel-api-resource-collection-expected.webp)

So, you want something as expected output above related to pagination keys.

In short, here is the way to do so as searching on the net, it doesn’t have clear explanation of what/why we do this:

*We need to prepare the output pagination key as unwrapping output by each of expected key in API Resource’s array return statement as*

```
'current_page' => $this->currentPage(),
'total' => $this->total(),
'from' => $fromRecord,
'to' => $this->count(), // record counts of current page
'per_page' => $this->perPage(),
'last_page' => $this->lastPage(),
'path' => $pathUrl,
'first_page_url' => $this->url(1),
'last_page_url' => $this->url($this->lastPage()),
'next_page_url' => $this->nextPageUrl(),
'prev_page_url' => $this->previousPageUrl(),
```

Where can we find/know those pagination methods? In Laravel, it’s using the method of [Paginator Instance Methods](https://laravel.com/docs/5.5/pagination#paginator-instance-methods), that most of methods can be used and for my case, I handle ‘*$fromRecord*‘ and ‘*$pathUrl*‘ myself (as I don’t know where to find them :)).

```
$fromRecord = ($this->currentPage() * $this->perPage() - $this->perPage()) + 1;

$pathUrl = str_replace_last('?page=1','', $this->url(1));
```

And to get rid of the “*meta*” & “*links*” key from the output, you need to put this to the collection resource:

```
public function withResponse($request, $response)
{
    $jsonResponse = json_decode($response->getContent(), true);
    unset($jsonResponse['links'],$jsonResponse['meta']);
    $response->setContent(json_encode($jsonResponse));
}
```

**And finally, here is the final class**

![](/media/45/45bbb8df533a-laravel-api-resource-collection-impl.webp)

And it works as expected before, of course, thank for the init question over [stackoverflow](https://stackoverflow.com/questions/48094741/customising-laravel-5-5-api-resource-collection-pagination) that give me an idea but it lacks of the full explanation, it took me sometimes to find out this, hope others got help by my post.

![](/media/ed/edac4548563d-featured.webp)
