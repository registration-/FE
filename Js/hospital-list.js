$(document).ready(function(){
	var sStorage = window.sessionStorage;
	var getHospitalUrl = 'http://api.registration.com/api/hospitals?';
	var department;
	var $hospitalMetaHolder = $('.location').eq(0);


	(function () {
		var search = window.location.search || '';
		department = search.split('=')[1];
		if(department){
			getHospitalUrl = getHospitalUrl + 'department=' + department;
		}else{
			getHospitalUrl = getHospitalUrl + 'city_id=73';
		}
	})();



	<!--进入页面生成医院列表-->
	$.ajax({
						url: getHospitalUrl,
						type: 'GET',
						dataType: 'json',
						data: "",
					})
					.done(function(data) {
						console.log("success");
						console.log(data);
						$(".hospital_list").empty();

						////////
						if(department){
							$hospitalMetaHolder.empty();
							var hmeta = $('<p>' + decodeURIComponent(department) + ':共找到 ' + data.length + ' 家医院</p>')
							$hospitalMetaHolder.append(hmeta);

						}


						/////////////end


						var txt = '';
						for(var key in data)
						{
							txt = txt + '<div class="hospital_box">'
   +' <div class="hospital_total">'
     
      +'<a target="_blank"  href='+data[key].website+'>'
        +'<img src='+data[key].picture+' alt='+data[key].name+' title='+data[key].name+'>'
    +'</a>'

    +'<dl>'
       +'<dt>'
       
            +'<a  href='+data[key].website+' target="_blank" title='+data[key].name+'>'+data[key].name+'</a></br>'
            +'<span>'+data[key].level+'级甲等</span>'
        +'</dt>'
        +'<dd>'
           +' <p class="tel"><span title='+data[key].phone+' class="fa fa-phone">&nbsp'+data[key].phone+'</span></p>'
           +' <p class="addr"><span title='+data[key].location+' class="fa fa-home">&nbsp'+data[key].location+'</span>'   
           +' </p>'
       +' </dd>'
    +'</dl>'
   +' </div>'
   +' <div class="hospital-comment">'
          +'<div class="order-num g-1200px-show">'
                +'<p class="num">3.2万</p>'
                +'<p>就医经验</p>'
           +' </div> ' 
            +'<div class="hop-comment">'
                +'<span  class="fa fa-thumbs-o-up dianzan" style="font-size: 2em;color:#5CA945;margin-top: 10px;left:0px;position: absolute"></span>'
                +'<label>导医服务：</label><span>88%</span>'
                +'<label>候诊时间：</label><span>87%</span>'
            +'</div>'
    +'</div>'
    +'<div class="guahao-btn">'
      +'<a href="guahao.html"><button id="guahao" data-hos_name='+data[key].name+' data-hos='+data[key].id+' class="btn btn-info">挂号</button></a>'
    +'</div>'
  +'</div>';
  		// console.log(data[key].id);
						}
						$(".hospital_list").append(txt);

						// 根据不同医院生成不同医生列表
(function(){
  $(".hospital_list").on('click','button',function(e){
  		var hospital_id = e.target.getAttribute("data-hos");
  		sStorage.hospital_id = hospital_id;
  		var hospital_name = e.target.getAttribute("data-hos_name");
  		sStorage.hospital_name = hospital_name;
  		
  		
  		

  });
})();
					})
					.fail(function() {
						console.log("error");
					})
					.always(function() {
						console.log("complete");
					});






	if(sStorage.isLogin == 1)
	{
			$("#nav3").html('<a href="#" >个人信息</a>');
            
            $("#nav4").css('display', 'none');
            $("#nav1").css('left', '80px');
            $("#nav2").css('left', '80px');
            $("#nav3").css('left', '80px');
            $("#name")[0].style.display='inline-block';
            $("#name").append(sStorage.uname);
            $("#personal-info")[0].style.display='inline-block';
	}
	else if(sStorage.isLogin == 0){
            
            $("#nav3").html('<a href="#" class="theme-login">登陆</a>');
            
            $("#nav4").css('display', 'inline-block');
            $("#nav1").css('left', '0px');
            $("#nav2").css('left', '0px');
            $("#nav3").css('left', '0px');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
          }
	var pro;
	$.ajax({
		url: 'http://api.registration.com/api/provinces',
		type: 'GET',
		dataType: 'json',
		data: "",
	})
	.done(function(data) {
		console.log("success");
		var txt = '';
		for(var key in data)
		{
			
			txt = txt + '<li><a href="#">'+data[key].name+'</a></li>'
			
		}
		pro = txt;
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	$("#changecity").click(function(){
		$(".province-list").html(pro);
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
			
			if(!$(e.target).is('#changecity') && !$(e.target).is('#citylist') && !$(e.target).is('.province-list') && !$(e.target).is('.province-list a') && !$(e.target).is('.province-list li')){

				if($('#citylist')[0].style.display == 'inline'){
					$("#citylist")[0].style.display = 'none';
				}
			}
		});

	})();

	(function(){
		$('.province-list').on('click','a',function(e){
			
			// $('.province-list').empty();
			var province = e.target.text;
			
			$.ajax({
				url: 'http://api.registration.com/api/cities',
				type: 'GET',
				dataType: 'json',
				data: "",
			})
			.done(function(data) {
				var txt = '';
				for(var key in data)
				{
					if (data[key].province == province) {
						txt = txt +  '<li><a href="#" data-city="'+data[key].id+'">'+data[key].city+'</a></li>';

					}
				}
				$(".province-list").html(txt);

				
				$('#citylist').on('click',function(e){
					var city = e.target.getAttribute("data-city");
					$.ajax({
						url: 'http://api.registration.com/api/hospitals?city_id='+city+'',
						type: 'GET',
						dataType: 'json',
						data: "",
					})
					.done(function(data) {
						console.log("success");
						console.log(data);
						$(".hospital_list").empty();
						$("#citylist")[0].style.display = 'none';
						$(".city").text(e.target.text);
						var txt = '';
						for(var key in data)
						{
							txt = txt + '<div class="hospital_box">'
   +' <div class="hospital_total">'
     
      +'<a target="_blank"  href='+data[key].website+'>'
        +'<img src='+data[key].picture+' alt='+data[key].name+' title='+data[key].name+'>'
    +'</a>'

    +'<dl>'
       +'<dt>'
       
            +'<a  href='+data[key].website+' target="_blank" title='+data[key].name+'>'+data[key].name+'</a></br>'
            +'<span>'+data[key].level+'级甲等</span>'
        +'</dt>'
        +'<dd>'
           +' <p class="tel"><span title='+data[key].phone+' class="fa fa-phone">&nbsp'+data[key].phone+'</span></p>'
           +' <p class="addr"><span title='+data[key].location+' class="fa fa-home">&nbsp'+data[key].location+'</span>'   
           +' </p>'
       +' </dd>'
    +'</dl>'
   +' </div>'
   +' <div class="hospital-comment">'
          +'<div class="order-num g-1200px-show">'
                +'<p class="num">3.2万</p>'
                +'<p>就医经验</p>'
           +' </div> ' 
            +'<div class="hop-comment">'
                +'<span  class="fa fa-thumbs-o-up dianzan" style="font-size: 2em;color:#5CA945;margin-top: 10px;left:0px;position: absolute"></span>'
                +'<label>导医服务：</label><span>88%</span>'
                +'<label>候诊时间：</label><span>87%</span>'
            +'</div>'
    +'</div>'
    +'<div class="guahao-btn">'
      +'<a href="guahao.html"><button id="guahao" data-hos='+data[key].id+' class="btn btn-info">挂号</button></a>'
    +'</div>'
  +'</div>';
  		// console.log(data[key].id);
						}
						$(".hospital_list").append(txt);

						// 根据不同医院生成不同医生列表
(function(){
  $(".hospital_list").on('click','button',function(e){
  		var hospital_id = e.target.getAttribute("data-hos");
  		sStorage.hospital_id = hospital_id;
  		

  });
})();
					})
					.fail(function() {
						console.log("error");
					})
					.always(function() {
						console.log("complete");
					});
					
				})
				
	
				})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			


		})
	})();

	
  $("#logout").on('click',function(){
            sStorage.isLogin = false;
            $("#nav3").html('<a href="#" class="theme-login">登陆</a>');
            
            $("#nav4").css('display', 'inline-block');
            $("#nav1").css('left', '0px');
            $("#nav2").css('left', '0px');
            $("#nav3").css('left', '0px');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
  });

});