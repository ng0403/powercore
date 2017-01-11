$(function(){
	var ctx = $('#ctx').val();
	var call_id = $("#nowCall_id").val();
/*	callCustBtn();*/
	callCustKeyMdiBtn();
	

});

//내용 클리어
function keyReset(){
	 $('#call_nm').val("");
	 $('#cust_div_nm').val("");
	 $('#pos_nm').val("");
	 $('#comp_nm').val("");
	 $('#comp_id').val("");
	 $('#email1').val("");
	 $('#email2').val("");
	 $('#cell_phone1').val("");
	 $('#cell_phone2').val("");
	 $('#cell_phone3').val("");
	 $('#ph_phone1').val("");
	 $('#ph_phone2').val("");
	 $('#ph_phone3').val("");
	 $('#iuser_nm').val("");
	 
	 $('#cust_div_nm').attr("disabled",false);
	 $('#comp_stat_cd').attr("disabled",false);
	 $('#cust_info_yn').attr("disabled",false);
	 $('#mkt_app_yn').attr("disabled",false);
	 $('#cust_zip_cd1').attr("disabled",true);
	 $('#cust_zip_cd2').attr("disabled",false);
	 $('#cust_zip_addr').attr("disabled",false);
	 $('#cust_addr').attr("disabled",false);
}

//취소 버튼 기능
function callCancelBtn() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	
	if(ynChk){
		// 버튼 활성화
		$("#contactbody input[type='text']").css("background-color", "#EAEAEA");
		
		if($('#hCust_div_nm').val()=='키맨'){
			$("#callKeyBtnDiv").css("display", "block");
			$("#callCustBtnDiv").css("display", "none");
			$("#callCustMdfBtnDiv").css("display", "none");
			$("#callKeyMdfBtnDiv").css("display", "none");
		}else{
			$("#callCustBtnDiv").css("display", "block");
			$("#callKeyBtnDiv").css("display", "none");
			$("#callCustMdfBtnDiv").css("display", "none");
			$("#callKeyMdfBtnDiv").css("display", "none");
		}

		$("#addr").attr("disabled", true);
		$("#iuser_search").attr("disabled", true);
		
		// 상세정보에 값 넣기
		$("#call_nm").val($("#hcall_nm").val()).attr("disabled", true); // 기업명
		$("#pos_nm").val($("#hpos_nm").val()).attr("disabled", true); // 사업자번호
		$("#comp_nm").val($("#hcomp_nm").val()).attr("disabled", true); // 법인번호
		
		$("#email1").val($("#hemail1").val()).attr("disabled", true); // 직원수
		$("#email2").val($("#hemail2").val()).attr("disabled", true); // 직원수
		
		$("#cell_phone1").val($("#hcell_ph1").val()).attr("disabled", true); // 홈페이지
		$("#cell_phone2").val($("#hcell_ph2").val()).attr("disabled", true); // 대표전화번호
		$("#cell_phone3").val($("#hcell_ph3").val()).attr("disabled", true);
		
		$("#ph_phone1").val($("#hph1").val()).attr("disabled", true);
		$("#ph_phone2").val($("#hph2").val()).attr("disabled", true);
		$("#ph_phone3").val($("#hph3").val()).attr("disabled", true);
		
		$("#cust_zip_cd1").val($("#hcust_zip_cd").val().substring(0, 3)).attr("disabled", true); // 우편번호
		$("#cust_zip_cd2").val($("#hcust_zip_cd").val().substring(3, 6)).attr("disabled", true); // 우편번호
		$("#cust_zip_addr").val($("#hcust_zip_addr").val()).attr("disabled", true); // 우편번호 상 주소
		$("#cust_addr").val($("#hcust_addr").val()).attr("disabled", true); // 고객 주소
		
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
		
		$("#iuser_nm").val($("#hiuser_nm").val()).attr("disabled", true); // 영업담당자
		$("#iuser_id_nm").val($("#iuser_id_nm").val()).attr("readonly", true); // 영업담당자
		$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 기업 상태 코드 선택

	}
}

//개인추가 버튼 눌렀을 때
function callCustBtn(){
		$("#contactbody input[type='text']").css("background-color", "white");
		
		$('#pos_nm').attr("disabled",true);
		$('#comp_nm').attr("disabled",true);
		$("#pos_nm").css("background-color", "#EAEAEA");
		$("#comp_nm").css("background-color", "#EAEAEA");
		$('#comp_list_bt').attr("disabled",true);
		
		$('#call_nm').attr("readonly", false);
		$('#email1').attr("readonly", false);
		$('#email2').attr("readonly", false);
		$('#cell_phone1').attr("readonly", false);
		$('#cell_phone2').attr("readonly", false);
		$('#cell_phone3').attr("readonly", false);
		$('#ph_phone1').attr("readonly", false);
		$('#ph_phone2').attr("readonly", false);
		$('#ph_phone3').attr("readonly", false);
		$('#cust_addr').attr("readonly", false);
		$('#cust_zip_cd1').attr("readonly", true);
		$('#cust_zip_cd2').attr("readonly", true);
		$('#cust_zip_addr').attr("readonly", true);
		$('#iuser_nm').attr("readonly", true);
		
		$('#call_nm').attr("disabled",false);
		$('#email1').attr("disabled",false);
		$('#email2').attr("disabled",false);
		$('#cell_phone1').attr("disabled",false);
		$('#cell_phone2').attr("disabled",false);
		$('#cell_phone3').attr("disabled",false);
		$('#ph_phone1').attr("disabled",false);
		$('#ph_phone2').attr("disabled",false);
		$('#ph_phone3').attr("disabled",false);
		$('#stat_cd').attr("disabled",false);
		$('#cust_info_yn').attr("disabled",false);
		$('#mkt_app_yn').attr("disabled",false);
		$('#cust_zip_cd1').attr("disabled",false);
		$('#cust_zip_cd2').attr("disabled",false);
		$('#cust_zip_addr').attr("disabled",false);
		$('#cust_addr').attr("disabled",false);
		$('#addr').attr("disabled",false);
		$('#iuser_nm').attr("disabled",false);
		$('#iuser_search').attr("disabled",false);
		
		//내용초기화
		$('#call_nm').val("");
		$('#pos_nm').val("");
		$('#comp_nm').val("");
		$('#email1').val("");
		$('#email2').val("");
		$('#cell_phone1').val("");
		$('#cell_phone2').val("");
		$('#cell_phone3').val("");
		$('#ph_phone1').val("");
		$('#ph_phone2').val("");
		$('#ph_phone3').val("");
		$('#iuser_nm').val("");
		$('#stat_cd').val("0");
		$('#cust_info_yn').attr("checked",false);
		$('#mkt_app_yn').attr("checked",false);
		$('#cust_zip_cd1').val("");
		$('#cust_zip_cd2').val("");
		$('#cust_zip_addr').val("");
		$('#cust_addr').val("");
		
		// 버튼 활성화
		$("#callCustKeyBtnDiv").css("display", "none");
		$("#callCustBtnDiv").css("display", "none");
		$("#callKeyBtnDiv").css("display", "none");
		$("#custpsonAddBtnDiv").css("display", "block");
}

function callKeyAddBtn(){
		$("#contactbody input[type='text']").css("background-color", "white");
		
		$("#cust_zip_cd1").css("background-color", "#EAEAEA");
		$("#cust_zip_cd2").css("background-color", "#EAEAEA");
		$("#cust_zip_addr").css("background-color", "#EAEAEA");
		$("#cust_addr").css("background-color", "#EAEAEA");
		$("#iuser_nm").css("background-color", "#EAEAEA");
		
		$('#stat_cd').attr("disabled",true);
		$('#cust_info_yn').attr("disabled",true);
		$('#mkt_app_yn').attr("disabled",true);
		$('#cust_zip_cd1').attr("disabled",true);
		$('#cust_zip_cd2').attr("disabled",true);
		$('#cust_zip_addr').attr("disabled",true);
		$('#cust_addr').attr("disabled",true);
		$('#iuser_nm').attr("disabled",true);
		$('#iuser_search').attr("disabled",true);
		
		$('#call_nm').attr("readonly", false);
		$('#pos_nm').attr("readonly", false);
		$('#email1').attr("readonly", false);
		$('#email2').attr("readonly", false);
		$('#cell_phone1').attr("readonly", false);
		$('#cell_phone2').attr("readonly", false);
		$('#cell_phone3').attr("readonly", false);
		$('#ph_phone1').attr("readonly", false);
		$('#ph_phone2').attr("readonly", false);
		$('#ph_phone3').attr("readonly", false);
		
		$('#call_nm').attr("disabled",false);
		$('#pos_nm').attr("disabled",false);
		$('#comp_nm').attr("disabled",false);
		$('#comp_list_bt').attr("disabled",false);
		$('#email1').attr("disabled",false);
		$('#email2').attr("disabled",false);
		$('#cell_phone1').attr("disabled",false);
		$('#cell_phone2').attr("disabled",false);
		$('#cell_phone3').attr("disabled",false);
		$('#ph_phone1').attr("disabled",false);
		$('#ph_phone2').attr("disabled",false);
		$('#ph_phone3').attr("disabled",false);
		
		//내용초기화
		$('#call_nm').val("");
		$('#pos_nm').val("");
		$('#comp_nm').val("");
		$('#email1').val("");
		$('#email2').val("");
		$('#cell_phone1').val("");
		$('#cell_phone2').val("");
		$('#cell_phone3').val("");
		$('#ph_phone1').val("");
		$('#ph_phone2').val("");
		$('#ph_phone3').val("");
		$('#iuser_nm').val("");
		$('#stat_cd').val("0");
		$('#cust_info_yn').attr("checked",false);
		$('#mkt_app_yn').attr("checked",false);
		$('#cust_zip_cd1').val("");
		$('#cust_zip_cd2').val("");
		$('#cust_zip_addr').val("");
		$('#cust_addr').val("");
		
		// 버튼 활성화
		$("#callCustKeyBtnDiv").css("display", "none");
		$("#callCustBtnDiv").css("display", "none");
		$("#callKeyBtnDiv").css("display", "none");
		$("#keymanAddBtnDiv").css("display", "block");
}

//개인,키맨 취소 눌렀을 때
function callAddCancelBtn(){
	$(document).ready(function() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){	
		$("#contactbody input[type='text']").css("background-color", "#EAEAEA");
		$("#contactbody input").attr("disabled", true);
		
		$('#comp_list_bt').attr("disabled",true);
		$('#iuser_search').attr("disabled",true);
		$('#stat_cd').attr("disabled",true);
		$('#cust_info_yn').prop("checked", false);
		$('#mkt_app_yn').prop("checked", false);
		$('#cust_info_yn').attr("disabled",true);
		$('#mkt_app_yn').attr("disabled",true);
		
		$('#call_nm').val("");
		$('#pos_nm').val("");
		$('#comp_nm').val("");
		$('#email1').val("");
		$('#email2').val("");
		$('#cell_phone1').val("");
		$('#cell_phone2').val("");
		$('#cell_phone3').val("");
		$('#ph_phone1').val("");
		$('#ph_phone2').val("");
		$('#ph_phone3').val("");
		$('#iuser_nm').val("");
		$('#stat_cd').val("0");
		$('#cust_info_yn').val("");
		$('#mkt_app_yn').val("");
		$('#cust_zip_cd1').val("");
		$('#cust_zip_cd2').val("");
		$('#cust_zip_addr').val("");
		$('#cust_addr').val("");
		
		// 버튼 활성화
		$("#callCustKeyBtnDiv").css("display", "block");
		$("#custpsonAddBtnDiv").css("display", "none");
		$("#keymanAddBtnDiv").css("display", "none");
		$("#callCustMdfBtnDiv").css("display", "none");
	   }
	});
}
//상세정보가 클릭돼있을 때 상세정보함수 불러오기
function callTabFunc(call_id,call_div_nm) {

	$(document).ready(function() {
		$("#nowCall_id").val(call_id); // 현재 sales_actvy_id 저장
			
		if($("#tab1").is(":checked")){ // 상세정보 불러오기
			if(call_id != '' && call_div_nm !='')  callDetail(call_id,call_div_nm);
		} 
	});
}

//연락처리스트 이름을 클릭했을 때 상세정보
function callDetail(call_id, call_div_nm) {
		
		var ctx = $("#ctx").val();
		
		if(call_div_nm=='키맨'){
			// 버튼 재설정
			$("#callKeyBtnDiv").css("display", "block");
			$("#callCustKeyBtnDiv").css("display", "none");
			$("#callCustBtnDiv").css("display", "none");
			$("#callCustMdfBtnDiv").css("display", "none");
			$("#callKeyMdfBtnDiv").css("display", "none");
			$("#custpsonAddBtnDiv").css("display", "none");
        }else{
        	// 버튼 재설정
    		$("#callCustBtnDiv").css("display", "block");
    		$("#callCustKeyBtnDiv").css("display", "none");
    		$("#callKeyBtnDiv").css("display", "none");
    		$("#callCustMdfBtnDiv").css("display", "none");
    		$("#callKeyMdfBtnDiv").css("display", "none");
    		$("#custpsonAddBtnDiv").css("display", "none");
        }
		
		$.ajax({
			type : 'POST',
			url : ctx+'/callDetail',
			data : "call_id="+call_id,
			dataType : "json",
			success : function(data) {
				       
				        $("#nowCall_id").val(data.call_id);
						$('#call_nm').val(data.call_nm).attr("disabled", true);
						$('#cust_div_nm').val(data.cust_div_nm).attr("disabled", true);
		
						$('#pos_nm').val(data.pos_nm).attr("disabled", true);
	
						$('#comp_nm').val(data.comp_nm).attr("disabled", true);
						$('#comp_list_bt').attr("disabled",true);
						
						$('#email1').val(data.email1).attr("disabled", true);
						$('#email2').val(data.email2).attr("disabled", true);
						
						$('#cell_phone1').val(data.cell_phone1).attr("disabled", true);
						$('#cell_phone2').val(data.cell_phone2).attr("disabled", true);
						$('#cell_phone3').val(data.cell_phone3).attr("disabled", true);

						$('#ph_phone1').val(data.ph1).attr("disabled", true);
						$('#ph_phone2').val(data.ph2).attr("disabled", true);
						$('#ph_phone3').val(data.ph3).attr("disabled", true);

						if (data.cust_info_yn == "Y" && data.mkt_app_yn == "N") {
							$('#cust_info_yn').prop("checked", true);
							$('#mkt_app_yn').prop("checked", false);
							$('#mkt_app_yn').attr("disabled", true);
							$('#cust_info_yn').attr("disabled", true);
						} else if (data.cust_info_yn == "N" && data.mkt_app_yn == "Y") {
							$('#cust_info_yn').prop("checked", false);
							$('#mkt_app_yn').prop("checked", true);
							$('#mkt_app_yn').attr("disabled", true);
							$('#cust_info_yn').attr("disabled", true);
						} else if (data.cust_info_yn == "Y" && data.mkt_app_yn == "Y") {
							$('#cust_info_yn').prop("checked", true);
							$('#mkt_app_yn').prop("checked", true);
							$('#mkt_app_yn').attr("disabled", true);
							$('#cust_info_yn').attr("disabled", true);
						} else{
							$('#cust_info_yn').prop("checked", false);
							$('#mkt_app_yn').prop("checked", false);
							$('#mkt_app_yn').attr("disabled", true);
							$('#cust_info_yn').attr("disabled", true);
						}
						
						$('#mkt_app_yn').attr("disabled", true);
						$('#cust_info_yn').attr("disabled", true);
						
						$("#iuser_nm").val(data.iuser_id_nm).attr("disabled", true); // 영업담당자
						$("#iuser_search").attr("disabled", true);
                        
						$("#cust_zip_cd1").val(data.cust_zip_cd.substring(0, 3)); // 우편번호
						$("#cust_zip_cd2").val(data.cust_zip_cd.substring(3, 6)); // 우편번호
						$("#cust_zip_addr").val(data.cust_zip_addr).attr("readonly","readonly"); // 우편번호 상 주소
						$("#cust_addr").val(data.cust_addr); // 고객 주소
						$("#zip_cd_sri_num").val(data.zip_cd_sri_num); // 우편번호 일련번호
						
						$('#cust_zip_cd1').attr("disabled",true);
						$('#cust_zip_cd2').attr("disabled",true);
						$('#cust_zip_addr').attr("disabled",true);
						$('#cust_addr').attr("disabled",true);
						$('#addr').attr("disabled",true);
		
						$("#stat_cd").children().eq(data.stat_cd).prop("selected", true);
						$('#stat_cd').attr("disabled",true);
						
						$("#custpsonMdiBtn").attr("disabled",false);
						$("#keymanMdiBtn").attr("disabled",false);
						
						$("#contactbody input[type='text']").css("background-color", "#EAEAEA");
						
						//히든속성에 value 값 설정하기
						$("#hcall_nm").val(data.call_nm); // 이름
						$("#hpos_nm").val(data.pos_nm); // 직급
						$("#hcomp_nm").val(data.comp_nm); // 회사명
						
						$("#hemail1").val(data.email1); // 이메일1
						$("#hemail2").val(data.email2); // 이메일2
						
						$("#hcell_ph1").val(data.cell_phone1); // 이동전화번호1
						$("#hcell_ph2").val(data.cell_phone2); // 이동전화번호2
						$("#hcell_ph3").val(data.cell_phone3); // 이동전화번호3
						
						$("#hph1").val(data.ph1); // 전화번호1
						$("#hph2").val(data.ph2); // 전화번호2
						$("#hph3").val(data.ph3); // 전화번호3
						
						$('#hcust_info_yn').val(data.cust_info_yn);  //동의여부1
						$('#hmkt_app_yn').val(data.mkt_app_yn);      //동의여부2
						$("#hcust_zip_cd").val(data.cust_zip_cd);     // 우편번호
						$("#hcust_zip_addr").val(data.cust_zip_addr); // 우편번호 상 주소
						$("#hcust_addr").val(data.cust_addr); // 고객 주소
						$("#hiuser_nm").val(data.iuser_id_nm); // 영업담당자명
						$("#iuser_id_nm").val(data.iuser_nm); // 영업담당자ID
						$("#hstat_cd").val(data.stat_cd); // 상태
						$('#hCust_div_nm').val(data.cust_div_nm); // 고객구분
				
			},
			error : function(request,status,error) {
		          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		      }
		});
}

//키맨추가
function callKeymanAdd() {
	$(document).ready(function() {
	var ctx = $("#ctx").val();
	var cust_id = $("#comp_id").val();
	var keymanData = { "cust_id": cust_id, "kmn_nm": $("#call_nm").val(), "pos_nm": $("#pos_nm").val()
				, "ph1":$("#ph_phone1").val(), "ph2":$("#ph_phone2").val(),"ph3":$("#ph_phone3").val()
				,"cell_ph1":$("#cell_phone1").val(), "cell_ph2":$("#cell_phone2").val(),"cell_ph3":$("#cell_phone3").val()
				,"email1":$("#email1").val(), "email2":$("#email2").val()};
	    
		if(keymanData.kmn_nm==""||keymanData.kmn_nm==null){
			alert("이름을 입력해 주세요");
			return false;
		}else if(keymanData.pos_nm==""||keymanData.pos_nm==null ){
			alert("직급을 입력해 주세요");
			return false;			
		}else if(keymanData.cust_id==""||keymanData.cust_id==null ){
			alert("회사명을 입력해 주세요");
			return false;			
		}else if(keymanData.email1==""||keymanData.email1==null || keymanData.email2=="" || keymanData.email2==null){
			alert("이메일을 입력해 주세요");
			return false;			
		}else if(keymanData.cell_ph1==""||keymanData.cell_ph1==null ){
			alert("이동전화번호를 입력해 주세요");
			return false;			
		}else if(keymanData.cell_ph2==""||keymanData.cell_ph2==null ){
			alert("이동전화번호를 입력해 주세요");
			return false;			
		}else if(keymanData.cell_ph3==""||keymanData.cell_ph3==null ){
			alert("이동전화번호를 입력해 주세요");
			return false;			
		}else if(keymanData.ph1==""||keymanData.ph1==null ){
			alert("전화번호를 입력해 주세요");
			return false;			
		}else if(keymanData.ph2==""||keymanData.ph2==null ){
			alert("전화번호를 입력해 주세요");
			return false;			
		}else if(keymanData.ph3==""||keymanData.ph3==null ){
			alert("전화번호를 입력해 주세요");
			return false;			
		}
		
		$.ajax({
			url : ctx+'/callAddKeyman',
			data : keymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				alert(data.callKey);
				keyReset();
				location.href = ctx + "/call";
			}, error : function(data){
				alert(data.callKey);
			}
		});
	});
}

//개인고객 추가
function callAddCust(ctx){ 
	
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
		
		if($("#call_nm").val() == '' || $("#call_nm").val() == null) {
			alert("이름을 입력해 주세요");
			$("#call_nm").focus();
			return false;
		} else if($("#email1").val() == '' || $("#email1").val() == null) {
			alert("이메일을 입력해 주세요");
			$("#email1").focus();
			return false;
		} else if($("#email2").val() == '' || $("#email2").val() == null) {
			alert("이메일을 입력해 주세요");
			$("#email2").focus();
			return false;
		}else if($("#cell_phone1").val() == '' || $("#cell_phone1").val() == null){
			alert("이동전화번호를 모두 입력해 주세요");
			$("#cell_phone1").focus();
			return false;
		} else if($("#cell_phone2").val() == '' || $("#cell_phone2").val() == null){
			alert("이동전화번호를 모두 입력해 주세요");
			$("#cell_phone2").focus();
			return false;
		} else if($("#cell_phone3").val() == '' || $("#cell_phone3").val() == null){
			alert("이동전화번호를 모두 입력해 주세요");
			$("#cell_phone3").focus();
			return false;
		}else if($("#ph_phone1").val() == '' || $("#ph_phone1").val() == null){
			alert("전화번호를 모두 입력해 주세요");
			$("#ph_phone1").focus();
			return false;
		} else if($("#ph_phone2").val() == '' || $("#ph_phone2").val() == null){
			alert("전화번호를 모두 입력해 주세요");
			$("#ph_phone2").focus();
			return false;
		} else if($("#ph_phone3").val() == '' || $("#ph_phone3").val() == null){
			alert("전화번호를 모두 입력해 주세요");
			$("#ph_phone3").focus();
			return false;
		} /*else if ($('input[name=cust_info_yn]').is(":checked") == false) {
			alert("동의여부를 체크해 주세요");
			return false;
		} else if ($('input[name=mkt_app_yn]').is(":checked") == false) {
			alert("동의여부를 체크해 주세요");
			return false;
		}*/else if($("#iuser_nm").val()  == '' || $("#iuser_nm").val()  == null){
			alert("영업담당자를 입력해 주세요");
			$("#iuser_search").focus();
			return false;
		} else if($("#stat_cd").val()  == 0){
			alert("기업상태를 선택해 주세요");
			$("#stat_cd").focus();
			return false;
		}
		
		var callCustData =  $("#callTabForm").serialize();

		$.ajax({
			url : ctx+'/callAddCust',
			type : 'POST',
			data :  callCustData,
			dataType : 'json',
			success : function(data){
	
			alert(data.callRs);
			location.href = ctx + "/call";

			},
			error : function(data){
			alert(data.callRs);
			history.back();
			}
		});
}

//키맨,개인고객 편집 눌렀을 때
function callCustKeyMdiBtn(){
	$("#custpsonMdiBtn").click(function() {
		
		$("#contactbody input[type='text']").css("background-color", "white");
		$("#contactbody input[type='text']").attr("readonly", false);
		
		$("#pos_nm").css("background-color", "#EAEAEA");
		$("#comp_nm").css("background-color", "#EAEAEA");
		
		$('#call_nm').attr("disabled",false);
		$('#email1').attr("disabled",false);
		$('#email2').attr("disabled",false);
		$('#cell_phone1').attr("disabled",false);
		$('#cell_phone2').attr("disabled",false);
		$('#cell_phone3').attr("disabled",false);
		$('#ph_phone1').attr("disabled",false);
		$('#ph_phone2').attr("disabled",false);
		$('#ph_phone3').attr("disabled",false);
		$('#iuser_nm').attr("disabled",false);
		$('#iuser_search').attr("disabled",false);
		$('#stat_cd').attr("disabled",false);
		$('#cust_info_yn').attr("disabled",false);
		$('#mkt_app_yn').attr("disabled",false);
		$('#cust_zip_cd1').attr("disabled",false);
		$('#cust_zip_cd2').attr("disabled",false);
		$('#cust_zip_addr').attr("disabled",false);
		$('#cust_addr').attr("disabled",false);
		$('#addr').attr("disabled",false);
		
		// 버튼 활성화
		$("#callCustBtnDiv").css("display", "none");
		$("#callKeyBtnDiv").css("display", "none");
		$("#callCustMdfBtnDiv").css("display", "block");
	});
	
	$("#keymanMdiBtn").click(function() {
	
		$("#contactbody input[type='text']").css("background-color", "white");
		$("#contactbody input[type='text']").attr("readonly", false);
		
		$("#comp_nm").css("background-color", "#EAEAEA");
		$('#cust_zip_cd1').css("background-color", "#EAEAEA");
		$('#cust_zip_cd2').css("background-color", "#EAEAEA");
		$('#cust_zip_addr').css("background-color", "#EAEAEA");
		$('#cust_addr').css("background-color", "#EAEAEA");
		$('#iuser_nm').css("background-color", "#EAEAEA");
		
		$('#call_nm').attr("disabled",false);
		$('#email1').attr("disabled",false);
		$('#email2').attr("disabled",false);
		$('#cell_phone1').attr("disabled",false);
		$('#cell_phone2').attr("disabled",false);
		$('#cell_phone3').attr("disabled",false);
		$('#ph_phone1').attr("disabled",false);
		$('#ph_phone2').attr("disabled",false);
		$('#ph_phone3').attr("disabled",false);
		$('#pos_nm').attr("disabled",false);
		$('#comp_nm').attr("disabled",false);
		$('#comp_list_bt').attr("disabled",false);
		
		$('#comp_nm').attr("disabled",true);
		$('#comp_list_bt').attr("disabled",true);
		
		// 버튼 활성화
		$("#callCustBtnDiv").css("display", "none");
		$("#callKeyBtnDiv").css("display", "none");
		$("#callKeyMdfBtnDiv").css("display", "block");
	});
}

//키맨수정
function callKeymanMdfy() {
	$(document).ready(function() {
		var ctx = $("#ctx").val();
		var kmn_id = $("#nowCall_id").val();
		var call_id = $("#nowCall_id").val();
		var callKeymanData = { "kmn_id": kmn_id, "call_id" : call_id, "kmn_nm": $("#call_nm").val(), "pos_nm": $("#pos_nm").val()
				, "ph1":$("#ph_phone1").val(), "ph2":$("#ph_phone2").val(),"ph3":$("#ph_phone3").val()
				,"cell_ph1":$("#cell_phone1").val(), "cell_ph2":$("#cell_phone2").val(),"cell_ph3":$("#cell_phone3").val()
				,"email1":$("#email1").val(), "email2":$("#email2").val(), callPageNum : $('#callPageNum').val()};
		
		if(callKeymanData.kmn_nm==""||callKeymanData.kmn_nm==null){
			alert("이름을 입력해 주세요");
			return false;
		}else if(callKeymanData.pos_nm==""||callKeymanData.pos_nm==null ){
			alert("직급을 입력해 주세요");
			return false;			
		}else if(callKeymanData.email1==""||callKeymanData.email1==null || callKeymanData.email2=="" || callKeymanData.email2==null){
			alert("이메일을 입력해 주세요");
			return false;			
		}else if(callKeymanData.cell_ph1==""||callKeymanData.cell_ph1==null ){
			alert("이동전화번호를 입력해 주세요");
			return false;			
		}else if(callKeymanData.cell_ph2==""||callKeymanData.cell_ph2==null ){
			alert("이동전화번호를 입력해 주세요");
			return false;			
		}else if(callKeymanData.cell_ph3==""||callKeymanData.cell_ph3==null ){
			alert("이동전화번호를 입력해 주세요");
			return false;			
		}else if(callKeymanData.ph1==""||callKeymanData.ph1==null ){
			alert("전화번호를 입력해 주세요");
			return false;			
		}else if(callKeymanData.ph2==""||callKeymanData.ph2==null ){
			alert("전화번호를 입력해 주세요");
			return false;			
		}else if(callKeymanData.ph3==""||callKeymanData.ph3==null ){
			alert("전화번호를 입력해 주세요");
			return false;			
		}
		
		$.ajax({
			url : ctx+'/CallKeymanMdfy',
			data : callKeymanData,
			type : 'POST',
			dataType : "json",
			success : function(data){
				alert(data.callKmMdfyRst);
				
				callPaging(data.callPageNum);
				
				// 버튼 재설정
				$("#callKeyBtnDiv").css("display", "block");
				$("#callCustKeyBtnDiv").css("display", "none");
				$("#callCustMdfBtnDiv").css("display", "none");
				$("#callKeyMdfBtnDiv").css("display", "none");
				
				//수정된값 상세정보에 다시 넣기
				$("#nowCall_id").val(data.cavo.call_id);
				
				$("#call_nm").val(data.cavo.call_nm).attr("disabled", true);
				$("#pos_nm").val(data.cavo.pos_nm).attr("disabled", true);
				$("#email1").val(data.cavo.email1).attr("disabled", true);
				$("#email2").val(data.cavo.email2).attr("disabled", true);
				$("#cell_phone1").val(data.cavo.cell_phone1).attr("disabled", true);
				$("#cell_phone2").val(data.cavo.cell_phone2).attr("disabled", true);
				$("#cell_phone3").val(data.cavo.cell_phone3).attr("disabled", true);
				$("#ph_phone1").val(data.cavo.ph1).attr("disabled", true);
				$("#ph_phone2").val(data.cavo.ph2).attr("disabled", true);
				$("#ph_phone3").val(data.cavo.ph3).attr("disabled", true);
				$("#cust_info_yn").val(data.cavo.cust_info_yn).attr("disabled", true);
				$("#mkt_app_yn").val(data.cavo.mkt_app_yn).attr("disabled", true);
				
				$("#contactbody input[type='text']").css("background-color", "#EAEAEA");
				
				$("#iuser_nm").val(data.cavo.iuser_id_nm).attr("disabled", true); // 영업담당자
				$("#iuser_search").attr("disabled", true);
	            
				$("#cust_zip_cd1").val(data.cavo.cust_zip_cd.substring(0, 3)).attr("disabled", true);// 우편번호
				$("#cust_zip_cd2").val(data.cavo.cust_zip_cd.substring(3, 6)).attr("disabled", true);// 우편번호
				$("#cust_zip_addr").val(data.cavo.cust_zip_addr).attr("disabled", true); // 우편번호 상 주소
				$("#cust_addr").val(data.cavo.cust_addr).attr("disabled", true);// 고객 주소
				$("#zip_cd_sri_num").val(data.cavo.zip_cd_sri_num).attr("disabled", true); // 우편번호 일련번호
				
				$("#stat_cd").val(data.cavo.stat_cd).attr("disabled", true); 
				
				//히든 속성에 value값 설정하기
				$("#hcall_nm").val(data.cavo.call_nm); // 개인고객 이름
				$("#hpos_nm").val(data.cavo.pos_nm); // 직급 
				$("#hemail1").val(data.cavo.email1); // 이메일1
				$("#hemail2").val(data.cavo.email2); // 이메일2
				$("#hcell_ph1").val(data.cavo.cell_phone1); // 이동전화번호1
				$("#hcell_ph2").val(data.cavo.cell_phone2); // 이동전화번호2
				$("#hcell_ph3").val(data.cavo.cell_phone3); // 이동전화번호3
				$("#hph1").val(data.cavo.ph1); // 전화번호1
				$("#hph2").val(data.cavo.ph2); // 전화번호2
				$("#hph3").val(data.cavo.ph3); // 전화번호3
				$("#hcust_info_yn").val(data.cavo.cust_info_yn); // 동의여부1
				$("#hmkt_app_yn").val(data.cavo.mkt_app_yn); // 동의여부2 
				$("#hcust_zip_cd").val(data.cavo.cust_zip_cd); // 우편번호
				$("#hcust_zip_addr").val(data.cavo.cust_zip_addr); // 우편번호 상 주소
				$("#hcust_addr").val(data.cavo.cust_addr); // 고객 주소
				$("#hiuser_nm").val(data.cavo.iuser_id_nm); // 영업담당자
				$("#iuser_id_nm").val(data.cavo.iuser_nm); // 영업담당자
				$("#hstat_cd").val(data.cavo.stat_cd); // 상태 코드 선택
				
			}, error : function(data){
				alert(data.callKmMdfyRst);
			}
		});
	});
}

//개인고객 수정
function callCustEdit() {
	var ctx = $("#ctx").val();

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
	
	var cust_id = $("#nowCall_id").val();
	var call_id=  $("#nowCall_id").val();

	var callCustpsonData = {
		"cust_id" : cust_id,
		"call_id" : call_id,
		"cust_nm" : $("#call_nm").val(),
		"email1" : $("#email1").val(),
		"email2" : $("#email2").val(),
		"cell_ph1" : $("#cell_phone1").val(),
		"cell_ph2" : $("#cell_phone2").val(),
		"cell_ph3" : $("#cell_phone3").val(),
		"ph1" : $("#ph_phone1").val(),
		"ph2" : $("#ph_phone2").val(),
		"ph3" : $("#ph_phone3").val(),
		"cust_info_yn" : $("#cust_info_yn").val(),
		"mkt_app_yn" : $("#mkt_app_yn").val(),
		"cust_zip_cd1" : $("#cust_zip_cd1").val(),
		"cust_zip_cd2" : $("#cust_zip_cd2").val(),
		"zip_cd_sri_num" : $("#zip_cd_sri_num").val(),
		"cust_addr" : $("#cust_addr").val(),
		"iuser_id_nm" : $("#iuser_id_nm").val(),
		"stat_cd" : $("#stat_cd option:selected").val(),
		"callPageNum" : $('#callPageNum').val()
	};
	
	if($("#call_nm").val() == '' || $("#call_nm").val() == null) {
		alert("이름을 입력해 주세요");
		$("#call_nm").focus();
		return false;
	} else if($("#email1").val() == '' || $("#email1").val() == null) {
		alert("이메일을 입력해 주세요");
		$("#email1").focus();
		return false;
	} else if($("#email2").val() == '' || $("#email2").val() == null) {
		alert("이메일을 입력해 주세요");
		$("#email2").focus();
		return false;
	}else if($("#cell_phone1").val() == '' || $("#cell_phone1").val() == null){
		alert("이동전화번호를 모두 입력해 주세요");
		$("#cell_phone1").focus();
		return false;
	} else if($("#cell_phone2").val() == '' || $("#cell_phone2").val() == null){
		alert("이동전화번호를 모두 입력해 주세요");
		$("#cell_phone2").focus();
		return false;
	} else if($("#cell_phone3").val() == '' || $("#cell_phone3").val() == null){
		alert("이동전화번호를 모두 입력해 주세요");
		$("#cell_phone3").focus();
		return false;
	}else if($("#ph_phone1").val() == '' || $("#ph_phone1").val() == null){
		alert("전화번호를 모두 입력해 주세요");
		$("#ph_phone1").focus();
		return false;
	} else if($("#ph_phone2").val() == '' || $("#ph_phone2").val() == null){
		alert("전화번호를 모두 입력해 주세요");
		$("#ph_phone2").focus();
		return false;
	} else if($("#ph_phone3").val() == '' || $("#ph_phone3").val() == null){
		alert("전화번호를 모두 입력해 주세요");
		$("#ph_phone3").focus();
		return false;
	} /*else if ($('input[name=cust_info_yn]').is(":checked") == false) {
		alert("동의여부를 체크해 주세요");
		return false;
	} else if ($('input[name=mkt_app_yn]').is(":checked") == false) {
		alert("동의여부를 체크해 주세요");
		return false;
	}*/else if($("#iuser_nm").val()  == '' || $("#iuser_nm").val()  == null){
		alert("영업담당자를 입력해 주세요");
		$("#iuser_search").focus();
		return false;
	} else if($("#stat_cd").val()  == 0){
		alert("기업상태를 선택해 주세요");
		$("#stat_cd").focus();
		return false;
	}
	
	$.ajax({
		url : ctx + '/editCallCustPson', // 보낼 URL
		dataType : 'json', // 응답 받을 데이터 형식
		type : 'POST', // 서버 요청 방식
		data : callCustpsonData, // 데이터가 JSON
		success : function(data) {
		
			alert(data.callCustResult);
			
			callPaging(data.callPageNum);
			
			// 버튼 재설정
			$("#callCustBtnDiv").css("display", "block");
			$("#callCustMdfBtnDiv").css("display", "none");
			$("#callKeyMdfBtnDiv").css("display", "none");
			
			//수정된값 상세정보에 다시 넣기
			$("#nowCall_id").val(data.cavo.call_id);
			
			$("#call_nm").val(data.cavo.call_nm).attr("disabled", true);
			$("#email1").val(data.cavo.email1).attr("disabled", true);
			$("#email2").val(data.cavo.email2).attr("disabled", true);
			$("#cell_phone1").val(data.cavo.cell_phone1).attr("disabled", true);
			$("#cell_phone2").val(data.cavo.cell_phone2).attr("disabled", true);
			$("#cell_phone3").val(data.cavo.cell_phone3).attr("disabled", true);
			$("#ph_phone1").val(data.cavo.ph1).attr("disabled", true);
			$("#ph_phone2").val(data.cavo.ph2).attr("disabled", true);
			$("#ph_phone3").val(data.cavo.ph3).attr("disabled", true);
			
			if (data.cavo.cust_info_yn == "Y" && data.cavo.mkt_app_yn == "N") {
				$('#cust_info_yn').prop("checked", true);
				$('#mkt_app_yn').prop("checked", false);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			} else if (data.cavo.cust_info_yn == "N" && data.cavo.mkt_app_yn == "Y") {
				$('#cust_info_yn').prop("checked", false);
				$('#mkt_app_yn').prop("checked", true);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			} else if (data.cavo.cust_info_yn == "Y" && data.cavo.mkt_app_yn == "Y") {
				$('#cust_info_yn').prop("checked", true);
				$('#mkt_app_yn').prop("checked", true);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			} else{
				$('#cust_info_yn').prop("checked", false);
				$('#mkt_app_yn').prop("checked", false);
				$('#mkt_app_yn').attr("disabled", true);
				$('#cust_info_yn').attr("disabled", true);
			}
			
			$("#contactbody input[type='text']").css("background-color", "#EAEAEA");
			
			$("#iuser_nm").val(data.cavo.iuser_id_nm).attr("disabled", true); // 영업담당자
			$("#iuser_search").attr("disabled", true);
            
			$("#cust_zip_cd1").val(data.cavo.cust_zip_cd.substring(0, 3)).attr("disabled", true);// 우편번호
			$("#cust_zip_cd2").val(data.cavo.cust_zip_cd.substring(3, 6)).attr("disabled", true);// 우편번호
			$("#cust_zip_addr").val(data.cavo.cust_zip_addr).attr("disabled", true); // 우편번호 상 주소
			$("#cust_addr").val(data.cavo.cust_addr).attr("disabled", true);// 고객 주소
			$("#zip_cd_sri_num").val(data.cavo.zip_cd_sri_num).attr("disabled", true); // 우편번호 일련번호
			
			$("#stat_cd").val(data.cavo.stat_cd).attr("disabled", true);
			
			//히든 속성에 value값 설정하기
			$("#hcall_nm").val(data.cavo.call_nm); // 개인고객 이름
			$("#hemail1").val(data.cavo.email1); // 이메일1
			$("#hemail2").val(data.cavo.email2); // 이메일2
			$("#hcell_ph1").val(data.cavo.cell_phone1); // 이동전화번호1
			$("#hcell_ph2").val(data.cavo.cell_phone2); // 이동전화번호2
			$("#hcell_ph3").val(data.cavo.cell_phone3); // 이동전화번호3
			$("#hph1").val(data.cavo.ph1); // 전화번호1
			$("#hph2").val(data.cavo.ph2); // 전화번호2
			$("#hph3").val(data.cavo.ph3); // 전화번호3
			$("#hcust_info_yn").val(data.cavo.cust_info_yn); // 동의여부1
			$("#hmkt_app_yn").val(data.cavo.mkt_app_yn); // 동의여부2 
			$("#hcust_zip_cd").val(data.cavo.cust_zip_cd); // 우편번호
			$("#hcust_zip_addr").val(data.cavo.cust_zip_addr); // 우편번호 상 주소
			$("#hcust_addr").val(data.cavo.cust_addr); // 고객 주소
			$("#hiuser_nm").val(data.cavo.iuser_id_nm); // 영업담당자
			$("#iuser_id_nm").val(data.cavo.iuser_nm); // 영업담당자
			$("#hstat_cd").val(data.cavo.stat_cd); // 상태 코드 선택

		},
		error : function(request,status,error) {
			  alert("개인고객 수정 실패");
	          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});

}

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
