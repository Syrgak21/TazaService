$(document).ready(function() {
	$(window).scroll
	$('.btn').on('click', function() {
		var $this = $(this),
			slider = $('.slider'),
			list = $('.slider_list'),
			item = $('.slider_item'),
			activeSlide = item.filter('.show'),
			firstSlide = item.first(),
			lastSlide = item.last(),
			prevSlide = activeSlide.prev(),
			nextSlide = activeSlide.next(),
			slideOffset = slider.offset().left,
			reqPos = 0;

		if($(this).hasClass('next')) {
			if(nextSlide.length) {
				firstSlide.insertAfter(lastSlide);
				findReqPos(nextSlide);
				addActiveClass(nextSlide);
			}
			else {
				findReqPos(firstSlide);
				addActiveClass(firstSlide);
			}
		}

		if($(this).hasClass('back')) {
			if(prevSlide.length) {
				lastSlide.insertBefore(firstSlide);
				findReqPos(prevSlide);
				addActiveClass(prevSlide);
			}
			else {
				findReqPos(lastSlide);
				addActiveClass(lastSlide);
			}
		}

		function addActiveClass(reqSlide) {
			reqSlide.addClass('show').siblings().removeClass('show');
		}	
		function findReqPos(slide) {
			reqPos = slide.offset().left - slideOffset;
		}

		if (reqPos != -4600) {
			list.css('left', '-=' + reqPos + 'px');
		}
		else {
			list.css('left', '+3450px');
			$('.second').addClass('show').siblings().removeClass('show');
		}
});

$('.btn').on('click', function() {
	clearInterval(timer);
});	

var list = $('.slider_list'),
	item = $('.slider_item'),
	t = 1;

var timer = setInterval(feedback, 2500);

function feedback(){
	list.css({'margin-left' : '-=1150px',
					'transition' : '.9s'
})
	item[t].classList.remove('show');
	t++;
	if (t >= 5) {
		list.css({'margin-left' : '-1150px',
						'transition' : '.9s'
				})
		t = 1;
	}
	item[t].classList.add('show');
}	


								// LINKS

$('.services').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#services').offset().top - 20
	}, 500);
	return false;
});

$('.about').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#about').offset().top - 50
	}, 1000);
	return false;
});

$('.gallery').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#gallery').offset().top - offset
	}, 1400);
	return false;
});

$('.contact').on('click', function() {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $('#contact').offset().top - 100
	}, 1600);
	return false;
});
});