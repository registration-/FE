   $(document).ready(function(){

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
        
    });