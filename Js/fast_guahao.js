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

	$.ajax({
		url: 'http://api.registration.com/api/hospitals/' + sStorage.hospital_id+'/doctors?department_id='+sStorage.department_id+'',
		type: 'GET',
		dataType: 'json',
		data: ""
	})
	.done(function(data) {
		console.log("success");
		// console.log(data);
		
		
		var txt = '';
    var txt1 = '';
		for(var key in data)
		{
			txt = txt + '<!--医生信息-->'
      +'<div class="doc_box">'
        +'<div class="doc_info">'
          +'<div class="doc_base_info">'
            +'<a>'
              +'<img  class="doctor_img" src='+data[key].avatar+' alt='+data[key].name+' title='+data[key].name+' ></img>'
            +'</a>'
            +'<dl><dt><a class="name">'+data[key].name+'</a></dt>'
              +'<dd>'
              +'<p class="doc_grade"><span>'+data[key].title+'</span></p>'
              +'<p><a href="#">'+data[key].department+'</a></p>'
              +'</dd>'
            +'</dl>'
          +'</div>'
          +'<div class="doc-skill">'
            +'<p><label>擅长：</label>'+data[key].good_at+'</p>'
          +'</div>'
        +'</div>'
        +'<div class="schedule">'
        +'<div>';
        <!--时间表-->

      var sources = data[key].sources;
      
      sources.forEach(function(sources){
        // console.log(sources.date);
        date = new Date(sources.date);

        txt = txt 
              +'<button data-doc_id='+sources.id+' data-doc_price='+sources.price+' data-doc_date='+date.toLocaleDateString()+' data-doc_avatar='+data[key].avatar+' data-doc_name='+data[key].name+' data-doc_title='+data[key].title+' data-doc_department='+data[key].department+' class="guahao btn btn-success">'
              +'<div class="date"><span class="fa fa-calendar">&nbsp</span>'+date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+'</div>'
              +'<div class="week"><span class="fa fa-rmb">&nbsp</span>'+sources.price+'</div>'
              +'<div class="week"><span class="fa fa-heart">&nbsp</span>'+sources.amount+'</div>'
              +'</button>'

      }); 

      txt = txt  +'</div>'
       +' </div>'
      +'</div>';
   
         
		}
		$('.doc_list').append(txt);
    (function(){
      $('.schedule').on('click','button',function(e){
          // console.log(e.target);
          // console.log($(e.target));

          // console.log($(e.target).parents().parents());
          if($(e.target).is('.guahao') )
          {
              var doctor_price = $(e.target).data("doc_price");
              var doctor_date = $(e.target).data("doc_date");
              var doctor_id = $(e.target).data("doc_id");
              var doctor_name = $(e.target).data("doc_name");
              var doctor_avatar = $(e.target).data("doc_avatar");
              var doctor_title = $(e.target).data("doc_title");
              var doctor_department = $(e.target).data("doc_department");
              
          }
          else if($(e.target).is('span'))
          {
              var doctor_price = $(e.target).parents().parents().data("doc_price");
              var doctor_date = $(e.target).parents().parents().data("doc_date");
              var doctor_id = $(e.target).parents().parents().data("doc_id");
              var doctor_name = $(e.target).parents().parents().data("doc_name");
              var doctor_avatar = $(e.target).parents().parents().data("doc_avatar");
              var doctor_title = $(e.target).parents().parents().data("doc_title");
              var doctor_department = $(e.target).parents().parents().data("doc_department");
          }
          else
          {
              var doctor_price = $(e.target).parents().data("doc_price");
              var doctor_date = $(e.target).parents().data("doc_date");
              var doctor_id = $(e.target).parents().data("doc_id");
              var doctor_name = $(e.target).parents().data("doc_name");
              var doctor_avatar = $(e.target).parents().data("doc_avatar");
              var doctor_title = $(e.target).parents().data("doc_title");
              var doctor_department = $(e.target).parents().data("doc_department");
          }
          sStorage.doctor_id = doctor_id;
          sStorage.doctor_avatar = doctor_avatar;
          sStorage.doctor_name = doctor_name;
          sStorage.doctor_title = doctor_title;
          sStorage.doctor_department = doctor_department;
          sStorage.doctor_date = doctor_date;
          sStorage.doctor_price = doctor_price;
         
          window.location.href="confirm.html"
      });
    })();
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});