
$(document).ready(function(){

	$('.mobile-menu-icon').click(function(){
		$('.tm-nav').toggleClass('show');
	});
  
  	
  	$('body').bind('touchstart', function() {});
});


$(function() {			

        	$('.date').datetimepicker({
            	format: 'MM/DD/YYYY'
            });
            $('.date-time').datetimepicker();

			// https://css-tricks.com/snippets/jquery/smooth-scrolling/
		  	$('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
		  	});
		});
		
		
		$(window).load(function() {	  		
			
		    $('.flexslider').flexslider({
			    controlNav: false
		    });


	  	});