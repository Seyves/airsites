$(document).ready(function(){

	$('.header__burger').click(function(event) {
		$('.header__burger, .menu_pop-up').toggleClass('active');
	});

	$(window).scroll(function(event) {
    	$('.header__burger,.menu').removeClass('active');
  	});


  	$('.service').toggleClass('wow fadeInLeft');
  	$('.service:nth-child(2)').attr('data-wow-delay', '0.5s');
  	$('.service:nth-child(3)').attr('data-wow-delay', '1s');
  	$('.service:nth-child(4)').attr('data-wow-delay', '1.5s');


  	$('.our-services__bg-cloud1').toggleClass('wow fadeInLeft');
  	$('.our-services__bg-cloud2').toggleClass('wow fadeInRight');
  	$('.our-services__bg-cloud1').attr('data-wow-delay', '2s');
  	$('.our-services__bg-cloud2').attr('data-wow-delay', '2.5s');


  		
	window.onscroll = function showHead() {

	  var header = document.querySelector('.header_fixed');  

	  if(window.pageYOffset > 500){
	   header.classList.add('active');        
	  }
	  else{
	   header.classList.remove('active');      
	  }
	}

	var windowWidthLessThen641 = window.matchMedia('(max-width: 768px)').matches;
	$(window).resize(function(){
			windowWidthLessThen641 = window.matchMedia('(max-width: 768px)').matches;
		}
	);

	$('.anchor').on('click', function(event){
		if(windowWidthLessThen641){
	    	var $anchor = $(this)
	    	$('html, body')
	      .stop()
	      .animate(
	        {
	          scrollTop: $($anchor.attr('href')).offset().top - 80,
	        },
	        {
	          duration: 600,
	          specialEasing: {
	            width: 'linear',
	            height: 'easeInOutCubic',
	          },
	        }
	      )
	    	event.preventDefault()
	   }

	   else{
	    	var $anchor = $(this)
	    	$('html, body')
	      .stop()
	      .animate(
	        {
	          scrollTop: $($anchor.attr('href')).offset().top - 130,
	        },
	        {
	          duration: 600,
	          specialEasing: {
	            width: 'linear',
	            height: 'easeInOutCubic',
	          },
	        }
	      )
	    	event.preventDefault()	   	
	   }
  })


	$('.intro__slider-gallery').slick({
		vertical: true,
		verticalSwiping: true,
		dots: true,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		prevArrow: $('.intro__slider-prev-arrow'),		
		appendDots: $('.intro__slider-dots'),
		nextArrow: $('.intro__slider-next-arrow'),
		responsive:[{
			breakpoint: 641+33,
			settings: {
				vertical: false,				
				verticalSwiping: false,
				arrows: false,
				variableWidth: true,
			}
		}]		
	});

	$('.our-reviews__slider-gallery').slick({
		vertical: false,				
		verticalSwiping: false,
		arrows: false,
		variableWidth: true,		
		dots: true,
		autoplay: false,
		pauseOnHover: false,
		speed: 700,
		focusOnSelect:true,
		prevArrow: $('.our-reviews__slider-prev-arrow'),		
		appendDots: $('.our-reviews__slider-dots'),
		nextArrow: $('.our-reviews__slider-next-arrow'),		
		mobileFirst:true,
		responsive:[
			{
				breakpoint: 641+33,
				settings: {
					vertical: true,		
					verticalSwiping: true,
					arrows:true,
					variableWidth:false,
				}
			},
			{
	         breakpoint: 530+33,
	         settings:{            
					slidesToScroll: 2,
					slidesToShow: 2,
				}	
	      },		
		]	
	});

	function desktopReviewControl(){
		if(window.matchMedia('(max-width: 641px)').matches){	   	
			$('.review_desktop').addClass('review_disabled');
		}	   
		else{
			$('.review_desktop').removeClass('review_disabled');
		}
	}
	desktopReviewControl();
	$(window).resize(function(){
		desktopReviewControl();
	});
});




$(document).ready(function(){
	function makeOurServicesSlider(){	
		$('.our-services__slider-gallery').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		pauseOnHover: false,
		speed: 500,		
		focusOnSelect:true,
		variableWidth: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		appendDots: $('.our-services__slider-dots'),	
		   responsive: [
		   	{
	            breakpoint: 641+33,
	            settings: "unslick"
	         },
	         {
	            breakpoint: 530+33,
	            settings:{            
						slidesToScroll: 2,
						slidesToShow: 2,
					}	
	         },
         ],
      mobileFirst:true,
		});
	}

	function makeOurNewsSlider(){	
		$('.our-news__slider-gallery').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		pauseOnHover: false,
		speed: 500,
		focusOnSelect:true,
		variableWidth: true,
		slidesToScroll: 1,
		appendDots: $('.our-news__slider-dots'),	
		   responsive: [
		   	{
	            breakpoint: 641+33,
	            settings: "unslick",
	         },
	         {
	            breakpoint: 530+33,
	            settings:{            
						slidesToScroll: 2,
						slidesToShow: 2,
					}	
	         },
         ],
      mobileFirst:true,
		});
	}

	makeOurServicesSlider();
	makeOurNewsSlider();
	$(window).resize(function(){
	   var $windowWidth = $(window).width();
	   if ($windowWidth < 641+33) {
	     makeOurServicesSlider();  
	     makeOurNewsSlider();
	   }
	});
});


