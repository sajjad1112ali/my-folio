$(document).ready(function () {

  $('#navLinks a').on('click', function () {
    $('#navLinks').collapse('hide');
  });


  $(window).on("scroll", onScroll);

  function onScroll() {
    var scrollPos = $(window).scrollTop();
    $('#navLinks a').each(function () {
      var currLink = $(this);
      console.log(currLink.data("link"));

      var refElement = $(currLink.data("link"));
      if (refElement.position().top - 75 <= scrollPos && refElement.position().top + refElement.height() - 75 > scrollPos) {
        $('#navLinks ul li a').parent().removeClass("active"); //added to remove active class from all a elements
        currLink.parent().addClass("active");
      } else {
        currLink.parent().removeClass("active");
      }
    });
  }

  // $("#bannerCarousel").carousel({interval: 500});

  var totalItems = $('#bannerCarousel .carousel-item').length;
  $('#bannerCarousel').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('#slideCounter').text('' + currentIndex + '/' + totalItems + '');
  });


  

});