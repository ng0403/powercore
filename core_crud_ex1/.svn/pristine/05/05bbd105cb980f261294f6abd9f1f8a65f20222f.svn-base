$(document).ready(function() {
	var ctx = $("#ctx").val();
	
	//달력띄우기
	$("#strt_d").datepicker({
	    changeMonth: true, //콤보 박스에 월 보이기
	    changeYear: true, // 콤보 박스에 년도 보이기
	    showOn: 'button', // 우측에 달력 icon 을 보인다.
	    buttonImage: ctx +'/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
	    buttonImageOnly: true //달력에 icon 사용하기
	}); 
	 //마우스를 손가락 손가락 모양으로 하고 여백주기
	$('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	//날짜 형식을 0000-00-00으로 지정하기
	$.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
	//달력띄우기
	$("#end_d").datepicker({
		changeMonth: true, //콤보 박스에 월 보이기
		changeYear: true, // 콤보 박스에 년도 보이기
		showOn: 'button', // 우측에 달력 icon 을 보인다.
		buttonImage: ctx + '/resources/image/calendar.jpg',  // 우측 달력 icon 의 이미지 경로
		buttonImageOnly: true //달력에 icon 사용하기
	}); 
	//마우스를 손가락 손가락 모양으로 하고 여백주기
	$('img.ui-datepicker-trigger').css({'cursor':'pointer', 'margin-left':'5px', 'margin-bottom':'-6px'});
	//날짜 형식을 0000-00-00으로 지정하기
	$.datepicker.setDefaults({dateFormat:'yy-mm-dd'});
});

//영업기회 팝업창 띄우기
function ccOpptListPop(ctx){
	window.open(ctx+'/ccOpptPopList?cust_id='+$('#cust_id').val(),'ccOpptListPopwindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

function inputOpptNm(sales_oppt_id,sales_oppt_nm){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
}

//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(sales_oppt_id,sales_oppt_nm){
	window.opener.inputOpptNm(sales_oppt_id,sales_oppt_nm);
	self.close();
}

function actListRefresh(cust_id) {
	window.opener.actList(cust_id);
	self.close();
}

//영업활동 추가 함수
function ccActAdd() {
	var ctx = $("#ctx").val();
	var strt_t_h = $('#strt_t_h').val();
	var strt_t_m = $('#strt_t_m').val();
	var end_t_h = $('#end_t_h').val();
	var end_t_m = $('#end_t_m').val();
	
	var obj = {
			sales_actvy_nm : $('#sales_actvy_nm').val(),
			sales_actvy_div_cd : $("#sales_actvy_div_cd").val(),
			sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
			sales_oppt_id : $('#sales_oppt_id').val(),
			cust_id : $('#cust_id').val(),
			sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
			strt_d : $('#strt_d').val(),
			strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
			end_d : $('#end_d').val(),
			end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
	        memo : $('#memo').val()
		}
	
	if(obj.sales_actvy_nm==""||obj.sales_actvy_nm==null){
		alert("영업활동명을 입력해 주세요");
		$('#sales_actvy_nm').focus();
		return false;
	}else if(obj.sales_actvy_type_cd=="0"||obj.sales_actvy_type_cd==null){
		alert("활동유형을 선택해 주세요");
		return false;
	}else if(obj.sales_actvy_stat_cd=="0"||obj.sales_actvy_stat_cd==null){
		alert("상태를 선택해 주세요");
		return false;
	}else if(obj.strt_d==""||obj.strt_d==null){
		alert("시작일자를 선택해 주세요");
		return false;
	}else if(strt_t_h=="0"|| strt_t_h==null){
		alert("시를 선택해 주세요");
		return false;
	}else if(strt_t_m=="0"|| strt_t_m==null){
		alert("분을 선택해 주세요");
		return false;
	}else if(obj.end_d==""||obj.end_d==null){
		alert("종료일자를 선택해 주세요");
		return false;
	}else if(end_t_h=="0"|| end_t_h==null){
		alert("시를 선택해 주세요");
		return false;
	}else if(end_t_m=="0"|| end_t_m==null){
		alert("분을 선택해 주세요");
		return false;
	}
	
    var jsonData = JSON.stringify(obj);		//JSON Object 생성
    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
	
    var cust_nm = $("#cust_nm").val();
    
    var addChk = confirm("정말 저장 하시겠습니까?");
    if(addChk){
    	$.ajax({
    		type : 'POST',
    		url : ctx+'/actInsert',
    		data : jsonData,
    		contentType : 'application/json; charset=UTF-8',
    		dataType : "json",
    		success : function(data) {
    			alert(cust_nm +"에 대한 새로운 영업 활동이 등록 되었습니다.");
    			actListRefresh(obj.cust_id);
    		},
    		error : function(request,status,error) {
    			alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    		}
    	});
    } else {
    	return false;
    }
}

//영업활동 수정
function ccActMdfy(){
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		
		var obj = {
				sales_actvy_id : $("#sales_actvy_id").val(),
				sales_actvy_nm : $('#sales_actvy_nm').val(),
				sales_actvy_div_cd : $("#sales_actvy_div_cd").val(),
				sales_actvy_type_cd : $('#sales_actvy_type_nm').val(),
				sales_oppt_id : $('#sales_oppt_id').val(),
				sales_oppt_nm : $('#sales_oppt_nm').val(),
				cust_id : $('#cust_id').val(),
				sales_actvy_stat_cd : $('#sales_actvy_stat_nm').val(),
				strt_d : $('#strt_d').val(),
				strt_t : $('#strt_t_h').val()+":"+$('#strt_t_m').val(),
				end_d : $('#end_d').val(),
				end_t : $('#end_t_h').val()+":"+$('#end_t_m').val(),    			
		        memo : $('#memo').val()
			}
	    var jsonData = JSON.stringify(obj);		//JSON Object 생성
	    jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
	    var cust_nm = $("#cust_nm").val();
	    
	    var mdfyChk = confirm("정말 저장 하시겠습니까?");
	    if(mdfyChk){
	    	$.ajax({
	    		type : 'POST',
	    		url : ctx+'/actEdit',
	    		data : jsonData,
	    		contentType : 'application/json; charset=UTF-8',
	    		dataType : "json",
	    		success : function(data) {
	    			alert(cust_nm +"에 대한 영업 활동이 수정 되었습니다.");
	    			actListRefresh(obj.cust_id);
	    		},
	    		error : function(request,status,error) {
	    			alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    		}
	    	});
	    } else {
	    	return false;
	    }
	});
}

function ccActClose(){
	var chk = confirm("정말 취소 하시겠습니까?");
	if(chk){
		self.close();
	}else{
		return;
	}
}
// 팝업창 자동 크기조절
function setWindowResize() {
	var Dwidth = parseInt(document.body.scrollWidth);
	var Dheight = parseInt(document.body.scrollHeight);
	var divEl = document.createElement("div");
	divEl.style.position = "absolute";
	divEl.style.left = "0px";
	divEl.style.top = "0px";
	divEl.style.width = "100%";
	divEl.style.height = "100%";
	  
	document.body.appendChild(divEl);
	
	window.resizeBy(Dwidth-divEl.offsetWidth, Dheight-divEl.offsetHeight);
	document.body.removeChild(divEl);
}