$(document).ready(function(){
	
		var uid;
		var hospital;

		$("#select3").change(function(){
			hospital = $("#select3 option:selected");
			uid = hospital.val();
			
			$("#select4").empty();
			$("#select4").append('<option id="option41" selected="selected">选择</option>');
			// alert(city.value);
			
			if (hospital.val() == "选择") {
				$("#option41").attr("selected",'selected');
				$("#select4").attr({
				disabled: 'enabled',
			});
		}
		else{
			$("#select4").removeAttr('disabled')
			}
		


	$.ajax({
		url: 'https://registration-jlxy.rhcloud.com/api/hospitals/'+uid+'/departments',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {
		console.log(data);
		/*$.each(data,function(departments){

		});*/

		for(var key in data)
		{
			var txt;
			var departments = data[key],txt;
			departments.forEach(function(department){
				txt = "<option>"+department.name+"</option>"
				$("#select4").append(txt);
			});
				
			
			
		}
		})
	
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});
		})