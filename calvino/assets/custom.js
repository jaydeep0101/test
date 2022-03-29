




// $(document).ready(function() {
//   $(window).scroll(function(){
//       if ($(this).scrollTop() > 250) {
//          $('.qt-sticky__header').css('display','inherit');
//       } else {
//          $('.qt-sticky__header').css('display','none');
//       }
//   });
// });





// $(document).ready(function() {
//   $(window).scroll(function(){
//       if ($(this).scrollTop() > 250) {
//          $('.qt-simple__header').css('display','none');
//       } else {
//          $('.qt-simple__header').css('display','grid');
//       }
//   });
// });

// $(document).on('click', '.summary.header__icon.header__icon--menu', function(event) { 
//     event.preventDefault(); 
//     $(".qt-menu-drawer-container").click(); 
// });








//  Counter //
$('.counter-title').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
})


$('#toggle-fading').click(function(){
  $('img').fadeToggle('slow');
});


//  Back Top
$('#back-top').hide();
$(window).scroll(function() {

  if ($(this).scrollTop()<50)
  {
    $('#back-top').fadeOut();
  }
  else
  {
    $('#back-top').fadeIn();
    $('#back-top').show();
  }
});






// change bars
$('#qtHomgarMenu').click(function(){
  element = $('#icons-bars');

  if($('#icons-bars').hasClass('fa-bars')){
    $( "#icons-bars" ).addClass( 'fa-xmark' );
    $( "#icons-bars" ).removeClass( 'fa-bars' );
  } else {
    $( "#icons-bars" ).removeClass( 'fa-xmark' );
    $( "#icons-bars" ).addClass( 'fa-bars' );
  }


});



// hide show homgarmenu
$(document).ready(function(){
  $("#qtHomgarMenu").click(function(){
    $(".qt__homgar--menu-items").slideToggle("fast");
  });
});



$(document).ready(function(){

  $('.nav.nav-tabs a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.nav.nav-tabs a').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})





 $(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});




