$(document).ready(function() {
	$('.addr-city').click(function() {
		$('.city-list').slideDown();
		// alert(123);
		
	});
	$('.close').click(function(){
		$('.city-list').slideUp();
	});
});