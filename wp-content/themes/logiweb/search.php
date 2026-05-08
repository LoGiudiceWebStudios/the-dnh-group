<?php get_header(); ?>

<main class="search-results">
  <h1>Results for: "<?php echo get_search_query(); ?>"</h1>

  <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <article class="search-result-single">
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <p><?php the_excerpt(); ?></p>
      </article>
    <?php endwhile; ?>

    <?php the_posts_navigation(); ?>

  <?php else : ?>
    <p>No results found.</p>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
