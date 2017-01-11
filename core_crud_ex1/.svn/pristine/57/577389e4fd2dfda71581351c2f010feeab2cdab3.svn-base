var yy;
var mm;
var calampm;
var caltime;
var calmin;

var calAP;
var calYYMM;
var calDay;

var today = new Date();

var num=0;
var num1=today.getYear()-100;

var addedCount=0;
//var callCal;

$(function() {
	var ctx = $('#ctx').val();
	schedulePopBtn(ctx);
	scheduleCalFunc(ctx);
	asideDate(num, num1);
	callCalender();
	clickCalenderDate();
	schedulechkfunc(ctx);
});


//일정추가

function schedulePopBtn(ctx) {
	
	$('.schedule_bt_position').delegate('#schedule_confirm', 'click', function() {
		
		var addcount= $('.tablebody tbody').find('.schedule_input_nm');
		var scheduleData = new Array();
		
		for(var i=0; i< addcount.length; i++){
			
					var date ={
							
							schedule_type_cd : $('.schedule_code_select').val(),
							schedule_nm : $(addcount[i]).val(),
							schedule_cont : $(addcount[i]).parent().next().find('.schedule_input_cont').val(),
							date : $(addcount[i]).parent().next().next().find("input[type='hidden']").val()
					}
					
					
					if(date.schedule_nm==null||date.schedule_nm==""){
						alert("약속명을 입력해주세요");
						return false;
					}else if(date.schedule_cont==null||date.schedule_cont==""){
						alert("약속내용을 입력해주세요");
						return false;
					}else if(date.date==null||date.date=='undefinded'||date.date==""||date.date=="empty"){
						alert("약속일자를 입력해주세요");
						return false;
					}
					
					scheduleData.push(date);
		}
		
		var jsonData = JSON.stringify(scheduleData);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/scheduleInsert',				//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				alert("일정이 추가 되었습니다.");
				
				$('.tablebody tbody tr').remove();
				
				for(var i =0; i<data.length;i++){
						
					var tempdate= new Date(data[i].SCHEDULE_DT);
					
					var month = tempdate.getMonth()+1;
					var day = tempdate.getDate();
					var hour=tempdate.getHours();
					var min=tempdate.getMinutes();
					if(month<10){
						month=("0"+String(tempdate.getMonth()+1));
					}
					if(day<10){
						day = ("0"+String(tempdate.getDate()));
					}
					if(hour<10){
						hour=("0"+String(tempdate.getHours()));
					}
					
					if(min<10){
						min=("0"+String(tempdate.getMinutes()));
					}
					
					var date= tempdate.getFullYear()+"-"+month+"-"+day+" "+hour+":"+min;
					var insertline="<tr><td style='width:10%;'><input type='hidden' id='scheduleId' value='"+ data[i].SCHEDULE_ID + "'><input type='checkbox' class='schedulechk'></td><td style='width:10%;'>"+data[i].CD_NM;
					insertline+="</td><td style='width:21.8%;'><input type='hidden' value='" + data[i].SCHEDULE_TYPE_CD+ "'>" + data[i].SCHEDULE_NM+"</td>"
					+"<td style='width:22%;'>"+data[i].SCHEDULE_CONT+"</td>"
					+"<td style='width:20%;'>"+date
					+"</td>"
					+"<td style='width:10%;'>"+data[i].ORG_NM+"</td>"
					+"<td style='width:10%;'>"+data[i].FST_REG_ID_NM+"</td></tr>";
					$('.tablebody tbody').append(insertline);
					
			}
				
				$('#schedule_confirm').css("display", "inline-block");		
				$('#schedule_modiconfirm').css("display", "none");
				
				$('#schedule_confirm').attr("disabled", true);
				$('#schedule_modiconfirm').attr("disabled", true);
				
				$('#schedule_modify').attr("disabled", false);
				$('#schedule_delete').attr("disabled", false);
				
			}, error : function(){
				
				alert("오류");
			}
			
		});

	});
	
	
	$(".schedule_bt_position").delegate('#schedule_modiconfirm', 'click', function(){
		
		var schedulechk= $('.tablebody tbody').find("input[type=checkbox]");
		var schedulechkData = new Array();
		
		for(var i=0; i<schedulechk.length; i++){
			
			if($(schedulechk[i]).is(':checked')){
				
				//alert($(schedulechk[i]).parent().next().next().next().next().find("input[type='hidden']").val());
				
				var chktempData = {
						
						schedule_id : $(schedulechk[i]).parent().find("input[type='hidden']").val(),
						schedule_type_cd : $(schedulechk[i]).parent().next().find("select").val(),
						schedule_nm : $(schedulechk[i]).parent().next().next().find("input").val(),
						schedule_cont : $(schedulechk[i]).parent().next().next().next().find("input").val(),
						date :  $(schedulechk[i]).parent().next().next().next().next().find("input[type='hidden']").val()
						
				}
				
				schedulechkData.push(chktempData);
				
			}
		}
		
		var jsonData = JSON.stringify(schedulechkData);
		jQuery.ajaxSettings.traditional = true;
		
		$.ajax({
			
			url : ctx+'/schedulemodify',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				alert("일정이 수정 되었습니다.");
				
				$('.tablebody tbody tr').remove();
				
				for(var i =0; i<data.length;i++){
						
					var tempdate= new Date(data[i].SCHEDULE_DT);
					
					var month = tempdate.getMonth()+1;
					var day = tempdate.getDate();
					var hour=tempdate.getHours();
					var min=tempdate.getMinutes();
					if(month<10){
						month=("0"+String(tempdate.getMonth()+1));
					}
					if(day<10){
						day = ("0"+String(tempdate.getDate()));
					}
					if(hour<10){
						hour=("0"+String(tempdate.getHours()));
					}
					
					if(min<10){
						min=("0"+String(tempdate.getMinutes()));
					}
					
					var date= tempdate.getFullYear()+"-"+month+"-"+day+" "+hour+":"+min;
					var insertline="<tr><td style='width:10%;'><input type='hidden' id='scheduleId' value='"+ data[i].SCHEDULE_ID + "'><input type='checkbox' class='schedulechk'></td><td style='width:10%;'>"+data[i].CD_NM;
					insertline+="</td><td style='width:21.8%;'><input type='hidden' value='" + data[i].SCHEDULE_TYPE_CD+ "'>" + data[i].SCHEDULE_NM+"</td>"
					+"<td style='width:22%;'>"+data[i].SCHEDULE_CONT+"</td>"
					+"<td style='width:20%;'>"+date
					+"</td>"
					+"<td style='width:10%;'>"+data[i].ORG_NM+"</td>"
					+"<td style='width:10%;'>"+data[i].FST_REG_ID_NM+"</td></tr>";
					$('.tablebody tbody').append(insertline);
					
			}
				
				$('#schedule_confirm').css("display", "inline-block");		
				$('#schedule_modiconfirm').css("display", "none");
				
				$('#schedule_confirm').attr("disabled", true);
				
				$('#schedule_add').attr("disabled", false);
				$('#schedule_modiconfirm').attr("disabled", false);
				$('#schedule_delete').attr("disabled", false);
				
			}
		});
		
	});
	
	$('.schedule_bt_position').delegate('#schedule_add', 'click', function(){
		
		
		$.ajax({
			
			url : ctx+'/scheduleadd',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			/*data :  jsonData,*/						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				var insertline="<tr><td><input type='checkbox' class='schedulechk'></td><td><select class='schedule_code_select'>";
				
				for(var i=0; i<data.length;i++){
					insertline += "<option value='"+data[i].CODE+"'>"+data[i].CD_NM+"</option>";
				}
						
						insertline+="</td><td><input type='text' class='schedule_input_nm' id='schedule_nm' name='schedule_nm'></td>"
						+"<td><input type='text' class='schedule_input_cont' id='schedule_cont' name='schedule_cont'></td>"
						+"<td><img src='./resources/image/calendar_icon.jpg' width='25px' height='25px' class='calendar_btn'>"
						+"<input type='hidden' id='calDate' class='calDate' value='empty'>"
						+"</td>"
						+"<td></td>"
						+"<td></td></tr>";
						
						$('.tablebody tbody').append(insertline);
						
						$('#schedule_confirm').attr("disabled", false);
						$('#schedule_confirm').css("display", "inline-block");
						
						$('#schedule_modiconfirm').attr("disabled", true);
						$('#schedule_modiconfirm').css("display", "none");
						
						$('#schedule_modify').attr("disabled", true);
						$('#schedule_delete').attr("disabled", true);
						
						return addedCount += 1;
						
			},error : function(){
				alert("오류");
			}
			
		});

	});

	$('.schedule_bt_position').delegate('#schedule_modify', 'click', function(){
		
		var schedulechk= $('.tablebody tbody').find("input[type=checkbox]");
		var chkswitch = false;
		
		for(var i=0; i<schedulechk.length; i++){
			
			if($(schedulechk[i]).is(":checked", true)){
				chkswitch = true;
				break;
			}
			
		}
		
		if(chkswitch==false){
			alert("체크박스에 체크해주세요!");
			$('#schedule_modiconfirm').attr("disabled", true);
			return false;
		}
		
		$('#schedule_confirm').attr("disabled", true);
		$('#schedule_confirm').css("display", "none");
		$('#schedule_add').attr("disabled", true);
		$('#schedule_delete').attr("disabled", true);
		
		$('#schedule_modiconfirm').attr("disabled", false);
		$('#schedule_modiconfirm').css("display", "inline-block");
		
		var schedulechkNum = new Array();
		
		for(var i=0; i<schedulechk.length; i++){
			
			if($(schedulechk[i]).is(':checked')){
				schedulechkNum.push(i);
			}
		}
		
		$.ajax({
			
			url : ctx+'/scheduleadd',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			/*data :  jsonData,*/						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				for(var i=0; i<schedulechkNum.length; i++){
					
					for(var b=0; b<schedulechk.length; b++){
						
						if(schedulechkNum[i]==b){
							
							$(schedulechk[b]).parent().next().text("");
							
							var insertline = "<select class='schedule_code_select'>";
							
							for(var j=0; j<data.length; j++){
								insertline += "<option value='"+data[j].CODE+"'>"+data[j].CD_NM+"</option>";
							}
							insertline += "</select>";
							
							$(schedulechk[b]).parent().next().append(insertline);
							
							var scheduletitle = $(schedulechk[b]).parent().parent().children().eq(2).text();
							var schedulecontent = $(schedulechk[b]).parent().parent().children().eq(3).text();
							var scheduledate = $(schedulechk[b]).parent().parent().children().eq(4).text();
							
							$(schedulechk[b]).parent().parent().children().eq(2).text("");
							$(schedulechk[b]).parent().parent().children().eq(3).text("");
							$(schedulechk[b]).parent().parent().children().eq(4).text("");
							
							$(schedulechk[b]).parent().parent().children().eq(2).append("<input type='text' value='"+scheduletitle+"'>");
							$(schedulechk[b]).parent().parent().children().eq(3).append("<input type='text' value='"+schedulecontent+"'>");
							$(schedulechk[b]).parent().parent().children().eq(4).append("<input type='hidden' value='"+scheduledate+"'><img src='./resources/image/calendar_icon.jpg' width='25px' height='25px' class='calendar_btn'>");
						}
					}
					}

				}
				
			});

	});
	
	$('.schedule_bt_position').delegate('#schedule_delete', 'click', function(){
		
		var schedulechk= $('.tablebody tbody').find("input[type=checkbox]");
		var schedulechkData = new Array();
		
		for(var i=0; i<schedulechk.length; i++){
			
			if($(schedulechk[i]).is(":checked", true)){
				
				var scheduleData = {
						
						scheduleId : $(schedulechk[i]).parent().find("input[type='hidden']").val()
						
				}
				
				schedulechkData.push(scheduleData);
				
			}
			
		}
		
		
		var jsonData = JSON.stringify(schedulechkData);
		jQuery.ajaxSettings.traditional = true;
		
		if(schedulechkData==null||schedulechkData==undefined||schedulechkData==""){
			
			alert("체크박스에 체크해주세요!");
			return false;
			
		}
		
		if(confirm('정말로 삭제하시겠습니까?')==false){
			return false;
		}
		
		$.ajax({
			
			url : ctx+'/scheduledelete',			//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				alert("일정이 삭제 되었습니다.");
				
				$('.tablebody tbody tr').remove();
				
				for(var i =0; i<data.length;i++){
						
					var tempdate= new Date(data[i].SCHEDULE_DT);
					
					var month = tempdate.getMonth()+1;
					var day = tempdate.getDate();
					var hour=tempdate.getHours();
					var min=tempdate.getMinutes();
					if(month<10){
						month=("0"+String(tempdate.getMonth()+1));
					}
					if(day<10){
						day = ("0"+String(tempdate.getDate()));
					}
					if(hour<10){
						hour=("0"+String(tempdate.getHours()));
					}
					
					if(min<10){
						min=("0"+String(tempdate.getMinutes()));
					}
					
					var date= tempdate.getFullYear()+"-"+month+"-"+day+" "+hour+":"+min;
					var insertline="<tr><td style='width:10%;'><input type='hidden' id='scheduleId' value='"+ data[i].SCHEDULE_ID + "'><input type='checkbox' class='schedulechk'></td><td style='width:10%;'>"+data[i].CD_NM;
					insertline+="</td><td style='width:21.8%;'><input type='hidden' value='" + data[i].SCHEDULE_TYPE_CD+ "'>" + data[i].SCHEDULE_NM+"</td>"
					+"<td style='width:22%;'>"+data[i].SCHEDULE_CONT+"</td>"
					+"<td style='width:20%;'>"+date
					+"</td>"
					+"<td style='width:10%;'>"+data[i].ORG_NM+"</td>"
					+"<td style='width:10%;'>"+data[i].FST_REG_ID_NM+"</td></tr>";
					$('.tablebody tbody').append(insertline);
					
			}
				
				$('#schedule_confirm').css("display", "inline-block");		
				$('#schedule_modiconfirm').css("display", "none");
				
				$('#schedule_confirm').attr("disabled", true);
				$('#schedule_modiconfirm').attr("disabled", true);
				
			}, error : function(){
				alert("에러");
			}
		
		});
		
	});

	$('#schedule_cancel').click(function() {

		$('#schedule_confirm').attr("disabled", true);
		$('#schedule_confirm').css("display", "inline-block");
		
		$('#schedule_modiconfirm').attr("disabled", true);
		$('#schedule_modiconfirm').css("display", "none");
		
		$('#schedule_add').attr("disabled", false);
		$('#schedule_modify').attr("disabled", false);
		$('#schedule_delete').attr("disabled", false);
		
		////////////////////////////////
		
		$.ajax({
			
			url : ctx+'/scheduleCancel',				//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				$('.tablebody tbody tr').remove();
				
				for(var i =0; i<data.length;i++){
						
					var tempdate= new Date(data[i].SCHEDULE_DT);
					
					var month = tempdate.getMonth()+1;
					var day = tempdate.getDate();
					var hour=tempdate.getHours();
					var min=tempdate.getMinutes();
					if(month<10){
						month=("0"+String(tempdate.getMonth()+1));
					}
					if(day<10){
						day = ("0"+String(tempdate.getDate()));
					}
					if(hour<10){
						hour=("0"+String(tempdate.getHours()));
					}
					
					if(min<10){
						min=("0"+String(tempdate.getMinutes()));
					}
					
					var date= tempdate.getFullYear()+"-"+month+"-"+day+" "+hour+":"+min;
					var insertline="<tr><td style='width:10%;'><input type='hidden' id='scheduleId' value='"+ data[i].SCHEDULE_ID + "'><input type='checkbox' class='schedulechk'></td><td style='width:10%;'>"+data[i].CD_NM;
					insertline+="</td><td style='width:21.8%;'><input type='hidden' value='" + data[i].SCHEDULE_TYPE_CD+ "'>" + data[i].SCHEDULE_NM+"</td>"
					+"<td style='width:22%;'>"+data[i].SCHEDULE_CONT+"</td>"
					+"<td style='width:20%;'>"+date
					+"</td>"
					+"<td style='width:10%;'>"+data[i].ORG_NM+"</td>"
					+"<td style='width:10%;'>"+data[i].FST_REG_ID_NM+"</td></tr>";
					$('.tablebody tbody').append(insertline);
					
			}

			}
		});
	});
	
	$('#btndiv').delegate('#calsubmit', 'click', function(){
		$('.calendardiv').css('display','none');
		
		if(calYYMM==undefined||calYYMM==null){

			calYYMM = $('.caltext').text();
			calDay = $('#calnumchk').text();
			
		}
		
		var eyy = calYYMM.split("년");
		var emm = eyy[1].split("월");
		
		yy = 20+eyy[0];

		mm = emm[0].substring(1,emm[0].length);
		
		if(mm.length<2){
			mm = "0"+mm;
		}
		
		if(calDay.length<2){
			calDay = "0"+calDay;
		}
		calampm = $('#calampm').val();
		caltime = $('#caltime').val();
		calmin = $('#calmin').val();

		if(calampm=='PM'){
			
			if(caltime==12){
				caltime = 12;
			}else{
				caltime = Number(caltime)+12;
			}
			
		}else{
			if(caltime==12){
				caltime = 0;
			}else{
				caltime = Number(caltime);
			}
			
		}
		
		var addcount= $('.tablebody tbody').find('.schedulechk');
		
		for(var i=0; i<addcount.length; i++){
			if(i==callCal){
				
				$(addcount[i]).parent().next().next().next().next().find("input[type='hidden']").val(yy+"-"+mm+"-"+calDay+" "+caltime+":"+calmin);
			}
		}
		
		return yy, mm, calDay, calampm, caltime, calmin;
		});
	
}

function clickCalenderDate(){
	
	$('.caltable').delegate('.calnum', 'click', function(event){
		
			event.preventDefault();
			
			$('.caltable a').removeAttr('style');
			$('.caltable input').remove();
			
			$(this).css("color", "black");
			$(this).css("font-weight", "bold");

			calYYMM = $('.caltext').text();
			calDay = $(this).text();
			
			return calYYMM, calDay;
		
	});
	
}

function callCalender(){
	
	$('.tablebody tbody').delegate('.calendar_btn', 'click', function(event){
		
		var chkbtncount = $('.tablebody tbody').find('.schedulechk');
		
		callCal= $(chkbtncount).index($(this).parent().prev().prev().prev().prev().find(".schedulechk"));
		
		$('.calendardiv').css('top', event.offsetY+80);
		$('.calendardiv').css('left', event.offsetX+100);
		$('#calendardiv').css('display', 'block');
		
		var scheduledate = $(this).parent().find("input[type='hidden']").val();

		var today = new Date();
		var year = 0;
		var date1 = scheduledate.substring(8,10);
		
		var time = scheduledate.substring(11,13);
		var min = scheduledate.substring(14,16);
		
		if(scheduledate!=="empty"){
			
		num1=scheduledate.substring(2,4);
		tempnum=scheduledate.substring(5,7);
		if(tempnum.substring(0,1)==='0'){
			num=tempnum.substring(1,2);
		}
		num=tempnum;
		
		if(today.getMonth()+1==num){
			num=0;
		}else if(today.getMonth()+1>num){
			num=12-today.getMonth()+1;
		}else{

			num=num-(today.getMonth()+1);
			
		}
		year=num1;
		if(year+100>today.getYear()){
			year=(Number(year)+100)-today.getYear();
		}else if(year+100<today.getYear()){
			year = (Number(year)+100)-today.getYear();
		}else{
			year=0;
			}
		}
		else{
			num=0;
			num1=today.getYear()-100;
			year=0;
		}
		
		$('.caltable tbody').remove();
		$('.caltable').append("<tbody>");
		asideDate(num, num1, year, date1);
		$('.caltable').append("</tbody>");
		
		var selectap = $('.apclass').find('option');
		var selecttime = $('.timeclass').find('option');
		var selectmin = $('.minclass').find('option');
		
		if(time.substring(0,1)=='0'){
			time=time.substring(1,2);
		}
		
		if(time>=12){
			var timeAP='PM';
			if(time==12){
				time=12;
			}else{
				time=time-12;
			}
			
		}else{
			var timeAP='AM';
		}
		
		for(var i=0; i<selecttime.length; i++){
			
			if($(selecttime[i]).val()==time){
				$(selecttime[i]).attr("selected", "selected");
			}
			
		}
		
		for(var b=0; b<selectap.length; b++){
			
			if($(selectap[b]).val()==timeAP){
				$(selectap[b]).attr("selected", "selected");
				
			}
		}
		
		for(var c=0; c<selectmin.length; c++){
			
			if($(selectmin[c]).val()==min){
				$(selectmin[c]).attr("selected", "selected");
				
			}
			
		}
		
		//return callCal;
	});
	
}

function scheduleCalFunc(ctx){
	
	$('#leftgo').click(function(event){
		
		event.preventDefault();
		
		var today = new Date();
		
		num--;
		if(num+today.getMonth()<0){
			num=-today.getMonth()+11
			num1=Number(num1)-1;
		}
		
		$('#leftgo').append("<span></span>");
		$('.caltable tbody').remove();
		$('.caltable').append("<tbody>");
		asideDate(num, num1);
		$('.caltable').append("</tbody>");

	});
		
	$('#rightgo').click(function(event){
		
		event.preventDefault();
		
		var today = new Date();
		
		num++;
		if(num+today.getMonth()>11){
			num=-today.getMonth()
			num1=Number(num1)+1;
		}
		
		$('#leftgo').append("<span></span>");
		$('.caltable tbody').remove();
		$('.caltable').append("<tbody>");
		asideDate(num, num1);
		$('.caltable').append("</tbody>");

	});
	
}

function asideDate(num, num1, year, date1){
	
	var today = new Date();
	if(year=='undefinded'||year==""||year==null||year==0){
		var date = new Date(today.getYear()+1900, today.getMonth()+num, 1);
	}else{
		var date = new Date(today.getYear()+1900+year, today.getMonth()+num, 1);
	}
	
	 var last=[31,28,31,30,31,30,31,31,30,31,30,31];

	 if(date.getYear()%4 == 0 && date.getYear() % 100 !=0 || date.getYear()%400 == 0){
		 lastDate=last[1]=29;
	 }
	 
	 var lastDate=last[date.getMonth()]; 
	 var row=Math.ceil(lastDate/7);
	 
	 var b = date.getDay();
	 
	 $('.caltext').empty();
	 
	 if(num1!=null){
		 $('.caltext').append(num1+"년 "+(today.getMonth()+num+1)+"월");
	 }else{
		 $('.caltext').append((today.getYear()-100)+"년 "+(today.getMonth()+num+1)+"월");
	 }
	 
	 for(i=0; i<42; i++){
		 
		 if(i%7==0){
			 
			 $('.caltable tbody').append("<tr>");
			 
		 }
		 
		 if(i>=date.getDay() && i<=lastDate+date.getDay()-1){
			 
			 if(date1==(i-date.getDay()+1)){
				 $('.caltable tbody').append("<td>"+"<a class='calnum' id='calnumchk'>"+ (i-date.getDay()+1) +"</a></td>");
			 }else{
				 $('.caltable tbody').append("<td>"+"<a href='#'"+" class='calnum'>"+ (i-date.getDay()+1) +"</a></td>");
			 }
			 
		 }else{
			 $('.caltable tbody').append("<td> </td>");
		 }
		 
		 if(i%7==0){
			 
			 $('.caltable tbody').append("</tr>");
			 
		 }
		 
	 }
	 
	 return num, num1;
	 
}

function schedulechkfunc(ctx){
	$('#schedulechkm').click(function(){
		
		if($('#schedulechkm').is(":checked")){
			$('.schedulechk').prop("checked", true);
		}else{
			$('.schedulechk').prop("checked", false);
		}
		
	});
		
}