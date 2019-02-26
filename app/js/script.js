$(document).ready(function() {

	// MODALS

	$('.mopen').wmodal();

    // SELECT STYLER

    $('select').styler();

    // FORM TABS

    $('.js-form-tabs').on('click', 'a', function(){
        $(this).addClass('__is-active').siblings('a').removeClass('__is-active');
        $($(this).attr('href')).show().siblings('[id]').hide();
        $(this).siblings('input').val($(this).data('value'));
        return false;
    });

    $('.js-form-tabs').each(function(){
        var tab = $(this).find('a.__is-active').length > 0 ? $(this).find('.__is-active') : $(this).find('a')[0];
        $(tab).addClass('__is-active');
        $($(tab).attr('href')).show().siblings('[id]').hide();
    });

	// BANNER CAROUSEL

	$('.js-banner').owlCarousel({
		loop:true,
		items:1,
		margin:0,
		nav:false,
		dots:true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
        responsive: {
            940 : {
                nav:true,
                 dots:false,
            }
        }
    });

    // RECCOMEND CAROUSEL

    $('.js-owl-reccomend').owlCarousel({
        items:1,
        margin:0,
        nav:false,
        dots:false,
        responsive: {
            940 : {
                items:4,
                nav:true,
                dots:false,
            }
        }
    });

    // SPINNER

    (function spinner() {
    	var input = $('.js-spinner').children('.spinner_viewport'),
            minVal = 1,
            maxVal = 99;

        input.val(1);

        if ( input.val() <= minVal ) {
           input.siblings('.spinner_decrement').addClass('__is-disabled');
        } else {
            input.siblings('.spinner_decrement').removeClass('__is-disabled');
        };

    	input.on('change', function() {
    		if ( $(this).val() <= minVal ) {
    			$(this).siblings('.spinner_decrement').addClass('__is-disabled');
    		} else {
    			$(this).siblings('.spinner_decrement').removeClass('__is-disabled');
    		};

    		if ( $(this).val() >= maxVal ) {
    			$(this).siblings('.spinner_increment').addClass('__is-disabled');
    		} else {
    			$(this).siblings('.spinner_increment').removeClass('__is-disabled');
    		};

            // ADD PRICE LABEL UNDER SPINNER AT CART

            if ( $(this).val() > minVal ) {
                $(this).parent().siblings('.cart-card_price-for-one').addClass('__is-show');
            } else {
                $(this).parent().siblings('.cart-card_price-for-one').removeClass('__is-show');
            };
    	});

		input.siblings('.spinner_decrement').on('click', function(e) {
			e.preventDefault();
			var count = $(this).siblings('.spinner_viewport').val();
            $(this).siblings('.spinner_viewport').val(--count).trigger('change');
        });

		input.siblings('.spinner_increment').on('click', function(e) {
			e.preventDefault();
			var count = $(this).siblings('.spinner_viewport').val();
            $(this).siblings('.spinner_viewport').val(++count).trigger('change');
        });

    })();

    // PROD CARD

    var prodCard = $('.js-prodCard');

    (function productCard(o){
    	var inCart = o.find('.js-inCart'),
    		spinner = o.find('.js-spinner'),
    		cartNotify = $('.js-cartNotify');

    	spinner.hide();

    	inCart.on('click', function(e) {
    		e.preventDefault();
    		$(this).hide().siblings(spinner).show();
    	});

    })(prodCard);

	// CART NOTIFY

	$('.js-cartNotify').on('click', '.cart-notify_close', function(e) {
		e.preventDefault();
		$(this).parent().removeClass('__is-show');
	});

    // MOBILE MENU OPEN

    $('.js-m-menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('__menu-opened');
        $($(this).attr('href')).toggleClass('__is-show');

        if( $(this).hasClass('__menu-opened') == 1 ) {
            $('html').css({'overflow-y': 'hidden'});
        } else {
            $('html').css({'overflow-y': 'auto'});
        };
    });

});

