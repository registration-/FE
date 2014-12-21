$(document).ready(function(){
	var sStorage = sessionStorage;
	$.ajax({
		url: 'http://api.registration.com/api/hospitals',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {


			//////////////
			/// 快速按医院查找
			///////////////
			(function(){
				var	navTabs = $('<ul class="nav nav-tabs" role="tablist">'),
					tabsContent = $('<div class="tab-content">'),
					hospitalTabsWrapper = $('#hospital-tabs-wrapper'),
					hospitals;
				for(var key in data){
					hospitals = data[key];
					navTabs.append('<li role="presentation" class=""><a href="#tab-' + key + '" role="tab" data-toggle="tab">' + key + '</a></li>');
					var tabPanel = $('<div role="tabpanel" class="tab-pane list-content" id="tab-' + key + '">');
					hospitals.forEach(function(hospital){
						tabPanel.append('<li><a href="" class="label label-primary">' + hospital.name +'</a></li>');
					});
					tabsContent.append(tabPanel);
				}
				navTabs.children('li').eq(0).children('a').eq(0).tab('show');
				tabsContent.children('div').eq(0).addClass('active');
				hospitalTabsWrapper.append(navTabs).append(tabsContent);
			})();

		$("#select2").change(function(){

			var city = $("#select2 option:selected");
			var province = $('#select1 option:selected').val();
			$("#select3").empty();
			$("#select3").append('<option id="option31" selected="selected">选择</option>');
			// alert(city.value);
			
			if (city.val() == '选择') {
				$("#option31").attr("selected",'selected');
				$("#select3").attr({
				disabled: 'enabled'
			});
				$("#select4").empty();
				$("#select4").append('<option id="option41" selected="selected">选择</option>');
				$("#option41").attr("selected",'selected');
				$("#select4").attr({
				disabled: 'enabled'
			});
				
		}
		else{
			$("#select3").removeAttr('disabled');
			
		}
		var hospitals = data[province];
		for(var key in hospitals)
		{
			var txt;
			if (hospitals[key].city_id == city.val()) {
				txt = "<option value="+hospitals[key].id+">"+hospitals[key].name+"</option>"
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

	$.getJSON('http://api.registration.com/api/departments', function (categories) {
		console.log(categories);
		var departmentsList = $('#departments-list');
		for(var key in categories){
			var departments = categories[key];
			var part = $('<li class="con-subject">');
			part.append($('<label>').text(key));
			var ds = $('<p>');

			departments.forEach(function (department) {
				ds.append($('<span><a href="http://registration.com/hospital_list.html?department=' + department.name +'">' + department.name +'</a></span>'));
			});
			part.append(ds);
			departmentsList.append(part);
		}
	});
	
});