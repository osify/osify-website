---
title: WP – How to display posts from a category
date: "2014-05-16T00:22:04"
modified: "2014-05-16T00:22:04"
author: osify
categories:
  - WordPress
tags:
  - Tips
  - WordPress
  - WordPress Tips
  - WP Tutorials
lang: en
excerpt: Listing posts by category in WordPress theme development is also interesting, people could manage different way, any way, here are ones that you might interesting to try. Simple If you want to display posts from a…
origin:
  site: ask
  id: 475
  url: https://ask.osify.com/qa/475
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/475
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Listing posts by category in WordPress theme development is also interesting, people could manage different way, any way, here are ones that you might interesting to try.

#### Simple

If you want to display posts from a single category in your WordPress theme, you should add the following line below the Loop:

```php
<?php query_posts( 'cat=23' ); ?>
```

Replace 23 with your category ID. This will filter the Look showing only posts from the category you have selected.

If you want to show more than one category, you can add the IDs separated with comas:

```php
<?php query_posts( 'cat=23,24,54,77' ); ?>
```

#### Advance

Create a page template: Posts by Category

The purpose to list post by each category on the page.

```php
<?php
/* template name: Posts by Category! */
get_header(); ?>

        <div id="container">
            <div id="content" role="main">

            <?php
            // get all the categories from the database
            $cats = get_categories();

                // loop through the categries
                foreach ($cats as $cat) {
                    // setup the cateogory ID
                    $cat_id= $cat->term_id;
                    // Make a header for the cateogry
                    echo "<h2>".$cat->name."</h2>";
                    // create a custom wordpress query
                    query_posts("cat=$cat_id&posts_per_page=100");
                    // start the wordpress loop!
                    if (have_posts()) : while (have_posts()) : the_post(); ?>

                        <?php // create our link now that the post is setup ?>
                        <a href="<?php the_permalink();?>"><?php the_title(); ?></a>
                        <?php echo '<hr/>'; ?>

                    <?php endwhile; endif; // done our wordpress loop. Will start again for each category ?>
                <?php } // done the foreach statement ?>

            </div><!-- #content -->
        </div><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
```

—

Tips to read: [get_posts](http://codex.wordpress.org/Template_Tags/get_posts)
