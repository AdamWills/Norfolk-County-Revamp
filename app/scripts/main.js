var notifications = [
	{
		title: 'Tax Sale January 28, 2016',
		url: 'http://www.norfolkcounty.ca/government/financial-information-taxes-rates/property-taxes/tax-sale-information/',
	},
	{
		title: 'Three More Raccoons Test Positive for Rabies in Haldimand County',
		url: 'http://www.norfolkcounty.ca/media-releases/three-more-raccoons-test-positive-for-rabies-in-haldimand-county/',
	},
	{
		title: 'Notice of Intention to Adopt the 2016 Tax Supported Operating Budget',
		url: 'http://www.norfolkcounty.ca/government/financial-information-taxes-rates/financial-information/budget-information/tax-budgets/',
	},
	{
		title: 'The cost of healthy food continues to climb',
		url: 'http://www.norfolkcounty.ca/media-releases/cost-healthy-food-continues-climb/',
	}
];


function setUpNewsFeed() {
	var $list = $('<ul/>'),
		$playButton = $('.news-ticker__controls .ytp-play-button'),
		paused = false;



	// pull data and populate
	$.each(notifications, function(i, n) {
	 	$list.append('<li><a href="'+ n.url + '">' + n.title + '</a></li>');
	});
	$('.news-ticker__feed').append($list);

	// initialize newsticker
	if (window.matchMedia("(min-width: 34rem)").matches) {
		var $nt = $('.news-ticker__feed ul').newsTicker({
			row_height: 32,
			max_row: 1,
			duration: 5000
		});
	}

	// setup play/pause button
	$playButton.on('click', function() {
		if(!paused) {
			console.log('pausing');
			$nt.newsTicker('pause');
		} else {
			console.log('unpausing');
			$nt.newsTicker('unpause');
		}
		paused = !paused;
	});
}

function hideNavigation() {
	$('.banner__nav > li').removeClass('active');
}

function setUpNavigation() {
	$('.banner__nav > li > a').on('click', function(e) {
		if (!$(this).parent('li').hasClass('active')) {
		hideNavigation();
		}
		$(this).parent('li').toggleClass('active');
		e.preventDefault();
	});

	$('.banner__nav .close').on('click', function() {
		hideNavigation();
	});

	$(document).on('click',function(e) {
		hideNavigation();
	});

	$('.banner__nav li').on('click', function(e) {
		e.stopPropagation();
	});
}

function setUpMobileNavButton() {
	$nav = $('.banner__nav');
	$('.btn-mobile-nav-toggle').on('click', function() {
		$nav.toggleClass('open');
	});
}

var flip = true,
   pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
   play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26",
   $animation = $('#animation');

$(".ytp-play-button").on('click', function() {
   flip = !flip;
   $animation.attr({
      "from": flip ? pause : play,
      "to": flip ? play : pause
   }).get(0).beginElement();
});

setUpNewsFeed();
setUpNavigation();
setUpMobileNavButton();
