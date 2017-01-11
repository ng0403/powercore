$(function() {
	var ctx = $('#ctx').val();
	
	//leadSuit(ctx);  //심사적합
	//leadUnsuit(ctx);//심사부적합
	leadCandP(ctx); //개인인지 기업인지 선택 (추가)
	//leadCupP(ctx); //개인인지 기업인지 선택 (편집)
	//leadSelect(ctx); //개인, 기업 선택 후 결과 
	//lead_Update(ctx); //개인, 기업 수정(편집)
	lead_Btn(ctx);   //추가, 편집 할 경우 버튼 보이거나 안보이거나
	//leadAdd(ctx);	//등록버튼 눌렀을 때
	//leadUp(ctx); //수정버튼 눌렀을 때
	//leadDelete(ctx);  //리드 삭제버튼 눌렀을 때
//	setCode();  //코드가져오기
});

/*//코드 가져오기
function setCode(){
	
	//var sales_scale_cd = $('#d_sales_scale_cd').val();
	var lead_src_cd = $('#d_lead_src_cd').val();
	var lead_stat_cd = $('#d_lead_stat_cd').val();
	//alert($('select[name=sales_scale_cd]').children());
	//$('select[name=sales_scale_cd]').children().eq(parseInt(sales_scale_cd.substring(3,4))+parseInt(1)).attr("selected", true);
    $('select[name=lead_stat_cd]').children().eq(parseInt(lead_stat_cd.substring(3,4))+parseInt(1)).attr("selected", true);
    $('select[name=lead_src_cd]').children().eq(parseInt(lead_src_cd.substring(3,4))+parseInt(1)).attr("selected", true);
}
*/
//심사적합 팝업
function leadSuit(ctx){
	var cust_id = $("#cust_id").val();
	window.open(ctx+'/leadSuit?cust_id='+cust_id,'newwindow','width=300, height=130');
}

//심사 부적합 팝업
function leadUnsuit(ctx){
	var cust_id = $("#cust_id").val();
	window.open(ctx+'/leadUnsuit?cust_id='+cust_id,'newwindow','width=300, height=130');
}

//리드 추가하기위해 개인 또는 기업을 선택하는 팝업창
function leadCandP(ctx) {
	
	$('#CandP').click(function(){
		
		window.open(ctx+'/lead_CandP','newwindow','width=300, height=200');
		$("#CandP").attr("disabled", true);
	});
}	
	
//자식창에서 부모창 함수 제어 
function getFormId() {
	var leadTabForm = $("#leadTabForm");
	return leadTabForm;
}

function leadSelectCancel(ctx){
	
	var ctx = $("#ctx").val();
	
	window.close();
}

//개인 또는 기업을 선택하고 입력창을 공백으로 설정 (추가)
function leadSelect(ctx){
	
	var ctx = $("#ctx").val();
	
	$("#CupP").attr("disabled", true);
	
	$('#leadCandP_cancel').click(function(){
			
		window.close();
		
	});
	
	var radioValue = $(':radio[name="lead_radio"]:checked').val();
	
	if(radioValue == "person")
	{
		var leadTabForm = window.opener.getFormId();
		
		leadTabForm.find("input[type='text']").val("");
		
		leadTabForm.find("input[name='cust_nm']").attr({ //user_id 쓰기가능
			readonly : false,
			style:"background-color: white"	 
		});
		
		leadTabForm.find("input[name='email1']").attr({ //email1 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='email2']").attr({ //email2 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cell_ph1']").attr({ //cell_ph1 (이동전화번호) 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cell_ph2']").attr({ //cell_ph2 (이동전화번호) 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cell_ph3']").attr({ //cell_ph3 (이동전화번호) 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		
		leadTabForm.find("select[id='lead_src_cd']").children().eq(0).attr("selected", true);
		leadTabForm.find("select[id='lead_stat_cd']").children().eq(0).attr("selected", true);
		
		leadTabForm.find("input[name='cust_zip_cd1']").attr({ //cust_zip_cd1 (우편번호)
			readonly : true,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cust_zip_cd2']").attr({ //cust_zip_cd2 (우편번호) 
			readonly : true,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cust_zip_addr']").attr({ //cust_zip_addr (고객주소) 
			readonly : true,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cust_addr']").attr({ //cust_addr (고객상세주소) 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='leadAddr']").attr("disabled" , false); //우편번호 선택가능
		
		window.close();
		
	} 
	
	else if(radioValue == "company")
	{
		var leadTabForm = window.opener.getFormId();
		
		leadTabForm.find("input[type='text']").val("");
		
		leadTabForm.find("input[name='cust_nm']").attr({ //user_id 쓰기가능
			readonly : false,
			style:"background-color: white"		
		});
		leadTabForm.find("input[name='rep_ph1']").attr({ //rep_ph1 (전화번호)  쓰기가능
			readonly : false,
			style:"background-color: white"		
		});
		leadTabForm.find("input[name='rep_ph2']").attr({ //rep_ph2 쓰기가능
			readonly : false,
			style:"background-color: white"		
		});
		leadTabForm.find("input[name='rep_ph3']").attr({ //rep_ph3 쓰기가능
			readonly : false,
			style:"background-color: white"		
		});
		leadTabForm.find("input[name='comp_num']").attr({ //comp_num (사업자번호) 쓰기가능
			readonly : false,
			style:"background-color: white"		
		});
		leadTabForm.find("input[name='corp_num']").attr({ //corp_num (법인번호) 쓰기가능
			readonly : false,
			style:"background-color: white"		
		});
				
		leadTabForm.find("input[name='cust_zip_cd1']").attr({ //cust_zip_cd1 (우편번호) 
			readonly : true,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cust_zip_cd2']").attr({ //cust_zip_cd2 (우편번호)
			readonly : true,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cust_zip_addr']").attr({ //cust_zip_addr (고객주소) 
			readonly : true,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='cust_addr']").attr({ //cust_addr (고객상세주소) 쓰기가능
			readonly : false,
			style:"background-color: white"	
		});
		leadTabForm.find("input[name='leadAddr']").attr("disabled" , false); //우편번호 선택가능
		
		window.close();
	}
}

//리드 추가 ajax 통신
function leadAdd(ctx){ 
	//개인리드 추가
	 if($("#leadTabForm input[name='comp_num']").val() == null || $("#leadTabForm input[name='comp_num']").val() == ""){

			if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
				alert("고객명을 입력 해주세요");
				$("#cust_nm").focus();
				return false;
			} else if($("#email1").val() == '' || $("#email1").val() == null) {
				alert("이메일을 입력 해주세요");
				$("#email1").focus();
				return false;
			} else if($("#email2").val() == '' || $("#email2").val() == null) {
				alert("이메일을 입력 해주세요");
				$("#email2").focus();
				return false;
			} else if($("#cell_ph1").val() == '' || $("#cell_ph1").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#cell_ph1").focus();
				return false;
			} else if($("#cell_ph2").val() == '' || $("#cell_ph2").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#cell_ph2").focus();
				return false;
			} else if($("#cell_ph3").val() == '' || $("#cell_ph3").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#cell_ph3").focus();
				return false;
			} else if($("#lead_src_cd").val() == 0) {
				alert("리드소스를 선택 해주세요");
				$("#lead_src_cd").focus();
				return false;
			} else if($("#lead_stat_cd").val() == 0) {
				alert("리드상태를 입력 해주세요");
				$("#lead_stat_cd").focus();
				return false;
			} else if( $("#cust_zip_cd1").val() == '' || $("#cust_zip_cd1").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd1").focus();
				return false;
			} else if( $("#cust_zip_cd2").val() == '' || $("#cust_zip_cd2").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd2").focus();
				return false;
			} else if( $("#cust_zip_addr").val() == '' || $("#cust_zip_addr").val() == null){
				alert("우편주소를 선택해 주세요");
				$("#cust_zip_addr").focus();
				return false;
			} else if( $("#cust_addr").val() == '' || $("#cust_addr").val() == null){
				alert("주소를 입력 해주세요");
				$("#cust_addr").focus();
				return false;
			}
			
			var leadTabData = $("#leadTabForm").serialize();
			$.ajax({
				url : ctx+'/leadInsert',
				type : 'POST',
				data :  leadTabData,
				dataType : 'json',
				success : function(data){
					
					alert(data.result);
					
					var scust_nm = $("#scust_nm").val();
					var semail = $("#semail").val();
					var scell_ph = $("#scell_ph").val();
					var srep_ph = $("#srep_ph").val();
					var slead_src_cd = $("#slead_src_cd").val();
					var slead_stat_cd = $("#slead_stat_cd").val();
					
					
					location.href = ctx + "/lead";
					
				},
				error : function(data){
					alert(data.result);
					history.back();
				}
			});
		
	//기업 리드 추가
	} else{
			if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
				alert("고객명을 입력 해주세요");
				$("#cust_nm").focus();
				return false;
			} else if($("#rep_ph1").val() == '' || $("#rep_ph1").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#rep_ph1").focus();
				return false;
			} else if($("#rep_ph2").val() == '' || $("#rep_ph2").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#rep_ph2").focus();
				return false;
			} else if($("#rep_ph3").val() == '' || $("#rep_ph3").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#rep_ph3").focus();
				return false;
			} else if($("#comp_num").val() == '' || $("#comp_num").val() == null) {
				alert("사업자번호를 입력 해주세요");
				$("#comp_num").focus();
				return false;
			} else if($("#corp_num").val() == '' || $("#corp_num").val() == null) {
				alert("법인번호를 입력 해주세요");
				$("#corp_num").focus();
				return false;
			} else if($("#lead_src_cd").val() == 0) {
				alert("리드소스를 선택 해주세요");
				$("#lead_src_cd").focus();
				return false;
			} else if($("#lead_stat_cd").val() == 0) {
				alert("리드상태를 입력 해주세요");
				$("#lead_stat_cd").focus();
				return false;
			} else if( $("#cust_zip_cd1").val() == '' || $("#cust_zip_cd1").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd1").focus();
				return false;
			} else if( $("#cust_zip_cd2").val() == '' || $("#cust_zip_cd2").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd2").focus();
				return false;
			} else if( $("#cust_zip_addr").val() == '' || $("#cust_zip_addr").val() == null){
				alert("우편주소를 선택해 주세요");
				$("#cust_zip_addr").focus();
				return false;
			} else if( $("#cust_addr").val() == '' || $("#cust_addr").val() == null){
				alert("주소를 입력 해주세요");
				$("#cust_addr").focus();
				return false;
			}
			
			var leadTabData = $("#leadTabForm").serialize();
			$.ajax({
				url : ctx+'/leadInsert1',
				type : 'POST',
				data :  leadTabData,
				dataType : 'json',
				success : function(data){
					
					alert(data.result1);
					
					var scust_nm = $("#scust_nm").val();
					var semail = $("#semail").val();
					var scell_ph = $("#scell_ph").val();
					var srep_ph = $("#srep_ph").val();
					var slead_src_cd = $("#slead_src_cd").val();
					var slead_stat_cd = $("#slead_stat_cd").val();
					location.href = ctx + "/lead";
					
				},
				error : function(data){
					alert(data.result1);
					history.back();
				}
			});
	 	} //else 종료
}
 
//리드 편집을 누르면 readonly 가 풀리면서 수정할 수 있는 창으로 변환 (수정)
function leadCupP(ctx) {
	
	$("#CandP").attr("disabled", true);
	
	var ctx = $("#ctx").val();
	
	if($("#leadTabForm input[name='comp_num']").val() == null || $("#leadTabForm input[name='comp_num']").val() == "")
	{		
		//leadTabtbody
		
		$("#leadTabtbody input[type='text']").css("background-color", "white");
		$("#leadTabtbody input").attr("readonly", false);
		$("#cust_nm").focus();
		
		$("#rep_ph1").attr("readonly", true);
		$("#rep_ph2").attr("readonly", true);
		$("#rep_ph3").attr("readonly", true);
		$("#comp_num").attr("readonly", true);
		$("#corp_num").attr("readonly", true);
		$("#lead_src_cd").children().eq($("#hlead_src_cd").val()).attr("selected", "selected"); 
		$("#lead_stat_cd").children().eq($("#hlead_stat_cd").val()).attr("selected", "selected"); 
		$("#cust_zip_cd1").attr("readonly", true);
		$("#cust_zip_cd2").attr("readonly", true);
		$("#cust_zip_addr").attr("readonly", true);
		$("#leadAddr").attr("disabled", false);
		
	} else{
		
		$("#leadTabtbody input[type='text']").css("background-color", "white");
		$("#leadTabtbody input").attr("readonly", false);
		$("#cust_nm").focus();
		
		$("#email1").attr("readonly", true);
		$("#email2").attr("readonly", true);
		$("#cell_ph1").attr("readonly", true);
		$("#cell_ph2").attr("readonly", true);
		$("#cell_ph3").attr("readonly", true);
		$("#lead_src_cd").children().eq($("#hlead_src_cd").val()).attr("selected", "selected"); 
		$("#lead_stat_cd").children().eq($("#hlead_stat_cd").val()).attr("selected", "selected"); 
		$("#cust_zip_cd1").attr("readonly", true);
		$("#cust_zip_cd2").attr("readonly", true);
		$("#cust_zip_addr").attr("readonly", true);
		$("#leadAddr").attr("disabled", false);
	}
}

//리드 편집 ajax 통신
function leadUp(ctx){
	//개인 리드 편집
		if($("#leadTabForm input[name='comp_num']").val() == null || $("#leadTabForm input[name='comp_num']").val() == ""){
			
			if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
				alert("고객명을 입력 해주세요");
				$("#cust_nm").focus();
				return false;
			} else if($("#email1").val() == '' || $("#email1").val() == null) {
				alert("이메일을 입력 해주세요");
				$("#email1").focus();
				return false;
			} else if($("#email2").val() == '' || $("#email2").val() == null) {
				alert("이메일을 입력 해주세요");
				$("#email2").focus();
				return false;
			} else if($("#cell_ph1").val() == '' || $("#cell_ph1").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#cell_ph1").focus();
				return false;
			} else if($("#cell_ph2").val() == '' || $("#cell_ph2").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#cell_ph2").focus();
				return false;
			} else if($("#cell_ph3").val() == '' || $("#cell_ph3").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#cell_ph3").focus();
				return false;
			} else if($("#lead_src_cd").val() == 0) {
				alert("리드소스를 선택 해주세요");
				$("#lead_src_cd").focus();
				return false;
			} else if($("#lead_stat_cd").val() == 0) {
				alert("리드상태를 입력 해주세요");
				$("#lead_stat_cd").focus();
				return false;
			} else if( $("#cust_zip_cd1").val() == '' || $("#cust_zip_cd1").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd1").focus();
				return false;
			} else if( $("#cust_zip_cd2").val() == '' || $("#cust_zip_cd2").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd2").focus();
				return false;
			} else if( $("#cust_zip_addr").val() == '' || $("#cust_zip_addr").val() == null){
				alert("우편주소를 선택해 주세요");
				$("#cust_zip_addr").focus();
				return false;
			} else if( $("#cust_addr").val() == '' || $("#cust_addr").val() == null){
				alert("주소를 입력 해주세요");
				$("#cust_addr").focus();
				return false;
			}
		
		var leadData = { "lead_id": $("#lead_id").val(), "cust_id": $("#cust_id").val()
				       , "cust_nm": $("#cust_nm").val(), "email1":$("#email1").val()
					   , "email2":$("#email2").val(),"cell_ph1":$("#cell_ph1").val()
					   , "cell_ph2":$("#cell_ph2").val()
					   , "cell_ph3":$("#cell_ph3").val()
					   , "lead_src_cd":$("#lead_src_cd option:selected").val()
					   , "lead_stat_cd":$("#lead_stat_cd option:selected").val()
					   , "cust_zip_cd1":$("#cust_zip_cd1").val()
					   , "cust_zip_cd2":$("#cust_zip_cd2").val()
					   , "zip_cd_sri_num": $("#zip_cd_sri_num").val()
					   , "cust_addr":$("#cust_addr").val()};
			
		$.ajax({
			url : ctx+'/leadUpdate',
			type : 'POST',
			data :  leadData,
			dataType : 'json',
			success : function(data){
				
				alert(data.result);
				
				paging(1);// 리스트 새로고침
				$("#scust_nm").val('');
				$("#semail").val('');
				$("#scell_ph").val('');
				$("#srep_ph").val('');
				$("#slead_src_cd").val('');
				$("#slead_stat_cd").val('');
				$("#lead_cancel").css("display", "none");
				$("#lead_update").css("display", "none");
				$("#leadTabtbody input[type='text']").css("background-color", "#EAEAEA");
				$("#leadAddr").attr("disabled", true);
				
				/*$("#mdfBtn").attr("disabled", false);
				
				// 버튼 재설정
				$("#baseBtnDiv").css("display", "block");
				$("#addBtnDiv").css("display", "none");
				$("#mdfBtnDiv").css("display", "none");
				$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");*/
				
				$("#nowCust_id").val(data.leadVo.cust_id);
				// 수정된값 상세정보에 다시 넣기
				$("#cust_id").val(data.leadVo.cust_id); // 기업아이디
				$("#cust_nm").val(data.leadVo.cust_nm).attr("readonly","readonly"); //기업명
				$("#email1").val(data.leadVo.email1).attr("readonly","readonly"); //이메일1
				$("#email2").val(data.leadVo.email2).attr("readonly","readonly"); //이메일2
				$("#cell_ph1").val(data.leadVo.cell_ph1).attr("readonly","readonly"); //이동 전화번호1
				$("#cell_ph2").val(data.leadVo.cell_ph2).attr("readonly","readonly"); //이동 전화번호2
				$("#cell_ph3").val(data.leadVo.cell_ph3).attr("readonly","readonly"); //이동 전화번호3
				$("#lead_src_cd").children().eq(data.leadVo.lead_src_cd).attr("selected", "selected"); //리드소스
				$("#lead_stat_cd").children().eq(data.leadVo.lead_stat_cd).attr("selected", "selected"); //리드상태
				$("#cust_zip_cd1").val(data.leadVo.cust_zip_cd.substring(0, 3)); //우편번호
				$("#cust_zip_cd2").val(data.leadVo.cust_zip_cd.substring(3, 6)); //우편번호
				$("#cust_zip_addr").val(data.leadVo.cust_zip_addr).attr("readonly","readonly"); //우편번호 상 주소
				$("#cust_addr").val(data.leadVo.cust_addr); //고객 주소
				$("#zip_cd_sri_num").val(data.leadVo.zip_cd_sri_num); //우편번호 일련번호
				
				// 히든 속성에 value값 설정하기
				$("#hcust_nm").val(data.leadVo.cust_nm); //기업명
				$("#hemail1").val(data.leadVo.email1); //이메일1
				$("#hemail2").val(data.leadVo.email2); //이메일2
				$("#hcell_ph1").val(data.leadVo.cell_ph1); //이동 전화번호1
				$("#hcell_ph2").val(data.leadVo.cell_ph2); //이동 전화번호2
				$("#hcell_ph3").val(data.leadVo.cell_ph3); //이동 전화번호3
				$("#hlead_src_cd").val(data.leadVo.lead_src_cd); //리드소스
				$("#hlead_stat_cd").val(data.leadVo.lead_stat_cd); //리드상태
				$("#hcust_zip_cd1").val(data.leadVo.cust_zip_cd); //우편번호
				$("#hcust_zip_addr").val(data.leadVo.cust_zip_addr); //우편번호 상 주소
				$("#hcust_addr").val(data.leadVo.cust_addr); //고객 주소
				$("#hzip_cd_sri_num").val(data.leadVo.zip_cd_sri_num); //우편번호 일련번호
				
			},
			error : function(data){
				alert(data.result);
				history.back();
			}
		});
		} 
		//기업 리드 편집
		else{
			if($("#cust_nm").val() == '' || $("#cust_nm").val() == null) {
				alert("고객명을 입력 해주세요");
				$("#cust_nm").focus();
				return false;
			} else if($("#rep_ph1").val() == '' || $("#rep_ph1").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#rep_ph1").focus();
				return false;
			} else if($("#rep_ph2").val() == '' || $("#rep_ph2").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#rep_ph2").focus();
				return false;
			} else if($("#rep_ph3").val() == '' || $("#rep_ph3").val() == null) {
				alert("전화번호를 입력 해주세요");
				$("#rep_ph3").focus();
				return false;
			} else if($("#comp_num").val() == '' || $("#comp_num").val() == null) {
				alert("사업자번호를 입력 해주세요");
				$("#comp_num").focus();
				return false;
			} else if($("#corp_num").val() == '' || $("#corp_num").val() == null) {
				alert("법인번호를 입력 해주세요");
				$("#corp_num").focus();
				return false;
			} else if($("#lead_src_cd").val() == 0) {
				alert("리드소스를 선택 해주세요");
				$("#lead_src_cd").focus();
				return false;
			} else if($("#lead_stat_cd").val() == 0) {
				alert("리드상태를 입력 해주세요");
				$("#lead_stat_cd").focus();
				return false;
			} else if( $("#cust_zip_cd1").val() == '' || $("#cust_zip_cd1").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd1").focus();
				return false;
			} else if( $("#cust_zip_cd2").val() == '' || $("#cust_zip_cd2").val() == null){
				alert("우편번호를 선택해 주세요");
				$("#cust_zip_cd2").focus();
				return false;
			} else if( $("#cust_zip_addr").val() == '' || $("#cust_zip_addr").val() == null){
				alert("우편주소를 선택해 주세요");
				$("#cust_zip_addr").focus();
				return false;
			} else if( $("#cust_addr").val() == '' || $("#cust_addr").val() == null){
				alert("주소를 입력 해주세요");
				$("#cust_addr").focus();
				return false;
			}
		
			var leadData = {"lead_id": $("#lead_id").val(), "cust_id": $("#cust_id").val()
					    , "cust_nm": $("#cust_nm").val(), "rep_ph1":$("#rep_ph1").val()
						, "rep_ph2":$("#rep_ph2").val(),"rep_ph3":$("#rep_ph3").val()
						, "comp_num":$("#comp_num").val(),"corp_num":$("#corp_num").val()
						, "lead_src_cd":$("#lead_src_cd option:selected").val()
						, "lead_stat_cd":$("#lead_stat_cd option:selected").val()
						, "cust_zip_cd1":$("#cust_zip_cd1").val()
						, "cust_zip_cd2":$("#cust_zip_cd2").val()
						, "zip_cd_sri_num": $("#zip_cd_sri_num").val()
						, "cust_addr":$("#cust_addr").val()};

		$.ajax({
			url : ctx+'/leadUpdate1',
			type : 'POST',
			data :  leadData,
			dataType : 'json',
			success : function(data){
				alert(data.result1);
				
				paging(1);// 리스트 새로고침
				$("#scust_nm").val('');
				$("#semail").val('');
				$("#scell_ph").val('');
				$("#srep_ph").val('');
				$("#slead_src_cd").val('');
				$("#slead_stat_cd").val('');
				$("#lead_cancel").css("display", "none");
				$("#lead_update").css("display", "none");
				$("#leadTabtbody input[type='text']").css("background-color", "#EAEAEA");
				$("#leadAddr").attr("disabled", true);
				
				/*$("#mdfBtn").attr("disabled", false);
				
				// 버튼 재설정
				$("#baseBtnDiv").css("display", "block");
				$("#addBtnDiv").css("display", "none");
				$("#mdfBtnDiv").css("display", "none");
				$("#custcomptbody input[type='text']").css("background-color", "#EAEAEA");
				*/
				$("#nowCust_id").val(data.leadVo.cust_id);
				// 수정된값 상세정보에 다시 넣기
				$("#cust_id").val(data.leadVo.cust_id); //기업아이디
				$("#cust_nm").val(data.leadVo.cust_nm).attr("readonly","readonly"); //기업명
				$("#rep_ph1").val(data.leadVo.rep_ph1).attr("readonly","readonly"); //전화번호1
				$("#rep_ph2").val(data.leadVo.rep_ph2).attr("readonly","readonly"); //전화번호2
				$("#rep_ph3").val(data.leadVo.rep_ph3).attr("readonly","readonly"); //전화번호3
				$("#comp_num").val(data.leadVo.comp_num).attr("readonly","readonly"); //사업자번호
				$("#corp_num").val(data.leadVo.corp_num).attr("readonly","readonly"); //법인번호
				$("#lead_src_cd").children().eq(data.leadVo.lead_src_cd).attr("selected", "selected"); //리드소스
				$("#lead_stat_cd").children().eq(data.leadVo.lead_stat_cd).attr("selected", "selected"); //리드상태
				$("#cust_zip_cd1").val(data.leadVo.cust_zip_cd.substring(0, 3)); //우편번호
				$("#cust_zip_cd2").val(data.leadVo.cust_zip_cd.substring(3, 6)); //우편번호
				$("#cust_zip_addr").val(data.leadVo.cust_zip_addr).attr("readonly","readonly"); //우편번호 상 주소
				$("#cust_addr").val(data.leadVo.cust_addr); //고객 주소
				$("#zip_cd_sri_num").val(data.leadVo.zip_cd_sri_num); //우편번호 일련번호
				
				// 히든 속성에 value값 설정하기
				$("#hcust_nm").val(data.leadVo.cust_nm); //기업명
				$("#hrep_ph1").val(data.leadVo.rep_ph1); //전화번호1
				$("#hrep_ph2").val(data.leadVo.rep_ph2); //전화번호2
				$("#hrep_ph3").val(data.leadVo.rep_ph3); //전화번호3
				$("#hcomp_num").val(data.leadVo.comp_num); //사업자번호
				$("#hcorp_num").val(data.leadVo.corp_num); //법인번호
				$("#hlead_src_cd").val(data.leadVo.lead_src_cd); //리드소스
				$("#hlead_stat_cd").val(data.leadVo.lead_stat_cd); //리드상태
				$("#hcust_zip_cd1").val(data.leadVo.cust_zip_cd); //우편번호
				$("#hcust_zip_addr").val(data.leadVo.cust_zip_addr); //우편번호 상 주소
				$("#hcust_addr").val(data.leadVo.cust_addr); //고객 주소
				$("#hzip_cd_sri_num").val(data.leadVo.zip_cd_sri_num); //우편번호 일련번호
				
			},
			error : function(data){
				alert(data.result1);
				history.back();
			}
		});
			
	} //else 종료
}

//취소
function leadCancel() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		$("#lead_cancel").css("display", "none");
		$("#lead_update").css("display", "none");
		$("#lead_insert").css("display", "none");
		$("#leadTabtbody input[type='text']").css("background-color", "#EAEAEA");
		$("#leadAddr").attr("disabled", true);
		$("#CupP").attr("disabled", false);
		$("#CandP").attr("disabled", false);
		//상세정보에 값 넣기
		$("#cust_nm").val($("#hcust_nm").val()).attr("readonly", true); //고객명
		$("#email1").val($("#hemail1").val()).attr("readonly", true); // 이메일
		$("#email2").val($("#hemail2").val()).attr("readonly", true); 
		$("#cell_ph1").val($("#hcell_ph1").val()).attr("readonly", true); //이동전화번호
		$("#cell_ph2").val($("#hcell_ph2").val()).attr("readonly", true); 
		$("#cell_ph3").val($("#hcell_ph3").val()).attr("readonly", true);
		$("#rep_ph1").val($("#hrep_ph1").val()).attr("readonly", true); //전화번호
		$("#rep_ph2").val($("#hrep_ph2").val()).attr("readonly", true); 
		$("#rep_ph3").val($("#hrep_ph3").val()).attr("readonly", true); 
		$("#comp_num").val($("#hcomp_num").val()).attr("readonly", true); //사업자번호
		$("#corp_num").val($("#hcorp_num").val()).attr("readonly", true); //법인번호
		$("#lead_src_cd").children().eq($("#hlead_src_cd").val()).attr("selected", "selected"); //리드소스 코드 선택
		$("#lead_stat_cd").children().eq($("#hlead_stat_cd").val()).attr("selected", "selected"); //리드상태 코드 선택
		$("#cust_zip_cd1").val($("#hcust_zip_cd").val().substring(0, 3)).attr("readonly", true); //우편번호
		$("#cust_zip_cd2").val($("#hcust_zip_cd").val().substring(3, 6)).attr("readonly", true); //우편번호
		$("#cust_zip_addr").val($("#hcust_zip_addr").val()).attr("readonly", true); //우편번호 상 주소
		$("#cust_addr").val($("#hcust_addr").val()).attr("readonly", true); //고객 주소
	}
}


//추가와 편집을 눌렀을 때 버튼 보이거나 안보이게
function lead_Btn(ctx){
	
	$('#CandP').click(function(){
		
		btn = $('#lead_insert').css("display");
		
		if(btn == "none") {
			$('#lead_insert').css("display","block"); 	
			$('#lead_cancel').css("display","block");
		} 
		else {
			$('#lead_update').css("display","none");
		}   
	});
	
	$('#CupP').click(function(){
		
		btn = $('#lead_update').css("display");
		
		if(btn == "none") {
			$('#lead_update').css("display","block");
			$('#lead_cancel').css("display","block");
		} 
		else {
			$('#lead_insert').css("display","none");
		}
	});
}