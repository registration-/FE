// $(document).ready(function($) {
// 	var counter =0;
// 	$("#keshi-a1").hover(function() {
// 		$this.addClass('on');
// 		var txt1 = "<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心血管内科</a></li>";
// 		var txt2 = "<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心血管内科</a></li>";
// 		var txt3 = "<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心血管内科</a></li>";
// 		var txt4 = "<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心血管内科</a></li>";
// 	});
// });



$(document).ready(function(){
	var counter = new Array();
	for (var i = 0; i < 14; i++) {
		counter[i]=true;
	}
	var txt = new Array();
	$("#keshi-a1").hover(function() {
		
		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心血管内科  （554个相关疾病、 1898家相关医院、13083名相关医生）</a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">呼吸内科　（639个相关疾病、 1566家相关医院、7450名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">消化内科　（791个相关疾病、 1708家相关医院、8459名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">神经内科　（927个相关疾病、 1766家相关医院、10401名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">肾内科　（346个相关疾病、 1285家相关医院、5111名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">血液科　（493个相关疾病、 906家相关医院、3771名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">风湿免疫科　（694个相关疾病、 532家相关医院、1698名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">感染科　（1589个相关疾病、 1202家相关医院、6034名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">内分泌科　（584个相关疾病、 1501家相关医院、6059名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">过敏反应科　（414个相关疾病、 46家相关医院、79名相关医生）  </a></li>',
		'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">普通内科　（4282个相关疾病、 1506家相关医院、9391名相关医生）  </a></li>'];
		
		if(counter[0] == true)
		{
			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[0] = false;
		}
	});

	$("#keshi-a2").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">普外科　（3819个相关疾病、 2318家相关医院、15157名相关医生） </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">特需门诊　（0个相关疾病、 17家相关医院、228名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">胸外科　（777个相关疾病、 1105家相关医院、4590名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心血管外科　（434个相关疾病、 291家相关医院、1555名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">神经外科　（743个相关疾病、 1543家相关医院、6863名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">肝胆外科　（506个相关疾病、 498家相关医院、2853名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">肛肠外科　（448个相关疾病、 1004家相关医院、2696名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">泌尿外科　（507个相关疾病、 1680家相关医院、7307名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">血管外科　（291个相关疾病、 232家相关医院、855名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">整形外科　（696个相关疾病、 581家相关医院、1890名相关医生）   </a></li>',
		'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">乳腺外科　（118个相关疾病、 555家相关医院、1955名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">烧伤科　（80个相关疾病、 283家相关医院、938名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">器官移植　（17个相关疾病、 48家相关医院、231名相关医生）   </a></li>'];
		
		
		if(counter[1] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[1] = false;
		}
	});
		$("#keshi-a3").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">脊柱外科　（521个相关疾病、 217家相关医院、1213名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">关节外科　（561个相关疾病、 148家相关医院、784名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">手外科　（419个相关疾病、 231家相关医院、807名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">创伤骨科　（537个相关疾病、 209家相关医院、1063名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">矫形骨科　（225个相关疾病、 15家相关医院、50名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">骨质疏松科　（264个相关疾病、 56家相关医院、139名相关医生）   </a></li>'
		];
		
		
		if(counter[2] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[2] = false;
		}
	});
	$("#keshi-a4").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">妇科　（479个相关疾病、 1145家相关医院、8117名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">计划生育科　（308个相关疾病、 97家相关医院、219名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">产科　（405个相关疾病、 518家相关医院、3031名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">产前检查科　（102个相关疾病、 51家相关医院、137名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">生殖与遗传　（365个相关疾病、 373家相关医院、1558名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">妇女保健科　（353个相关疾病、 121家相关医院、352名相关医生）   </a></li>'
		];
		
		
		if(counter[3] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[3] = false;
		}
	});
	$("#keshi-a5").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿心血管内科　（389个相关疾病、 48家相关医院、302名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿呼吸内科　（486个相关疾病、 73家相关医院、422名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿消化科　（478个相关疾病、 43家相关医院、208名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿肾内科　（199个相关疾病、 40家相关医院、217名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿免疫科　（198个相关疾病、 16家相关医院、65名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿血液科　（407个相关疾病、 49家相关医院、243名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿神经内科　（628个相关疾病、 66家相关医院、343名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿内分泌科　（310个相关疾病、 47家相关医院、147名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿感染科　（791个相关疾病、 26家相关医院、119名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿普外科　（1246个相关疾病、 241家相关医院、1122名相关医生）    </a></li>',
		'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿胸外科　（327个相关疾病、 19家相关医院、71名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿心血管外科　（300个相关疾病、 24家相关医院、142名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿神经外科　（423个相关疾病、 26家相关医院、78名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿骨科　（543个相关疾病、 80家相关医院、291名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿整形科　（74个相关疾病、 12家相关医院、29名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿耳鼻喉科　（161个相关疾病、 45家相关医院、181名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿皮肤科　（687个相关疾病、 34家相关医院、89名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿精神科　（108个相关疾病、 16家相关医院、46名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿保健科　（871个相关疾病、 278家相关医院、884名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿营养科　（45个相关疾病、 10家相关医院、13名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小小儿康复科　（124个相关疾病、 66家相关医院、171名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿急诊科　（608个相关疾病、 36家相关医院、176名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">新生儿科　（448个相关疾病、 229家相关医院、973名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">小儿心理科　（100个相关疾病、 30家相关医院、61名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">儿童保健科　（0个相关疾病、 278家相关医院、884名相关医生）     </a></li>'
		];
		
		
		if(counter[4] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[4] = false;
		}
	});
	$("#keshi-a6").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">耳鼻咽喉科　（205个相关疾病、 2199家相关医院、8318名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">头颈外科　（147个相关疾病、 79家相关医院、451名相关医生）   </a></li>'
	];
		
		
		if(counter[5] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[5] = false;
		}
	});
	$("#keshi-a7").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔种植科　（275个相关疾病、 58家相关医院、206名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">牙体牙髓科　（298个相关疾病、 71家相关医院、714名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">牙周病科　（271个相关疾病、 37家相关医院、233名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔黏膜科　（256个相关疾病、 34家相关医院、131名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔修复科　（297个相关疾病、 125家相关医院、968名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔正畸科　（291个相关疾病、 135家相关医院、729名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔颌面外科　（320个相关疾病、 177家相关医院、983名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔预防科　（155个相关疾病、 25家相关医院、84名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">儿童口腔科　（334个相关疾病、 91家相关医院、384名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">口腔病理科　（0个相关疾病、 4家相关医院、12名相关医生）    </a></li>',];
		
		
		if(counter[6] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[6] = false;
		}
	});
	$("#keshi-a8").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">皮肤科　（891个相关疾病、 1788家相关医院、6273名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">性病科　（627个相关疾病、 88家相关医院、204名相关医生）   </a></li>'];
		
		
		if(counter[7] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[7] = false;
		}
	});
	$("#keshi-a9").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">肿瘤内科　（854个相关疾病、 480家相关医院、2500名相关医生）  </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">肿瘤外科　（772个相关疾病、 306家相关医院、1263名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">脑部肿瘤科　（83个相关疾病、 4家相关医院、14名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">头颈肿瘤科　（92个相关疾病、 13家相关医院、96名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">胸部肿瘤科　（96个相关疾病、 28家相关医院、220名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">腹部肿瘤科　（133个相关疾病、 22家相关医院、242名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">泌尿肿瘤科　（48个相关疾病、 8家相关医院、25名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">妇科肿瘤科　（277个相关疾病、 77家相关医院、483名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">骨与软组织肿瘤科　（165个相关疾病、 32家相关医院、165名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">放射治疗科　（560个相关疾病、 408家相关医院、1855名相关医生）    </a></li>',];
		
		
		if(counter[8] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[8] = false;
		}
	});
	$("#keshi-a10").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">麻醉科　（12个相关疾病、 1069家相关医院、3542名相关医生）</a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">特需门诊　（0个相关疾病、 17家相关医院、228名相关医生）  </a></li>'];
		
		
		if(counter[9] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[9] = false;
		}
	});
	$("#keshi-a11").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">疼痛科　（0个相关疾病、 556家相关医院、1185名相关医生）</a></li>'
		];
		
		
		if(counter[10] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[10] = false;
		}
	});
	$("#keshi-a12").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">放射科　（0个相关疾病、 982家相关医院、3460名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">超声科　（4个相关疾病、 804家相关医院、2409名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心电图室　（1个相关疾病、 70家相关医院、118名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">核医学科　（59个相关疾病、 332家相关医院、841名相关医生）    </a></li>'];
		
		
		if(counter[11] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[11] = false;
		}
	});
$("#keshi-a13").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医内科　（638个相关疾病、 407家相关医院、2313名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医心内科　（305个相关疾病、 130家相关医院、761名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医呼吸科　（372个相关疾病、 142家相关医院、525名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医神经内科　（453个相关疾病、 182家相关医院、881名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医消化科　（440个相关疾病、 178家相关医院、692名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医肝病科　（212个相关疾病、 113家相关医院、453名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医内分泌　（192个相关疾病、 122家相关医院、409名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医肾病内科　（156个相关疾病、 121家相关医院、437名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医免疫内科　（150个相关疾病、 80家相关医院、239名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医感染内科　（298个相关疾病、 10家相关医院、17名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医外科　（748个相关疾病、 300家相关医院、1167名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医骨科　（540个相关疾病、 627家相关医院、2898名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医乳腺外科　（52个相关疾病、 33家相关医院、55名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医肛肠科　（196个相关疾病、 244家相关医院、648名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医妇产科　（363个相关疾病、 404家相关医院、1594名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医儿科　（993个相关疾病、 279家相关医院、1009名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医皮肤科　（689个相关疾病、 210家相关医院、555名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医五官科　（723个相关疾病、 175家相关医院、463名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中医肿瘤科　（300个相关疾病、 179家相关医院、586名相关医生）      </a></li>'];
		
		
		if(counter[12] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[12] = false;
		}
	});
$("#keshi-a14").hover(function() {
		

		txt = ['<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">心理科　（150个相关疾病、 479家相关医院、1487名相关医生）   </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">内镜科　（17个相关疾病、 26家相关医院、53名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">血透科　（24个相关疾病、 28家相关医院、23名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">精神科　（213个相关疾病、 338家相关医院、3208名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">运动医学科　（213个相关疾病、 27家相关医院、80名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">介入医学科　（656个相关疾病、 400家相关医院、1047名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">中西医结合科　（594个相关疾病、 321家相关医院、1147名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">康复科　（693个相关疾病、 1122家相关医院、3233名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">全科　（24个相关疾病、 92家相关医院、317名相关医生）    </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">老年病科　（1245个相关疾病、 473家相关医院、1972名相关医生）       </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">职业病科　（43个相关疾病、 70家相关医院、293名相关医生）       </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">男科　（299个相关疾病、 385家相关医院、866名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">急诊科　（2879个相关疾病、 1312家相关医院、4314名相关医生）       </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">特诊部　（0个相关疾病、 90家相关医院、685名相关医生）      </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">体检科　（8个相关疾病、 262家相关医院、716名相关医生）       </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">病理科　（2个相关疾病、 584家相关医院、1252名相关医生）       </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">检验科　（1个相关疾病、 848家相关医院、2445名相关医生）       </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">药剂科　（0个相关疾病、 489家相关医院、1584名相关医生）     </a></li>'
		,'<li><span class="fa fa-mail-forward text-info">&nbsp</span><a href="#">护理门诊　（0个相关疾病、 67家相关医院、181名相关医生）       </a></li>'];
		
		
		if(counter[13] == true)
		{

			$("#detail-list").empty();
			$("#detail-list").append(txt);	
			for (var i = 0; i < 14; i++) {
				counter[i]=true;
			}
			counter[13] = false;
		}
	});
});