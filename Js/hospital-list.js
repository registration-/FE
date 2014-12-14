$(document).ready(function(){
	$.ajax({
		url: 'https://registration-jlxy.rhcloud.com/api/provinces',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {
		console.log("success");
		for(var key in data)
		{
			var txt;
			txt = '<li><a href="">'+data[key].name+'</a></li>'
			$(".province-list").append(txt);
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	$("#changecity").click(function(){
		var e = document.getElementById("citylist");
		if($("#citylist")[0].style.display!='inline')
		{
			$("#citylist")[0].style.display = 'inline';
		}
		else
		{
			$("#citylist")[0].style.display = 'none';
		}
		return false;
	});

	(function(){
		$('body').on('click',function(e){
			console.log(e.target);
			console.log(e);
			if(!$(e.target).is('#changecity') ){

				if($('#citylist')[0].style.display == 'inline'){
					$("#citylist")[0].style.display = 'none';
				}
			}
		});

	})();
});