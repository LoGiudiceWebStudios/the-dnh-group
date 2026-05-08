<?php
/**
 * Template Name: Press Releases Page
 */

get_header(); ?>

<div class="container">
    <h1><?php the_title(); ?></h1>

    <div class="press-releases">
        <?php
        $press_query = new WP_Query([
            'category_name' => 'press-release', // Use slug of your category
            'posts_per_page' => 10, // Change as needed
            'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
        ]);

        if ($press_query->have_posts()) :
            while ($press_query->have_posts()) : $press_query->the_post(); ?>
                <article class="press-release">
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <p><?php the_excerpt(); ?></p>
                </article>
            <?php endwhile;

            // Pagination
            the_posts_pagination([
                'total' => $press_query->max_num_pages
            ]);

            wp_reset_postdata();
        else :
            echo '<p>No press releases found.</p>';
        endif;
        ?>
    </div>
</div>

<?php get_footer(); ?>
