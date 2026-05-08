<?php get_header(); ?>


<?php if ( has_post_thumbnail() ) : ?>
  <div class="featured-image">
    <?php the_post_thumbnail('full'); ?>
  </div>
<?php endif; ?>
<main class="single-post container">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <header class="post-header">

        <h1 class="title"><?php the_title(); ?></h1>
        <div class="post-meta" style="display: none;">
          <span>By <?php the_author(); ?></span> |
          <span><?php echo get_the_date(); ?></span>
        </div>

      </header>

      <div class="post-content">
        <?php the_content(); ?>
        <div class="recent-posts-section">
          <h2>More recent Posts</h2>
          <div class="recent-posts-grid">
            <?php
              $recent_posts = new WP_Query([
                'posts_per_page' => 3, // Cambia il numero se vuoi più o meno articoli
                'post__not_in'   => [get_the_ID()], // Escludi l'articolo corrente
              ]);

              if ( $recent_posts->have_posts() ) :
                while ( $recent_posts->have_posts() ) : $recent_posts->the_post(); ?>
                  <div class="recent-post">
                    <a href="<?php the_permalink(); ?>">
                      <?php if (has_post_thumbnail()) : ?>
                        <div class="thumbnail"><?php the_post_thumbnail('medium'); ?></div>
                      <?php endif; ?>
                      <h3><?php the_title(); ?></h3>
                      <p class="date"><?php echo get_the_date(); ?></p>
                    </a>
                  </div>
                <?php endwhile;
                wp_reset_postdata();
              endif;
            ?>
          </div>
        </div>

        
      </div>
    </article>

    <nav class="post-navigation">
      <div class="previous"><?php previous_post_link(); ?></div>
      <div class="next"><?php next_post_link(); ?></div>
    </nav>

    <?php comments_template(); ?>

  <?php endwhile; else : ?>
    <p>Sorry, no post found.</p>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
