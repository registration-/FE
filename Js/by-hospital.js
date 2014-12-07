

$(document).ready(function(){
	var counter = 0;
	$("#hospital-a1").hover(function() {
		$(this).addClass('on');
		var txt1 = "<li><a target='_blank' href='http://www.guahao.com/hospital/125336070937502'>复旦大学附属华山医院（总院）</a></li>";
		var txt2 = "<li><a target='_blank' href='http://www.guahao.com/hospital/0ff26372-929b-4041-b7b7-145d317aee07'>上海远大心胸医院</a></li>";
		var txt3 = "<li><a target='_blank' href='http://www.guahao.com/hospital/125358368239002'>复旦大学附属肿瘤医院</a></li>";
		var txt4 = "<li><a target='_blank' href='http://www.guahao.com/hospital/128229647014009'>上海中医药大学附属岳阳中西医院</a></li>";
		var txt5 = "<li><a target='_blank' href='http://www.guahao.com/hospital/125361059609302'>复旦大学附属眼耳鼻喉科医院</a></li>";
		var txt6 = "<li><a target='_blank' href='http://www.guahao.com/hospital/125336131920301'>复旦大学附属妇产科医院（黄浦）</a></li>";
		var txt7 = "<li><a target='_blank' href='http://www.guahao.com/hospital/125336070937502'>复旦大学附属中山医院</a></li>";
		var txt8 = "<li><a target='_blank' href='http://www.guahao.com/hospital/8f113a19-eee7-47b8-9517-2ad069a2f57a'> 上海长海医院</a></li>";
		var txt9 = "<li><a target='_blank' href='http://www.guahao.com/hospital/areahospitals?p=%E4%B8%8A%E6%B5%B7'>更多&raquo</a></li>"
		if(counter == 0)
		{
			$("#list-content").append(txt1,txt2,txt3,txt4,txt5,txt6,txt7,txt8,txt9);	
			counter +=1;
		}
	});
});