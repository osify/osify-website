---
title: WordPress – Remove Sidebars of Parent Theme
date: "2011-04-26T01:45:30"
modified: "2012-02-27T14:44:28"
author: osify
categories:
  - WordPress
tags:
  - PHP
  - Tips
  - WordPress
  - WordPress MU
lang: en
excerpt: Most of WordPress theme developers may already agree that the most flexible for WordPress CMS is able to extend a template (we called parent theme) to create any child theme we want. You may also face the same issue to…
origin:
  site: osify
  id: 541
  url: https://osify.com/2011/04/wordpress-remove-sidebars-of-parent-theme/
  host: osify.com
legacyUrls:
  - https://osify.com/2011/04/wordpress-remove-sidebars-of-parent-theme/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Most of WordPress theme developers may already agree that the most flexible for WordPress CMS is able to extend a template (we called parent theme) to create any child theme we want.

You may also face the same issue to me when we want to remove one configuration of the parent theme.
I have and found the solution now is to remove the sidebars of the parent theme and manage all sidebars myself at child theme.

Normally, we use WordPress code: [unregister_sidebar ($id)](http://codex.wordpress.org/Function_Reference/unregister_sidebar)

With this API, we can remove the sidebar via “sidebar id”

My case, the parent theme does not provide the sidebar id but just name and there are many sidebars,

Ex:

```php
register_sidebar(array(
'name' => 'Footer',
'before_widget' => '<div id="%1$s">',
'after_widget' => '</div> <!-- end .footer-widget -->',
'before_title' => '<h4>',
'after_title' => '</h4>',
));
```

My solution, I decided to remove all sidebars of parent theme and re-create it myself from child theme with following code:

**Remove all sidebars (without id)**

```php
if ( function_exists('unregister_sidebar') && !function_exists('my_unregister_sidebars') ) {
function my_unregister_sidebars () {
global $wp_registered_sidebars;
$nb_sidebars = count($wp_registered_sidebars);
for ($i = 1; $i <= $nb_sidebars; $i++) {
unregister_sidebar("sidebar-$i");
}
}
add_action( 'widgets_init', 'my_unregister_sidebars', 11 );
}
```

Explain:

- **$wp_registered_sidebars** is the global variable that count all registered sidebars
- By default the sidebar register id with pattern: **sidebar-$i** (See in core file: wp-include/widgets.php)
- Add action hook in **widget_init** to call the function “**my_unregister_sidebars**“
- Important thing with low priority: **11** (because normally the child theme load before the parent theme so give priority for action to wait)

**Add sidebars in child theme:**

As normal way but we just make sure we add those sidebars after above action hook, so put priority 12 for that:

```php
    if ( function_exists('register_sidebar') && !function_exists('my_register_sidebars') ) {
    function my_register_sidebars () {
    register_sidebar(array(
    'name' => 'Sidebar Homepage Right Column',
    'before_widget' => '<div id="%1$s">',
    'after_widget' => '</div><!-- end .widget-content --></div> <!-- end .widget -->',
    'before_title' => '<h4><span>',
    'after_title' => '</span></h4><div>',
    ));

    register_sidebar(array(
    'name' => 'Footer',
    'before_widget' => '<div id="%1$s">',
    'after_widget' => '</div> <!-- end .footer-widget -->',
    'before_title' => '<h4>',
    'after_title' => '</h4>',
    ));
    }

    add_action( 'widgets_init', 'my_register_sidebars', 12 );
    }
```

Hope it helps you.

And you may have something to share for that as well, so comment here;
