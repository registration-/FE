$(document).ready(function(){

    var sStorage = window.sessionStorage;
    
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

  $("#nav1").click(function() {
    $(this).addClass("active")
    $("#nav2").removeClass("active")
    $("#nav3").removeClass("active")
    $("#nav4").removeClass("active")
  });
  $("#nav2").click(function() {
    $(this).addClass("active")
    $("#nav1").removeClass("active")
    $("#nav3").removeClass("active")
    $("#nav4").removeClass("active")
  });
  $("#nav3").click(function() {
    $(this).addClass("active")
    $("#nav2").removeClass("active")
    $("#nav1").removeClass("active")
    $("#nav4").removeClass("active")
  });
  $("#nav4").click(function() {
    $(this).addClass("active")
    $("#nav2").removeClass("active")
    $("#nav3").removeClass("active")
    $("#nav1").removeClass("active")
  });
        $(function(){
		        $(".person-right2").css("display","none");
				$(".person-right3").css("display","none");
            $(".myorder").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".person-right").css("display","block");
                $(".person-right2").css("display","none");
				$(".person-right3").css("display","none");
            });
            $(".mycontact").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".person-right2").css("display","block");
                $(".person-right").css("display","none");
				$(".person-right3").css("display","none");
            });
			$(".mysetting").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".person-right3").css("display","block");
                $(".person-right").css("display","none");
				$(".person-right2").css("display","none");
            });
        });
        $(function(){
		        $(".pws").css("display","none");
				$(".hps").css("display","none");
            $(".perxinxi").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".perxx").css("display","block");
                $(".pws").css("display","none");
				$(".hps").css("display","none");
            });
            $(".passwordset").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".pws").css("display","block");
                $(".perxx").css("display","none");
				$(".hps").css("display","none");
            });
			$(".headpageset").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                $(".hps").css("display","block");
                $(".pws").css("display","none");
				$(".perxx").css("display","none");
            });
        });


$.ajax({
    url:'http://api.registration.com/api/users/'+sStorage.id+'/registrations',
    type:'GET',
    dataType:'json',
    data:""
})
.done(function(data) {
    console.log(data);
            for(var i=0;data.registrations[i].id != null;i++)
            {
            if(data.registrations[i].status == "P")
            {
            $("#allyy").append("<tr><td>"+data.registrations[i].order_at+"</td><td class='text-left'><a href='#' target='_blank'>"
                                +data.registrations[i].doctor_title+data.registrations[i].doctor_name+"</a><br><a href='#' target='_blank'>"
                                +data.registrations[i].department+"</a><br><a href='#' target='_blank'>"+data.registrations[i].hospital_name
                                +"</a></td><td>"+sStorage.uname+"</td><td class='text-right red-word'>"+data.registrations[i].price+"</td><td>未就诊<br/><a href='javascript:void(0)' onclick='qxclick("+sStorage.uid+","+data.registrations[i].id+")'>取消</a></td><td>"+data.registrations[i].date.toLocaleString()+"</td></tr>"
                            );
            }
            else if(data.registrations[i].status == "E")
            {
            $("#allyy").append("<tr><td>"+data.registrations[i].order_at+"</td><td class='text-left'><a href='#' target='_blank'>"
                                +data.registrations[i].doctor_title+data.registrations[i].doctor_name+"</a><br><a href='#' target='_blank'>"
                                +data.registrations[i].department+"</a><br><a href='#' target='_blank'>"+data.registrations[i].hospital_name
                                +"</a></td><td>"+sStorage.uname+"</td><td class='text-right red-word'>"+data.registrations[i].price+"</td><td>已过期</td><td>"+data.registrations[i].date.toLocaleString()+"</td></tr>"
                            );
            }
            else if(data.registrations[i].status == "C")
            {
            $("#allyy").append("<tr><td>"+data.registrations[i].order_at+"</td><td class='text-left'><a href='#' target='_blank'>"
                                +data.registrations[i].doctor_title+data.registrations[i].doctor_name+"</a><br><a href='#' target='_blank'>"
                                +data.registrations[i].department+"</a><br><a href='#' target='_blank'>"+data.registrations[i].hospital_name
                                +"</a></td><td>"+sStorage.uname+"</td><td class='text-right red-word'>"+data.registrations[i].price+"</td><td>已取消</td><td>"+data.registrations[i].date.toLocaleString()+"</td></tr>"
                            );
            }
            else
            {
            $("#allyy").append("<tr><td>"+data.registrations[i].order_at+"</td><td class='text-left'><a href='#' target='_blank'>"
                                +data.registrations[i].doctor_title+data.registrations[i].doctor_name+"</a><br><a href='#' target='_blank'>"
                                +data.registrations[i].department+"</a><br><a href='#' target='_blank'>"+data.registrations[i].hospital_name
                                +"</a></td><td>"+sStorage.uname+"</td><td class='text-right red-word'>"+data.registrations[i].price+"</td><td>已就诊</td><td>"+data.registrations[i].date.toLocaleString()+"</td></tr>"
                            );
            }
            }
})
.fail(function() {
    console.log("error");
})
.always(function() {
    console.log("complete");
});

var isSame = false;

 $("#renewpwd2").blur(function(event) {
        if ($("#newpwd1").val() != $("#renewpwd2").val()) {
            $("#confirm-pwd").css('display', 'block');
            isSame = true;
        } else {
            isSame = false;
            $("#confirm-pwd").css("display", "none");
        }

    });

 <!--载入页面生成个人信息-->
 $.ajax({
     url: 'http://api.registration.com/api/users/'+sStorage.id+'',
     type: 'GET',
     dataType: 'json',
     data: ""
 })
 .done(function(data) {
     console.log("success");
     $("#login-name").text(sStorage.uname);
     console.log(sStorage.uname+' ');
     $("#email").text(data.email+' ');
     $("#realname").text(data.name+' ');
     $("#gender").text(data.gender+' ');
     $("#id-number").text(data.verified_id+' ');
     $("#province").text(data.province+' ');
     $("#address").text(data.city+' ');
     $("#insurance_card").text(data.insurance_card+' ');

 })
 .fail(function() {
     console.log("error");
 })
 .always(function() {
     console.log("complete");
 });
 
<!--设置个人信息-->
<!--设置姓名-->
$(".set-name").on('click',function(e){
    e.preventDefault();
    $(this).css('display', 'none');
    $("#set-name").css('display', 'inline-block');
});
$("#set-name").on('keyup',function(event){
    if (event.keyCode === 13) {
        
        var info = {
            'name':$(this).val()
        }
        console.log(info);
        $("#set-name").css('display', 'none');
        $(".set-name").css('display','inline-block');
        $("#realname").text(info['name']+' ');
        $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    }
});
<!--设置性别-->
$(".set-gender").on('click',function(e){
    e.preventDefault();
    $(this).css('display', 'none');
    $("#set-gender").css('display', 'inline-block');
});
$("#set-gender").on('keyup',function(event){
    if (event.keyCode === 13) {
        
        var info = {
            'gender':$(this).val()
        }
        console.log(info);
        $("#set-gender").css('display', 'none');
        $(".set-gender").css('display','inline-block');
        $("#gender").text(info['gender']+' ');
        $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    }
});
<!--设置所在省份-->
$(".set-province").on('click',function(e){
    e.preventDefault();
    $(this).css('display', 'none');
    $("#set-province").css('display', 'inline-block');
});
$("#set-province").on('keyup',function(event){
    if (event.keyCode === 13) {
        
        var info = {
            'province':$(this).val()
        }
        $("#set-province").css('display', 'none');
        $(".set-province").css('display','inline-block');
        $("#province").text(info['province']+' ');
        $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    }
});
<!--设置所在城市-->
$(".set-address").on('click',function(e){
    e.preventDefault();
    $(this).css('display', 'none');
    $("#set-address").css('display', 'inline-block');
});
$("#set-address").on('keyup',function(event){
    if (event.keyCode === 13) {
        
        var info = {
            'city':$(this).val()
        }
        $("#set-address").css('display', 'none');
        $(".set-address").css('display','inline-block');
        $("#address").text(info['city']+' ');
        $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    }
});

<!--设置医保卡-->
$(".set-insurance_card").on('click',function(e){
    e.preventDefault();
    $(this).css('display', 'none');
    $("#set-insurance_card").css('display', 'inline-block');
});
$("#set-insurance_card").on('keyup',function(event){
    if (event.keyCode === 13) {
        
        var info = {
            'insurance_card':$(this).val()
        }
        $("#set-insurance_card").css('display', 'none');
        $(".set-insurance_card").css('display','inline-block');
        $("#insurance_card").text(info['insurance_card']+' ');
        $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    }
});
<!--设置邮箱-->
$(".set-email").on('click',function(e){
    e.preventDefault();
    $(this).css('display', 'none');
    $("#set-email").css('display', 'inline-block');
});
$("#set-email").on('keyup',function(event){
    if (event.keyCode === 13) {
        
        var info = {
            'email':$(this).val()
        }
        $("#set-email").css('display', 'none');
        $(".set-email").css('display','inline-block');
        $("#email").text(info['email']+' ');
        $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    }
});

<!--修改密码-->
<!--判断旧密码是否正确-->
var isOldRight = false;
$("#oldpassword").blur(function(){
    var password = $(this).val();
    var info = {
        'account':sStorage.uname,
        'password':password
    }
    $.ajax({
        url: 'http://api.registration.com/api/users/session',
        type: 'POST',
        dataType: 'json',
        data: info
    })
    .done(function(data) {
        console.log("success");
        if (data.status == true) {
            isOldRight = true;
            $("#confirm-opwd").css('display','none');
        }
        else{
            isOldRight = false;
            $("#confirm-opwd").css('display','inline-block');
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
});

<!--提交修改-->
$("#sub").on('click',function(e){
    e.preventDefault();
    var password = $("#renewpwd2").val();
    var info = {
        'password':password
    }
    $.ajax({
            url: 'http://api.registration.com/api/users/'+sStorage.id+'',
            type: 'PUT',
            dataType: 'json',
            data: info
        })
        .done(function() {
            console.log("success");
            alert("修改成功！");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    
});


});