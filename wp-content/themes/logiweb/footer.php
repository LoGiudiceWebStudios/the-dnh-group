<?php
// Get Polcies Pages ID
$privacy_policy_page_id = get_theme_mod('privacy_policy_page');
$terms_of_service_page_id = get_theme_mod('terms_of_service_page');
$cookies_page_id = get_theme_mod('cookies_page');
$sitemap_page_id = get_theme_mod('sitemap_page');

// Get Polcies Pages URL
$privacy_policy_url = get_permalink($privacy_policy_page_id);
$terms_of_service_url = get_permalink($terms_of_service_page_id);
$cookies_url = $cookies_page_id ? get_permalink($cookies_page_id) : '';
$sitemap_url = $sitemap_page_id ? get_permalink($sitemap_page_id) : '';

$show_privacy_policy = get_theme_mod('show_privacy_policy', false);
$show_terms_of_service = get_theme_mod('show_terms_of_service', false);
$show_cookies = get_theme_mod('show_cookies', false);
$show_sitemap = get_theme_mod('show_sitemap', false);

?>



<footer class="section-container footer">
    <div class="footer-container container">
        <div class="footer-logo-block">
            <!-- Footer Logo -->
            <?php 
            $footer_text = get_theme_mod('footer_description_text');
            if(function_exists('the_custom_logo')){
                $custom_logo_id = get_theme_mod('custom_logo'); 
                $logo_url = wp_get_attachment_image_src($custom_logo_id, 'full'); 
                
            }

            if($logo_url): ?>
                <img src="<?php echo $logo_url[0]; ?>" alt="Footer Logo" class="footer-logo">
                <?php if ($footer_text): ?>
                    <div class="footer-logo-description description-small">
                        <?php echo esc_html($footer_text); ?>
                    </div>
                <?php endif; ?>
            <?php else : ?>
                <a href="<?php echo home_url(); ?>" class="site-title"><?php bloginfo('name'); ?></a>
                <?php if ($footer_text): ?>
                    <div class="footer-logo-description description-small">
                        <?php echo esc_html($footer_text); ?>
                    </div>
                <?php endif; ?>
            <?php endif; ?>

            <!-- Social Icons -->
            <div class="footer-social-icons">
                <?php
                $socials = [
                    'facebook'  => ['icon' => 'fa-facebook',         'fa' => 'fa-brands'],
                    'instagram' => ['icon' => 'fa-square-instagram',  'fa' => 'fa-brands'],
                    'linkedin'  => ['icon' => 'fa-linkedin',          'fa' => 'fa-brands'],
                    'twitter'   => ['icon' => 'fa-x-twitter',         'fa' => 'fa-brands'],
                    'youtube'   => ['icon' => 'fa-youtube',           'fa' => 'fa-brands'],
                ];
                foreach ($socials as $name => $data) {
                    $show = get_theme_mod("show_{$name}");
                    $url  = get_theme_mod("{$name}_url");
                    if ($show && $url) {
                        echo '<a class="footer-social-btn" href="' . esc_url($url) . '" target="_blank" rel="noopener" aria-label="' . esc_attr(ucfirst($name)) . '"><i class="' . esc_attr($data['fa']) . ' ' . esc_attr($data['icon']) . '"></i></a>';
                    }
                }
                ?>
            </div>
        </div>

        <div class="footer-subcontainer container">
            <div class="quick-links">
                <div class="bold title-small">SERVICES</div>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'depth' => 1, // no dropdown
                        'items_wrap' => '<ul class="footer-navigation">%3$s</ul>',
                        'walker' => new Footer_Nav_Walker(), // Use the custom walker
                    ));
                ?>
            </div>

            <div class="quick-links">
                <div class="bold title-small">COMPANY</div>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'company',
                        'depth' => 1, // no dropdown
                        'items_wrap' => '<ul class="footer-navigation">%3$s</ul>',
                        'walker' => new Footer_Nav_Walker(), // Use the custom walker
                    ));
                ?>
            </div>

            <div class="quick-links">
                <div class="bold title-small">FINANCING</div>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'financing',
                        'depth' => 1, // no dropdown
                        'items_wrap' => '<ul class="footer-navigation">%3$s</ul>',
                        'walker' => new Footer_Nav_Walker(), // Use the custom walker
                    ));
                    $contact_items = [
                        'phone'  => 'fa-phone',
                        'email' => 'fa-envelope',
                        'working_hours'   => 'fa-clock',
                        'address'  => 'fa-location-dot',
                        'custom'   => 'fa-info-circle',
                    ];

                    foreach ($contact_items as $name => $icon) {
                        $show = get_theme_mod("show_{$name}");
                        $info  = get_theme_mod("{$name}_info");

                        if ($show && $info) {
                            echo '<div class="item"><i class="fa-solid ' . esc_attr($icon) . '"></i><span>  </span>' . esc_html($info) . '</span></div>';
                        }
                    }

                ?>
            </div>

            <div class="connect-with-us" style="display: none;">
                <div class="bold title-small">Contattaci</div>
                <?php
                $contact_items = [
                    'phone'  => 'fa-phone',
                    'email' => 'fa-envelope',
                    'working_hours'   => 'fa-clock',
                    'address'  => 'fa-location-dot',
                    'custom'   => 'fa-info-circle',
                ];

                foreach ($contact_items as $name => $icon) {
                    $show = get_theme_mod("show_{$name}");
                    $info  = get_theme_mod("{$name}_info");

                    if ($show && $info) {
                        echo '<div class="item"><i class="fa-solid ' . esc_attr($icon) . '"></i>' . esc_html($info) . '</div>';
                    }
                }
                ?>

            </div>

            <div class="stay-updated" style="display: none;">
                <div class="bold title-small">Socials</div>

                <?php
                $socials = [
                    'facebook'  => 'fa-facebook',
                    'instagram' => 'fa-square-instagram',
                    'twitter'   => 'fa-x-twitter',
                    'linkedin'  => 'fa-linkedin',
                    'youtube'   => 'fa-youtube',
                ];

                foreach ($socials as $name => $icon) {
                    $show = get_theme_mod("show_{$name}");
                    $url  = get_theme_mod("{$name}_url");

                    if ($show && $url) {
                        echo '<div class="item"><a class="regular item" href="' . esc_url($url) . '" target="_blank"><i class="fa-brands ' . esc_attr($icon) . '"></i> ' . ucfirst($name) . '</a></div>';
                    }
                }
                ?>
            </div>

        </div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-bottom">
        <span class="footer-copyright">© <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved. &nbsp;·&nbsp; Built by <a href="https://logiweb.me" target="_blank" rel="noopener" class="footer-dev-link">LoGiudice WebStudios</a></span>
        <div class="footer-bottom-links">
            <?php if ($privacy_policy_url && $show_privacy_policy): ?>
                <a href="<?php echo esc_url($privacy_policy_url); ?>"><?php _e('Privacy Policy', 'logiweb'); ?></a>
            <?php endif; ?>
            <?php if ($terms_of_service_url && $show_terms_of_service): ?>
                <a href="<?php echo esc_url($terms_of_service_url); ?>"><?php _e('Terms of Service', 'logiweb'); ?></a>
            <?php endif; ?>
            <?php if ($cookies_url && $show_cookies): ?>
                <a href="<?php echo esc_url($cookies_url); ?>"><?php _e('Cookies', 'logiweb'); ?></a>
            <?php endif; ?>
            <?php if ($sitemap_url && $show_sitemap): ?>
                <a href="<?php echo esc_url($sitemap_url); ?>"><?php _e('Sitemap', 'logiweb'); ?></a>
            <?php endif; ?>
        </div>
    </div>

</footer>

<!-- SCRIPTS LOADING -->
<?php wp_footer(); ?>



</body>
</html>
