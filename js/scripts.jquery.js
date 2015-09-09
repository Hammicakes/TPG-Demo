$(document).ready(function () {







$('.quotes').owlCarousel({
    slideSpeed:800,
    paginationSpeed:1200,
    loop:true,
    margin:10,
    dots:true,
    dotsEach: 1,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.gallery').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});




var mq = window.matchMedia('all and (min-width: 960px)');




if(mq.matches) {

  $(".section_highlight").addClass("hover");
  $(hoverGrow(".section_highlight"));

} else {

  $(".section_highlight").removeClass("hover");
  $(hoverGrow(".section_highlight"));
}

mq.addListener(function(changed) {
    if(changed.matches) {
      $(".section_highlight").addClass("hover");
      $(hoverGrow(".section_highlight"));

    } else {

      $(".section_highlight").removeClass("hover");
      $(hoverGrow(".section_highlight"));

    }
});


function hoverGrow(e) {
  if ($(e).hasClass("hover")){
  $(e).hover(function(){
        $(this).css("width", "28.9%");
        $(this).siblings(".hover").css("width", "21%");
        $(this).find(".proportions").css("margin-top", "139.5%");
        $(this).siblings().find(".proportions").css("margin-top", "192%");
        }, function(){
        $(this).css("width", "");
        $(this).siblings(".hover").css("width", "");
        $(this).find(".proportions").css("margin-top", "");
        $(this).siblings().find(".proportions").css("margin-top", "");
    });
  }else{
//     console.log("small");
  }
}


$('.contentgallery').featherlightGallery();

// make all internal page navs sticky
//sticky('.internal_nav');



//Slide Navigation on page scroll
$(window).scroll(function () {
  if ($(window).scrollTop() > 120) {
      $(".make-sticky").addClass("scrolling");
  }
  if ($(window).scrollTop() < 119) {
      $(".make-sticky").removeClass("scrolling");
  }
});





// GALLERIES

// Each modal content group needs a gallery number unique to that page (contentgallery_00) associated with the link

// On the demo, galleries cycle through visible and hidden content. When new content is loaded dynamically, only visibile content will be cycled through.

var gal = document.querySelectorAll('[class*=contentgallery_]');

var classes = new Array();

for (var i = 0; i < gal.length; i++) {
  classes.push((gal[i]).className);
}

var uniqueClasses = [];
$.each(classes, function(i, el){
    if($.inArray(el, uniqueClasses) === -1) uniqueClasses.push(el);
});


for (i = 0; i < uniqueClasses.length; i++) {
  var gallerySet = (uniqueClasses[i]);
    $('.'+gallerySet).featherlightGallery();
//   console.log(uniqueClasses[i]);
}

function showMore() {
  if ($(this).html() == 'See More'){
    $(this).html('See Less');
  } else {
  $(this).html('See More');
  }


  $(this).siblings(".more").slideToggle();
}

$(".seemore").on('click', showMore);

if (window.location.href.indexOf("#") > -1){
  var hash = window.location.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 120}, 1000);
}

$("#internalLinks a").click(function(){
    var target = $(this.hash);
    $('html,body').animate({
          scrollTop: target.offset().top -120
        }, 1000);
        return false;
});

/* for demonstration purposes only */
  $('.navbar-toggle').click(function(){
    if( $(this).hasClass('collapsed') ){
      $(this).removeClass('collapsed');
    }else{
      $(this).addClass('collapsed');
    }
   })


});//end
