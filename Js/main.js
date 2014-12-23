$(document).ready(function() {
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

  $("#btn1").click(function() {
    $("#test1").animate({
      left: '100px',
      opacity: '0.7',
      height: '50px',
      width: '70px'
    });
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

  // if(sStorage.isLogin)
  // {

            // $("#nav3").html('<a href="#">个人信息</a>');
            // $("#nav3").attr('href','#')
            // $("#nav4").css('display', 'none');
            // $("#nav1").css('left', '80px');
            // $("#nav2").css('left', '80px');
            // $("#nav3").css('left', '80px');
            // $("#name")[0].style.display='inline-block';
            // $("#name").append(info['account']);
            // $("#personal-info")[0].style.display='inline-block';
  // }
  // else{

            // $("#nav3").html('<a href="#">登陆</a>');
            // $("#nav3").attr('href','#')
            // $("#nav4").css('display', 'inline-block');
            // $("#nav1").css('right', '80px');
            // $("#nav2").css('right', '80px');
            // $("#nav3").css('right', '80px');
            // $("#name")[0].style.display='none';
            // $("#name").text('');
            // $("#personal-info")[0].style.display='none';
  // }
  // 
  $("#logout").on('click',function(){
            sStorage.isLogin = 0;          
            $("#nav4").css('visibility', 'visible');
            $("#nav3").css('visibility', 'visible');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
  });
});