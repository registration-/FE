   $(document).ready(function(){
    var sStorage = window.sessionStorage;
    if(sStorage.isLogin == 1)
    {
        $("#nav3").html('<a href="#">个人信息</a>');
            
            $("#nav4").css('display', 'none');
            $("#nav1").css('left', '80px');
            $("#nav2").css('left', '80px');
            $("#nav3").css('left', '80px');
            $("#name")[0].style.display='inline-block';
            $("#name").append(sStorage.uname);
            $("#personal-info")[0].style.display='inline-block';
    }
    else{
            
            $("#nav3").html('<a class="theme-login">登陆</a>');
          
            $("#nav4").css('display', 'inline-block');
            $("#nav1").css('left', '0px');
            $("#nav2").css('left', '0px');
            $("#nav3").css('left', '0px');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
          }
    $("#getcode").click(function(event) { 
        event.preventDefault();
        AV.initialize('jgaupci1iv2ltiks0twcvh83ndo14m4v4ag5qcj11orl9gz0','o913ici5da0kowgifr0jpoqc3e7xcjcaj24y4fwydkanzzfx');
        AV.Cloud.requestSmsCode($("#phone").val()).then(function(){
        //发送成功
        alert('发送成功');
        }, function(err){
        //发送失败
        alert('发送失败');
        console.log(err);
        });
        });
        $("#submit").click(function(event){
            event.preventDefault();
            AV.Cloud.verifySmsCode(validatecode.value).then(function(){
            alert('验证成功');
            }, function(err){
        //验证失败
            alert('验证失败');
            console.log(err);
            });
        });
        

        var code = document.querySelector('#validatecode');
        code.addEventListener('keyup',function(event){
        if(event.keyCode === 13){
        AV.Cloud.verifySmsCode(validatecode.value).then(function(){
        alert('验证成功');
        }, function(err){
        //验证失败
        alert('验证失败');
        console.log(err);
        });
        }
        });
        
  $("#logout").on('click',function(){
            sStorage.isLogin = 0;
            $("#nav3").html('<a class="theme-login">登陆</a>');
            
            $("#nav4").css('display', 'inline-block');
            $("#nav1").css('left', '0px');
            $("#nav2").css('left', '0px');
            $("#nav3").css('left', '0px');
            $("#name")[0].style.display='none';
            $("#name").text('');
            $("#personal-info")[0].style.display='none';
  });
    });