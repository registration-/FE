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
			txt = '<li><a href="#">'+data[key].name+'</a></li>'
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
			
			if(!$(e.target).is('.province-list')){

				if($('#citylist')[0].style.display == 'inline'){
					$("#citylist")[0].style.display = 'none';
				}
			}
		});

	})();

	(function(){
		$('.province-list a').on('click',function(e){

			
			var province = e.target.text;
			console.log(province);
			$.ajax({
				url: 'https://registration-jlxy.rhcloud.com/api/cities',
				type: 'GET',
				dataType: 'json',
				data: "",
			})
			.done(function(data) {
				$('.province-list').empty();
				var txt = new Array();
				var i = 0;
				for(var key in data)
				{
					if (data[key].province == province) {
						txt[i] = '<li><a href="" data-city="'+data[key].id+'">'+data[key].city+'</a></li>';
						i++;
					}
				}
				$(".province-list").append(txt);
				})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			


		})
	})();
});