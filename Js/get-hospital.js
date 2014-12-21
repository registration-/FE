$(document).ready(function(){
	var sStorage = sessionStorage;
	$.ajax({
		url: 'http://api.registration.com/api/hospitals',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {
		console.log("");

		$("#select2").change(function(){
			var city = $("#select2 option:selected");
			$("#select3").empty();
			$("#select3").append('<option id="option31" selected="selected">选择</option>');
			// alert(city.value);
			
			if (city.val() == '选择') {
				$("#option31").attr("selected",'selected');
				$("#select3").attr({
				disabled: 'enabled',
			});
				$("#select4").empty();
				$("#select4").append('<option id="option41" selected="selected">选择</option>');
				$("#option41").attr("selected",'selected');
				$("#select4").attr({
				disabled: 'enabled',
			});
				
		}
		else{
			$("#select3").removeAttr('disabled');
			
		}
		
		for(var key in data)
		{
			var txt;
			if (data[key].city_id == city.val()) {
				txt = "<option value="+data[key].id+">"+data[key].name+"</option>"
				$("#select3").append(txt);
			}
			
		}
		});
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});