/*================== Read More Text ==================*/
function ReadMore(textsClass, charCount, buttonClass) {
	// Readmore Text for ABOUT US Section
	$(".btn-read-more").html("Read More");
	var showChar = charCount;
	$("." + textsClass).each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass).click(function () {
		$(this)
			.prev(".menu-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".menu-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less");
		}
	});
}
ReadMore("menu-desc", 135, "btn-read-more");

function cardMore(textsClass1, charCount1, buttonClass1) {
	// Readmore Text for ABOUT US Section
	$(".btn-more").html("Read More");
	var showChar = charCount1;
	$("." + textsClass1).each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass1).click(function () {
		$(this)
			.prev(".blog-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".blog-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less");
		}
	});
}
cardMore("blog-desc", 630, "btn-more");

function blogMore(textsClass2, charCount2, buttonClass2) {
	// Readmore Text for ABOUT US Section
	$(".read-text").html("Read More +");
	var showChar = charCount2;
	$("." + textsClass2).each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				"..." +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				"</span>&nbsp;&nbsp;</span>";
			$(this).html(html);
		}
	});
	$("." + buttonClass2).click(function () {
		$(this)
			.prev(".blog-desc")
			.find("p span.moreellipses")
			.toggleClass("d-none");
		$(this)
			.prev(".blog-desc")
			.find("p span.morecontent")
			.toggleClass("d-none");
		if ($(this).hasClass("toggled")) {
			$(this).removeClass("toggled");
			$(this).html("Read More +");
		} else {
			$(this).addClass("toggled");
			$(this).html("Read Less -");
		}
	});
}
blogMore("blog-desc", 500, "read-text");

/*===================== Smooth Scrolling ======================*/
$(function () {
	$("a").smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function () {
	$(".nav-item").on("click", function () {
		$(".nav-item").removeClass("active");
		$(this).addClass("active");
	});
});
$(function () {
	$("#work .btn-filter").on("click", function () {
		$(".btn-filter").removeClass("active-bg");
		$(this).addClass("active-bg");
	});
});

/*===================== Owl Carousel Slider ======================*/

$(function () {
	var owl = $("#owl-one");
	owl.owlCarousel({
		autoplay: false,
		// center: true,
		loop: true,
		mouseDrag: true,
		margin: 30,
		dots: true,
		nav: true,
		slideBy: 4,
		items: 4,
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
				autoplay: true
			},
			768: {
				items: 2
			},
			830: {
				items: 3
			},
			1000: {
				item: 3
			},
			1365: {
				item: 4
			}
		}
	});
	$(".right-arrow").click(function () {
		owl.trigger("next.owl.carousel", [1000]);
	});

	$(".left-arrow").click(function () {
		owl.trigger("prev.owl.carousel", [1000]);
	});
});
$(function () {
	var owls = $("#owl-carousel");
	owls.owlCarousel({
		loop: true,
		autoplay: false,
		margin: 0,
		dots: true,
		nav: true,
		slideBy: 1,
		item: 1,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			600: {
				items: 1
			},
			768: {
				items: 1
			},
			830: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$("#right-click").click(function () {
		owls.trigger("next.owl.carousel", [1000]);
	});

	$("#left-click").click(function () {
		owls.trigger("prev.owl.carousel", [1000]);
	});
});
/*===================== Another Load More Script ======================*/

$(function () {
	$(".none-display")
		.slice(0, 12)
		.show();
	$("#load-more").on("click", function (e) {
		e.preventDefault();
		$(".none-display:hidden")
			.slice(0, 4)
			.slideDown();
		if ($(".none-display:hidden").length == 0) {
			$("#load-more").html("No More Pics");
			// $(".btn-load-blog").fadeOut("slow");
		}
		$("html,body").animate(
			{
				scrollTop: $(this).offset().center
			},
			1500
		);
	});
});

/*===================== Scroll Top  Script ======================*/
var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
	var stickyHeight = sticky.outerHeight();
	var stickyTop = stickyWrapper.offset().top;

	if (scrollElement.scrollTop() >= stickyTop) {
		stickyWrapper.height(stickyHeight);
		sticky.addClass("is-sticky");
	} else {
		sticky.removeClass("is-sticky");
		stickyWrapper.height("auto");
	}
};

// Find all data-toggle="sticky-onscroll" elements
$('[data-toggle="sticky-onscroll"]').each(function () {
	var sticky = $(this);
	var stickyWrapper = $("<div>").addClass("sticky-wrapper"); // insert hidden element to maintain actual top offset on page
	sticky.before(stickyWrapper);
	sticky.addClass("sticky");

	// Scroll & resize events
	$(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function () {
		stickyToggle(sticky, stickyWrapper, $(this));
	});

	// On page load
	stickyToggle(sticky, stickyWrapper, $(window));
});
/*===================== Navbar Smooth ======================*/
$(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("nav").addClass("nav-bg-color color");

		} else {
			$("nav").removeClass("nav-bg-color color");
		}
	});
});
/*===================== Library Filter ======================*/
// $(document).ready(function () {
$(".filter-button").click(function () {
	var value = $(this).attr('data-filter');

	if (value == "all") {
		//$('.filter').removeClass('hidden');
		$('.filter').show('1000');
	}
	else {
		//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
		//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
		$(".filter").not('.' + value).hide('3000');
		$('.filter').filter('.' + value).show('3000');

	}
});

if ($(".filter-button").removeClass("active")) {
	$(this).removeClass("active");
}
$(this).addClass("active");
// });
