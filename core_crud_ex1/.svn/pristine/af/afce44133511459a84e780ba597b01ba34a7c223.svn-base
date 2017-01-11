/**
 * 함수 목록
 * searchCustcompListPopup(ctx)					:	영업기회 검색창 고객 리스트 팝업
 * custcompListPopup(ctx)						:	영업기회 상세정보 고객 리스트 팝업
 * inputCustNm(custNm,leadId,custId,custType)	:	고객 이름 입력 함수
 * opptAddBtn()									:	영업기회 추가 버튼 클릭 시 ( css, readonly, disabled -> false )
 * opptMdfyBtn()								:	영업기회 편집 버튼 클릭 시 ( css, readonly, disabled -> false )
 * opptCancelBtn()								:	영업기회 취소 버튼 클릭 시 ( css, readonly, disabled -> true )
 * opptAdd()									:	영업기회 추가
 * opptModify()									:	영업기회 편집
 * readDetail()									:	detail form 비활성화 함수
 * actAllCheck()								:	영업활동 모두 선택
 * estimAllCheck()								:	견적 모두 선택
 * addOperatingA(ctx)							:	영업활동 추가 팝업
 * estimateAdd(ctx)								:	견적 추가 팝업
 * opptActiveDetailPopup(actvyId)				: 	영업활동 상세정보 팝업
 * opptEstimDetail(estimId)						:	견적 상세정보 팝업
 * opptActiveDelete()							:	영업활동 삭제								
 * opptEstimDelete()							:	견적 삭제
 * startCalendar(ctx)							:	달력 띄우기
 * comma(str)									:	컴마 입력 함수
 * uncomma(str)									:	컴마 해제 함수
 */


$(function(){
	var buttonStatus = "";
	var ctx = $("#ctx").val();
	addOperatingA(ctx);
	actAllCheck();
	estimAllCheck();
	searchCustcompListPopup(ctx);
	custcompListPopup(ctx);
	estimateAdd(ctx);
	startCalendar(ctx);
});

//숫자인지 검사
function isValidNumber(obj){
	if(obj.value.length > 0){
		if(isNaN(obj.value)){
			alert('숫자만 입력 가능합니다.');
			obj.value = "";
			return;
		}		
	}
}

//영업기회 검색창 고객 리스트 팝업
function searchCustcompListPopup(ctx){
	$('#searchCustomer').click(function(){
		window.open(ctx+'/opptSearchCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');		
	});  
}
//영업기회 상세정보 고객 리스트 팝업
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/opptCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
//고객 이름 입력 함수
function inputCustNm(custNm,leadId,custId,custType){	
	if(custType == 'search'){
		$('#scust_nm').val(custNm);
		$('#scust_id').val(custId);
	}else if(custType == 'normal'){
		$('#cust_nm').val(custNm);
		$('#cust_id').val(custId);
		$('#lead_id').val(leadId);
	}
}

//추가 버튼 기능
function opptAddBtn() {
	//focus, css, readonly, disabled false 상태로 변경
	//값 초기화
	$("#opptDetail #sales_oppt_nm").focus();
	$("#opptDetail input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	}).val('');
	$("#opptDetail select").attr({
		disabled:false,
		style:'background-color:white'
	});
	// 버튼 활성화
	$("#opptDetail #cust_nm,#opptDetail #expt_fin_d").attr("readonly",true);
	$("#customer").attr("disabled",false);
	$("#memo").attr("style","resize: none; background-color:white;");
	$("#sales_oppt_stat_cd").children().eq(0).attr("selected", "selected");
	$("#sales_lev_cd").children().eq(0).attr("selected", "selected");
	$("#psblty_rate").children().eq(0).attr("selected", "selected");

	$("#opptDetail #customer").show();
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
}

// 편집 버튼 기능
function opptMdfyBtn() {
	//focus, css, readonly, disabled false 상태로 변경
	$("#opptDetail #sales_oppt_nm").focus();
	$("#opptDetail input[type='text'], textarea, input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	});
	$("#opptDetail select").attr({
		disabled:false,
		style:'background-color:white'
	});
	//버튼 활성화
	$("#opptDetail #cust_nm,#opptDetail #expt_fin_d,#opptDetail #sales_oppt_nm,#opptDetail #cust_nm").attr("readonly",true);
	$("#opptDetail #cust_nm,#opptDetail #expt_fin_d,#opptDetail #sales_oppt_nm,#opptDetail #cust_nm").css("background","rgba(234, 234, 234, 1)")
	$("#opptDetail #customer").hide();
	$("#customer").attr("disabled",false);
	$("#memo").attr("style","resize: none; background-color:white;");
	
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");	

}

// 취소 버튼 기능
function opptCancelBtn() {
	var ynChk = confirm("정말 취소하시겠습니까?");
	if(ynChk){
		// 버튼 활성화
		$("#opptDetail #customer").show();
		$("#baseBtnDiv").css("display", "block");
		$("#addBtnDiv").css("display", "none");
		$("#mdfBtnDiv").css("display", "none");
		//css, readonly, disabled true 상태로 변경
		$("#opptDetail input[type='text'], textarea, input[type='date']").attr({
			readonly:true,
			style:'background-color:#EAEAEA'
		});
		$("#opptDetail select").attr({
			disabled:true,
		});
		
		$("#customer").attr("disabled",true);
		$("#memo").attr("style","resize: none; background-color:#EAEAEA;");
		// 상세정보에 이전 값 넣기
		$("#cust_id").val($("#hcust_id").val());
		$("#lead_id").val($("#hlead_id").val());
		$("#sales_oppt_nm").val($("#hsales_oppt_nm").val());
		$("#cust_nm").val($("#hcust_nm").val());
		$("#expt_sales_amt").val($("#hexpt_sales_amt").val());
		$("#expt_fin_d").val($("#hexpt_fin_d").val());
		$("#sales_oppt_stat_cd").val($("#hsales_oppt_stat_cd").val()).attr("selected","selected");
		$("#psblty_rate").children().eq($("#hpsblty_rate").val()/10).attr("selected","selected");
		$("#sales_lev_cd").children().eq($("#hsales_lev_cd").val()).attr("selected","selected");
		$("#memo").val($("#hmemo").val());
	}
}
//영업기회 추가 함수
function opptAdd(){
	var ctx = $("#ctx").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var cust_id = $("#cust_id").val();
	var cust_nm = $("#cust_nm").val();
	var lead_id = $("#lead_id").val();
	var memo = $("#memo").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();

	if(sales_oppt_nm=="" || sales_oppt_nm==null){
		alert("영업기회명을 입력해 주세요.");
		return false;
	}else if(cust_id=="" || cust_id==null){
		alert("고객을 선택해 주세요.");
		return false;
	}else if(sales_oppt_stat_cd=="0" || sales_oppt_stat_cd==null){
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="0" || sales_lev_cd==null){
		alert("영업단계를 선택해 주세요.");
		return false;
	}else if(expt_sales_amt=="" || expt_sales_amt==null){
		alert("예상 매출액을 입력해 주세요");
		return false;
	}else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
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
			lead_id : lead_id,
			memo : memo
		},
		datatype : 'json',
		success:function(result){
			alert("영업기회가 추가되었습니다.");
			$("#opptDetail #customer").show();
			location.href = ctx + "/oppt";
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}
//영업기회 상세정보 수정 함수
function opptModify(){
	var sales_oppt_id = $("#salesId").val();
	var sales_oppt_nm = $("#sales_oppt_nm").val();
	var sales_lev_cd = $("#sales_lev_cd").val();
	var sales_lev_cd_nm = $("#sales_lev_cd option:selected").text();
	var expt_sales_amt = $("#expt_sales_amt").val();
	var expt_fin_d = $("#expt_fin_d").val();
	var psblty_rate = $("#psblty_rate").val();
	var sales_oppt_stat_cd = $("#sales_oppt_stat_cd").val();
	var sales_oppt_stat_cd_nm =  $("#sales_oppt_stat_cd option:selected").text();
	var cust_id = $("#cust_id").val();
	var lead_id = $("#lead_id").val();
	var cust_nm = $("#cust_nm").val();
	var memo = $("#memo").val();
	var pageNum = $("#pageNum").val();
	
	if(sales_oppt_nm=="" || sales_oppt_nm==null){
		alert("영업기회명을 입력해 주세요.");
		return false;
	}else if(cust_id=="" || cust_id==null){
		alert("고객을 선택해 주세요.");
		return false;
	}else if(sales_oppt_stat_cd=="0" || sales_oppt_stat_cd==null){
		alert("영업기회 상태를 선택해 주세요.");
		return false;
	}else if(sales_lev_cd=="0" || sales_lev_cd==null){
		alert("영업단계를 선택해 주세요.");
		return false;
	}else if(expt_sales_amt=="" || expt_sales_amt==null){
		alert("예상 매출액을 입력해 주세요");
		return false;
	}else if(sales_lev_cd=="" || sales_lev_cd==null){
		alert("예상마감일자를 선택해 주세요.");
		return false;
	}else if(psblty_rate=="0" || psblty_rate==null){
		alert("가능성을 선택해 주세요.");
		return false;
	}
	var ctx = $("#ctx").val();
	$.ajax({
		type : 'post',
		data : {
			pageNum : pageNum,
			cust_id : cust_id,
			lead_id : lead_id,
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
		url : ctx + '/opptModify',
		success:function(result){
			alert("수정되었습니다.");
			
			// 버튼 활성화
			$("#baseBtnDiv").css("display", "block");
			$("#addBtnDiv").css("display", "none");
			$("#mdfBtnDiv").css("display", "none");
			
			opportunityList(result.pageNum);
			//영업기회 수정이 정상적으로 되면 list에서 수정된 내용 반영
			$("#salesId").val(result.opptVO.sales_oppt_id);
			$("#cust_id").val(result.opptVO.cust_id);
			$("#lead_id").val(result.opptVO.lead_id);
			$("#hcust_id").val(result.cust_id); 
			$("#hlead_id").val(result.opptVO.lead_id);
			
			$("input[name=sales_oppt_nm]").val(result.opptVO.sales_oppt_nm);
			$("input[name=cust_nm]").val(result.opptVO.cust_nm); 
			$("#hsales_oppt_nm").val(result.opptVO.sales_oppt_nm);
			$("#hcust_nm").val(result.opptVO.cust_nm); 
		
			$("select[name=sales_oppt_stat_cd]").children().eq(result.opptVO.sales_oppt_stat_cd).attr("selected","selected");
			$("input[name=expt_sales_amt]").val(result.opptVO.expt_sales_amt);
			$("input[name=expt_fin_d]").val(result.opptVO.expt_fin_d);
			$("select[name=psblty_rate]").children().eq(result.opptVO.psblty_rate/10).attr("selected","selected");
			$("select[name=sales_lev_cd]").children().eq(result.opptVO.sales_lev_cd).attr("selected","selected");
			$("textarea[name=memo]").val(result.opptVO.memo);
			$("#hsales_oppt_stat_cd").val(result.opptVO.sales_oppt_stat_cd);
			$("#hexpt_sales_amt").val(result.opptVO.expt_sales_amt);
			$("#hexpt_fin_d").val(result.opptVO.expt_fin_d);
			$("#hpsblty_rate").val(result.opptVO.psblty_rate);
			$("#hsales_lev_cd").val(result.opptVO.sales_lev_cd);
			$("#hmemo").val(result.opptVO.memo);
			
			readDetail();
		},
		error:function(request){
			alert("error : " + request.status);
		}
	});
}
//입력창 비활성화 함수
function readDetail(){
	$("#opptDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #eaeaea'  
	});

	$("#opptDetail select").attr({
		disabled:true,
	});	
	$("#customer").attr("disabled",true);
	$("#memo").attr("style","resize: none;");
}

//영업활동 모두 선택
function actAllCheck(){
	$("#actAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#activeList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#activeList input[type=checkbox]").prop("checked",false);
		}
	});
}

//견적 모두 선택
function estimAllCheck(){
	$("#estimAllSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#estimList input[type=checkbox]").prop("checked",true);			
		}else{
			$("#estimList input[type=checkbox]").prop("checked",false);
		}
	});
}

//영업활동 추가 팝업
function addOperatingA(ctx){
	$('#act_opp_nm').click(function(){
		var salesId = $('#salesId').val();
		if(salesId == "" || salesId == null ){
			alert("영업기회를 선택해주세요.");
		}else{
		var list_sales_oppt_id = $('#salesId').val();
		var list_cust_id = $('#'+list_sales_oppt_id+' #list_cust_id').val();
		var list_cust_nm = $('#'+list_sales_oppt_id+' #list_cust_nm').text();
		
		window.open(ctx+'/opptActivePopup?list_sales_oppt_id='+list_sales_oppt_id+
				'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm,'newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}
	});
}
//견적 추가 팝업
function estimateAdd(ctx){
	$('#estimateAdd').click(function(){
		var hsales_lev_cd = $("#hsales_lev_cd").val();
		var salesId = $('#salesId').val();
		var sales_lev_cd = $('#'+salesId+' #list_sales_lev_cd').val();
		if(salesId == "" || salesId == null ){
			alert("영업기회를 선택해주세요.");
		}else if(sales_lev_cd == "0001" || sales_lev_cd == "0004"){
			alert("영업단계가 \"제안\", \"견적\"일 때 견적 추가가 가능합니다.");
		}else{
		var list_sales_oppt_id = $('#salesId').val();
		var list_cust_id = $('#'+list_sales_oppt_id+' #list_cust_id').val();
		var list_cust_nm = $('#'+list_sales_oppt_id+' #list_cust_nm').text();
		var list_sales_oppt_nm = $('#'+list_sales_oppt_id+' #list_sales_oppt_nm').text();
		var pageNum=$('#pageNum').val();
		window.open(ctx+'/opptEstimatepopup?list_sales_oppt_id='+list_sales_oppt_id+'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&list_sales_oppt_nm='+list_sales_oppt_nm+'&pageNum='+pageNum+'&flag=0','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
			}
		});
}


//영업활동 상세정보 팝업
function opptActiveDetailPopup(actvyId){
	var popup;
	popup=window.open('opptActiveDetailPopup?actvyId='+actvyId
			,'newwindow','width=500, height=600, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}

//견적 상세정보 팝업
function opptEstimDetail(estimId){
	var ctx = $('#ctx').val();
	var list_sales_oppt_id = $('#salesId').val();
	var list_cust_id = $('#'+list_sales_oppt_id+' #list_cust_id').val();
	var list_cust_nm = $('#'+list_sales_oppt_id+' #list_cust_nm').text();
	var list_sales_oppt_nm = $('#'+list_sales_oppt_id+' #list_sales_oppt_nm').text();
	window.open(ctx+'/opptEstimDetail?list_sales_oppt_id='+list_sales_oppt_id+'&estimId='+estimId+'&list_cust_id='+list_cust_id+'&list_cust_nm='+list_cust_nm+'&list_sales_oppt_nm='+list_sales_oppt_nm+'&flag=1','newwindow','width=900, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
}


//영업활동 삭제
function opptActiveDelete(){
	var salesId = $('#salesId').val();
	if(salesId == "" || salesId == null ){
		alert("영업기회를 선택해주세요.");
	}else{
	if(confirm("삭제 하시겠습니까? ")){
		var opptId = $('#salesId').val();
		var sales_actvy_id = [];
		
		$('input[name=sales_actvy_id]:checked').each(function(){
			sales_actvy_id.push($(this).val());
		});
		$.ajax({
			type : 'get',
			data :  { sales_actvy_id : sales_actvy_id },
			datatype : 'json',
			url : 'opptActiveDelete',
			success:function(result){
				alert("삭제되었습니다.");
				viewSalesActive(opptId);
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	  }
	}
}

//견적 삭제
function opptEstimDelete(){
	var salesId = $('#salesId').val();
	if(salesId == "" || salesId == null ){
		alert("영업기회를 선택해주세요.");
	}else{
	if(confirm("삭제 하시겠습니까? ")){
		var opptId = $('#salesId').val();
		var estim_id = [];
		$('input[name=estim_id]:checked').each(function(){
			estim_id.push($(this).val());
		});
		$.ajax({
			type : 'get',
			data :  { estim_id : estim_id },
			datatype : 'json',
			url : 'opptEstimDelete',
			success:function(result){
				alert("견적이 삭제되었습니다.");
				estimList(opptId);
			},
			error:function(request){
				alert("error : " + request.status);
			}
		});
	   }
	}
 }

//달력띄우기
function startCalendar(ctx){
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
	/*    $('.ui-datepicker select.ui-datepicker-year').css('background-color', '#8C8C8C');*/

}
//컴마 입력 함수
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//컴마 해제 함수
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}