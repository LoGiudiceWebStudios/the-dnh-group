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

    register_post_type('financing_partner', array(
        'public'       => false,
        'show_ui'      => true,
        'show_in_menu' => true,
        'supports'     => array('title'),
        'labels'       => array(
            'name'          => 'Financing Partners',
            'singular_name' => 'Financing Partner',
            'add_new_item'  => 'Add Financing Partner',
            'edit_item'     => 'Edit Financing Partner',
        ),
        'menu_icon'    => 'dashicons-money-alt',
    ));

    register_post_meta('financing_app', '_app_data', array(
        'type'         => 'object',
        'show_in_rest' => true,
        'single'       => true,
    ));
});

add_action( 'add_meta_boxes', function() {
        add_meta_box(
                'logiweb_financing_partner_meta',
                'Partner Details & Filters',
                'logiweb_render_financing_partner_metabox',
                'financing_partner',
                'normal',
                'high'
        );
} );

function logiweb_render_financing_partner_metabox( $post ) {
        wp_nonce_field( 'logiweb_financing_partner_save', 'logiweb_financing_partner_nonce' );

        $meta = array(
                'initials'          => get_post_meta( $post->ID, '_partner_initials', true ),
                'logo_color'        => get_post_meta( $post->ID, '_partner_logo_color', true ),
                'rating'            => get_post_meta( $post->ID, '_partner_rating', true ),
                'min_credit_score'  => get_post_meta( $post->ID, '_partner_min_credit_score', true ),
                'min_amount'        => get_post_meta( $post->ID, '_partner_min_amount', true ),
                'max_amount'        => get_post_meta( $post->ID, '_partner_max_amount', true ),
                'apr_range'         => get_post_meta( $post->ID, '_partner_apr_range', true ),
                'terms'             => get_post_meta( $post->ID, '_partner_terms', true ),
                'project_types'     => get_post_meta( $post->ID, '_partner_project_types', true ),
                'benefits'          => get_post_meta( $post->ID, '_partner_benefits', true ),
                'apply_url'         => get_post_meta( $post->ID, '_partner_apply_url', true ),
        );

        ?>
        <style>
            .logiweb-partner-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
            .logiweb-partner-grid label{display:flex;flex-direction:column;gap:4px;font-weight:600}
            .logiweb-partner-grid input,.logiweb-partner-grid textarea{width:100%}
            .logiweb-partner-grid .full{grid-column:1/-1}
        </style>
        <div class="logiweb-partner-grid">
            <label>Initials
                <input type="text" name="partner_initials" value="<?php echo esc_attr( (string) $meta['initials'] ); ?>" placeholder="GS">
            </label>
            <label>Logo Color (hex)
                <input type="text" name="partner_logo_color" value="<?php echo esc_attr( (string) $meta['logo_color'] ); ?>" placeholder="#67b354">
            </label>
            <label>Rating
                <input type="text" name="partner_rating" value="<?php echo esc_attr( (string) $meta['rating'] ); ?>" placeholder="4.8">
            </label>
            <label>Min Credit Score
                <input type="number" name="partner_min_credit_score" value="<?php echo esc_attr( (string) $meta['min_credit_score'] ); ?>" placeholder="650">
            </label>
            <label>Min Project Amount ($)
                <input type="number" name="partner_min_amount" value="<?php echo esc_attr( (string) $meta['min_amount'] ); ?>" placeholder="0">
            </label>
            <label>Max Project Amount ($, optional)
                <input type="number" name="partner_max_amount" value="<?php echo esc_attr( (string) $meta['max_amount'] ); ?>" placeholder="50000">
            </label>
            <label>APR Range
                <input type="text" name="partner_apr_range" value="<?php echo esc_attr( (string) $meta['apr_range'] ); ?>" placeholder="0% - 12.99%">
            </label>
            <label>Terms
                <input type="text" name="partner_terms" value="<?php echo esc_attr( (string) $meta['terms'] ); ?>" placeholder="12 - 120 months">
            </label>
            <label class="full">Project Types (comma separated slugs)
                <input type="text" name="partner_project_types" value="<?php echo esc_attr( (string) $meta['project_types'] ); ?>" placeholder="interior-painting,roofing">
            </label>
            <label class="full">Benefits (one per line)
                <textarea name="partner_benefits" rows="4"><?php echo esc_textarea( (string) $meta['benefits'] ); ?></textarea>
            </label>
            <label class="full">Apply URL
                <input type="url" name="partner_apply_url" value="<?php echo esc_attr( (string) $meta['apply_url'] ); ?>" placeholder="https://...">
            </label>
        </div>
        <?php
}

add_action( 'save_post_financing_partner', function( $post_id ) {
        if ( ! isset( $_POST['logiweb_financing_partner_nonce'] ) ) {
                return;
        }

        if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['logiweb_financing_partner_nonce'] ) ), 'logiweb_financing_partner_save' ) ) {
                return;
        }

        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
                return;
        }

        $fields = array(
                '_partner_initials'         => isset( $_POST['partner_initials'] ) ? sanitize_text_field( wp_unslash( $_POST['partner_initials'] ) ) : '',
                '_partner_logo_color'       => isset( $_POST['partner_logo_color'] ) ? sanitize_text_field( wp_unslash( $_POST['partner_logo_color'] ) ) : '',
                '_partner_rating'           => isset( $_POST['partner_rating'] ) ? sanitize_text_field( wp_unslash( $_POST['partner_rating'] ) ) : '',
                '_partner_min_credit_score' => isset( $_POST['partner_min_credit_score'] ) ? intval( $_POST['partner_min_credit_score'] ) : 0,
                '_partner_min_amount'       => isset( $_POST['partner_min_amount'] ) ? intval( $_POST['partner_min_amount'] ) : 0,
                '_partner_max_amount'       => isset( $_POST['partner_max_amount'] ) ? intval( $_POST['partner_max_amount'] ) : 0,
                '_partner_apr_range'        => isset( $_POST['partner_apr_range'] ) ? sanitize_text_field( wp_unslash( $_POST['partner_apr_range'] ) ) : '',
                '_partner_terms'            => isset( $_POST['partner_terms'] ) ? sanitize_text_field( wp_unslash( $_POST['partner_terms'] ) ) : '',
                '_partner_project_types'    => isset( $_POST['partner_project_types'] ) ? sanitize_text_field( wp_unslash( $_POST['partner_project_types'] ) ) : '',
                '_partner_benefits'         => isset( $_POST['partner_benefits'] ) ? sanitize_textarea_field( wp_unslash( $_POST['partner_benefits'] ) ) : '',
                '_partner_apply_url'        => isset( $_POST['partner_apply_url'] ) ? esc_url_raw( wp_unslash( $_POST['partner_apply_url'] ) ) : '',
        );

        foreach ( $fields as $key => $value ) {
                update_post_meta( $post_id, $key, $value );
        }
} );

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

    $full_name  = isset( $data['fullName'] ) ? sanitize_text_field( (string) $data['fullName'] ) : '';
    $first_name = isset( $data['firstName'] ) ? sanitize_text_field( (string) $data['firstName'] ) : '';
    $last_name  = isset( $data['lastName'] ) ? sanitize_text_field( (string) $data['lastName'] ) : '';

    if ( ( '' === $first_name || '' === $last_name ) && '' !== $full_name ) {
        $parts = preg_split( '/\s+/', trim( $full_name ) );
        if ( is_array( $parts ) && ! empty( $parts ) ) {
            $first_name = isset( $parts[0] ) ? sanitize_text_field( (string) $parts[0] ) : '';
            $last_name  = count( $parts ) > 1 ? sanitize_text_field( implode( ' ', array_slice( $parts, 1 ) ) ) : '-';
        }
    }

    if ( '' === $first_name || '' === $last_name ) {
        return new WP_REST_Response( array(
            'message' => 'First Name and Last Name are required.',
        ), 400 );
    }

    $clean_data = array(
        'fullName'       => $full_name,
        'firstName'      => $first_name,
        'lastName'       => $last_name,
        'email'          => isset( $data['email'] ) ? sanitize_email( (string) $data['email'] ) : '',
        'phone'          => isset( $data['phone'] ) ? sanitize_text_field( (string) $data['phone'] ) : '',
        'street'         => isset( $data['street'] ) ? sanitize_text_field( (string) $data['street'] ) : '',
        'annualIncome'   => isset( $data['annualIncome'] ) ? sanitize_text_field( (string) $data['annualIncome'] ) : '',
        'employmentStatus'=> isset( $data['employmentStatus'] ) ? sanitize_text_field( (string) $data['employmentStatus'] ) : '',
        'creditScoreRange'=> isset( $data['creditScoreRange'] ) ? sanitize_text_field( (string) $data['creditScoreRange'] ) : '',
        'city'           => isset( $data['city'] ) ? sanitize_text_field( (string) $data['city'] ) : '',
        'state'          => isset( $data['state'] ) ? sanitize_text_field( (string) $data['state'] ) : '',
        'zip'            => isset( $data['zip'] ) ? sanitize_text_field( (string) $data['zip'] ) : '',
        'projectType'    => isset( $data['projectType'] ) ? sanitize_text_field( (string) $data['projectType'] ) : '',
        'projectDetails' => isset( $data['projectDetails'] ) ? sanitize_textarea_field( (string) $data['projectDetails'] ) : '',
        'projectAmount'  => isset( $data['projectAmount'] ) ? sanitize_text_field( (string) $data['projectAmount'] ) : '',
        'startDate'      => isset( $data['startDate'] ) ? sanitize_text_field( (string) $data['startDate'] ) : '',
        'additionalNotes'=> isset( $data['additionalNotes'] ) ? sanitize_textarea_field( (string) $data['additionalNotes'] ) : '',
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
    wp_enqueue_script(
        'logiweb-reviews-grid-init',
        plugins_url('reviews-grid-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'reviews-grid-init.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-video-testimonials-init',
        plugins_url('video-testimonials-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'video-testimonials-init.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-reviews-spotlight-init',
        plugins_url('reviews-spotlight-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'reviews-spotlight-init.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-ba-compare-init',
        plugins_url('ba-compare-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'ba-compare-init.js' ),
        true
    );
    wp_enqueue_script(
        'logiweb-painting-faq-compact-init',
        plugins_url('painting-faq-compact-init.js', __FILE__),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'painting-faq-compact-init.js' ),
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
    register_block_type( 'logiweb/custom-block-52', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-53', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-54', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-55', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-56', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-57', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-58', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-59', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_59',
    ));
    register_block_type( 'logiweb/custom-block-60', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-61', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-62', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-63', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-64', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-65', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-66', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_66',
        'attributes'      => array(
            'postsPerPage'  => array( 'type' => 'number',  'default' => 9 ),
            'showExcerpt'   => array( 'type' => 'boolean', 'default' => true ),
            'showAuthor'    => array( 'type' => 'boolean', 'default' => true ),
            'showReadTime'  => array( 'type' => 'boolean', 'default' => true ),
            'filterLabel'   => array( 'type' => 'string',  'default' => 'All' ),
        ),
    ));

    register_block_type( 'logiweb/custom-block-67', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_67',
        'attributes'      => array(
            'badge'   => array( 'type' => 'string', 'default' => 'Behind the Scenes' ),
            'title'   => array( 'type' => 'string', 'default' => 'DNH Video Log' ),
            'tagline' => array( 'type' => 'string', 'default' => 'Watch our crew in action' ),
            'videos'  => array( 'type' => 'array',  'default' => array() ),
        ),
    ));
    register_block_type( 'logiweb/custom-block-68', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_68',
        'attributes'      => array(
            'leftTitle'    => array( 'type' => 'string', 'default' => 'Why Request a Quote from DNH Group?' ),
            'bullet1'      => array( 'type' => 'string', 'default' => 'Free, no-obligation estimates' ),
            'bullet2'      => array( 'type' => 'string', 'default' => 'Detailed, transparent pricing' ),
            'bullet3'      => array( 'type' => 'string', 'default' => 'Expert recommendations tailored to your needs' ),
            'bullet4'      => array( 'type' => 'string', 'default' => 'Flexible scheduling to fit your timeline' ),
            'bullet5'      => array( 'type' => 'string', 'default' => 'Financing options available' ),
            'callTitle'    => array( 'type' => 'string', 'default' => 'Prefer to Call?' ),
            'callPhone'    => array( 'type' => 'string', 'default' => '(555) 123-4567' ),
            'callHours'    => array( 'type' => 'string', 'default' => 'Mon-Fri 8am-6pm, Sat 9am-2pm' ),
            'formTitle'    => array( 'type' => 'string', 'default' => 'Project Information' ),
            'cf7Shortcode' => array( 'type' => 'string', 'default' => '' ),
            'privacyText'  => array( 'type' => 'string', 'default' => 'By submitting, you agree to our Privacy Policy and Terms of Service' ),
        ),
    ));
    register_block_type( 'logiweb/custom-block-69', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-70', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-71', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_71',
        'attributes'      => array(
            'badgeText' => array( 'type' => 'string', 'default' => 'Ohio Project Showcase' ),
            'title'     => array( 'type' => 'string', 'default' => 'Recent Work Across Ohio' ),
            'projects'  => array( 'type' => 'array',  'default' => array() ),
        ),
    ));
    register_block_type( 'logiweb/custom-block-72', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-73', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-74', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-75', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-76', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));
    register_block_type( 'logiweb/custom-block-77', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-78', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_78',
    ));

    register_block_type( 'logiweb/custom-block-80', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_80',
        'attributes'      => array(
            'badge'               => array( 'type' => 'string', 'default' => 'Residential Painting Specialists' ),
            'badgeIcon'           => array( 'type' => 'string', 'default' => 'fa-solid fa-paintbrush' ),
            'titleLine1'          => array( 'type' => 'string', 'default' => 'Studio-Quality Painting.' ),
            'titleHighlight'      => array( 'type' => 'string', 'default' => 'Immaculate' ),
            'titleLine2'          => array( 'type' => 'string', 'default' => 'Execution.' ),
            'description'         => array( 'type' => 'string', 'default' => 'From flawless, crisp interior walls to ultra-durable weather-resistant exterior coatings. The DNH Group delivers sharp, luxury finishes tailored for high-end properties across Ohio, Indiana, and Kentucky.' ),
            'ctaText'             => array( 'type' => 'string', 'default' => 'Schedule Your In-Home Color Consultation' ),
            'ctaUrl'              => array( 'type' => 'string', 'default' => '#' ),
            'backgroundImageUrl'  => array( 'type' => 'string', 'default' => '' ),
        ),
    ));

    register_block_type( 'logiweb/custom-block-81', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_81',
        'attributes'      => array(
            'subtitle'       => array( 'type' => 'string', 'default' => 'Visual Proof' ),
            'titleStart'     => array( 'type' => 'string', 'default' => 'See the' ),
            'titleHighlight' => array( 'type' => 'string', 'default' => 'DNH Difference' ),
            'description'    => array( 'type' => 'string', 'default' => 'Drag the slider to reveal the dramatic transformation. Dated and faded becomes stunning and modern.' ),
            'beforeLabel'    => array( 'type' => 'string', 'default' => 'Before' ),
            'afterLabel'     => array( 'type' => 'string', 'default' => 'After' ),
            'beforeLegend'   => array( 'type' => 'string', 'default' => 'Before - Faded, peeling, outdated' ),
            'afterLegend'    => array( 'type' => 'string', 'default' => 'After - Premium charcoal finish' ),
            'beforeImageUrl' => array( 'type' => 'string', 'default' => '' ),
            'afterImageUrl'  => array( 'type' => 'string', 'default' => '' ),
            'sliderPosition' => array( 'type' => 'number', 'default' => 50 ),
        ),
    ));

    register_block_type( 'logiweb/custom-block-82', array(
        'editor_script'   => 'logiweb-blocks-editor',
        'editor_style'    => 'logiweb-blocks-editor-styles',
        'style'           => 'logiweb-blocks-frontend-styles',
        'render_callback' => 'logiweb_render_block_82',
        'attributes'      => array(
            'badge'               => array( 'type' => 'string', 'default' => 'Specialty Finishes' ),
            'titleStart'          => array( 'type' => 'string', 'default' => 'Fine-Finish & Accent' ),
            'titleHighlight'      => array( 'type' => 'string', 'default' => 'Details' ),
            'description'         => array( 'type' => 'string', 'default' => 'High-end clients love custom details. Our specialty fine-finish work transforms ordinary surfaces into showroom-quality centerpieces that define a room.' ),
            'imageUrl'            => array( 'type' => 'string', 'default' => '' ),
            'imageAlt'            => array( 'type' => 'string', 'default' => '' ),
            'imageCaptionTitle'   => array( 'type' => 'string', 'default' => 'Factory-Smooth Cabinet Finish' ),
            'imageCaptionSubtitle'=> array( 'type' => 'string', 'default' => 'Navy & Gold Luxury Kitchen' ),
            'features'            => array( 'type' => 'array', 'default' => array() ),
        ),
    ));

    register_block_type( 'logiweb/custom-block-88', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-89', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-90', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

    register_block_type( 'logiweb/custom-block-92', array(
        'editor_script' => 'logiweb-blocks-editor',
        'editor_style'  => 'logiweb-blocks-editor-styles',
        'style'         => 'logiweb-blocks-frontend-styles',
    ));

}
add_action( 'init', 'logiweb_register_blocks' );

function logiweb_render_block_80( $attributes ) {
    $defaults = array(
        'badge'              => 'Residential Painting Specialists',
        'badgeIcon'          => 'fa-solid fa-paintbrush',
        'titleLine1'         => 'Studio-Quality Painting.',
        'titleHighlight'     => 'Immaculate',
        'titleLine2'         => 'Execution.',
        'description'        => 'From flawless, crisp interior walls to ultra-durable weather-resistant exterior coatings. The DNH Group delivers sharp, luxury finishes tailored for high-end properties across Ohio, Indiana, and Kentucky.',
        'ctaText'            => 'Schedule Your In-Home Color Consultation',
        'ctaUrl'             => '#',
        'backgroundImageUrl' => '',
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );

    $bg_style = '';
    if ( ! empty( $a['backgroundImageUrl'] ) ) {
        $bg_style = ' style="background-image: url(' . esc_url( $a['backgroundImageUrl'] ) . ');"';
    }

    ob_start();
    ?>
    <section class="hero-split-block"<?php echo $bg_style; ?>>
        <div class="hero-split-overlay" aria-hidden="true"></div>
        <div class="hero-split-content">
            <p class="hero-split-badge">
                <i class="<?php echo esc_attr( $a['badgeIcon'] ); ?>" aria-hidden="true"></i>
                <span><?php echo esc_html( $a['badge'] ); ?></span>
            </p>
            <h1 class="hero-split-title">
                <?php echo esc_html( $a['titleLine1'] ); ?><br>
                <span class="hero-split-title-highlight"><?php echo esc_html( $a['titleHighlight'] ); ?></span> <?php echo esc_html( $a['titleLine2'] ); ?>
            </h1>
            <p class="hero-split-description"><?php echo esc_html( $a['description'] ); ?></p>
            <a href="<?php echo esc_url( $a['ctaUrl'] ); ?>" class="hero-split-cta btn-primary">
                <?php echo esc_html( $a['ctaText'] ); ?> <span class="hero-split-cta-arrow" aria-hidden="true">→</span>
            </a>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function logiweb_render_block_81( $attributes ) {
    $defaults = array(
        'subtitle'       => 'Visual Proof',
        'titleStart'     => 'See the',
        'titleHighlight' => 'DNH Difference',
        'description'    => 'Drag the slider to reveal the dramatic transformation. Dated and faded becomes stunning and modern.',
        'beforeLabel'    => 'Before',
        'afterLabel'     => 'After',
        'beforeLegend'   => 'Before - Faded, peeling, outdated',
        'afterLegend'    => 'After - Premium charcoal finish',
        'beforeImageUrl' => '',
        'afterImageUrl'  => '',
        'sliderPosition' => 50,
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $position = isset( $a['sliderPosition'] ) ? (int) $a['sliderPosition'] : 50;
    $position = min( 100, max( 0, $position ) );

    ob_start();
    ?>
    <section class="ba-compare-block" data-block="ba-compare">
        <div class="ba-compare-inner">
            <p class="ba-compare-subtitle"><?php echo esc_html( $a['subtitle'] ); ?></p>

            <h2 class="ba-compare-title">
                <?php echo esc_html( $a['titleStart'] ); ?>
                <span class="ba-compare-title-highlight"><?php echo esc_html( $a['titleHighlight'] ); ?></span>
            </h2>

            <p class="ba-compare-description"><?php echo esc_html( $a['description'] ); ?></p>

            <div class="ba-compare-frame">
                <div class="ba-compare-track" data-position="<?php echo esc_attr( $position ); ?>">
                    <?php if ( ! empty( $a['afterImageUrl'] ) ) : ?>
                        <img class="ba-compare-image ba-compare-image-after" src="<?php echo esc_url( $a['afterImageUrl'] ); ?>" alt="<?php echo esc_attr( $a['afterLabel'] ); ?>">
                    <?php else : ?>
                        <div class="ba-compare-placeholder">Upload after image</div>
                    <?php endif; ?>

                    <div class="ba-compare-before-clip" style="width: <?php echo esc_attr( $position ); ?>%;">
                        <?php if ( ! empty( $a['beforeImageUrl'] ) ) : ?>
                            <img class="ba-compare-image ba-compare-image-before" src="<?php echo esc_url( $a['beforeImageUrl'] ); ?>" alt="<?php echo esc_attr( $a['beforeLabel'] ); ?>">
                        <?php else : ?>
                            <div class="ba-compare-placeholder">Upload before image</div>
                        <?php endif; ?>
                    </div>

                    <input
                        type="range"
                        class="ba-compare-range"
                        min="0"
                        max="100"
                        value="<?php echo esc_attr( $position ); ?>"
                        aria-label="Drag comparison slider"
                    >

                    <div class="ba-compare-divider" style="left: <?php echo esc_attr( $position ); ?>%;">
                        <div class="ba-compare-handle">
                            <span>||</span>
                        </div>
                    </div>

                    <div class="ba-compare-tag ba-compare-tag-before"><?php echo esc_html( $a['beforeLabel'] ); ?></div>
                    <div class="ba-compare-tag ba-compare-tag-after"><?php echo esc_html( $a['afterLabel'] ); ?></div>
                </div>
            </div>

            <div class="ba-compare-legend">
                <p><?php echo esc_html( $a['beforeLegend'] ); ?></p>
                <p><?php echo esc_html( $a['afterLegend'] ); ?></p>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}

function logiweb_render_block_82( $attributes ) {
    $defaults = array(
        'badge'                => 'Specialty Finishes',
        'titleStart'           => 'Fine-Finish & Accent',
        'titleHighlight'       => 'Details',
        'description'          => 'High-end clients love custom details. Our specialty fine-finish work transforms ordinary surfaces into showroom-quality centerpieces that define a room.',
        'imageUrl'             => '',
        'imageAlt'             => '',
        'imageCaptionTitle'    => 'Factory-Smooth Cabinet Finish',
        'imageCaptionSubtitle' => 'Navy & Gold Luxury Kitchen',
        'features'             => array(
            array(
                'icon'        => 'fa-solid fa-spray-can-sparkles',
                'title'       => 'Fine-Finish Spraying',
                'description' => 'Factory-smooth cabinet painting, built-ins, wainscoting, and intricate crown molding. Our spray booth technique delivers a finish indistinguishable from original manufacturing.',
            ),
            array(
                'icon'        => 'fa-solid fa-palette',
                'title'       => 'Expert Color Consultation',
                'description' => 'Professional design guidance to select the perfect modern palettes - crisp whites, warm neutrals, and bold contemporary dark accents that complement your specific lighting and floor plans.',
            ),
            array(
                'icon'        => 'fa-solid fa-check',
                'title'       => 'Accent Walls & Feature Details',
                'description' => 'Statement walls, coffered ceiling details, trim contrast work, and custom stencil applications that add depth, character, and architectural interest to any space.',
            ),
        ),
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $features = isset( $a['features'] ) && is_array( $a['features'] ) && ! empty( $a['features'] ) ? $a['features'] : $defaults['features'];

    ob_start();
    ?>
    <section class="specialty-split-block">
        <div class="specialty-split-inner">
            <div class="specialty-split-media">
                <?php if ( ! empty( $a['imageUrl'] ) ) : ?>
                    <img class="specialty-split-image" src="<?php echo esc_url( $a['imageUrl'] ); ?>" alt="<?php echo esc_attr( $a['imageAlt'] ); ?>">
                <?php else : ?>
                    <div class="specialty-split-image-placeholder">Select image</div>
                <?php endif; ?>
                <div class="specialty-split-caption">
                    <p class="specialty-split-caption-title"><?php echo esc_html( $a['imageCaptionTitle'] ); ?></p>
                    <p class="specialty-split-caption-subtitle"><?php echo esc_html( $a['imageCaptionSubtitle'] ); ?></p>
                </div>
            </div>

            <div class="specialty-split-content">
                <p class="specialty-split-badge"><?php echo esc_html( $a['badge'] ); ?></p>
                <h2 class="specialty-split-title">
                    <?php echo esc_html( $a['titleStart'] ); ?>
                    <span class="specialty-split-title-highlight"><?php echo esc_html( $a['titleHighlight'] ); ?></span>
                </h2>
                <p class="specialty-split-description"><?php echo esc_html( $a['description'] ); ?></p>

                <div class="specialty-split-features">
                    <?php foreach ( $features as $feature ) : ?>
                        <article class="specialty-split-feature-item">
                            <div class="specialty-split-feature-icon">
                                <i class="<?php echo esc_attr( isset( $feature['icon'] ) ? $feature['icon'] : 'fa-solid fa-check' ); ?>" aria-hidden="true"></i>
                            </div>
                            <div class="specialty-split-feature-text">
                                <h3 class="specialty-split-feature-title"><?php echo esc_html( isset( $feature['title'] ) ? $feature['title'] : '' ); ?></h3>
                                <p class="specialty-split-feature-description"><?php echo esc_html( isset( $feature['description'] ) ? $feature['description'] : '' ); ?></p>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}


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

function logiweb_render_block_59( $attributes ) {
    $defaults = array(
        'sectionTitle' => 'Send Us a Message',
        'sectionSubtitle' => "Fill out the form below and we'll respond as soon as possible.",
        'contactForm7Shortcode' => '',
        'scheduleTitle' => 'Prefer to Talk?',
        'scheduleButtonText' => 'Schedule a Call',
        'scheduleButtonUrl' => '#',
        'officeTitle' => 'Office Hours',
        'officeHours' => array(
            array( 'day' => 'Monday - Friday', 'time' => '8:00 AM - 6:00 PM' ),
            array( 'day' => 'Saturday', 'time' => '9:00 AM - 2:00 PM' ),
            array( 'day' => 'Sunday', 'time' => 'Closed' ),
        ),
        'serviceAreasTitle' => 'Service Areas',
        'serviceAreas' => array(
            'Ohio - Cincinnati, Columbus, Cleveland',
            'Kentucky - Louisville, Lexington',
            'Indiana - Indianapolis, Fort Wayne',
        ),
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $office_hours = is_array( $a['officeHours'] ) ? $a['officeHours'] : array();
    $service_areas = is_array( $a['serviceAreas'] ) ? $a['serviceAreas'] : array();
    $shortcode = isset( $a['contactForm7Shortcode'] ) ? trim( (string) $a['contactForm7Shortcode'] ) : '';

    ob_start();
    ?>
    <section class="contact-split-block fade-in-on-scroll" data-block="contact-split">
        <div class="contact-split-inner">
            <div class="contact-split-form-card">
                <h2 class="contact-split-title"><?php echo esc_html( $a['sectionTitle'] ); ?></h2>
                <p class="contact-split-subtitle"><?php echo esc_html( $a['sectionSubtitle'] ); ?></p>

                <div class="contact-split-cf7-wrap">
                    <?php
                    if ( '' !== $shortcode ) {
                        echo do_shortcode( $shortcode );
                    } else {
                        ?>
                        <p class="contact-split-shortcode-empty">
                            Add a Contact Form 7 shortcode in block settings.
                        </p>
                        <?php
                    }
                    ?>
                </div>
            </div>

            <div class="contact-split-side-stack">
                <article class="contact-split-side-card">
                    <h3 class="contact-split-side-title"><?php echo esc_html( $a['scheduleTitle'] ); ?></h3>
                    <a class="contact-split-outline-btn" href="<?php echo esc_url( $a['scheduleButtonUrl'] ); ?>">
                        <i class="fa-regular fa-calendar" aria-hidden="true"></i>
                        <?php echo esc_html( $a['scheduleButtonText'] ); ?>
                    </a>
                </article>

                <article class="contact-split-side-card">
                    <h3 class="contact-split-side-title"><?php echo esc_html( $a['officeTitle'] ); ?></h3>
                    <div class="contact-split-hours-list">
                        <?php foreach ( $office_hours as $item ) :
                            $day = isset( $item['day'] ) ? (string) $item['day'] : '';
                            $time = isset( $item['time'] ) ? (string) $item['time'] : '';
                        ?>
                            <div class="contact-split-hours-row">
                                <span><?php echo esc_html( $day ); ?></span>
                                <strong><?php echo esc_html( $time ); ?></strong>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </article>

                <article class="contact-split-side-card">
                    <h3 class="contact-split-side-title"><?php echo esc_html( $a['serviceAreasTitle'] ); ?></h3>
                    <div class="contact-split-areas-list">
                        <?php foreach ( $service_areas as $area ) : ?>
                            <p><?php echo esc_html( (string) $area ); ?></p>
                        <?php endforeach; ?>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}

function logiweb_get_financing_partners_for_wizard() {
        $partners = array();

        $query = new WP_Query( array(
                'post_type'      => 'financing_partner',
                'post_status'    => 'publish',
                'posts_per_page' => -1,
                'orderby'        => 'menu_order title',
                'order'          => 'ASC',
        ) );

        if ( $query->have_posts() ) {
                foreach ( $query->posts as $post ) {
                        $id = (int) $post->ID;
                        $benefits_text = (string) get_post_meta( $id, '_partner_benefits', true );
                        $benefits = array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $benefits_text ) ) ) );

                        if ( empty( $benefits ) ) {
                                $benefits = array( 'Flexible options', 'Transparent terms', 'Fast application' );
                        }

                        $partners[] = array(
                                'name'             => get_the_title( $id ),
                                'initials'         => (string) get_post_meta( $id, '_partner_initials', true ),
                                'logo_color'       => (string) get_post_meta( $id, '_partner_logo_color', true ),
                                'rating'           => (string) get_post_meta( $id, '_partner_rating', true ),
                                'min_credit_score' => (int) get_post_meta( $id, '_partner_min_credit_score', true ),
                                'min_amount'       => (int) get_post_meta( $id, '_partner_min_amount', true ),
                                'max_amount'       => (int) get_post_meta( $id, '_partner_max_amount', true ),
                                'apr_range'        => (string) get_post_meta( $id, '_partner_apr_range', true ),
                                'terms'            => (string) get_post_meta( $id, '_partner_terms', true ),
                                'project_types'    => (string) get_post_meta( $id, '_partner_project_types', true ),
                                'benefits'         => $benefits,
                                'apply_url'        => (string) get_post_meta( $id, '_partner_apply_url', true ),
                        );
                }
        }

        wp_reset_postdata();

        if ( ! empty( $partners ) ) {
                return $partners;
        }

        return array(
                array(
                        'name'             => 'Greensky',
                        'initials'         => 'Gr',
                        'logo_color'       => '#6fc265',
                        'rating'           => '4.8',
                        'min_credit_score' => 650,
                        'min_amount'       => 0,
                        'max_amount'       => 0,
                        'apr_range'        => '0% - 12.99%',
                        'terms'            => '12 - 120 months',
                        'project_types'    => '',
                        'benefits'         => array( 'Same-day approval', '0% promotional rates', 'No prepayment penalties' ),
                        'apply_url'        => '#',
                ),
                array(
                        'name'             => 'Synchrony',
                        'initials'         => 'Sy',
                        'logo_color'       => '#5d81ea',
                        'rating'           => '4.7',
                        'min_credit_score' => 600,
                        'min_amount'       => 0,
                        'max_amount'       => 0,
                        'apr_range'        => '0% - 14.99%',
                        'terms'            => '6 - 84 months',
                        'project_types'    => '',
                        'benefits'         => array( 'Promotional financing', 'Flexible terms', 'Online account management' ),
                        'apply_url'        => '#',
                ),
        );
}

// Application Form Renderer (Block 44)
function logiweb_render_application_form( $attributes ) {
        $defaults = array(
                'formTitle'       => 'Choose Your Financing Partner',
                'formDescription' => 'We\'ve matched you with financing options based on your project details.',
                'buttonText'      => 'Continue',
        );

        $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
        $app_id = isset( $_GET['edit'] ) ? intval( $_GET['edit'] ) : null;
        $prefill = array();

        if ( $app_id ) {
                $post = get_post( $app_id );
                if ( $post && 'financing_app' === $post->post_type ) {
                        $prefill = get_post_meta( $post->ID, '_app_data', true ) ?: array();
                }
        }

        $full_name_prefill = trim( (string) ( $prefill['firstName'] ?? '' ) . ' ' . (string) ( $prefill['lastName'] ?? '' ) );
        $partners = logiweb_get_financing_partners_for_wizard();

        ob_start();
        ?>
        <section class="financing-app-form-block financing-wizard-block">
            <div class="financing-wizard-shell">
                <form class="financing-wizard-form financing-app-form" novalidate>
                    <div class="financing-wizard-progress-wrap">
                        <div class="financing-wizard-progress-track">
                            <span class="financing-wizard-progress-bar" data-progress-bar></span>
                        </div>
                        <div class="financing-wizard-step-labels">
                            <span class="is-active" data-step-label="1">Personal Info</span>
                            <span data-step-label="2">Project Details</span>
                            <span data-step-label="3">Select Financing</span>
                        </div>
                    </div>

                    <section class="financing-wizard-panel is-active" data-step-panel="1">
                        <div class="financing-wizard-card">
                            <h3 class="financing-wizard-title">Personal Information</h3>

                            <div class="financing-wizard-grid two-col">
                                <input type="text" name="fullName" placeholder="Full Name" value="<?php echo esc_attr( $full_name_prefill ); ?>" required>
                                <input type="email" name="email" placeholder="Email Address" value="<?php echo esc_attr( $prefill['email'] ?? '' ); ?>" required>
                                <input type="tel" name="phone" placeholder="Phone Number" value="<?php echo esc_attr( $prefill['phone'] ?? '' ); ?>" required>
                                <input type="text" name="street" placeholder="Address" value="<?php echo esc_attr( $prefill['street'] ?? '' ); ?>" required>
                                <input type="number" name="annualIncome" placeholder="Annual Income" min="0" step="1000" value="<?php echo esc_attr( $prefill['annualIncome'] ?? '' ); ?>" required>
                                <select name="employmentStatus" required>
                                    <option value="">Employment Status</option>
                                    <option value="employed" <?php selected( $prefill['employmentStatus'] ?? '', 'employed' ); ?>>Employed</option>
                                    <option value="self-employed" <?php selected( $prefill['employmentStatus'] ?? '', 'self-employed' ); ?>>Self Employed</option>
                                    <option value="retired" <?php selected( $prefill['employmentStatus'] ?? '', 'retired' ); ?>>Retired</option>
                                    <option value="other" <?php selected( $prefill['employmentStatus'] ?? '', 'other' ); ?>>Other</option>
                                </select>
                            </div>

                            <div class="financing-wizard-grid one-col">
                                <select name="creditScoreRange" required>
                                    <option value="">Credit Score Range</option>
                                    <option value="580" <?php selected( $prefill['creditScoreRange'] ?? '', '580' ); ?>>Below 600</option>
                                    <option value="620" <?php selected( $prefill['creditScoreRange'] ?? '', '620' ); ?>>600 - 649</option>
                                    <option value="650" <?php selected( $prefill['creditScoreRange'] ?? '', '650' ); ?>>650 - 699</option>
                                    <option value="700" <?php selected( $prefill['creditScoreRange'] ?? '', '700' ); ?>>700 - 749</option>
                                    <option value="750" <?php selected( $prefill['creditScoreRange'] ?? '', '750' ); ?>>750+</option>
                                </select>
                            </div>

                            <div class="financing-wizard-actions end">
                                <button type="button" class="wizard-btn wizard-btn-primary" data-step-next="2"><?php echo esc_html( $a['buttonText'] ); ?> <span aria-hidden="true">→</span></button>
                            </div>
                        </div>
                    </section>

                    <section class="financing-wizard-panel" data-step-panel="2">
                        <div class="financing-wizard-card">
                            <h3 class="financing-wizard-title">Project Details</h3>

                            <div class="financing-wizard-grid one-col">
                                <select name="projectType" required>
                                    <option value="">Project Type</option>
                                    <option value="interior-painting" <?php selected( $prefill['projectType'] ?? '', 'interior-painting' ); ?>>Interior Painting</option>
                                    <option value="exterior-painting" <?php selected( $prefill['projectType'] ?? '', 'exterior-painting' ); ?>>Exterior Painting</option>
                                    <option value="roofing" <?php selected( $prefill['projectType'] ?? '', 'roofing' ); ?>>Roofing</option>
                                    <option value="siding" <?php selected( $prefill['projectType'] ?? '', 'siding' ); ?>>Siding</option>
                                    <option value="kitchen-remodel" <?php selected( $prefill['projectType'] ?? '', 'kitchen-remodel' ); ?>>Kitchen Remodel</option>
                                    <option value="bath-remodel" <?php selected( $prefill['projectType'] ?? '', 'bath-remodel' ); ?>>Bath Remodel</option>
                                    <option value="other" <?php selected( $prefill['projectType'] ?? '', 'other' ); ?>>Other</option>
                                </select>

                                <textarea name="projectDetails" placeholder="Project Description" rows="4" required><?php echo esc_textarea( $prefill['projectDetails'] ?? '' ); ?></textarea>

                                <input type="number" name="projectAmount" placeholder="Estimated Cost ($)" min="0" step="500" value="<?php echo esc_attr( $prefill['projectAmount'] ?? '' ); ?>" required>

                                <input type="date" name="startDate" value="<?php echo esc_attr( $prefill['startDate'] ?? '' ); ?>" required>

                                <textarea name="additionalNotes" placeholder="Additional Notes" rows="3"><?php echo esc_textarea( $prefill['additionalNotes'] ?? '' ); ?></textarea>
                            </div>

                            <div class="financing-wizard-actions between">
                                <button type="button" class="wizard-btn wizard-btn-secondary" data-step-back="1"><span aria-hidden="true">←</span> Back</button>
                                <button type="button" class="wizard-btn wizard-btn-primary" data-step-next="3">Continue <span aria-hidden="true">→</span></button>
                            </div>
                        </div>
                    </section>

                    <section class="financing-wizard-panel" data-step-panel="3">
                        <div class="financing-wizard-summary-card">
                            <div class="summary-meta">
                                <div><span>Project Type</span><strong data-summary-project>—</strong></div>
                                <div><span>Amount</span><strong data-summary-amount>$0</strong></div>
                            </div>
                            <button type="button" class="wizard-btn wizard-btn-secondary" data-step-edit="1">Edit Info</button>
                        </div>

                        <div class="financing-wizard-header-copy">
                            <h3><?php echo esc_html( $a['formTitle'] ); ?></h3>
                            <p><?php echo esc_html( $a['formDescription'] ); ?></p>
                        </div>

                        <div class="financing-wizard-partners" data-partners-list>
                            <?php foreach ( $partners as $partner ) :
                                $initials = trim( (string) ( $partner['initials'] ?? '' ) );
                                if ( '' === $initials ) {
                                        $initials = strtoupper( substr( (string) ( $partner['name'] ?? 'NA' ), 0, 2 ) );
                                }
                                $logo_color = sanitize_hex_color( (string) ( $partner['logo_color'] ?? '' ) );
                                if ( ! $logo_color ) {
                                        $logo_color = '#3654de';
                                }
                                $benefits = isset( $partner['benefits'] ) && is_array( $partner['benefits'] ) ? $partner['benefits'] : array();
                            ?>
                                <article
                                    class="financing-wizard-partner-card"
                                    data-min-credit="<?php echo esc_attr( (int) ( $partner['min_credit_score'] ?? 0 ) ); ?>"
                                    data-min-amount="<?php echo esc_attr( (int) ( $partner['min_amount'] ?? 0 ) ); ?>"
                                    data-max-amount="<?php echo esc_attr( (int) ( $partner['max_amount'] ?? 0 ) ); ?>"
                                    data-project-types="<?php echo esc_attr( strtolower( trim( (string) ( $partner['project_types'] ?? '' ) ) ) ); ?>"
                                >
                                    <div class="partner-head">
                                        <div class="partner-logo" style="background-color: <?php echo esc_attr( $logo_color ); ?>;"><?php echo esc_html( $initials ); ?></div>
                                        <div class="partner-name-wrap">
                                            <h4><?php echo esc_html( (string) ( $partner['name'] ?? 'Partner' ) ); ?></h4>
                                            <p class="partner-rating">⭐ <?php echo esc_html( (string) ( $partner['rating'] ?? '4.5' ) ); ?></p>
                                        </div>
                                        <a class="partner-apply-btn" href="<?php echo esc_url( (string) ( $partner['apply_url'] ?? '#' ) ); ?>" target="_blank" rel="noopener">Apply</a>
                                    </div>

                                    <div class="partner-stats">
                                        <div><span>Min. Credit Score</span><strong><?php echo esc_html( (int) ( $partner['min_credit_score'] ?? 0 ) > 0 ? (string) ( (int) $partner['min_credit_score'] ) . '+' : 'N/A' ); ?></strong></div>
                                        <div><span>APR Range</span><strong><?php echo esc_html( (string) ( $partner['apr_range'] ?? 'N/A' ) ); ?></strong></div>
                                        <div><span>Terms</span><strong><?php echo esc_html( (string) ( $partner['terms'] ?? 'N/A' ) ); ?></strong></div>
                                    </div>

                                    <?php if ( ! empty( $benefits ) ) : ?>
                                        <ul class="partner-benefits">
                                            <?php foreach ( $benefits as $benefit ) : ?>
                                                <li>✓ <?php echo esc_html( (string) $benefit ); ?></li>
                                            <?php endforeach; ?>
                                        </ul>
                                    <?php endif; ?>
                                </article>
                            <?php endforeach; ?>
                        </div>

                        <p class="financing-wizard-empty" data-empty-state hidden>No financing partners match your details yet. Update your info and try again.</p>
                    </section>

                    <p class="financing-app-encrypted">🔒 Your information is secured with 256-bit encryption</p>
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



/* ============================================================
   Block-66 – Blog & Articles Filter (dynamic, server-side)
   ============================================================ */
function logiweb_render_block_66( $attributes ) {
    $per_page    = isset( $attributes['postsPerPage'] )  ? intval( $attributes['postsPerPage'] )   : 9;
    $all_label   = isset( $attributes['filterLabel'] )   ? sanitize_text_field( $attributes['filterLabel'] ) : 'All';
    $featured_label = 'Featured Story';

    $args = array(
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => $per_page,
        'orderby'        => 'date',
        'order'          => 'DESC',
    );
    $query = new WP_Query( $args );
    $total = $query->found_posts;

    $nonce    = wp_create_nonce( 'wp_rest' );
    $rest_url = esc_url( rest_url( 'wp/v2' ) );

    ob_start();
    ?>
    <section
        class="blog-filter-block"
        data-nonce="<?php echo esc_attr( $nonce ); ?>"
        data-per-page="<?php echo esc_attr( $per_page ); ?>"
        data-show-excerpt="<?php echo ! empty( $attributes['showExcerpt'] )   ? 'true' : 'false'; ?>"
        data-show-author="<?php echo ! empty( $attributes['showAuthor'] )    ? 'true' : 'false'; ?>"
        data-show-readtime="<?php echo ! empty( $attributes['showReadTime'] ) ? 'true' : 'false'; ?>"
        data-all-label="<?php echo esc_attr( $all_label ); ?>"
        data-featured-label="<?php echo esc_attr( $featured_label ); ?>"
        data-total="<?php echo esc_attr( $total ); ?>"
    >
        <div class="blog-filter-tabs">
            <button class="blog-filter-tab blog-filter-tab--active" data-tag-id="" data-tag-label="<?php echo esc_attr( $all_label ); ?>">
                <?php echo esc_html( $all_label ); ?> <span class="blog-filter-tab-count"><?php echo esc_html( $total ); ?></span>
            </button>
        </div>

        <div class="blog-filter-body">
            <?php if ( $query->have_posts() ) : ?>
                <?php
                    $posts = $query->posts;
                    $featured_post = ! empty( $posts ) ? $posts[0] : null;
                    $grid_posts = ! empty( $posts ) ? array_slice( $posts, 1 ) : array();
                ?>
                <div class="blog-filter-body-inner">
                    <?php if ( $featured_post ) : ?>
                        <?php
                            $featured_id = $featured_post->ID;
                            $featured_thumb = get_the_post_thumbnail_url( $featured_id, 'large' );
                            $featured_tags = get_the_tags( $featured_id );
                            $featured_tag_name = $featured_tags ? $featured_tags[0]->name : $all_label;
                            $featured_author = get_the_author_meta( 'display_name', $featured_post->post_author );
                            $featured_word_count = str_word_count( wp_strip_all_tags( get_post_field( 'post_content', $featured_id ) ) );
                            $featured_read_time = max( 1, round( $featured_word_count / 200 ) ) . ' min read';
                            $featured_date = get_the_date( 'F j, Y', $featured_id );
                        ?>
                        <article class="blog-filter-featured" aria-label="Featured post">
                            <p class="blog-filter-featured-badge"><?php echo esc_html( $featured_label ); ?></p>
                            <a href="<?php echo esc_url( get_permalink( $featured_id ) ); ?>" class="blog-filter-featured-link" data-post-id="<?php echo esc_attr( $featured_id ); ?>">
                                <div class="blog-filter-featured-image<?php echo $featured_thumb ? '' : ' blog-filter-featured-image--placeholder'; ?>"
                                     <?php echo $featured_thumb ? 'style="background-image:url(' . esc_url( $featured_thumb ) . ')"' : ''; ?>>
                                </div>
                                <div class="blog-filter-featured-content">
                                    <span class="blog-filter-featured-tag"><?php echo esc_html( $featured_tag_name ); ?></span>
                                    <h3 class="blog-filter-featured-title"><?php echo esc_html( get_the_title( $featured_id ) ); ?></h3>
                                    <p class="blog-filter-featured-excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt( $featured_id ), 32 ) ); ?></p>
                                    <div class="blog-filter-featured-meta">
                                        <span><i class="fa fa-user-o"></i> <?php echo esc_html( $featured_author ); ?></span>
                                        <span><i class="fa fa-calendar-o"></i> <?php echo esc_html( $featured_date ); ?></span>
                                        <span><i class="fa fa-clock-o"></i> <?php echo esc_html( $featured_read_time ); ?></span>
                                    </div>
                                    <span class="blog-filter-featured-cta">Read Full Story <span aria-hidden="true">→</span></span>
                                </div>
                            </a>
                        </article>
                    <?php endif; ?>

                    <div class="blog-filter-group-header">
                        <h2 class="blog-filter-group-title"><?php echo esc_html( $all_label ); ?></h2>
                        <span class="blog-filter-group-count"><?php echo esc_html( $total ); ?> article<?php echo $total !== 1 ? 's' : ''; ?></span>
                    </div>
                    <div class="blog-filter-grid">
                        <?php foreach ( $grid_posts as $post ) : setup_postdata( $post );
                            $thumb      = has_post_thumbnail( $post ) ? get_the_post_thumbnail_url( $post, 'large' ) : '';
                            $tags       = get_the_tags( $post->ID );
                            $tag_name   = $tags ? $tags[0]->name : '';
                            $author     = get_the_author_meta( 'display_name', $post->post_author );
                            $word_count = str_word_count( wp_strip_all_tags( get_post_field( 'post_content', $post->ID ) ) );
                            $read_time  = max( 1, round( $word_count / 200 ) ) . ' min read';
                        ?>
                        <article class="blog-filter-card">
                            <a href="<?php the_permalink(); ?>" class="blog-filter-card-link" data-post-id="<?php echo esc_attr( get_the_ID() ); ?>">
                                <div class="blog-filter-card-image<?php echo $thumb ? '' : ' blog-filter-card-image--placeholder'; ?>"
                                     <?php echo $thumb ? 'style="background-image:url(' . esc_attr( $thumb ) . ')"' : ''; ?>>
                                    <?php if ( $tag_name ) : ?>
                                        <span class="blog-filter-card-badge"><?php echo esc_html( $tag_name ); ?></span>
                                    <?php endif; ?>
                                </div>
                                <div class="blog-filter-card-body">
                                    <h3 class="blog-filter-card-title"><?php the_title(); ?></h3>
                                    <?php if ( ! empty( $attributes['showExcerpt'] ) ) : ?>
                                        <p class="blog-filter-card-excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
                                    <?php endif; ?>
                                    <div class="blog-filter-card-meta">
                                        <?php if ( ! empty( $attributes['showAuthor'] ) ) : ?>
                                            <span class="blog-filter-card-author"><i class="fa fa-user"></i> <?php echo esc_html( $author ); ?></span>
                                        <?php endif; ?>
                                        <?php if ( ! empty( $attributes['showReadTime'] ) ) : ?>
                                            <span class="blog-filter-card-readtime"><i class="fa fa-clock-o"></i> <?php echo esc_html( $read_time ); ?></span>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <?php endforeach; wp_reset_postdata(); ?>
                    </div>
                </div>
            <?php else : ?>
                <p class="blog-filter-empty">No articles found.</p>
            <?php endif; ?>
        </div>
    </section>

    <script>
        window.logiwebBlogFilter = window.logiwebBlogFilter || {};
        window.logiwebBlogFilter.restUrl = <?php echo wp_json_encode( rest_url( 'wp/v2' ) ); ?>;
    </script>
    <?php
    return ob_get_clean();
}

/* Enqueue block-66 frontend JS */
add_action( 'wp_enqueue_scripts', function () {
    if ( ! has_block( 'logiweb/custom-block-66' ) ) return;
    $plugin_url = plugin_dir_url( __FILE__ );
    wp_enqueue_script(
        'logiweb-block-66-frontend',
        $plugin_url . 'build/blocks/block-66/frontend.js',
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/blocks/block-66/frontend.js' ),
        true
    );
} );

/* Enqueue block-71 frontend JS */
add_action( 'wp_enqueue_scripts', function () {
    $plugin_url = plugin_dir_url( __FILE__ );
    wp_enqueue_script(
        'logiweb-block-71-frontend',
        $plugin_url . 'build/blocks/block-71/frontend.js',
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/blocks/block-71/frontend.js' ),
        true
    );
} );

/* ============================================================
   Block-67 – DNH Video Log
   ============================================================ */
function logiweb_render_block_67( $attributes ) {
    $badge   = isset( $attributes['badge'] )   ? sanitize_text_field( $attributes['badge'] )   : 'Behind the Scenes';
    $title   = isset( $attributes['title'] )   ? sanitize_text_field( $attributes['title'] )   : 'DNH Video Log';
    $tagline = isset( $attributes['tagline'] ) ? sanitize_text_field( $attributes['tagline'] ) : 'Watch our crew in action';
    $videos  = isset( $attributes['videos'] )  ? $attributes['videos']                         : array();

    if ( empty( $videos ) ) {
        $videos = array(
            array( 'url' => '', 'thumbnail' => '', 'duration' => '3:24', 'title' => 'Morning Prep on a Exterior Job Site' ),
            array( 'url' => '', 'thumbnail' => '', 'duration' => '2:18', 'title' => 'Kitchen Cabinet Install Time-Lapse' ),
            array( 'url' => '', 'thumbnail' => '', 'duration' => '4:45', 'title' => 'Roof Tear-Off & Replacement Day 1' ),
        );
    }

    ob_start();
    ?>
    <div class="vlog-block">
        <div class="vlog-header">
            <div class="vlog-header-left">
                <span class="vlog-badge"><span class="vlog-badge-icon">▷</span> <?php echo esc_html( $badge ); ?></span>
                <h2 class="vlog-title"><?php echo esc_html( $title ); ?></h2>
            </div>
            <p class="vlog-tagline"><?php echo esc_html( $tagline ); ?></p>
        </div>

        <div class="vlog-grid">
            <?php foreach ( $videos as $idx => $video ) :
                $thumb   = ! empty( $video['thumbnail'] ) ? esc_url( $video['thumbnail'] ) : '';
                $dur     = ! empty( $video['duration'] )  ? sanitize_text_field( $video['duration'] ) : '';
                $vtitle  = ! empty( $video['title'] )     ? sanitize_text_field( $video['title'] ) : '';
                $vurl    = ! empty( $video['url'] )       ? esc_url( $video['url'] ) : '';

                // Detect YouTube embed
                $is_youtube = preg_match( '/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/', $vurl, $yt_match );
                $yt_id      = $is_youtube ? $yt_match[1] : '';
                if ( $yt_id && ! $thumb ) {
                    $thumb = 'https://img.youtube.com/vi/' . $yt_id . '/hqdefault.jpg';
                }
            ?>
            <div class="vlog-card" data-url="<?php echo esc_attr( $vurl ); ?>" data-yt="<?php echo esc_attr( $yt_id ); ?>">
                <div class="vlog-card-thumb"<?php echo $thumb ? ' style="background-image:url(' . $thumb . ')"' : ''; ?>>
                    <button class="vlog-play-btn" aria-label="Play video">
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.92"/>
                            <path d="M20 16L33 24L20 32V16Z" fill="#111827"/>
                        </svg>
                    </button>
                    <?php if ( $dur ) : ?>
                        <span class="vlog-duration"><?php echo esc_html( $dur ); ?></span>
                    <?php endif; ?>
                </div>
                <p class="vlog-card-title"><?php echo esc_html( $vtitle ); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <script>
    (function(){
        document.querySelectorAll('.vlog-card[data-url]').forEach(function(card){
            var btn   = card.querySelector('.vlog-play-btn');
            var ytId  = card.getAttribute('data-yt');
            var vUrl  = card.getAttribute('data-url');
            if (!btn || (!ytId && !vUrl)) return;
            btn.addEventListener('click', function(){
                var thumb = card.querySelector('.vlog-card-thumb');
                if (ytId) {
                    var iframe = document.createElement('iframe');
                    iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1';
                    iframe.allow = 'autoplay; encrypted-media';
                    iframe.allowFullscreen = true;
                    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
                    thumb.style.position = 'relative';
                    thumb.innerHTML = '';
                    thumb.appendChild(iframe);
                } else if (vUrl) {
                    window.open(vUrl, '_blank');
                }
            });
        });
    })();
    </script>
    <?php
    return ob_get_clean();
}

/* ============================================================
   Block-68 – Quote Request + Contact Form 7
   ============================================================ */
function logiweb_render_block_68( $attributes ) {
    $defaults = array(
        'leftTitle'    => 'Why Request a Quote from DNH Group?',
        'bullet1'      => 'Free, no-obligation estimates',
        'bullet2'      => 'Detailed, transparent pricing',
        'bullet3'      => 'Expert recommendations tailored to your needs',
        'bullet4'      => 'Flexible scheduling to fit your timeline',
        'bullet5'      => 'Financing options available',
        'callTitle'    => 'Prefer to Call?',
        'callPhone'    => '(555) 123-4567',
        'callHours'    => 'Mon-Fri 8am-6pm, Sat 9am-2pm',
        'formTitle'    => 'Project Information',
        'cf7Shortcode' => '',
        'privacyText'  => 'By submitting, you agree to our Privacy Policy and Terms of Service',
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );

    $left_title = sanitize_text_field( $a['leftTitle'] );
    $bullets = array_filter( array(
        sanitize_text_field( $a['bullet1'] ),
        sanitize_text_field( $a['bullet2'] ),
        sanitize_text_field( $a['bullet3'] ),
        sanitize_text_field( $a['bullet4'] ),
        sanitize_text_field( $a['bullet5'] ),
    ) );
    $call_title   = sanitize_text_field( $a['callTitle'] );
    $call_phone   = sanitize_text_field( $a['callPhone'] );
    $call_hours   = sanitize_text_field( $a['callHours'] );
    $form_title   = sanitize_text_field( $a['formTitle'] );
    $privacy_text = sanitize_text_field( $a['privacyText'] );
    $cf7_shortcode = isset( $a['cf7Shortcode'] ) ? trim( wp_kses_post( $a['cf7Shortcode'] ) ) : '';

    $cf7_html = '';
    if ( ! empty( $cf7_shortcode ) && strpos( $cf7_shortcode, '[contact-form-7' ) !== false ) {
        $cf7_html = do_shortcode( $cf7_shortcode );
    }

    ob_start();
    ?>
    <section class="quote-cf7-block">
        <div class="quote-cf7-inner">
            <div class="quote-cf7-left">
                <h2 class="quote-cf7-left-title"><?php echo esc_html( $left_title ); ?></h2>
                <?php if ( ! empty( $bullets ) ) : ?>
                    <ul class="quote-cf7-benefits">
                        <?php foreach ( $bullets as $item ) : ?>
                            <li class="quote-cf7-benefit-item">
                                <span class="quote-cf7-check" aria-hidden="true">&#10003;</span>
                                <span><?php echo esc_html( $item ); ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <div class="quote-cf7-callbox">
                    <h3><?php echo esc_html( $call_title ); ?></h3>
                    <p class="quote-cf7-phone"><?php echo esc_html( $call_phone ); ?></p>
                    <p class="quote-cf7-hours"><?php echo esc_html( $call_hours ); ?></p>
                </div>
            </div>

            <div class="quote-cf7-form-card">
                <h3 class="quote-cf7-form-title"><?php echo esc_html( $form_title ); ?></h3>

                <?php if ( ! empty( $cf7_html ) ) : ?>
                    <div class="quote-cf7-form-wrap">
                        <?php echo $cf7_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    </div>
                <?php else : ?>
                    <div class="quote-cf7-fallback-preview">
                        <div class="quote-cf7-row">
                            <input type="text" placeholder="First Name *" readonly />
                            <input type="text" placeholder="Last Name *" readonly />
                        </div>
                        <div class="quote-cf7-row">
                            <input type="email" placeholder="Email Address *" readonly />
                            <input type="text" placeholder="Phone Number *" readonly />
                        </div>
                        <input type="text" placeholder="Address" readonly />
                        <div class="quote-cf7-row quote-cf7-row--small">
                            <select disabled>
                                <option>Select a Service *</option>
                            </select>
                            <select disabled>
                                <option>Project Timeline</option>
                            </select>
                        </div>
                        <textarea placeholder="Tell us about your project..." readonly></textarea>
                        <button type="button" class="quote-cf7-submit-preview">Get My Free Quote</button>
                    </div>
                <?php endif; ?>

                <p class="quote-cf7-privacy"><?php echo esc_html( $privacy_text ); ?></p>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}

/* ============================================================
   Block-71 – Recent Work Slider
   ============================================================ */
function logiweb_render_block_71( $attributes ) {
    $defaults = array(
        'badgeText' => 'Ohio Project Showcase',
        'title'     => 'Recent Work Across Ohio',
        'projects'  => array(
            array(
                'tag'         => 'Full Exterior Painting - Hyde Park',
                'title'       => 'Cincinnati Colonial Revival',
                'description' => 'Before & After transformation with premium Sherwin-Williams Duration paint system.',
                'image'       => 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
            ),
            array(
                'tag'         => 'Complete Remodel - Custom Cabinetry',
                'title'       => 'Indian Hill Kitchen Renovation',
                'description' => 'Open-concept kitchen with quartz countertops and brass hardware.',
                'image'       => 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
            ),
            array(
                'tag'         => 'Whole Home Interior Painting',
                'title'       => 'Dublin Interior Refresh',
                'description' => 'Modern greige palette throughout 4,200 sq ft home.',
                'image'       => 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
            ),
            array(
                'tag'         => 'GAF Timberline HDZ - Hail Damage',
                'title'       => 'West Chester Roof Replacement',
                'description' => 'Full tear-off and replacement with insurance coordination.',
                'image'       => 'https://images.unsplash.com/photo-1632759145351-1d5920be8f4a?w=1200&q=80',
            ),
        ),
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $badge = sanitize_text_field( $a['badgeText'] );
    $title = sanitize_text_field( $a['title'] );
    $projects = is_array( $a['projects'] ) && ! empty( $a['projects'] ) ? $a['projects'] : $defaults['projects'];

    ob_start();
    ?>
    <section class="recent-work-slider-block">
        <div class="recent-work-slider-header">
            <div class="recent-work-slider-heading">
                <p class="recent-work-slider-badge">
                    <i class="fa-regular fa-star" aria-hidden="true"></i>
                    <span><?php echo esc_html( $badge ); ?></span>
                </p>
                <h2 class="recent-work-slider-title"><?php echo esc_html( $title ); ?></h2>
            </div>

            <div class="recent-work-slider-controls" aria-label="Project slider controls">
                <button type="button" class="recent-work-slider-arrow" data-direction="left" aria-label="Previous projects" onclick="(function(btn){var root=btn.closest('.recent-work-slider-block');if(!root)return;var track=root.querySelector('.recent-work-slider-track');if(!track)return;var amount=Math.max(300,Math.round(track.clientWidth*0.78));if(typeof track.scrollBy==='function'){track.scrollBy({left:-amount,behavior:'smooth'});}else{track.scrollLeft-=amount;}})(this)">
                    <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button type="button" class="recent-work-slider-arrow" data-direction="right" aria-label="Next projects" onclick="(function(btn){var root=btn.closest('.recent-work-slider-block');if(!root)return;var track=root.querySelector('.recent-work-slider-track');if(!track)return;var amount=Math.max(300,Math.round(track.clientWidth*0.78));if(typeof track.scrollBy==='function'){track.scrollBy({left:amount,behavior:'smooth'});}else{track.scrollLeft+=amount;}})(this)">
                    <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>

        <div class="recent-work-slider-viewport">
        <div class="recent-work-slider-track">
            <?php foreach ( $projects as $project ) :
                $tag = isset( $project['tag'] ) ? sanitize_text_field( $project['tag'] ) : '';
                $project_title = isset( $project['title'] ) ? sanitize_text_field( $project['title'] ) : '';
                $desc = isset( $project['description'] ) ? sanitize_text_field( $project['description'] ) : '';
                $img = isset( $project['image'] ) ? esc_url( $project['image'] ) : '';
            ?>
                <article class="recent-work-slider-card">
                    <div class="recent-work-slider-image"<?php echo $img ? ' style="background-image:url(' . esc_attr( $img ) . ')"' : ''; ?>></div>
                    <div class="recent-work-slider-content">
                        <p class="recent-work-slider-tag"><?php echo esc_html( $tag ); ?></p>
                        <h3 class="recent-work-slider-card-title"><?php echo esc_html( $project_title ); ?></h3>
                        <p class="recent-work-slider-description"><?php echo esc_html( $desc ); ?></p>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
        </div>
    </section>

    <script>
    (function () {
        if (window.__logiwebRecentWorkSliderBound) return;
        window.__logiwebRecentWorkSliderBound = true;

        function getDirection(button) {
            return button.getAttribute('data-direction') === 'left' ? -1 : 1;
        }

        function scrollTrack(track, direction) {
            var amount = Math.max(300, Math.round(track.clientWidth * 0.78));
            var left = direction * amount;

            if (typeof track.scrollBy === 'function') {
                track.scrollBy({ left: left, behavior: 'smooth' });
                return;
            }

            track.scrollLeft += left;
        }

        document.addEventListener('click', function (event) {
            var button = event.target.closest('.recent-work-slider-arrow');
            if (!button) return;

            var root = button.closest('.recent-work-slider-block');
            if (!root) return;

            var track = root.querySelector('.recent-work-slider-track');
            if (!track) return;

            scrollTrack(track, getDirection(button));
        });
    })();
    </script>

    <?php

    return ob_get_clean();
}

function logiweb_render_block_78( $attributes ) {
    $defaults = array(
        'eyebrow'       => 'Our Approach',
        'titleStart'    => 'Interior Perfection.',
        'titleHighlight'=> 'Exterior Armor.',
        'cards'         => array(
            array(
                'icon'        => 'fa-solid fa-brush',
                'title'       => 'Interior Perfection',
                'description' => 'We treat your home like an art gallery. Every line is laser-straight, and every surface is flawless. Our interior process is built around precision, cleanliness, and premium materials that elevate your living spaces.',
                'bullets'     => array(
                    'Full-coverage surface protection — shielding floors, expensive furniture, and fixtures with heavy-duty drop cloths and plastic sheeting.',
                    'Intensive drywall prep, hairline fracture repair, and micro-sanding for perfectly smooth walls before a single drop of paint is applied.',
                    'Premium, low-VOC / eco-friendly luxury paints (Sherwin-Williams Emerald, Benjamin Moore Aura) for crisp, vibrant color depth and easy cleaning.',
                ),
            ),
            array(
                'icon'        => 'fa-solid fa-shield-halved',
                'title'       => 'Exterior Armor',
                'description' => 'Elite curb appeal engineered to withstand harsh midwestern seasonal extremes — from intense summer humidity to freezing winter snow. Our exterior systems are built to last, not just to look good on day one.',
                'bullets'     => array(
                    'Advanced pressure washing, scraping, and surface prep to remove all loose material and ensure maximum bonding of the new coating.',
                    'High-performance elastomeric and weather-locking sealants that prevent cracking, fading, and moisture damage through harsh seasonal swings.',
                    'Premium, mildew-resistant exterior coatings backed by extensive durability warranties — engineered to look pristine for years.',
                ),
            ),
        ),
    );

    $a = wp_parse_args( is_array( $attributes ) ? $attributes : array(), $defaults );
    $cards = is_array( $a['cards'] ) && ! empty( $a['cards'] ) ? $a['cards'] : $defaults['cards'];

    ob_start();
    ?>
    <section class="our-approach-block">
        <div class="our-approach-inner">
            <p class="our-approach-badge">
                <i class="fa-solid fa-check" aria-hidden="true"></i>
                <span><?php echo esc_html( $a['eyebrow'] ); ?></span>
            </p>

            <h2 class="our-approach-title">
                <?php echo esc_html( $a['titleStart'] ); ?> <span><?php echo esc_html( $a['titleHighlight'] ); ?></span>
            </h2>

            <div class="our-approach-grid">
                <?php foreach ( $cards as $card ) :
                    $bullets = isset( $card['bullets'] ) && is_array( $card['bullets'] ) ? $card['bullets'] : array();
                ?>
                    <article class="our-approach-card">
                        <div class="our-approach-card-icon">
                            <i class="<?php echo esc_attr( isset( $card['icon'] ) ? $card['icon'] : 'fa-solid fa-check' ); ?>" aria-hidden="true"></i>
                        </div>
                        <h3 class="our-approach-card-title"><?php echo esc_html( isset( $card['title'] ) ? $card['title'] : '' ); ?></h3>
                        <p class="our-approach-card-description"><?php echo esc_html( isset( $card['description'] ) ? $card['description'] : '' ); ?></p>
                        <ul class="our-approach-card-list">
                            <?php foreach ( $bullets as $bullet ) : ?>
                                <li class="our-approach-card-list-item">
                                    <span class="our-approach-card-list-icon"><i class="fa-solid fa-check" aria-hidden="true"></i></span>
                                    <span><?php echo esc_html( $bullet ); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php

    return ob_get_clean();
}

