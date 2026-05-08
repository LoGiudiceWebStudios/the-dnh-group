<?php get_header(); ?>

<main class="archive-page container">
  <header class="archive-header">
    <h1 class="title">
      <?php
        if ( is_category() ) {
          single_cat_title();
        } elseif ( is_tag() ) {
          single_tag_title();
        } elseif ( is_author() ) {
          the_post();
          echo 'Author: ' . get_the_author();
          rewind_posts();
        } elseif ( is_day() ) {
          echo 'Day: ' . get_the_date();
        } elseif ( is_month() ) {
          echo 'Month: ' . get_the_date( 'F Y' );
        } elseif ( is_year() ) {
          echo 'Year: ' . get_the_date( 'Y' );
        } else {
          echo 'Archive';
        }
      ?>
    </h1>
    <div class="category-filter">
      <form method="get" action="<?php echo esc_url(home_url('/')); ?>">
        <select name="cat" onchange="this.form.submit()">
          <option value=""><?php esc_html_e('Select Category', 'logiweb'); ?></option>
          <?php
            $categories = get_categories();
            foreach ($categories as $category) {
              echo '<option value="' . esc_attr($category->term_id) . '"' . selected(get_query_var('cat'), $category->term_id, false) . '>' . esc_html($category->name) . '</option>';
            }
          ?>
        </select>
      </form>
    </div>
  </header>

  <div class="post-grid">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <article class="post-preview">
        <h2 class="post-title">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>
        <div class="post-meta">
          <span>By <?php the_author(); ?></span> |
          <span><?php echo get_the_date(); ?></span>
        </div>
        <div class="post-excerpt">
          <?php the_excerpt(); ?>
        </div>
      </article>
    <?php endwhile; ?>

      <div class="pagination">
        <?php the_posts_pagination(); ?>
      </div>

    <?php else : ?>
      <p><?php esc_html_e('No content found.', 'logiweb'); ?></p>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
