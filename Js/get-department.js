$(document).ready(function() {
	var isAll = false;
	var uid;
	var hospital;
	var sStorage = window.sessionStorage;
	var department;
	var department_id;
	var doctor_department;
	$("#select3").change(function() {
		hospital = $("#select3 option:selected");
		uid = hospital.val();
		sStorage.hospital_id = uid;
		sStorage.hospital_name = hospital.text();
		console.log(sStorage.hospital_id);
		console.log(sStorage.hospital_name);
		$("#select4").empty();
		$("#select4").append('<option id="option41" selected="selected">选择</option>');
		// alert(city.value);

		if (hospital.val() == "选择") {
			$("#option41").attr("selected", 'selected');
			$("#select4").attr({
				disabled: 'enabled',
			});
		} else {

			$("#select4").removeAttr('disabled')
		}


		$.ajax({
				url: 'https://registration-jlxy.rhcloud.com/api/hospitals/' + uid + '/departments',
				type: 'GET',
				dataType: 'json',
				data: "",
			})
			.done(function(data) {
				console.log(data);
				/*$.each(data,function(departments){

				});*/

				for (var key in data) {
					var txt;
					var departments = data[key],
						txt;
					departments.forEach(function(department) {
						txt = '<option data-department_id=' + department.id + '>' + department.name + '</option>'
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
	$("#select4").change(function(event) {
		department = $("#select4 option:selected");
		sStorage.department_id = department.data('department_id');
		sStorage.doctor_department = department.val();
		console.log(sStorage.department_id);
		console.log(sStorage.doctor_department);
		if (department.val() == '选择') {
			isAll = false;
		}
		else
		{
			isAll = true;
		}

	});
	$("#fast_submit").on('click', function() {
		// console.log(isAll);
		if (sStorage.isLogin == true) {
			console.log('已登录');
			
			if (isAll == true) {
				window.location.href = "fast_guahao.html";
				console.log('isall');
			}
			else
			{
				console.log('notall');
				alert('请选择快速预约的相关信息');
			}
		} 
		else {
			console.log('未登陆');

			$('.theme-popover-mask').fadeIn(100);
			$('.theme-popover').slideDown(200);
			$('.theme-poptit .close').click(function() {
				$('.theme-popover-mask').fadeOut(100);
				$('.theme-popover').slideUp(200);
			})

		}
	});

});