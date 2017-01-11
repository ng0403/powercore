/**
 * 기업고객 영업기회 관련 js파일
 */
$(document).ready(function() {
	var ctx = $("#ctx").val();
	
	//달력띄우기
	$("#expt_fin_d").datepicker({
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

// 영업기회 리스트 새로고침
function opptListRefresh(cust_id) {
	window.opener.opptList(cust_id);
	self.close();
}

// 영업기회 추가 함수
function ccOpptAdd() {
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $("#cust_id").val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	if($("#sales_oppt_nm").val() == '' || $("#sales_oppt_nm").val() == null) {
		alert("영업기회명을 입력해 주세요");
		$("#sales_oppt_nm").focus();
		return false;
	} else if($("#sales_lev_cd").val() == '0' || $("#sales_lev_cd").val() == null) {
		alert("영업단계를 선택해 주세요");
		return false;
	} else if($("#expt_sales_amt").val() == '' || $("#expt_sales_amt").val() == null){
		alert("예상 매출액을 입력해 주세요");
		$("#expt_sales_amt").focus();
		return false;
	} else if($("#expt_fin_d").val() == '' || $("#expt_fin_d").val() == null){
		alert("마감 일자를 선택해 주세요");
		return false;
	} else if($("#psblty_rate").val() == '0' || $("#psblty_rate").val() == null){
		alert("가능성을 선택해 주세요");
		return false;
	} else if($("#sales_oppt_stat_cd").val() == '0' || $("#sales_oppt_stat_cd").val() == null){
		alert("상태을 선택해 주세요");
		return false;
	}
	
	var addChk = confirm("정말 저장 하시겠습니까?");
	if(addChk){
		$.ajax({
			type : 'post',
			url : 'opptAdd',
			data : {
				sales_oppt_nm : sales_oppt_nm,
				sales_lev_cd : sales_lev_cd,
				expt_sales_amt : expt_sales_amt,
				expt_fin_d : expt_fin_d,
				psblty_rate : psblty_rate,
				sales_oppt_stat_cd : sales_oppt_stat_cd,
				cust_id : cust_id,
				memo : memo
			},
			datatype : 'json',
			success : function(result) {
				alert("새로운 영업기회가 등록 되었습니다.");
				opptListRefresh(cust_id);
			},
			error : function(request) {
				alert("영업기회 등록이 실패했습니다.");
			}
			
		});
	} else {
		return false;
	}

}

//영업기회 상세정보 수정 함수
function ccOpptMdfy(){
	var pageNum = 1;
	var sales_oppt_id = $("#sales_oppt_id").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var cust_id = $("#cust_id").val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	
	if($("#sales_oppt_nm").val() == '' || $("#sales_oppt_nm").val() == null) {
		alert("영업기회명을 입력해 주세요");
		$("#sales_oppt_nm").focus();
		return false;
	} else if($("#sales_lev_cd").val() == '0' || $("#sales_lev_cd").val() == null) {
		alert("영업단계를 선택해 주세요");
		return false;
	} else if($("#expt_sales_amt").val() == '' || $("#expt_sales_amt").val() == null){
		alert("예상 매출액을 입력해 주세요");
		$("#expt_sales_amt").focus();
		return false;
	} else if($("#expt_fin_d").val() == '' || $("#expt_fin_d").val() == null){
		alert("마감 일자를 선택해 주세요");
		return false;
	} else if($("#psblty_rate").val() == '0' || $("#psblty_rate").val() == null){
		alert("가능성을 선택해 주세요");
		return false;
	} else if($("#sales_oppt_stat_cd").val() == '0' || $("#sales_oppt_stat_cd").val() == null){
		alert("가능성을 선택해 주세요");
		return false;
	}
	
	var mdfyChk = confirm("정말 저장 하시겠습니까?");
	if(mdfyChk){
		$.ajax({
			type : 'post',
			data : {
				cust_id : cust_id,
				pageNum : pageNum,
				sales_oppt_id : sales_oppt_id,
				sales_oppt_nm : sales_oppt_nm,
				sales_lev_cd : sales_lev_cd,
				expt_sales_amt : expt_sales_amt,
				expt_fin_d : expt_fin_d,
				psblty_rate : psblty_rate,
				sales_oppt_stat_cd : sales_oppt_stat_cd,
				memo : memo
			},
			datatype : 'json',
			url : 'opptModify',
			success:function(result){
				alert("영업기회 수정이 완료 되었습니다.");
				opptListRefresh(cust_id);
			},
			error : function(result) {
				alert("영업기회 수정이 실패했습니다.");
			}
		});
	} else {
		return false;
	}
}

//취소버튼
function opptClose(){
	var chk = confirm("정말 취소 하시겠습니까?");
	if(chk){
		self.close();
	}else{
		return;
	}
}