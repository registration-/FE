$().ready(function(){
	var sStorage = window.sessionStorage;
	$(".user_name").html('<span class="ahead">就诊人: </span><span class="tail">'+sStorage.uname+'</span>');
	$(".doctor_info").html('<span class="ahead">预约医生: </span><span class="tail">'+sStorage.doctor_name+'('+sStorage.hospital_name+'-'+sStorage.doctor_department+')</span>');
	$(".date").html('<span class="ahead">就诊日期: </span><span class="tail">'+sStorage.doctor_date+'</span>');
	$(".price").html('<span class="ahead">价格: </span><span class="ttail">'+sStorage.doctor_price+'元</span>');
});