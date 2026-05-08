<?php
/**
 * LogiWeb Theme Functions
 * 
 * @package LogiWeb
 * @since 1.0.0
 */

// =============================================================================
// THEME SETUP
// =============================================================================

/**
 * Load theme textdomain for translations
 */
function logiweb_load_textdomain() {
    load_theme_textdomain('logiweb', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'logiweb_load_textdomain');

/**
 * Theme support features
 */
function logiweb_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('custom-line-height');
    add_theme_support('responsive-embeds');
    add_theme_support('custom-spacing');
}
add_action('after_setup_theme', 'logiweb_theme_setup');

/**
 * Register navigation menus
 */
function logiweb_register_menus() {
    register_nav_menus(array(
        'primary' => __('Desktop Primary Navbar', 'logiweb'),
        'footer'  => __('Footer Menu Items', 'logiweb')
    ));
}
add_action('init', 'logiweb_register_menus');

/**
 * Register sidebar
 */
function logiweb_register_sidebar() {
    register_sidebar(array(
        'name'          => __('Sidebar Articoli Recenti', 'logiweb'),
        'id'            => 'sidebar_recent_posts',
        'description'   => __('Sidebar che mostra gli articoli più recenti.', 'logiweb'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'logiweb_register_sidebar');


// =============================================================================
// ENQUEUE STYLES & SCRIPTS
// =============================================================================

/**
 * Enqueue CSS files
 */
function logiweb_enqueue_styles() {
    $version = wp_get_theme()->get('Version');
    
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', array(), '5.3.3', 'all');
    wp_enqueue_style('fontawesome-css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css', array(), '6.7.2', 'all');
    wp_enqueue_style('logiweb-style', get_template_directory_uri() . '/style.css', array('bootstrap-css'), $version, 'all');
}
add_action('wp_enqueue_scripts', 'logiweb_enqueue_styles');

/**
 * Enqueue JavaScript files
 */
function logiweb_enqueue_scripts() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array(), '5.3.0', true);
    wp_enqueue_script('logiweb-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'logiweb_enqueue_scripts');

/**
 * Enqueue Google Fonts dynamically
 */
function logiweb_enqueue_google_fonts() {
    $main_font = get_theme_mod('main_font_family', 'Lexend Deca');
    $font_url_name = str_replace(' ', '+', $main_font);
    
    wp_enqueue_style(
        'logiweb-google-fonts',
        'https://fonts.googleapis.com/css2?family=' . $font_url_name . ':wght@100..900&display=swap',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'logiweb_enqueue_google_fonts');


// =============================================================================
// SANITIZATION & HELPER FUNCTIONS
// =============================================================================

/**
 * Sanitize hero media type
 */
function logiweb_sanitize_hero_media_type($value) {
    $allowed = array('video', 'image');
    return in_array($value, $allowed, true) ? $value : 'video';
}

/**
 * Sanitize checkbox
 */
function logiweb_sanitize_checkbox($checked) {
    return isset($checked) && (bool) $checked;
}

/**
 * Sanitize positive integer
 */
function logiweb_sanitize_positive_int($value) {
    return max(0, intval($value));
}

/**
 * Get primary color default value
 */
function logiweb_get_primary_color_default() {
    return '#0F71AC';
}

/**
 * Get hero heading default value
 */
function logiweb_get_hero_heading_default() {
    return __('Lorem ipsum dolor sit amet consectetur adipiscing elit.', 'logiweb');
}

/**
 * Get hero description default value
 */
function logiweb_get_hero_description_default() {
    return __('Lorem ipsum dolor sit amet, co adipiscing in Lorem, Ipsum, and Dolor sit amet con sectetur adipiscing elit et lorem ipsum. Aliquam dui loremipsums consectetur, adipiscing, and elit — amet a lorem sit amet.', 'logiweb');
}


// =============================================================================
// CUSTOMIZER SETTINGS
// =============================================================================

/**
 * Theme Colors Customizer - Priority: 30
 */
function logiweb_theme_colors_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_theme_colors_section', array(
        'title'    => __('Theme Colors', 'logiweb'),
        'priority' => 30,
    ));

    // Primary Color
    $wp_customize->add_setting('primary_color', array(
        'default'           => '#0F71AC',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label'    => __('Primary Color', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'primary_color',
    )));

    // Button Primary Background
    $wp_customize->add_setting('button_primary_background', array(
        'default'           => '#0F71AC',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'button_primary_background', array(
        'label'    => __('Button Primary Background', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'button_primary_background',
    )));

    // Button Primary Text Color
    $wp_customize->add_setting('button_primary_text_color', array(
        'default'           => '#ffffff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'button_primary_text_color', array(
        'label'    => __('Button Primary Text Color', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'button_primary_text_color',
    )));

    // Button Secondary Background
    $wp_customize->add_setting('button_secondary_background', array(
        'default'           => '#ffffff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'button_secondary_background', array(
        'label'    => __('Button Secondary Background', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'button_secondary_background',
    )));

    // Button Secondary Text Color
    $wp_customize->add_setting('button_secondary_text_color', array(
        'default'           => '#000000',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'button_secondary_text_color', array(
        'label'    => __('Button Secondary Text Color', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'button_secondary_text_color',
    )));

    // Background Main
    $wp_customize->add_setting('background_main', array(
        'default'           => '#FFFFFF',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'background_main', array(
        'label'    => __('Background Main', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'background_main',
    )));

    // Background Secondary
    $wp_customize->add_setting('background_secondary', array(
        'default'           => '#f8f9fa',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'background_secondary', array(
        'label'    => __('Background Secondary', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'background_secondary',
    )));

    // Text Color
    $wp_customize->add_setting('text_color', array(
        'default'           => '#212529',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'text_color', array(
        'label'    => __('Text Color', 'logiweb'),
        'section'  => 'logiweb_theme_colors_section',
        'settings' => 'text_color',
    )));
}
add_action('customize_register', 'logiweb_theme_colors_customizer');

/**
 * Typography Customizer - Priority: 40
 */
function logiweb_typography_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_typography', array(
        'title'    => __('Typography', 'logiweb'),
        'priority' => 40,
    ));

    $wp_customize->add_setting('main_font_family', array(
        'default'           => 'Lexend Deca',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('main_font_family', array(
        'label'   => __('Main Font', 'logiweb'),
        'section' => 'logiweb_typography',
        'type'    => 'select',
        'choices' => array(
            'Lexend Deca'      => __('Lexend Deca (Default)', 'logiweb'),
            'Roboto'           => 'Roboto',
            'Noto Sans'        => 'Noto Sans',
            'Open Sans'        => 'Open Sans',
            'Lato'             => 'Lato',
            'Montserrat'       => 'Montserrat',
            'Poppins'          => 'Poppins',
            'Inter'            => 'Inter',
            'Raleway'          => 'Raleway',
            'Nunito'           => 'Nunito',
            'Playfair Display' => 'Playfair Display',
        ),
    ));
}
add_action('customize_register', 'logiweb_typography_customizer');

/**
 * Hero Content Customizer - Priority: 50
 */
function logiweb_hero_content_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_hero_content_section', array(
        'title'    => __('Hero Content', 'logiweb'),
        'priority' => 50,
    ));

    $wp_customize->add_setting('hero_heading_text', array(
        'default'           => logiweb_get_hero_heading_default(),
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_heading_text', array(
        'label'   => __('Hero Heading', 'logiweb'),
        'section' => 'logiweb_hero_content_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_description_text', array(
        'default'           => logiweb_get_hero_description_default(),
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_description_text', array(
        'label'   => __('Hero Description', 'logiweb'),
        'section' => 'logiweb_hero_content_section',
        'type'    => 'textarea',
    ));

    // Hero Buttons
    $wp_customize->add_setting('hero_btn_primary_text', array(
        'default'           => __('Learn More', 'logiweb'),
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_btn_primary_text', array(
        'label'   => __('Primary Button Text', 'logiweb'),
        'section' => 'logiweb_hero_content_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_btn_primary_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('hero_btn_primary_url', array(
        'label'   => __('Primary Button URL', 'logiweb'),
        'section' => 'logiweb_hero_content_section',
        'type'    => 'url',
    ));

    $wp_customize->add_setting('hero_btn_secondary_text', array(
        'default'           => __('Get Started', 'logiweb'),
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_btn_secondary_text', array(
        'label'   => __('Secondary Button Text', 'logiweb'),
        'section' => 'logiweb_hero_content_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_btn_secondary_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('hero_btn_secondary_url', array(
        'label'   => __('Secondary Button URL', 'logiweb'),
        'section' => 'logiweb_hero_content_section',
        'type'    => 'url',
    ));
}
add_action('customize_register', 'logiweb_hero_content_customizer');

/**
 * Hero Media Customizer - Priority: 60
 */
function logiweb_custom_hero_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_hero_video_section', array(
        'title'    => __('Hero Media', 'logiweb'),
        'priority' => 60,
    ));

    $wp_customize->add_setting('hero_media_type', array(
        'default' => 'video',
        'sanitize_callback' => 'logiweb_sanitize_hero_media_type',
    ));

    $wp_customize->add_control('hero_media_type', array(
        'label' => __('Hero Media Type', 'logiweb'),
        'section' => 'logiweb_hero_video_section',
        'type' => 'radio',
        'choices' => array(
            'video' => __('Video', 'logiweb'),
            'image' => __('Image', 'logiweb'),
        ),
    ));

    // Desktop Video
    $wp_customize->add_setting('hero_video', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_video', array(
        'label' => __('Hero Video Desktop (MP4)', 'logiweb'),
        'section' => 'logiweb_hero_video_section',
        'settings' => 'hero_video',
    )));

    // Mobile Video
    $wp_customize->add_setting('hero_video_mobile', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_video_mobile', array(
        'label' => __('Hero Video Mobile (MP4)', 'logiweb'),
        'section' => 'logiweb_hero_video_section',
        'settings' => 'hero_video_mobile',
        'description' => __('Video ottimizzato per dispositivi mobili. Se vuoto, verrà usato il video desktop.', 'logiweb'),
    )));

    // Desktop Image
    $wp_customize->add_setting('hero_image', array(
        'default' => get_template_directory_uri() . '/assets/images/hero_image.avif',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image', array(
        'label' => __('Hero Image Desktop', 'logiweb'),
        'section' => 'logiweb_hero_video_section',
        'settings' => 'hero_image',
    )));

    // Mobile Image
    $wp_customize->add_setting('hero_image_mobile', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image_mobile', array(
        'label' => __('Hero Image Mobile', 'logiweb'),
        'section' => 'logiweb_hero_video_section',
        'settings' => 'hero_image_mobile',
        'description' => __('Immagine ottimizzata per dispositivi mobili. Se vuota, verrà usata l\'immagine desktop.', 'logiweb'),
    )));
}
add_action('customize_register', 'logiweb_custom_hero_customizer');

/**
 * Navbar Logo Customizer - Priority: 70
 */
function logiweb_navbar_logo_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_navbar_logo_section', array(
        'title'    => __('Navbar Logo', 'logiweb'),
        'priority' => 70,
    ));

    $wp_customize->add_setting('nav_logo_width', array(
        'default'           => 0,
        'sanitize_callback' => 'logiweb_sanitize_positive_int',
    ));

    $wp_customize->add_control('nav_logo_width', array(
        'label'       => __('Logo Width (px)', 'logiweb'),
        'section'     => 'logiweb_navbar_logo_section',
        'type'        => 'number',
        'input_attrs' => array(
            'min'  => 0,
            'step' => 1,
        ),
    ));

    $wp_customize->add_setting('nav_logo_height', array(
        'default'           => 0,
        'sanitize_callback' => 'logiweb_sanitize_positive_int',
    ));

    $wp_customize->add_control('nav_logo_height', array(
        'label'       => __('Logo Height (px)', 'logiweb'),
        'section'     => 'logiweb_navbar_logo_section',
        'type'        => 'number',
        'input_attrs' => array(
            'min'  => 0,
            'step' => 1,
        ),
        'description' => __('Leave 0 to keep automatic scaling.', 'logiweb'),
    ));
}
add_action('customize_register', 'logiweb_navbar_logo_customizer');

/**
 * Navbar Button Customizer - Priority: 71
 */
function logiweb_navbar_button_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_navbar_button_section', array(
        'title'    => __('Navbar Button', 'logiweb'),
        'priority' => 71,
    ));

    $wp_customize->add_setting('nav_button_enabled', array(
        'default' => false,
        'sanitize_callback' => 'logiweb_sanitize_checkbox',
    ));

    $wp_customize->add_control('nav_button_enabled', array(
        'label' => __('Enable Button', 'logiweb'),
        'section' => 'logiweb_navbar_button_section',
        'type' => 'checkbox',
    ));

    $wp_customize->add_setting('nav_button_text', array(
        'default' => 'Default',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('nav_button_text', array(
        'label' => __('Button Text', 'logiweb'),
        'section' => 'logiweb_navbar_button_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('nav_button_url', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('nav_button_url', array(
        'label' => __('Button Link', 'logiweb'),
        'section' => 'logiweb_navbar_button_section',
        'type' => 'url',
    ));
}
add_action('customize_register', 'logiweb_navbar_button_customizer');

/**
 * Navbar Search Form Customizer - Priority: 72
 */
function logiweb_navbar_search_customizer($wp_customize) {
    $wp_customize->add_section('logiweb_navbar_search_section', array(
        'title'    => __('Navbar Search Form', 'logiweb'),
        'priority' => 72,
    ));

    $wp_customize->add_setting('nav_search_enabled', array(
        'default' => false,
        'sanitize_callback' => 'logiweb_sanitize_checkbox',
    ));

    $wp_customize->add_control('nav_search_enabled', array(
        'label' => __('Enable Search Form', 'logiweb'),
        'section' => 'logiweb_navbar_search_section',
        'type' => 'checkbox',
    ));
}
add_action('customize_register', 'logiweb_navbar_search_customizer');


// =============================================================================
// CUSTOM WALKERS
// =============================================================================

/**
 * Custom Nav Walker for Bootstrap dropdowns
 */
class Custom_Nav_Walker extends Walker_Nav_Menu {

    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $submenu_class = $depth > 0 ? ' dropdown-menu' : ' dropdown-menu';
        $output .= "\n$indent<ul class=\"$submenu_class\">\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $has_children = in_array('menu-item-has-children', $classes);

        $class_names = 'nav-item';
        if ($depth === 0 && $has_children) {
            $class_names .= ' dropdown';
        } elseif ($depth > 0 && $has_children) {
            $class_names .= ' dropdown-submenu';
        }

        $link_classes = $depth === 0 ? 'nav-link' : 'dropdown-item';
        if ($has_children) {
            $link_classes .= ' dropdown-toggle';
        }

        $attributes = !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : ' href="#"';
        $attributes .= ' class="' . esc_attr($link_classes) . '"';
        if ($has_children) {
            $attributes .= ' data-bs-toggle="dropdown" aria-expanded="false"';
        }

        $output .= '<li class="' . esc_attr($class_names) . '">';
        $output .= '<a' . $attributes . '>' . esc_html($item->title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "</li>\n";
    }

    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= "</ul>\n";
    }
}


class Footer_Nav_Walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"sub-menu\">\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'item'; // Add 'item' class to <li>
        $classes[] = 'regular'; // Add 'regular' class to <li>
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';

        $attributes = !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

        $output .= '<li' . $class_names . '>';
        $output .= '<a' . $attributes . '>' . esc_html($item->title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "</li>\n";
    }
}


/**
 * Contact Information Customizer - Priority: 80
 */
function logiweb_contact_info_customizer($wp_customize) {
    $wp_customize->add_section('contact_info_section', array(
        'title'    => __('Contact Information', 'logiweb'),
        'priority' => 80,
    ));

    $contact_items = ['phone', 'email', 'address', 'working_hours', 'custom'];

    foreach ($contact_items as $item) {

        // Text Field
        $wp_customize->add_setting("{$item}_info", array('default' => ''));
        $wp_customize->add_control("{$item}_info", array(
            'label'    => __(ucfirst($item), 'logiweb'),
            'section'  => 'contact_info_section',
            'settings' => "{$item}_info",
            'type'     => 'text',
        ));

        // Checkbox to show contact info
        $wp_customize->add_setting("show_{$item}", array('default' => false));
        $wp_customize->add_control("show_{$item}", array(
            'label'    => __("Show " . ucfirst($item), 'logiweb'),
            'section'  => 'contact_info_section',
            'settings' => "show_{$item}",
            'type'     => 'checkbox',
        ));

    }
}
add_action('customize_register', 'logiweb_contact_info_customizer');

/**
 * Social Links Customizer - Priority: 90
 */
function logiweb_social_links_customizer($wp_customize) {
    $wp_customize->add_section('social_links_section', array(
        'title'    => __('Social Links', 'logiweb'),
        'priority' => 90,
    ));

    $socials = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'];

    foreach ($socials as $social) {
        // Checkbox to show social links
        $wp_customize->add_setting("show_{$social}", array('default' => false));
        $wp_customize->add_control("show_{$social}", array(
            'label'    => __("Show " . ucfirst($social), 'logiweb'),
            'section'  => 'social_links_section',
            'settings' => "show_{$social}",
            'type'     => 'checkbox',
        ));

        // URL Field
        $wp_customize->add_setting("{$social}_url", array('default' => ''));
        $wp_customize->add_control("{$social}_url", array(
            'label'    => __(ucfirst($social) . ' URL', 'logiweb'),
            'section'  => 'social_links_section',
            'settings' => "{$social}_url",
            'type'     => 'url',
        ));
    }
}
add_action('customize_register', 'logiweb_social_links_customizer');

/**
 * Footer Description Customizer - Priority: 100
 */
function logiweb_footer_description_customizer($wp_customize) {
    $wp_customize->add_section('footer_description', array(
        'title'    => __('Footer Description', 'logiweb'),
        'priority' => 100,
    ));

    $wp_customize->add_setting('footer_description_text', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('footer_description_text', array(
        'label'   => __('Enter the footer description', 'logiweb'),
        'section' => 'footer_description',
        'type'    => 'text',
    ));
}
add_action('customize_register', 'logiweb_footer_description_customizer');

/**
 * Policies Pages Customizer - Priority: 110
 */
function logiweb_policies_pages_customizer($wp_customize) {
    $wp_customize->add_section('footer_section', array(
        'title'    => __('Policies Pages', 'logiweb'),
        'priority' => 110,
    ));

    // Checkbox to show/hide Privacy Policy
    $wp_customize->add_setting('show_privacy_policy', array(
        'default' => false,
        'sanitize_callback' => 'logiweb_sanitize_checkbox',
    ));

    $wp_customize->add_control('show_privacy_policy', array(
        'label' => __('Show Privacy Policy Link', 'logiweb'),
        'section' => 'footer_section',
        'type' => 'checkbox',
    ));

    // Setting for Privacy Policy
    $wp_customize->add_setting('privacy_policy_page', array(
        'default' => 'false',
        'sanitize_callback' => 'absint', // Sanitization for page ID
    ));

    $wp_customize->add_control('privacy_policy_page', array(
        'label' => __('Select The Privacy Policy Page', 'logiweb'),
        'section' => 'footer_section',
        'type' => 'dropdown-pages', // Allows selecting a page
    ));

    // Checkbox to show/hide Terms of Service
    $wp_customize->add_setting('show_terms_of_service', array(
        'default' => false,
        'sanitize_callback' => 'logiweb_sanitize_checkbox',
    ));

    $wp_customize->add_control('show_terms_of_service', array(
        'label' => __('Show Terms Of Service Link', 'logiweb'),
        'section' => 'footer_section',
        'type' => 'checkbox',
    ));

    // Setting for Terms and Conditions
    $wp_customize->add_setting('terms_of_service_page', array(
        'default' => 'false',
        'sanitize_callback' => 'absint', // Sanitization for page ID
    ));

    $wp_customize->add_control('terms_of_service_page', array(
        'label' => __('Select The Terms Of Services Page', 'logiweb'),
        'section' => 'footer_section',
        'type' => 'dropdown-pages', // Allows selecting a page
    ));
}

add_action('customize_register', 'logiweb_policies_pages_customizer');


// =============================================================================
// OUTPUT FUNCTIONS
// =============================================================================

/**
 * Output inline CSS for theme colors
 */
function logiweb_inline_theme_colors() {
    // Get all color values with defaults
    $primary = get_theme_mod('primary_color', '#0F71AC');
    $primary = sanitize_hex_color($primary) ?: '#0F71AC';

    $btn_primary_bg = get_theme_mod('button_primary_background', '#0F71AC');
    $btn_primary_bg = sanitize_hex_color($btn_primary_bg) ?: '#0F71AC';

    $btn_primary_text = get_theme_mod('button_primary_text_color', '#ffffff');
    $btn_primary_text = sanitize_hex_color($btn_primary_text) ?: '#ffffff';

    $btn_secondary_bg = get_theme_mod('button_secondary_background', '#ffffff');
    $btn_secondary_bg = sanitize_hex_color($btn_secondary_bg) ?: '#ffffff';

    $btn_secondary_text = get_theme_mod('button_secondary_text_color', '#000000');
    $btn_secondary_text = sanitize_hex_color($btn_secondary_text) ?: '#000000';

    $bg_main = get_theme_mod('background_main', '#FFFFFF');
    $bg_main = sanitize_hex_color($bg_main) ?: '#FFFFFF';

    $bg_secondary = get_theme_mod('background_secondary', '#f8f9fa');
    $bg_secondary = sanitize_hex_color($bg_secondary) ?: '#f8f9fa';

    $text_color = get_theme_mod('text_color', '#212529');
    $text_color = sanitize_hex_color($text_color) ?: '#212529';

    // Output CSS variables
    ?>
    <style id="logiweb-theme-colors">
        :root {
            --primary: <?php echo esc_html($primary); ?>;
            --button-primary-background: <?php echo esc_html($btn_primary_bg); ?>;
            --button-primary-text-color: <?php echo esc_html($btn_primary_text); ?>;
            --button-secondary-background: <?php echo esc_html($btn_secondary_bg); ?>;
            --button-secondary-text-color: <?php echo esc_html($btn_secondary_text); ?>;
            --background-main: <?php echo esc_html($bg_main); ?>;
            --background-secondary: <?php echo esc_html($bg_secondary); ?>;
            --background-color: <?php echo esc_html($bg_main); ?>;
            --text-color: <?php echo esc_html($text_color); ?>;
        }
    </style>
    <?php
}
add_action('wp_head', 'logiweb_inline_theme_colors', 20);

/**
 * Output inline CSS for font variables
 */
function logiweb_custom_fonts_css() {
    $main_font = get_theme_mod('main_font_family', 'Lexend Deca');
    ?>
    <style type="text/css">
        :root {
            --main-font: "<?php echo esc_html($main_font); ?>", sans-serif;
        }
    </style>
    <?php
}
add_action('wp_head', 'logiweb_custom_fonts_css');


// =============================================================================
// POSTS & CONTENT
// =============================================================================

/**
 * Custom excerpt length
 */
function logiweb_custom_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'logiweb_custom_excerpt_length');

/**
 * Get reading time for a post
 */
function get_reading_time($post_id = null) {
    if (is_null($post_id)) {
        $post_id = get_the_ID();
    }

    $words_per_minute = 200;
    $content = get_post_field('post_content', $post_id);
    $word_count = str_word_count(wp_strip_all_tags($content));
    $minutes = ceil($word_count / $words_per_minute);

    return $minutes;
}

/**
 * AJAX handler to filter posts
 */
function logiweb_solutions_filter_posts() {
    $category = isset($_GET['category']) && $_GET['category'] !== 'all' ? intval($_GET['category']) : null;

    $args = array(
        'posts_per_page' => -1,
    );
    
    if ($category) {
        $args['cat'] = $category;
    }

    $filtered_posts = new WP_Query($args);

    if ($filtered_posts->have_posts()) :
        while ($filtered_posts->have_posts()) : $filtered_posts->the_post(); ?>
        
            <article class="post-preview" data-categories="<?php echo esc_attr(implode(' ', wp_list_pluck(get_the_category(), 'term_id'))); ?>">
                <div class="post-thumbnail">
                    <?php if (has_post_thumbnail()) : ?>
                        <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('full'); ?></a>
                    <?php endif; ?>
                </div>
                <div class="post-categories">
                <?php
                $categories = get_the_category();
                if (!empty($categories)) {
                    foreach ($categories as $category) {
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
        <?php endwhile;
    else :
        echo '<p>' . esc_html__('No content found.', 'logiweb') . '</p>';
    endif;

    wp_reset_postdata();
    wp_die();
}
add_action('wp_ajax_filter_posts', 'logiweb_solutions_filter_posts');
add_action('wp_ajax_nopriv_filter_posts', 'logiweb_solutions_filter_posts');