
// Slick Slider
$('.testimonial-carousel').slick({
  infinite: true,
  slidesToShow: 1, // Shows a three slides at a time
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});


$('.study-carousel.slick-carousel').slick({
  infinite: true,
  arrows: true,

  slidesToShow: 3, // Shows a three slides at a time
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 5, // Shows a three slides at a time
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
