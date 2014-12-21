$(document).ready(function(){
	
	$.ajax({
		url: 'http://api.registration.com/api/cities',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {
		console.log("");
		

		$("#select1").change(function(){
			var province = $("#select1 option:selected");
			$("#select2").empty();
			$("#select2").append('<option id="option21" selected="selected">选择</option>');
			
			if (province.val() == 0) {
				
				$("#option21").attr("selected",'selected');
				$("#select2").attr({
				disabled: 'enabled',
			});

				$("#select3").empty();
				$("#select3").append('<option id="option31" selected="selected">选择</option>');
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
			$("#select2").removeAttr('disabled')
		}
		
		for(var key in data)
		{
			var txt;
			if (data[key].province == province.val()) {
				txt = '<option value='+data[key].id+'>'+data[key].city+'</option>';
				$("#select2").append(txt);
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