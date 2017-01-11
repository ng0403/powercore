$(function(){
	var ctx = $('#ctx').val();
	datetransfer(ctx);
	selecttdfunc(ctx);
	schedulebtnfunc(ctx);
	schedulelistclicktr(ctx);
});

// 달력 이전 달, 다음 달 이동 기능
function datetransfer(ctx){
	
	var yearnum = 0;
	var monthnum = 0;
	var daynum = 0;
	
	dateDrawList(ctx, yearnum, monthnum, daynum);
	
	// 이전 달 이동 버튼
	$('#scheduletablediv').delegate('#leftbtn', 'click', function(){
		
		$('#savebtn').css('display', 'none');
		$('#submitbtn').css('display', 'none');
		$('#addbtn').css('display', 'none');
		$('#modifybtn').css('display', 'none');
		$('#deletebtn').css('display', 'none');
		
		//우측에 위치한 리스트 애니메이션 형태로 호출
		$('.schedulelist').animate({
			right:-400,
			opacity: 0
		}, 500, "swing", function(){
			
		});
		
		// 현재 달에 -1
		monthnum-=1;
		$('#scheduletable tbody').empty();
		dateDrawList(ctx, yearnum, monthnum, daynum);
		
	});
	
	// 다음 달 이동 버튼
	$('#scheduletablediv').delegate('#rightbtn', 'click', function(){
		
		$('#savebtn').css('display', 'none');
		$('#submitbtn').css('display', 'none');
		$('#addbtn').css('display', 'none');
		$('#modifybtn').css('display', 'none');
		$('#deletebtn').css('display', 'none');
		
		//우측에 위치한 리스트 애니메이션 형태로 호출
		$('.schedulelist').animate({
			right:-400,
			opacity: 0
		}, 500, "swing", function(){
			
		});
		
		// 현재 달에 +1
		monthnum+=1;
		$('#scheduletable tbody').empty();
		dateDrawList(ctx, yearnum, monthnum, daynum);
		
	});
	
}

// 달력 구현
function dateDrawList(ctx, yearnum, monthnum, daynum){
	
	var today = new Date();

	var date = new Date(today.getYear()+1900+yearnum, today.getMonth()+monthnum, 1);
	
	 var last=[31,28,31,30,31,30,31,31,30,31,30,31];
	
	 if(date.getYear()%4 == 0 && date.getYear() % 100 !=0 || date.getYear()%400 == 0){
		 lastDate=last[1]=29;
	 }
	 
	 var lastDate=last[date.getMonth()]; 
	 var row=Math.ceil(lastDate/7);
	 
	 var b = date.getDay();
	 
	 $('.caltext').empty();
	 
	 $('.caltext').append((date.getYear()-100)+"년 "+(date.getMonth()+1)+"월");
	 
	 var datelength=lastDate+date.getDay();
	 var dataline = 36;
	 var i=0;
	 if((datelength/7)>5){
		 dataline = 43;
	 }
	 
	 
	 while(i<dataline){
		 
		 if(i%7==0){
			 
			 if(i!=0){
				 caltable += "<tr class='calconttr'><td class='calconttd'></td><td class='calconttd'></td><td class='calconttd'></td><td class='calconttd'></td><td class='calconttd'></td><td class='calconttd'></td><td class='calconttd'></td></tr>";
			 }
			 
			 $('#scheduletable tbody').append(caltable);
			 var caltable = "<tr class='calnumtr'>";
		 }
		 
		 if(i>=date.getDay() && i<=lastDate+date.getDay()-1){
			 if(i%7==0){
				 caltable += "<td class='sunday'>"+(i-date.getDay()+1)+"</td>";
			 }else if(i%7==6){
				 caltable += "<td class='saturday'>"+(i-date.getDay()+1)+"</td>"; 
			 }
			 else{
				 caltable += "<td>"+(i-date.getDay()+1)+"</td>";
			 }
 
		 }else{
			 caltable += "<td></td>";
		 }
		
		 i += 1;
		 
	}
	 
	 var year = date.getYear()+1900+yearnum;
	 var month = date.getMonth()+1+monthnum;
	 var day = date.getDate()+daynum;
	 
	 calendarContFunc(ctx, year, date.getMonth()+1, day);
	 
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);

	return retVal
}

// 달력에 등록된 일정 표기
function calendarContFunc(ctx, year, month, day){
	
	var date = year+"-"+month+"-"+day;
	
	var conttd = $('#scheduletable').find('.calconttd');
	var tdate = new Date(year, month-1, 1);
	
	 var last=[31,28,31,30,31,30,31,31,30,31,30,31];
	
	 if(tdate.getYear()%4 == 0 && tdate.getYear() % 100 !=0 || tdate.getYear()%400 == 0){
		 lastDate=last[1]=29;
	}
	 var lastDate=last[tdate.getMonth()]; 
	 
	 for(var t=0; t<conttd.size(); t++){
	
		 if(t-tdate.getDay()+1>0&&t-tdate.getDay()+1<=lastDate){
		$(conttd[t]).attr("id", t-tdate.getDay()+1);
		}
	 }
	
	$.ajax({
		
		url : ctx+'/schedulelist',					//보낼 URL
		dataType : 'json',						//응답 받을 데이터 형식
		type : 'POST',								//서버 요청 방식
		data :  date,						//파라미터 { 'aaa' : 'bbb' }
		contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
		success : function(data){
			 
			var datetext="";
			for(var i=0; i<data.length; i++){
				
				var tempdate = dateFormat(Number(data[i].SCHEDULE_DT));
				var date = tempdate.substring(8,10);
				
				for(var j=0; j<conttd.size(); j++){
					
					if(j==Number(date-1)+tdate.getDay()){
						
						var sdate = new Date(data[i].SCHEDULE_DT);
						var hour = sdate.getHours();
						var min = sdate.getMinutes();
						if(sdate.getHours().toString().length<2){
							hour = "0"+String(sdate.getHours());
						}
						if(sdate.getMinutes().toString().length<2){
							min = "0"+String(sdate.getMinutes());
						}
						datetext += hour + " : " + min + "<br>";
						datetext += data[i].SCHEDULE_CONT + "<br>";
						$(conttd[j]).append(datetext);
						$(conttd[j]).append("<input type='hidden' value='"+data[i].SCHEDULE_ID+"'>");
						
					}
					
				}
				datetext = "";
			}
			
			existCalCont();
			
			
		}, error : function(){
			
			alert("오류");
			
		}
		
	});
	
}

//달력에 등록된 일정 css 적용
function existCalCont(){
	
	var conttd = $('#scheduletable').find('.calconttd');

	for(var i=0; i<conttd.length; i++){
		
		if($(conttd[i]).text()==""||$(conttd[i]).text()==undefined||$(conttd[i]).text()==null){
						
		}else{
			$(conttd[i]).css("background-color", "#ebe7e7");
		}
		
	}
	
}

// td 누를시 이벤트 발생
function selecttdfunc(ctx){
	
	$('#scheduletable').delegate('.calconttd', 'click', function(){
		
		if($(this).attr("id")==undefined){
			return false;
		}
		
		$('#scheduledatatable tbody').empty();
		$('#title').parent().find("input[type='hidden']").remove();
		
		$('#title').val("");
		$('#cont').val("");
		$('#fulldate').val("");
		$('#fulltime1').val("");
		$('#fulltime2').val("");
		
		calYYMM = $('.caltext').text();
		var eyy = calYYMM.split("년");
		var emm = eyy[1].split("월");
		
		var yy = 20+eyy[0];

		var mm = emm[0].substring(1,emm[0].length);
		
		if(mm.length<2){
			mm = "0"+mm;
		}
		var calDay = $(this).attr("id");
		
		if(calDay.length<2){
			calDay = "0"+calDay;
		}
		
		var scheduleDate = yy+"-"+mm+"-"+calDay;
		
		var scheduleId = $(this).find('input[type="hidden"]').val();
		
		if($('.calconttd').is('.hover')){
			if($('.hover').attr("id")==$(this).attr("id")){
			
				$(this).toggleClass('hover');
				
			}else{
				
				$('.calconttd').removeClass('hover');
				$(this).toggleClass('hover');
				
				$('.schedule_code_select option').remove();
				
				$('.schedulelist').animate({
					right:-400,
					opacity: 0
				}, 500, "swing", function(){
					
					$('#title').attr('disabled', false);
					$('#cont').attr('disabled', false);
					$('#fulldate').attr('disabled', true);
					$('#fulltime1').attr('disabled', false);
					$('#fulltime2').attr('disabled', false);
					$('.schedule_code_select').attr("disabled", false);
					
					$('#savebtn').css('display', 'none');
					$('#submitbtn').css('display', 'none');
					$('#addbtn').css('display', 'none');
					$('#modifybtn').css('display', 'none');
					$('#deletebtn').css('display', 'none');
				});
			}
		}else{
			$(this).toggleClass('hover');
		}
		
			// 버튼 상태에 따른 이벤트 호출
			if($(this).is(".hover")){
				
				$('.schedulelist').animate({
					right:0,
					opacity: 1
				}, 500, "swing", function(){
					
					// 일정이 존재하면 아래 내용 실행
					if(scheduleId != undefined){
						$.ajax({
							
							url : ctx+'/schedulesearchoneday',					//보낼 URL
							dataType : 'json',						//응답 받을 데이터 형식
							type : 'POST',								//서버 요청 방식
							data :  scheduleDate,						//파라미터 { 'aaa' : 'bbb' }
							contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
							success : function(data){
								
								var date = new Date(Number(data[0].SCHEDULE_DT));
								var hour = date.getHours();
								var min = date.getMinutes();
								if(date.getHours().toString().length<2){
									hour = "0"+String(date.getHours());
								}
								if(date.getMinutes().toString().length<2){
									min = "0"+String(date.getMinutes());
								}
								var scheduletime1 = hour;
								var scheduletime2 = min;
								
								$.ajax({
									
									url : ctx+'/scheduleadd',					//보낼 URL
									dataType : 'json',						//응답 받을 데이터 형식
									type : 'POST',								//서버 요청 방식
									/*data :  jsonData,*/						//파라미터 { 'aaa' : 'bbb' }
									contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
									success : function(schedulecode){
										$('.schedule_code_select option').remove();
										for(var i=0; i<schedulecode.length;i++){
											insertline += "<option value='"+schedulecode[i].CODE+"'>"+schedulecode[i].CD_NM+"</option>";
										}
										
										$('.schedule_code_select').append(insertline);
										$('.schedule_code_select').val(data[0].SCHEDULE_TYPE_CD);
										$('.schedule_code_select').attr("disabled", false); 
									}
								});
								
								var scheduledata = "";
								for(var d=0; d<data.length; d++){
									
									var sdate = new Date(data[d].SCHEDULE_DT);
									var hour = sdate.getHours();
									var min = sdate.getMinutes();
									if(sdate.getHours().toString().length<2){
										hour = "0"+String(sdate.getHours());
									}
									if(sdate.getMinutes().toString().length<2){
										min = "0"+String(sdate.getMinutes());
									}
									var datetext = hour + " : " + min + "<br>";
									scheduledata += "<tr><td style='text-align: center;'>"+"<input type='hidden' value='"+data[d].SCHEDULE_ID+"'>"+data[d].CD_NM+"</td>"
									+ "<td>"+data[d].SCHEDULE_NM+"</td>"
									+"<td style='text-align: center;'>"+datetext+"</td>"
									+"<td style='text-align: center;'>"+dateFormat(Number(data[d].FST_REG_DT))+"</td></tr>"
								}
								$('#scheduledatatable tbody').append(scheduledata);
								
								$('#title').parent().append("<input type='hidden' value='"+data[0].SCHEDULE_ID+"'>");
								
								$('#title').val(data[0].SCHEDULE_NM);
								$('#title').attr('disabled', true);
								
								$('#cont').val(data[0].SCHEDULE_CONT);
								$('#cont').attr('disabled', true);
								
								$('#fulldate').val(dateFormat(Number(data[0].SCHEDULE_DT)));
								$('#fulldate').attr('disabled', true);
								
								$('#fulltime1').val(scheduletime1);
								$('#fulltime1').attr('disabled', true);
								
								$('#fulltime2').val(scheduletime2);
								$('#fulltime2').attr('disabled', true);
								
								$('#submitbtn').css('display', 'none');
								$('#submitbtn').attr('disabled', true);
								
								$('#savebtn').css('display', 'inline-block');
								$('#savebtn').attr('disabled', true);
								
								$('#addbtn').css('display', 'inline-block');
								$('#addbtn').attr('disabled', false);
								
								$('#modifybtn').css('display', 'inline-block');
								$('#modifybtn').attr('disabled', false);
								$('#deletebtn').css('display', 'inline-block');
								
							}, error : function(){
								alert("실패");
							}
							
						});
					
						//일정이 존재하지 않으면 아래 내용 출력
					}else{
						
						calDay = $('.hover').attr("id");
						
						if(calDay.length<2){
							calDay = "0"+calDay;
						}
						
						scheduleDate = yy+"-"+mm+"-"+calDay;
						
						$('#fulldate').val(scheduleDate);
						
						var insertline = "";
						$.ajax({
							
							url : ctx+'/scheduleadd',					//보낼 URL
							dataType : 'json',						//응답 받을 데이터 형식
							type : 'POST',								//서버 요청 방식
							/*data :  jsonData,*/						//파라미터 { 'aaa' : 'bbb' }
							contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
							success : function(data){
								$('.schedule_code_select option').remove();
								for(var i=0; i<data.length;i++){
									insertline += "<option value='"+data[i].CODE+"'>"+data[i].CD_NM+"</option>";
								}
								
								$('.schedule_code_select').append(insertline);
								
								$('#submitbtn').css('display', 'inline-block');
								$('#submitbtn').attr('disabled', false);
								
								var scheduledata = "<tr><td colspan='4' style='text-align:center;'>일정이 존재하지 않습니다.</td></tr>";
								
								$('#scheduledatatable tbody').append(scheduledata);
							}
						});
						
						
					}
					
					
				});
			}else{
				$('.schedule_code_select option').remove();
				$('.schedulelist').animate({
					right:-400,
					opacity: 0
				}, 500, "swing", function(){
					$('.schedule_code_select').attr("disabled", false);
					
					$('#title').attr('disabled', false);
					$('#cont').attr('disabled', false);
					$('#fulldate').attr('disabled', true);
					$('#fulltime1').attr('disabled', false);
					$('#fulltime2').attr('disabled', false);
					
				});
			}
	});
	
}

// 버튼 관련 이벤트
function schedulebtnfunc(ctx){
	
	// 등록 버튼 이벤트
	$('#schedulebtndiv').delegate('#submitbtn', 'click', function(){
		
		calYYMM = $('.caltext').text();
		var eyy = calYYMM.split("년");
		var emm = eyy[1].split("월");
		
		var yy = 20+eyy[0];

		var mm = emm[0].substring(1,emm[0].length);
		
		if(mm.length<2){
			mm = "0"+mm;
		}
		var calDay = $('.hover').attr("id");
		
		if(calDay.length<2){
			calDay = "0"+calDay;
		}
		
		var scheduleDate = yy+"-"+mm+"-"+calDay;
		
		var scheduleData = {
				schedule_type_cd : $('.schedule_code_select').val(),
				schedule_nm : $('#title').val(),
				schedule_cont : $('#cont').val(),
				fulldate : $('#fulldate').val(),
				fulltime1 : $('#fulltime1').val(),
				fulltime2 : $('#fulltime2').val()
		};
		
		var jsonData = JSON.stringify(scheduleData);
		
		$.ajax({
			url : ctx+'/scheduleInsertfromList',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert("일정이 등록되었습니다.");
				$('#title').attr('disabled', true);
				$('#cont').attr('disabled', true);
				$('#fulldate').attr('disabled', true);
				$('#fulltime1').attr('disabled', true);
				$('#fulltime2').attr('disabled', true);
				$('#submitbtn').attr('disabled', true);
				$('.schedule_code_select').attr("disabled", false);
				
				$('.schedule_code_select option').remove();
				$('.schedulelist').animate({
					right:-400,
					opacity: 0
				}, 500, "swing", function(){
					
					var yearnum = 0;
					var monthnum = 0;
					var daynum = 0;
					$('#scheduletable tbody').empty();
					dateDrawList(ctx, yearnum, monthnum, daynum);
					
				});
				
			}, error : function(){
				alert("일정등록에 실패하였습니다.");
			}
		});
		
	});
	
	// 수정 버튼 이벤트
	$('#schedulebtndiv').delegate('#modifybtn', 'click', function(){
		
		$('#savebtn').attr('disabled', false);
		$('#modifybtn').attr('disabled', true);
		
		$('#title').attr('disabled', false);
		$('#cont').attr('disabled', false);
		$('#fulldate').attr('disabled', true);
		$('#fulltime1').attr('disabled', false);
		$('#fulltime2').attr('disabled', false);
		
		$('.schedule_code_select').attr('disabled', false);
		
	});

	// 삭제 버튼 이벤트
	$('#schedulebtndiv').delegate('#deletebtn', 'click', function(){
		
		var scheduledata = {
			schedule_id : $('#title').parent().find("input[type='hidden']").val(),
			fulldate : $('#fulldate').val()
		}
		
		var jsonData = JSON.stringify(scheduledata);
		
		$.ajax({
			url : ctx+'/scheduledeleteone',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert("삭제 완료");
				$('#title').attr('disabled', true);
				$('#cont').attr('disabled', true);
				$('#fulldate').attr('disabled', true);
				$('#fulltime1').attr('disabled', true);
				$('#fulltime2').attr('disabled', true);
				$('#submitbtn').attr('disabled', true);
				$('.schedule_code_select').attr("disabled", false);
				
				$('.schedule_code_select option').remove();
				$('.schedulelist').animate({
					right:-400,
					opacity: 0
				}, 500, "swing", function(){
					
					var yearnum = 0;
					var monthnum = 0;
					var daynum = 0;
					$('#scheduletable tbody').empty();
					dateDrawList(ctx, yearnum, monthnum, daynum);
					
				});
			},error:function(){
				alert("실패");
				}
			});
		
	});
	
	// 추가 버튼 이벤트
	$('#schedulebtndiv').delegate('#addbtn', 'click', function(){
		
		$('#title').parent().find("input[type='hidden']").remove();
		$('#title').val("");
		$('#cont').val("");
		$('#fulltime1').val("");
		$('#fulltime2').val("");
		
		$('#title').attr('disabled', false);
		$('#cont').attr('disabled', false);
		$('#fulldate').attr('disabled', true);
		$('#fulltime1').attr('disabled', false);
		$('#fulltime2').attr('disabled', false);
		$('#addbtn').attr('disabled', true);
		
		$('#submitbtn').css('display', 'inline-block');
		$('#submitbtn').attr('disabled', false);
		
		$('#savebtn').css('display', 'none');
		$('#savebtn').attr('disabled', true);
	});
	
	// 저장 버튼 이벤트
	$('#schedulebtndiv').delegate('#savebtn', 'click', function(){
		
		var scheduledata = {
				schedule_id : $('#title').parent().find("input[type='hidden']").val(),
				schedule_type_cd : $('.schedule_code_select').val(),
				schedule_nm : $('#title').val(),
				schedule_cont : $('#cont').val(),
				fulldate : $('#fulldate').val(),
				fulltime1 : $('#fulltime1').val(),
				fulltime2 : $('#fulltime2').val()
		}
		
		var jsonData = JSON.stringify(scheduledata);
		
		$.ajax({
			url : ctx+'/schedulemodifyone',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert("수정 완료");
				$('#title').attr('disabled', true);
				$('#cont').attr('disabled', true);
				$('#fulldate').attr('disabled', true);
				$('#fulltime1').attr('disabled', true);
				$('#fulltime2').attr('disabled', true);
				$('#submitbtn').attr('disabled', true);
				$('.schedule_code_select').attr("disabled", false);
				
				$('.schedule_code_select option').remove();
				$('.schedulelist').animate({
					right:-400,
					opacity: 0
				}, 500, "swing", function(){
					
					var yearnum = 0;
					var monthnum = 0;
					var daynum = 0;
					$('#scheduletable tbody').empty();
					dateDrawList(ctx, yearnum, monthnum, daynum);
					
				});
			}, error:function(){
				alert("실패");
			}
		});
		
	});
}

function schedulelistclicktr(ctx){
	
	$('#scheduledatatable tbody').delegate('tr', 'click', function(){
		
		var schedule_id = $(this).find("input[type='hidden']").val();
		$('#title').parent().find("input[type='hidden']").remove();
		
		$.ajax({
			
			url : ctx+'/schedulesearchone',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  schedule_id,						//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				
				var date = new Date(Number(data.SCHEDULE_DT));
				var hour = date.getHours();
				var min = date.getMinutes();
				if(date.getHours().toString().length<2){
					hour = "0"+String(date.getHours());
				}
				if(date.getMinutes().toString().length<2){
					min = "0"+String(date.getMinutes());
				}
				var scheduletime1 = hour;
				var scheduletime2 = min;
				
				$('#title').parent().append("<input type='hidden' value='"+data.SCHEDULE_ID+"'>");
				$('#title').val(data.SCHEDULE_NM);
				$('#title').attr('disabled', true);
				
				$('#cont').val(data.SCHEDULE_CONT);
				$('#cont').attr('disabled', true);
				
				$('#fulldate').val(dateFormat(Number(data.SCHEDULE_DT)));
				$('#fulldate').attr('disabled', true);
				
				$('#fulltime1').val(scheduletime1);
				$('#fulltime1').attr('disabled', true);
				
				$('#fulltime2').val(scheduletime2);
				$('#fulltime2').attr('disabled', true);
				
				$('#modifybtn').attr('disabled', false);
				
				$.ajax({
					
					url : ctx+'/scheduleadd',					//보낼 URL
					dataType : 'json',						//응답 받을 데이터 형식
					type : 'POST',								//서버 요청 방식
					contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
					success : function(schedulecode){
						$('.schedule_code_select option').remove();
						var insertline = "";
						for(var i=0; i<schedulecode.length;i++){
							insertline += "<option value='"+schedulecode[i].CODE+"'>"+schedulecode[i].CD_NM+"</option>";
						}
						
						$('.schedule_code_select').append(insertline);
						$('.schedule_code_select').val(data.SCHEDULE_TYPE_CD);
						$('.schedule_code_select').attr("disabled", true);
					},error:function(){
					alert("실패");	
					}
					});
				}
		});
	});
	
}