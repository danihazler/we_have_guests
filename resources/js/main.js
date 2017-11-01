$(document).on("scroll", function(){
  var pixelsFromTop= $(document).scrollTop();

// HIDING THE HEADER ---------------------------
  if (pixelsFromTop > 50) {
    $("header").addClass("hidden");
  } else {
    $("header").removeClass("hidden");
  }

// CHANGING BG COLOUR --------------------------
  if (pixelsFromTop < 600) {
    $("body").css("background-color", "#fff")
  }
  else if (pixelsFromTop < 1400) {
    $("body").css("background-color", "#a29c97")
  }
  else if (pixelsFromTop < 2200) {
    $("body").css("background-color", "#d9dfe4")
  }
  else if (pixelsFromTop < 3000) {
    $("body").css("background-color", "#fff0f0")
  }
  else {
    $("body").css("background-color", "#cdccc7")
  }

// PROGRESS BAR ---------------------------
  var documentHeight = $(document).height();
  var windowHeight = $(window).height();

  var difference = documentHeight - windowHeight;

  var percentage = 100 * pixelsFromTop / difference;

   $(".bar").css("width", percentage + "%")
});

// OPENING THE RIGHT RECIPE ------------------------
$('.open-recipe, .img-open').on('click', function () {
  $(this).closest('.recipe-img').find('.modal').addClass('visible');
});

$('.modal-close, .modal-content').on('click', function () {
  $(this).closest('.recipe').find('.modal').removeClass('visible');
});

//  ----------- SCROLL TO THE TOP ------------
$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
