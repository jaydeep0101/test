

// About Banner Slider

var aboutbanner_Slider = new Swiper('.aboutbanner__slider', {
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
    paginationClickable: true,
    pagination: {
        el: ".aboutbanner__dots",
        clickable: true
    },
});

//   Leader Slider
var leader_Slider = new Swiper(".leader-slider", {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    keyboardControl: true,
    grabCursor: false,
    breakpoints: {
        1599: {
            slidesPerView: 4,
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
            slidesPerView: 1.5,
            spaceBetween: 20,
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
            slidesPerView: 1.5,
            spaceBetween: 20,
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
            spaceBetween: 50,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
    },
});

// Social Share Button
var contentToToggle = $('.social-share__main--items');

$('.js-btn-open').on('click',
    function (e) {
        e.preventDefault()
        contentToToggle.toggleClass('open');
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
        } else {

            if (dropdown_content.classList.contains("active")) {

                dropdown_content.classList.remove("active");
                dropdown_btn.classList.remove("active");
                dropdown_btn.classList.remove("active");
                arrow.classList.remove("fa-sort-up");
            }
        }
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
    var mobile_dropdown_content = document.querySelector(".mobile_dropdown-content");
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
            mobile_dropdown_btn.getElementsByTagName("p")[0].textContent = this.textContent;
            console.log(this.dataset.value);
        });
    }
});


$(document).ready(function () {
    $('.contactform__form--inputbox-inner').find('span').hide();
})