$(document).ready(function(){
	var sStorage = window.sessionStorage;
	
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
		url: 'https://registration-jlxy.rhcloud.com/api/provinces',
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
				url: 'https://registration-jlxy.rhcloud.com/api/cities',
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
						url: 'https://registration-jlxy.rhcloud.com/api/hospitals?city_id='+city+'',
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
     
      +'<a target="_blank" class="img">'
        +'<img src='+data[key].picture+' alt='+data[key].name+' title='+data[key].name+'>'
    +'</a>'

    +'<dl>'
       +'<dt>'
       
            +'<a  target="_blank" title='+data[key].name+'>'+data[key].name+'</a></br>'
            +'<span>'+data[key].level+'</span>'
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
      +'<a href="guahao.html"><button class="btn btn-info">挂号</button></a>'
    +'</div>'
  +'</div>';

						}
						$(".hospital_list").append(txt);
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