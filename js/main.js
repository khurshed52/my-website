(function ($) {
  "use strict";
  var bLazy = new Blazy();
  feather.replace();
  $(".typed").typed({
    strings: ["Front End Developer", "UI Developer", "Web Designer", "SharePoint Designer", "UI UX Expert"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 10,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
  });

  $("#menuExmp1").flxMenu($("#exmp1Trigger"), {
    debug: true,
    puSlideInFrom: "left"
  });

  /*[ Back to top ]
  ===========================================================*/
  var windowH = $(window).height() / 2;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > windowH) {
      $("#myBtn").css('display', 'flex');
    } else {
      $("#myBtn").css('display', 'none');
    }
  });

  $('#myBtn').on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });

  //slider banner
  $('#experience').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  //News Slider
  $('#education').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  //project Slider
  $('#latestProject').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    navText: [
      '<i class="fas fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fas fa-arrow-right" aria-hidden="true"></i>'
    ]
  });


  $('.external').on('click', function () {
    var getLink = $(this).attr('href');
    swal({
      title: 'You are about to leave website. Do you want to proceed?',
      html: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: '#2193b0',
      showCancelButton: true,
      allowOutsideClick: true
    }, function () {
      window.open(getLink, '_blank')
    });
    return false;
  });


  //image video venobox modal 

  $('.venobox').venobox();
  sal();

  $('.venobox_custom').venobox({
    framewidth: '500px',
    frameheight: '300px',
    border: '5px',
    bgcolor: '#ff6858',
  });

  $(window).on('load', function () {
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '.website',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    $('.portfolioFilter a').click(function () {
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });


  });

  new Vivus('logo', {type: 'async', duration: 200}, function(){
    document.getElementById("logosvg").className = "logowhite";
  });

})(jQuery);

