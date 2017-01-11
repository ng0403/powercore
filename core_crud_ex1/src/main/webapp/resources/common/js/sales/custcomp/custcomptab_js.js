
$(document).ready(function() {
	var ctx = $("#ctx").val();
	
	// 우편번호 검색 팝업
	$('#addr').click(function(){
		window.open(ctx+'/ccAddrListPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	// 직원검색 팝업
	$('#iuser_search').click(function(){
		window.open(ctx+'/iuserSearchPop.do','newwindow','width=500, height=620, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
	
	// 키맨 추가 팝업
	$('#keyman_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/keymanPopup?cust_id='+cust_id+'&flag=0','newwindow','width=400, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 영업기회 추가 팝업
	$('#oppt_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/opptPopup?cust_id='+cust_id+'&flag=0','newwindow','width=450, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 영업활동 추가 팝업
	$('#act_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/actPopup?cust_id='+cust_id+'&flag=0','newwindow','width=450, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
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
			window.open(ctx+'/estPopup?cust_id='+cust_id+'&cust_nm='+cust_nm+'&flag=0','newwindow','width=900, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});

	// 계약 추가 팝업
	$('#cont_pop_btn').click(function(){
		var cust_id = $("#nowCust_id").val();
		if(cust_id == ''){
			alert('고객을 선택해주세요.');
			return;
		}else {
			window.open(ctx+'/contPopup?cust_id='+cust_id+'&flag=0','newwindow','width=420, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
	
	// 기업고객 영업기회 탭 리스트 체크박스 선택, 해제
	$("#ccOpptListCheck").click(function(){
		if($("#ccOpptListCheck").prop("checked")){
			$("input[id=chk_oppt_id]").prop("checked", true);
		} else {
			$("input[id=chk_oppt_id]").prop("checked", false);
		}
	});
	
	// 기업고객 영업활동 탭 리스트 체크박스 선택, 해제
	$("#ccActListCheck").click(function(){
		if($("#ccActListCheck").prop("checked")){
			$("input[id=chk_act_id]").prop("checked", true);
		} else {
			$("input[id=chk_act_id]").prop("checked", false);
		}
	});
	
	// 기업고객 견적 탭 리스트 체크박스 선택, 해제
	$("#ccEstListCheck").click(function(){
		if($("#ccEstListCheck").prop("checked")){
			$("input[id=chk_est_id]").prop("checked", true);
		} else {
			$("input[id=chk_est_id]").prop("checked", false);
		}
	});
	
	// 기업고객 계약 탭 리스트 체크박스 선택, 해제
	$("#ccContListCheck").click(function(){
		if($("#ccContListCheck").prop("checked")){
			$("input[id=chk_cont_id]").prop("checked", true);
		} else {
			$("input[id=chk_cont_id]").prop("checked", false);
		}
	});
	
	$("#homepage_url").keyup(function(){ $(this).val($(this).val().replace(/[^a-z0-9:\-_.:/]/gi,'') );  }); //숫자, 하이폰(-), 영문, 언더바(_),한글(X)
});

// 키맨 상세정보
function keymanDeatil(kmn_id) {
	var ctx = $("#ctx").val();
	window.open(ctx+'/keymanDetailPopup?kmn_id='+kmn_id+'&flag=1','newwindow','width=400, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업기회 상세정보 팝업
function ccOpptDetail(sales_oppt_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/opptDetailPopup?sales_oppt_id='+sales_oppt_id+'&flag=1','newwindow','width=450, height=550, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업활동 상세정보 팝업
function ccActDetail(sales_actvy_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/actDetailPopup?sales_actvy_id='+sales_actvy_id+'&flag=1','newwindow','width=450, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 견적 상세정보 팝업
function ccEstDetail(estim_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/estDetailPopup?estim_id='+estim_id+'&flag=1','newwindow','width=900, height=450, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 계약 상세정보 팝업
function ccContDetail(contr_id){
	var ctx = $("#ctx").val();
	window.open(ctx+'/contDetailPopup?contr_id='+contr_id+'&flag=1','newwindow','width=500, height=460, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

// 영업기회 전체 체크 해제
function opptChkCancel() {
	$(document).ready(function() {
		$("#ccOpptListCheck").prop("checked", false);
	});
}

// 영업활동 전체 체크 해제
function actChkCancel() {
	$(document).ready(function() {
		$("#ccActListCheck").prop("checked", false);
	});
}

// 견적 전체 체크 해제
function estChkCancel() {
	$(document).ready(function() {
		$("#ccEstListCheck").prop("checked", false);
	});
}

// 계약 전체 체크 해제
function contChkCancel() {
	$(document).ready(function() {
		$("#ccContListCheck").prop("checked", false);
	});
}

//추가 버튼 기능
function custCompAddBtn() {
	$("#custcomptbody input[type='text']").css("background-color", "white");
	$("#custcomptbody input[type='text']").val('').attr("readonly", false);
	$("#cust_nm").focus();
	$("#cust_zip_cd1").val('').attr("readonly", true);
	$("#cust_zip_cd2").val('').attr("readonly", true);
	$("#cust_zip_addr").val('').attr("readonly", true);
	$("#addr").attr("disabled", false);
	$("#iuser_nm").attr("readonly", true);
	$("#iuser_search").attr("disabled", false);
	$("#sales_scale_cd").children().eq(0).attr("selected", "selected"); // 매출규모 코드 선택
	$("#indst_cd").children().eq(0).attr("selected", "selected"); // 산업군 코드 선택
	$("#stat_cd").children().eq(0).attr("selected", "selected"); // 기업 상태 코드 선택
	$("#sales_scale_cd").attr("disabled", false).css("background-color", "white");
	$("#indst_cd").attr("disabled", false).css("background-color", "white");
	$("#stat_cd").attr("disabled", false).css("background-color", "white");
	$("#homepage_url").css({"cursor" : "text", "color" : "black"}); // 홈페이지
	$("#aHpUrl").removeAttr("href");
	// 버튼 활성화
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
}

// 편집 버튼 기능
function custCompMdfyBtn() {
	$("#custcomptbody input[type='text']").css("background-color", "white");
	$("#custcomptbody input").attr("readonly", false);
	$("#cust_nm").focus();
	$("#cust_zip_cd1").attr("readonly", true);
	$("#cust_zip_cd2").attr("readonly", true);
	$("#cust_zip_addr").attr("readonly", true);
	$("#sales_scale_cd").children().eq($("#hsales_scale_cd").val()).attr("selected", "selected"); // 매출규모 코드 선택
	$("#indst_cd").children().eq($("#hindst_cd").val()).attr("selected", "selected"); // 산업군 코드 선택
	$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 기업 상태 코드 선택
	$("#sales_scale_cd").attr("disabled", false).css("background-color", "white");
	$("#indst_cd").attr("disabled", false).css("background-color", "white");
	$("#stat_cd").attr("disabled", false).css("background-color", "white");
	$("#addr").attr("disabled", false);
	$("#iuser_nm").attr("readonly", true);
	$("#iuser_search").attr("disabled", false);
	$("#homepage_url").css({"cursor" : "text", "color" : "black"}); // 홈페이지
	$("#homepage_url").hover(function() {  $(this).css("text-decoration", "none") });
	$("#aHpUrl").removeAttr("href");
	//버튼 활성화
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");	
}

// 취소 버튼 기능
function custCompCancelBtn() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		
		$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
		$("#addr").attr("disabled", true);
		$("#iuser_search").attr("disabled", true);
		
		// 상세정보에 값 넣기
		$("#cust_nm").val($("#hcust_nm").val()).attr("readonly", true); // 기업명
		$("#comp_num1").val($("#hcomp_num").val().substring(0,3)).attr("readonly", true); // 사업자번호
		$("#comp_num2").val($("#hcomp_num").val().substring(3,5)).attr("readonly", true); // 사업자번호
		$("#comp_num3").val($("#hcomp_num").val().substring(5,11)).attr("readonly", true); // 사업자번호
		$("#corp_num1").val($("#hcorp_num").val().substring(0,6)).attr("readonly", true); // 법인번호
		$("#corp_num2").val($("#hcorp_num").val().substring(6,13)).attr("readonly", true); // 법인번호
		$("#sales_scale_cd").children().eq($("#hsales_scale_cd").val()).attr("selected", "selected"); // 매출규모 코드 선택
		$("#emp_qty").val($("#hemp_qty").val()).attr("readonly", true); // 직원수
		$("#indst_cd").children().eq($("#hindst_cd").val()).attr("selected", "selected"); // 산업군 코드 선택
		$("#homepage_url").val($("#hhomepage_url").val()).attr("readonly", true); // 홈페이지
		$("#rep_ph1").val($("#hrep_ph1").val()).attr("readonly", true); // 대표전화번호
		$("#rep_ph2").val($("#hrep_ph2").val()).attr("readonly", true);
		$("#rep_ph3").val($("#hrep_ph3").val()).attr("readonly", true);
		$("#cust_zip_cd1").val($("#hcust_zip_cd").val().substring(0, 3)).attr("readonly", true); // 우편번호
		$("#cust_zip_cd2").val($("#hcust_zip_cd").val().substring(3, 6)).attr("readonly", true); // 우편번호
		$("#cust_zip_addr").val($("#hcust_zip_addr").val()).attr("readonly", true); // 우편번호 상 주소
		$("#cust_addr").val($("#hcust_addr").val()).attr("readonly", true); // 고객 주소
		$("#iuser_nm").val($("#hiuser_nm").val()).attr("readonly", true); // 영업담당자
		$("#iuser_id_nm").val($("#hiuser_id_nm").val()).attr("readonly", true); // 영업담당자
		$("#stat_cd").children().eq($("#hstat_cd").val()).attr("selected", "selected"); // 기업 상태 코드 선택
		$("#sales_scale_cd").attr("disabled", "disabled").css("background-color", "#eaeaea");
		$("#indst_cd").attr("disabled", "disabled").css("background-color", "#eaeaea");
		$("#stat_cd").attr("disabled", "disabled").css("background-color", "#eaeaea");
		if($("#hhomepage_url").val() != ''){
			$("#aHpUrl").prop("href", "http://"+$("#hhomepage_url").val());
			$("#homepage_url").css({"cursor" : "pointer", "color" : "blue"}); // 홈페이지
			$("#homepage_url").hover(function() {  $(this).css("text-decoration", "underline") });
		}
	}
}

// 숫자값만 입력받기
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

function ccCancel(){
	$(document).ready(function() {
		// 버튼 활성화
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		
		$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA").val('');
		$("#custcomptbody input[type='hidden']").val('');
		$("#addr").attr("disabled", true);
		$("#iuser_search").attr("disabled", true);
		$("#sales_scale_cd").children().eq(0).attr("selected", "selected"); // 매출규모 코드 선택
		$("#indst_cd").children().eq(0).attr("selected", "selected"); // 산업군 코드 선택
		$("#stat_cd").children().eq(0).attr("selected", "selected"); // 기업 상태 코드 선택
	});
}

//기업고객 추가
function addCustComp(ctx){
	$(document).ready(function() {
		if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
			alert("기업명을 입력해 주세요");
			$("#cust_nm").focus();
			return false;
		} else if($("#comp_num1").val() == '' || $("#comp_num1").val() == null || $("#comp_num1").val().length != 3) {
			alert("사업자번호를 모두 입력해 주세요");
			$("#comp_num1").focus();
			return false;
		} else if($("#comp_num2").val() == '' || $("#comp_num2").val() == null || $("#comp_num2").val().length != 2) {
			alert("사업자번호를 모두 입력해 주세요");
			$("#comp_num2").focus();
			return false;
		} else if($("#comp_num3").val() == '' || $("#comp_num3").val() == null || $("#comp_num3").val().length != 5) {
			alert("사업자번호를 모두 입력해 주세요");
			$("#comp_num3").focus();
			return false;
		} else if($("#corp_num1").val() == '' || $("#corp_num1").val() == null || $("#corp_num1").val().length != 6) {
			alert("법인번호를 모두 입력해 주세요");
			$("#corp_num").focus();
			return false;
		} else if($("#corp_num2").val() == '' || $("#corp_num2").val() == null || $("#corp_num2").val().length != 7) {
			alert("법인번호를 모두 입력해 주세요");
			$("#corp_num").focus();
			return false;
		} else if($("#sales_scale_cd").val() == 0) {
			alert("매출규모를 선택해 주세요");
			$("#sales_scale_cd").focus();
			return false;
		} /*else if($("#emp_qty").val() == '' || $("#emp_qty").val() == null) {
			alert("직원수를 입력해 주세요");
			$("#emp_qty").focus();
			return false;
		}*/ else if( $("#indst_cd").val() == 0){
			alert("산업군을 선택해 주세요");
			$("#indst_cd").focus();
			return false;
		}/* else if($("#homepage_url").val() == '' || $("#homepage_url").val() == null){
			alert("홈페이지를 입력해 주세요");
			return false;
		} */else if($("#rep_ph1").val() == '' || $("#rep_ph1").val() == null || $("#rep_ph1").val().length < 2){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#rep_ph1").focus();
			return false;
		} else if($("#rep_ph2").val() == '' || $("#rep_ph2").val() == null || $("#rep_ph2").val().length < 3){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#rep_ph2").focus();
			return false;
		} else if($("#rep_ph3").val() == '' || $("#rep_ph3").val() == null || $("#rep_ph3").val().length < 4){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#rep_ph3").focus();
			return false;
		}/* else if($("#cust_zip_cd1").val() == ''|| $("#cust_zip_cd1").val() == null){
			alert("우편번호를 입력해 주세요");
			return false;
		} else if($("#cust_addr").val() == '' || $("#cust_addr").val() == null){
			alert("상세 주소를 입력해 주세요");
			$("#cust_addr").focus();
			return false;
		} */else if($("#iuser_id_nm").val()  == '' || $("#iuser_id_nm").val()  == null){
			alert("영업담당자를 입력해 주세요");
			$("#iuser_search").focus();
			return false;
		} else if($("#stat_cd").val()  == 0){
			alert("기업상태를 선택해 주세요");
			$("#stat_cd").focus();
			return false;
		}
		var saveChk = confirm("정말 저장하시겠습니까?");
		if(saveChk){
			var custcompData = { "cust_nm": $("#cust_nm").val(), "comp_num":$("#comp_num1").val()+$("#comp_num2").val()+$("#comp_num3").val()
					, "corp_num":$("#corp_num1").val()+$("#corp_num2").val(),"sales_scale_cd":$("#sales_scale_cd option:selected").val(),"emp_qty":$("#emp_qty").val()
					, "indst_cd":$("#indst_cd option:selected").val(),"homepage_url":$("#homepage_url").val(),"rep_ph1":$("#rep_ph1").val()
					, "rep_ph2":$("#rep_ph2").val(),"rep_ph3":$("#rep_ph3").val(),"cust_zip_cd1":$("#cust_zip_cd1").val(), "cust_zip_cd2":$("#cust_zip_cd2").val()
					, "zip_cd_sri_num": $("#zip_cd_sri_num").val(), "cust_addr":$("#cust_addr").val(),"iuser_id_nm":$("#iuser_id_nm").val()
					, "stat_cd":$("#stat_cd option:selected").val()};
			//var custcompData = $("#custCompForm").serialize();
			$.ajax({
				url : ctx+'/custCompInsert.do',
				type : 'POST',
				data :  custcompData,
				dataType : 'json',
				success : function(data){
					if(data.result == 'standard/home/session_expire'){
						location.href = ctx + '/sessionExpire';
					} else {
						alert(data.inputResult);
						location.href = ctx + "/custcomp";
					}
				},
				error : function(data){
					alert(data.inputResult);
				}
			});
		} else {
			return false;
		}
	});
}

// 기업고객 수정
function mdfyCustComp(ctx){
	$(document).ready(function() {
		if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
			alert("기업명을 입력해 주세요");
			$("#cust_nm").focus();
			return false;
		} else if($("#comp_num1").val() == '' || $("#comp_num1").val() == null || $("#comp_num1").val().length != 3) {
			alert("사업자번호를 모두 입력해 주세요");
			$("#comp_num1").focus();
			return false;
		} else if($("#comp_num2").val() == '' || $("#comp_num2").val() == null || $("#comp_num2").val().length != 2) {
			alert("사업자번호를 모두 입력해 주세요");
			$("#comp_num2").focus();
			return false;
		} else if($("#comp_num3").val() == '' || $("#comp_num3").val() == null || $("#comp_num3").val().length != 5) {
			alert("사업자번호를 모두 입력해 주세요");
			$("#comp_num3").focus();
			return false;
		} else if($("#corp_num1").val() == '' || $("#corp_num1").val() == null || $("#corp_num1").val().length != 6) {
			alert("법인번호를 모두 입력해 주세요");
			$("#corp_num").focus();
			return false;
		} else if($("#corp_num2").val() == '' || $("#corp_num2").val() == null || $("#corp_num2").val().length != 7) {
			alert("법인번호를 모두 입력해 주세요");
			$("#corp_num").focus();
			return false;
		} else if($("#sales_scale_cd").val() == 0) {
			alert("매출규모를 선택해 주세요");
			$("#sales_scale_cd").focus();
			return false;
		} /*else if($("#emp_qty").val() == '' || $("#emp_qty").val() == null) {
			alert("직원수를 입력해 주세요");
			$("#emp_qty").focus();
			return false;
		}*/ else if( $("#indst_cd").val() == 0){
			alert("산업군을 선택해 주세요");
			$("#indst_cd").focus();
			return false;
		}/* else if($("#homepage_url").val() == '' || $("#homepage_url").val() == null){
			alert("홈페이지를 입력해 주세요");
			return false;
		} */else if($("#rep_ph1").val() == '' || $("#rep_ph1").val() == null || $("#rep_ph1").val().length < 2){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#rep_ph1").focus();
			return false;
		} else if($("#rep_ph2").val() == '' || $("#rep_ph2").val() == null || $("#rep_ph2").val().length < 3){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#rep_ph2").focus();
			return false;
		} else if($("#rep_ph3").val() == '' || $("#rep_ph3").val() == null || $("#rep_ph3").val().length < 4){
			alert("대표 전화번호를 모두 입력해 주세요");
			$("#rep_ph3").focus();
			return false;
		}/* else if($("#cust_zip_cd1").val() == ''|| $("#cust_zip_cd1").val() == null){
			alert("우편번호를 입력해 주세요");
			return false;
		} else if($("#cust_addr").val() == '' || $("#cust_addr").val() == null){
			alert("상세 주소를 입력해 주세요");
			$("#cust_addr").focus();
			return false;
		} */else if($("#iuser_id_nm").val()  == '' || $("#iuser_id_nm").val()  == null){
			alert("영업담당자를 입력해 주세요");
			$("#iuser_search").focus();
			return false;
		} else if($("#stat_cd").val()  == 0){
			alert("기업상태를 선택해 주세요");
			$("#stat_cd").focus();
			return false;
		}
		var saveChk = confirm("정말 저장하시겠습니까?");
		if(saveChk){
			var custcompData = { "cust_id": $("#cust_id").val(), "cust_nm": $("#cust_nm").val(), "comp_num":$("#comp_num1").val()+$("#comp_num2").val()+$("#comp_num3").val()
					, "corp_num":$("#corp_num1").val()+$("#corp_num2").val(), "sales_scale_cd":$("#sales_scale_cd option:selected").val(),"emp_qty":$("#emp_qty").val()
					, "indst_cd":$("#indst_cd option:selected").val(),"homepage_url":$("#homepage_url").val(),"rep_ph1":$("#rep_ph1").val()
					, "rep_ph2":$("#rep_ph2").val(),"rep_ph3":$("#rep_ph3").val(),"cust_zip_cd1":$("#cust_zip_cd1").val(), "cust_zip_cd2":$("#cust_zip_cd2").val()
					, "zip_cd_sri_num": $("#zip_cd_sri_num").val(), "cust_addr":$("#cust_addr").val(),"iuser_id_nm":$("#iuser_id_nm").val()
					, "stat_cd":$("#stat_cd option:selected").val(), "ccPageNum":$("#ccPageNum").val()};
			
			$.ajax({
				url : ctx+'/custCompUpdate.do',
				type : 'POST',
				data :  custcompData,
				dataType : 'json',
				success : function(data){
					if(data.updateResult == 'standard/home/session_expire'){
						location.href = ctx + '/sessionExpire';
					} else {
						alert(data.updateResult);
						$("#sch_cust_nm").val('');
						$("#sch_comp_num").val('');
						$("#sch_corp_num").val('');
						$("#sch_iuser_nm").val('');
						paging(data.ccPageNum);// 리스트 새로고침
						
						$("#mdfBtn").attr("disabled", false);
						
						// 버튼 재설정
						$("#baseBtnDiv").css("display", "block");
						$("#addBtnDiv").css("display", "none");
						$("#mdfBtnDiv").css("display", "none");
						$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
						$("#custcomptbody select").css("background-color", "#EAEAEA");
						
						$("#nowCust_id").val(data.ccVO.cust_id);
						// 수정된값 상세정보에 다시 넣기
						$("#cust_id").val(data.ccVO.cust_id); // 기업아이디
						$("#cust_nm").val(data.ccVO.cust_nm).attr("readonly","readonly"); // 기업명
						$("#comp_num").val(data.ccVO.comp_num).attr("readonly","readonly"); // 사업자번호
						$("#corp_num").val(data.ccVO.corp_num).attr("readonly","readonly"); // 법인번호
						$("#sales_scale_cd").children().eq(data.ccVO.sales_scale_cd).attr("selected", "selected"); // 매출규모 코드 선택
						$("#emp_qty").val(data.ccVO.emp_qty).attr("readonly","readonly"); // 직원수
						$("#indst_cd").children().eq(data.ccVO.indst_cd).attr("selected", "selected").attr("disabled", true); // 산업군 코드 선택
						$("#homepage_url").val(data.ccVO.homepage_url).attr("readonly","readonly"); // 홈페이지
						$("#rep_ph1").val(data.ccVO.rep_ph1).attr("readonly","readonly"); // 대표전화번호
						$("#rep_ph2").val(data.ccVO.rep_ph2).attr("readonly","readonly");
						$("#rep_ph3").val(data.ccVO.rep_ph3).attr("readonly","readonly");
						$("#cust_zip_cd1").val(data.ccVO.cust_zip_cd.substring(0, 3)); // 우편번호
						$("#cust_zip_cd2").val(data.ccVO.cust_zip_cd.substring(3, 6)); // 우편번호
						$("#cust_zip_addr").val(data.ccVO.cust_zip_addr); // 우편번호 상 주소
						$("#cust_addr").val(data.ccVO.cust_addr).attr("readonly","readonly"); // 고객 주소
						$("#iuser_nm").val(data.ccVO.iuser_nm).attr("readonly","readonly"); // 영업담당자
						$("#iuser_id_nm").val(data.ccVO.iuser_id_nm).attr("readonly","readonly"); // 영업담당자
						$("#stat_cd").children().eq(data.ccVO.stat_cd).attr("selected", "selected"); // 기업 상태 코드 선택
						
						// 히든 속성에 value값 설정하기
						$("#hcust_nm").val(data.ccVO.cust_nm); // 기업명
						$("#hcomp_num").val(data.ccVO.comp_num); // 사업자번호
						$("#hcorp_num").val(data.ccVO.corp_num); // 법인번호
						$("#hsales_scale_cd").val(data.ccVO.sales_scale_cd); // 매출규모 코드 선택
						$("#hemp_qty").val(data.ccVO.emp_qty); // 직원수
						$("#hindst_cd").val(data.ccVO.indst_cd); // 산업군 코드 선택
						$("#hhomepage_url").val(data.ccVO.homepage_url); // 홈페이지
						$("#hrep_ph1").val(data.ccVO.rep_ph1); // 대표전화번호
						$("#hrep_ph2").val(data.ccVO.rep_ph2);
						$("#hrep_ph3").val(data.ccVO.rep_ph3);
						$("#hcust_zip_cd").val(data.ccVO.cust_zip_cd); // 우편번호
						$("#hcust_zip_addr").val(data.ccVO.cust_zip_addr); // 우편번호 상 주소
						$("#hcust_addr").val(data.ccVO.cust_addr); // 고객 주소
						$("#hiuser_id_nm").val(data.ccVO.iuser_id_nm); // 영업담당자
						$("#hiuser_nm").val(data.ccVO.iuser_nm); // 영업담당자
						$("#hstat_cd").val(data.ccVO.stat_cd); // 기업 상태 코드 선택
					}
				},
				error : function(data){
					alert(data.inputResult);
					history.back();
				}
			});
		} else {
			return false;
		}
	});
}



//키맨 삭제
function keymanDelete() {
	var chked_val = [];
	$(":checkbox[id='kmChkbox']:checked").each(function(index, item){
		chked_val[index] = item.value;
	});
	var delChk = confirm("정말 삭제 하시겠습니까?");
	if(delChk){
		var ctx = $("#ctx").val();
		var cust_id = $("#nowCust_id").val();
		$.ajax({
			url : ctx+'/delKeyman.do',
			type : 'POST',
			data :  JSON.stringify(chked_val),
			dataType : 'json',
			contentType : 'application/json',
			success : function(data){
				if(data.deleteResult == 'standard/home/session_expire'){
					location.href = ctx + '/sessionExpire';
				} else {
					alert(data.deleteResult);
					keymanList(cust_id);
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

//영업기회 삭제
function ccOpptDel(ctx){
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
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							opptList(cust_id);
							opptChkCancel();
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

//영업활동 삭제
function ccActDel(ctx){
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
						if(data.deleteResult == 'standard/home/session_expire'){
							location.href = ctx + '/sessionExpire';
						} else {
							alert(data.deleteResult);
							actList(cust_id);
							actChkCancel();
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

//견적 삭제
function ccEstDel(ctx){
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
function ccContDel(ctx){
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