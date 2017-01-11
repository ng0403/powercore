/**
 *  기업고객 계약 관련 js 파일
 */

$(document).ready(function() {
	var ctx = $('#ctx').val();
	//달력띄우기
	$("#contr_d").datepicker({
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
	
	$("#contr_qty").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
	$("#contr_amt").keyup(function(){ $(this).val($(this).val().replace(/[^0-9]/gi,"") );  });
}); 

//숫자값만 입력받기
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9) 
        return;
    else
        return false;
}
function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

//영업기회 팝업창 띄우기
function contOpptListPopup(){
	var ctx = $('#ctx').val();
	window.open(ctx+'/contActOpptList?cust_id='+$('#cust_id').val(),'opptWindow','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

function inputOpptNm(sales_oppt_id,sales_oppt_nm,estim_id, sales_price){
	$('#sales_oppt_id').val(sales_oppt_id);
	$('#sales_oppt_nm').val(sales_oppt_nm);
	$('#estim_id').val(estim_id);
	$('#contr_amt').val(sales_price);
}

/*//영업기회리스트 tr를 클릭했을 때 영업기회명 텍스트를 넣어주는 작업
function actOpptNmSelect(sales_oppt_id,sales_oppt_nm,estim_id){
	window.opener.inputOpptNm(sales_oppt_id,sales_oppt_nm,estim_id);
	self.close();
}*/

function contListRefresh(cust_id) {
	window.opener.contList(cust_id);
	self.close();
}

// 계약 등록
function insertCont(){
	$(document).ready(function() {
		var ctx = $('#ctx').val();
		var cust_id = $("#cust_id").val();
		var obj = {
				contr_nm : $('#contr_nm').val(),
				cust_id : $("#cust_id").val(),
				estim_id : $('#estim_id').val(),
				sales_oppt_id : $('#sales_oppt_id').val(),
				contr_qty : $('#contr_qty').val(),
				contr_amt : $('#contr_amt').val(),
				contr_d : $('#contr_d').val(),
		        memo : $('#memo').val()
			}
		
		if(obj.contr_nm==""||obj.contr_nm==null){
			alert("계약명을 입력해 주세요");
			return false;
		} else if(obj.contr_qty==""||obj.contr_qty==null){
			alert("계약 수량를 입력해 주세요");
			return false;
		} else if(obj.contr_amt==""||obj.contr_amt==null){
			alert("계약 금액을 입력해 주세요");
			return false;
		} else if(obj.contr_d==""||obj.contr_d==null){
			alert("계약일자를 입력해 주세요");
			return false;
		} else if(obj.memo==""|| obj.memo==null){
			alert("메모를 입력해 주세요");
			return false;
		}
	
		var addChk = confirm("정말 저장 하시겠습니까?");
		if(addChk){
			$.ajax({
				url : ctx + '/contInsert',
				type : 'POST',
				dataType : "json",
				data : obj,
				success : function(data) {
					alert(data.insertResult);
					contListRefresh(cust_id);
				},
				error : function() {
					alert("데이터 입력 실패");
				}
			});
		} else {
			return false;
		}
	});
}

//계약정보 수정
function updateCont(){
	$(document).ready(function() {
		var ctx = $('#ctx').val();
		var cust_id = $("#cust_id").val();
		var obj = {
				contr_id : $('#contr_id').val(),
				contr_nm : $('#contr_nm').val(),
				cust_id : $("#cust_id").val(),
				estim_id : $('#estim_id').val(),
				sales_oppt_id : $('#sales_oppt_id').val(),
				sales_oppt_nm : $('#sales_oppt_nm').val(),
				contr_qty : $('#contr_qty').val(),
				contr_amt : $('#contr_amt').val(),
				contr_d : $('#contr_d').val(),
		        memo : $('#memo').val()
			}
		
		if(obj.contr_nm==""||obj.contr_nm==null){
			alert("계약명을 입력해 주세요");
			return false;
		}else if(obj.sales_oppt_nm=="0"||obj.sales_oppt_nm==null){
			alert("영업기회을 선택해 주세요");
			return false;
		}else if(obj.contr_qty=="0"||obj.contr_qty==null){
			alert("계약수량를 입력해 주세요");
			return false;
		}else if(obj.contr_d==""||obj.contr_d==null){
			alert("계약일자를 입력해 주세요");
			return false;
		}else if(obj.memo=="0"|| obj.memo==null){
			alert("메모를 입력해 주세요");
			return false;
		}
		
		var mdfyChk = confirm("정말 저장 하시겠습니까?");
		if(mdfyChk){
			$.ajax({
				url : ctx + '/contUpdate',
				dataType : 'json',
				type : 'POST',
				data : obj,
				success : function(data) {
					alert(data.updateResult);
					contListRefresh(cust_id);
				},
				error : function() {
					alert("데이터 수정 실패");
				}
			});
		} else {
			return false;
		}
	});
}

//팝업창 자동 리사이즈
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

//취소버튼
function contClose(){
	var chk = confirm("정말 취소 하시겠습니까?");
	if(chk){
		self.close();
	}else{
		return;
	}
}