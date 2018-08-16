$(document).ready(function(){

  const mq = window.matchMedia( "(min-width: 991px)" );

  // $(".highlight").each(function(){
  //       if ( $(this).isOnScreenHighlight() ) {
  //               console.log("#########");
  //               $(this).addClass('shown');
  //           } else {
  //             console.log("noooooo");
  //             $(this).removeClass('shown');
  //       }
  // });

  $(window).scroll(function(){
    $(".scroll-disappear").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".highlight").each(function(){
    	    if ( $(this).isOnScreenHighlight() ) {
            $(this).addClass('shown');
                  // console.log("#########");
                  // $(this).css({ "transform": "scaleX(1)"});
                  // $(this).css({ "visibility": "visible"});
                  // $(this).css({ "transform-origin": "left"});
                  // $(this).css({ "transition": "0.2s transform cubic-bezier(0, 0.01, 0, 1)"});
    	        } else {
                console.log("noooooo");
                  $(this).removeClass('shown');
                // $(this).css({ "transform": "scaleX(0)"});
                // $(this).css({ "visibility": "hidden"});
                // $(this).css({ "transform-origin": "right"});
                // $(this).css({ "transition": "0.2s transform cubic-bezier(0, 0.01, 0, 1)"});
    	    }
    });
  });




  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
  });

  $("img[class*=\"img-responsive\"]").each(function(index,element) {
    console.log($(element).attr('class'));
    if ($(element).attr('class')!= 'img-responsive full-screen-img') {
      $(element).attr("data-action","zoom");
    }
  });

  $('#template-to-top').hide();
  $(".bs-docs-sidebar").hide();

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


  var allLargeImgs = document.getElementsByClassName('full-screen-img');

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#template-to-top').fadeIn();
    } else {
      $('#template-to-top').fadeOut();
    }

    if ($(this).scrollTop() > 600) {

      var hasLargeImg = false;

      Array.prototype.forEach.call(allLargeImgs, function(el) {
          // console.log(el);
          if (checkVisible(el)) {
            hasLargeImg = true;
          }
      });

      if (hasLargeImg) {
        $(".bs-docs-sidebar").fadeOut('slow');
      } else {
        $(".bs-docs-sidebar").fadeIn('slow');
      }
    }
    else {
        $(".bs-docs-sidebar").fadeOut("slow");
    }

    // if (checkVisible(testPic)) {
    //   $(".bs-docs-sidebar").fadeOut("slow");
    // } else {
    //   $(".bs-docs-sidebar").fadeIn('slow');
    // }


    if (mq.matches) {
      if (window.location.pathname === '/html/Portfolio.html'){
        console.log('yes');
        if ($(this).scrollTop() > ($(window).height()*0.87-65)) {
          $('.navbar-nav-white').removeClass('navbar-nav-white');
          $('.navbar-brand-white').removeClass('navbar-brand-white');
          $('.hvr-underline-from-left-white').removeClass('hvr-underline-from-left-white');
        } else {
          $('.navbar-nav').addClass('navbar-nav-white');
          $('.navbar-brand').addClass('navbar-brand-white');
          $('.hvr-underline-from-left').addClass('hvr-underline-from-left-white');
        }
      }
    }
  });



  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //Click event to scroll to top
    $('#template-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });

    $('.fade-in').addClass('load');


    $(".p-center-wrapper button[data-toggle='collapse']").click (function () {
      $(this).text(function(i,old){
        var newString = "";
        if (old.startsWith("See")) {
          newString = old.replace("See","Hide");
        } else if (old.startsWith("Hide")){
          newString = old.replace ("Hide","See");
        } else {
          newString = old;
        }
        return newString;
      });
    })








});

$.fn.isOnScreenHighlight = function(){

  var fix = parseInt($(".navbar").css("height"));
  var win = $(window);

  var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));

};
