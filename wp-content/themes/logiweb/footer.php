<?php
// Get Polcies Pages ID
$privacy_policy_page_id = get_theme_mod('privacy_policy_page');
$terms_of_service_page_id = get_theme_mod('terms_of_service_page');

// Get Polcies Pages URL
$privacy_policy_url = get_permalink($privacy_policy_page_id);
$terms_of_service_url = get_permalink($terms_of_service_page_id);
$show_privacy_policy = get_theme_mod('show_privacy_policy', false);
$show_terms_of_service = get_theme_mod('show_terms_of_service', false); 

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
        </div>

        <div class="footer-subcontainer container">
            <div class="quick-links">
                <div class="bold title-small">Link Veloci</div>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'depth' => 1, // no dropdown
                        'items_wrap' => '<ul class="footer-navigation">%3$s</ul>',
                        'walker' => new Footer_Nav_Walker(), // Use the custom walker
                    ));
                ?>
            </div>

            <div class="connect-with-us">
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

            <div class="stay-updated">
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
    <?php if ($privacy_policy_url && $show_privacy_policy): ?>
        <div class="technical-links"><a href="<?php echo esc_url($privacy_policy_url); ?>"><?php _e('Privacy Policy', 'logiweb'); ?></a></div>
    <?php endif; ?>
    <?php if ($terms_of_service_url && $show_terms_of_service): ?>
        <div class="technical-links"><a href="<?php echo esc_url($terms_of_service_url); ?>"><?php _e('Terms of Service', 'logiweb'); ?></a></div>
    <?php endif; ?>
    <a class="portfolio" href="https://logiweb.me" target="_blank" style="text-decoration: underline; color: blue;  ">LoGiudice WebStudios</a>

</footer>

<!-- SCRIPTS LOADING -->
<?php wp_footer(); ?>



</body>
</html>
