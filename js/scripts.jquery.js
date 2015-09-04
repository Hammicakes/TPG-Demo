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

function showLinks() {
  $(this).siblings(".sub").slideToggle();
}

function sticky(e) {

  var stickyNavTop = $(e).offset().top;
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop +800) {
      $(e).addClass('sticky');
      if(!mq.matches) {
        $(e).find(".sub").css('display','none');
      }
    } else {
        $(e).removeClass('sticky');
      if(!mq.matches) {
        $(e).find(".sub").css('display','list-item');
      }
    }
    };

  $(window).scroll(function() {
        stickyNav();
    });


}

if ($('.sub_nav')[0]){
    sticky('.sub_nav');
} else {
    sticky('.nav');
}

if(!mq.matches) {
  $(".open").addClass("mobile");
  $(".mobile").on('click', showLinks);
}


mq.addListener(function(changed) {

  if(mq.matches) {
    $("header").find(".sub").css('display','list-item');
    $(".open").removeClass("mobile");
  }

  if(!mq.matches) {
    $(".open").addClass("mobile");
//     $(".mobile").on('click', showLinks);
  }

});

$('.contentgallery').featherlightGallery();


// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('.fullsize').css({
  'width': winWidth,
	'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
   $('.fullsize').css({
    'width': winWidth,
    'height': winHeight,
	});
});


});//end
