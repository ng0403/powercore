/**
 *  개인고객 탭 관련 javascript
 */
$(document).ready(function() {
	var ctx = $("#ctx").val();

	// 영업기회 추가 팝업
	$('#oppt_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val()
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/opptPopup?cust_id='+cust_id+'&flag=0','newwindow','width=450, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 영업활동 추가 팝업
	$('#act_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val()
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/actPopup?cust_id='+cust_id+'&flag=0','newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 견적 추가 팝업
	$('#est_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			var cust_nm = $("#nowCust_nm").val();
			window.open(ctx+'/estPopup?cust_id='+cust_id+'&cust_nm='+cust_nm+'&flag=0','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 계약 추가 팝업
	$('#cont_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val()
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/contPopup?cust_id='+cust_id+'&flag=0','newwindow','width=420, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 기업고객 영업기회 탭 리스트 체크박스 선택, 해제
	$("#cpOpptListCheck").click(function(){
		if($("#cpOpptListCheck").prop("checked")){
			$("input[id=chk_oppt_id]").prop("checked", true);
		} else {
			$("input[id=chk_oppt_id]").prop("checked", false);
		}
	});
	
	// 기업고객 영업활동 탭 리스트 체크박스 선택, 해제
	$("#cpActListCheck").click(function(){
		if($("#cpActListCheck").prop("checked")){
			$("input[id=chk_act_id]").prop("checked", true);
		} else {
			$("input[id=chk_act_id]").prop("checked", false);
		}
	});
	
	// 기업고객 견적 탭 리스트 체크박스 선택, 해제
	$("#cpEstListCheck").click(function(){
		if($("#cpEstListCheck").prop("checked")){
			$("input[id=chk_est_id]").prop("checked", true);
		} else {
			$("input[id=chk_est_id]").prop("checked", false);
		}
	});
	
	// 기업고객 계약 탭 리스트 체크박스 선택, 해제
	$("#cpContListCheck").click(function(){
		if($("#cpContListCheck").prop("checked")){
			$("input[id=chk_cont_id]").prop("checked", true);
		} else {
			$("input[id=chk_cont_id]").prop("checked", false);
		}
	});
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

/* 한글입력 방지 */
function fn_press_han()
{
	var key = event.keyCode;
	  if (!(key == 8 || key == 9 || key == 13 || key == 46 || key == 144
			|| (key >= 48 && key <= 57) || key == 110 || key == 190
			|| (key >= 96 && key <= 105) || (key >= 65 && key <= 90))) {
		event.returnValue = false;
	  }
    //좌우 방향키, 백스페이스, 딜리트, 탭키에 대한 예외
    /*if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39
    || event.keyCode == 46 ) return;
    else obj.value = obj.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');*/
}

// 영업기회 상세정보 팝업
function cpOpptDetail(sales_oppt_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/opptDetailPopup?sales_oppt_id='+sales_oppt_id+'&flag=1','newwindow','width=450, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업활동 상세정보 팝업
function cpActDetail(sales_actvy_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/actDetailPopup?sales_actvy_id='+sales_actvy_id+'&flag=1','newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//견적 상세정보 팝업
function cpEstDetail(estim_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/estDetailPopup?estim_id='+estim_id+'&flag=1','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 계약 상세정보 팝업
function cpContDetail(contr_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/contDetailPopup?contr_id='+contr_id+'&flag=1','newwindow','width=500, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업기회 전체 체크 해제
function opptChkCancel() {
	$(document).ready(function() {
		$("#cpOpptListCheck").prop("checked", false);
	});
}

// 영업활동 전체 체크 해제
function actChkCancel() {
	$(document).ready(function() {
		$("#cpActListCheck").prop("checked", false);
	});
}

//견적 전체 체크 해제
function estChkCancel() {
	$(document).ready(function() {
		$("#cpEstListCheck").prop("checked", false);
	});
}

// 계약 전체 체크 해제
function contChkCancel() {
	$(document).ready(function() {
		$("#cpContListCheck").prop("checked", false);
	});
}

//영업기회 삭제
function cpOpptDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_oppt_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/ccOpptDelete.do',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						alert(data.deleteResult);
						opptList(cust_id);
						opptChkCancel();
					},
					error : function(data){
						alert(data.deleteResult);
						history.back();
					}
				});
			} else {
				return;
			}
		}
	});
}

//영업활동 삭제
function cpActDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_act_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/ccActDelete.do',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						alert(data.deleteResult);
						actList(cust_id);
						actChkCancel();
					},
					error : function(data){
						alert(data.deleteResult);
						history.back();
					}
				});
			} else {
				return;
			}
		}
	});
}

//견적 삭제
function cpEstDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_est_id']:checked").each(function(index, item){
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/ccEstDelete.do',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							estList(cust_id);
							estChkCancel();
						}
					},
					error : function(data){
						alert(data.deleteResult);
						history.back();
					}
				});
			} else {
				return;
			}
		}
	});
}

//계약 삭제
function cpContDel(ctx){
	$(document).ready(function() {
		var chked_val = [];
		$(":checkbox[id='chk_cont_id']:checked").each(function(index, item){//체크박스 아이디
			chked_val[index] = item.value;
		});
		if(chked_val.length == 0){
			alert("삭제할 항목을 선택해 주세요");
		}else{
			var delChk = confirm("정말 삭제 하시겠습니까?");
			if(delChk){
				var cust_id = $("#nowCust_id").val();
				$.ajax({
					url : ctx+'/contListDelete',
					type : 'POST',
					data :  JSON.stringify(chked_val),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						alert(data.deleteResult);
						contList(cust_id);
					},
					error : function(data){
						alert(data.deleteResult);
						contList(cust_id);
					}
				});
			} else {
				return;
			}
		}
	});
}

//개인고객 추가
function psonInsert() {
	var ctx = $("#ctx").val();
	if ($('#cust_nm').val() == "" || $('#cust_nm').val() == null) {
		alert("고객명을 입력해 주세요");
		$('#cust_nm').focus();
		return false;
	} else if ($('input[name=gen]').is(":checked") == false) {
		alert("성별을 체크해 주세요");
		return false;
	} else if ($('#b_year').val() == "" || $('#b_year').val() == null || $('#b_year').val().length != 4) {
		alert("생년월일을 입력해 주세요");
		$('#b_year').focus();
		return false;
	} else if ($('#b_month_cd').val() == 0) {
		alert("생년월일을 입력해 주세요");
		$('#b_month_cd').focus();
		return false;
	} else if ($('#b_day').val() == "" || $('#b_day').val() == null) {
		alert("생년월일을 입력해 주세요");
		$('#b_day').focus();
		return false;
	} else if ($('#email1').val() == "" || $('#email1').val() == null) {
		alert("이메일을 모두 입력해 주세요");
		$('#email1').focus();
		return false;
	} else if ($('#email2').val() == "" || $('#email2').val() == null) {
		alert("이메일을 모두 입력해 주세요");
		$('#email2').focus();
		return false;
	} else if ($('#cell_ph1').val() == "" || $('#cell_ph1').val() == null || $('#cell_ph1').val().length < 3) {
		alert("이동전화번호를 모두 입력해 주세요");
		$('#cell_ph1').focus();
		return false;
	} else if ($('#cell_ph2').val() == "" || $('#cell_ph2').val() == null || $('#cell_ph2').val().length < 3) {
		alert("이동전화번호를 모두 입력해 주세요");
		$('#cell_ph2').focus();
		return false;
	} else if ($('#cell_ph3').val() == "" || $('#cell_ph3').val() == null || $('#cell_ph3').val().length < 4) {
		alert("이동전화번호를 모두 입력해 주세요");
		$('#cell_ph3').focus();
		return false;
	} else if ($('#ph1').val() == "" || $('#ph1').val() == null || $('#ph1').val().length < 2) {
		alert("전화번호를 모두 입력해 주세요");
		$('#ph1').focus();
		return false;
	} else if ($('#ph2').val() == "" || $('#ph2').val() == null || $('#ph2').val().length < 3) {
		alert("전화번호를 모두 입력해 주세요");
		$('#ph2').focus();
		return false;
	} else if ($('#ph3').val() == "" || $('#ph3').val() == null || $('#ph3').val().length < 4) {
		alert("전화번호를 모두 입력해 주세요");
		$('#ph3').focus();
		return false;
	} else if($("#cust_zip_cd1").val() == ''|| $("#cust_zip_cd1").val() == null){
		alert("우편번호를 입력해 주세요");
		return false;
	} else if($("#cust_addr").val() == '' || $("#cust_addr").val() == null){
		alert("상세 주소를 입력해 주세요");
		$("#cust_addr").focus();
		return false;
	}else if ($('#iuser_nm').val() == "" || $('#iuser_nm').val() == null) {
		alert("영업담당자를 입력해 주세요");
		$('#iuser_nm').focus();
		return false;
	} else if ($('#stat_cd').val() == 0) {
		alert("기업상태를 선택해 주세요");
		$('#stat_cd').focus();
		return false;
	}

	if ($('#cust_info_yn').is(":checked") == true) {
		$('#cust_info_yn').val('Y');
	} else {
		$('#cust_info_yn').val('N');
	}

	if ($('#mkt_app_yn').is(":checked") == true) {
		$('#mkt_app_yn').val('Y');
	} else {
		$('#mkt_app_yn').val('N');
	}
	
	var birth = $('#b_year').val()+"-"+$('#b_month_cd').val()+"-"+$('#b_day').val();
	$('#birth').val(birth);
	var formData = $('#inputForm').serialize();
	if(confirm("정말 저장하시겠습니까?")) {
	$.ajax({
		url : ctx + '/insertCustPson', // 보낼 URL
		dataType : 'json', // 응답 받을 데이터 형식
		type : 'POST', // 서버 요청 방식
		data : formData, // 데이터가 JSON
		success : function(data) {
			if(data.inputResult == 'standard/home/session_expire'){
				location.href = ctx + '/sessionExpire';
			} else {
				alert(data.inputResult);
				// 사용자 텍스트 부분 초기화
				$('#cust_nm').val("");
				$('#b_year').val("");
				$("#b_month_cd").children().eq(0).attr("selected", "selected");
				$('#b_day').val("");
				$('#id_nm').val("");
				$('#email').val("");
				$('#cell_ph1').val("");
				$('#cell_ph2').val("");
				$('#cell_ph3').val("");
				$('#ph1').val("");
				$('#ph2').val("");
				$('#ph3').val("");
				$('#iuser_nm').val("");
				$("#stat_cd").children().eq(0).attr("selected", "selected");
				
				location.href = ctx + "/custpson";
			}
		},error: function(request, status, error){
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            alert("error : "+error);
            alert("message : "+message);
        }
	});
	}
};

// 개인고객 수정
function psonEdit() {
	var ctx = $("#ctx").val();
	if ($('#cust_nm').val() == "" || $('#cust_nm').val() == null) {
		alert("고객명을 입력해 주세요");
		$('#cust_nm').focus();
		return false;
	} else if ($('input[name=gen]').is(":checked") == false) {
		alert("성별을 체크해 주세요");
		return false;
	} else if ($('#b_year').val() == "" || $('#b_year').val() == null || $('#b_year').val().length != 4) {
		alert("생년월일을 입력해 주세요");
		$('#b_year').focus();
		return false;
	} else if ($('#b_month_cd').val() == 0) {
		alert("생년월일을 입력해 주세요");
		$('#b_month_cd').focus();
		return false;
	} else if ($('#b_day').val() == "" || $('#b_day').val() == null) {
		alert("생년월일을 입력해 주세요");
		$('#b_day').focus();
		return false;
	} else if ($('#email1').val() == "" || $('#email1').val() == null) {
		alert("이메일을 모두 입력해 주세요");
		$('#email1').focus();
		return false;
	} else if ($('#email2').val() == "" || $('#email2').val() == null) {
		alert("이메일을 모두 입력해 주세요");
		$('#email2').focus();
		return false;
	} else if ($('#cell_ph1').val() == "" || $('#cell_ph1').val() == null || $('#cell_ph1').val().length < 3) {
		alert("이동전화번호를 모두 입력해 주세요");
		$('#cell_ph1').focus();
		return false;
	} else if ($('#cell_ph2').val() == "" || $('#cell_ph2').val() == null || $('#cell_ph2').val().length < 3) {
		alert("이동전화번호를 모두 입력해 주세요");
		$('#cell_ph2').focus();
		return false;
	} else if ($('#cell_ph3').val() == "" || $('#cell_ph3').val() == null || $('#cell_ph3').val().length < 4) {
		alert("이동전화번호를 모두 입력해 주세요");
		$('#cell_ph3').focus();
		return false;
	} else if ($('#ph1').val() == "" || $('#ph1').val() == null || $('#ph1').val().length < 2) {
		alert("전화번호를 모두 입력해 주세요");
		$('#ph1').focus();
		return false;
	} else if ($('#ph2').val() == "" || $('#ph2').val() == null || $('#ph2').val().length < 3) {
		alert("전화번호를 모두 입력해 주세요");
		$('#ph2').focus();
		return false;
	} else if ($('#ph3').val() == "" || $('#ph3').val() == null || $('#ph3').val().length < 4) {
		alert("전화번호를 모두 입력해 주세요");
		$('#ph3').focus();
		return false;
	} else if ($('#iuser_nm').val() == "" || $('#iuser_nm').val() == null) {
		alert("영업담당자를 입력해 주세요");
		$('#iuser_nm').focus();
		return false;
	} else if ($('#stat').val() == 0) {
		alert("기업상태를 선택해 주세요");
		$('#stat').focus();
		return false;
	}

	if ($('#man').is(":checked") == true) {
		var gen = $('#man').val();
	} else {
		var gen = $('#femail').val();
	}

	if ($('#cust_info_yn').is(":checked") == true) {
		$('#cust_info_yn').val('Y');
	} else {
		$('#cust_info_yn').val('N');
	}

	if ($('#mkt_app_yn').is(":checked") == true) {
		$('#mkt_app_yn').val('Y');
	} else {
		$('#mkt_app_yn').val('N');
	}
	var cpPageNum = $("#cpPageNum").val();
	var birth = $('#b_year').val()+"-"+$('#b_month_cd').val()+"-"+$('#b_day').val();

	var custpsonData = {
		"cust_id" : $("#cust_id").val(),
		"cust_nm" : $("#cust_nm").val(),
		"gen" : gen,
		"birth" : birth,
		"email1" : $("#email1").val(),
		"email2" : $("#email2").val(),
		"cell_ph1" : $("#cell_ph1").val(),
		"cell_ph2" : $("#cell_ph2").val(),
		"cell_ph3" : $("#cell_ph3").val(),
		"ph1" : $("#ph1").val(),
		"ph2" : $("#ph2").val(),
		"ph3" : $("#ph3").val(),
		"cust_info_yn" : $("#cust_info_yn").val(),
		"mkt_app_yn" : $("#mkt_app_yn").val(),
		"cust_zip_cd1" : $("#cust_zip_cd1").val(),
		"cust_zip_cd2" : $("#cust_zip_cd2").val(),
		"cust_zip_num" : $("#cust_zip_num").val(),
		"cust_zip_addr" : $("#cust_zip_addr").val(),
		"cust_addr" : $("#cust_addr").val(),
		"iuser_id_nm" : $("#iuser_id_nm").val(),
		"stat_cd" : $("#stat_cd option:selected").val()
	};

	$.ajax({
		url : ctx + '/editCustPson', // 보낼 URL
		dataType : 'json', // 응답 받을 데이터 형식
		type : 'POST', // 서버 요청 방식
		data : custpsonData, // 데이터가 JSON
		success : function(data) {
			if(data.updateResult == 'standard/home/session_expire'){
				location.href = ctx + '/sessionExpire';
			} else {
				alert("개인고객 수정이 완료되었습니다.");
				paging(cpPageNum);
				$('#cust_nm').val(data.cpvo.cust_nm);
				$('#hcust_nm').val(data.cpvo.cust_nm);
				
				$('#hgen').val(data.cpvo.gen);
				if (data.cpvo.gen == "M") {
					$('#man').prop("checked", true);
					$('#female').prop("checked", false);
					$('#man').attr("disabled", true);
					$('#female').attr("disabled", true);
				} else if (data.cpvo.gen == "F") {
					$('#man').prop("checked", false);
					$('#female').prop("checked", true);
					$('#man').attr("disabled", true);
					$('#female').attr("disabled", true);
				}
				$('#birth').val(data.cpvo.birth.substring(0, 10));
				$('#hbirth').val(data.cpvo.birth.substring(0, 10));
				$('#b_year').val(data.cpvo.birth.substring(0, 4));
				$('#b_month_cd').children().eq(data.cpvo.birth.substring(5, 7)).attr("selected", "selected");
				$('#b_month_cd').attr("disabled", true);
				$('#b_day').val(data.cpvo.birth.substring(8, 10));
				$('#email1').val(data.cpvo.email1);
				$('#hemail1').val(data.cpvo.email1);
				$('#email2').val(data.cpvo.email2);
				$('#hemail2').val(data.cpvo.email2);
				$('#cell_ph1').val(data.cpvo.cell_ph1);
				$('#cell_ph2').val(data.cpvo.cell_ph2);
				$('#cell_ph3').val(data.cpvo.cell_ph3);
				$('#hcell_ph1').val(data.cpvo.cell_ph1);
				$('#hcell_ph2').val(data.cpvo.cell_ph2);
				$('#hcell_ph3').val(data.cpvo.cell_ph3);
				$('#ph1').val(data.cpvo.ph1);
				$('#ph2').val(data.cpvo.ph2);
				$('#ph3').val(data.cpvo.ph3);
				$('#hph1').val(data.cpvo.ph1);
				$('#hph2').val(data.cpvo.ph2);
				$('#hph3').val(data.cpvo.ph3);
				
				$('#hcust_info_yn').val(data.cpvo.cust_info_yn);
				$('#hmkt_app_yn').val(data.cpvo.mkt_app_yn);
				if (data.cpvo.cust_info_yn == "Y" && data.cpvo.mkt_app_yn == "N") {
					$('#cust_info_yn').prop("checked", true);
					$('#mkt_app_yn').prop("checked", false);
					$('#mkt_app_yn').attr("disabled", true);
					$('#cust_info_yn').attr("disabled", true);
				} else if (data.cpvo.cust_info_yn == "N" && data.cpvo.mkt_app_yn == "Y") {
					$('#cust_info_yn').prop("checked", false);
					$('#mkt_app_yn').prop("checked", true);
					$('#mkt_app_yn').attr("disabled", true);
					$('#cust_info_yn').attr("disabled", true);
				} else if (data.cpvo.cust_info_yn == "Y" 	&& data.cpvo.mkt_app_yn == "Y") {
					$('#cust_info_yn').prop("checked", true);
					$('#mkt_app_yn').prop("checked", true);
					$('#mkt_app_yn').attr("disabled", true);
					$('#cust_info_yn').attr("disabled", true);
				} else {
					$('#cust_info_yn').prop("checked", false);
					$('#mkt_app_yn').prop("checked", false);
					$('#mkt_app_yn').attr("disabled", true);
					$('#cust_info_yn').attr("disabled", true);
				}
				$('#cust_zip_num').val(data.cpvo.cust_zip_num);
				$('#cust_zip_cd1').val(data.cpvo.cust_zip_cd.substring(0, 3));
				$('#cust_zip_cd2').val(data.cpvo.cust_zip_cd.substring(3, 6));
				$('#addr_dtl_cont').val(data.cpvo.addr_dtl_cont);
				$('#cust_addr').val(data.cpvo.cust_addr);
				$('#hcust_zip_num').val(data.cpvo.cust_zip_num);
				$('#hcust_zip_cd1').val(data.cpvo.cust_zip_cd.substring(0, 3));
				$('#hcust_zip_cd2').val(data.cpvo.cust_zip_cd.substring(3, 6));
				$('#haddr_dtl_cont').val(data.cpvo.addr_dtl_cont);
				$('#hcust_addr').val(data.cpvo.cust_addr);
				
				$('#iuser_id_nm').val(data.cpvo.iuser_id_nm);
				$('#iuser_nm').val(data.cpvo.iuser_nm);
				$('#hiuser_id_nm').val(data.cpvo.iuser_id_nm);
				$('#hiuser_nm').val(data.cpvo.iuser_nm);
				
				$('#hstat_cd').val(data.cpvo.stat_cd);
				$('#stat_cd').children().eq(data.cpvo.stat_cd).attr("selected", "selected");
				$('#stat_cd').attr("disabled", true);
				
				// 버튼 비활성화
				$('#inputForm').find('input').attr("readonly", true);
				$('#man').attr("disabled", true);
				$('#femail').attr("disabled", true);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
				$('#stat_cd').attr("disabled", true);
				
				// 버튼 비활성화
				$('#zipcode').attr("disabled", true);
				$('#iuserSearch').attr("disabled", true);
				$("#baseBtnDiv").css("display", "block");
				$("#addBtnDiv").css("display", "none");
				$("#mdfBtnDiv").css("display", "none");
				
				$('#inputForm').find('input:text').css("background-color", "#EAEAEA");
				$("#inputForm select").css("background-color", "#EAEAEA");
			}
		},
		error : function(data) {
			alert("개인고객 수정 실패");
		}
	});

}

// 개인고객 삭제
function custPsonDel() {
	var ctx = $("#ctx").val();
	var chked_val = [];
	$(":checkbox[id='cust_id_chk']:checked").each(function(index, item) {
		chked_val[index] = item.value;
	});
	if (chked_val.length == 0) {
		alert("삭제할 항목을 선택해 주세요");
	} else {
		var delChk = confirm("정말 삭제 하시겠습니까?");
		if (delChk) {
			$.ajax({
				url : ctx + '/custPsonDelete',
				type : 'POST',
				data : JSON.stringify(chked_val),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data) {
					if(data.deleteResult == 'standard/home/session_expire'){
						location.href = ctx + '/sessionExpire';
					} else {
						alert(data.deleteResult);
						location.href = ctx + "/custpson";
					}
				},
				error : function(data) {
					alert(data.deleteResult);
					history.back();
				}
			});
		} else {
			return;
		}
	}
}

// 추가버튼
function insertBtn() {
	$("#inputForm input[type='text']").val('').attr("readonly", false);
	$("#inputForm input[type='text']").css("background-color", "white");
	$("#inputForm select").css("background-color", "white");
	$('#man').attr("disabled", false);
	$('#man').prop("checked", false);
	$('#female').attr("disabled", false);
	$('#female').prop("checked", false);
	$("#b_month_cd").children().eq(0).attr("selected", "selected");
	$('#b_month_cd').attr("disabled", false);
	$('#cust_zip_cd1').attr("readonly", "readonly");
	$('#cust_zip_cd2').attr("readonly", "readonly");
	$('#addr_dtl_cont').attr("readonly", "readonly");
	$('#mkt_app_yn').attr("disabled", false);
	$('#mkt_app_yn').prop("checked", false);
	$('#cust_info_yn').attr("disabled", false);
	$('#cust_info_yn').prop("checked", false);
	$('#iuser_nm').attr("readonly", "readonly");
	$("#stat_cd").children().eq(0).attr("selected", "selected");
	$('#stat_cd').attr("disabled", false);
	
	// 버튼 활성화
	$('#zipcode').attr("disabled", false);
	$('#iuserSearch').attr("disabled", false);
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
}

//편집버튼
function editBtn() {
	$("#inputForm input[type='text']").css("background-color", "white");
	$("#inputForm input[type='text']").attr("readonly", false);
	$("#inputForm select").css("background-color", "white");
	$('#man').attr("disabled", false);
	$('#female').attr("disabled", false);
	$('#b_month_cd').attr("disabled", false);
	$('#cust_zip_cd1').attr("readonly", "readonly");
	$('#cust_zip_cd2').attr("readonly", "readonly");
	$('#addr_dtl_cont').attr("readonly", "readonly");
	$('#mkt_app_yn').attr("disabled", false);
	$('#cust_info_yn').attr("disabled", false);
	$('#iuser_nm').attr("readonly", "readonly");
	$('#stat_cd').attr("disabled", false);

	// 버튼 활성화
	$('#zipcode').attr("disabled", false);
	$('#iuserSearch').attr("disabled", false);
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");
}

// 취소버튼
function cancelBtn() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		$('#inputForm').find('input').attr("readonly", true);
		$('#man').attr("disabled", true);
		$('#female').attr("disabled", true);
		$('#b_month_cd').attr("disabled", true);
		$('#mkt_app_yn').attr("disabled", true);
		$('#cust_info_yn').attr("disabled", true);
		$('#stat_cd').attr("disabled", true);
		
		// 버튼 비활성화
		$('#zipcode').attr("disabled", true);
		$('#iuserSearch').attr("disabled", true);
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		
		$('#inputForm').find('input:text').css("background-color", "#EAEAEA");
		$("#inputForm select").css("background-color", "#EAEAEA");
		
		// 상세정보에 값 넣기
		$("#cust_nm").val($("#hcust_nm").val()).attr("readonly", true); // 고객명
		// 성별 선택
		if ($("#hgen").val() == "M") {
			$('#man').prop("checked", true);
			$('#female').prop("checked", false);
			$('#man').attr("disabled", true);
			$('#female').attr("disabled", true);
		} else if ($("#hgen").val() == "F") {
			$('#man').prop("checked", false);
			$('#female').prop("checked", true);
			$('#man').attr("disabled", true);
			$('#female').attr("disabled", true);
		}
		$("#birth").val($("#hbirth").val()).attr("readonly", true); // 생년월일
		$('#b_year').val($("#hbirth").val().substring(0, 4)).attr("readonly", true);
		$('#b_month_cd').children().eq($("#hbirth").val().substring(6, 7)).attr("selected", "selected");
		$('#b_month_cd').attr("disabled", true);
		$('#b_day').val($("#hbirth").val().substring(8, 10)).attr("readonly", true);
		$("#email1").val($("#hemail1").val()).attr("readonly", true); // 이메일1
		$("#email2").val($("#hemail2").val()).attr("readonly", true); // 이메일2
		$("#cell_ph1").val($("#hcell_ph1").val()).attr("readonly", true); // 이동전화번호1
		$("#cell_ph2").val($("#hcell_ph2").val()).attr("readonly", true); // 이동전화번호2
		$("#cell_ph3").val($("#hcell_ph3").val()).attr("readonly", true); // 이동전화번호3
		$("#ph1").val($("#hph1").val()).attr("readonly", true); // 전화번호1
		$("#ph2").val($("#hph2").val()).attr("readonly", true); // 전화번호2
		$("#ph3").val($("#hph3").val()).attr("readonly", true); // 전화번호3
		// 동의여부 체크
		if ($("#hcust_info_yn").val() == "Y" && $("#hmkt_app_yn").val() == "N") {
			$('#cust_info_yn').prop("checked", true);
			$('#mkt_app_yn').prop("checked", false);
			$('#mkt_app_yn').attr("disabled", true);
			$('#cust_info_yn').attr("disabled", true);
		} else if ($("#hcust_info_yn").val() == "N" && $("#hmkt_app_yn").val() == "Y") {
			$('#cust_info_yn').prop("checked", false);
			$('#mkt_app_yn').prop("checked", true);
			$('#mkt_app_yn').attr("disabled", true);
			$('#cust_info_yn').attr("disabled", true);
		} else if ($("#hcust_info_yn").val() == "Y" 	&& $("#hmkt_app_yn").val() == "Y") {
			$('#cust_info_yn').prop("checked", true);
			$('#mkt_app_yn').prop("checked", true);
			$('#mkt_app_yn').attr("disabled", true);
			$('#cust_info_yn').attr("disabled", true);
		} else {
			$('#cust_info_yn').prop("checked", false);
			$('#mkt_app_yn').prop("checked", false);
			$('#mkt_app_yn').attr("disabled", true);
			$('#cust_info_yn').attr("disabled", true);
		}
		
		$("#cust_zip_num").val($("#hcust_zip_num").val()).attr("readonly", true); // 우편번호 일련번호
		$("#cust_zip_cd1").val($("#hcust_zip_cd1").val()).attr("readonly", true); //우편번호1
		$("#cust_zip_cd2").val($("#hcust_zip_cd2").val()).attr("readonly", true); //우편번호2
		$("#addr_dtl_cont").val($("#haddr_dtl_cont").val()).attr("readonly", true); // 우편번호상 주소
		$("#cust_addr").val($("#hcust_addr").val()).attr("readonly", true); // 고객 상세주소
		$("#iuser_id_nm").val($("#hiuser_id_nm").val()).attr("readonly", true); // 영업 담당자 아이디
		$("#iuser_nm").val($("#hiuser_nm").val()).attr("readonly", true); // 영업 담당자 이름
		$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 상태 코드 선택
	}
}