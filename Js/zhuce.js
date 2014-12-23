jQuery(document).ready(function() {
    var isRightCode = false;
    var isRightId = true;
    
        <!--验证码部分-->
        $("#getcode").click(function() {

            AV.initialize('df6xgsiroas152id5x4441jalilarx3617zcbymnkpju16j7', '9c5cnhy8yimpg2wyakogi72uvcs6dqvcejoxhwy8cfjz6ylj');
            AV.Cloud.requestSmsCode($("#phonenumber").val()).then(function() {
                //发送成功
                alert('发送成功');
            }, function(err) {
                //发送失败
                alert('发送失败');
                console.log(err);
            });

            var code = document.querySelector('#validatecode');

           
        });
    

    $("#validatecode").on('keyup', function(event) {
                if($(validatecode).val().length == 6)
                {
                    AV.Cloud.verifySmsCode(validatecode.value).then(function() {
                        console.log('验证成功');
                        isRightCode = true;
                    }, function(err) {
                        //验证失败
                        console.log('验证失败');
                        isRightCode = false;
                        console.log(err);
                    });
                    }
            });

    <!--判断手机号码位数-->

    $("#phonenumber").keyup(function(event) {
        var len = $("#phonenumber").val().length;

        if (len == 11) {
            $("#getcode").removeAttr('disabled');
        } else {
            $("#getcode").attr("disabled", "enabled");
        }
    });
    <!--判断身份证号码是否有误-->
    
    $("#personid").blur(function(event){
        console.log("no");
        var id_number = $(this).val();
        $.ajax({
            url: 'http://api.uihoo.com/idcard/idcard.http.php?idnumber='+id_number+'&format=jsonp',
            type: 'POST',
            dataType: 'jsonp',
            data: ""
        })
        .done(function(data) {
            console.log("success");
            
            if (data.error == 1) {
                isRightId = false;
                $("#confirm-id_number").css('display','block');
                // console.log(isRightId);
            }
            else
            {
                
                $("#confirm-id_number").css('display', 'none');
                isRightId = true;
                // console.log(isRightId);
            }
            // console.log(isRightId);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    });

    <!--判断两次密码是否相同-->
    $("#pwd2").blur(function(event) {
        if ($("#pwd1").val() != $("#pwd2").val()) {
            $("#confirm-pwd").css('display', 'block');
            isSame = true;
        } else {
            isSame = false;
            $("#confirm-pwd").css("display", "none");
        }

    });

    // binds form submission and fields to the validation engine
    jQuery("#signupForm").validationEngine();

    $("#signupForm").validationEngine("attach", {
        promptPosition: "centerRight",
        scroll: false,
        onValidationComplete: function(form, status) {
            
            if (status == true ) {
                //  console.log(isRightId);
                // console.log(isRightCode);
                // console.log('form_complete');
                if (isRightId == true) {
                    
                // console.log('id_right');
                if(isRightCode == true)
                {
                    $("#confirm-validate_code").css('display','none');
                    // console.log('validatecode_right');
                <!--传数据-->
                
                    var info = {

                        "password": $("#pwd1").val(),
                        "name": $("#name").val(),
                        "verified_id": $("#personid").val(),
                        "phone": $("#phonenumber").val()
                    }
                    $.ajax({
                            url: 'http://api.registration.com/api/users',
                            type: 'POST',
                            dataType: 'json',
                            data: info
                        })
                        .done(function(data) {
                            // console.log(data);
                            console.log('success');
                            window.location.href = "main.html"
                        })
                        .fail(function() {
                            console.log("error");
                        })
                        .always(function() {
                            console.log("complete");
                        });

               
}
else{
    $("#confirm-validate_code").css('display','block');
}
}
            }
        }
    });



});