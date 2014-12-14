$(document).ready(function() {
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
        url: 'https://registration-jlxy.rhcloud.com/api/users/session',
        type: 'POST',
        dataType: 'json',
        data: info
      })
      .done(function(data) {
        console.log('success');
        console.log(data);
      })
      .fail(function(e) {
        console.log("error");
        console.log(e);
      })
      .always(function() {
        console.log("complete");
      });
  });

  $("#admin-submit").click(function(event) {
    event.preventDefault();
    
    var info = {
      "admin_account": $("#admin-username").val(),
      "admin_password": $("#admin-password").val()
    };
    console.log(info);
    $.ajax({
        url: 'https://registration-jlxy.rhcloud.com/api/hospitals/session',
        type: 'POST',
        dataType: 'json',
        data: info
      })
      .done(function(data) {
        console.log('success');
        console.log(data);
        $('.theme-popover-mask').fadeOut(100);
        $('.theme-popover').slideUp(200);
      })
      .fail(function(e) {
        console.log("error");
        console.log(e);
      })
      .always(function() {
        console.log("complete");
      });
  });
});