<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?php echo esc_html( get_bloginfo('name') ); ?></title>

        <!-- Meta -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="<?php echo esc_attr( get_bloginfo('description') ); ?>">
        <meta name="author" content="<?php echo esc_attr( get_bloginfo('name') ); ?>">    
        <link rel="shortcut icon" href="<?php echo esc_attr( get_site_icon_url() ); ?>"> 
        
        <!-- STYLES LOADING -->
        <?php  wp_head(); ?>

        <!-- Material Icons -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right" />
    </head>
    <body>
        <div id="preloader">
            <div class="logo-container">
                <img src="<?php echo get_site_icon_url(); ?>" alt="Logo">
            </div>
        </div>
        <header>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                            <?php 

                            if(function_exists('the_custom_logo')){
                                $custom_logo_id = get_theme_mod('custom_logo'); 
                                $logo_url = wp_get_attachment_image_src($custom_logo_id, 'full'); 
                            }

                            $logo_width = intval(get_theme_mod('nav_logo_width', 0));
                            $logo_height = intval(get_theme_mod('nav_logo_height', 0));
                            $logo_styles = array();
                            if ($logo_width > 0) {
                                $logo_styles[] = 'width:' . $logo_width . 'px';
                            }
                            if ($logo_height > 0) {
                                $logo_styles[] = 'height:' . $logo_height . 'px';
                            }
                            $logo_style_attr = empty($logo_styles) ? '' : ' style="' . esc_attr(implode(';', $logo_styles)) . '"';


                            if($logo_url): ?>
                                <img src="<?php echo $logo_url[0]; ?>" alt="Logo" class="navbar-logo"<?php echo $logo_style_attr; ?>>
                            <?php else : ?>
                                <a href="<?php echo home_url(); ?>" class="link-no-style site-title"><?php bloginfo('name'); ?></a>
                            <?php endif; ?>

                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <?php 
                                    wp_nav_menu(
                                        array(
                                            'container' => '',
                                            'theme_location' => 'primary',
                                            'items_wrap' => '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">%3$s</ul>',
                                            'walker' => new Custom_Nav_Walker()
                                        )

                                    );
                                ?>
                                <?php 
                                    $nav_btn_enabled = get_theme_mod('nav_button_enabled', false);
                                    $nav_btn_text = get_theme_mod('nav_button_text', 'Default');
                                    $nav_btn_url = get_theme_mod('nav_button_url', '');
                                ?>
                                <?php if ($nav_btn_enabled): ?>
                                    <button
                                        class="nav-btn btn btn-outline-success btn-secondary"
                                        type="button"
                                        <?php if ($nav_btn_url) : ?>onclick="window.location.href='<?php echo esc_url($nav_btn_url); ?>'"<?php endif; ?>
                                    >
                                        <?php echo esc_html($nav_btn_text); ?>
                                    </button>
                                <?php endif; ?>
                                <?php 
                                    $search_enabled = get_theme_mod('nav_search_enabled', false);
                                    $search_placeholder = get_theme_mod('nav_search_placeholder', 'Default');
                                ?>
                                <?php if ($search_enabled): ?>
                                    <?php get_search_form(); ?>
                                <?php endif; ?>
                            </div>
                        </div>
                    </nav>
                </header>
