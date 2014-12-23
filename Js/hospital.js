/**
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

    var hospital = null;
    var hid;
    var getHospitalUrl = 'http://api.registration.com/api/hospitals/';
    (function () {
        var search = window.location.search || '';
        hid = search.split('=')[1];
        if(hid){
            getHospitalUrl = getHospitalUrl + hid;
            console.log(getHospitalUrl);
            getHospital();
            getDepartments(getHospitalUrl + '/departments');
        }else{
            getHospitalUrl = getHospitalUrl + 'city_id=73';
        }
    })();

    function getHospital(){
        $.getJSON(getHospitalUrl,function(h){
            hospital = h.hospital;
            console.log(hospital);
            var $hPic = $('#h-pic'),
                $hName = $('#h-name'),
                $hPhone = $('#h-phone'),
                $hWebsiste = $('#h-website'),
                $hDescription = $('#h-description'),
                $hDesc = $('#h-desc'),
                $hRule = $('#h-rule');
            $hPic.attr('src',hospital.picture);
            $hName.text(hospital.name);
            $hPhone.text(hospital.phone);
            $hWebsiste.text(hospital.website);
            $hDescription.text(hospital.description.substr(0,100) + '...');
            $hDesc.text(hospital.description);
            $hRule.text(hospital.rules);
            $('#go-yuyue').data('hid',hospital.id);
        });
    }
    function getDepartments(url){
        var $departmentsList = $('#departments-list');
        $.getJSON(url, function (categories) {
            var departments;
            console.log(categories);
            for(var key in categories){
                var $categoryDom = $('<div class="department-row">');
                var $departmentDom = $('<div class="department-cell">');
                $categoryDom.append($('<label>' + key + '</label>'));
                departments = categories[key];
                departments.forEach(function (department) {
                    $departmentDom.append($('<a href="" data-did="' + department.id + '" data-hid="' + department.hospital_id + '">' + department.name + '</a>'));
                })
                $categoryDom.append($departmentDom);
                $departmentsList.append($categoryDom);
            }
        })
        $departmentsList.on('click','a',function(e){
            e.preventDefault();
            var $self = $(this);
            console.log($self);
            console.log($self.data('did'));
           window.sessionStorage.setItem('hospital_id',$self.data('hid'));
            //window.sessionStorage.setItem('department_id',$self.data('did'));
            window.location.href="http://registration.com/guahao.html?department_id=" + $self.data('did');
        });
        $('#go-yuyue').on('click', function (e) {
            var $self = $(this);
            e.preventDefault();
            window.sessionStorage.setItem('hospital_id',$self.data('hid'));
            window.sessionStorage.removeItem('department_id');
            window.location.href="http://registration.com/guahao.html";
        })
    }
});