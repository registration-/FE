$(document).ready(function(){
	var sStorage = window.sessionStorage;
	var hospital=null;
    var depar;
    $("#submit").click(function(event) {
    event.preventDefault();
    var info = {
      "account": $("#username").val(),
      "password": $("#password").val()
    };
    console.log(info);
    $.ajax({
        url: 'http://api.registration.com/api/users/session',
        type: 'POST',
        dataType: 'json',
        data: info
      })
      .done(function(data) {
        console.log("success");
          if (data.status==true)  {
            sStorage.uname = $("#username").val();
            sStorage.isLogin = 1;
            sStorage.id = data.user.id;
            sStorage.phone = data.user.phone;
            
            

            $('.theme-popover-mask').fadeOut(100);
            $('.theme-popover').slideUp(200);
            
            
            $("#nav4").css('visibility', 'hidden');
            $("#nav3").css('visibility', 'hidden');
            $("#name")[0].style.display='inline-block';
            $("#name").text('您好：'+info['account']);
            $("#personal-info")[0].style.display='inline-block';
            // $("#avatar")[0].style.display = 'inline-block';
            // $("#avatar").append()
            
         
        }
          else{
            sStorage.isLogin = 0;
            
            alert("用户名密码不正确");
            $("#nav3").html('<a class="theme-login" >登陆</a>');
            
            $("#nav4").css('visibility', 'visible');
            $("#nav3").css('visibility', 'visible');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
          }
        
      })
      .fail(function(e) {
        console.log("error");
        console.log(e);
      })
      .always(function() {
        console.log("complete");
      });
  });
	if(sStorage.isLogin == 1 )
  {
    
            
            $("#nav4").css('visibility', 'hidden');
            $("#nav3").css('visibility', 'hidden');
            $("#name")[0].style.display='inline-block';
            $("#name").text('您好：'+sStorage.uname);
            $("#personal-info")[0].style.display='inline-block';
  }
  else{
            
            
            $("#nav4").css('visibility', 'visible');
            $("#nav3").css('visibility', 'visible');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
          }
    $("#logout").on('click',function(){
            sStorage.isLogin = 0;           
            $("#nav4").css('visibility', 'visible');
            $("#nav3").css('visibility', 'visible');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
  });



    getHospital();
    function getHospital(){
       var getHospitalUrl = 'http://api.registration.com/api/hospitals/' + sStorage.hospital_id;
        $.getJSON(getHospitalUrl,function(h){
           console.log(h);
            hospital = h.hospital;
            $('#h-p').text(hospital.name);
            if(depar){
                $('#h-dp').text(depar);
            }
        });
    }


    var getDoctorUrl = 'http://api.registration.com/api/hospitals/' + sStorage.hospital_id + '/doctors';
    if(sStorage.department_id){
        getDoctorUrl = getDoctorUrl + '?department_id=' + sStorage.department_id;
    }
    var departments = [];
    var $keshisx = $('#keshisx');
    getDepartments();
    function getDepartments(){
        var getDepartmentsUrl = 'http://api.registration.com/api/hospitals/' + sStorage.hospital_id + '/departments';
        $.getJSON(getDepartmentsUrl, function (ds) {
           console.log(ds);
            for(var key in ds){
               departments = departments.concat(ds[key]);
            }
            console.log(departments);
            departments.forEach(function (d) {
                $keshisx.append($('<td><a href="">' + d.name + '</a></td>'));
            });
        });
    }

	$.ajax({
		url: getDoctorUrl,
		type: 'GET',
		dataType: 'json',
		data: ""
	})
	.done(function(data) {
		console.log("success");
		console.log(data);
            if(sStorage.department_id){
                depar = data[0]['department'];
            }
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