<?php
/**
 * Template Name: logiweb In The News Page
 */

get_header(); ?>

    <?php

        if( have_posts() ){
            while( have_posts()){
                the_post();
                the_content();
            }
        }
        
    ?>   
<div class="container">
 

    <div class="logiweb-in-the-news-grid">
        <?php
        $press_query = new WP_Query([
            'category_name' => 'logiweb-in-the-news', // Use slug of your category
            'posts_per_page' => 10, // Change as needed
            'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
        ]);

        if ($press_query->have_posts()) :
            while ($press_query->have_posts()) : $press_query->the_post(); ?>
                <article class="logiweb-news-card">
                    <?php if (has_post_thumbnail()) : ?>
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail('large', ['class' => 'logiweb-news-thumb']); ?>
                        </a>
                    <?php endif; ?>

                    <div class="logiweb-news-meta">
                        <?php
                        $categories = get_the_category();
                        if ($categories) {
                            foreach ($categories as $cat) {
                                echo '<a href="' . esc_url(get_category_link($cat->term_id)) . '" class="logiweb-news-cat">' . esc_html($cat->name) . '</a> ';
                            }
                        }
                        ?>
                    </div>
                    <h2 class="logiweb-news-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <div class="logiweb-news-excerpt"><?php the_excerpt(); ?></div>
                    <div class="logiweb-news-author">
                        <?php echo get_avatar(get_the_author_meta('ID'), 48); ?>
                        <div>
                            <div>By <?php the_author(); ?></div>
                            <div>
                                <?php echo get_the_date(); ?> • 
                                <?php
                                $word_count = str_word_count(strip_tags(get_post_field('post_content', get_the_ID())));
                                $reading_time = ceil($word_count / 200);
                                echo $reading_time . ' min read';
                                ?>
                            </div>
                        </div>
                    </div>
                </article>
            <?php endwhile;

            // Pagination
            the_posts_pagination([
                'total' => $press_query->max_num_pages
            ]);

            wp_reset_postdata();
        else :
            echo '<p>No news found.</p>';
        endif;
        ?>
    </div>
</div>

<style>
.logiweb-in-the-news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}
.logiweb-news-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.logiweb-news-thumb {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1rem;
}
.logiweb-news-meta {
    margin-bottom: 0.5rem;
}
.logiweb-news-cat {
    color: #1976d2;
    font-size: 0.95rem;
    margin-right: 0.5rem;
    text-decoration: none;
}
.logiweb-news-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
}
.logiweb-news-excerpt {
    color: #444;
    margin-bottom: 1.5rem;
}
.logiweb-news-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: auto;
    font-size: 0.95rem;
    color: #666;
}
.logiweb-news-author img {
    border-radius: 50%;
}
@media (max-width: 900px) {
    .logiweb-in-the-news-grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 600px) {
    .logiweb-in-the-news-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<?php get_footer(); ?>
