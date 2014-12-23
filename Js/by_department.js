/**
 *
 * Created by jl on 12/21/14.
 */
$(document).ready(function () {
    var sStorage = window.sessionStorage;
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

    console.log('df');
    $.getJSON('http://api.registration.com/api/departments', function (categories) {
        console.log(categories);
        var categoriesList = $('#categories-list'),
            departmentsList = $('#departments-list'),
            departments;
        for(var key in categories){
            categoriesList.append($('<li>' + key + '</li>'));
            departments = categories[key];

            var departmentPanel = $('<div>').addClass('department-panel');
            departments.forEach(function (department) {
                departmentPanel.append($('<a href="http://registration.com/hospital_list.html?department=' + department.name + '">' + department.name + '</a>'));
            });
            departmentsList.append(departmentPanel);
        }
        var activeCategory;
        categoriesList.on('mouseover','li',function(event){
            if(activeCategory){
               activeCategory.removeClass('active');
                departmentsList.children('.department-panel').eq(activeCategory.index()).removeClass('active');
            }
            activeCategory = $(this);
            activeCategory.addClass('active');
            departmentsList.children('.department-panel').eq(activeCategory.index()).addClass('active');
        });
        departmentsList.children('.department-panel').eq(0).addClass('active');
        categoriesList.children('li').eq(0).addClass('active');
    });
});
