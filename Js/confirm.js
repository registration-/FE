   $(document).ready(function(){

    var sStorage = window.sessionStorage;
    

    $("#doctor_avatar").attr({
        src: sStorage.doctor_avatar,
        alt: sStorage.doctor_name,
        title:sStorage.doctor_name
    });
    $("#doctor_name").text(sStorage.doctor_name);
    $("#doctor_title").text(sStorage.doctor_title);
    $("#doctor_department").text(sStorage.doctor_department);
    $("#doctor_date").text(sStorage.doctor_date);
    $("#doctor_price").text('￥'+sStorage.doctor_price);



     $("#submit2").click(function(event) {
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

        
    $("#getcode").click(function(event) { 
        event.preventDefault();
        AV.initialize('df6xgsiroas152id5x4441jalilarx3617zcbymnkpju16j7','9c5cnhy8yimpg2wyakogi72uvcs6dqvcejoxhwy8cfjz6ylj');
        AV.Cloud.requestSmsCode($("#phone").val()).then(function(){
        //发送成功
        console.log('发送成功');
        }, function(err){
        //发送失败
        console.log('发送失败');
        console.log(err);
        });
        });
        $("#submit").click(function(event){
            event.preventDefault();
            AV.Cloud.verifySmsCode(validatecode.value).then(function(){
            console.log('验证成功');
            var info = {
                "hospital_id":sStorage.hospital_id,
                "source_id":sStorage.doctor_id
            }
            $.ajax({
                url: 'http://api.registration.com/api/users/'+sStorage.id+'/registrations',
                type: 'POST',
                dataType: 'json',
                data: info
            })
            .done(function(data) {
                console.log("success");
                console.log(data);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            
            window.location.href="success.html";
            }, function(err){
        //验证失败
            console.log('验证失败');
            console.log(err);
            });
        });
        

        var code = document.querySelector('#validatecode');
        code.addEventListener('keyup',function(event){
        if(event.keyCode === 13){
        AV.Cloud.verifySmsCode(validatecode.value).then(function(){
        console.log('验证成功');
        window.location.href="success.html";
        }, function(err){
        //验证失败
        console.log('验证失败');
        console.log(err);
        });
        }
        });
    
        $("#phone").keyup(function(event) {
            var len = $(this).val().length;
            if (len == 11) {
                $("#getcode").removeAttr('disabled');   
            }
            else{
                
                $("#getcode").attr('disabled','enabled');
            }
        });

    });

    
       