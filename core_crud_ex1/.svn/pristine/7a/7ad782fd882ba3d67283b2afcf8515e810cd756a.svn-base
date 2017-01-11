/**
 * 함수 목록
 * custcompListPopup(ctx)						:	견적 상세정보 고객 리스트 팝업
 * actOpptListPopup(ctx)						:	견적 영업기회 리스트 팝업
 * inputCustNm(custNm,custId)					:	고객명 입력 함수
 * inputOpptNm(opptNm,opptId)					:	영업기회명 입력 함수
 * estAddBtn()									:	견적 추가 버튼 클릭 시 ( css, readonly, disabled -> false )
 * estMdfyBtn()									:	견적 편집 버튼 클릭 시 ( css, readonly, disabled -> false )
 * save_Click(ctx)								:	견적 저장 버튼 클릭 시 ( 추가 or 편집 실행)
 * cancel_Click()								:	견적 취소 버튼 클릭 시 ( css, readonly, disabled -> true )
 * prodList(ctx)								:	상품 목록 리스트 팝업
 * inputProd(prod_id,prod_nm,prod_sales_amt)	:	상품 입력 함수	
 * prodallCheck()								:	상품 전체 선택
 * prodChkCancel()								:	상품 전체 선택 박스 해제
 * prodDelete()									:	상품 삭제
 * prodChange()									:	상품 금액 변경
 * prodChacgeRealTime()							:	상품 금액 실시간 변경
 * comma(str)									:	컴마 입력 함수
 * uncomma(str)									:	컴마 해제 함수
 * onlyNumber(event)							:	숫자만 입력
 * removeChar(event)							:	숫자 아닌값 replace
 * estAdd(ctx)									:	견적 추가
 * estUpdate(ctx)								:	견적 편집
 * readDetail()									:	detail form 비활성화 함수
 * activeDetail()								:	detail form 활성화 함수							
 * clearDetail()								:	detail form 값 제거 함수
 */

$(function(){	
	var buttonStatus = "";
	var ctx = $("#ctx").val();
	custcompListPopup(ctx);
	actOpptListPopup(ctx);
	prodList(ctx);
	prodallCheck();
	prodDelete();
	prodChacgeRealTime();
});

var buttonStatus;				//편집인지 추가인지 버튼의 상태 저장
var prodDeleteProdId=[];		//편집 시 삭제된 상품의 상품ID List
var prodDeleteEstimId=[];		//편집 시 삭제된 상품의 상품ID List 
var prodAddId =[];				//편집 시 추가된 상품의 상품ID List

//고객사 리스트 팝업
function custcompListPopup(ctx){
	$('#customer').click(function(){
		window.open(ctx+'/estCustcompList','newwindow','width=500, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}
//영업기회 리스트 팝업
function actOpptListPopup(ctx){
	$('#opptSelect').click(function(){
		if($('#inputCust').val()=='true'){
		window.open(ctx+'/estActOpptList?cust_id='+$('#cust_id').val()+'','newwindow2','width=850, height=400, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
		}else{
			alert('고객을 먼저 선택해주세요.');
			return;
		}
	});
}
//고객명 입력 함수
function inputCustNm(custNm,custId){	
	$('#cust_nm').val(custNm);
	$('#cust_id').val(custId);
	$('#inputCust').val('true');
}
//영업기회명 입력 함수
function inputOpptNm(opptNm,opptId){
	$('#sales_oppt_nm').val(opptNm);
	$('#sales_oppt_id').val(opptId);
}
//견적 추가 버튼 클릭 시
function estAddBtn(){
	$('#inputCust').val('false');
	buttonStatus = "add";
	clearDetail();
	activeDetail();
	$("#estim_nm").focus();
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "block");
	$("#mdfBtnDiv").css("display", "none");
}
//견적 편집 버튼 클릭 시
function estMdfyBtn(){
	buttonStatus = "modify";
	activeDetail();
	$("#estim_nm").focus();
	$("#baseBtnDiv").css("display", "none");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "block");
	$("#customer").attr("disabled", true);
	$("#opptSelect").attr("disabled", true);
	
}
//저장 버튼을 누른경우 이전에 누른 버튼 상태에 맞는 함수 실행
function save_Click(ctx){
	if(buttonStatus == "add"){
		estAdd(ctx);	
	}else if(buttonStatus == "modify"){
		estUpdate(ctx);
	}
}
//취소버튼 클릭시 입력창 비활성화 및 상세정보 값 clear
function cancel_Click(){
	prodDeleteProdId=[]; 
	prodDeleteEstimId=[]; 
	prodAddId =[];
	$("#baseBtnDiv").css("display", "block");
	$("#addBtnDiv").css("display", "none");
	$("#mdfBtnDiv").css("display", "none");
	
	$("#customer").attr("disabled",true);
	$("#opptSelect").attr("disabled",true);
	$("#prodListBtn").attr("disabled",true);
	$("#prodDelete").attr("disabled",true);
	var estim_id = $('#estim_id').val();
	if(estim_id==null || estim_id==''){
		$("#mdfBtn").attr("disabled", true);
		clearDetail();
		readDetail();
	}else{
		$("#mdfBtn").attr("disabled", false);
		estDetail(estim_id);		
	}
}
//상품 목록 리스트 팝업
function prodList(ctx){
	$('#prodListBtn').click(function(){
		window.open(ctx+'/estProdList','newwindow3','width=550, height=560, toolbar=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	});
}

//상품 입력 함수
function inputProd(prod_id,prod_nm,prod_sales_amt){
		$("#estimatetbody .empty").remove();
		var data = $('#eduCode').val();
		var tmp = data.replace("[", "");
		var tmp2 = tmp.replace("]", "");
		
		var arr = tmp2.split(',');
		unit = '<option value=0>선택</option>';
		for(var i=0; i<arr.length ; i=i+2){
			unit += '<option value='+arr[i]+'>'+arr[i+1]+'</option>';
		}
	$('#salesPriceSum').text( parseInt($('#salesPriceSum').text()) + parseInt(prod_sales_amt));
	$('#countSum').text(parseInt($('#countSum').text())+parseInt(1));
	var like = 0;
	if($("#estimatetbody tr").length == 0){
		if(buttonStatus=='modify'){
			prodAddId.push(prod_id);
		}
		$('#estimatetbody').append(
				'<tr id="priceline" class='+prod_id+' name="prt">'+
				'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+' onclick="prodChkCancel();">'+ 
				'<input type="hidden" id="prod_sales_amt" value='+prod_sales_amt+'>'+'</th>'+
				'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
				'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;" name="estim_qty" id="estim_qty" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
				'<td style="width: 27%;" name="prod_sales_amt">'+prod_sales_amt+'</td>'+
				'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount" value=0 onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
				 '<select id="unit" style="width: 25%;">'+
				 unit+
				 '</select>'+'</td>'+
				'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
				'</tr>'
		);
		like = 1;
	}else{
		$("#estimatetbody tr").each(function(){
			var old_prodId = $(this).attr("class");
			if(prod_id == old_prodId){
				var count = $(this).children().eq(2).children().val();
				$(this).children().eq(2).children().val(parseInt(count)+parseInt(1));
				like=1;
			}
		});
		if(like==0){
			if(buttonStatus=='modify'){
				prodAddId.push(prod_id);
			}
			$('#estimatetbody').append(
					'<tr id="priceline" class='+prod_id+' name="prt">'+
					'<th style="width: 3%;"><input type="checkbox" name="prod_id" id="prod_id" value='+prod_id+' onclick="prodChkCancel();">'+ 
					'<input type="hidden" id="prod_sales_amt" value='+prod_sales_amt+'>'+'</th>'+
					'<td style="width: 32%;" id="prod_nm">'+prod_nm+'</td>'+
					'<td style="width: 8%;"><input type=number style="width: 80%; text-align: center;"  name="estim_qty" id="estim_qty" value=1  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)"></td>'+			
					'<td style="width: 27%;" name="prod_sales_amt">'+prod_sales_amt+'</td>'+
					'<td style="width: 15%;" ><input type=number style="width: 50%; text-align: center;" id="discount" name="discount"  value=0  onkeydown="return onlyNumber(event)" onkeyup="removeChar(event)">'+
					'<select id="unit" style="width: 25%;" >'+
					 unit+
					 '</select>'+'</td>'+
					'<td style="width: 15%;" id="sup_price" name="sup_price">0</td>'+
					'</tr>'
			);
		}
	}
	for(var i=$("#estimatetbody tr").length; i <= 4; i++){
		$('#estimatetbody').append(
				'<tr id="priceline" class="empty">'+
				'<th style="width: 3%;"></th>'+
				'<td style="width: 32%;"></td>'+
				'<td style="width: 8%;"></td>'+
				'<td style="width: 27%;"></td>'+
				'<td style="width: 15%;"></td>'+
				'<td style="width: 15%;"></td>'+
				'</tr>'
				);
	}
	prodChange();	
}
//상품 전체 선택
function prodallCheck(){
	$("#allSelect").click( function(){
		var chk = $(this).is(":checked");
		if(chk){
			$("#estimatetbody tr[class!=empty] input[type=checkbox]").prop("checked",true);			
		}else{
			$("#estimatetbody tr[class!=empty] input[type=checkbox]").prop("checked",false);
		}
	});
}
//상품 전체 선택 박스 해제 함수
function prodChkCancel(){
	$("#allSelect").prop("checked",false);
}
//상품 삭제
function prodDelete(){
	$("#prodDelete").click(function(){
		if(confirm("삭제 하시겠습니까? ")){
			$("#estimatetbody input[type=checkbox]:checked").each( function(){
				var classVal =  $(this).val();
				$("."+classVal).remove();
				if(buttonStatus=='modify'){
					prodDeleteProdId.push(classVal);
					prodDeleteEstimId.push($('#estim_id').val());
				}
			});
				prodChange();	
		}
	});
}
//상품 금액 변경
function prodChange(){
	var countSum = 0;
	var salesPriceSum = 0;
	var discountSum = 0;
	var supplyPriceSum = 0;
	$("#estimatetbody tr[class!=empty]").each(function(){
		var countObj=$(this).children().eq(2).children();
		var salesamtObj=$(this).children().eq(0).children().eq(1);
		var count = countObj.val();
		if(count==""){
			count="0";
		}
		var sellamt =  $(this).children().eq(3).text();
		var disvalObj = $(this).children().eq(4).children().eq(0);
		var amt = $(this).children().eq(3).text();
		var salesamt = $(this).children().eq(0).children().eq(1).val();
		var sellamt =  parseInt(salesamt) * parseInt(count);			
		if(sellamt==""){
			sellamt="0";
		}
		amt = sellamt;
		$(this).children().eq(3).text(comma(amt));
		salesPriceSum = parseInt(sellamt) + parseInt(salesPriceSum);
		countSum = parseInt(count) + parseInt(countSum);
		var disval =  disvalObj.val();
		if(disval==""){
			disval="0";
		}
		var unit = $(this).children().eq(4).children().eq(1).val();
		var disamt = 0;
		if(unit == "0001"){
			 disamt = parseInt(amt) - parseInt(disval);
			 discountSum = parseInt(disval) + parseInt(discountSum);
		}else if(unit == "0002"){
			var dis = parseInt(amt) * (parseInt(disval)/100);
			disamt = parseInt(amt) - parseInt(dis);
			 discountSum = parseInt(dis) + parseInt(discountSum);
		}else if(unit =="0"){
			disamt = parseInt(amt);
			$(this).children().eq(4).children().eq(0).val("0");
		}
		if(isNaN(disamt) || parseInt(disamt)<0){
			disamt="0";
		}
		$(this).children().eq(5).text(comma(disamt));
		 var realamt = $(this).children().eq(5).text();
		 supplyPriceSum = parseInt(disamt) + parseInt(supplyPriceSum);
	});
	$("#countSum").text(comma(countSum));
	$("#salesPriceSum").text(comma(salesPriceSum));
	$("#discountSum").text(comma(discountSum));
	$("#supplyPriceSum").text(comma(supplyPriceSum));	
}
//상품 금액 실시간 변경
function prodChacgeRealTime(){
	$("#estimatetbody").bind('input', function(event) { 
//		alert("bind");
		var size = event.target.value;
	    var target = $(event.target);
	    var id = target.attr("id");
	    var count = target.parent().parent().children().eq(2).children().val();
	    var salesamt = target.parent().parent().children().eq(0).children().eq(1).val();
	    var sellamt =  parseInt(salesamt) * parseInt(count);
	    var unit = target.parent().children().eq(1).val();
	   if(id=='discount'){
		   if(unit=='0001'){
			   if(parseInt(size)>parseInt(sellamt)){
				   alert("판매가 보다 높게 지정할 수 없습니다.");
				   event.target.value = event.target.value.substr(0, event.target.value.length-1);  
			   }
		   }else if(unit=='0002'){
			   if(parseInt(size) > parseInt(100)){
				   alert("판매가 보다 높게 지정할 수 없습니다.");
				   event.target.value = event.target.value.substr(0, event.target.value.length-1);
			   }
		   }
	   }else if(id=='estim_qty'){
		   if(parseInt(count) >= parseInt(100)){
			   alert("수량은 1~99까지 가능합니다.");
			   event.target.value = event.target.value.substr(0, event.target.value.length-1);			   
		   }else if(parseInt(count) <= parseInt(0)){
			   alert("수량은 1~99까지 가능합니다.");
			   event.target.value = "1";	
		   }
		   
	   }
//	   event.target.value = comma(event.target.value);
//	   alert(event.target.value);
	    prodChange();
	});
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
//숫자만 입력
function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 188 ){
//    	alert("keyID : " + keyID);
//    	event.target.value = comma(event.target.value);
    	return;    	
    } 
    else{
    	return false;
    }
}
//숫자 아닌값 replace
function removeChar(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ){
    	return;
    }
    else{
//    	event.target.value = comma(event.target.value);
    	event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
}
//견적 추가
function estAdd(ctx){
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var estim_qty = [];
	var prod_sales_amt = $('#prod_sales_amt').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var estim_valid_d = $('#estim_valid_d_detail').val();
	var estim_lev_cd = $('#estim_lev_cd_detail').val();
	var cust_id = $('#cust_id').val();
	var estim_nm = $('#estim_nm').val();
	var est_list = [];
	var memo = $('#memo').val();
	var discount_unit_cd = [];
	var unit_check =0;
	if(estim_nm=="" || estim_nm==null){
		alert("견적명을 입력해 주세요.");
		return false;
	}else if(estim_lev_cd=="0"|| estim_lev_cd==null){
		alert("견적단계를 선택해 주세요");
		return false;
	}else if(estim_valid_d==""|| estim_valid_d==null){
		alert("견적유효일자를 선택해 주세요");
		return false;
	}
	$("#estimatetbody tr[class!=empty]").each(function(){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0'){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		estim_qty.push(uncomma($(this).children().eq(2).children().val()));
		sales_price.push(uncomma($(this).children().eq(3).text()));
		discount.push(uncomma($(this).children().eq(4).children().val()));
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});

	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}
	if(est_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	$.ajax({
		type : 'post',
		url : ctx+'/estAdd',
		dataType : 'json',
		data : {
			estim_valid_d : estim_valid_d,
			estim_lev_cd : estim_lev_cd,
			cust_id : cust_id,
			estim_nm : estim_nm,
			sales_oppt_id : sales_oppt_id,
			memo : memo,
			est_list : est_list
		},
		success:function(){
			alert("정상적으로 등록되었습니다.");
			list(1);
			location.href = ctx + "/est";
		},
		error:function(request){
			alert("error : " + request.status)
		}
	});
}
//견적 편집
function estUpdate(ctx){
	var page = $('#ccPageNum').val();
	var estim_id = $('#estim_id').val();
	var prod_id = [];
	var prod_nm = [];
	var sales_oppt_id = $('#sales_oppt_id').val();
	var estim_qty = [];
	var prod_sales_amt = $('#prod_sales_amt').text();
	var sales_price = [];
	var discount= [];
	var sup_price = [];
	var estim_valid_d = $('#estim_valid_d_detail').val();
	var estim_lev_cd = $('#estim_lev_cd_detail').val();
	var cust_id = $('#cust_id').val();
	var estim_nm = $('#estim_nm').val();
	var est_list = [];
	var discount_unit_cd = [];
	var memo = $('#memo').val();
	var cd = 0;
	var unit_check=0;
	var estimQtyCheck = [];
	var discountCheck = [];
	if(estim_nm=="" || estim_nm==null){
		alert("견적명을 입력해 주세요.");
		$('#estim_nm').focus();
		return false;
	}else if(estim_lev_cd=="0"|| estim_lev_cd==null){
		alert("견적단계를 선택해 주세요");
		$('#estim_lev_cd_detail').focus();
		return false;
	}else if(estim_valid_d==""|| estim_valid_d==null){
		alert("견적유효일자를 선택해 주세요");
		$('#estim_valid_d_detail').focus();
		return false;
	}
	$("#estimatetbody tr[class!=empty]").each(function(i,data){
		cd  = $(this).children().eq(4).children().eq(1).val();
		if(cd =='0' || cd==null){
			unit_check++;
		}
		discount_unit_cd.push(cd);
		prod_id.push($(this).children().children().val());
		prod_nm.push($(this).children().eq(1).text());
		cd = uncomma($(this).children().eq(2).children().val());
		if(cd ==''||cd==null){
			estimQtyCheck.push(i);
		}else{
			estim_qty.push(cd);			
		}
		sales_price.push(uncomma($(this).children().eq(3).text()));
		cd = uncomma($(this).children().eq(4).children().val());
		if(cd ==''||cd==null){
			discountCheck.push(i);
		}else{
			discount.push(cd);
		}
		sup_price.push(uncomma($(this).children().eq(5).text()));
		est_list.push(prod_id.pop());
		est_list.push(prod_nm.pop());
		est_list.push(estim_qty.pop());
		est_list.push(sales_price.pop());
		est_list.push(discount.pop());
		est_list.push(sup_price.pop());
		est_list.push(discount_unit_cd.pop());
	});
	if(estimQtyCheck.length > 0){
		alert("수량을 입력해 주세요.");
		$("#estimatetbody tr[class!=empty]").eq(estimQtyCheck[0]).children().eq(2).children().focus();
		return false;
	}
	if(discountCheck.length > 0){
		alert("할인 가격을 입력해 주세요.");
		$("#estimatetbody tr[class!=empty]").eq(discountCheck[0]).children().eq(4).children().focus();
		return false;
	}
	if(unit_check > 0 ){
		alert("할인 단위를 선택해 주세요.");
		return false;
	}
	if(est_list.length==0){
		alert("상품을 추가해 주세요");
		return false;
	}
	$.ajax({
		url : ctx+'/estUpdate',
		dataType : 'json',
		type : 'post',
		data : {
			estim_id : estim_id,
			estim_valid_d : estim_valid_d,
			estim_lev_cd : estim_lev_cd,
			cust_id : cust_id,
			estim_nm : estim_nm,
			sales_oppt_id : sales_oppt_id,
			prodAddId : prodAddId,
			prodDeleteProdId : prodDeleteProdId,
			prodDeleteEstimId : prodDeleteEstimId,
			memo : memo,
			est_list : est_list
		},
		success:function(){
			alert("정상적으로 수정 되었습니다.");
			readDetail();
			$("#baseBtnDiv").css("display", "block");
			$("#addBtnDiv").css("display", "none");
			$("#mdfBtnDiv").css("display", "none");
			list(page);
		},
		error:function(request){
			alert("error : " + request.status)
		}
	});
}
//입력창 비활성화 함수
function readDetail(){
	$("#estDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:true,
		style:'background-color: #EAEAEA'  
	});
	$("#estDetail select").attr({
		disabled:true,
		style:'background-color: white'
	});
	$("#estDetail #memo").attr({
		readonly:true,
		style:'background-color: #EAEAEA; width: 90%;'  
	});
	$("#customer").attr("disabled",true);
	$("#opptSelect").attr("disabled",true);
	$("#prodListBtn").attr("disabled",true);
	$("#prodDelete").attr("disabled",true);
	$("#estimatetbody tr[class!=empty]").each(function(){
		$(this).children().eq(2).children().eq(0).attr("readonly",true); //count 입력창 활성화
		$(this).children().eq(4).children().eq(0).attr("readonly",true);
		$(this).children().eq(4).children().eq(1).attr("disabled",true);
	});
}
//detail form 활성화 함수
function activeDetail(){
	$("#estDetail input[type='text'],textarea,input[type='date']").attr({
			readonly:false,
			style:'background-color:white'
	});
	$("#estDetail select").attr({
		disabled:false,
		style:'background-color:white'
	});
	$("#estDetail input[name='cust_nm'],#estDetail input[name='sales_oppt_nm'],#estDetail #estim_valid_d_detail").attr({
		readonly:true,
		style:'background-color:white'
	});
	$("#estDetail #memo").attr({
		readonly:false,
		style:'background-color:white; width: 90%;'
	});
	$("#customer").attr("disabled",false);
	$("#opptSelect").attr("disabled",false);
	$("#prodListBtn").attr("disabled",false);
	$("#prodDelete").attr("disabled",false);
	$("#estimatetbody tr[class!=empty]").each(function(){
		$(this).children().eq(2).children().eq(0).attr("readonly",false); //count 입력창 활성화
		$(this).children().eq(4).children().eq(0).attr("readonly",false);
		$(this).children().eq(4).children().eq(1).attr("disabled",false);
	});
}
//상세정보 값 clear 함수 
function clearDetail(){
	$("#estDetail input[type='text'],textarea,input[type='date']").attr({
		readonly:false,
		style:'background-color:white'
	}).val("");
	$("#estDetail select").attr({
		disabled:false,
		style:'background-color:white'
	});
	$("#estDetail input[name='cust_nm'],#estDetail input[name='sales_oppt_nm']").attr({
		readonly:true,
		style:'background-color:white'
	});
	$("#estDetail select").each( function(){
		$(this).children().eq(0).attr("selected","selected");
	});
	$("#estDetail #memo").attr({
		disabled:false,
		style:'background-color:white; width: 90%;'
	});
	$("#countSum").text("0");
	$("#salesPriceSum").text("0");
	$("#discountSum").text("0");
	$("#supplyPriceSum").text("0");
	$('#estimatetbody').children().remove();
}
