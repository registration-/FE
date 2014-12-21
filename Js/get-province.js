$(document).ready(function(){
	$.ajax({
		url: 'http://api.registration.com/api/provinces',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {
		console.log("");
		for(var key in data)
		{
			var txt;
			txt = "<option>"+data[key].name+"</option>"
			$("#select1").append(txt);
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});