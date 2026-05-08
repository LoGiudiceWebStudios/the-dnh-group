<?php
/**
 * Plugin Name:       Logiweb Custom Blocks
 * Description:       
 * Version:           1.0.0
 * Author:            LoGiudice WebStudios
 * Text Domain:       logiweb-blocks
 * Author URI:        https://logiweb.me
 */


add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script(
        'logiweb-carousel-init',
        plugins_url('carousel-init.js', __FILE__),
        [],
        null,
        true
    );
    });

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function logiweb_register_blocks() {
    wp_register_script(
        'logiweb-blocks-editor',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );

    // Registra lo stile dell'editor
    wp_register_style(
        'logiweb-blocks-editor-styles',
        plugins_url( 'build/index.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
    );

    // Registra lo stile del frontend
    wp_register_style(
        'logiweb-blocks-frontend-styles',
        plugins_url( 'build/index.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
    );


    register_block_type( 'logiweb/custom-block-1', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-2', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-3', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    
    register_block_type( 'logiweb/custom-block-4', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-5', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-6', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-7', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));


    register_block_type( 'logiweb/custom-block-8', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

        register_block_type( 'logiweb/custom-block-9', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

        register_block_type( 'logiweb/custom-block-10', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

        register_block_type( 'logiweb/custom-block-11', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

        register_block_type( 'logiweb/custom-block-12', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
        register_block_type( 'logiweb/custom-block-13', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
        register_block_type( 'logiweb/custom-block-14', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
        register_block_type( 'logiweb/custom-block-15', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
        register_block_type( 'logiweb/custom-block-16', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
        register_block_type( 'logiweb/custom-block-17', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

        register_block_type( 'logiweb/custom-block-18', array(
            'editor_script' => 'logiweb-blocks-editor',
            'editor_style'  => 'logiweb-blocks-editor-styles',
            'style'         => 'logiweb-blocks-frontend-styles',
            'render_callback' => 'logiweb_render_block_18',
    ));
}
add_action( 'init', 'logiweb_register_blocks' );

    /**
     * Server-side render for Services Cards Showcase (block-18).
     * Ensures image URLs are resolved from attachment IDs when missing.
     */
    function logiweb_render_block_18( $attributes ) {
        if ( ! is_array( $attributes ) ) {
            return '';
        }

        $subtitle = isset( $attributes['subtitle'] ) ? esc_html( $attributes['subtitle'] ) : '';
        $title = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';
        $description = isset( $attributes['description'] ) ? esc_html( $attributes['description'] ) : '';
        $cards = isset( $attributes['cards'] ) && is_array( $attributes['cards'] ) ? $attributes['cards'] : array();
        $footerText = isset( $attributes['footerText'] ) ? esc_html( $attributes['footerText'] ) : '';
        $footerButtonText = isset( $attributes['footerButtonText'] ) ? esc_html( $attributes['footerButtonText'] ) : '';
        $footerButtonUrl = isset( $attributes['footerButtonUrl'] ) ? esc_url( $attributes['footerButtonUrl'] ) : '';

        ob_start();
        ?>
        <section class="services-showcase fade-in-on-scroll" data-block="services-showcase">
            <div class="services-showcase-heading">
                <p class="services-showcase-subtitle"><?php echo $subtitle; ?></p>
                <h2 class="services-showcase-title"><?php echo $title; ?></h2>
                <p class="services-showcase-description"><?php echo $description; ?></p>
            </div>

            <div class="services-showcase-cards">
                <?php foreach ( $cards as $card ) :
                    // resolve image URL: prefer iconUrl, fallback to image/imageUrl, or use iconId
                    $img = '';
                    if ( ! empty( $card['iconUrl'] ) ) {
                        $img = esc_url( $card['iconUrl'] );
                    } elseif ( ! empty( $card['imageUrl'] ) ) {
                        $img = esc_url( $card['imageUrl'] );
                    } elseif ( ! empty( $card['image'] ) ) {
                        $img = esc_url( $card['image'] );
                    } elseif ( ! empty( $card['iconId'] ) ) {
                        $img = wp_get_attachment_image_url( (int) $card['iconId'], 'full' );
                        if ( $img ) {
                            $img = esc_url( $img );
                        }
                    }

                    $alt = ! empty( $card['imageAlt'] ) ? esc_attr( $card['imageAlt'] ) : esc_attr( $card['title'] ?? '' );
                    $cardTitle = isset( $card['title'] ) ? esc_html( $card['title'] ) : '';
                    $cardSubtitle = isset( $card['subtitle'] ) ? esc_html( $card['subtitle'] ) : '';
                    $cardDescription = isset( $card['description'] ) ? esc_html( $card['description'] ) : '';
                    $cardLinkUrl = isset( $card['linkUrl'] ) ? esc_url( $card['linkUrl'] ) : '#';
                    $cardLinkText = isset( $card['linkText'] ) ? esc_html( $card['linkText'] ) : 'Learn more';
                    ?>
                    <article class="services-showcase-card">
                        <div class="services-showcase-card-imageWrap">
                            <?php if ( $img ) : ?>
                                <img src="<?php echo $img; ?>" alt="<?php echo $alt; ?>" class="services-showcase-card-image" />
                            <?php else : ?>
                                <div class="services-showcase-card-placeholder">Add image</div>
                            <?php endif; ?>
                        </div>
                        <h3 class="services-showcase-card-title"><?php echo $cardTitle; ?></h3>
                        <p class="services-showcase-card-subtitle"><?php echo $cardSubtitle; ?></p>
                        <div class="services-showcase-card-description"><?php echo $cardDescription; ?></div>
                        <a class="services-showcase-card-link" href="<?php echo $cardLinkUrl; ?>"><?php echo $cardLinkText; ?></a>
                    </article>
                <?php endforeach; ?>
            </div>

            <div class="services-showcase-footer">
                <p class="services-showcase-footerText"><?php echo $footerText; ?></p>
                <a class="services-showcase-button" href="<?php echo $footerButtonUrl ?: '#'; ?>"><?php echo $footerButtonText; ?></a>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
