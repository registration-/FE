$(document).ready(function(){
	var sStorage = window.sessionStorage;
	$.ajax({
		url: 'http://api.registration.com/api/users/'+sStorage.id+'',
		type: 'GET',
		dataType: 'json',
		data: ''
	})
	.done(function(data) {

		console.log("oyear");
		console.log(data);
		$("#per-name").text(data.name);
		$("#per-phone").text(data.phone);
		$("#per-number").text(data.verified_id);
		$("#per-address").text(data.province+'-'+data.city);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});