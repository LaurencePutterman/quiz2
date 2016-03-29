(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.


	//IM IN CLASS IT'S COOL. IT'S COOL. 
	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$sub       = $('.submit');
	$timeout = $('.timeout');
	$submit = $('.form');
	$getTitle = $('#get-title');
	$timeout.hide();

	if(readCookie('nerdText')){
		nerdTextCookie = readCookie('nerdText')
		$('.part-2').append("<h3 id='apiData'>"+nerdTextCookie+"</h3>");
	}
	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
		$(this).html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");
		}
	});

	setTimeout(function(){
			$timeout.fadeIn('slow')}
			, 1000);

	$getTitle.on('click',function(){
 		$.get("http://www.mattbowytz.com/simple_api.json",{data:'quizData'},function(resp){
 			nerdText = resp.data[Math.floor(Math.random()*resp.data.length)]; //because i'm cool and totally not a nerd.
 			if($('.part-2').find('#apiData').length > 0){
 				while(nerdText == $('#apiData').html()){
 					nerdText = resp.data[Math.floor(Math.random()*resp.data.length)];
 				}
 				$("#apiData").html(nerdText);
 			}
 			else{
 				$('.part-2').append("<h3 id='apiData'>"+nerdText+"</h3>");
 			}
 			if($('.part-2').find('#keep-it').length == 0){
 				$('.part-2').append("<button class='part-2-button' id='keep-it'>Keep It!</button>");
 				$('#keep-it').on('click',function(){
 					nerdText = nerdText.replace(","," ");
 					document.cookie="nerdText="+nerdText+"; path=/";
 					
 				});
 			}
 			$getTitle.html("Change It");
		});
	});

	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

})(jQuery);