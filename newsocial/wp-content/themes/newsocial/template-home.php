<?php 
// Template Name: Home

    get_header();
?>

<!-- Header Banner Start -->
<section>
    <div class="banner">
        <div class="container p-0">
            <div class="banner__inner">
                <div class="banner__title">
                    <h1><?php the_field('title'); ?></h1>
                </div>
                <div class="banner__sub--title">
                    <h3><?php the_field('sub_title'); ?></h3>
                </div>
                <div class="banner__text">
                    <p><?php the_field('description'); ?></p>
                </div>
                <div class="banner__btn ">
                    <a href="#" class="custom__button"><?php the_field('banner_button'); ?></a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Header Banner End -->

<!-- Social Section Start -->
<section>
    <div class="social">
        <div class="container ">
            <div class="social__inner">
                <div class="social__items desktop">
                    <ul>
                        <?php 
                            if( have_rows('soical_media_reapeter') ){

                                // Loop through rows.
                                while( have_rows('soical_media_reapeter') ) {
                                     the_row();
                        ?>
                        <li><?php echo get_sub_field('social_icon_name'); ?></li>
                        <?php
                         } 
                        }
                        ?>
                    </ul>
                </div>
                <div class="social__items mobile">
                    <ul class="row">
                    <?php 
                            if( have_rows('soical_media_reapeter') ){

                                // Loop through rows.
                                while( have_rows('soical_media_reapeter') ) {
                                     the_row();
                        ?>
                        <div class="col-6">
                        <li><?php echo get_sub_field('social_icon_name'); ?></li>
                                </div>
                        <?php }}?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Social Section End -->

<!-- Pricing Tab Section Start -->
<section>
    <div class="pricing">
        <div class="container">
            <div class="pricing__inner">
                <div class="row custom__row">
                    <?php 
                        if( have_rows('pricing_box_reapeter') ) {
                            while( have_rows('pricing_box_reapeter') ) {
                                 the_row();
                    ?>
                    <div class="col-lg-3">
                        <div class="pricing__box">
                            <div class="pricing__box--header">
                                <h2><?php echo get_sub_field('pricing_title'); ?></h2>
                            </div>
                            <div class="pricing__box--inside">
                                <div class="pricing__box--text ">
                                    <p><?php echo get_sub_field('pricing_text'); ?></p>
                                </div>
                                <div class="pricing__box--price">
                                    <h2><?php echo get_sub_field('pricing_box_price'); ?></h2>
                                </div>
                                <div class="pricing__box--items">
                                    <ul>
                                    <?php 
                                        if( have_rows('pricing_list_items') ) {
                                            while( have_rows('pricing_list_items') ) {
                                                the_row();
                                    ?>
                                        <li><?php echo get_sub_field('pricing_list'); ?></li>
                                        <?php } } ?>
                                    </ul>
                                </div>
                                <div class="pricing__box--button">
                                    <a href="#"><?php echo get_sub_field('pricing_button'); ?></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php 
                        } 
                    }
                    ?>
                </div>

                <div class="pricing__after">
                    <h2><?php the_field('after_pricing_title'); ?></h2>

                    <div class="row custom__justify">
                    <?php 
                        if( have_rows('after_pricing_reapeter') ) {
                            while( have_rows('after_pricing_reapeter') ) {
                                 the_row();
                    ?>
                        <div class="col-lg-5">
                            <div class="pricing__after--text">
                                <p><?php echo get_sub_field('after_pricing_text'); ?></p>
                            </div>
                        </div>
                        <?php } } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Pricing Tab Section End -->

<!-- Gallery Section Start -->
<section>
    <div class="gallery">
        <div class="container">
            <div class="gallery__inner">
                <div class="gallery__button">
                    <a href="#" class="custom__button"><?php the_field('gallery_title'); ?></a>
                </div>
                <div class="gallery__text">
                    <h2><?php the_field('gallery_text'); ?></h2>
                </div>
                <div class="gallery__items">
                    <div class="row">
                    <?php 
                        if( have_rows('gallery_reapeter') ) {
                            while( have_rows('gallery_reapeter') ) {
                                 the_row();
                    ?>
                        <div class="col-lg-4">
                            <div class="gallery__box">
                                <div class="gallery__box--image">
                                    <img src="<?php echo get_sub_field('gallery_image'); ?>" alt="">
                                </div>
                                <div class="gallery__box--title">
                                    <h2><?php echo get_sub_field('gallery_box_title'); ?></h2>
                                </div>
                                <div class="gallery__box--description">
                                    <p><?php echo get_sub_field('gallery_box_description'); ?></p>
                                </div>
                            </div>
                        </div>
                        <?php
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Gallery Section End -->

<!-- Video Section Start -->
<section>
    <div class="video">
        <div class="container">
            <div class="video__inner">
                <div class="video__title">
                    <h2><?php the_field('video_title'); ?></h2>
                </div>
                <div class="video__text">
                    <p><?php the_field('video_description'); ?></p>
                </div>
                <div class="video__image">
                    <img src="<?php the_field('video_image'); ?>" alt="">
                    <div class="overlay">
                        <img src="<?php the_field('video_overlay_image'); ?>" alt="">
                    </div>
                    <div class="video__icon">
                        <i class="far fa-caret-circle-right"></i>   
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</section>
<!-- Video Section End -->

<!-- About Section Start -->
<section>
    <div class="about">
        <div class="container">
            <div class="about__inner">
                <div class="about__title">
                    <h2><?php the_field('about_title'); ?></h2>
                </div>
                <div class="about__items">
                    <div class="row">
                    <?php 
                        if( have_rows('about_first_reapeter') ) {
                            while( have_rows('about_first_reapeter') ) {
                                 the_row();
                    ?>
                        <div class="col-lg-6">
                            <p><?php echo get_sub_field('about_first_description'); ?></p>
                        </div>
                        <?php } }?>
                    </div>
                </div>
                <div class="account__title">
                        <h3><?php the_field('create_account_title'); ?></h3>
                </div>
                <div class="about__para">
                <div class="row">
                <?php 
                        if( have_rows('about_second_reapeter') ) {
                            while( have_rows('about_second_reapeter') ) {
                                 the_row();
                    ?>
                    <div class="col-lg-6">
                        <p><?php echo get_sub_field('about_second_description'); ?></p>
                    </div>
                    <?php } }?>
                </div>
                            </div>
                <div class="why_title">
                        <h3><?php the_field('why_title'); ?></h3>
                </div>

                <div class="why__first--para">
                    <p><?php the_field('why_first_description'); ?></p>
                </div>

                <div class="why__first--para">
                    <p><?php the_field('why_second_description'); ?></p>
                </div>

                <div class="why__first--para why__third--para">
                    <p><?php the_field('why_third_description'); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- About Section End -->


<!-- News Section Start -->
<section>
    <div class="news">
        <div class="hr"></div>
        <div class="container">
            <div class="news__inner">
                <div class="news__title">
                    <div class="news__title--first">
                        <h2><?php the_field('news_title_first'); ?></h2>
                    </div>
                    <div class="news__main--division news__main--division-first">
                         <?php 
                            if( have_rows('news_first_reapeter') ) {
                              while( have_rows('news_first_reapeter') ) {
                                 the_row();
                        ?>
                        <div class="inside-<?php echo get_row_index(); ?>">
                            <p><?php echo get_sub_field('news_description'); ?></p>
                        </div>
                        <?php } } ?>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10">
                        <div class="news__big--title">
                            <h2><?php the_field('news_second_title'); ?></h2>
                        </div>
                        <div class="news__main--division news__main--division-second">
                        <?php 
                                    if( have_rows('news_second_reapeter') ) {
                                    while( have_rows('news_second_reapeter') ) {
                                        the_row();
                                ?>
                            <div class="inside-<?php echo get_row_index(); ?>">
                                <p><?php echo get_sub_field('news_second_description'); ?></p>
                            </div>
                            <?php } } ?>
                        </div>
                        
                        <div class="news__sm--title">
                            <h2><?php the_field('news_third_title'); ?></h2>
                        </div>
                        <div class="news__main--division news__main--division-third">
                        <?php 
                                    if( have_rows('news_third_reapeter') ) {
                                    while( have_rows('news_third_reapeter') ) {
                                        the_row();
                                ?>
                            <div class="inside-<?php echo get_row_index(); ?>">
                                <p><?php echo get_sub_field('news_third_description'); ?></p>
                            </div>
                            <?php } } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="empty__box"></div>
    </div>
</section>
<!-- News Section End -->

<?php get_footer(); ?>
