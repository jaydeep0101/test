(function ($) {
    "use strict";

    /*====  Document Ready Function =====*/
    jQuery(document).ready(function($){
        //Mobile Menu
        $("#main-menu").slicknav({
            allowParentLinks: true,
            prependTo: '#mobile-menu-wrap',
            label: '',
        });

        $(".mobile-menu-trigger").on("click", function(e) {
            $(".mobile-menu-container").addClass("menu-open");
            e.stopPropagation();
        });

        $(".mobile-menu-close").on("click", function(e) {
            $(".mobile-menu-container").removeClass("menu-open");
            e.stopPropagation();
        });

        // Enable inline Background image
        $("[data-background]").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        // Scroll To Top
        $(window).on("scroll",function(){
            var pagescroll = $(window).scrollTop();
            if(pagescroll > 100){
                $(".scroll-to-top").addClass("scroll-to-top-visible");

            }else{
                $(".scroll-to-top").removeClass("scroll-to-top-visible");
            }
        });

        $(".scroll-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        //Header Search
        $(".header-search").on("click", function(e) {
            $(".header-search-wrapper").addClass("search-open");
            e.stopPropagation();
        });

        $(".search-close").on("click", function(e) {
            $(".header-search-wrapper").removeClass("search-open");
            e.stopPropagation();
        });

      
//////////////////////////////////////////////////////////////////////////////   

//       $('#qt__tt-dropdown-toggle').click(function(){
//       	console.log('Show Container');
//         $('.header-popup-bg').show();
//       });
      
//       $('#qt__close--icon').click(function(){
//         console.log('Hide Container');
//         $('body.tt-popup-dropdown .header-popup-bg').hide();
//       });
     
      
       
//////////////////////////////////////////////////////////////////////////////         
      
     
       	$(".close-icon").click(function(){
  			$(".tt-cart").removeClass("active");
            $(".tt-dropdown-menu").hide();
		});
		
      	$(document).ready(function(){ 
          $(".mm-close").text("");
          });  
        // Home slider
        function TdHomeSlider() {
            var SliderActive = $('.wrd-home-slider-wrapper');

            SliderActive.slick({
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1000, // slide speed
                dots: false,
                fade: true,
                draggable: true,
                pauseOnHover: false,
                arrows: true,
                prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
                nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            });


            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }

            SliderActive.on('init', function (e, slick) {
                var $firstAnimatingElements = $('.wrd-single-slide-item:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });

            SliderActive.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.wrd-single-slide-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });

        }
        TdHomeSlider();


        // Testimonial Two Slider (Vertical )
        $(".wrd-vertical-testimonial-slider").slick({
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1, //1024
                        vertical: false,
                        verticalSwiping: false,
                    }
                }
            ]

        });

        //Header Top Slider
        $(".header-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0, //interval
            speed: 18000, // slide speed
            cssEase: "linear",
            dots: false,
            arrows: false,
            infinite: true,
            pauseOnHover: false,
            centerMode: false,
            variableWidth: true,
            draggable: false,
        });

        $(".wrd-service-details-slider-wrapper").slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: true,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            fade: true,
            pauseOnHover: false,
            centerMode: false,
        });


        //Instagram Slider
        $(".instagram-slider-wrapper").slick({
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: true,
            prevArrow: '<i class="slick-arrow slick-prev flaticon-double-left-chevron"></i>',
            nextArrow: '<i class="slick-arrow slick-next flaticon-double-left-chevron"></i>',
            infinite: true,
            pauseOnHover: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3, //1024
                    }
                },

                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3, //768-991
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // 0 -767
                        arrows: false,
                    }
                }
            ]
        });

        // Project Details Slider
        $(".wrd-project-details-main-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            infinite: true,
            fade: true,
            pauseOnHover: false,
            centerMode: false,
            asNavFor: '.wrd-project-details-slider-nav'
        });

        $(".wrd-project-details-slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000, //interval
            speed: 1500, // slide speed
            dots: false,
            arrows: false,
            infinite: true,
            pauseOnHover: false,
            centerMode: true,
            centerPadding: '0px',
            asNavFor: '.wrd-project-details-main-slider',
            focusOnSelect: true,
        });

        // Accordion
        $(".accordion-wrapper .card-header").on("click", function () {
            if ($(this).hasClass("active")){
                $(this).removeClass("active");
            }else{
                $(".accordion-wrapper .card-header").removeClass("active");
                $(this).addClass("active");
            }
        });


        // Popup Image
        $('.wrd-popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // Popup Video
        $(".wrd-video-button").magnificPopup({
            type: 'video'
        });

        // Toggle Sidebar
        $(".header-mini-cart").on("click", function () {
            $(".toggle-bg, .toggle-cart-products").addClass("toggle-active");
        });

        $(".toggle-close,.toggle-bg").on("click", function () {
            $(".toggle-bg, .toggle-cart-products").removeClass("toggle-active");
        });

        // Skill Bar
        $(".wrd-skillbar").each(function() {
            $(this).appear(function() {
                $(this).find(".wrd-count-bar").animate({
                    width:$(this).attr("data-percent")
                },3000);
            });
        });

        // Post Print
        $(document).on('click', '.print-button', function(e){
            console.log();
            e.preventDefault();
            window.print();
            return false;
        });

        // Wow Init
        new WOW().init();

        $('[data-toggle="tooltip"]').tooltip();

        function incrementValue(e) {
            e.preventDefault();
            var fieldName = $(e.target).data('field');
            var parent = $(e.target).closest('div');
            var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

            if (!isNaN(currentVal)) {
                parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                parent.find('input[name=' + fieldName + ']').val(0);
            }
        }

        function decrementValue(e) {
            e.preventDefault();
            var fieldName = $(e.target).data('field');
            var parent = $(e.target).closest('div');
            var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

            if (!isNaN(currentVal) && currentVal != 1) {
                parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                parent.find('input[name=' + fieldName + ']').val(1);
            }
        }

        $('.number-input-group').on('click', '.button-plus', function(e) {
            incrementValue(e);
        });

        $('.number-input-group').on('click', '.button-minus', function(e) {
            decrementValue(e);
        });



        $(".category-column-settings li").on("click", function () {
            if ($(this).hasClass("active")){
                $(this).removeClass("active");
            }else{
                $(".category-column-settings li").removeClass("active");
                $(this).addClass("active");
            }
        });

        // Desktop Column Settings
        $(".category-column-settings li.xl-column-2").on("click", function(e) {
            $(".category-column").removeClass("col-xl-2 col-xl-3 col-xl-4 td-col-xl-5").addClass('col-xl-6');
        });

        $(".category-column-settings li.xl-column-3").on("click", function(e) {
            $(".category-column").removeClass("col-xl-2 col-xl-3 td-col-xl-5 col-xl-6").addClass('col-xl-4');
        });

        $(".category-column-settings li.xl-column-4").on("click", function(e) {
            $(".category-column").removeClass("col-xl-2 col-xl-4 td-col-xl-5 col-xl-6").addClass('col-xl-3');
        });

        $(".category-column-settings li.xl-column-5").on("click", function(e) {
            $(".category-column").removeClass("col-xl-2 col-xl-3 col-xl-4 col-xl-6 ").addClass('td-col-xl-5');
        });

        $(".category-column-settings li.xl-column-6").on("click", function(e) {
            $(".category-column").removeClass("col-xl-3 col-xl-4 td-col-xl-5 col-xl-6").addClass('col-xl-2');
        });

        // Ipad Pro Column Settings
        $(".category-column-settings li.lg-column-2").on("click", function(e) {
            $(".category-column").removeClass("col-lg-3 col-lg-4").addClass('col-lg-6');
        });

        $(".category-column-settings li.lg-column-3").on("click", function(e) {
            $(".category-column").removeClass("col-lg-3 col-lg-6").addClass('col-lg-4');
        });

        $(".category-column-settings li.lg-column-4").on("click", function(e) {
            $(".category-column").removeClass("col-lg-4 col-lg-6").addClass('col-lg-3');
        });

        // Ipad Column Settings
        $(".category-column-settings li.md-column-2").on("click", function(e) {
            $(".category-column").removeClass("col-md-3 col-md-4").addClass('col-md-6');
        });

        $(".category-column-settings li.md-column-3").on("click", function(e) {
            $(".category-column").removeClass("col-md-3 col-md-6").addClass('col-md-4');
        });

        $(".category-column-settings li.md-column-4").on("click", function(e) {
            $(".category-column").removeClass("col-md-4 col-md-6").addClass('col-md-3');
        });

        // Mobile Column Settings
        $(".category-column-settings li.sm-1").on("click", function(e) {
            $(".category-column").removeClass("col-6").addClass('col-12');
        });

        $(".category-column-settings li.sm-2").on("click", function(e) {
            $(".category-column").removeClass("col-12").addClass('col-6');
        });

    });

    /*====  Window Load Function =====*/
    jQuery(window).on('load', function() {
        //Preloader
        $('.preloader-wrapper').delay(1000).fadeOut('slow');
        setTimeout(function() {
            $('.site').addClass('loaded');
        }, 500);
    });
  

}(jQuery));


$(document).ready(function(){
  
  if ("#test2.contains('.ingredient-section')") {
    
    $("#test2").removeClass("ingredient-section");
    
  $("#test1").addClass("accordion-section");
    
}

});


if($('body').hasClass('pageindex')){
   $(document).find('li.dropdown.tt-megamenu-col-01').first().addClass('active');
};


// $( document ).on    ( 'click', '.tt-desctop-menu ul li', function( ) {       
//         $( ".tt-desctop-menu ul li" ).each( function() {
//             if( $( this ).hasClass( 'selected' ) ) {
//                 $( this ).removeClass( 'selected' );
//             }        
//         });
//         $( this ).addClass( 'selected' );
// });



