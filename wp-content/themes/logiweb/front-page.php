<?php get_header() ?>
        <div style="display:none" id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <?php for ($i = 0; $i <= 3; $i++): 
                    $image = get_theme_mod("carousel_image_$i");
                    if ($image): ?>
                        <div class="carousel-item <?php echo ($i === 1) ? 'active' : ''; ?>">
                            <img src="<?php echo esc_url($image); ?>" class="d-block w-100" alt="Slide <?php echo $i; ?>">
                        </div>
                    <?php endif; 
                endfor; ?>
            </div>
        </div>

        <?php 
            $hero_media_type = get_theme_mod('hero_media_type', 'video');
            
            // Desktop media
            $hero_video = get_theme_mod('hero_video');
            $hero_image = get_theme_mod('hero_image', get_template_directory_uri() . '/assets/images/hero_image.avif');
            
            // Mobile media (fallback to desktop if not set)
            $hero_video_mobile = get_theme_mod('hero_video_mobile');
            $hero_image_mobile = get_theme_mod('hero_image_mobile');
            
            // Use desktop version if mobile is not set
            if (empty($hero_video_mobile)) {
                $hero_video_mobile = $hero_video;
            }
            if (empty($hero_image_mobile)) {
                $hero_image_mobile = $hero_image;
            }
        ?>
        <section class="hero">
            <?php if ($hero_media_type === 'image'): ?>
                <?php if ($hero_image): ?>
                    <img src="<?php echo esc_url($hero_image); ?>" class="hero-image hero-media-desktop" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                <?php endif; ?>
                <?php if ($hero_image_mobile): ?>
                    <img src="<?php echo esc_url($hero_image_mobile); ?>" class="hero-image hero-media-mobile" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                <?php endif; ?>
            <?php else: ?>
                <?php if ($hero_video): ?>
                    <video autoplay muted loop playsinline class="hero-video hero-media-desktop">
                        <source src="<?php echo esc_url($hero_video); ?>" type="video/mp4">
                        Il tuo browser non supporta i video HTML5.
                    </video>
                <?php endif; ?>
                <?php if ($hero_video_mobile): ?>
                    <video autoplay muted loop playsinline class="hero-video hero-media-mobile">
                        <source src="<?php echo esc_url($hero_video_mobile); ?>" type="video/mp4">
                        Il tuo browser non supporta i video HTML5.
                    </video>
                <?php endif; ?>
            <?php endif; ?>

            <div class="hero-overlay">
                <div class="overlay-content hero-shell">
                    <?php
                        $hero_heading_text = get_theme_mod('hero_heading_text', logiweb_get_hero_heading_default());
                        $hero_description_text = get_theme_mod('hero_description_text', logiweb_get_hero_description_default());
                        $hero_btn_primary_text = get_theme_mod('hero_btn_primary_text', 'Get Your Free Home Assessment');
                        $hero_btn_secondary_text = get_theme_mod('hero_btn_secondary_text', 'Explore Services');
                        $hero_heading_with_highlight = preg_replace(
                            '/(Expert\s+Painting)/i',
                            '<span class="hero-title-highlight">$1</span>',
                            esc_html($hero_heading_text),
                            1
                        );
                    ?>

                    <div class="hero-copy">
                        <span class="hero-badge"><span class="hero-badge-dot" aria-hidden="true"></span>#1 Rated Painting Company in the Tri-State Area</span>
                        <h1 class="hero-title"><?php echo wp_kses($hero_heading_with_highlight, array('span' => array('class' => array()))); ?></h1>
                        <p class="hero-description"><?php echo esc_html($hero_description_text); ?></p>

                        <ul class="hero-benefits">
                            <li><span class="hero-benefit-icon" aria-hidden="true"></span>Licensed &amp; Insured Professionals</li>
                            <li><span class="hero-benefit-icon" aria-hidden="true"></span>Premium Quality Paints &amp; Materials</li>
                            <li><span class="hero-benefit-icon" aria-hidden="true"></span>Free Color Consultation</li>
                            <li><span class="hero-benefit-icon" aria-hidden="true"></span>5-Year Warranty on All Work</li>
                        </ul>

                        <div class="hero-buttons">
                            <a href="<?php echo esc_url(get_theme_mod('hero_btn_primary_url')); ?>" class="btn-primary hero-button-primary"><?php echo esc_html($hero_btn_primary_text); ?> <span class="hero-button-arrow" aria-hidden="true">→</span></a>
                            <a href="<?php echo esc_url(get_theme_mod('hero_btn_secondary_url')); ?>" class="btn-secondary hero-button-secondary"><?php echo esc_html($hero_btn_secondary_text); ?></a>
                        </div>

                        <div class="hero-trust">
                            <div class="hero-trust-avatars" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="hero-trust-copy">500+ Happy Homeowners</div>
                            <div class="hero-trust-rating"><span aria-hidden="true">★</span> 4.9 Google Reviews</div>
                        </div>
                    </div>

                    <div class="hero-form-card">
                        <h2>Get Your Free Quote</h2>
                        <p>Fill out the form below and we will get back to you within 24 hours</p>

                        <div class="hero-quote-form-container">
                            <?php echo do_shortcode('[contact-form-7 id="d1064b0" title="Hero Quote Form"]'); ?>
                        </div>

                        <small>By submitting, you agree to our Privacy Policy and Terms of Service</small>

                        <a class="hero-form-phone" href="tel:(555) 123-4567">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4" aria-hidden="true" code-path="src/pages/Home.tsx:135:19"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            <span>(555) 123-4567</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        

        <section>


            <?php

                if( have_posts() ){
                    while( have_posts()){
                        the_post();
                        the_content();
                    }
                }
                
            ?>    

        </section>

<?php get_footer(); ?>
