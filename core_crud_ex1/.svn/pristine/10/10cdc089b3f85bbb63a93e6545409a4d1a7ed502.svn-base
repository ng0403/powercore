$(function() {
	var ctx = $('#ctx').val();
	userFormInit();
	codePop(ctx);
	orgPop(ctx);
	formData(ctx);
	modifyData(ctx);
	//getUserAuth(ctx);
//	addsaveUser(ctx);
	modifysaveUser(ctx);
	//getUserAuthSearch(ctx);
//	addkeyman(ctx);
//	addOperatingA(ctx);
//	addSalesChance(ctx);
//	addEstimate(ctx);
//	addContract(ctx);
	cancelbtnEvent();
	
});

//사용자관리 구분 오프너
function typeNm(code){
	console.log(code);
	$('#user_type_cd').val(code);
}

//사용자관리 조직 오프너
function nameNm(org_nm){
	console.log(org_nm);
	$('#org_nm').val(org_nm);
}
function nameId(org_id){
	console.log(org_id);
	$('#org_id').val(org_id);
}


function userFormInit(){
	$('#joinform').find('input[type="text"]').attr('disabled',true);
	$('#joinform').find('input[type="password"]').attr('disabled',true);
	$('#modifybtn').attr('disabled', true);
	$('#addsavebtn').attr('disabled', true);
	$('#cancelbtn').attr('disabled', false);
	$('#submitbtn').attr('disabled',false);
	$('#user_type_cd').attr('disabled',true);
	$('#auth_name').attr('disabled',true);
	$('#org_id').attr("disabled", true);
	$('#org_nm').attr("disabled", true);
	
	$("#iUserBaseBtnDiv").css("display", "block");
	$("#iUserAddBtnDiv").css("display", "none");
	$("#iUserMdfyBtnDiv").css("display", "none");
}

function codePop(ctx){
	$('#userTypePop').click(function(){ 
		
		window.open(ctx+'/userTypePopup','newwindow','width=700, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no');
	});
}

function iuserCode(code){
	if($(code).val() != ""){
		$('#user_type_cd').val(code);
	}
}

function orgPop(ctx){
  $('#orgPopup').click(function(){
	 window.open(ctx+'/orgNamePopup','newwindow','width=700, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no');
  }); 
}

function orgIdCheck(org_id){
	if($(org_id).val() != ""){
		$('#org_id').val(org_id);
	}
}

//날짜 13자리를 yyyy-mm-dd형식으로 변환해주는 함수
function dateFormat(timestamp) {

	var date = new Date(timestamp);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	var retVal = year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);

	return retVal
}


function formData(ctx){ 
	$('.bt_position_authuser').delegate('#submitbtn', 'click', function(event){
		event.preventDefault();      //기본동작을 취소하는 이벤트 
		
		$('#iuser_id').val("");
		$('#id_nm').val("");
		$('#iuser_nm').val("");
		$('#pwd').val("");
		$('#user_type_cd').val("");
		$('#org_id').val("");
		$('#home_phone1').val("");
		$('#home_phone2').val("")+"-"+$('#home_phone3').val("");
		$('#company_phone1').val("")+"-"+$('#company_phone2').val("")+"-"+$('#company_phone3').val("");
		$('#cell_phone1').val("")+"-"+$('#cell_phone2').val("")+"-"+$('#cell_phone3').val("");
		$('#email1').val("") + "@"+$('#email2').val("");
		
		$("#email1").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_]/gi,'') );  });
		$("#email2").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.]/gi,'') );  });

		$('#tabDiv1 input').attr("disabled", false);
		$('#user_type_cd').attr("disabled", false);
		$('#auth_name').attr("disabled", false);
//		$('#addsavebtn').attr("disabled", false);
//		$('#modifybtn').attr("disabled", false);
//		$('#submitbtn').attr("disabled", false);
//		$('#addsavebtn').css("display", "inline-block");
//		$('#modifysavebtn').css("display", "none");
		
		$("#iUserBaseBtnDiv").css("display", "none");
		$("#iUserAddBtnDiv").css("display", "block");
		$("#iUserMdfBtnDiv").css("display", "none");
	});
}

function modifyData(ctx){  //편집 버튼에 대한 내용 (버튼 활성화 비활성화)
	$('.bt_position_authuser').delegate('#modifybtn','click', function(event){
		event.preventDefault();
		
		$('#tabDiv1 input').attr("disabled", false);
		$('#user_id').attr("disabled", true);
		$('#id_nm').attr("disabled", true);
		$('#org_id').attr("disabled", true);
		$('#org_nm').attr("disabled", true);
		$('#auth_name').attr("disabled", false);
		$('#user_type_cd').attr("disabled", false);
		
		$("#email1").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_]/gi,'') );  });
		$("#email2").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.]/gi,'') );  });

//		$('#modifysavebtn').css("display", "inline-block");
//		$('#addsavebtn').css("display", "none");
//		$('#modifybtn').attr("disabled", true);
//		$('#submitbtn').attr('disabled',true);
		
		$("#iUserBaseBtnDiv").css("display", "none");
		$("#iUserAddBtnDiv").css("display", "none");
		$("#iUserMdfyBtnDiv").css("display", "block");
	});
}

function addsaveUser(ctx){ // 사용자추가 ajax부분
//	$('.bt_position_authuser').delegate('#addsavebtn','click', function(event){
	$(document).ready(function(){
	
		
		$("#email1").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_]/gi,'') );  });
		$("#email2").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.]/gi,'') );  });

	$('#org_id').attr("disabled", true);
	$('#org_nm').attr("disabled", true);
	$("#iUserBaseBtnDiv").css("display", "none");
	$("#iUserAddBtnDiv").css("display", "block");
	$("#iUserMdfyBtnDiv").css("display", "none");
		event.preventDefault();
		var obj = new Object();
		obj.id_nm = $('#id_nm').val();
		obj.iuser_nm = $('#iuser_nm').val();
		obj.pwd = $('#pwd').val();
		obj.iuser_div_cd = $('#user_type_cd').val();
		obj.org_id = $('#org_id').val();
 		obj.ph1 =  $('#home_phone1').val();
 		obj.ph2 =  $('#home_phone2').val();
 		obj.ph3 =  $('#home_phone3').val();
 		obj.comp_ph1 = $('#company_phone1').val();
 		obj.comp_ph2 = $('#company_phone2').val();
 		obj.comp_ph3 = $('#company_phone3').val();
		obj.cell_ph1 = $('#cell_phone1').val();
		obj.cell_ph2 = $('#cell_phone2').val();
		obj.cell_ph3 = $('#cell_phone3').val();	
		obj.auth_id = $('#auth_name').val();
		obj.email1 = $('#email1').val();
		obj.email2 = $('#email2').val();
		
		
		if($('#active_flg_Y').is(':checked')){
			obj.act_yn=$('#active_flg_Y').val();
		}else{
			obj.act_yn=$('#active_flg_N').val();
		}
		
		if(obj.id_nm==""||obj.id_nm==null){
			alert("아이디를 입력해 주세요");
//			 $('#iuser_nm').
			return false;
		}else if(obj.iuser_nm==""||obj.iuser_nm==null){
			alert("사용자명을 입력해 주세요");
			return false;
		}else if(obj.pwd==""||obj.pwd==null){
			alert("비밀번호를 입력해 주세요");
			return false;
		}else if(obj.iuser_div_cd==""||obj.iuser_div_cd==null){
			alert("구분값을 입력해 주세요");
			return false;
		}else if(obj.ph1==""||obj.ph1==null || obj.ph2==""||obj.ph2==null || obj.ph3==""||obj.ph3==null){
			alert("전화번호를 입력해 주세요");
			return false;
		}else if(obj.comp_ph1==""||obj.comp_ph1==null || obj.comp_ph2==""||obj.comp_ph2==null || obj.comp_ph3==""||obj.comp_ph3==null){
			alert("회사번호를 입력해 주세요");
			return false;
		}else if(obj.cell_ph1==""||obj.cell_ph1==null || obj.cell_ph2==""||obj.cell_ph2==null || obj.cell_ph3==""||obj.cell_ph3==null){
			alert("핸드폰번호를 입력해 주세요");
			return false;
		}else if(obj.email1==""||obj.email1==null || obj.email2==""||obj.email2==null){
			alert("이메일을 입력해 주세요");
			return false;
		}else if(obj.org_id==""||obj.org_id==null){
			alert("조직코드를 입력해 주세요");
			return false;
		}else if(obj.act_yn==""||obj.act_yn==null){
			alert("상태를 입력해 주세요");
			return false;
		}else if(obj.auth_id==""||obj.auth_id==null){
			alert("권한값을 입력해 주세요");
			return false;
		}
		$.ajax({
			url : ctx+'/iuserCheck',
			type : 'POST',
			data :  obj.id_nm,
			dataType : 'json',
			success : function(data){
				if(data.result == null){
					var jsonData = JSON.stringify(obj);		//JSON Object 생성
					jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정
					
					$.ajax({
						url : ctx+'/insertuser',					//보낼 URL
						dataType : 'json',						//응답 받을 데이터 형식
						type : 'POST',								//서버 요청 방식
						data :  jsonData,							//파라미터 { 'aaa' : 'bbb' }
						contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
						success : function(data){
							alert(data.result);
							
							location.href = ctx + "/user";
						},
						error : function(request,status,error) {
							alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
					});
				} else {
					alert("아이디가 중복됩니다.");
					return false;
				}
			},
			error : function(data){
				alert(data.result);
			}
		});

	});

		
}


//사용자 편집버튼 클릭 후 저장
function modifysaveUser(ctx){ //사용자 편집 ajax부분 
	$('.bt_position_authuser').delegate('#modifysavebtn','click', function(event){ 
		$('#org_id').attr("disabled", true);
		$('#org_nm').attr("disabled", true);
		$("#iUserBaseBtnDiv").css("display", "block");
		$("#iUserAddBtnDiv").css("display", "none");
		$("#iUserMdfyBtnDiv").css("display", "none");
		
		$("#email1").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_]/gi,'') );  });
		$("#email2").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.]/gi,'') );  });

		event.preventDefault();
		var obj = new Object();
		
		obj.iuser_id = $('#iuser_id').val();
		obj.id_nm = $('#id_nm').val();
		obj.iuser_nm = $('#iuser_nm').val();
		obj.pwd = $('#pwd').val();
		obj.iuser_div_cd = $('#user_type_cd').val();
 		obj.ph1 =  $('#home_phone1').val();
 		obj.ph2 =  $('#home_phone2').val();
 		obj.ph3 =  $('#home_phone3').val();
 		obj.comp_ph1 =  $('#company_phone1').val();
 		obj.comp_ph2 =  $('#company_phone2').val();
 		obj.comp_ph3 =  $('#company_phone3').val();
 		obj.cell_ph1 = $('#cell_phone1').val();
 		obj.cell_ph2 = $('#cell_phone2').val();
 		obj.cell_ph3 = $('#cell_phone3').val(); 		
		obj.email1 = $('#email1').val();
		obj.email2 = $('#email2').val();
		obj.org_id = $('#org_id').val();
		if($('#active_flg_Y').is(':checked')){
			obj.act_yn=$('#active_flg_Y').val();
		}else{
			obj.act_yn=$('#active_flg_N').val();
		}
		obj.auth_id = $('#auth_name').val();
		
		var jsonData = JSON.stringify(obj);		//JSON Object 생성
		
		jQuery.ajaxSettings.traditional = true;	//JSON Object 보낼시 설정

		$.ajax({
			url : ctx+'/iuserEdit',					//보낼 URL
			dataType : 'json',						//응답 받을 데이터 형식
			type : 'POST',								//서버 요청 방식
			data :  jsonData,							//파라미터 { 'aaa' : 'bbb' }
			contentType : 'application/json; charset=UTF-8',	//서버 전송 시 데이터가 JSON 객체
			success : function(data){
				alert(data.result);
				location.href = ctx + "/user";

			},
			error : function(e){
				alert("사용자 편집 오류:" + e.responseText);
			}
			
		});
		reset_text();
		$('#addsavebtn').css('display','inline-block');
		$('#modifysavebtn').css('display','none');
		$("#iUserBaseBtnDiv").css("display", "none");
		$("#iUserAddBtnDiv").css("display", "none");
		$("#iUserMdfyBtnDiv").css("display", "block");
		userFormInit();
	});
}

function cancelbtnEvent(){
//	$('#cancelbtn').click(function(){
		
		$('#iuser_id').val("");
		$('#id_nm').val("");
		$('#iuser_nm').val("");
		$('#pwd').val("");
		$('#user_type_cd').val("");
		$('#org_id').val("");
		$('#home_phone1').val("");
		$('#home_phone2').val("")+"-"+$('#home_phone3').val("");
		$('#company_phone1').val("")+"-"+$('#company_phone2').val("")+"-"+$('#company_phone3').val("");
		$('#cell_phone1').val("")+"-"+$('#cell_phone2').val("")+"-"+$('#cell_phone3').val("");
		$('#email1').val("") + "@"+$('#email2').val("");
		
		$("#email1").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_]/gi,'') );  });
		$("#email2").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\.]/gi,'') );  });

		$('#tabDiv1 input').attr("disabled", false);
		$('#user_type_cd').attr("disabled", false);
		$('#auth_name').attr("disabled", false);

		userFormInit();
//	});
}

function reset_text(){
	$("#joinform").each(function() {  
		this.reset();
	});
}

//에러체크
function checkErr() {
//	var frm = document.TestFrm;
//	var szKor = frm.szKor.value;
//	// 위에껄 풀어쓰면 이렇게된다 ''szKor = document.TestFrm.szKor.value'';
//	var L_szKor = (szKor.length);
//
//	var szEng = frm.szEng.value;
//	var L_szEng = (szEng.length);

	var iuser_tel = $('.iuser_tel').val();
	var L_iuser_tel = (iuser_tel.length);

	// 자바스크립트 정규식 숫자 / 길이 체크!
	if (iuser_tel == "") {
		alert(" 숫자를 입력해주세요")
		$('.iuser_tel').val("");
		$('.iuser_tel').focus();
		return false;
	} else {
		var num_check = /^[0-9]*$/;
		if (num_check.test(ph1)) {
			if (L_iuser_tel < 1 || L_iuser_tel > 3) {
				alert("3자리까지 입력 가능합니다.");
				$('.iuser_tel').val("");
				$('.iuser_tel').focus();
				return false;
			}
		} else {
			alert("숫자만 입력할 수 있습니다.");
			$('.iuser_tel').val("");
			$('.iuser_tel').focus();
		}
	}
}
//	// 자바스크립트 정규식 한글 / 길이 체크!
//	if (szKor == "") {
//		alert("한글을 입력해주세요")
//		frm.szKor.value = "";
//		frm.szKor.focus();
//		return false;
//	} else {
//		var kor_check = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
//		if (kor_check.test(szKor)) {
//			alert("한글만 입력할 수 있습니다.");
//			frm.szKor.value = "";
//			frm.szKor.focus();
//			return false;
//		} else {
//			if (L_szKor < 2 || L_szKor > 6) {
//				alert("2~6글자만 입력할수 있습니다.");
//				frm.szKor.value = "";
//				frm.szKor.focus();
//				return false;
//			}
//		}
//	}
//
//	// 자바스크립트 정규식 영어 / 길이 체크!
//	if (szEng == "") {
//		alert(" 영어을 입력해주세요")
//		frm.szEng.value = "";
//		frm.szEng.focus();
//		return false;
//	} else {
//		var eng_check = /^[A-za-z]/g;
//		if (eng_check.test(szEng)) {
//			if (L_szEng < 2 || L_szEng > 6) {
//				alert("2~6글자만 입력할수 있습니다.");
//				frm.szEng.value = "";
//				frm.szEng.focus();
//				return false;
//			}
//
//		} else {
//			alert("영어만 입력할 수 있습니다.");
//			frm.szEng.value = "";
//			frm.szEng.focus();
//			return false;
//		}
//	}

function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}