$(function(){
	var ctx = $('#ctx').val();
	sstartCalendar(ctx);
	actDelete(ctx);
	
});

//영업활동 리스트 검색부분 시작일자
function sstartCalendar(ctx){
	$("#sstart_day").datepicker({
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

//모두체크
function actAllChk(){
	  
	var checkbox=$('#act_list_table tbody').find('input[type=checkbox]');
	
	if($('#actCheck').is(":checked")){
		$(checkbox).prop("checked", true);
	}else{
		$(checkbox).prop("checked", false);
	}
}

//전체 체크 해제
function actChkCancel() {
	$(document).ready(function() {
		$("#actCheck").prop("checked", false);
	});
}

//체크박스 개수 검색함수
function checkCount(){
	   var count=0;
	   var checkList = $('.act_chek');
	   for(var i=0; i<checkList.size(); i++){
	      if($(checkList[i]).is(':checked')){
	         count++;
	      }
	   }
	   return count;
	};
	
function actDelete(ctx){
	$('#actDelBtn').click(function(){

		var form = $('#delForm');
		if (checkCount() == 0) {
			alert("삭제할 항목을 선택해주세요.");
		} else {
			var delYN = confirm("정말 삭제하시겠습니까??");
			
			if(!delYN){
				return false;
			}
		
			form.submit();
			/*actPaging();*/
		}	
	});
}	