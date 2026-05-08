<?php get_header(); ?>

<main class="posts_page">
    <header>
        <div class="subtitle">Blog</div>
        <div class="title">Explore Our Latest Insights</div>
        <div class="description">Stay informed with our expert advice and tips.</div>
        <div class="category-filter">
            <button class="category-button active" data-category="all">View All</button>
            <?php
                // Escludi le categorie 'tge-in-the-new' e 'press-releases' dai bottoni
                $exclude_slugs = array('tge-in-the-new', 'press-releases');
                $categories = get_categories();
                foreach ($categories as $category) {
                    if (in_array($category->slug, $exclude_slugs)) {
                        continue;
                    }
                    echo '<button class="category-button" data-category="' . esc_attr($category->term_id) . '">' . esc_html($category->name) . '</button>';
                }
            ?>
        </div>
    </header>
    
    <div class="post-grid">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
        <?php
            // Escludi i post che hanno almeno una delle categorie escluse
            $exclude_slugs = array('tge-in-the-new', 'press-releases');
            $post_cats = get_the_category();
            $skip = false;
            foreach ($post_cats as $cat) {
                if (in_array($cat->slug, $exclude_slugs)) {
                    $skip = true;
                    break;
                }
            }
            if ($skip) continue;
        ?>
        <article class="post-preview" data-categories="<?php echo esc_attr(implode(' ', wp_list_pluck(get_the_category(), 'term_id'))); ?>">
            <div class="post-thumbnail">
                <?php if (has_post_thumbnail()) : ?>
                    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('full'); ?></a>
                <?php endif; ?>
            </div>
            <div class="post-categories">
            <?php
            // Mostra solo le categorie non escluse
            $categories = get_the_category();
            if (!empty($categories)) {
                foreach ($categories as $category) {
                    if (in_array($category->slug, $exclude_slugs)) {
                        continue;
                    }
                    echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a> ';
                }
            }
            ?>
            </div>
            <div class="post-title title-small">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </div>
            <div class="post-excerpt description">
                <?php the_excerpt(); ?>
            </div>
            <div class="post-meta">
                <div class="meta-left">
                    <div class="author-pfp"><?php echo get_avatar(get_the_author_meta('ID'), 64); ?></div>
                </div>
                <div class="meta-right">
                    <div class="author-name">By <?php the_author(); ?></div>
                    <div class="post-info">
                        <div class="post-date"> <?php echo get_the_date(); ?></div>
                        •
                        <div class="read-time"><?php echo get_reading_time(); ?> min read</div>
                    </div>
                </div>
            </div>
        </article>
        <?php endwhile; ?>
    <?php else: ?>
        <p><?php esc_html_e('No content found.', 'tge-solutions-custom-theme'); ?></p>
    <?php endif; wp_reset_postdata(); ?>
    </div>
</main>

<script>
window.tgeSolutions = { ajax_url: '<?php echo admin_url('admin-ajax.php'); ?>' };
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const postGrid = document.querySelector('.post-grid');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Fetch posts via AJAX
            fetch(`${tgeSolutions.ajax_url}?action=filter_posts&category=${category}`)
                .then(response => response.text())
                .then(data => {
                    postGrid.innerHTML = data;
                })
                .catch(error => console.error('Error fetching posts:', error));
        });
    });
});
</script>
<?php get_footer(); ?>
