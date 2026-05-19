<?php
/**
 * Plugin Name:       Logiweb Custom Blocks
 * Description:       
 * Version:           1.0.0
 * Author:            LoGiudice WebStudios
 * Text Domain:       logiweb-blocks
 * Author URI:        https://logiweb.me
 */

// Register Custom Post Type for Financing Applications
add_action('init', function() {
    register_post_type('financing_app', array(
        'public'       => false,
        'show_in_rest' => true,
        'supports'     => array('title', 'custom-fields'),
        'labels'       => array('name' => 'Financing Applications'),
    ));

    register_post_meta('financing_app', '_app_data', array(
        'type'         => 'object',
        'show_in_rest' => true,
        'single'       => true,
    ));
});

add_action( 'rest_api_init', function() {
    register_rest_route( 'logiweb/v1', '/financing-app', array(
        'methods'             => 'POST',
        'callback'            => 'logiweb_submit_financing_application',
        'permission_callback' => '__return_true',
    ) );
} );

function logiweb_submit_financing_application( WP_REST_Request $request ) {
    $raw = $request->get_json_params();
    $data = is_array( $raw ) ? $raw : array();

    $first_name = isset( $data['firstName'] ) ? sanitize_text_field( (string) $data['firstName'] ) : '';
    $last_name  = isset( $data['lastName'] ) ? sanitize_text_field( (string) $data['lastName'] ) : '';

    if ( '' === $first_name || '' === $last_name ) {
        return new WP_REST_Response( array(
            'message' => 'First Name and Last Name are required.',
        ), 400 );
    }

    $clean_data = array(
        'firstName'      => $first_name,
        'lastName'       => $last_name,
        'email'          => isset( $data['email'] ) ? sanitize_email( (string) $data['email'] ) : '',
        'phone'          => isset( $data['phone'] ) ? sanitize_text_field( (string) $data['phone'] ) : '',
        'street'         => isset( $data['street'] ) ? sanitize_text_field( (string) $data['street'] ) : '',
        'city'           => isset( $data['city'] ) ? sanitize_text_field( (string) $data['city'] ) : '',
        'state'          => isset( $data['state'] ) ? sanitize_text_field( (string) $data['state'] ) : '',
        'zip'            => isset( $data['zip'] ) ? sanitize_text_field( (string) $data['zip'] ) : '',
        'projectType'    => isset( $data['projectType'] ) ? sanitize_text_field( (string) $data['projectType'] ) : '',
        'projectDetails' => isset( $data['projectDetails'] ) ? sanitize_textarea_field( (string) $data['projectDetails'] ) : '',
        'projectAmount'  => isset( $data['projectAmount'] ) ? sanitize_text_field( (string) $data['projectAmount'] ) : '',
        'startDate'      => isset( $data['startDate'] ) ? sanitize_text_field( (string) $data['startDate'] ) : '',
    );

    $post_id = wp_insert_post( array(
        'post_type'   => 'financing_app',
        'post_status' => 'private',
        'post_title'  => sprintf( '%s %s - %s', $first_name, $last_name, gmdate( 'Y-m-d H:i:s' ) ),
    ), true );

    if ( is_wp_error( $post_id ) ) {
        return new WP_REST_Response( array(
            'message' => $post_id->get_error_message(),
        ), 500 );
    }

    update_post_meta( $post_id, '_app_data', $clean_data );

    return new WP_REST_Response( array(
        'id'      => $post_id,
        'message' => 'Application submitted successfully.',
    ), 201 );
}

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        [],
        '6.5.1'
    );
    wp_enqueue_script(
        'logiweb-carousel-init',
        plugins_url('carousel-init.js', __FILE__),
        [],
        null,
        true
    );
    wp_enqueue_script(
        'logiweb-why-choose-us-counter',
        plugins_url('why-choose-us-counter.js', __FILE__),
        [],
        null,
        true
    );
    wp_enqueue_script(
        'logiweb-payment-estimator-init',
        plugins_url('payment-estimator-init.js', __FILE__),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'payment-estimator-init.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-financing-form',
        plugins_url('static/financing-form.js', __FILE__),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'static/financing-form.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-portfolio-showcase-init',
        plugins_url('static/portfolio-showcase-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'static/portfolio-showcase-init.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-portfolio-grid-init',
        plugins_url('portfolio-grid-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'portfolio-grid-init.js' ),
        true
    );
    wp_localize_script('logiweb-financing-form', 'logiweb_rest', array(
        'nonce' => wp_create_nonce('wp_rest'),
        'base_url' => rest_url(),
        'submit_endpoint' => rest_url( 'logiweb/v1/financing-app' ),
    ));
});

add_action('enqueue_block_editor_assets', function() {
    $asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
    $asset_data = file_exists( $asset_file ) ? include $asset_file : array(
        'dependencies' => array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components' ),
        'version'      => filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
    );

    wp_enqueue_script(
        'logiweb-blocks-editor',
        plugins_url( 'build/index.js', __FILE__ ),
        isset( $asset_data['dependencies'] ) ? $asset_data['dependencies'] : array(),
        isset( $asset_data['version'] ) ? $asset_data['version'] : filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
        true
    );

    wp_localize_script(
        'logiweb-blocks-editor',
        'logiweb_blocks',
        array(
            'plugin_url' => plugins_url( '', __FILE__ ),
            'placeholder_image' => plugins_url( 'assets/Placeholder_Image_4.png', __FILE__ ),
        )
    );

    wp_enqueue_style(
        'logiweb-blocks-editor-styles',
        plugins_url( 'build/index.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
    );

    wp_enqueue_style(
        'font-awesome-editor',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        [],
        '6.5.1'
    );
});

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function logiweb_register_blocks() {
    $asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
    $asset_data = file_exists( $asset_file ) ? include $asset_file : array(
        'dependencies' => array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components' ),
        'version'      => filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
    );

    wp_register_script(
        'logiweb-blocks-editor',
        plugins_url( 'build/index.js', __FILE__ ),
        isset( $asset_data['dependencies'] ) ? $asset_data['dependencies'] : array(),
        isset( $asset_data['version'] ) ? $asset_data['version'] : filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
        true
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
        'render_callback' => 'logiweb_render_block_7',
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

        register_block_type( 'logiweb/custom-block-19', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
        register_block_type( 'logiweb/custom-block-20', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-21', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-22', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-23', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-24', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-25', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-26', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-27', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-28', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-29', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_29',
    ));
    register_block_type( 'logiweb/custom-block-30', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-31', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-32', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-33', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-34', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-35', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-36', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-37', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-38', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-39', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-40', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-41', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-43', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
        'attributes'    => array(
            'sectionTitle'    => array( 'type' => 'string', 'default' => 'Frequently Asked Questions' ),
            'sectionSubtitle' => array( 'type' => 'string', 'default' => 'Have questions about our financing process?' ),
            'faqs'            => array(
                'type'    => 'array',
                'default' => array(
                    array( 'question' => 'Will this affect my credit score?', 'answer' => 'No. Our pre-qualification process uses a soft credit pull that will not impact your credit score.' ),
                    array( 'question' => 'How long does approval take?',      'answer' => 'Most applicants receive a decision within minutes. Some cases may take up to 24 hours.' ),
                    array( 'question' => 'What if I have bad credit?',        'answer' => 'We work with multiple lenders and offer options for various credit profiles, including in-house financing.' ),
                    array( 'question' => 'Can I pay off early?',              'answer' => 'Yes! Most of our financing partners allow early payoff without prepayment penalties.' ),
                ),
            ),
        ),
    ));
    register_block_type( 'logiweb/custom-block-44', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_application_form',
    ));
    register_block_type( 'logiweb/custom-block-45', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_financing_results',
    ));
    register_block_type( 'logiweb/custom-block-46', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-47', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-48', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-49', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-50', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-51', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

}
add_action( 'init', 'logiweb_register_blocks' );

function logiweb_render_block_29( $attributes ) {
    $defaults = array(
        'badge' => 'JOIN OUR TEAM',
        'titleStart' => 'Build Your',
        'titleHighlight' => 'Career',
        'titleEnd' => 'With Us',
        'description' => 'Join a team that values craftsmanship, integrity, and growth. At DNH Group, we are not just building homes - we are building careers.',
        'stats' => array(),
        'formTitle' => 'Get Job Alerts',
        'formDescription' => 'Be the first to know about new opportunities. Sign up for job alerts tailored to your interests.',
        'inputPlaceholder' => 'Enter your email',
        'buttonText' => 'Subscribe to Alerts',
        'privacyText' => 'We respect your privacy. Unsubscribe anytime.',
        'buttonUrl' => '#',
        'contactForm7Shortcode' => '',
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $stats = is_array( $a['stats'] ) ? $a['stats'] : array();
    $shortcode = isset( $a['contactForm7Shortcode'] ) ? (string) $a['contactForm7Shortcode'] : '';

    ob_start();
    ?>
    <section class="career-join-block fade-in-on-scroll" data-block="career-join">
        <div class="career-join-inner">
            <div class="career-join-left">
                <p class="career-join-badge"><i class="fa-solid fa-briefcase" aria-hidden="true"></i><?php echo esc_html( $a['badge'] ); ?></p>
                <h2 class="career-join-title">
                    <?php echo esc_html( $a['titleStart'] ); ?>
                    <span class="career-join-title-highlight"><?php echo esc_html( $a['titleHighlight'] ); ?></span>
                    <br />
                    <?php echo esc_html( $a['titleEnd'] ); ?>
                </h2>
                <p class="career-join-description"><?php echo esc_html( $a['description'] ); ?></p>

                <div class="career-join-stats">
                    <?php foreach ( $stats as $stat ) :
                        $icon = isset( $stat['icon'] ) ? (string) $stat['icon'] : 'fa-solid fa-star';
                        $value = isset( $stat['value'] ) ? (string) $stat['value'] : '';
                        $label = isset( $stat['label'] ) ? (string) $stat['label'] : '';
                    ?>
                        <div class="career-join-stat">
                            <span class="career-join-stat-icon"><i class="<?php echo esc_attr( $icon ); ?>" aria-hidden="true"></i></span>
                            <div>
                                <p class="career-join-stat-value"><?php echo esc_html( $value ); ?></p>
                                <p class="career-join-stat-label"><?php echo esc_html( $label ); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="career-join-card">
                <h3 class="career-join-card-title"><i class="fa-regular fa-bell" aria-hidden="true"></i><?php echo esc_html( $a['formTitle'] ); ?></h3>
                <p class="career-join-card-description"><?php echo esc_html( $a['formDescription'] ); ?></p>

                <?php if ( '' !== trim( $shortcode ) ) : ?>
                    <div class="career-join-cf7"><?php echo do_shortcode( $shortcode ); ?></div>
                <?php else : ?>
                    <input type="email" class="career-join-input" placeholder="<?php echo esc_attr( $a['inputPlaceholder'] ); ?>" />
                    <a href="<?php echo esc_url( $a['buttonUrl'] ); ?>" class="career-join-button">
                        <i class="fa-regular fa-bell" aria-hidden="true"></i>
                        <?php echo esc_html( $a['buttonText'] ); ?>
                    </a>
                    <p class="career-join-privacy"><?php echo esc_html( $a['privacyText'] ); ?></p>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}

// Application Form Renderer (Block 44)
function logiweb_render_application_form( $attributes ) {
    $defaults = array(
        'formTitle' => 'Tell Us About Your Project',
        'formDescription' => "Fill out your information below and we'll match you with the best financing options.",
        'resultsPageUrl' => '/select-your-financing/',
        'buttonText' => 'View Financing Options →',
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $app_id = isset( $_GET['edit'] ) ? intval( $_GET['edit'] ) : null;
    $prefill = array();

    // Load existing data if editing
    if ( $app_id ) {
        $post = get_post( $app_id );
        if ( $post && 'financing_app' === $post->post_type ) {
            $prefill = get_post_meta( $post->ID, '_app_data', true ) ?: array();
        }
    }

    $results_page_url = isset( $a['resultsPageUrl'] ) ? trim( (string) $a['resultsPageUrl'] ) : '';
    if ( '' === $results_page_url ) {
        $results_page_url = '/select-your-financing/';
    }

    // If a relative path is provided, resolve it against WordPress home URL.
    if ( false === strpos( $results_page_url, '://' ) ) {
        $results_page_url = home_url( '/' . ltrim( $results_page_url, '/' ) );
    }

    ob_start();
    ?>
    <section class="financing-app-form-block">
        <div class="financing-app-form-inner">
            <h2 class="financing-app-form-title"><?php echo wp_kses_post( $a['formTitle'] ); ?></h2>
            <p class="financing-app-form-description"><?php echo wp_kses_post( $a['formDescription'] ); ?></p>

            <form class="financing-app-form" data-redirect="<?php echo esc_url( $results_page_url ); ?>">
                <!-- Personal Information -->
                <div class="form-row">
                    <div>
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" placeholder="e.g. John" 
                               value="<?php echo esc_attr( $prefill['firstName'] ?? '' ); ?>" required />
                    </div>
                    <div>
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" placeholder="e.g. Smith" 
                               value="<?php echo esc_attr( $prefill['lastName'] ?? '' ); ?>" required />
                    </div>
                </div>

                <div class="form-row">
                    <div>
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" placeholder="e.g. john@email.com" 
                               value="<?php echo esc_attr( $prefill['email'] ?? '' ); ?>" required />
                    </div>
                    <div>
                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" placeholder="e.g. (555) 000-0000" 
                               value="<?php echo esc_attr( $prefill['phone'] ?? '' ); ?>" required />
                    </div>
                </div>

                <div>
                    <label for="street">Street Address *</label>
                    <input type="text" id="street" name="street" placeholder="e.g. 123 Main St" 
                           value="<?php echo esc_attr( $prefill['street'] ?? '' ); ?>" required />
                </div>

                <!-- City, State, ZIP -->
                <div class="form-row form-row-3col">
                    <div>
                        <label for="city">City *</label>
                        <input type="text" id="city" name="city" placeholder="e.g. Austin" 
                               value="<?php echo esc_attr( $prefill['city'] ?? '' ); ?>" required />
                    </div>
                    <div>
                        <label for="state">State *</label>
                        <select id="state" name="state" required>
                            <option value="">Select State</option>
                            <option value="AL" <?php selected( $prefill['state'] ?? '', 'AL' ); ?>>Alabama</option>
                            <option value="AK" <?php selected( $prefill['state'] ?? '', 'AK' ); ?>>Alaska</option>
                            <option value="AZ" <?php selected( $prefill['state'] ?? '', 'AZ' ); ?>>Arizona</option>
                            <option value="AR" <?php selected( $prefill['state'] ?? '', 'AR' ); ?>>Arkansas</option>
                            <option value="CA" <?php selected( $prefill['state'] ?? '', 'CA' ); ?>>California</option>
                            <option value="CO" <?php selected( $prefill['state'] ?? '', 'CO' ); ?>>Colorado</option>
                            <option value="CT" <?php selected( $prefill['state'] ?? '', 'CT' ); ?>>Connecticut</option>
                            <option value="DE" <?php selected( $prefill['state'] ?? '', 'DE' ); ?>>Delaware</option>
                            <option value="FL" <?php selected( $prefill['state'] ?? '', 'FL' ); ?>>Florida</option>
                            <option value="GA" <?php selected( $prefill['state'] ?? '', 'GA' ); ?>>Georgia</option>
                            <option value="HI" <?php selected( $prefill['state'] ?? '', 'HI' ); ?>>Hawaii</option>
                            <option value="ID" <?php selected( $prefill['state'] ?? '', 'ID' ); ?>>Idaho</option>
                            <option value="IL" <?php selected( $prefill['state'] ?? '', 'IL' ); ?>>Illinois</option>
                            <option value="IN" <?php selected( $prefill['state'] ?? '', 'IN' ); ?>>Indiana</option>
                            <option value="IA" <?php selected( $prefill['state'] ?? '', 'IA' ); ?>>Iowa</option>
                            <option value="KS" <?php selected( $prefill['state'] ?? '', 'KS' ); ?>>Kansas</option>
                            <option value="KY" <?php selected( $prefill['state'] ?? '', 'KY' ); ?>>Kentucky</option>
                            <option value="LA" <?php selected( $prefill['state'] ?? '', 'LA' ); ?>>Louisiana</option>
                            <option value="ME" <?php selected( $prefill['state'] ?? '', 'ME' ); ?>>Maine</option>
                            <option value="MD" <?php selected( $prefill['state'] ?? '', 'MD' ); ?>>Maryland</option>
                            <option value="MA" <?php selected( $prefill['state'] ?? '', 'MA' ); ?>>Massachusetts</option>
                            <option value="MI" <?php selected( $prefill['state'] ?? '', 'MI' ); ?>>Michigan</option>
                            <option value="MN" <?php selected( $prefill['state'] ?? '', 'MN' ); ?>>Minnesota</option>
                            <option value="MS" <?php selected( $prefill['state'] ?? '', 'MS' ); ?>>Mississippi</option>
                            <option value="MO" <?php selected( $prefill['state'] ?? '', 'MO' ); ?>>Missouri</option>
                            <option value="MT" <?php selected( $prefill['state'] ?? '', 'MT' ); ?>>Montana</option>
                            <option value="NE" <?php selected( $prefill['state'] ?? '', 'NE' ); ?>>Nebraska</option>
                            <option value="NV" <?php selected( $prefill['state'] ?? '', 'NV' ); ?>>Nevada</option>
                            <option value="NH" <?php selected( $prefill['state'] ?? '', 'NH' ); ?>>New Hampshire</option>
                            <option value="NJ" <?php selected( $prefill['state'] ?? '', 'NJ' ); ?>>New Jersey</option>
                            <option value="NM" <?php selected( $prefill['state'] ?? '', 'NM' ); ?>>New Mexico</option>
                            <option value="NY" <?php selected( $prefill['state'] ?? '', 'NY' ); ?>>New York</option>
                            <option value="NC" <?php selected( $prefill['state'] ?? '', 'NC' ); ?>>North Carolina</option>
                            <option value="ND" <?php selected( $prefill['state'] ?? '', 'ND' ); ?>>North Dakota</option>
                            <option value="OH" <?php selected( $prefill['state'] ?? '', 'OH' ); ?>>Ohio</option>
                            <option value="OK" <?php selected( $prefill['state'] ?? '', 'OK' ); ?>>Oklahoma</option>
                            <option value="OR" <?php selected( $prefill['state'] ?? '', 'OR' ); ?>>Oregon</option>
                            <option value="PA" <?php selected( $prefill['state'] ?? '', 'PA' ); ?>>Pennsylvania</option>
                            <option value="RI" <?php selected( $prefill['state'] ?? '', 'RI' ); ?>>Rhode Island</option>
                            <option value="SC" <?php selected( $prefill['state'] ?? '', 'SC' ); ?>>South Carolina</option>
                            <option value="SD" <?php selected( $prefill['state'] ?? '', 'SD' ); ?>>South Dakota</option>
                            <option value="TN" <?php selected( $prefill['state'] ?? '', 'TN' ); ?>>Tennessee</option>
                            <option value="TX" <?php selected( $prefill['state'] ?? '', 'TX' ); ?>>Texas</option>
                            <option value="UT" <?php selected( $prefill['state'] ?? '', 'UT' ); ?>>Utah</option>
                            <option value="VT" <?php selected( $prefill['state'] ?? '', 'VT' ); ?>>Vermont</option>
                            <option value="VA" <?php selected( $prefill['state'] ?? '', 'VA' ); ?>>Virginia</option>
                            <option value="WA" <?php selected( $prefill['state'] ?? '', 'WA' ); ?>>Washington</option>
                            <option value="WV" <?php selected( $prefill['state'] ?? '', 'WV' ); ?>>West Virginia</option>
                            <option value="WI" <?php selected( $prefill['state'] ?? '', 'WI' ); ?>>Wisconsin</option>
                            <option value="WY" <?php selected( $prefill['state'] ?? '', 'WY' ); ?>>Wyoming</option>
                        </select>
                    </div>
                    <div>
                        <label for="zip">ZIP Code *</label>
                        <input type="text" id="zip" name="zip" placeholder="e.g. 78701" 
                               value="<?php echo esc_attr( $prefill['zip'] ?? '' ); ?>" required />
                    </div>
                </div>

                <!-- Project Details -->
                <div>
                    <label for="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required>
                        <option value="">Select Project Type</option>
                        <option value="home-renovation" <?php selected( $prefill['projectType'] ?? '', 'home-renovation' ); ?>>Home Renovation</option>
                        <option value="commercial-const" <?php selected( $prefill['projectType'] ?? '', 'commercial-const' ); ?>>Commercial Construction</option>
                        <option value="equipment" <?php selected( $prefill['projectType'] ?? '', 'equipment' ); ?>>Equipment Purchase</option>
                        <option value="business-expansion" <?php selected( $prefill['projectType'] ?? '', 'business-expansion' ); ?>>Business Expansion</option>
                        <option value="real-estate" <?php selected( $prefill['projectType'] ?? '', 'real-estate' ); ?>>Real Estate</option>
                        <option value="other" <?php selected( $prefill['projectType'] ?? '', 'other' ); ?>>Other</option>
                    </select>
                </div>

                <div>
                    <label for="projectDetails">Project Details *</label>
                    <textarea id="projectDetails" name="projectDetails" placeholder="Describe your project goals and requirements..." rows="5" required><?php echo esc_textarea( $prefill['projectDetails'] ?? '' ); ?></textarea>
                </div>

                <!-- Amount & Date -->
                <div class="form-row">
                    <div>
                        <label for="projectAmount">Total Project Amount ($) *</label>
                        <input type="number" id="projectAmount" name="projectAmount" placeholder="e.g. 150000" min="0" step="1000"
                               value="<?php echo esc_attr( $prefill['projectAmount'] ?? '' ); ?>" required />
                    </div>
                    <div>
                        <label for="startDate">Preferred Start Date *</label>
                        <input type="date" id="startDate" name="startDate" 
                               value="<?php echo esc_attr( $prefill['startDate'] ?? '' ); ?>" required />
                    </div>
                </div>

                <!-- Submit -->
                <button type="submit" class="financing-app-submit">
                    <?php echo esc_html( $a['buttonText'] ); ?>
                </button>

                <p class="financing-app-encrypted">
                    🔒 Your information is secured with 256-bit encryption
                </p>
            </form>
        </div>
    </section>
    <?php

    return ob_get_clean();
}

// Financing Results Renderer (Block 45)
function logiweb_render_financing_results( $attributes ) {
    $defaults = array(
        'resultsTitle' => 'Choose Your Financing Partner',
        'resultsSubtitle' => "We've matched you with financing options based on your project details.",
        'editBtnText' => 'Edit Info',
        'formPageUrl' => '/apply-now/',
        'bottomCta' => 'Not sure which option is right for you?',
        'bottomPhone' => '(555) 555-0123',
        'bottomMsg' => 'Speak with a Specialist',
        'options' => array(
            array(
                'name' => 'Greensky',
                'initials' => 'GS',
                'logoColor' => '#22c55e',
                'rating' => '4.8',
                'minScore' => '640+',
                'apr' => '0% - 12.99%',
                'terms' => '12 - 120 months',
                'benefitsText' => "Same-day approval\n6% promotional rates\nNo prepayment penalties",
                'applyUrl' => '#',
            ),
            array(
                'name' => 'Synchrony',
                'initials' => 'SY',
                'logoColor' => '#2563eb',
                'rating' => '4.7',
                'minScore' => '600+',
                'apr' => '0% - 14.99%',
                'terms' => '6 - 84 months',
                'benefitsText' => "Promotional financing\nFlexible terms\nQuick approval",
                'applyUrl' => '#',
            ),
            array(
                'name' => 'Wells Fargo',
                'initials' => 'WF',
                'logoColor' => '#dc2626',
                'rating' => '4.6',
                'minScore' => '660+',
                'apr' => '6.99% - 15.99%',
                'terms' => '24 - 144 months',
                'benefitsText' => "High loan limits\nCompetitive rates\nEstablished lender",
                'applyUrl' => '#',
            ),
        ),
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $app_id = isset( $_GET['app'] ) ? intval( $_GET['app'] ) : null;

    if ( ! $app_id ) {
        return '<p style="text-align: center; padding: 40px; color: #999;">No application found. Please start from the application form.</p>';
    }

    $post = get_post( $app_id );
    if ( ! $post || 'financing_app' !== $post->post_type ) {
        return '<p style="text-align: center; padding: 40px; color: #999;">Invalid application ID.</p>';
    }

    $app_data = get_post_meta( $post->ID, '_app_data', true );
    $form_page_url = isset( $a['formPageUrl'] ) ? trim( (string) $a['formPageUrl'] ) : '';
    if ( '' === $form_page_url ) {
        $form_page_url = '/apply-now/';
    }
    if ( false === strpos( $form_page_url, '://' ) ) {
        $form_page_url = home_url( '/' . ltrim( $form_page_url, '/' ) );
    }
    $edit_info_url = add_query_arg( array( 'edit' => $app_id ), $form_page_url );

    $raw_options = isset( $a['options'] ) && is_array( $a['options'] ) ? $a['options'] : array();
    $financing_options = array();

    foreach ( $raw_options as $raw_option ) {
        if ( ! is_array( $raw_option ) ) {
            continue;
        }

        $logo_color = isset( $raw_option['logoColor'] ) ? sanitize_hex_color( (string) $raw_option['logoColor'] ) : '';
        if ( ! $logo_color ) {
            $logo_color = '#3654de';
        }

        $benefits_text = isset( $raw_option['benefitsText'] ) ? (string) $raw_option['benefitsText'] : '';
        $benefits = array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $benefits_text ) ) ) );

        if ( empty( $benefits ) ) {
            $benefits = array( 'Flexible options', 'Transparent terms', 'Fast application' );
        }

        $financing_options[] = array(
            'name' => isset( $raw_option['name'] ) ? sanitize_text_field( (string) $raw_option['name'] ) : 'Partner',
            'initials' => isset( $raw_option['initials'] ) ? sanitize_text_field( (string) $raw_option['initials'] ) : 'NA',
            'logo_color' => $logo_color,
            'rating' => isset( $raw_option['rating'] ) ? sanitize_text_field( (string) $raw_option['rating'] ) : '4.5',
            'min_score' => isset( $raw_option['minScore'] ) ? sanitize_text_field( (string) $raw_option['minScore'] ) : 'N/A',
            'apr' => isset( $raw_option['apr'] ) ? sanitize_text_field( (string) $raw_option['apr'] ) : 'N/A',
            'terms' => isset( $raw_option['terms'] ) ? sanitize_text_field( (string) $raw_option['terms'] ) : 'N/A',
            'benefits' => $benefits,
            'apply_url' => isset( $raw_option['applyUrl'] ) ? esc_url_raw( (string) $raw_option['applyUrl'] ) : '#',
        );
    }

    if ( empty( $financing_options ) ) {
        $financing_options[] = array(
            'name' => 'Partner',
            'initials' => 'NA',
            'logo_color' => '#3654de',
            'rating' => '4.5',
            'min_score' => 'N/A',
            'apr' => 'N/A',
            'terms' => 'N/A',
            'benefits' => array( 'Flexible options', 'Transparent terms', 'Fast application' ),
            'apply_url' => '#',
        );
    }

    ob_start();
    ?>
    <section class="financing-results-block">
        <div class="financing-results-inner">
            <div class="financing-results-header">
                <h2 class="financing-results-title"><?php echo wp_kses_post( $a['resultsTitle'] ); ?></h2>
                <p class="financing-results-subtitle"><?php echo wp_kses_post( $a['resultsSubtitle'] ); ?></p>
                
                <div class="financing-results-summary">
                    <div class="summary-item">
                        <span>Project for</span>
                        <strong><?php echo esc_html( trim( (string) ( $app_data['firstName'] ?? '' ) . ' ' . (string) ( $app_data['lastName'] ?? '' ) ) ?: 'Applicant' ); ?></strong>
                    </div>
                    <div class="summary-item">
                        <span>Project Type</span>
                        <strong><?php echo esc_html( ucfirst( str_replace( '-', ' ', $app_data['projectType'] ?? 'N/A' )) ); ?></strong>
                    </div>
                    <div class="summary-item">
                        <span>Amount</span>
                        <strong>$<?php echo esc_html( number_format( intval( $app_data['projectAmount'] ?? 0 )) ); ?></strong>
                    </div>
                    <a href="<?php echo esc_url( $edit_info_url ); ?>" class="btn-edit-info">
                        ✎ <?php echo esc_html( $a['editBtnText'] ); ?>
                    </a>
                </div>
            </div>

            <div class="financing-results-grid">
                <?php foreach ( $financing_options as $option ) : ?>
                    <div class="financing-option-card" style="border-top: 4px solid <?php echo esc_attr( $option['logo_color'] ); ?>">
                        <div class="option-logo" style="background-color: <?php echo esc_attr( $option['logo_color'] ); ?>">
                            <?php echo esc_html( $option['initials'] ); ?>
                        </div>
                        <h3 class="option-name"><?php echo esc_html( $option['name'] ); ?></h3>
                        <p class="option-rating">⭐ <?php echo esc_html( $option['rating'] ); ?></p>

                        <ul class="option-details">
                            <li><strong>Min. Credit Score:</strong> <span><?php echo esc_html( $option['min_score'] ); ?></span></li>
                            <li><strong>APR Range:</strong> <span><?php echo esc_html( $option['apr'] ); ?></span></li>
                            <li><strong>Terms:</strong> <span><?php echo esc_html( $option['terms'] ); ?></span></li>
                        </ul>

                        <ul class="option-benefits">
                            <?php foreach ( $option['benefits'] as $benefit ) : ?>
                                <li>
                                    <span class="benefit-checkmark">✓</span>
                                    <?php echo esc_html( $benefit ); ?>
                                </li>
                            <?php endforeach; ?>
                        </ul>

                        <a href="<?php echo esc_url( $option['apply_url'] ); ?>" class="btn-apply" style="background-color: <?php echo esc_attr( $option['logo_color'] ); ?>">
                            Apply Now →
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="financing-results-bottom">
                <p class="bottom-cta-text"><?php echo esc_html( $a['bottomCta'] ); ?></p>
                <div class="bottom-actions">
                    <a href="tel:<?php echo preg_replace( '/\D/', '', $a['bottomPhone'] ); ?>" class="btn-action btn-phone">
                        📞 Call Us: <?php echo esc_html( $a['bottomPhone'] ); ?>
                    </a>
                    <a href="#contact" class="btn-action btn-message">
                        💬 <?php echo esc_html( $a['bottomMsg'] ); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}


