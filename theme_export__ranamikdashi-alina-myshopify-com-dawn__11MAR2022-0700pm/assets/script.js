function myFunction() {
  var x = document.getElementById("popup1");
  x.style.display = "none";
}


$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


var swiper = new Swiper(".ourswiper", {
        slidesPerView: 3.5,
        spaceBetween: 20,
   		loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
  
  breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
      		
      		375: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
      		
      		1280: {
            slidesPerView: 3.5,
	        }
        },
    
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


// swippers

 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
   		loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
    breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
      		
      		375: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
      		
      		1280: {
            slidesPerView: 4,
	        }
        },
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



var swiper = new Swiper(".testimonial__swiper", {
  //         loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".slider__swiper", {
        slidesPerView: 1.5,
        spaceBetween: 30,
   		loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
  
  		breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            375: {
                slidesPerView: .5,
//                 spaceBetween: 10
            },
          	
          1280: {
            slidesPerView: 1.5,
	        }
        },
  	
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


var swiper = new Swiper(".journal__swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
   		loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
  		
  		breakpoints: {
          768: {
            slidesPerView: 1.1,
            spaceBetween: 20
          },
          
          1024: {
            slidesPerView: 1.3,
            spaceBetween: 20
          },
          
          375: {
            slidesPerView: .5,
//             spaceBetween: 10
          },

          1280: {
            slidesPerView: 2,
          }
        },
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


$(document).ready(function() {
  $("a.fancybox").fancybox()
});


// document.querySelector('.nav-mobile-menu').addEventListener('click', () => document.querySelector('.navigation__list--items').classList.toggle('show'));
// $('.nav-mobile-menu').click(()=> {
//   console.log('clicked')
// })
                            
                            
                            
                            
                            
//  var t_first = document.getElementById('Option-template--15568098164980__main-0')
 
 	$('#faq_Tab1').hide()
  	$('#faq_Tab2').hide()
    $('#faq_Tab3').hide()
    $('#faq_Tab4').hide()
 $( document ).on( 'change', '.new_tabs', function() {
    var t_first = $( this ).val();
   
   if(t_first == '5') {
	$('#faq_Tab1').show()
  	$('#faq_Tab2').hide()
    $('#faq_Tab3').hide()
    $('#faq_Tab4').hide()
    
}

else if(t_first == '5.5') {
	$('#faq_Tab2').show()
  	$('#faq_Tab1').hide()
    $('#faq_Tab3').hide()
    $('#faq_Tab4').hide()
    
}

else if(t_first == '6') {
  	$('#faq_Tab3').show()
  	$('#faq_Tab1').hide()
    $('#faq_Tab2').hide()
    $('#faq_Tab4').hide()
    
}

else if(t_first == '6.5') {
	$('#faq_Tab4').show()
  	$('#faq_Tab1').hide()
    $('#faq_Tab3').hide()
    $('#faq_Tab2').hide()
    
}

 } );



document.addEventListener("DOMContentLoaded", function() {
          var a = document.querySelector(`.grid__item > #AddToCart.dynamic_paybtn`);
var fakeATC = document.querySelector(`#mst-stiky-box button`);

if (!fakeATC || !a)return;
fakeATC.addEventListener('click', function(){
a.click();
});
            });











// FAQ Page



 var swiper = new Swiper(".faqSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
   		loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
    breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
      		
      		375: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
      		
      		1280: {
            slidesPerView: 4,
	        }
        },
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });













// select all accordion items
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept current item
  accItems.forEach((item) =>
    item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}
