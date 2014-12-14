$(function() {
    $(".doctor-div").css("display", "none");
    $(".user-li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".user-div").css("display", "block");
        $(".doctor-div").css("display", "none");
    });
    $(".doctor-li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".doctor-div").css("display", "block");
        $(".user-div").css("display", "none");
    });
    <!--验证码部分-->
    $("#getcode").click(function() {

        AV.initialize('jgaupci1iv2ltiks0twcvh83ndo14m4v4ag5qcj11orl9gz0', 'o913ici5da0kowgifr0jpoqc3e7xcjcaj24y4fwydkanzzfx');
        AV.Cloud.requestSmsCode('').then(function() {
            //发送成功
            alert('发送成功');
        }, function(err) {
            //发送失败
            alert('发送失败');
            console.log(err);
        });

        var code = document.querySelector('#validatecode');
        code.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
                AV.Cloud.verifySmsCode(validatecode.value).then(function() {
                    alert('验证成功');
                }, function(err) {
                    //验证失败
                    alert('验证失败');
                    console.log(err);
                });
            }
        });
    });
});
$().ready(function() {
    $("#signupForm").validate();
    <!--判断手机号码位数-->
    $("#phonenumber").keyup(function(event) {
        var len = $("#phonenumber").val().length;

        if (len == 11) {
            $("#getcode").removeAttr('disabled');
        } else {
            $("#getcode").attr("disabled", "enabled");
        }
    });

    <!--判断两次密码是否相同-->
    $("#pwd2").blur(function(event) {
        if ($("#pwd1").val() != $("#pwd2").val()) {
            $("#confirm-pwd").css('display', 'block');
        } else {
            $("#confirm-pwd").css("display", "none");
        }

    });

    <!--传数据-->
    $("#submit").click(function(event) {
        event.preventDefault();
        var info = {

            "password": $("#pwd1").val(),
            "name": $("#name").val(),
            "verified_id": $("#personid").val(),
            "phone": $("#phonenumber").val()
        }
        $.ajax({
                url: 'https://registration-jlxy.rhcloud.com/api/users',
                type: 'POST',
                dataType: 'text',
                data: info
            })
            .done(function(data) {
                console.log(data);
                alert("success");
                // window.location.href=""
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

    });


});