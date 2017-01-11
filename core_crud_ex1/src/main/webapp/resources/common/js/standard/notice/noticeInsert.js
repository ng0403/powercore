$(function(){
	var ctx = $('#ctx').val();
	startCalendar(ctx);
	endCalendar(ctx);
	noticebtnfunc(ctx);
});

function startCalendar(ctx){
	$("#start_date").datepicker({
	     changeMonth: true, //콤보 박스에 월 보이기
	     changeYear: true, // 콤보 박스에 년도 보이기
	     showOn: 'button', // 우측에 달력 icon 을 보인다.
	     buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	     buttonImageOnly: true //달력에 icon 사용하기
	 }); 
	  //마우스를 손가락 손가락 모양으로 하고 여백주기
	 $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	//날짜 형식을 0000-00-00으로 지정하기
	 $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
/*	 $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

function endCalendar(ctx){
	$("#end_date").datepicker({
	     changeMonth: true, //콤보 박스에 월 보이기
	     changeYear: true, // 콤보 박스에 년도 보이기
	     showOn: 'button', // 우측에 달력 icon 을 보인다.
	     buttonImage: ctx+'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	     buttonImageOnly: true //달력에 icon 사용하기
	 }); 
	  //마우스를 손가락 손가락 모양으로 하고 여백주기
	 $('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	//날짜 형식을 0000-00-00으로 지정하기
	 $.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
/*	 $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/
}

function noticebtnfunc(ctx){
	
	$('#submitnoticebtn').click(function(){
		
		if($('.titleinput').val()==""||$('.titleinput').val()==null){
			alert("제목을 입력해주세요");
			return false;
		}
		else if($('#cont').val()==""||$('#cont').val()==null){
			alert("내용을 입력해주세요");
			return false;
		}
		
		alert("등록 되었습니다.")
		$('#noticewriteconfirm').submit();
	});
	
	$('#listnoticebtn').click(function(){
		location.href=ctx+"/notice";
	});
	
	$('#cancelnoticebtn').click(function(){
		
		$('.titleinput').val("");
		$('#cont').text("");
		
		
	});
}