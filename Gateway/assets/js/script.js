// Header
$(".toggle-menu").click(function () {
  $(".sidebar").addClass("active");
  $(".close-sidebar").addClass("active");
  $("body").addClass("overflow");
  $("html").addClass("overflow");
});
$(".close-sidebar").click(function () {
  $(".sidebar").removeClass("active");
  $(this).removeClass("active");
  $("body").removeClass("overflow");
  $("html").removeClass("overflow");
});
$(".btn-close-sidebar").click(function () {
  $(".sidebar").removeClass("active");
  $(".close-sidebar").removeClass("active");
  $("body").removeClass("overflow");
  $("html").removeClass("overflow");
});
// $(document).keyup(function (e) {
//     $(".sidebar").removeClass("active");
//     $(".close-sidebar").removeClass("active");
//     $("body").removeClass("overflow");
//     $("html").removeClass("overflow");
// });

// Sub menu dropdown
$(".drop-menu").click(function () {
  $(".drop-menu").toggleClass("fa-sort-up");
  $(".sub-menu").slideToggle("slow");
});

// Filter dropdown
$(".filter-toggle").click(function () {
  $(".filter-toggle i").toggleClass("fa-sort-up");
  $(".filter-menu").slideToggle("slow");
});

// Desktop submenu
// $(".desktop-sub-menu").mouseover(function () {
//   $(".main-submenu").addClass("active");
// });
// $(".main-submenu").mouseleave(function () {
//   $(".main-submenu").removeClass("active");
// });

// $(".desktop-sub-menu").click(function () {
//     $(".main-submenu").slideToggle("active");
// });

// Sticky header
$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".header").addClass("is-sticky");
    $(".main-submenu").addClass("is-sticky");
  } else {
    $(".header").removeClass("is-sticky");
    $(".main-submenu").removeClass("is-sticky");
  }
});

// smooth scroll jquery
//   function scrollNav() {
// 	$('ul a').click(function(){
// 	  $("ul  .active").removeClass("active");
// 	  $(this).addClass("active");

// 	  $('html, body').stop().animate({
// 		scrollTop: $($(this).attr('href')).offset().top - 70
// 	  }, 300);
// 	  return false;
// 	});
//   }
//   scrollNav();

// pre-loader
window.addEventListener("load", (event) => {
  setTimeout(function () {
    $(".preloader-activate").removeClass("preloader-active");
  }, 50000);
});

$(window).on("load", function () {
  setTimeout(function () {
    $(".open_tm_preloader").addClass("loaded");
  }, 5000);
});

function setCookie(cname, cvalue, exdays) {
  // const d = new Date();
  // d.setTime(d.getTime() + (exdays*24*60*60*1000));
  // let expires = "expires="+ d.toUTCString();
  // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

  // console.log( cname + "=" + cvalue + ";" + expires + ";path=/" );
  // \
  localStorage.setItem(cname, cvalue);
}

function getCookie(cname) {
  return localStorage.getItem(cname);
  // let name = cname + "=";
  // let decodedCookie = decodeURIComponent(document.cookie);
  // let ca = decodedCookie.split(';');
  // for(let i = 0; i <ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //     c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //     return c.substring(name.length, c.length);
  //     }
  // }
  // return "";
}

function changeMode(mode) {
  if ("" == mode) {
    return;
  }

  console.log("changing mode" + mode);
  if ("dark" === mode) {
    body.classList.remove("light-version");
    body.classList.add("dark-version");

    if ( light ) {
      light.classList.remove("dark-color");
      light.classList.add("light-color");
    }

    
  } else {
    body.classList.add("light-version");
    body.classList.remove("dark-version");

    if ( light ) {
      light.classList.add("dark-color");
      light.classList.remove("light-color");
    }
   
  }

  setCookie("currentmode", mode, 365);
}

// Light and dark mode JS
const btnDarkMode = document.querySelector("#mode");
const body = document.querySelector("html");
const light = document.querySelector(".cta");
btnDarkMode.addEventListener("click", (e) => {
  if (btnDarkMode.checked) {
    changeMode("dark");
  } else {
    changeMode("light");
  }
});

function getCurrentMode() {
  let currentMode = getCookie("currentmode");

  console.log("current mode");
  console.log(currentMode);
  if (
    "undefined" === typeof currentMode ||
    currentMode == "" ||
    !("dark" === currentMode || "light" === currentMode)
  ) {
    currentMode = "light";
  }

  return currentMode;
  
}

let currentMode = getCurrentMode();

console.log(currentMode);
if (currentMode !== "light") {
  console.log("chaging mode");

  var checkBox = document.getElementById("mode");

  checkBox.checked = true;
  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");
  sun.style.display = "block";
  moon.style.display = "none";

  changeMode("dark");
}



function mode() {
  var checkBox = document.getElementById("mode");
  var moon = document.getElementById("moon");
  var sun = document.getElementById("sun");

  if (checkBox.checked == true) {
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
  }
}


//   Feather JS
feather.replace();

// video autoplay for loader

// document.getElementById("vid").play();

// Search box
$("#search-btn").click(function () {
  $(".header__menu--search").toggleClass("show-search");
  $(".icon-close").toggleClass("show");
  $(".icon-search").toggleClass("hide");
  $(".header__menu--item").toggleClass("hide");
});

// Mobile Search
$("#sidebar-search-btn").click(function () {
  $(".sidebar__search").toggleClass("show-search");
  $(".icon-close").toggleClass("show");
  $(".icon-search").toggleClass("hide");
});

// Banner slider
// var banner__small = new Swiper(".index-small-banner-slider", {
//     loop: false,
//     spaceBetween: 0,
//     slidesPerView: 5.5,
//     freeMode: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         1199: {
//             slidesPerView: 5.5,
//             spaceBetween: 0,
//             centeredSlides: false,
//         },
//         991: {
//             slidesPerView: 3.5,
//             spaceBetween: 0,
//         },
//         320: {
//             slidesPerView: 2.3,
//             spaceBetween: 0,
//         },
//     },
// });

var banner__small = new Swiper(".index-small-banner-slider", {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1199: {
      slidesPerView: 6,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

var banner__main = new Swiper(".index-main-banner-slider", {
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  effect: "fade",
  thumbs: {
    swiper: banner__small,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  on: {
    init: function () {
      //    console.log('swiper initialized');
      $(".banner__small--slider-box span").css("width", "0%");
      var element = $(document)
        .find(".swiper-slide-thumb-active .banner__small--slider-box")
        .find("span");

      element.animate({ width: "100%" }, 5000);
    },
    transitionStart: function () {
      //    console.log('starting slider change');
      $(".banner__small--slider-box span").stop().css("width", "0%");
      var element = $(document)
        .find(".swiper-slide-thumb-active .banner__small--slider-box")
        .find("span");

      element.stop().animate({ width: "100%" }, 5000);
    },
  },
});

// function slid() {

//     // $( '.banner__small--slider-box' ).removeClass( 'anim' );

//     $( '.banner__small--slider-box' ).each( function() {

//         // setTimeout(function () {
//             // $(".open_tm_preloader").addClass("loaded");
//             if( ! $( this ).parent().hasClass( 'swiper-slide-thumb-active' ) ) {
//             //    alert("hi");
//                 $( this ).removeClass( 'anim' );

//             }
//         // }, 5000);

//     } );

//     var active = $(document).find( '.swiper-slide-thumb-active' );

//     if( ! active.find( '.banner__small--slider-box' ).hasClass( 'anim' ) ) {

//         var slideDuration = 5000;

//         $(document).find( '.swiper-slide-thumb-active' ).find( '.banner__small--slider-box' ).addClass( 'anim' );

//     }
// }

// slid();
// setInterval(function () {
//     slid();
// }, 100);

//   service slider
var service_Slider = new Swiper(".service__slider", {
  loop: false,
  slidesPerView: 3.5,
  spaceBetween: 70,
  centeredSlides: false,
  keyboardControl: true,
  grabCursor: false,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3.5,
      spaceBetween: 70,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2.5,
      spaceBetween: 17,
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },
  },
});

//   product_feature__image_box slider
var product_feature__image_box = new Swiper(".product-feature__image-box", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: false,
  keyboardControl: true,
  grabCursor: false,
});

// Blog Slider
var blog_slider = new Swiper(".blog-slider", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 70,
  centeredSlides: false,
  keyboardControl: true,
  grabCursor: false,
  breakpoints: {
    1199: {
      slidesPerView: 3,
      spaceBetween: 70,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 1.5,
      spaceBetween: 17,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
  },
});

//   product-page slider
var product_slider = new Swiper(".product-slider--slider", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 70,
  centeredSlides: true,
  keyboardControl: true,
  grabCursor: false,
  navigation: {
    nextEl: ".product-slider__next",
    prevEl: ".product-slider__prev",
  },
  pagination: {
    el: ".slide_number",
    type: "fraction",
  },
  breakpoints: {
    1199: {
      slidesPerView: 1.5,
      spaceBetween: 70,
    },
    991: {
      slidesPerView: 1.5,
      spaceBetween: 17,
    },
    320: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
  },
});

// Client logo slider
var client_logo = new Swiper(".client__slider", {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 5.5,
  spaceBetween: 70,
  speed: 2000,
  grabCursor: false,
  mousewheelControl: true,
  keyboardControl: true,

  breakpoints: {
    1199: {
      slidesPerView: 5.5,
      spaceBetween: 70,
    },
    991: {
      slidesPerView: 3.5,
      spaceBetween: 17,
    },
    320: {
      slidesPerView: 1.05,
      spaceBetween: 16,
    },
  },
  on: {
    transitionStart: function (e) {
      get_swiper_slide_index();
      // if ( e.slides[e.activeIndex].hasClass( 'change-title' ) ){

      //     console.log( 'chnage class');

      // }
      // console.log( e );
      //    console.log('starting slider change');
      //    $('.banner__small--slider-box span').stop().css('width', '0%');
      //     var element =  $(document).find( '.swiper-slide-thumb-active .banner__small--slider-box' ).find('span');

      //     element.stop().animate({ width: '100%' }, 5000);
    },
  },
});

function get_swiper_slide_index() {
  var change_title_slide_index = jQuery(".client__slide-change-title").data(
    "swiper-slide-index"
  );

  // console.log(change_title_slide_index  );

  var active_slide_index = jQuery(".swiper-slide-duplicate-active").data(
    "swiper-slide-index"
  );
  // console.log( active_slide_index );

  if (active_slide_index >= change_title_slide_index) {
    // console.log( 'change title' );
    $(" .client__title-span-partner ").show();
    $(" .client__title-span-customer ").hide();
  } else {
    // console.log( 'revert title' );
    $(" .client__title-span-customer ").show();
    $(" .client__title-span-partner ").hide();
  }
}

// $('swiper-slide.client__slide').each(function(){
//     if($(this).hasClass('swiper-slide-duplicate-active')) {
//       var get_html = $(this).find(".caption").html();
//       $("#current-caption").html(get_html);
//     }
// });

$(".client__slider").hover(
  function () {
    // console.log("stop");
    client_logo.autoplay.stop();
  },
  function () {
    // console.log("start");
    client_logo.autoplay.start();
  }
);
$(".client__slider a").hover(function () {
  $(".sidebar__search").toggleClass("show-search");
});

// News Tabbing filter
if ($(document).find("#grid").length > 0) {
  var $grid = $("#grid").isotope({
    itemSelector: ".col-12",
    layoutMode: "fitRows",
  });
}
$("#filters").on("click", "a", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

// privacy close
$("#accept-cookie").click(function () {
  $("#privacy").css("display", "none");
});

// Testimonial animation
$(document).on("click", ".testi__dots--item", function () {
  $(".test__box--span").find("#halfclip").remove();
  $(".test__box--span").find(".halfcircle").remove();
  var title = $(this).attr("data-title");
  var desc = $(this).attr("data-desc");
  var pos = $(this).attr("data-pos");
  var img = $(this).find(".testi__dots--img").attr("src");

  $(".testi__box--img-item").attr("src", img);
  $(".testi__box--text p").html(desc);
  $(".testi__box--title h3").html(title);
  $(".testi__box--position p").html(pos);

  $(".testi__dots--item").removeClass("active");
  $(this).addClass("active");

  $(".test__box--span").append(`<div id="halfclip" class="main-clip">
    <div class="halfcircle" id="clipped"></div>
</div>
<div class="halfcircle" id="fixed"></div>`);
});
// change on timing

function animateC() {
  var j = 1;
  $(".testi__dots--item").each(function (i, ele) {
    $(".test__box--span").find("#halfclip").remove();
    $(".test__box--span").find(".halfcircle").remove();

    var title = $(this).attr("data-title");
    var desc = $(this).attr("data-desc");
    var pos = $(this).attr("data-pos");
    var img = $(this).find(".testi__dots--img").attr("src");

    setTimeout(function () {
      $(".testi__box--img-item").attr("src", img);
      $(".testi__box--text p").html(desc);
      $(".testi__box--title h3").html(title);
      $(".testi__box--position p").html(pos);

      $(".testi__dots--item").removeClass("active");
      $(ele).addClass("active");
    }, (i + 1) * 8000);

    $(".test__box--span").append(`<div id="halfclip" class="main-clip">
                                            <div class="halfcircle" id="clipped"></div>
                                        </div>
                                        <div class="halfcircle" id="fixed"></div>`);
  });
}
animateC();

setInterval(function () {
  animateC();
}, 24000); // apply class length multiply with setTimeout interval EX ( 3-slide * 3000-second = 9000)

// Sticky single news
$(document).ready(function () {
  if ($(window).width() < 1440) {
    var width = 1440;
    custom_sticky(150);
  } else {
    custom_sticky(250);
  }

  function custom_sticky(topSize) {
    var nav = $(".sub-sticky");
    if (nav.length) {
      // var contentNav = nav.offset().top;
      var stickyTop = nav.offset().top;
      $(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        if (
          stickyTop < windowTop &&
          $(".main-sticky").height() +
            $(".main-sticky").offset().top -
            $(".sub-sticky").height() >
            windowTop
        ) {
          $(".sub-sticky").css("position", "fixed");
          $(".sub-sticky").css("top", topSize + "px");
        } else {
          $(".sub-sticky").css("position", "relative");
          $(".sub-sticky").css("top", "0");
        }
      });
    }
  }
});

// change text on hover
$(".prev-text").mouseenter(function () {
  $(".hover-text").text("Key Performance Indicators - KPI");
});
$(".prev-text").mouseleave(function () {
  $(".hover-text").text("👈 Hover anyone 👉");
});

$(".next-text").mouseenter(function () {
  $(".hover-text").text("First Iraqi Bank - FIB");
});
$(".next-text").mouseleave(function () {
  $(".hover-text").text("👈 Hover anyone 👉");
});

// New JS

// About Banner Slider

var aboutbanner_Slider = new Swiper(".aboutbanner__slider", {
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 20,
  centeredSlides: false,
  a11y: true,
  keyboardControl: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  paginationClickable: true,
  pagination: {
    el: ".aboutbanner__dots",
    clickable: true,
  },
});

//   Leader Slider
var leader_Slider = new Swiper(".leader-slider", {
  loop: false,
  slidesPerView: 4.1,
  spaceBetween: 30,
  centeredSlides: false,
  keyboardControl: true,
  grabCursor: false,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    1599: {
      slidesPerView: 4.1,
      spaceBetween: 70,
      centeredSlides: false,
    },
    1199: {
      slidesPerView: 4.5,
      spaceBetween: 50,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
  },
});

//   Service System Slider
var service_system_Slider = new Swiper(".services-system__slider", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  keyboardControl: true,
  grabCursor: false,
  mousewheel: {
    releaseOnEdges: true,
  },
  breakpoints: {
    1599: {
      slidesPerView: 3,
      spaceBetween: 70,
      centeredSlides: false,
    },
    1199: {
      slidesPerView: 3.5,
      spaceBetween: 50,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1.25,
      spaceBetween: 24,
    },
  },
});

//   Services Steps Slider
var service_steps_Slider = new Swiper(".services-steps-slider", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  keyboardControl: true,
  grabCursor: false,
  breakpoints: {
    1599: {
      slidesPerView: 3,
      spaceBetween: 70,
      centeredSlides: false,
    },
    1199: {
      slidesPerView: 3.5,
      // slidesPerView: 3.2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1.55,
      spaceBetween: 30,
    },
  },
});

// Social Share Button
var contentToToggle = $(".social-share__main--items");

$(".js-btn-open").on("click", function (e) {
  e.preventDefault();
  contentToToggle.toggleClass("open");

  if ($(document).find(".js-btns-share").hasClass("open")) {
    console.log("this is working");
    $(document).find(".js-btn-open-before").css("opacity", "1");
  } else {
    $(document).find(".js-btn-open-before").css("opacity", "0");
  }
});

// Contact Form Dropdown
$(document).ready(function () {
  var dropdown = document.querySelector(".dropdown");
  var dropdown_btn = document.querySelector(".dropdown-btn");
  var dropdown_content = document.querySelector(".dropdown-content");
  var dropdown_item = document.querySelectorAll(".dropdown-item");
  var arrow = document.querySelector(".fas");

  document.addEventListener("click", function (e) {
    if (e.target == dropdown_btn) {
      return;
    }
    // else {

    //     if (dropdown_content.classList.contains("active")) {
    //         dropdown_content.classList.remove("active");
    //         dropdown_btn.classList.remove("active");
    //         dropdown_btn.classList.remove("active");
    //         arrow.classList.remove("fa-sort-up");
    //     }
    // }
  });

  dropdown.addEventListener("click", function () {
    this.classList.toggle("active");
    dropdown_content.classList.toggle("active");
    dropdown_btn.classList.toggle("active");
    arrow.classList.toggle("fa-sort-up");
  });

  for (let i = 0; i < dropdown_item.length; i++) {
    dropdown_item[i].addEventListener("click", function () {
      dropdown_btn.getElementsByTagName("p")[0].textContent = this.textContent;
      console.log(this.dataset.value);
    });
  }

  var mobile_dropdown = document.querySelector(".mobile_dropdown");
  var mobile_dropdown_btn = document.querySelector(".mobile_dropdown-btn");
  var mobile_dropdown_content = document.querySelector(
    ".mobile_dropdown-content"
  );
  var mobile_dropdown_item = document.querySelectorAll(".mobile_dropdown-item");
  var mobile_arrow = document.querySelector(".mobile_fas");

  document.addEventListener("click", function (e) {
    if (e.target == mobile_dropdown_btn) {
      return;
    } else {
      if (mobile_dropdown_content.classList.contains("active")) {
        mobile_dropdown_content.classList.remove("active");
        mobile_dropdown_btn.classList.remove("active");
        mobile_dropdown_btn.classList.remove("active");
        mobile_arrow.classList.remove("fa-sort-up");
      }
    }
  });

  mobile_dropdown.addEventListener("click", function () {
    this.classList.toggle("active");
    mobile_dropdown_content.classList.toggle("active");
    mobile_dropdown_btn.classList.toggle("active");
    mobile_arrow.classList.toggle("fa-sort-up");
  });

  for (let i = 0; i < mobile_dropdown_item.length; i++) {
    mobile_dropdown_item[i].addEventListener("click", function () {
      mobile_dropdown_btn.getElementsByTagName("p")[0].textContent =
        this.textContent;
      console.log(this.dataset.value);
    });
  }
});

$(document).ready(function () {
  $(".contactform__form--inputbox-inner").find("span").hide();
});

$(".scroll a.custom-btn.btn-arrow").click(function () {
  if ($(" .header ").hasClass(" is-sticky ")) {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 20,
      },
      800
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 150,
      },
      800
    );
  }
  return false;
});

//   $('.light-version').

// Code By qrolic technologies  Start //
// prealoder

if ($(".dark-version")[0]) {
  $(".light__screen").hide();
  $(".dark__screen").show();
} else {
  $(".dark__screen").hide();
  $(".light__screen").show();
}

$(document).ready(function(){
    $("#desktop-sub-menu").click(function(){
      $(".main-submenu").stop().slideToggle("slow");
      $(".main-submenu.active ").stop().slideToggle("slow");   
    });
  });

$(document).on("click", ".main-submenu__item", function () {
  $(".main-submenu__item").each(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
  });

  $(this).addClass("active");
});

// Search Bar 
$("#header__menu--search").focusin(function(){
  $(this).css("border-bottom", "2px solid var(--text-100)");
});
$("#header__menu--search").focusout(function(){
  $(this).css("border-bottom", "2px solid var(--text-40) ");
});

$('#search-btn').on('click',function(){
  $("#myInput").val('');
})

// Contact Form 
$(".contactform__form--inputbox-inner input").focusout(function() {
  $("this").css("border-bottom", "2px solid var(--text-40)");
});

$(".contactform__form--inputbox-inner textarea").focusin(function(){
  $(this).css("border-bottom", "2px solid #00173880");
});
$(".contactform__form--inputbox-inner textarea").focusout(function(){
  $(this).css("border-bottom", "2px solid var(--text-40) ");
});

function contactFormText() {
  let currentModeContectForm = getCurrentMode();
    const contctFormCheck = () => {
    if (currentModeContectForm === 'dark') {
      $(".contactform__form--inputbox-inner textarea").focusin(function(){
        $(this).css("border-bottom", "2px solid rgba(255, 255, 255, .7)");
      });
      $(".contactform__form--inputbox-inner textarea").focusout(function(){
        $(this).css("border-bottom", "2px solid rgba(255, 255, 255, .5) "); 
      });
      $(".contactform__form--inputbox-inner input").focusin(function(){
        $(this).css("border-bottom", "2px solid rgba(255, 255, 255, .7)");
      });
      $(".contactform__form--inputbox-inner input").focusout(function(){
        $(this).css("border-bottom", "2px solid rgba(255, 255, 255, .5) ");
      });
    }
    else {
      $(".contactform__form--inputbox-inner input").focusout(function() {
        $("this").css("border-bottom", "2px solid var(--text-40)");
      });
      $(".contactform__form--inputbox-inner textarea").focusin(function(){
        $(this).css("border-bottom", "2px solid #00173880");
      });
      $(".contactform__form--inputbox-inner textarea").focusout(function(){
        $(this).css("border-bottom", "2px solid var(--text-40) ");
      });
    }
  }
  contctFormCheck();
}

$('#mode').click(function(){
  contactFormText();
});

$(document).ready(function () {
  var count = $("#box").children().length;
  // alert(count);

  check_count(count);
  function check_count(count) {
    if (count >= 10) {
      $(".product__navigation").show();
    } else {
      $(".product__navigation").hide();
    }
  }
});
// Code By qrolic technologies  End //


